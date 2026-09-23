'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

/**
 * OBX STUDIO — POST-WORK VISUAL INTERLUDE
 *
 * PURPOSE:
 * An intentional visual pause and art-directed interlude between the black Work gallery
 * and the subsequent studio philosophy sections. Rather than jumping into another text-heavy
 * block, this creates a spacious, tactile, surreal "breathing space" centered around a
 * singular digital artifact.
 *
 * EVENTUAL MEDIA ASSET SPECIFICATION:
 * Target file: `/public/media/home/post-work-visual.mp4` (or `/public/media/home/post-work-visual.webp`)
 *
 * Recommended format & aesthetics:
 * - 6–12 second seamless loop (H.265 / VP9 MP4 or high-density WebP).
 * - Silent / muted, no audio track, autoplay, playsInline.
 * - Visual subject: Monochromatic or refractive clear crystal / liquid glass sculpture
 *   suspended weightlessly in pure pitch-black negative space (#000000).
 * - Optical refractions, subtle chromatic dispersion along glossy edges, tactile caustics.
 * - Avoid: Stock business imagery, office desks, laptops, or generic gradient blobs.
 * - Preservation: The container below preserves 3:4 aspect ratio, focal crop, scale,
 *   and responsive alignment so replacement media drops in seamlessly.
 */

export function PostWorkInterlude() {
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Subtle transform physics for the floating digital object
  // Moves organically as the user travels through the section
  const objectY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [70, -70]
  )

  const objectScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    shouldReduceMotion ? [1, 1, 1, 1] : [0.95, 1.02, 1.0, 0.96]
  )

  const objectRotate = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-1.5, 1.8]
  )

  // Asymmetrical text annotation moves at an offset pace (depth cue)
  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [35, -45]
  )

  // Macro detail (Phase 2) subtle scroll drift
  const macroY = useTransform(
    scrollYProgress,
    [0.4, 1],
    shouldReduceMotion ? [0, 0] : [90, -50]
  )

  const macroScale = useTransform(
    scrollYProgress,
    [0.4, 1],
    shouldReduceMotion ? [1, 1] : [0.98, 1.04]
  )

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black text-white overflow-hidden select-none"
    >
      {/* =========================================================================
          PHASE 1: THE FLOATING OBJECT & ASYMMETRICAL ANNOTATION
          ========================================================================= */}
      <section className="relative min-h-[90svh] md:min-h-[115svh] w-full flex flex-col justify-between px-6 md:px-[6vw] lg:px-[8vw] pt-20 md:pt-32 pb-16 md:pb-24">
        {/* Subtle background ambient grain / deep negative space */}
        <div className="absolute inset-0 bg-black pointer-events-none" />

        {/* Top Spacer to preserve breathing space below Works */}
        <div className="w-full h-8 md:h-16" />

        {/* Main Composition Arena (12-column grid with deliberate asymmetrical tension) */}
        <div className="relative z-10 w-full max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 lg:gap-x-12 items-center flex-1 my-auto">
          {/* LEFT: THE SUSPENDED DIGITAL OBJECT (Occupies cols 1-8 on md/lg) */}
          <div className="md:col-span-7 lg:col-span-7 xl:col-span-6 md:col-start-1 flex justify-center md:justify-start">
            <motion.div
              style={{
                y: objectY,
                scale: objectScale,
                rotate: objectRotate,
              }}
              className="relative w-full max-w-[420px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[620px] aspect-[3/4] flex items-center justify-center"
            >
              {/* Eventual Video / Media Element Container */}
              <div className="relative w-full h-full overflow-hidden">
                {/* 
                  MEDIA PLACEHOLDER:
                  This renders the high-res visual placeholder (`/media/home/post-work-visual.webp`).
                  When an mp4 loop is placed at `/media/home/post-work-visual.mp4`, it can be swapped
                  into this exact frame without touching dimensions, layout, or animations.
                */}
                <Image
                  src="/media/home/post-work-visual.webp"
                  alt="OBX Studio — The Digital Object, Refractive Glass Form"
                  fill
                  priority
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 55vw, 45vw"
                  className="object-contain object-center transition-transform duration-1000 ease-out"
                />

                {/* Subtle glass reflection shimmer overlay on mount */}
                <motion.div
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none mix-blend-screen"
                />
              </div>
            </motion.div>
          </div>

          {/* RIGHT: EDITORIAL ANNOTATION (Middle-right offset with vertical hairline datum) */}
          <motion.div
            style={{ y: textY }}
            className="md:col-span-5 lg:col-span-4 xl:col-span-4 md:col-start-8 lg:col-start-9 flex items-center justify-between md:pl-6 lg:pl-10"
          >
            <div className="flex flex-col items-start max-w-xs sm:max-w-sm">
              {/* Mono kicker with parentheses as in reference */}
              <motion.span
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-neutral-400 block mb-4"
              >
                ( THE DIGITAL OBJECT )
              </motion.span>

              {/* Minimal 2-line supporting phrase */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="font-sans text-base sm:text-lg lg:text-xl font-light text-neutral-200 tracking-tight leading-relaxed text-pretty"
              >
                Ideas take shape in
                <br />
                unexpected forms.
              </motion.p>
            </div>

            {/* Subtle vertical hairline datum on far right (visible on md+) */}
            <div className="hidden lg:block h-36 xl:h-48 w-px bg-gradient-to-b from-white/25 via-white/10 to-transparent ml-8" />
          </motion.div>
        </div>

        {/* BOTTOM METADATA BAR: OBX / 001 */}
        <div className="relative z-10 w-full max-w-[1920px] mx-auto pt-8 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-neutral-500"
          >
            OBX / 001
          </motion.div>

          {/* Coordinate indicator for technical boutique poise */}
          <div className="hidden sm:block font-mono text-[10px] tracking-[0.2em] text-neutral-600 uppercase">
            26°12′S 28°02′E — JHB
          </div>
        </div>
      </section>

      {/* =========================================================================
          PHASE 2: MACRO CINEMATIC CAUSTIC PERSPECTIVE
          (Continuity of the refractive glass form sweeping across the lower viewport)
          ========================================================================= */}
      <section className="relative w-full min-h-[60svh] md:min-h-[85svh] flex flex-col justify-end overflow-hidden px-6 md:px-[6vw] lg:px-[8vw] pb-16 md:pb-28">
        <div className="max-w-[1920px] mx-auto w-full relative z-10 flex flex-col justify-end">
          {/* Macro Glass Caustic Ribbon Container */}
          <motion.div
            style={{
              y: macroY,
              scale: macroScale,
            }}
            className="relative w-full aspect-[21/9] sm:aspect-[2.4/1] overflow-hidden rounded-none my-6 md:my-10"
          >
            <Image
              src="/media/home/post-work-visual-macro.webp"
              alt="OBX Studio — Optical Caustic Macro Detail"
              fill
              referrerPolicy="no-referrer"
              sizes="100vw"
              className="object-cover object-center opacity-85 hover:opacity-100 transition-opacity duration-700"
            />

            {/* Gradient edge vignettes for cinematic bleed into void */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />
          </motion.div>

          {/* Macro Secondary Footnote */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-neutral-400">
              [ 01.1 — TACTILE FORM & REFRACTION ]
            </span>
            <span className="font-sans text-xs sm:text-sm text-neutral-400 font-light tracking-tight max-w-sm">
              Obsessive attention to digital materiality, contrast, and physical presence.
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEAMLESS TRANSITION GRADIENT INTO SUBSEQUENT WHITE SECTIONS
          Gently fades from pure void into light background without an abrupt chop.
          ========================================================================= */}
      <div className="w-full h-24 sm:h-36 md:h-52 bg-gradient-to-b from-black via-black/80 to-background pointer-events-none" />
    </div>
  )
}
