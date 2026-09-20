import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blogs'
import { projects } from '@/lib/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://obxstudio.co.za'
  const defaultDate = new Date('2026-07-21')

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
    lastModified: defaultDate,
    priority: page === '' ? 1 : ['/privacy', '/terms'].includes(page) ? 0.3 : 0.8,
  }))

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: defaultDate,
    priority: 0.7,
  }))

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.6,
  }))

  return [...staticPages, ...projectPages, ...blogPages]
}

