import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blogs'

export const dynamic = 'force-static'

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
    lastModified: new Date(),
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
