'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef, type ReactNode } from 'react'

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
  const ref = useRef<HTMLSpanElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "end 65%"]
  })

  const words = text.split(' ')
  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="contents">
        {words.map((word, i) => {
          const start = (i / words.length) * 0.5
          const end = start + 0.5
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const y = useTransform(scrollYProgress, [start, end], ["110%", "0%"])
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1])

          return (
            <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.2em] -mb-[0.2em]">
              <motion.span
                className={`inline-block origin-bottom ${wordClassName ?? ''}`}
                style={{ y, opacity }}
              >
                {word}
                {i < words.length - 1 ? '\u00A0' : ''}
              </motion.span>
            </span>
          )
        })}
      </span>
    </span>
  )
}
