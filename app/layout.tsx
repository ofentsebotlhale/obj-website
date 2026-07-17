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

const geistSans = Inter({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Inter({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'OBX Studio — Design, Branding & Development',
  description:
    'OBX Studio is a boutique digital studio crafting premium brand identities, editorial interfaces, and high-performance web experiences.',
  keywords: ['design studio', 'branding agency', 'web development', 'UI/UX', 'OBX Studio'],
  metadataBase: new URL('https://obxstudio.co.za'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
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
      className={`${geistSans.variable} ${geistMono.variable} light bg-background`}
    >
      <head>
        {/* Favicon configurations to force new SVG favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />

        {/* Content Security Policy for XSS mitigation */}
        <meta
          key="csp"
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://www.clarity.ms https://*.clarity.ms; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://stats.g.doubleclick.net https://*.doubleclick.net https://formspree.io https://*.googlesyndication.com https://www.clarity.ms https://*.clarity.ms;"
        />
        <meta key="ranknibbler" name="ranknibbler-site-verification" content="8936626e0ecbef73e430012b9bff926a"/>
        {/* Preconnect to external assets */}
        <link key="gtm-preconnect" rel="preconnect" href="https://www.googletagmanager.com" />
        <link key="ga-preconnect" rel="preconnect" href="https://www.google-analytics.com" />
        <Script key="clarity-script" id="clarity-script" strategy="afterInteractive" type="text/javascript">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xi2vrc5k39");
          `}
        </Script>
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
