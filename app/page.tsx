import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/home/hero'
import { Intro } from '@/components/home/intro'
import { BeliefStatement } from '@/components/home/belief-statement'
import { WhatWeDesign } from '@/components/home/what-we-design'
import { StudioAbout } from '@/components/home/studio-about'
import { TheMethod } from '@/components/home/the-method'
import { ClientEndorsement } from '@/components/home/client-endorsement'
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
        logo: 'https://obxstudio.co.za/logo.svg',
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
      <Hero />
      
      {/* SECTION 1 — Trust Statement */}
      <Intro />

      {/* SECTION 2 — Belief Statement */}
      <BeliefStatement />

      {/* SECTION 3 — Selected Work */}
      <HomepageWorksParallax items={projects.slice(0, 5)} />

      {/* SECTION 4 — What We Design */}
      <WhatWeDesign />
      
      {/* SECTION 5 — Studio (About Us) */}
      <StudioAbout />

      {/* SECTION 6 — The Method */}
      <TheMethod />

      {/* SECTION 7 — Client Endorsement */}
      <ClientEndorsement />

      {/* SECTION 8 — Closing CTA */}
      <StudioStatement />
    </>
  )
}


