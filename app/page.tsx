import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/home/hero'
import { Intro } from '@/components/home/intro'
import { BeliefStatement } from '@/components/home/belief-statement'
import { ShiftingHeading } from '@/components/home/shifting-heading'
import { WhatWeDesign } from '@/components/home/what-we-design'
import { StudioAbout } from '@/components/home/studio-about'
import { TheMethod } from '@/components/home/the-method'
import { ClientEndorsement } from '@/components/home/client-endorsement'
import { StudioStatement } from '@/components/home/studio-statement'
import { FeaturedWork } from '@/components/home/featured-work'
import { Reveal } from '@/components/anim/reveal'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'OBX Studio | Design, Branding & Development in South Africa',
  description:
    'OBX Studio is a boutique agency in South Africa, crafting premium web design, custom branding, and high-performance web development services.',
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
        logo: 'https://obxstudio.co.za/logo.jpg',
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
      <div className="bg-foreground text-background">
        <section className="px-4 pb-28 pt-16 md:px-6 md:pb-40 md:pt-24">
          <div className="mx-auto max-w-[1600px]">
            <ShiftingHeading text="Here's what that looks like in practice." />
            <Reveal className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4">
              <div className="space-y-2 max-w-2xl">
                <h3 className="font-mono text-xs uppercase tracking-widest text-background/40">
                  Selected Work
                </h3>
                <p className="font-sans text-sm text-background/60">
                  A few of the brands and businesses we&apos;ve helped become easier to trust online.
                </p>
              </div>
              <Link
                href="/work"
                data-cursor="All"
                className="group inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/10 px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest text-background transition-all duration-300 hover:border-background hover:bg-background/20"
              >
                <span>View all</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </Reveal>
            <FeaturedWork items={projects.slice(0, 5)} />
          </div>
        </section>
      </div>

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


