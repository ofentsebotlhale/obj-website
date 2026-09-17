import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/home/hero'
import { ValueStatement } from '@/components/home/value-statement'
import { WhatWeDesign } from '@/components/home/what-we-design'
import { StudioAbout } from '@/components/home/studio-about'
import { TheMethod } from '@/components/home/the-method'
import { ClosingCta } from '@/components/home/closing-cta'
import { HomepageWorksParallax } from '@/components/homepage-works-parallax'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'OBX Studio | Web design Studio in Johannesburg',
  description:
    'A modern web design studio based in Johannesburg. Tailor-made websites, brand experiences, and digital builds for brands that want to stand out.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'OBX Studio',
        url: 'https://obxstudio.co.za',
      },
      {
        '@type': 'Organization',
        name: 'OBX Studio',
        url: 'https://obxstudio.co.za',
        logo: 'https://obxstudio.co.za/logo.avif',
        description: 'OBX Studio is a boutique digital studio crafting premium brand identities, editorial interfaces, and high-performance web experiences.',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="relative w-full">
        <Hero />
        <HomepageWorksParallax items={projects.slice(0, 5)} />
        <ValueStatement />
        <WhatWeDesign />
        <StudioAbout />
        <TheMethod />
        <ClosingCta />
      </div>
    </>
  )
}

