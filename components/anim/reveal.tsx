'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef, useEffect, type ReactNode } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 65%"]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const yTransform = useTransform(scrollYProgress, [0, 1], [y, 0])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y: yTransform }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Bi-directional scroll-driven typewriter + fade + landing effect using native APIs */
export function RevealWords({
  text,
  className,
}: {
  text: string
  className?: string
  wordClassName?: string
  delay?: number
  stagger?: number
}) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const textEl = textRef.current
    if (!container || !textEl) return

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = container.getBoundingClientRect()
          const windowHeight = window.innerHeight
          
          // Calculate progress percentage of the element relative to the viewport.
          // Start when the top of the element is at 95% of viewport height.
          // End when the top of the element is at 65% of viewport height.
          const startY = windowHeight * 0.95
          const endY = windowHeight * 0.65
          const currentY = rect.top

          let progress = (startY - currentY) / (startY - endY)
          progress = Math.max(0, Math.min(1, progress))

          // 1. Typewriter Effect
          // Reveal character by character based on scroll progress
          const charCount = Math.floor(progress * text.length)
          const revealed = text.substring(0, charCount)
          const hidden = text.substring(charCount)
          
          // Use native DOM manipulation for the split to avoid React re-renders
          textEl.innerHTML = ''
          textEl.appendChild(document.createTextNode(revealed))
          
          if (hidden.length > 0) {
            const hiddenSpan = document.createElement('span')
            hiddenSpan.style.opacity = '0'
            hiddenSpan.textContent = hidden
            textEl.appendChild(hiddenSpan)
          }

          // 2. Fading & Landing
          // Layer the typing effect over opacity and translateY transforms
          const opacity = 0.1 + progress * 0.9
          const translateY = 40 * (1 - progress)

          container.style.opacity = opacity.toString()
          container.style.transform = `translateY(${translateY}px)`
          
          ticking = false
        })
        ticking = true
      }
    }

    // Bind scroll and resize listeners
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    
    // Trigger initial calculation
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [text])

  return (
    <span 
      ref={containerRef} 
      className={`inline-block ${className ?? ''}`}
      style={{ opacity: 0, transform: 'translateY(40px)' }}
    >
      <span ref={textRef} aria-hidden="true">
        {text}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  )
}
