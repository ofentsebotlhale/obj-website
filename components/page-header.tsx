'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, ReactNode } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

export function PageHeader({
  index,
  title,
  subtitle,
  badge,
}: {
  index?: string
  title: string
  subtitle?: string
  badge?: ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <header className="relative z-10 px-4 pb-12 pt-20 md:px-6 md:pb-16 md:pt-12">
      <div className="mx-auto max-w-[1920px]">
        {badge && (
          <div className="mb-4">
            {typeof badge === 'string' ? (
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">
                {badge}
              </span>
            ) : (
              badge
            )}
          </div>
        )}
        <h1 className="mt-6 overflow-hidden font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[10vw] font-bold leading-[0.9] tracking-tighter text-foreground break-words text-balance">
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
