'use client'

import { ScrollRevealText } from '@/components/anim/scroll-reveal-text'

export function BeliefStatement() {
  return (
    <section className="px-5 py-40 md:py-60 md:px-10 bg-foreground text-white">
      <div className="mx-auto max-w-5xl text-center space-y-12 md:space-y-16">
        <ScrollRevealText
          text="Most studios sell you a website."
          className="font-heading text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white text-pretty"
          startOffset="start 80%"
          endOffset="end 55%"
        />
        <ScrollRevealText
          text="We build the reason someone trusts you enough to become a client."
          className="font-heading text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white/90 text-pretty"
          startOffset="start 75%"
          endOffset="end 50%"
        />
      </div>
    </section>
  )
}
