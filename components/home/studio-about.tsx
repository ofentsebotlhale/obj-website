'use client'

import Link from 'next/link'
import { Reveal } from '@/components/anim/reveal'

export function StudioAbout() {
  return (
    <section className="px-[5vw] py-24 md:py-32 lg:py-48 bg-background text-foreground border-t border-border/10">
      <div className="mx-auto max-w-[1920px] grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 lg:gap-32">
        {/* Left Column: Label */}
        <div className="md:col-span-4">
          <Reveal className="sticky top-32">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-foreground/40 block">
                The studio behind it.
              </span>
              <h2 className="font-mono text-xs uppercase tracking-widest text-foreground font-normal">
                Studio
              </h2>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Content */}
        <div className="md:col-span-8 space-y-16 md:space-y-24">
          <Reveal>
            <p className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-foreground text-balance">
              We build websites, brand identities, and digital experiences for businesses that want to be taken seriously online.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
