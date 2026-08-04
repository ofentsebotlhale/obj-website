import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact OBX Studio | Web Design & Development',
  description:
    'Get in touch with OBX Studio to build your next custom high-performance website. Initiate your project using our direct contact form or via email today.',
  openGraph: {
    title: 'Contact OBX Studio | Web Design & Development',
    description:
      'Get in touch with OBX Studio to build your next custom high-performance website. Initiate your project using our direct contact form or via email today.',
    url: 'https://obxstudio.co.za/contact',
    images: [{ url: '/work/ob-law-1.avif' }],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://obxstudio.co.za/contact/#webpage",
        "url": "https://obxstudio.co.za/contact",
        "name": "Contact OBX Studio | Web Design & Development",
        "description": "Get in touch with OBX Studio to build your next custom high-performance website. Initiate your project using our direct contact form or via email today.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://obxstudio.co.za/#website",
          "url": "https://obxstudio.co.za",
          "name": "OBX Studio"
        },
        "mainEntity": {
          "@type": "ProfessionalService",
          "@id": "https://obxstudio.co.za/#organization",
          "name": "OBX Studio",
          "url": "https://obxstudio.co.za",
          "telephone": "+27603759829",
          "email": "hello@obxstudio.co.za",
          "image": "https://obxstudio.co.za/logo.png",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Johannesburg",
            "addressRegion": "Gauteng",
            "addressCountry": "ZA"
          }
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
