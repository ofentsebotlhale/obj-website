'use client'

import { useRef, useLayoutEffect, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function ScrollGradient() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Smoothly morph the curve based on scroll position
      gsap.fromTo('.gradient-path',
        { 
          attr: { d: 'M 0 300 L 0 180 Q 720 0 1440 180 L 1440 300 Z' } 
        },
        {
          attr: { d: 'M 0 300 L 0 0 Q 720 0 1440 0 L 1440 300 Z' },
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        }
      )

      // Also scale up or translate the shape slightly
      gsap.fromTo('.gradient-svg',
        { y: 40 },
        {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-40 md:h-64 overflow-hidden bg-background select-none pointer-events-none"
    >
      <svg 
        viewBox="0 0 1440 300" 
        preserveAspectRatio="none" 
        className="gradient-svg absolute inset-0 w-full h-[120%] text-foreground fill-current"
      >
        <path className="gradient-path" />
      </svg>
    </div>
  )
}
