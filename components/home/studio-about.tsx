'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

/**
 * OBX STUDIO — STUDIO / PHILOSOPHY MANIFESTO
 *
 * Positioned immediately after the Post-Work Visual Interlude.
 * Acts as the ideological core of the site: an architectural, asymmetric
 * typographic manifesto with deliberate breathing room, progressive masked reveals,
 * floating spatial descriptors, and a seamless bridge into capabilities (What We Build).
 */

const EASE_MANIFESTO = [0.22, 1, 0.36, 1] as const

export function StudioAbout() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Subtle floating scroll-drift for the three spatial descriptors
  const desc1Y = useTransform(
    scrollYProgress,
    [0.2, 0.9],
    shouldReduceMotion ? [0, 0] : [25, -35]
  )
  const desc2Y = useTransform(
    scrollYProgress,
    [0.2, 0.9],
    shouldReduceMotion ? [0, 0] : [-15, 30]
  )
  const desc3Y = useTransform(
    scrollYProgress,
    [0.2, 0.9],
    shouldReduceMotion ? [0, 0] : [35, -25]
  )

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-background text-foreground overflow-hidden pt-28 pb-24 md:pt-44 md:pb-36 lg:pt-60 lg:pb-48 xl:pt-72 xl:pb-60 px-6 md:px-[6vw] lg:px-[8vw] select-none"
    >
      <div className="max-w-[1920px] mx-auto w-full">
        
        {/* =========================================================================
            PHASE 1: THE STUDIO ANNOTATION & TOP HAIRLINE
            ========================================================================= */}
        <div className="flex items-center justify-between border-b border-border/40 pb-6 mb-20 md:mb-32 lg:mb-40">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-foreground rounded-full inline-block" />
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.28em] text-muted-foreground">
              THE STUDIO — MANIFESTO
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground uppercase hidden sm:block">
              ( 02 / PHILOSOPHY )
            </span>
            <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground uppercase">
              JHB / ZA
            </span>
          </div>
        </div>

        {/* =========================================================================
            PHASE 2: ASYMMETRICAL PROGRESSIVE MANIFESTO
            Split across two spatial quadrants for architectural rhythm
            ========================================================================= */}
        <div className="w-full flex flex-col space-y-16 sm:space-y-24 md:space-y-36 lg:space-y-48">
          
          {/* Quadrant A: Left-aligned opening statement */}
          <div className="max-w-5xl">
            <div className="overflow-hidden pb-2 sm:pb-3">
              <motion.h2
                initial={shouldReduceMotion ? { opacity: 0 } : { y: '115%', x: -16, opacity: 0 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { y: '0%', x: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.9, ease: EASE_MANIFESTO }}
                className="font-sans text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium uppercase tracking-tight text-foreground leading-[1.02] text-balance"
              >
                WE DON&apos;T BUILD WEBSITES
              </motion.h2>
            </div>

            <div className="overflow-hidden pb-2 sm:pb-3 pl-0 md:pl-12 lg:pl-20">
              <motion.h2
                initial={shouldReduceMotion ? { opacity: 0 } : { y: '115%', x: 20, opacity: 0 }}
                whileInView={shouldReduceMotion ? { opacity: 1 } : { y: '0%', x: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.95, delay: 0.12, ease: EASE_MANIFESTO }}
                className="font-sans text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium uppercase tracking-tight text-foreground/50 leading-[1.02] text-balance"
              >
                TO FILL A SITEMAP.
              </motion.h2>
            </div>
          </div>

          {/* Quadrant B: Right-shifted resolving statement */}
          <div className="w-full flex justify-end">
            <div className="max-w-5xl w-full text-left md:text-right">
              <div className="overflow-hidden pb-2 sm:pb-3">
                <motion.h2
                  initial={shouldReduceMotion ? { opacity: 0 } : { y: '115%', x: -12, opacity: 0 }}
                  whileInView={shouldReduceMotion ? { opacity: 1 } : { y: '0%', x: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.9, delay: 0.22, ease: EASE_MANIFESTO }}
                  className="font-sans text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium uppercase tracking-tight text-foreground leading-[1.02] text-balance"
                >
                  WE BUILD THEM TO GIVE A BUSINESS
                </motion.h2>
              </div>

              <div className="overflow-hidden pb-2 sm:pb-3 pr-0 md:pr-8 lg:pr-14">
                <motion.h2
                  initial={shouldReduceMotion ? { opacity: 0 } : { y: '115%', x: 24, opacity: 0 }}
                  whileInView={shouldReduceMotion ? { opacity: 1 } : { y: '0%', x: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.95, delay: 0.32, ease: EASE_MANIFESTO }}
                  className="font-sans text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium uppercase tracking-tight text-foreground leading-[1.02] text-balance"
                >
                  A SHARPER POSITION ONLINE.
                </motion.h2>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PHASE 3: SUPPORTING COPY & STUDIO PROFILE LINK
            Positioned with quiet authority, visually subservient to the manifesto
            ========================================================================= */}
        <div className="mt-28 md:mt-40 lg:mt-56 grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 lg:gap-x-12 items-start">
          {/* Subtle architectural vertical rule */}
          <div className="hidden md:block md:col-span-1 lg:col-span-2">
            <div className="w-px h-32 bg-border/60" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="md:col-span-7 lg:col-span-6 space-y-6"
          >
            <p className="font-sans text-lg sm:text-xl md:text-2xl font-light text-foreground/80 leading-relaxed text-pretty">
              OBX Studio is an independent, design-led digital studio based in Johannesburg.
            </p>
            <p className="font-sans text-base sm:text-lg md:text-xl font-light text-muted-foreground leading-relaxed text-pretty">
              We work across strategy, interface design and development to create websites that feel considered, communicate clearly and hold up technically.
            </p>

            <div className="pt-4">
              <Link
                href="/studio"
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground hover:text-muted-foreground transition-colors"
              >
                <span className="border-b border-foreground/30 pb-0.5 group-hover:border-foreground transition-colors">
                  READ FULL STUDIO PROFILE
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Quiet Technical Datum */}
          <div className="md:col-span-4 lg:col-span-4 flex md:justify-end">
            <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-muted-foreground/80 max-w-xs leading-relaxed">
              [ POSITION ]
              <br />
              BOUTIQUE PRACTICE.
              <br />
              HIGH-TRUST COMMERCIAL WEB.
            </div>
          </div>
        </div>

        {/* =========================================================================
            PHASE 4: FLOATING EDITORIAL DESCRIPTORS
            Spatial arrangement across the coordinate plane with scroll-linked drift
            ========================================================================= */}
        <div className="mt-32 md:mt-48 lg:mt-64 relative min-h-[160px] md:min-h-[220px]">
          {/* Subtle top hairline across the descriptor area */}
          <div className="w-full h-px bg-border/40 mb-12 md:mb-16" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Descriptor 01 */}
            <motion.div
              style={{ y: desc1Y }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="flex flex-col items-start space-y-2 group"
            >
              <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                ( 01 / APPROACH )
              </span>
              <h3 className="font-sans text-xl sm:text-2xl lg:text-3xl font-normal uppercase tracking-tight text-foreground">
                DESIGN-LED.
              </h3>
              <p className="font-mono text-[11px] text-muted-foreground/70 uppercase tracking-wider">
                Clear aesthetic authority.
              </p>
            </motion.div>

            {/* Descriptor 02 */}
            <motion.div
              style={{ y: desc2Y }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="flex flex-col items-start space-y-2 lg:mt-8 group"
            >
              <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                ( 02 / STANDARD )
              </span>
              <h3 className="font-sans text-xl sm:text-2xl lg:text-3xl font-normal uppercase tracking-tight text-foreground">
                TECHNICALLY RIGOROUS.
              </h3>
              <p className="font-mono text-[11px] text-muted-foreground/70 uppercase tracking-wider">
                Fluid physics, zero bloat.
              </p>
            </motion.div>

            {/* Descriptor 03 */}
            <motion.div
              style={{ y: desc3Y }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="flex flex-col items-start space-y-2 lg:mt-16 group"
            >
              <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                ( 03 / MEDIUM )
              </span>
              <h3 className="font-sans text-xl sm:text-2xl lg:text-3xl font-normal uppercase tracking-tight text-foreground">
                BUILT FOR THE WEB.
              </h3>
              <p className="font-mono text-[11px] text-muted-foreground/70 uppercase tracking-wider">
                Native to modern screens.
              </p>
            </motion.div>
          </div>
        </div>

        {/* =========================================================================
            PHASE 5: TRANSITION BRIDGE INTO CAPABILITIES (WHAT WE BUILD)
            Editorial link that visually directs the user into WhatWeDesign
            ========================================================================= */}
        <div className="mt-32 md:mt-48 lg:mt-64 pt-10 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              [ PHILOSOPHY → CAPABILITY ]
            </span>
            <p className="font-mono text-xs sm:text-sm uppercase tracking-wider text-foreground">
              TURNING POSITIONING INTO MEASURABLE ARTIFACTS
            </p>
          </div>

          <div className="flex items-center gap-3 text-foreground">
            <span className="font-mono text-xs uppercase tracking-[0.2em]">
              WHAT WE BUILD
            </span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="text-lg leading-none"
            >
              ↓
            </motion.span>
          </div>
        </div>

      </div>
    </section>
  )
}
