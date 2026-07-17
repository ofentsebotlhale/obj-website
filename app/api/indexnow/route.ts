import { NextRequest, NextResponse } from 'next/server'
import { blogPosts } from '@/lib/blogs'

const HOST = 'obxstudio.co.za'
const KEY = '6200953794164cb8b1a91e2a5726bed6'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`

export async function GET() {
  try {
    const staticPages = [
      '',
      '/studio',
      '/services',
      '/services/web-design',
      '/services/web-development',
      '/work',
      '/blog',
      '/contact',
      '/privacy',
      '/terms',
    ]

    const sitemapUrls = [
      ...staticPages.map(page => `https://${HOST}${page}`),
      ...blogPosts.map(post => `https://${HOST}/blog/${post.slug}`)
    ]

    return NextResponse.json({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urls: sitemapUrls,
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { urls } = await req.json()

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: 'Invalid URL list provided. Must be a non-empty array of strings.' },
        { status: 400 }
      )
    }

    // Clean and validate URLs belong to the host
    const validUrls = urls.map(url => url.trim()).filter(url => {
      try {
        const parsed = new URL(url)
        return parsed.hostname === HOST || parsed.hostname === `www.${HOST}`
      } catch {
        return false
      }
    })

    if (validUrls.length === 0) {
      return NextResponse.json(
        { error: `None of the provided URLs belong to the host '${HOST}'.` },
        { status: 400 }
      )
    }

    const payload = {
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: validUrls
    }

    // Let's submit to Bing as the primary search engine for IndexNow
    const bingEndpoint = 'https://www.bing.com/indexnow'
    const indexnowEndpoint = 'https://api.indexnow.org/indexnow'

    const results: Record<string, { status: number; text: string; ok: boolean }> = {}

    // We can try to send to both to make sure we hit everything
    const endpoints = {
      bing: bingEndpoint,
      indexnow: indexnowEndpoint
    }

    for (const [name, url] of Object.entries(endpoints)) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify(payload),
        })

        const text = await response.text()
        results[name] = {
          status: response.status,
          text: text || `Status Code ${response.status}`,
          ok: response.ok
        }
      } catch (e: any) {
        results[name] = {
          status: 500,
          text: e.message || 'Network error occurred during submission',
          ok: false
        }
      }
    }

    const overallSuccess = Object.values(results).some(r => r.ok)

    return NextResponse.json({
      success: overallSuccess,
      payload,
      results
    })

  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
