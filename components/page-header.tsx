'use client'

import { motion } from 'motion/react'

const EASE = [0.22, 1, 0.36, 1] as const

export function PageHeader({
  index,
  title,
  subtitle,
}: {
  index: string
  title: string
  subtitle: string
}) {
  return (
    <header className="px-5 pb-12 pt-36 md:px-10 md:pb-16 md:pt-44">
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
        >
          <span>{subtitle}</span>
          <span>( {index} )</span>
        </motion.div>
        <h1 className="mt-6 overflow-hidden font-heading text-[16vw] font-bold leading-[0.85] tracking-tighter text-foreground md:text-[12vw]">
          <motion.span
            className="block"
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
          >
            {title}
          </motion.span>
        </h1>
      </div>
    </header>
  )
}
