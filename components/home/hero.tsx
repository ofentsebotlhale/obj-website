'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { motion } from 'motion/react'

const EASE = [0.22, 1, 0.36, 1] as const
const LINE1 = 'OBX'
const LINE2 = 'STUDIO'

function Line({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1, ease: EASE, delay }}
      >
        {text}
      </motion.span>
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
    <section className="relative flex min-h-[100svh] flex-col justify-between px-5 pb-10 pt-28 md:px-10 md:pt-32">
      {/* Top meta row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.0 }}
        className="relative z-10 flex items-start justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
      >
        <span className="max-w-[14rem] leading-relaxed">
          Digital design & branding studio
        </span>
        <span className="hidden text-right leading-relaxed sm:block">
          Est. 2018
          <br />
          Johannesburg — South Africa
        </span>
      </motion.div>

      {/* Oversized wordmark */}
      <div className="relative z-10 flex flex-col">
        <h1 className="font-heading text-[24vw] font-bold leading-[0.82] tracking-tighter text-foreground sm:text-[22vw] md:text-[19vw]">
          <Line text={LINE1} delay={0.15} />
          <span className="flex items-end justify-between gap-4">
            <Line text={LINE2} delay={0.28} />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2, ease: EASE }}
              className="mb-[2vw] hidden max-w-xs text-pretty font-sans text-sm font-normal leading-relaxed tracking-normal text-muted-foreground md:block"
            >
              We craft brands, interfaces, and high-performance digital experiences
              for the ambitious.
            </motion.span>
          </span>
        </h1>
      </div>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.4 }}
        className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-10">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground mr-auto sm:mr-0">
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block"
            >
              ↓
            </motion.span>
            Scroll to explore
          </div>
          
          <Link
            href="/work"
            className="group flex w-fit items-center gap-3 rounded-full bg-foreground px-6 py-3 min-h-[44px] font-mono text-[11px] uppercase tracking-widest text-background transition-all hover:opacity-80"
          >
            View projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
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
        </div>
      </motion.div>
    </section>
  )
}
