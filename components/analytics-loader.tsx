'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

export function AnalyticsLoader() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Check localStorage for "obx_cookie_consent"
    try {
      const consentStr = localStorage.getItem('obx_cookie_consent')
      if (consentStr) {
        const consent = JSON.parse(consentStr)
        if (consent && consent.analytics === true) {
          setShouldLoad(true)
          return
        }
      }
    } catch {
      // Ignore storage/JSON errors
    }

    // If consent doesn't exist yet or has analytics: false, do not attach interaction or timeout listeners.
    // Only load once a "obx-consent-updated" custom event fires with analytics: true.
    const handleConsentUpdated = (event: Event) => {
      const customEvent = event as CustomEvent<{ analytics?: boolean }>
      if (customEvent.detail && customEvent.detail.analytics === true) {
        setShouldLoad(true)
      }
    }

    window.addEventListener('obx-consent-updated', handleConsentUpdated)

    return () => {
      window.removeEventListener('obx-consent-updated', handleConsentUpdated)
    }
  }, [])

  if (!shouldLoad) return null

  return (
    <>
      <Script key="gtm" id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MT8P4PXR');`}
      </Script>
      <Script key="ga" src="https://www.googletagmanager.com/gtag/js?id=G-0MQHC378HK" strategy="afterInteractive" />
      <Script key="ga2" id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0MQHC378HK');`}
      </Script>
    </>
  )
}
