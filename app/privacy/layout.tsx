import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | OBX Studio',
  description:
    'Read the OBX Studio privacy policy to learn how we protect your personal data, handle cookie consent, and maintain security across all digital systems.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | OBX Studio',
    description:
      'Read the OBX Studio privacy policy to learn how we protect your personal data, handle cookie consent, and maintain security across all digital systems.',
    url: 'https://obxstudio.co.za/privacy',
    images: [{ url: '/work/ob-law-1.avif' }],
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://obxstudio.co.za/privacy/#webpage",
        "url": "https://obxstudio.co.za/privacy",
        "name": "Privacy Policy | OBX Studio",
        "description": "Read the OBX Studio privacy policy to learn how we protect your personal data, handle cookie consent, and maintain security across all digital systems.",
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
