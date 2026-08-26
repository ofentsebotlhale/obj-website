import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, Bebas_Neue } from 'next/font/google'
import './globals.css'
import { CustomCursor } from '@/components/custom-cursor'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { CookieBanner } from '@/components/cookie-banner'
import { FirebaseAnalytics } from '@/components/firebase-analytics'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { AnalyticsLoader } from '@/components/analytics-loader'
import { SmoothScroll } from '@/components/smooth-scroll'

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
})

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'OBX Studio | Web design Studio in Johannesburg',
  description:
    'A modern web design studio based in Johannesburg. Tailor-made websites, brand experiences, and digital builds for brands that want to stand out.',
  metadataBase: new URL('https://obxstudio.co.za'),
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'OBX Studio',
    description: 'A few skilled humans doing the work of many.',
    type: 'website',
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
      className={`${mono.variable} ${bebas.variable} light bg-white`}
    >
      <body className="font-sans antialiased noise-overlay custom-cursor-active relative bg-white">
        <AnalyticsLoader />
        <FirebaseAnalytics />
        <a 
          href="#main-content" 
          className="focus:fixed focus:left-6 focus:top-6 focus:translate-y-0 focus:z-[9999] bg-background text-foreground border border-border/60 py-2.5 px-4 rounded font-mono text-xs uppercase tracking-widest pointer-events-none focus:pointer-events-auto transition-transform"
          style={{
            position: 'absolute',
            left: '-9999px',
            top: '0px',
          }}
        >
          Skip to main content
        </a>
        <CustomCursor />
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

