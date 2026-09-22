/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/ofentsebotlhale',
        permanent: false,
      },
      {
        source: '/x',
        destination: 'https://x.com/botlhale_88',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
