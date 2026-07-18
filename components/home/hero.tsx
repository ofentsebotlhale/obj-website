'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'

const LINE1 = 'OBX'
const LINE2 = 'STUDIO'
const EASE = 'power3.out'

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

function Line({ text }: { text: string }) {
  return (
    <span className="flex overflow-hidden pb-8 -mb-8">
      {text.split('').map((char, i) => (
        <span key={i} className="magnetic-char inline-block origin-center cursor-default select-none transition-colors duration-300">
          <span className="block translate-y-[110%]">
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ))}
    </span>
  )
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => {
      document.body.style.overflow = ''
    }, 2800)
    return () => {
      document.body.style.overflow = ''
      clearTimeout(t)
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      
      // Animate the main text lines
      tl.to('.magnetic-char > span', {
        y: '0%',
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        stagger: 0.03,
        delay: 0.15
      })

      // Top meta row
      tl.fromTo('.hero-top-row',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: EASE },
        2.2 // Absolute delay 2.2s
      )

      // Bottom meta row
      tl.fromTo('.hero-bottom-row',
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: EASE },
        2.4 // Absolute delay 2.4s
      )

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-4 md:px-6">
      {/* Subtle grid pattern background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'url(/grid-pattern.svg)', backgroundSize: '40px 40px' }} 
      />

      {/* Top meta row */}
      <div
        className="hero-top-row opacity-0 absolute left-4 right-16 top-4 z-10 flex max-w-sm flex-col gap-5 md:left-6 md:right-auto md:top-6"
      >
        <p className="text-pretty font-sans text-lg md:text-[22px] leading-[24px] md:leading-[24px] font-medium tracking-normal text-foreground pt-2">
          We craft brands, interfaces, and high-performance digital experiences for the ambitious.
        </p>
        <Link
          href="/contact"
          className="group flex min-h-[38px] w-fit items-center gap-3 rounded-full bg-foreground px-5 py-2 font-sans text-[11px] font-medium uppercase tracking-widest text-background transition-all hover:scale-105 active:scale-95"
        >
          Chat With Us
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Oversized wordmark */}
      <div className="relative z-10 flex w-full flex-col items-start">
        <h1 className="sr-only">OBX Studio</h1>
        <div className="flex flex-col items-start font-heading text-[24vw] font-bold leading-[0.82] tracking-tighter text-foreground sm:text-[22vw] md:text-[19vw]">
          <div aria-hidden="true">
            <Line text={LINE1} />
          </div>
          <div className="flex items-center justify-start gap-4">
            <div aria-hidden="true">
              <Line text={LINE2} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div
        className="hero-bottom-row opacity-0 absolute bottom-10 left-4 right-4 z-10 flex flex-row items-end justify-between gap-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:text-[11px] md:left-6 md:right-6"
      >
        <div className="flex flex-col gap-2">
          <span className="leading-relaxed text-black font-sans font-medium">
            Web Design Studio in Johannesburg
          </span>
        </div>
        
        <div className="flex flex-row items-center gap-4 text-foreground">
          <div className="flex gap-3 sm:gap-4">
            <a href="https://www.linkedin.com/company/obxstudio/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:h-5 sm:w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.instagram.com/obxstudio_/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:h-5 sm:w-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
