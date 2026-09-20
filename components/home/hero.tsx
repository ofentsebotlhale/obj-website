'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { usePreloader } from '@/components/layout-wrapper'
import { HeroAmbient } from '@/components/anim/hero-ambient'

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const { loading } = usePreloader()
  const { scrollY } = useScroll()
  
  const yWordmark = useTransform(scrollY, [0, 500], ['0%', '30%'])
  const scaleWordmark = useTransform(scrollY, [0, 500], [1, 0.9])
  const opacityWordmark = useTransform(scrollY, [0, 400], [1, 0])
  const yContent = useTransform(scrollY, [0, 500], ['0%', '15%'])

  return (
    <section className="relative flex h-[100svh] max-h-[100svh] w-full flex-col justify-between overflow-hidden bg-background pt-[calc(env(safe-area-inset-top,0px)+1.25rem)] md:pt-[calc(env(safe-area-inset-top,0px)+1.75rem)] text-foreground font-sans">
      <HeroAmbient />

      {/* Top Left Stack */}
      <motion.div style={{ y: yContent }} className="w-full flex flex-col justify-start items-start relative z-10 max-w-4xl mt-0 md:mt-4 px-4 md:px-8">
        <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl text-foreground font-normal tracking-tight leading-none mix-blend-difference">
          <span className="block overflow-hidden pb-1">
            <motion.span
              initial={{ y: '110%' }}
              animate={!loading ? { y: '0%' } : { y: '110%' }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              className="block"
            >
              WE DESIGN
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-1">
            <motion.span
              initial={{ y: '110%' }}
              animate={!loading ? { y: '0%' } : { y: '110%' }}
              transition={{ duration: 0.9, delay: 0.18, ease: EASE }}
              className="block"
            >
              HOW BUSINESSES
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-1">
            <motion.span
              initial={{ y: '110%' }}
              animate={!loading ? { y: '0%' } : { y: '110%' }}
              transition={{ duration: 0.9, delay: 0.26, ease: EASE }}
              className="block"
            >
              ARE SEEN ONLINE.
            </motion.span>
          </span>
        </h2>
        
        <motion.div className="mt-8 max-w-sm overflow-hidden mix-blend-difference">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={!loading ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
            className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed font-light"
          >
            Websites that make businesses clearer, more credible and more distinct online.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        style={{ y: yContent }}
        initial={{ opacity: 0, y: 10 }}
        animate={!loading ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
        className="absolute right-4 md:right-8 top-[45%] sm:top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 text-foreground font-mono text-[10px] md:text-xs uppercase tracking-widest"
      >
        <a
          href="https://www.instagram.com/obxstudio_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:opacity-60 transition-opacity"
        >
          IG &rarr;
        </a>
        <a
          href="https://www.linkedin.com/company/obxstudio/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:opacity-60 transition-opacity"
        >
          LI &rarr;
        </a>
      </motion.div>

      {/* Bottom Layout - Wordmark */}
      <motion.div style={{ y: yWordmark, scale: scaleWordmark, opacity: opacityWordmark }} className="w-full flex flex-col relative z-10 flex-1 justify-end origin-bottom">
        <div className="w-full flex flex-col items-center justify-end text-foreground select-none overflow-hidden pb-0 pointer-events-none mix-blend-difference">
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={!loading ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{ duration: 1.0, ease: EASE, delay: 0.1 }}
            className="w-full text-center flex flex-col items-center"
          >
            <h1 className="font-sans font-normal text-[17.2vw] sm:text-[17.1vw] md:text-[17vw] lg:text-[16.85vw] leading-[0.76] tracking-tight uppercase whitespace-nowrap w-full text-center">
              OBX STUDIO
            </h1>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

