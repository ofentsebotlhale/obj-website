'use client'

import { Reveal } from '@/components/anim/reveal'

export function BeliefStatement() {
  return (
    <section className="px-5 py-40 md:py-60 md:px-10 bg-background text-foreground border-t border-border/10">
      <div className="mx-auto max-w-5xl text-center space-y-6 md:space-y-8">
        <Reveal>
          <p className="font-heading text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-black text-pretty">
            Most studios sell you a website.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="font-heading text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-black text-pretty">
            We build the reason someone trusts you enough to become a client.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
