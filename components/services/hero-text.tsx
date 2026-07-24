'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function HeroText() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const text = "OBX Studio provides end-to-end digital design and web development services focused on creating modern, high-performing websites for businesses."

  return (
    <h2 className="font-heading text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl text-pretty">
      <motion.span
        initial={false}
        animate={mounted ? { opacity: [0, 1], y: [20, 0] } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="block"
      >
        {text}
      </motion.span>
    </h2>
  )
}
