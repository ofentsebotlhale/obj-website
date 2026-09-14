'use client'

import { motion } from 'framer-motion'
import { Reveal } from '@/components/anim/reveal'
import { useState, useEffect } from 'react'

const STEPS = [
  {
    num: '01',
    title: 'THINK',
    desc: 'Research, positioning, and strategy to establish a clear direction before designing the surface.'
  },
  {
    num: '02',
    title: 'DESIGN',
    desc: 'Visual systems, typography, and editorial layouts crafted for digital interaction.'
  },
  {
    num: '03',
    title: 'BUILD',
    desc: 'Engineering the front-end with precision for speed, scale, and responsive behavior.'
  },
  {
    num: '04',
    title: 'LAUNCH',
    desc: 'Final optimizations, quality assurance, and deployment to the live environment.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const columnVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

const numberVariants = {
  hidden: { scale: 0.85, z: -30 },
  visible: { 
    scale: 1, 
    z: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

export function TheMethod() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="px-[5vw] py-24 md:py-32 bg-background text-foreground flex flex-col justify-center">
      <div className="mx-auto max-w-[1920px]">
        <Reveal>
          <div className="mb-16 md:mb-24">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              PROCESS
            </h2>
          </div>
        </Reveal>

        <motion.div 
          variants={containerVariants}
          initial={false}
          animate={mounted ? "hidden" : "visible"}
          whileInView={mounted ? "visible" : undefined}
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 perspective-[1000px]"
        >
          {STEPS.map((step, i) => (
            <motion.div key={i} variants={columnVariants} className="flex flex-col space-y-10 lg:space-y-12">
              <motion.span variants={numberVariants} className="font-mono text-4xl md:text-5xl text-foreground/10 origin-left inline-block">
                {step.num}
              </motion.span>
              <div className="space-y-6 lg:space-y-8 border-t border-border/40 pt-6">
                <h3 className="font-sans text-xl md:text-2xl uppercase tracking-tight text-foreground font-medium">
                  {step.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed text-pretty">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

