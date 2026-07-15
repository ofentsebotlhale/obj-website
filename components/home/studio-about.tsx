'use client'

import Link from 'next/link'
import { Reveal } from '@/components/anim/reveal'

export function StudioAbout() {
  return (
    <section className="px-5 py-32 md:py-48 md:px-10 bg-background text-foreground border-t border-border/10">
      <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
        {/* Left Column: Label */}
        <div className="md:col-span-4">
          <Reveal className="sticky top-32">
            <h2 className="font-mono text-xs uppercase tracking-widest text-black font-semibold">
              Studio
            </h2>
          </Reveal>
        </div>

        {/* Right Column: Content */}
        <div className="md:col-span-8 max-w-4xl space-y-10 md:space-y-14">
          <Reveal>
            <p className="font-sans text-2xl md:text-4xl font-semibold leading-snug text-black text-pretty">
              OBX Studio is a boutique digital design practice based in Johannesburg. We build websites, brand identities, and digital experiences for businesses that want to be taken seriously online.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="font-sans text-lg md:text-xl font-medium leading-relaxed text-black text-pretty">
              We take on a limited number of clients at a time — not to seem exclusive, but because good work can't be rushed.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="pt-4">
              <Link
                href="/studio"
                className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-black hover:border-b hover:border-black transition-all"
              >
                <span>Learn more about the studio</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
