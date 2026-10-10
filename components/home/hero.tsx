'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { usePreloader } from '@/components/layout-wrapper'
import { ArrowUpRight, Instagram, Linkedin } from 'lucide-react'

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

  const rotateX = useTransform(springY, [-0.5, 0.5], [7, -7])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-9, 9])
  const translateX = useTransform(springX, [-0.5, 0.5], [-12, 12])
  const translateY = useTransform(springY, [-0.5, 0.5], [-8, 8])

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
  const yWordmark = useTransform(scrollY, [0, 600], ['0%', '18%'])
  const opacityWordmark = useTransform(scrollY, [0, 450], [1, 0.35])
  const scaleShowcase = useTransform(scrollY, [0, 600], [1, 0.94])
  const yShowcase = useTransform(scrollY, [0, 600], ['0%', '12%'])
  const opacityShowcase = useTransform(scrollY, [0, 550], [1, 0.25])

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] pt-[calc(env(safe-area-inset-top,0px)+5rem)] md:pt-[calc(env(safe-area-inset-top,0px)+5.5rem)] pb-8 px-4 sm:px-6 md:px-10 selection:bg-black/10 select-none border-b border-black/5"
    >
      {/* Soft Light Architectural Gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(255, 255, 255, 0.9) 0%, rgba(243, 243, 244, 0.8) 55%, #ECECED 100%)',
        }}
      />

      {/* Subtle architectural grid / grain dots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.8) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Top Meta Sub-Bar */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={!loading ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
        transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        className="relative z-10 w-full flex items-center justify-between text-xs sm:text-sm font-sans tracking-tight text-neutral-600 pb-2 sm:pb-4"
      >
        <span className="font-normal text-neutral-800 text-[11px] sm:text-xs md:text-sm tracking-normal">
          Web Design, Digital Direction &amp; Brand Systems
        </span>
        <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] md:text-xs text-neutral-500 tracking-wider">
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
        {/* Massive "OBX Studio" Wordmark Header */}
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
            <h1 className="font-sans font-bold text-[17.5vw] sm:text-[16.5vw] md:text-[16vw] lg:text-[15.2vw] leading-[0.78] tracking-[-0.055em] text-[#0A0A0A] text-center whitespace-nowrap">
              OBX Studio
            </h1>
          </motion.div>
        </motion.div>

        {/* Centerpiece Showcase using the OBX Fash AVIF asset (Sharp Corners) */}
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
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-full flex items-center justify-center will-change-transform group cursor-pointer"
          >
            {/* Soft shadow bloom beneath the card */}
            <div className="absolute inset-0 bg-black/10 blur-2xl pointer-events-none scale-95 translate-y-4" />

            {/* Framed Editorial Card with OBX Fash AVIF Image (Removed rounded corners -> sharp rectangular profile) */}
            <Link
              href="/work/obx-fash"
              className="relative w-full block rounded-none overflow-hidden border border-black/15 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.22)] transition-all duration-500 hover:border-black/35 hover:shadow-[0_28px_60px_-15px_rgba(0,0,0,0.3)]"
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-neutral-100 rounded-none">
                <Image
                  src="/work/obx-fash-2.avif"
                  alt="OBX Fash editorial campaign showcase"
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 780px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] rounded-none"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle protective vignette overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />

                {/* Integrated badge in reference style */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 flex items-center gap-2">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-white bg-black/75 backdrop-blur-md px-2.5 py-1 border border-white/15">
                    Featured Work &bull; OBX Fash
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 font-sans text-xs text-white/90 bg-black/55 backdrop-blur-md px-2.5 py-1 border border-white/10 group-hover:bg-black/75 group-hover:text-white transition-colors">
                    <span>View Project</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Subtle Baseline / Indicator with IG & LK Icons in bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={!loading ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
        className="relative z-10 w-full flex items-center justify-between text-[11px] sm:text-xs text-neutral-500 font-mono tracking-wider pt-2"
      >
        <span className="hidden sm:inline font-sans text-neutral-600">OBX STUDIO &copy; 2026</span>
        <span className="text-center w-full sm:w-auto text-neutral-600 tracking-normal font-sans text-xs">
          Johannesburg-based digital studio crafting bespoke web experiences
        </span>
        <div className="flex items-center gap-3 text-neutral-700">
          <a
            href="https://www.instagram.com/obxstudio_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-black transition-colors"
            aria-label="Instagram profile"
            title="Instagram"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">IG</span>
          </a>
          <span className="text-neutral-300">/</span>
          <a
            href="https://www.linkedin.com/company/obxstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-black transition-colors"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">LK</span>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
