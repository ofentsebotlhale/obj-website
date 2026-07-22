'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'

export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <motion.div
      initial={false}
      animate={mounted ? { opacity: 0, y } : { opacity: 1, y: 0 }}
      whileInView={mounted ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealWords({
  text,
  className,
  delay = 0,
  stagger = 0.03,
}: {
  text: string
  className?: string
  delay?: number
  stagger?: number
}) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: stagger, 
        delayChildren: delay 
      },
    },
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: 15,
    },
  }

  return (
    <motion.span
      style={{ display: 'inline-flex', flexWrap: 'wrap', columnGap: '0.25em', rowGap: '0px' }}
      variants={container}
      initial={false}
      animate={mounted ? "hidden" : "visible"}
      whileInView={mounted ? "visible" : undefined}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      className={className}
    >
      {words.map((word, idx) => (
        <motion.span
          variants={child}
          style={{ display: 'inline-block' }}
          key={idx}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

