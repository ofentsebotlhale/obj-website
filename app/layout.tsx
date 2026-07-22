import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { SmoothScroll } from '@/components/smooth-scroll'
import { CustomCursor } from '@/components/custom-cursor'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { CookieBanner } from '@/components/cookie-banner'
import { FirebaseAnalytics } from '@/components/firebase-analytics'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { AnalyticsLoader } from '@/components/analytics-loader'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OBX Studio | Web Design Studio in Johannesburg',
  description:
    'OBX Studio is a boutique digital studio crafting premium brand identities, editorial interfaces, and high-performance web experiences.',
  keywords: ['design studio', 'branding agency', 'web development', 'UI/UX', 'OBX Studio'],
  metadataBase: new URL('https://obxstudio.co.za'),
  icons: {
    icon: [
      { url: '/favicon.svg?v=2', type: 'image/svg+xml', sizes: 'any' },
    ],
    shortcut: ['/favicon.svg?v=2'],
    apple: [
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'OBX Studio',
    description: 'A few skilled humans doing the work of many.',
    type: 'website',
  },
}

export const viewport: Viewport = {
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
      className={`${inter.variable} light bg-background`}
    >
      <body className="font-sans antialiased noise-overlay custom-cursor-active">
        <AnalyticsLoader />
        <FirebaseAnalytics />
        <a 
          href="#main-content" 
          className="focus:fixed focus:left-6 focus:top-6 focus:translate-y-0 focus:z-[9999] bg-background text-foreground border border-border/60 py-2.5 px-5 rounded font-mono text-xs uppercase tracking-widest pointer-events-none focus:pointer-events-auto transition-transform"
          style={{
            position: 'absolute',
            left: '-9999px',
            top: '0px',
          }}
        >
          Skip to main content
        </a>
        <CustomCursor />
        <LayoutWrapper>
          <SmoothScroll>
            <SiteNav />
            <main id="main-content" className="relative">
              {children}
            </main>
            <SiteFooter />
          </SmoothScroll>
        </LayoutWrapper>
        <CookieBanner />
      </body>
    </html>
  )
}
