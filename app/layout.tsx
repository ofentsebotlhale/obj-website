import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
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

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'OBX Studio — Design, Branding & Development',
  description:
    'OBX Studio is a boutique digital studio crafting premium brand identities, editorial interfaces, and high-performance web experiences.',
  keywords: ['design studio', 'branding agency', 'web development', 'UI/UX', 'OBX Studio'],
  metadataBase: new URL('https://obxstudio.co.za'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'OBX Studio',
    description: 'A few skilled humans doing the work of many.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark bg-background`}
    >
      <head>
        {/* Content Security Policy for XSS mitigation */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://stats.g.doubleclick.net https://*.doubleclick.net https://formspree.io https://*.googlesyndication.com;"
        />

        {/* Preconnect to external assets */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>
      <body className="font-sans antialiased noise-overlay custom-cursor-active">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MT8P4PXR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
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
