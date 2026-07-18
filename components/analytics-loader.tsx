'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

export function AnalyticsLoader() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleInteraction = () => {
      if (!shouldLoad) {
        setShouldLoad(true)
        clearTimeout(timeoutId)
        removeListeners()
      }
    }

    const removeListeners = () => {
      window.removeEventListener('scroll', handleInteraction)
      window.removeEventListener('mousemove', handleInteraction)
      window.removeEventListener('touchstart', handleInteraction)
      window.removeEventListener('click', handleInteraction)
      window.removeEventListener('keydown', handleInteraction)
    }

    // Add interaction listeners
    window.addEventListener('scroll', handleInteraction, { passive: true, once: true })
    window.addEventListener('mousemove', handleInteraction, { passive: true, once: true })
    window.addEventListener('touchstart', handleInteraction, { passive: true, once: true })
    window.addEventListener('click', handleInteraction, { passive: true, once: true })
    window.addEventListener('keydown', handleInteraction, { passive: true, once: true })

    // Fallback: load anyway after 5 seconds if no interaction
    timeoutId = setTimeout(() => {
      handleInteraction()
    }, 5000)

    return () => {
      clearTimeout(timeoutId)
      removeListeners()
    }
  }, [shouldLoad])

  if (!shouldLoad) return null

  return (
    <>
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MT8P4PXR');`}
      </Script>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-0MQHC378HK" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0MQHC378HK');`}
      </Script>
      <Script id="clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "xi2vrc5k39");`}
      </Script>
    </>
  )
}
