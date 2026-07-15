'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ScrollRevealTextProps {
  text: string
  className?: string
  startOffset?: string
  endOffset?: string
}

export function ScrollRevealText({
  text,
  className,
  startOffset = "start 80%",
  endOffset = "end 50%"
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [startOffset, endOffset] as any,
  })

  const words = text.split(' ')

  return (
    <p ref={containerRef} className={cn("relative", className)}>
      {words.map((word, i) => {
        // Calculate the range for each word
        const start = i / words.length
        const end = (i + 1) / words.length
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        )
      })}
    </p>
  )
}

interface WordProps {
  children: string
  progress: MotionValue<number>
  range: [number, number]
}

function Word({ children, progress, range }: WordProps) {
  // Map progress to opacity.
  // We use [0.1, 1] as requested ("starts completely faded out e.g., 10% opacity, seamless transition to 100%")
  const opacity = useTransform(progress, range, [0.1, 1])
  
  return (
    <span className="relative inline-block mr-[0.25em] select-none">
      <motion.span style={{ opacity }} className="relative text-black transition-colors duration-150">
        {children}
      </motion.span>
    </span>
  )
}
