'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { usePreloader } from '@/components/layout-wrapper'
import Link from 'next/link'
import { Linkedin, Instagram } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const { loading } = usePreloader()
  const { scrollY } = useScroll()
  
  const y = useTransform(scrollY, [0, 200], ['0%', '10%'])

  return (
    <section className="relative flex h-[100svh] max-h-[100svh] w-full flex-col justify-between overflow-hidden bg-background px-4 pb-4 pt-[calc(env(safe-area-inset-top,0px)+1.25rem)] md:px-8 md:pb-6 md:pt-[calc(env(safe-area-inset-top,0px)+1.75rem)] text-foreground font-sans">

      {/* Top Left Stack */}
      <div className="w-full flex flex-col justify-start items-start relative z-10 max-w-4xl mt-0">
        <motion.div className="overflow-hidden mb-6">
          <motion.p
            initial={{ y: '100%' }}
            animate={!loading ? { y: '0%' } : { y: '100%' }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-normal"
          >
            DIGITAL STUDIO
          </motion.p>
        </motion.div>
        <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground font-normal tracking-tight leading-[1.05] break-normal overflow-hidden mix-blend-difference">
          <motion.span
            initial={{ y: '100%' }}
            animate={!loading ? { y: '0%' } : { y: '100%' }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="block"
          >
            We Design
          </motion.span>
          <motion.span
            initial={{ y: '100%' }}
            animate={!loading ? { y: '0%' } : { y: '100%' }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="block"
          >
            How Businesses
          </motion.span>
          <motion.span
            initial={{ y: '100%' }}
            animate={!loading ? { y: '0%' } : { y: '100%' }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            className="block"
          >
            Are Seen Online.
          </motion.span>
        </h2>
        
        <motion.div className="overflow-hidden mt-6">
          <motion.p
            initial={{ y: '100%' }}
            animate={!loading ? { y: '0%' } : { y: '100%' }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-normal"
          >
            JOHANNESBURG — ZA
          </motion.p>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={!loading ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
        className="absolute right-4 md:right-8 top-[45%] sm:top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 text-foreground mix-blend-difference font-mono text-[10px] md:text-xs uppercase tracking-widest"
      >
        <a
          href="https://www.instagram.com/obxstudio_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-60 transition-opacity"
        >
          IG &rarr;
        </a>
        <a
          href="https://www.linkedin.com/company/obxstudio/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-60 transition-opacity"
        >
          LI &rarr;
        </a>
      </motion.div>

      {/* Bottom Layout - Wordmark */}
      <motion.div style={{ y }} className="w-full flex flex-col relative z-10 gap-8 md:gap-12 flex-1 justify-end">
        <div className="w-full flex flex-col items-center justify-end text-foreground select-none overflow-hidden pb-2 pointer-events-none mix-blend-difference">
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={!loading ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{ duration: 1.0, ease: EASE, delay: 0.1 }}
            className="w-full text-center flex flex-col items-center"
          >
            <h1 className="font-sans font-normal text-[13vw] sm:text-[14vw] md:text-[14.5vw] lg:text-[15vw] leading-[0.75] tracking-tight uppercase whitespace-nowrap">
              OBX STUDIO
            </h1>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

