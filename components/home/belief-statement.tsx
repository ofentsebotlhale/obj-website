'use client'

import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { ScrollRevealText } from '@/components/anim/scroll-reveal-text'

export function BeliefStatement() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 35%"],
  })

  return (
    <section 
      ref={sectionRef}
      className="px-4 py-40 md:py-60 md:px-6 bg-foreground text-white"
    >
      <div className="mx-auto max-w-5xl text-center space-y-12 md:space-y-16">
        <ScrollRevealText
          text="Most studios sell you a website."
          className="font-heading text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white text-pretty"
          progress={scrollYProgress}
          range={[0, 0.35]}
        />
        <ScrollRevealText
          text="We build the reason someone trusts you enough to become a client."
          className="font-heading text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white/90 text-pretty"
          progress={scrollYProgress}
          range={[0.45, 0.8]}
        />
      </div>
    </section>
  )
}
