'use client'

import { useRef, useLayoutEffect, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface ShiftingHeadingProps {
  text: string
  className?: string
}

export function ShiftingHeading({ text, className }: ShiftingHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Shift alignment from center to left
      gsap.fromTo(headingRef.current,
        { left: '50%', xPercent: -50 },
        {
          left: '0%',
          xPercent: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%', // Matches relative [0.4, 0.95]
            end: 'bottom 40%',
            scrub: true,
          }
        }
      )

      // 2. Sequential letter reveal
      gsap.fromTo('.shifting-char',
        { opacity: 0.1 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.05,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%', // Roughly matches range [0.05, 0.4] in framer progress
            end: 'center center',
            scrub: true,
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const words = text.split(' ')

  return (
    <div ref={containerRef} className="relative w-full py-12 md:py-16 overflow-hidden">
      <div className="relative w-full">
        <h2
          ref={headingRef}
          className={cn(
            "relative inline-block font-heading text-2xl font-bold leading-snug tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-white text-pretty select-none whitespace-normal md:whitespace-nowrap",
            className
          )}
        >
          {words.map((word, wordIdx) => {
            const chars = Array.from(word)
            return (
              <span key={wordIdx} className="relative inline-block mr-[0.38em] select-none whitespace-nowrap">
                {chars.map((char, charIdx) => (
                  <span key={charIdx} className="shifting-char relative text-current opacity-10">
                    {char}
                  </span>
                ))}
              </span>
            )
          })}
        </h2>
      </div>
    </div>
  )
}
