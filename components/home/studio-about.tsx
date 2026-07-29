'use client'

import Link from 'next/link'
import { Reveal } from '@/components/anim/reveal'

export function StudioAbout() {
  return (
    <section className="px-4 py-32 md:py-48 md:px-6 bg-background text-foreground border-t border-border/10">
      <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
        {/* Left Column: Label */}
        <div className="md:col-span-4">
          <Reveal className="sticky top-32">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-black/40 block">
                The studio behind it.
              </span>
              <h2 className="font-mono text-xs uppercase tracking-widest text-black font-normal">
                Studio
              </h2>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Content */}
        <div className="md:col-span-8 max-w-4xl space-y-10 md:space-y-14">
          <Reveal>
            <p className="font-sans text-2xl md:text-4xl font-medium leading-snug text-black text-pretty">
              We build websites, brand identities, and digital experiences for businesses that want to be taken seriously online.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
