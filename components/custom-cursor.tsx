'use client'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  
  const [hovering, setHovering] = useState(false)
  const [label, setLabel] = useState<string | null>(null)
  const [enabled, setEnabled] = useState(false)

  // Use gsap quickTo for high performance cursor tracking
  useEffect(() => {
    if (typeof window === 'undefined' || !enabled || !cursorRef.current) return

    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.4, ease: "power3" })
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.4, ease: "power3" })

    const move = (e: MouseEvent) => {
      xTo(e.clientX)
      yTo(e.clientY)
      
      const target = e.target as HTMLElement
      const interactive = target.closest(
        'a, button, [data-cursor], input, textarea, [role="button"]',
      ) as HTMLElement | null
      
      if (interactive) {
        setHovering(true)
        setLabel(interactive.getAttribute('data-cursor'))
      } else {
        setHovering(false)
        setLabel(null)
      }
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [enabled])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const fine = window.matchMedia('(pointer: fine)').matches
    setEnabled(fine)
  }, [])

  // Animate inner cursor circle on state changes
  useEffect(() => {
    if (!innerRef.current) return

    const ctx = gsap.context(() => {
      const width = label ? 88 : hovering ? 48 : 12
      const height = label ? 88 : hovering ? 48 : 12
      const backgroundColor = label ? '#ffffff' : hovering ? 'rgba(255,255,255,0.05)' : '#ffffff'
      const borderWidth = hovering && !label ? 1 : 0

      gsap.to(innerRef.current, {
        width,
        height,
        backgroundColor,
        borderWidth,
        duration: 0.4,
        ease: 'power3.out'
      })
      
      // Handle label animation
      if (label) {
        gsap.fromTo('.cursor-label',
          { opacity: 0, scale: 0.6 },
          { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(1.7)' }
        )
      } else {
        gsap.to('.cursor-label', { opacity: 0, scale: 0.6, duration: 0.2 })
      }
    }, innerRef)
    
    return () => ctx.revert()
  }, [hovering, label])

  if (!enabled) return null

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block mix-blend-difference"
      style={{ transform: 'translate(-100px, -100px)' }}
      aria-hidden="true"
    >
      <div
        ref={innerRef}
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
        style={{ borderColor: 'rgba(255,255,255,0.3)', borderStyle: 'solid', width: 12, height: 12, backgroundColor: '#ffffff' }}
      >
        {label && (
          <span className="cursor-label font-mono text-[10px] font-medium uppercase tracking-wider text-black">
            {label}
          </span>
        )}
      </div>
    </div>
  )
}
