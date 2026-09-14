'use client'

import { Reveal } from '@/components/anim/reveal'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const ITEMS = [
  { n: '01', text: 'WEB DESIGN' },
  { n: '02', text: 'DEVELOPMENT' },
  { n: '03', text: 'UX / UI' },
  { n: '04', text: 'DIGITAL DIRECTION' },
  { n: '05', text: 'E-COMMERCE' },
  { n: '06', text: 'BRAND IDENTITY' }
]

export function WhatWeDesign() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="px-[5vw] py-24 md:py-32 lg:py-48 bg-background text-foreground flex flex-col justify-center">
      <div className="mx-auto max-w-[1920px] grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-24 lg:gap-y-32 gap-x-4 md:gap-x-8">
        {/* Left Column Label */}
        <div className="md:col-span-4">
          <Reveal className="sticky top-32">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-normal">
              CAPABILITIES
            </h2>
          </Reveal>
        </div>

        {/* Right Column List */}
        <div className="md:col-span-8 perspective-[1000px]">
          <ul className="space-y-6 md:space-y-8 lg:space-y-10">
            {ITEMS.map((item, i) => {
              const isHovered = hoveredIndex === i
              const isOthersHovered = hoveredIndex !== null && hoveredIndex !== i
              
              return (
                <motion.li 
                  key={i}
                  initial={false}
                  animate={mounted ? { opacity: 0, y: 40, z: -50, scale: 0.95 } : { opacity: 1, y: 0, z: 0, scale: 1 }}
                  whileInView={mounted ? { opacity: 1, y: 0, z: 0, scale: 1 } : undefined}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`origin-left ${i % 2 !== 0 ? 'md:ml-12 lg:ml-24' : ''}`}
                >
                  <motion.div
                    className="flex flex-row items-center gap-6 md:gap-8 cursor-default border-b border-border/40 pb-6 md:pb-8"
                    animate={{ opacity: isOthersHovered ? 0.3 : 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <span className="font-mono text-sm md:text-base text-muted-foreground shrink-0 w-8">
                      {item.n}
                    </span>
                    <span className="font-mono text-sm md:text-base text-muted-foreground shrink-0 opacity-50">
                      —
                    </span>
                    <motion.p 
                      className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground uppercase"
                      initial={false}
                      animate={{ x: isHovered ? 12 : 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {item.text}
                    </motion.p>
                  </motion.div>
                </motion.li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

