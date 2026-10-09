'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { usePreloader } from '@/components/layout-wrapper'

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const { loading } = usePreloader()
  const { scrollY } = useScroll()
  const yType = useTransform(scrollY, [0, 700], ['0%', '16%'])
  const opacityMeta = useTransform(scrollY, [0, 420], [1, 0])

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-background px-5 pb-6 pt-[calc(env(safe-area-inset-top,0px)+1.5rem)] text-foreground md:px-8 md:pb-8 md:pt-[calc(env(safe-area-inset-top,0px)+2rem)]">
      <header className="relative z-10 flex items-start justify-between border-t border-foreground/20 pt-3 font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/60 md:text-[10px]">
        <a href="#top" className="text-foreground transition-opacity hover:opacity-60" aria-label="OBX home">OBX®</a>
        <span className="hidden md:block">Independent creative studio</span>
        <a href="#contact" className="transition-opacity hover:opacity-60">Let&apos;s talk ↗</a>
      </header>

      <motion.div style={{ opacity: opacityMeta }} className="relative z-10 flex items-end justify-between gap-8 pb-8 pt-20 md:pb-10 md:pt-28">
        <p className="max-w-[15rem] text-[clamp(1.1rem,2.2vw,2rem)] leading-[0.98] tracking-[-0.045em]">
          A small studio<br />for significant ideas.
        </p>
        <p className="hidden max-w-[11rem] text-right font-mono text-[9px] uppercase leading-[1.45] tracking-[0.16em] text-foreground/55 md:block">
          Brand systems<br />Digital experiences<br />Motion &amp; direction
        </p>
      </motion.div>

      <motion.div style={{ y: yType }} className="relative z-10 -mx-1 mt-auto">
        <div className="mb-3 flex items-center justify-between border-b border-foreground/20 pb-3 font-mono text-[9px] uppercase tracking-[0.16em] text-foreground/55 md:text-[10px]">
          <span>Based in Johannesburg</span>
          <span>Scroll to explore ↓</span>
        </div>
        <div className="relative">
          <div className="mb-3 flex items-end justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-foreground/55 md:mb-5 md:text-[10px]">
            <span>OBX / 001</span>
            <span className="flex items-center gap-2"><i className="block h-1.5 w-1.5 rounded-full bg-foreground" /> Johannesburg — SA</span>
          </div>
          <h1 className="overflow-hidden text-[22vw] font-sans font-normal leading-[0.72] tracking-[-0.105em] md:text-[18vw]">
            <motion.span
              initial={{ y: '110%' }}
              animate={!loading ? { y: '0%' } : { y: '110%' }}
              transition={{ duration: 1, delay: 0.15, ease: EASE }}
              className="block"
            >
              OBX<span className="text-foreground/35">®</span>
            </motion.span>
          </h1>
          <div className="mt-4 flex items-start justify-between border-t border-foreground/20 pt-3 md:mt-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/55">Independent creative studio</span>
            <span className="text-[clamp(1.2rem,2vw,1.8rem)] leading-none tracking-[-0.06em]">STUDIO</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

