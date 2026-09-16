import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OBX Studio',
    short_name: 'OBX',
    description: 'A modern web design studio based in Johannesburg.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/logo.avif',
        sizes: '192x192',
        type: 'image/avif',
        purpose: 'any maskable',
      },
      {
        src: '/logo.avif',
        sizes: '512x512',
        type: 'image/avif',
        purpose: 'any maskable',
      }
    ],
  }
}
