import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About OBX Studio | Web Design Agency',
  description:
    'Discover OBX Studio, an intentional Johannesburg web design practice crafting high-performance digital solutions built on focus, Figma, React, and quality.',
  alternates: {
    canonical: '/studio',
  },
  openGraph: {
    title: 'About OBX Studio | Web Design Agency',
    description:
      'Discover OBX Studio, an intentional Johannesburg web design practice crafting high-performance digital solutions built on focus, Figma, React, and quality.',
    url: 'https://obxstudio.co.za/studio',
    images: [{ url: '/work/ob-law-1.avif' }],
  },
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://obxstudio.co.za/studio/#webpage",
        "url": "https://obxstudio.co.za/studio",
        "name": "About OBX Studio | Web Design Agency",
        "description": "Discover OBX Studio, an intentional Johannesburg web design practice crafting high-performance digital solutions built on focus, Figma, React, and quality.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://obxstudio.co.za/#website",
          "url": "https://obxstudio.co.za",
          "name": "OBX Studio"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://obxstudio.co.za/#organization",
          "name": "OBX Studio",
          "url": "https://obxstudio.co.za",
          "logo": {
            "@type": "ImageObject",
            "url": "https://obxstudio.co.za/icon.svg"
          },
          "image": "https://obxstudio.co.za/icon.svg"
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
