'use client'

import { Reveal } from '@/components/anim/reveal'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const ITEMS = [
  { n: '01', title: 'STRATEGY', desc: 'Structure, content and direction before pixels.' },
  { n: '02', title: 'WEB DESIGN', desc: 'Distinct visual systems, interfaces and experiences built around the business.' },
  { n: '03', title: 'DEVELOPMENT', desc: 'Fast, responsive websites engineered for real devices and real-world use.' },
  { n: '04', title: 'PERFORMANCE', desc: 'Careful technical implementation so the experience feels as good as it looks.' },
]

export function WhatWeDesign() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="px-[5vw] py-24 md:py-32 lg:py-48 bg-background text-foreground flex flex-col justify-center">
      <div className="mx-auto max-w-[1920px] grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-24 gap-x-4 md:gap-x-8">
        
        {/* Left Column Label */}
        <div className="md:col-span-4">
          <Reveal className="sticky top-32">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-normal">
              WHAT WE BUILD
            </h2>
          </Reveal>
        </div>

        {/* Right Column List */}
        <div className="md:col-span-8 perspective-[1000px]">
          <ul className="space-y-6 md:space-y-8 lg:space-y-10 w-full">
            {ITEMS.map((item, i) => {
              const isHovered = !isMobile && hoveredIndex === i
              const isOthersHovered = !isMobile && hoveredIndex !== null && hoveredIndex !== i
              
              return (
                <li key={i} className="w-full">
                  <div
                    className="flex flex-col gap-4 border-b border-border/40 pb-6 md:pb-8"
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full">
                      <motion.div
                        className="flex flex-row items-center gap-6 md:gap-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: i * 0.15 }}
                      >
                        <span className="font-mono text-sm md:text-base text-muted-foreground shrink-0 w-8">
                          {item.n}
                        </span>
                        <span className="font-mono text-sm md:text-base text-muted-foreground shrink-0 opacity-50 hidden md:inline">
                          —
                        </span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ x: -12, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: (i * 0.15) + 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full"
                      >
                        <motion.div
                          animate={{ 
                            opacity: isOthersHovered ? 0.3 : 1,
                            x: isHovered ? 12 : 0
                          }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 w-full"
                        >
                          <p className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground uppercase">
                            {item.title}
                          </p>
                          
                          <motion.p 
                            className="font-sans text-sm md:text-base text-muted-foreground max-w-[280px] sm:text-right"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, delay: (i * 0.15) + 0.2 }}
                            animate={{ opacity: isMobile ? 1 : (isHovered ? 1 : (isOthersHovered ? 0.3 : 0.6)) }}
                          >
                            {item.desc}
                          </motion.p>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
