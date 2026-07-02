import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blogs'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-static'

function getLastModified(pagePath: string) {
  try {
    const fullPath = path.join(process.cwd(), 'app', pagePath, 'page.tsx')
    const stats = fs.statSync(fullPath)
    return stats.mtime
  } catch (error) {
    return new Date('2026-06-30')
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://obxstudio.co.za'

  const pages = [
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

  const staticPages = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: getLastModified(page),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : ['/privacy', '/terms'].includes(page) ? 0.3 : 0.8,
  }))

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
