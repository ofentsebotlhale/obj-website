import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/home/hero'
import { Intro } from '@/components/home/intro'
import { BeliefStatement } from '@/components/home/belief-statement'
import { WhatWeDesign } from '@/components/home/what-we-design'
import { StudioAbout } from '@/components/home/studio-about'
import { TheMethod } from '@/components/home/the-method'
import { ClientEndorsement } from '@/components/home/client-endorsement'
import { FAQ } from '@/components/home/faq'
import { StudioStatement } from '@/components/home/studio-statement'
import { HomepageWorksParallax } from '@/components/homepage-works-parallax'
import { Reveal } from '@/components/anim/reveal'
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
        logo: 'https://obxstudio.co.za/logo.png',
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
        <Intro />
        <BeliefStatement />
        <HomepageWorksParallax items={projects.slice(0, 5)} />
        <WhatWeDesign />
        <StudioAbout />
        <TheMethod />
        <ClientEndorsement />
        <FAQ />
      </div>
    </>
  )
}
