'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

export function PageHeader({
  index,
  title,
  subtitle,
}: {
  index?: string
  title: string
  subtitle?: string
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <header className="relative z-10 px-4 pb-12 pt-20 md:px-6 md:pb-16 md:pt-12">
      <div className="mx-auto max-w-[1920px]">
        <h1 className="mt-6 overflow-hidden font-heading text-[16vw] font-bold leading-[0.85] tracking-tighter text-foreground md:text-[12vw]">
          <motion.span
            className="block"
            initial={false}
            animate={mounted ? { y: ['110%', '0%'] } : { y: '0%' }}
            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
          >
            {title}
          </motion.span>
        </h1>
      </div>
    </header>
  )
}
