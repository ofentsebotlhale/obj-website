'use client'

import { Reveal } from '@/components/anim/reveal'
import { motion } from 'framer-motion'

const ITEMS = [
  'Brand Identities',
  'Editorial Interfaces',
  'High-Performance Websites',
  'E-Commerce Platforms',
  'Custom Digital Experiences'
]

export function WhatWeDesign() {
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
            {ITEMS.map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, y: 40, z: -50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, z: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="origin-left"
              >
                <p className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black transition-colors duration-300">
                  {item}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
