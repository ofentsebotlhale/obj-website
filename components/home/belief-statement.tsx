'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ScrollRevealText } from '@/components/anim/scroll-reveal-text'

export function BeliefStatement() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll of the container for the scale-up effect
  const { scrollYProgress: containerProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  })

  // Black block scales up from deep background
  const scale = useTransform(containerProgress, [0, 1], [0.85, 1])
  const y = useTransform(containerProgress, [0, 1], [100, 0])
  const borderRadius = useTransform(containerProgress, [0, 1], [40, 0])

  // Track scroll for the text reveal inside the block
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 35%"],
  })

  return (
    <div ref={containerRef} className="w-full bg-background overflow-hidden" style={{ perspective: '1000px' }}>
      <motion.section 
        ref={sectionRef}
        style={{ scale, y, borderRadius, willChange: 'transform' }}
        className="px-4 py-40 md:py-60 md:px-6 bg-foreground text-white origin-bottom"
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
      </motion.section>
    </div>
  )
}
