'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { motion } from 'motion/react'

export function Reveal({
  children,
  delay = 0,
  y = 30,
  className = ""
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
  className = "",
  delay = 0,
  stagger = 0.05
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
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    hidden: {
      opacity: 0,
      y: 40,
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
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
