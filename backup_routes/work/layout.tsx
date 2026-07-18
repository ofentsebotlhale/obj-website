import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work | Web Design Portfolio | OBX Studio',
  description:
    'Browse our portfolio of high-performance custom websites and digital platforms, featuring corporate solutions and interactive e-commerce layouts by OBX.',
  openGraph: {
    title: 'Our Work | Web Design Portfolio | OBX Studio',
    description:
      'Browse our portfolio of high-performance custom websites and digital platforms, featuring corporate solutions and interactive e-commerce layouts by OBX.',
    url: 'https://obxstudio.co.za/work',
    images: [{ url: '/work/ob-law-1.avif' }],
  },
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://obxstudio.co.za/work/#webpage",
        "url": "https://obxstudio.co.za/work",
        "name": "Our Work | Web Design Portfolio | OBX Studio",
        "description": "Browse our portfolio of high-performance custom websites and digital platforms, featuring corporate solutions and interactive e-commerce layouts by OBX.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://obxstudio.co.za/#website",
          "url": "https://obxstudio.co.za",
          "name": "OBX Studio"
        },
        "about": [
          {
            "@type": "CreativeWork",
            "name": "OB Associates",
            "description": "A credibility-focused website designed to strengthen authority and improve lead qualification for services and law Advisory."
          },
          {
            "@type": "CreativeWork",
            "name": "Fash Studio",
            "description": "An elegant, interactive fashion showcase and e-commerce archetype focusing on modern minimalist designs and aesthetic fidelity."
          }
        ]
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
