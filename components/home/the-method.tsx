'use client'

import { motion } from 'framer-motion'
import { Reveal } from '@/components/anim/reveal'
import { useState, useEffect } from 'react'

const STEPS = [
  {
    num: '01',
    title: 'DISCOVERY & POSITIONING',
    desc: 'We dissect your business, audience, and market position to establish a visual direction that commands authority.'
  },
  {
    num: '02',
    title: 'DESIGN & MOTION',
    desc: 'We craft bespoke, editorial interfaces paired with fluid motion design. No off-the-shelf templates, ever.'
  },
  {
    num: '03',
    title: 'ENGINEERING & LAUNCH',
    desc: 'Clean, scalable code built for extreme speed and seamless responsiveness across every screen size.'
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
    <section className="px-4 pb-32 md:pb-48 md:px-6 bg-background text-foreground">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="mb-16 md:mb-24">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#71717A]">
              The Method
            </h2>
          </div>
        </Reveal>

        <motion.div 
          variants={containerVariants}
          initial={false}
          animate={mounted ? "hidden" : "visible"}
          whileInView={mounted ? "visible" : undefined}
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 perspective-[1000px]"
        >
          {STEPS.map((step, i) => (
            <motion.div key={i} variants={columnVariants} className={`flex flex-col space-y-6 ${i % 2 !== 0 ? 'md:mt-16 lg:mt-24' : ''}`}>
              <motion.span variants={numberVariants} className="font-mono text-4xl md:text-5xl text-black/10 origin-left inline-block">
                {step.num}
              </motion.span>
              <div className="space-y-3">
                <h3 className="font-mono text-xs md:text-sm uppercase tracking-widest text-black font-semibold">
                  {step.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-[#71717A] leading-relaxed text-pretty">
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
