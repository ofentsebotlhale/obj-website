'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ScrollRevealTextProps {
  text: string
  className?: string
  startOffset?: string
  endOffset?: string
  progress?: MotionValue<number>
  range?: [number, number]
}

export function ScrollRevealText({
  text,
  className,
  startOffset = "start 80%",
  endOffset = "end 50%",
  progress,
  range,
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [startOffset, endOffset] as any,
  })

  const activeProgress = progress || scrollYProgress
  const words = text.split(' ')

  return (
    <p ref={containerRef} className={cn("relative", className)}>
      {words.map((word, i) => {
        // Calculate the range for each word
        const start = range
          ? range[0] + (i / words.length) * (range[1] - range[0])
          : i / words.length
        const end = range
          ? range[0] + ((i + 1) / words.length) * (range[1] - range[0])
          : (i + 1) / words.length
        return (
          <Word key={i} progress={activeProgress} range={[start, end]}>
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
      <motion.span style={{ opacity }} className="relative text-current transition-colors duration-150">
        {children}
      </motion.span>
    </span>
  )
}
