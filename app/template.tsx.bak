'use client'

import { usePathname } from 'next/navigation'
import { useRef, useLayoutEffect, useEffect } from 'react'
import { gsap } from 'gsap'
import type { ReactNode } from 'react'

const ROUTE_LABELS: Record<string, string> = {
  '/': 'Home',
  '/work': 'Work',
  '/studio': 'Studio',
  '/services': 'Services',
  '/blog': 'Blog',
  '/contact': 'Contact',
}

// Mobile-first: a small number of columns on phones, more on larger screens.
const COLUMNS = 6
// Professional GSAP ease matching [0.76, 0, 0.24, 1] is roughly CustomEase or we can use a built-in like expo.inOut
const EASE = 'expo.inOut'

// Use isomorphic effect to avoid Next.js hydration warnings
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const label = ROUTE_LABELS[pathname] ?? 'OBX'
  const containerRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Columns animation
      gsap.fromTo('.template-col', 
        { scaleY: 1 },
        {
          scaleY: 0,
          duration: 0.7,
          ease: EASE,
          stagger: 0.06,
          transformOrigin: 'top'
        }
      )

      // Route name flash
      const tl = gsap.timeline()
      tl.fromTo('.template-flash-container',
        { opacity: 1 },
        { opacity: 0, duration: 0.4, delay: 0.45 }
      )

      gsap.fromTo('.template-flash-text',
        { y: 0, opacity: 1 },
        { y: -40, opacity: 0, duration: 0.6, ease: EASE, delay: 0.2 }
      )

      // Page content rise
      gsap.fromTo('.template-content',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.55 }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [pathname])

  return (
    <div ref={containerRef}>
      {/* Layered curtain — staggered columns wipe upward to reveal the page */}
      <div
        className="pointer-events-none fixed inset-0 z-[80] flex"
        aria-hidden="true"
      >
        {Array.from({ length: COLUMNS }).map((_, i) => (
          <div
            key={i}
            className="template-col h-full flex-1 bg-black border-r border-white/[0.03]"
          />
        ))}
      </div>

      {/* Route name flashes while the curtain is up, then lifts away */}
      <div
        className="template-flash-container pointer-events-none fixed inset-0 z-[81] flex items-center justify-center"
        aria-hidden="true"
      >
        <span
          className="template-flash-text font-heading text-4xl font-semibold uppercase tracking-widest text-white sm:text-6xl"
        >
          OBX Studio
        </span>
      </div>

      {/* Page content rises into place as the curtain clears */}
      <div className="template-content">
        {children}
      </div>
    </div>
  )
}
