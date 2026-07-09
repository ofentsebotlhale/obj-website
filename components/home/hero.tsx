'use client'

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
      className="inline-block origin-center cursor-default select-none hover:text-foreground/80 transition-colors duration-300"
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
    <section className="relative flex min-h-[100svh] flex-col px-5 pb-8 pt-32 md:px-10 md:pt-36">
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
        className="relative z-10 flex flex-col gap-6 max-w-sm flex-none md:ml-auto md:text-right md:items-end"
      >
        <p className="text-pretty font-sans text-xl sm:text-2xl font-medium leading-relaxed tracking-normal text-foreground">
          We craft brands, interfaces, and high-performance digital experiences for the ambitious.
        </p>
        <Link
          href="/work"
          className="group flex w-fit items-center gap-4 rounded-full bg-foreground px-8 py-4 min-h-[56px] font-mono text-xs uppercase tracking-widest text-background transition-all hover:scale-105 active:scale-95"
        >
          View projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </motion.div>

      {/* Oversized wordmark */}
      <div className="relative z-10 flex flex-col flex-grow justify-center py-12 md:py-20">
        <h1 className="sr-only">OBX Studio</h1>
        <div className="font-heading text-[24vw] font-bold leading-[0.82] tracking-tighter text-foreground sm:text-[22vw] md:text-[19vw]">
          <div aria-hidden="true">
            <Line text={LINE1} delay={0.15} />
          </div>
          <div className="flex items-end justify-between gap-4">
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
        className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground flex-none"
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block"
            >
              ↓
            </motion.span>
            Scroll to explore
          </div>
          <span className="leading-relaxed">
            Digital design & branding studio
          </span>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-left sm:text-right mt-4 sm:mt-0">
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/obxstudio/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/obxstudio_/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
          </div>
          <span className="hidden sm:inline-block text-foreground/30">/</span>
          <span>Johannesburg — South Africa</span>
        </div>
      </motion.div>
    </section>
  )
}
