'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ShiftingHeadingProps {
  text: string
  className?: string
}

export function ShiftingHeading({ text, className }: ShiftingHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll relative to the shifting heading area
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  })

  // Create a spring-smoothed progress for buttery movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 26,
    restDelta: 0.001
  })

  // Define the reveal/slide range
  const rangeStart = 0.1
  const rangeEnd = 0.8
  const totalDuration = rangeEnd - rangeStart

  // Keep the left offset at the horizontal center (50%)
  // Slide x from 0% (first character centered) to -100% (last character centered)
  const left = "50%"
  const x = useTransform(smoothProgress, [rangeStart, rangeEnd], ["0%", "-100%"])

  const words = text.split(' ')
  const totalChars = text.length
  const overlapSpread = 12 // smooth letter overlap
  const divisor = totalChars + (overlapSpread - 1)
  let charIndexCounter = 0

  return (
    <div ref={containerRef} className="relative w-full py-12 md:py-16 overflow-hidden">
      <div className="relative w-full">
        <motion.h2
          style={{ left, x }}
          className={cn(
            "relative inline-block font-heading text-2xl font-bold leading-snug tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-white select-none whitespace-nowrap",
            className
          )}
        >
          {words.map((word, wordIdx) => {
            const chars = Array.from(word)
            const renderedWord = (
              <span key={wordIdx} className="relative inline-block mr-[0.38em] select-none whitespace-nowrap">
                {chars.map((char, charIdx) => {
                  const absoluteIndex = charIndexCounter
                  charIndexCounter++

                  // Words/letters reveal sequentially in the defined range
                  const start = rangeStart + (absoluteIndex / divisor) * totalDuration
                  const end = rangeStart + ((absoluteIndex + overlapSpread) / divisor) * totalDuration

                  return (
                    <Character key={charIdx} progress={smoothProgress} range={[start, end]}>
                      {char}
                    </Character>
                  )
                })}
              </span>
            )

            // Count the space character between words (if not the last word)
            if (wordIdx < words.length - 1) {
              charIndexCounter++
            }

            return renderedWord
          })}
        </motion.h2>
      </div>
    </div>
  )
}

interface CharacterProps {
  children: string
  progress: any
  range: [number, number]
}

function Character({ children, progress, range }: CharacterProps) {
  const opacity = useTransform(progress, range, [0.1, 1])
  return (
    <motion.span style={{ opacity }} className="relative text-current">
      {children}
    </motion.span>
  )
}
