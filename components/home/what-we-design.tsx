'use client'

import { Reveal } from '@/components/anim/reveal'
import { motion } from 'motion/react'
import { useState, useEffect } from 'react'

const ITEMS = [
  { text: 'Brand Identities', tag: '[ Concept, Strategy & Systems ]' },
  { text: 'Editorial Interfaces', tag: '[ Layout & Typography ]' },
  { text: 'High-Performance Websites', tag: '[ Next.js / Framer Motion / Custom Code ]' },
  { text: 'E-Commerce Platforms', tag: '[ Conversion & Flow ]' },
  { text: 'Custom Digital Experiences', tag: '[ WebGL & Interactive ]' }
]

export function WhatWeDesign() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="px-4 py-32 md:py-48 md:px-6 bg-background text-foreground border-t border-border/10">
      <div className="mx-auto max-w-[1600px] grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
        {/* Left Column Label */}
        <div className="md:col-span-4">
          <Reveal className="sticky top-32">
            <h2 className="font-mono text-xs uppercase tracking-widest text-black font-normal">
              Built through:
            </h2>
          </Reveal>
        </div>

        {/* Right Column List */}
        <div className="md:col-span-8 perspective-[1000px]">
          <ul className="space-y-8 md:space-y-12">
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
                  className="origin-left"
                >
                  <motion.div
                    className="flex flex-col md:flex-row md:items-center gap-4 cursor-default"
                    animate={{ opacity: isOthersHovered ? 0.3 : 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <motion.p 
                      className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black"
                      initial={false}
                      animate={{ x: isHovered ? 12 : 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {item.text}
                    </motion.p>
                    <motion.span 
                      className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-[#71717A] md:-translate-x-4"
                      initial={false}
                      animate={mounted ? { opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {item.tag}
                    </motion.span>
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
