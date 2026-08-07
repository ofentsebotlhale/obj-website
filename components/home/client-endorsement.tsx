'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Reveal } from '@/components/anim/reveal'

export function ClientEndorsement() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150])
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section 
      ref={containerRef}
      className="px-[5vw] py-24 md:py-32 lg:py-48 bg-background text-foreground border-t border-border/10 overflow-hidden"
    >
      <motion.div 
        style={{ y: yParallax, willChange: 'transform' }}
        className="mx-auto max-w-[1920px]"
      >
        <div className="mx-auto max-w-5xl text-center space-y-12">
          <Reveal>
            <blockquote className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-tight text-foreground max-w-4xl mx-auto">
              "OBX Studio redefined how our brand presents itself online. Within weeks of launch, our inbound lead quality completely shifted."
            </blockquote>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-foreground/60">
              — Founder, Tech & Consulting
            </p>
          </Reveal>
        </div>
      </motion.div>
    </section>
  )
}
