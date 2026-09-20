import { NextRequest, NextResponse } from 'next/server'

// Force the API route to be dynamically rendered
export const dynamic = 'force-dynamic'

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// In-memory rate limiting store: IP -> array of request timestamps
const ipRequestCounts = new Map<string, number[]>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const timestamps = ipRequestCounts.get(ip) || []

  // Filter timestamps within the current window
  const recentTimestamps = timestamps.filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS
  )

  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    ipRequestCounts.set(ip, recentTimestamps)
    return false
  }

  recentTimestamps.push(now)
  ipRequestCounts.set(ip, recentTimestamps)

  // Periodic cleanup if map grows too large
  if (ipRequestCounts.size > 1000) {
    for (const [key, times] of ipRequestCounts.entries()) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        ipRequestCounts.delete(key)
      }
    }
  }

  return true
}

export async function POST(req: NextRequest) {
  try {
    // 1. In-memory rate limiting (5 requests per IP per 10 minutes)
    const forwardedFor = req.headers.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1'

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await req.json().catch(() => null)
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { error: 'Invalid form submission. Please check your inputs.' },
        { status: 400 }
      )
    }

    const { name, email, company, message, website, need, budget, timeline } = body

    // 2. Honeypot check: If website is non-empty, silently succeed without calling Formspree
    if (typeof website === 'string' && website.trim().length > 0) {
      return NextResponse.json({ success: true })
    }

    // 3. Validation:
    // name, email, message must be non-empty strings
    // email must match basic regex
    // length caps: name 100, email 254, company 100, message 5000
    const isInvalid =
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      !name.trim() ||
      !email.trim() ||
      !message.trim() ||
      !EMAIL_REGEX.test(email.trim()) ||
      name.trim().length > 100 ||
      email.trim().length > 254 ||
      message.trim().length > 5000 ||
      (company !== undefined &&
        company !== null &&
        (typeof company !== 'string' || company.trim().length > 100))

    if (isInvalid) {
      return NextResponse.json(
        { error: 'Invalid form submission. Please check your inputs.' },
        { status: 400 }
      )
    }

    const formId =
      process.env.VITE_FORMSPREE_FORM_ID ||
      process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ||
      process.env.FORMSPREE_FORM_ID

    if (!formId) {
      console.error('Formspree form ID is not configured.')
      return NextResponse.json(
        { error: 'Unable to send message at this time. Please try again later.' },
        { status: 500 }
      )
    }

    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        company: typeof company === 'string' ? company.trim() : undefined,
        need,
        budget,
        timeline,
        message: message.trim(),
        _replyto: email.trim(),
        _subject: `New message from ${name.trim() || 'Website'}`,
      }),
    })

    if (!response.ok) {
      const errData = await response.json().catch(() => null)
      console.error('Formspree returned an error:', errData || response.statusText)
      // Never return Formspree's raw error body or details to client
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error submitting contact form:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
