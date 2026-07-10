'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

const EASE = [0.22, 1, 0.36, 1] as const
const LINE1 = 'OBX'
const LINE2 = 'STUDIO'

function MagneticChar({ children, delay }: { children: React.ReactNode, delay: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    setPosition({ x: middleX * 0.4, y: middleY * 0.4 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block origin-center cursor-default select-none transition-colors duration-300"
    >
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </motion.span>
  )
}

function Line({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="flex overflow-hidden pb-8 -mb-8">
      {text.split('').map((char, i) => (
        <MagneticChar key={i} delay={delay + i * 0.03}>
          {char === ' ' ? '\u00A0' : char}
        </MagneticChar>
      ))}
    </span>
  )
}

export function Hero() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => {
      document.body.style.overflow = ''
    }, 2800)
    return () => {
      document.body.style.overflow = ''
      clearTimeout(t)
    }
  }, [])

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 md:px-10">
      {/* Subtle grid pattern background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'url(/grid-pattern.svg)', backgroundSize: '40px 40px' }} 
      />

      {/* Top meta row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2, ease: EASE }}
        className="absolute left-5 right-16 top-5 z-10 flex max-w-sm flex-col gap-5 md:left-10 md:right-auto md:top-7"
      >
        <p className="text-pretty font-sans text-lg font-medium leading-relaxed tracking-normal text-foreground sm:text-[1.375rem] pt-2">
          We craft brands, interfaces, and high-performance digital experiences for the ambitious.
        </p>
        <Link
          href="/contact"
          className="group flex min-h-[48px] w-fit items-center gap-3 rounded-full bg-foreground px-6 py-3 font-mono text-[11px] uppercase tracking-widest text-background transition-all hover:scale-105 active:scale-95"
        >
          Chat With Us
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>

      {/* Oversized wordmark */}
      <div className="relative z-10 flex w-full flex-col items-start">
        <h1 className="sr-only">OBX Studio</h1>
        <div className="flex flex-col items-start font-heading text-[24vw] font-bold leading-[0.82] tracking-tighter text-foreground sm:text-[22vw] md:text-[19vw]">
          <div aria-hidden="true">
            <Line text={LINE1} delay={0.15} />
          </div>
          <div className="flex items-center justify-start gap-4">
            <div aria-hidden="true">
              <Line text={LINE2} delay={0.28} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.4 }}
        className="absolute bottom-10 left-5 right-5 z-10 flex flex-row items-end justify-between gap-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:text-[11px] md:left-10 md:right-10"
      >
        <div className="flex flex-col gap-2">
          <span className="leading-relaxed">
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
      </motion.div>
    </section>
  )
}
