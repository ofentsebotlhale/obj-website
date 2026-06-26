import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | OBX Studio',
  description:
    'Read the OBX Studio Terms and Conditions covering your use of our website and services.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms and Conditions | OBX Studio',
    description:
      'Read the OBX Studio Terms and Conditions covering your use of our website and services.',
    url: 'https://obxstudio.co.za/terms',
    images: [{ url: '/work/ob-law-1.avif' }],
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://obxstudio.co.za/terms/#webpage",
        "url": "https://obxstudio.co.za/terms",
        "name": "Terms and Conditions | OBX Studio",
        "description": "Read the OBX Studio Terms and Conditions covering your use of our website and services.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://obxstudio.co.za/#website",
          "url": "https://obxstudio.co.za",
          "name": "OBX Studio"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      {children}
    </>
  )
}
