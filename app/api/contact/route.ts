import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message } = await req.json()

    const formId = process.env.VITE_FORMSPREE_FORM_ID || process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID

    if (!formId) {
      console.error('Formspree form ID is not configured.')
      return NextResponse.json(
        { error: 'Formspree configuration error: Formspree ID is missing/not set.' },
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
        name,
        email,
        company,
        message,
        _replyto: email,
        _subject: `New message from ${name || 'Website'}`,
      }),
    })

    if (!response.ok) {
      const errData = await response.json()
      console.error('Formspree returned an error:', errData)
      return NextResponse.json(
        {
          error: errData.error || 'Failed to submit form to Formspree.',
          details: errData,
        },
        { status: response.status }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Error submitting contact form:', error)
    return NextResponse.json(
      { error: error?.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
