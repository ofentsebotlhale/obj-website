'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Word-by-word entrance for editorial headings. */
export function RevealWords({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.06,
}: {
  text: string
  className?: string
  wordClassName?: string
  delay?: number
  stagger?: number
}) {
  const words = text.split(' ')
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="contents">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.2em] -mb-[0.2em]">
            <motion.span
              className={`inline-block origin-bottom ${wordClassName ?? ''}`}
              initial={{ y: '110%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ duration: 0.9, ease: EASE, delay: delay + i * stagger }}
            >
              {word}
              {i < words.length - 1 ? '\u00A0' : ''}
            </motion.span>
          </span>
        ))}
      </span>
    </span>
  )
}
