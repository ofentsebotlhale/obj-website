import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'

import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { CookieBanner } from '@/components/cookie-banner'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { AnalyticsLoader } from '@/components/analytics-loader'
import { SmoothScroll } from '@/components/smooth-scroll'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'OBX Studio | Web Design Studio in Johannesburg',
  description:
    'A modern web design studio based in Johannesburg. Tailor-made websites, brand experiences, and digital builds for brands that want to stand out.',
  metadataBase: new URL('https://obxstudio.co.za'),
  icons: {
    icon: [
      { url: '/logo.avif', type: 'image/avif' },
    ],
    shortcut: '/logo.avif',
    apple: '/logo.avif',
  },
  openGraph: {
    title: 'OBX Studio | Web Design Studio in Johannesburg',
    description:
      'A modern web design studio based in Johannesburg. Tailor-made websites, brand experiences, and digital builds for brands that want to stand out.',
    url: 'https://obxstudio.co.za',
    siteName: 'OBX Studio',
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OBX Studio | Web Design Studio in Johannesburg',
    description:
      'A modern web design studio based in Johannesburg. Tailor-made websites, brand experiences, and digital builds for brands that want to stand out.',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'OBX Studio',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'light',
  themeColor: '#FFFFFF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${inter.variable} light bg-white`}
    >
      <body className="font-sans antialiased noise-overlay relative bg-white">
        <AnalyticsLoader />
        
        <a 
          href="#main-content" 
          className="focus:fixed focus:left-6 focus:top-6 focus:translate-y-0 focus:z-[9999] bg-background text-foreground border border-border/60 py-2.5 px-4 rounded font-sans text-xs uppercase tracking-widest pointer-events-none focus:pointer-events-auto transition-transform"
          style={{
            position: 'absolute',
            left: '-9999px',
            top: '0px',
          }}
        >
          Skip to main content
        </a>
        
        <SmoothScroll>
          <LayoutWrapper>
            <div id="smooth-scroll" className="overflow-clip w-full">
              <SiteNav />
              <main id="main-content" className="relative">
                {children}
              </main>
              <SiteFooter />
            </div>
          </LayoutWrapper>
        </SmoothScroll>

        <CookieBanner />
      </body>
    </html>
  )
}
