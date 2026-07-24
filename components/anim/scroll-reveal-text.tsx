'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'motion/react'
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
  const totalChars = text.length
  const overlapSpread = 12 // smooth letter overlap
  const divisor = totalChars + (overlapSpread - 1)
  let charIndexCounter = 0

  return (
    <p ref={containerRef} className={cn("relative", className)}>
      {words.map((word, wordIdx) => {
        const chars = Array.from(word)
        const renderedWord = (
          <span key={wordIdx} className="relative inline-block mr-[0.38em] select-none whitespace-nowrap">
            {chars.map((char, charIdx) => {
              const absoluteIndex = charIndexCounter
              charIndexCounter++
              
              const start = range
                ? range[0] + (absoluteIndex / divisor) * (range[1] - range[0])
                : absoluteIndex / divisor
              const end = range
                ? range[0] + ((absoluteIndex + overlapSpread) / divisor) * (range[1] - range[0])
                : (absoluteIndex + overlapSpread) / divisor

              return (
                <Character key={charIdx} progress={activeProgress} range={[start, end]}>
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
    </p>
  )
}

interface CharacterProps {
  children: string
  progress: MotionValue<number>
  range: [number, number]
}

function Character({ children, progress, range }: CharacterProps) {
  const opacity = useTransform(progress, range, [0.1, 1])
  
  return (
    <motion.span style={{ opacity }} className="relative text-current transition-colors duration-150">
      {children}
    </motion.span>
  )
}
