/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/botlhaleofentse',
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
