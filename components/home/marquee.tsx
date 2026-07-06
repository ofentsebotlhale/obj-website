'use client'

import { motion } from 'motion/react'

const ITEMS = ['OBX STUDIO', 'UI / UX', 'DEVELOPMENT', 'BRANDING', 'MOTION', 'STRATEGY']

export function Marquee({ reverse = false }: { reverse?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
      className="group/marquee relative flex w-full overflow-hidden py-6"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-border origin-center"
      />
      <div
        className={`flex shrink-0 items-center gap-8 whitespace-nowrap pr-8 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={`first-${i}`} className="flex items-center gap-8">
            <span className="font-heading text-4xl font-semibold uppercase tracking-tight text-foreground md:text-6xl">
              {item}
            </span>
            <span className="h-2 w-2 rounded-full bg-foreground" aria-hidden="true" />
          </span>
        ))}
      </div>
      <div
        aria-hidden="true"
        className={`flex shrink-0 items-center gap-8 whitespace-nowrap pr-8 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={`second-${i}`} className="flex items-center gap-8">
            <span className="font-heading text-4xl font-semibold uppercase tracking-tight text-foreground md:text-6xl">
              {item}
            </span>
            <span className="h-2 w-2 rounded-full bg-foreground" />
          </span>
        ))}
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-border origin-center"
      />
    </motion.div>
  )
}
