'use client'

import { useRef, useLayoutEffect, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface ScrollRevealTextProps {
  text: string
  className?: string
  startOffset?: string
  endOffset?: string
  progress?: any
  range?: [number, number]
}

export function ScrollRevealText({
  text,
  className,
  startOffset = "top 80%",
  endOffset = "bottom 50%",
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null)
  
  const words = text.split(' ')

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Replace framer-motion offsets with GSAP standard
      const parsedStart = startOffset.replace('start', 'top')
      const parsedEnd = endOffset.replace('end', 'bottom')

      gsap.fromTo('.reveal-char', 
        { opacity: 0.1 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: parsedStart,
            end: parsedEnd,
            scrub: true,
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [startOffset, endOffset])

  return (
    <p ref={containerRef} className={cn("relative", className)}>
      {words.map((word, wordIdx) => {
        const chars = Array.from(word)
        return (
          <span key={wordIdx} className="relative inline-block mr-[0.38em] select-none whitespace-nowrap">
            {chars.map((char, charIdx) => (
              <span key={charIdx} className="reveal-char relative text-current transition-colors duration-150">
                {char}
              </span>
            ))}
          </span>
        )
      })}
    </p>
  )
}
