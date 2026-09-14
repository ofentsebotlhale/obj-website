'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ScrollRevealText } from '@/components/anim/scroll-reveal-text'

export function BeliefStatement() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress: containerProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  })

  const scale = useTransform(containerProgress, [0, 1], [0.95, 1])
  const y = useTransform(containerProgress, [0, 1], [50, 0])

  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 40%"],
  })

  return (
    <div ref={containerRef} className="w-full bg-background overflow-hidden px-[2vw] md:px-[4vw] py-12 md:py-24">
      <motion.section 
        ref={sectionRef}
        style={{ scale, y, willChange: 'transform' }}
        className="px-[5vw] py-32 md:py-48 bg-foreground text-background origin-center flex flex-col justify-center rounded-3xl"
      >
        <div className="mx-auto max-w-5xl space-y-8 flex flex-col justify-center items-center text-center">
          <ScrollRevealText
            text="A DIGITAL PRESENCE WITH A POINT OF VIEW."
            className="font-sans text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-background text-pretty uppercase"
            progress={scrollYProgress}
            range={[0, 0.6]}
          />
          <motion.p
            className="font-mono text-xs uppercase tracking-widest text-background/50 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Design and direction for the modern web.
          </motion.p>
        </div>
      </motion.section>
    </div>
  )
}

