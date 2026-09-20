'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { usePreloader } from '@/components/layout-wrapper'
import { HeroAmbient } from '@/components/anim/hero-ambient'

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const { loading } = usePreloader()
  const { scrollY } = useScroll()

  const yWordmark = useTransform(scrollY, [0, 650], ['0%', '28%'])
  const scaleWordmark = useTransform(scrollY, [0, 650], [1, 0.82])
  const opacityWordmark = useTransform(scrollY, [0, 460], [1, 0])
  const yContent = useTransform(scrollY, [0, 650], ['0%', '12%'])

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-black px-4 pb-5 pt-[calc(env(safe-area-inset-top,0px)+1.25rem)] text-white md:px-8 md:pb-7 md:pt-[calc(env(safe-area-inset-top,0px)+1.75rem)]">
      <HeroAmbient />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_68%_45%,rgba(255,255,255,0.12),transparent_28%)]" />

      <header className="relative z-10 flex items-start justify-between border-t border-white/30 pt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/65 md:text-[10px]">
        <span>OBX / 01—26</span>
        <span className="hidden md:block">Independent digital studio</span>
        <span>JHB, ZA</span>
      </header>

      <motion.div style={{ y: yContent }} className="relative z-10 mt-14 max-w-5xl md:mt-20">
        <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.24em] text-white/55 md:text-[10px]">Brand, interface, motion</p>
        <h2 className="max-w-4xl font-sans text-[clamp(2.6rem,6.6vw,6.8rem)] font-normal leading-[0.88] tracking-[-0.06em] text-white">
          <span className="block overflow-hidden pb-1"><motion.span initial={{ y: '110%' }} animate={!loading ? { y: '0%' } : { y: '110%' }} transition={{ duration: 0.9, delay: 0.1, ease: EASE }} className="block">WE DESIGN</motion.span></span>
          <span className="block overflow-hidden pb-1"><motion.span initial={{ y: '110%' }} animate={!loading ? { y: '0%' } : { y: '110%' }} transition={{ duration: 0.9, delay: 0.18, ease: EASE }} className="block">HOW BUSINESSES</motion.span></span>
          <span className="block overflow-hidden pb-1"><motion.span initial={{ y: '110%' }} animate={!loading ? { y: '0%' } : { y: '110%' }} transition={{ duration: 0.9, delay: 0.26, ease: EASE }} className="block">ARE SEEN ONLINE<span className="text-white/35">.</span></motion.span></span>
        </h2>
      </motion.div>

      <motion.div
        style={{ y: yContent }}
        initial={{ opacity: 0, y: 10 }}
        animate={!loading ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/70 md:right-8 md:flex"
      >
        <a href="https://www.instagram.com/obxstudio_/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">IG ↗</a>
        <a href="https://www.linkedin.com/company/obxstudio/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">LI ↗</a>
      </motion.div>

      <motion.div style={{ y: yWordmark, scale: scaleWordmark, opacity: opacityWordmark }} className="relative z-10 flex flex-1 origin-bottom flex-col justify-end gap-8 md:gap-12">
        <div className="flex items-end justify-between border-b border-white/25 pb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/55 md:text-[10px]">
          <span className="max-w-[13rem] leading-relaxed md:max-w-none">Websites with a point of view.</span>
          <span className="hidden md:block">Scroll to explore ↓</span>
          <span>© 2026</span>
        </div>
        <div className="w-full select-none overflow-hidden text-white">
          <motion.h1
            initial={{ y: '100%', opacity: 0 }}
            animate={!loading ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
            className="whitespace-nowrap text-center font-sans text-[22vw] font-normal leading-[0.68] tracking-[-0.09em] md:text-[18vw]"
          >
            OBX<span className="text-white/35">/</span>
          </motion.h1>
        </div>
      </motion.div>
    </section>
  )
}
