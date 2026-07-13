import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/home/hero'
import { Intro } from '@/components/home/intro'
import { Process } from '@/components/home/process'
import { WhatWeBuild } from '@/components/home/what-we-build'
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
        logo: 'https://obxstudio.co.za/icon.svg',
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
      
      <div className="bg-gradient-to-b from-background via-background via-[25%] to-foreground">
        <Intro />

        {/* Selected work */}
        <section className="px-5 pb-28 md:px-10 md:pb-40 text-background">
          <div className="mx-auto max-w-[1600px]">
            <Reveal className="mb-10 flex items-end justify-between">
              <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-4xl">
                Selected Work
              </h2>
              <Link
                href="/work"
                data-cursor="All"
                className="group flex items-center gap-2 rounded-full border border-background/30 bg-background/10 px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest text-background transition-all duration-300 hover:border-background hover:bg-background/20"
              >
                View all
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

      <WhatWeBuild />
      
      <Process />

      <StudioStatement />
    </>
  )
}
