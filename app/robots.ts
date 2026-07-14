import { MetadataRoute } from 'next'



export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://obxstudio.co.za/sitemap.xml',
  }
}
