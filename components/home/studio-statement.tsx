'use client'

import { Reveal } from '@/components/anim/reveal'
import Link from 'next/link'

export function StudioStatement() {
  return (
    <section className="flex min-h-[90svh] flex-col justify-center bg-background px-[5vw] py-24 md:py-32 lg:py-48 text-foreground">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center space-y-16 md:space-y-24 lg:space-y-32">
        <Reveal className="max-w-4xl">
          <h2 className="font-heading text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-pretty">
            We partner with businesses who understand that a website isn't a brochure — it's the first impression a client forms before they ever speak to you.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="font-heading text-xl font-semibold tracking-tight text-foreground/90 sm:text-2xl md:text-3xl">
            Let's make yours count.
          </p>
        </Reveal>

        <Reveal delay={0.4} className="pt-8">
          <Link
            href="/contact"
            className="group/cta inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-foreground hover:text-foreground/80 transition-colors"
          >
            <span className="border-b border-foreground/40 pb-1">LET'S BUILD SOMETHING</span>
            <span className="inline-block transition-transform duration-300 group-hover/cta:translate-x-2">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

