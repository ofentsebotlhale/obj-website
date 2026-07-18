'use client'

import { useRef, useLayoutEffect, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { type ReactNode } from 'react'

gsap.registerPlugin(ScrollTrigger)

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(containerRef.current,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 110%',
            once: true,
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [y, delay])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

export function RevealWords({
  text,
  className,
  delay = 0,
  stagger = 0.03,
}: {
  text: string
  className?: string
  delay?: number
  stagger?: number
}) {
  const containerRef = useRef<HTMLSpanElement>(null)
  const words = text.split(' ')

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.reveal-word',
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: stagger,
          delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 110%',
            once: true,
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [delay, stagger])

  return (
    <span
      ref={containerRef}
      style={{ display: 'inline-flex', flexWrap: 'wrap', columnGap: '0.25em', rowGap: '0px' }}
      className={className}
    >
      {words.map((word, idx) => (
        <span
          className="reveal-word"
          style={{ display: 'inline-block' }}
          key={idx}
        >
          {word}
        </span>
      ))}
    </span>
  )
}

