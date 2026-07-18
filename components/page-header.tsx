'use client'

import { useRef, useLayoutEffect, useEffect } from 'react'
import { gsap } from 'gsap'

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function PageHeader({
  index,
  title,
  subtitle,
}: {
  index: string
  title: string
  subtitle: string
}) {
  const containerRef = useRef<HTMLElement>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      
      tl.fromTo('.header-meta',
        { opacity: 0 },
        { opacity: 1, duration: 0.6 }
      )
      
      tl.fromTo('.header-title-span',
        { y: '110%' },
        { y: '0%', duration: 1, ease: 'power3.out' },
        0.1 // absolute delay
      )
    }, containerRef)
    
    return () => ctx.revert()
  }, [])

  return (
    <header ref={containerRef} className="relative z-10 px-4 pb-12 pt-36 md:px-6 md:pb-16 md:pt-44">
      <div className="mx-auto max-w-[1600px]">
        <div className="header-meta flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground opacity-0">
          <span>{subtitle}</span>
          <span>( {index} )</span>
        </div>
        <h1 className="mt-6 overflow-hidden font-heading text-[16vw] font-bold leading-[0.85] tracking-tighter text-foreground md:text-[12vw]">
          <span className="header-title-span block translate-y-[110%]">
            {title}
          </span>
        </h1>
      </div>
    </header>
  )
}
