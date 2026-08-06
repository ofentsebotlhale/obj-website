'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { usePreloader } from '@/components/layout-wrapper'
import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Instagram } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const { loading } = usePreloader()
  const { scrollY } = useScroll()
  
  // Transform values for scroll animation
  const opacity = useTransform(scrollY, [0, 150], [1, 0])
  const y = useTransform(scrollY, [0, 200], ['-50%', '-150%'])
  const scale = useTransform(scrollY, [0, 200], [1, 0.5])

  return (
    <section className="relative flex h-[100svh] max-h-[100svh] w-full flex-col justify-between overflow-hidden bg-background px-4 pb-4 pt-[calc(env(safe-area-inset-top,0px)+1.25rem)] md:px-8 md:pb-6 md:pt-[calc(env(safe-area-inset-top,0px)+1.75rem)] text-foreground font-sans selection:bg-foreground selection:text-background">

      {/* Top Left Stack */}
      <div className="w-full flex flex-col justify-start items-start relative z-10 max-w-4xl">
        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-black tracking-tight leading-[1.05] uppercase text-balance break-words overflow-hidden">
          <motion.span
            initial={{ y: '100%' }}
            animate={!loading ? { y: '0%' } : { y: '100%' }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="block"
          >
            BUILDING DIGITAL EXPERIENCES THAT MOVE THE NEEDLE.
          </motion.span>
        </h2>
        
        <motion.div className="overflow-hidden mt-4">
          <motion.p
            initial={{ y: '100%' }}
            animate={!loading ? { y: '0%' } : { y: '100%' }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-black font-bold"
          >
            Creative Web Design
          </motion.p>
        </motion.div>
        
        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={!loading ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
          className="mt-[28.8px]"
        >
          <Link href="/contact" className="inline-flex items-center justify-center bg-black text-white hover:opacity-80 transition-opacity" style={{ borderRadius: '80px', padding: '12px 28px', fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em', boxShadow: 'none' }}>
            SCHEDULE A CALL &rarr;
          </Link>
        </motion.div>
      </div>

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
            <h1 className="font-sans font-black text-[13vw] sm:text-[14vw] md:text-[14.5vw] lg:text-[15vw] leading-[0.75] tracking-tighter uppercase whitespace-nowrap">
              OBX STUDIO
            </h1>
          </motion.div>
        </div>
        
      </div>
    </section>
  )
}
