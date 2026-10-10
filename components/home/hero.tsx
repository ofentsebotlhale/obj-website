'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { usePreloader } from '@/components/layout-wrapper'
import { ArrowUpRight } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const { loading } = usePreloader()
  const { scrollY } = useScroll()
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse tilt interaction for the editorial showcase
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 45, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 45, damping: 25 })

  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10])
  const translateX = useTransform(springX, [-0.5, 0.5], [-14, 14])
  const translateY = useTransform(springY, [-0.5, 0.5], [-10, 10])

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      mouseX.set(e.clientX / innerWidth - 0.5)
      mouseY.set(e.clientY / innerHeight - 0.5)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // Scroll parallax transforms
  const yWordmark = useTransform(scrollY, [0, 600], ['0%', '20%'])
  const opacityWordmark = useTransform(scrollY, [0, 450], [1, 0.25])
  const scaleShowcase = useTransform(scrollY, [0, 600], [1, 0.92])
  const yShowcase = useTransform(scrollY, [0, 600], ['0%', '14%'])
  const opacityShowcase = useTransform(scrollY, [0, 550], [1, 0.2])

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-[#060608] text-white pt-[calc(env(safe-area-inset-top,0px)+5rem)] md:pt-[calc(env(safe-area-inset-top,0px)+5.5rem)] pb-8 px-4 sm:px-6 md:px-10 selection:bg-white/20 select-none"
    >
      {/* Dark Ambient Studio Lighting */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(38, 38, 48, 0.35) 0%, rgba(12, 12, 16, 0.82) 65%, #060608 100%)',
        }}
      />

      {/* Subtle fine studio grain / grid reflection */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.6) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Top Meta Sub-Bar */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={!loading ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
        transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        className="relative z-10 w-full flex items-center justify-between text-xs sm:text-sm font-sans tracking-tight text-white/80 pb-2 sm:pb-4"
      >
        <span className="font-normal text-white/85 text-[11px] sm:text-xs md:text-sm tracking-normal">
          Web Design, Digital Direction &amp; Brand Systems
        </span>
        <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] md:text-xs text-white/50 tracking-wider">
          <span>(scroll)</span>
          <motion.span
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block"
          >
            &darr;
          </motion.span>
        </div>
      </motion.div>

      {/* Main Visual Arena: Big OBX Studio Wordmark + OBX Fash AVIF Showcase Centerpiece */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center -my-2 sm:-my-4">
        {/* Massive "obx studio" Wordmark Header matching reference layout */}
        <motion.div
          style={{ y: yWordmark, opacity: opacityWordmark }}
          className="w-full flex justify-center items-center overflow-hidden"
        >
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={!loading ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
            className="w-full flex justify-center"
          >
            <h1 className="font-sans font-bold text-[18vw] sm:text-[17vw] md:text-[16.5vw] lg:text-[15.8vw] leading-[0.76] tracking-[-0.055em] text-white lowercase text-center whitespace-nowrap">
              obx studio
            </h1>
          </motion.div>
        </motion.div>

        {/* Centerpiece Showcase using the OBX Fash AVIF asset */}
        <motion.div
          style={{
            y: yShowcase,
            scale: scaleShowcase,
            opacity: opacityShowcase,
          }}
          className="relative w-full max-w-[340px] sm:max-w-[500px] md:max-w-[660px] lg:max-w-[780px] -mt-6 sm:-mt-12 md:-mt-16 lg:-mt-20 flex items-center justify-center [perspective:1200px]"
        >
          {/* Interactive Mouse Tilt & Subtle Floating Physics */}
          <motion.div
            style={
              isMounted
                ? {
                    rotateX,
                    rotateY,
                    x: translateX,
                    y: translateY,
                  }
                : {}
            }
            animate={{
              y: [-6, 6, -6],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-full flex items-center justify-center will-change-transform group cursor-pointer"
          >
            {/* Subtle soft backdrop reflection bloom */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/[0.08] via-purple-500/[0.04] to-transparent rounded-2xl blur-3xl pointer-events-none scale-90" />

            {/* Framed Editorial Card with OBX Fash AVIF Image */}
            <Link
              href="/work/obx-fash"
              className="relative w-full block rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] backdrop-blur-sm transition-all duration-500 hover:border-white/35"
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#0c0c10]">
                <Image
                  src="/work/obx-fash-2.avif"
                  alt="OBX Fash editorial campaign showcase"
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 780px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark vignette overlay for seamless studio blending */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl sm:rounded-2xl" />

                {/* Integrated badge in reference style */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 flex items-center gap-2">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-white/90 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
                    Featured Work &bull; OBX Fash
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 font-sans text-xs text-white/70 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 group-hover:text-white transition-colors">
                    <span>View Project</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Subtle Baseline / Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={!loading ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
        className="relative z-10 w-full flex items-center justify-between text-[11px] sm:text-xs text-white/40 font-mono tracking-wider pt-2"
      >
        <span className="hidden sm:inline">OBX STUDIO &copy; 2026</span>
        <span className="text-center w-full sm:w-auto text-white/50 tracking-normal font-sans text-xs">
          Johannesburg-based digital studio crafting bespoke web experiences
        </span>
        <span className="hidden sm:inline">SELECTED WORKS [01 &mdash; 08]</span>
      </motion.div>
    </section>
  )
}
