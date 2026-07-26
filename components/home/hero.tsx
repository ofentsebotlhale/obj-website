'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative flex h-[100svh] max-h-[100svh] w-full flex-col justify-between overflow-hidden bg-background px-5 py-5 md:px-10 md:py-8 text-foreground font-sans selection:bg-foreground selection:text-background">
      {/* Top spacer to accommodate fixed header (Top-Left Logo & Top-Right Menu Button) */}
      <div className="h-12 sm:h-14 md:h-16 w-full flex-shrink-0" aria-hidden="true" />

      {/* Main Title Section - Editorial Massive Fluid Display contained within viewport */}
      <div className="my-auto w-full mx-auto flex flex-col items-center justify-center py-2 md:py-4 flex-1 min-h-0">
        <h1 className="sr-only">OBX STUDIO</h1>

        <div className="w-full max-w-[1700px] flex flex-col items-start justify-center text-foreground select-none -space-y-1 sm:-space-y-2 md:-space-y-3 lg:-space-y-4">
          {/* Line 1: OBX */}
          <div className="overflow-hidden w-full">
            <motion.div
              initial={false}
              animate={mounted ? { y: ['100%', '0%'], opacity: [0, 1] } : { y: '0%', opacity: 1 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
              className="w-full"
            >
              <svg viewBox="0 0 600 135" className="w-full h-auto block overflow-visible select-none">
                <text
                  x="0"
                  y="116"
                  className="font-heading font-extrabold fill-foreground uppercase"
                  style={{ fontSize: '136px', letterSpacing: '-0.04em' }}
                >
                  OBX
                </text>
              </svg>
            </motion.div>
          </div>

          {/* Line 2: STUDIO */}
          <div className="overflow-hidden w-full">
            <motion.div
              initial={false}
              animate={mounted ? { y: ['100%', '0%'], opacity: [0, 1] } : { y: '0%', opacity: 1 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
              className="w-full"
            >
              <svg viewBox="0 0 600 135" className="w-full h-auto block overflow-visible select-none">
                <text
                  x="0"
                  y="116"
                  className="font-heading font-extrabold fill-foreground uppercase"
                  style={{ fontSize: '136px', letterSpacing: '-0.04em' }}
                >
                  STUDIO
                </text>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Layout Anchors */}
      <div className="w-full max-w-[1700px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 pt-2 md:pt-4 flex-shrink-0">
        {/* Bottom-Left: Stacked Value Prop & Location */}
        <motion.div
          initial={false}
          animate={mounted ? { opacity: [0, 1], y: [20, 0] } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
          className="flex flex-col gap-3 max-w-sm"
        >
          <p className="font-sans text-sm md:text-base leading-snug font-normal text-foreground/90 text-pretty">
            Digital design and engineering for brands that can’t afford to look ordinary.
          </p>
          <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-muted-foreground font-medium">
            WEB DESIGN STUDIO IN JOHANNESBURG
          </p>
        </motion.div>

        {/* Bottom-Right: Social Links */}
        <motion.div
          initial={false}
          animate={mounted ? { opacity: [0, 1], y: [20, 0] } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
          className="flex items-center gap-5 text-foreground self-start md:self-end"
        >
          <a
            href="https://www.linkedin.com/company/obxstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border/80 bg-background/50 backdrop-blur-sm hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 active:scale-95"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/obxstudio_/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border/80 bg-background/50 backdrop-blur-sm hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 active:scale-95"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
