'use client'

import { motion } from 'framer-motion'
import { usePreloader } from '@/components/layout-wrapper'
import Link from 'next/link'
import { Linkedin, Instagram } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const { loading } = usePreloader()

  return (
    <section className="relative flex h-[100svh] max-h-[100svh] w-full flex-col justify-between overflow-hidden bg-background px-2 py-2 md:px-4 md:py-4 text-foreground font-sans selection:bg-foreground selection:text-background">
      {/* Top spacer for nav */}
      <div className="h-12 sm:h-14 md:h-16 w-full flex-shrink-0" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }} aria-hidden="true" />

      {/* Main Title Section - Edge-to-edge display wordmark */}
      <div className="w-full flex-1 flex flex-col justify-center items-center">
        <h1 className="sr-only">OBX STUDIO</h1>
        <div className="w-full flex flex-col items-center justify-center text-foreground select-none overflow-hidden">
          {/* Edge to edge wordmark using SVG text to scale based on viewport width */}
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={!loading ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{ duration: 1.0, ease: EASE, delay: 0.1 }}
            className="w-full"
          >
            <svg viewBox="0 0 800 160" className="w-full h-auto block overflow-visible select-none" preserveAspectRatio="xMidYMid meet">
              <text
                x="50%"
                y="50%"
                dominantBaseline="central"
                textAnchor="middle"
                className="font-heading font-bold fill-foreground"
                style={{ fontSize: '136px', letterSpacing: '-0.03em' }}
              >
                OBX STUDIO
              </text>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Bottom Layout Anchors */}
      <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 flex-shrink-0 relative z-10">
        
        {/* Bottom-Left: CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={!loading ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
        >
          <Link href="/contact" className="inline-flex items-center justify-center bg-foreground text-background border border-background/40" style={{ borderRadius: '80px', padding: '12.8px 28.8px 12.8px 16px', fontSize: '14px', fontWeight: 500, letterSpacing: '1.12px', boxShadow: 'none' }}>
            START A PROJECT
          </Link>
        </motion.div>

        {/* Bottom-Right: Social Links in 9.6px tracked uppercase */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={!loading ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          className="flex items-center gap-4 text-foreground md:self-end self-start"
        >
          <div className="bg-foreground text-background px-2 py-1 flex items-center justify-center font-mono text-[9.6px] font-bold uppercase" style={{ borderRadius: '3.2px', letterSpacing: '0.288px' }}>
            EN
          </div>
          <a
            href="https://www.linkedin.com/company/obxstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:opacity-70 transition-opacity"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/obxstudio_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:opacity-70 transition-opacity"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
