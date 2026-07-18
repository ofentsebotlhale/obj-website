/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    const cspHeader = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://www.clarity.ms https://*.clarity.ms 'sha256-LaGWpUrwiSCUqctnppkVfmVvtl3t39DhyP8ODT2PNzU=' 'sha256-u9x8WnyR+UMPUj4K+Ac3ON1s/WBHbQ4NSZohWa4x1+Q=' 'sha256-ArSGhinwM/Y9jE6KSvnZ2hFMYSjL2L0q28XbxkBF0Wo=' assets.apollo.io https://*.apollo.io;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' data: https://fonts.gstatic.com;
      img-src 'self' data: https:;
      connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://stats.g.doubleclick.net https://*.doubleclick.net https://formspree.io https://*.googlesyndication.com https://www.clarity.ms https://*.clarity.ms assets.apollo.io https://*.apollo.io;
      frame-ancestors 'self';
    `.replace(/\s{2,}/g, ' ').trim();

    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
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

