'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const ROUTE_LABELS: Record<string, string> = {
  '/': 'Home',
  '/work': 'Work',
  '/studio': 'Studio',
  '/services': 'Services',
  '/blog': 'Blog',
  '/contact': 'Contact',
}

const COLUMNS = 6
const EASE = [0.76, 0, 0.24, 1] as const

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const label = ROUTE_LABELS[pathname] ?? 'OBX'

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-[80] flex"
        aria-hidden="true"
      >
        {Array.from({ length: COLUMNS }).map((_, i) => (
          <motion.div
            key={i}
            className="h-full flex-1 bg-black border-r border-white/[0.03]"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{
              duration: 0.7,
              ease: EASE,
              delay: i * 0.06,
            }}
            style={{ transformOrigin: 'top' }}
          />
        ))}
      </div>

      <motion.div
        className="pointer-events-none fixed inset-0 z-[81] flex items-center justify-center"
        aria-hidden="true"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.45 }}
      >
        <motion.span
          className="font-heading text-4xl font-semibold uppercase tracking-widest text-white sm:text-6xl"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
        >
          OBX Studio
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
      >
        {children}
      </motion.div>
    </>
  )
}
