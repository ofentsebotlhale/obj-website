'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { usePreloader } from '@/components/layout-wrapper'

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const { loading } = usePreloader()
  const { scrollY } = useScroll()
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse tilt interaction for the 3D sculpture
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 45, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 45, damping: 25 })

  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-14, 14])
  const translateX = useTransform(springX, [-0.5, 0.5], [-18, 18])
  const translateY = useTransform(springY, [-0.5, 0.5], [-12, 12])

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      // Normalize from -0.5 to 0.5
      mouseX.set(e.clientX / innerWidth - 0.5)
      mouseY.set(e.clientY / innerHeight - 0.5)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // Scroll parallax transforms
  const yWordmark = useTransform(scrollY, [0, 600], ['0%', '22%'])
  const opacityWordmark = useTransform(scrollY, [0, 450], [1, 0.2])
  const scaleSculpture = useTransform(scrollY, [0, 600], [1, 0.88])
  const ySculpture = useTransform(scrollY, [0, 600], ['0%', '16%'])
  const opacitySculpture = useTransform(scrollY, [0, 550], [1, 0.15])

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
            'radial-gradient(ellipse 65% 55% at 50% 58%, rgba(42, 42, 52, 0.38) 0%, rgba(14, 14, 18, 0.8) 60%, #060608 100%)',
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
          Animation, Branding and Creative Direction
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

      {/* Main Visual Arena: Big Wordmark + 3D Render Centerpiece */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center -my-2 sm:-my-4">
        {/* Massive "anima" Wordmark Header */}
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
            <h1 className="font-sans font-bold text-[22vw] sm:text-[21vw] md:text-[20vw] lg:text-[19.2vw] leading-[0.76] tracking-[-0.055em] text-white lowercase text-center whitespace-nowrap">
              anima
            </h1>
          </motion.div>
        </motion.div>

        {/* Glossy 3D Centerpiece Render */}
        <motion.div
          style={{
            y: ySculpture,
            scale: scaleSculpture,
            opacity: opacitySculpture,
          }}
          className="relative w-full max-w-[320px] sm:max-w-[480px] md:max-w-[620px] lg:max-w-[760px] aspect-[16/10] sm:aspect-[16/9] -mt-8 sm:-mt-14 md:-mt-20 lg:-mt-24 flex items-center justify-center [perspective:1200px]"
        >
          {/* Interactive Mouse Tilt & Gentle Floating Motion */}
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
              y: [-7, 7, -7],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-full h-full flex items-center justify-center will-change-transform"
          >
            {/* Subtle soft backdrop reflection bloom */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/[0.04] to-transparent rounded-full blur-3xl pointer-events-none scale-75" />

            <Image
              src="/media/home/hero-3d.jpg"
              alt="anima creative direction 3D sculpture"
              width={1280}
              height={720}
              priority
              quality={95}
              className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_24px_60px_rgba(0,0,0,0.9)]"
              referrerPolicy="no-referrer"
            />
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
        <span className="hidden sm:inline">STUDIO &copy; 2026</span>
        <span className="text-center w-full sm:w-auto text-white/50 tracking-normal font-sans text-xs">
          Creative studio exploring form, motion and digital identity
        </span>
        <span className="hidden sm:inline">SELECTED WORKS [01 &mdash; 08]</span>
      </motion.div>
    </section>
  )
}
