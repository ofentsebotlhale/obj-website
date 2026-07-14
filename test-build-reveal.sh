#!/bin/bash
mv components/anim/reveal.tsx components/anim/reveal.tsx.bak
cat << 'INNER_EOF' > components/anim/reveal.tsx
'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef, type ReactNode } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

export function Reveal({
  children,
  delay = 0,
  y = 20,
  className
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 65%"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const yTransform = useTransform(scrollYProgress, [0, 1], [y, 0])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y: yTransform }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
INNER_EOF
npm run build
mv components/anim/reveal.tsx.bak components/anim/reveal.tsx
