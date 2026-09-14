'use client'

import Link from 'next/link'
import { Reveal } from '@/components/anim/reveal'

export function StudioAbout() {
  return (
    <section className="px-[5vw] py-24 md:py-32 lg:py-48 bg-background text-foreground border-t border-border/10 flex flex-col justify-center">
      <div className="mx-auto max-w-[1920px] grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-24 lg:gap-y-32 gap-x-4 md:gap-x-8">
        {/* Left Column: Label */}
        <div className="md:col-span-4">
          <Reveal className="sticky top-32">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-normal">
              STUDIO
            </h2>
          </Reveal>
        </div>

        {/* Right Column: Content */}
        <div className="md:col-span-8 space-y-16 md:space-y-24">
          <Reveal>
            <div className="space-y-4">
              <p className="font-sans text-xl font-medium tracking-wide text-foreground uppercase">
                OBX STUDIO
              </p>
              <p className="font-sans text-xl font-medium tracking-wide text-muted-foreground uppercase">
                INDEPENDENT DIGITAL STUDIO<br />
                JOHANNESBURG — SOUTH AFRICA
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-sans text-2xl sm:text-3xl md:text-4xl font-medium leading-[1.4] text-foreground max-w-3xl">
              We focus on web design, development, digital experiences, interaction, and visual direction. We build exceptional digital experiences for businesses that want to be taken seriously online.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="pt-8">
              <Link
                href="/studio"
                className="group inline-flex items-center font-sans text-sm md:text-base font-medium transition-colors hover:text-muted-foreground text-foreground"
              >
                <span className="border-b border-foreground/30 pb-0.5 group-hover:border-foreground transition-colors">
                  More about the studio
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

