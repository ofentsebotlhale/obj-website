'use client'

import { motion } from 'framer-motion'
import { usePreloader } from '@/components/layout-wrapper'
import Link from 'next/link'
import { Linkedin, Instagram } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const { loading } = usePreloader()

  return (
    <section className="relative flex h-[100svh] max-h-[100svh] w-full flex-col justify-between overflow-hidden bg-background px-4 py-4 md:px-8 md:py-6 text-foreground font-sans selection:bg-foreground selection:text-background">
      {/* Top spacer for nav */}
      <div className="h-16 md:h-20 w-full flex-shrink-0" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }} aria-hidden="true" />

      {/* Top Left Stack */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={!loading ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        className="w-full flex flex-col justify-start items-start relative z-10 max-w-4xl"
      >
        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-black tracking-tight leading-[1.05] uppercase text-balance">
          BUILDING DIGITAL EXPERIENCES THAT MOVE THE NEEDLE.
        </h2>
        <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-black mt-4 font-bold">
          Creative Web Design
        </p>
        
        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={!loading ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          className="mt-[28.8px]"
        >
          <Link href="/contact" className="inline-flex items-center justify-center bg-black text-white hover:opacity-80 transition-opacity" style={{ borderRadius: '80px', padding: '12px 28px', fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em', boxShadow: 'none' }}>
            SCHEDULE A CALL &rarr;
          </Link>
        </motion.div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={!loading ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
        className="absolute right-4 md:right-8 top-[45%] sm:top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 text-black"
      >
        <a
          href="https://www.linkedin.com/company/obxstudio/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:opacity-70 transition-opacity p-2 border border-black/10 rounded-full bg-background"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
        </a>
        <a
          href="https://www.instagram.com/obxstudio_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:opacity-70 transition-opacity p-2 border border-black/10 rounded-full bg-background"
          aria-label="Instagram"
        >
          <Instagram className="w-4 h-4 md:w-5 md:h-5" />
        </a>
      </motion.div>

      {/* Bottom Layout - Wordmark */}
      <div className="w-full flex flex-col relative z-10 gap-8 md:gap-12 flex-1 justify-end">
        
        {/* Wordmark (Bottom Pinned) */}
        <div className="w-full flex flex-col items-center justify-end text-black select-none overflow-hidden pb-2 pointer-events-none">
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={!loading ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{ duration: 1.0, ease: EASE, delay: 0.1 }}
            className="w-full text-center flex flex-col items-center"
          >
            <svg viewBox="0 0 1000 135" className="w-full h-auto block overflow-visible select-none" preserveAspectRatio="xMidYMid meet">
              <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" className="font-sans font-black fill-black" style={{ fontSize: '155px', letterSpacing: '-0.04em' }}>
                OBX STUDIO
              </text>
            </svg>
          </motion.div>
        </div>
        
      </div>
    </section>
  )
}
