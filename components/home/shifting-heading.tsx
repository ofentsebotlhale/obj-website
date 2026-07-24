'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
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

  // Animate alignment from center (left: 50%, x: -50%) to left-aligned (left: 0%, x: 0%)
  const left = useTransform(scrollYProgress, [0.4, 0.95], ["50%", "0%"])
  const x = useTransform(scrollYProgress, [0.4, 0.95], ["-50%", "0%"])

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
            "relative inline-block font-heading text-2xl font-bold leading-snug tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-white text-pretty select-none whitespace-normal md:whitespace-nowrap",
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

                  // Words/letters reveal sequentially in the first 40% of the scroll progress
                  const rangeStart = 0.05
                  const rangeEnd = 0.4
                  const totalDuration = rangeEnd - rangeStart

                  const start = rangeStart + (absoluteIndex / divisor) * totalDuration
                  const end = rangeStart + ((absoluteIndex + overlapSpread) / divisor) * totalDuration

                  return (
                    <Character key={charIdx} progress={scrollYProgress} range={[start, end]}>
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
