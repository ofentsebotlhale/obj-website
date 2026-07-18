'use client'

import { useRef, useLayoutEffect, useEffect } from 'react'
import { gsap } from 'gsap'

const ITEMS = ['OBX STUDIO', 'UI / UX', 'DEVELOPMENT', 'BRANDING', 'MOTION', 'STRATEGY']

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function Marquee({ reverse = false }: { reverse?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      
      // Top and bottom borders scaleX
      tl.fromTo('.marquee-border',
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: 'power3.out', delay: 2.2 }
      )
      
      // Container fade in
      tl.fromTo(containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        2.5 // absolute delay
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="group/marquee relative flex w-full overflow-hidden py-6 opacity-0"
    >
      <div
        className="marquee-border absolute top-0 left-0 right-0 h-[1px] bg-border origin-center"
      />
      <div
        className={`flex shrink-0 items-center gap-8 whitespace-nowrap pr-8 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={`first-${i}`} className="flex items-center gap-8">
            <span className="font-heading text-4xl font-semibold uppercase tracking-tight text-foreground md:text-6xl">
              {item}
            </span>
            <span className="h-2 w-2 rounded-full bg-foreground" aria-hidden="true" />
          </span>
        ))}
      </div>
      <div
        aria-hidden="true"
        className={`flex shrink-0 items-center gap-8 whitespace-nowrap pr-8 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={`second-${i}`} className="flex items-center gap-8">
            <span className="font-heading text-4xl font-semibold uppercase tracking-tight text-foreground md:text-6xl">
              {item}
            </span>
            <span className="h-2 w-2 rounded-full bg-foreground" />
          </span>
        ))}
      </div>
      <div
        className="marquee-border absolute bottom-0 left-0 right-0 h-[1px] bg-border origin-center"
      />
    </div>
  )
}
