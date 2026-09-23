'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { Project } from '@/lib/projects'
import { ParallaxImage } from '@/components/anim/parallax-image'

interface WorksParallaxProps {
  items: Project[]
}

interface EditorialCardProps {
  project: Project
  aspectClass?: string
  sizes?: string
  className?: string
  parallaxSpeed?: number
}

function EditorialProjectCard({
  project,
  aspectClass = 'aspect-[4/5]',
  sizes = '(max-width: 768px) 100vw, 50vw',
  className = '',
  parallaxSpeed = 30,
}: EditorialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const kicker = project.kicker || project.title.toUpperCase()
  const tagline = project.tagline || project.overview

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const yParallax = useTransform(
    scrollYProgress,
    [0, 1],
    [parallaxSpeed * 0.5, -parallaxSpeed * 0.5]
  )

  return (
    <div ref={cardRef} className={`w-full group ${className}`}>
      <Link href={`/work/${project.slug}`} className="block w-full outline-none">
        {/* Header: Small uppercase kicker, badge & editorial headline */}
        <div className="mb-4 md:mb-5">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-[11px] md:text-xs uppercase tracking-wider text-neutral-400 transition-colors group-hover:text-neutral-300">
              {kicker}
            </span>
            {project.badge && (
              <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/20 text-neutral-400">
                {project.badge}
              </span>
            )}
          </div>
          <h3 className="font-sans text-lg sm:text-xl md:text-2xl font-normal text-white tracking-tight leading-snug text-balance transition-colors group-hover:text-neutral-200">
            {tagline}
          </h3>
        </div>

        {/* Media Frame with subtle parallax & smooth zoom */}
        <motion.div
          style={{ y: yParallax }}
          className={`relative w-full ${aspectClass} overflow-hidden bg-neutral-950 transition-all duration-500`}
        >
          <ParallaxImage
            src={project.image}
            alt={project.title}
            sizes={sizes}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            containerClassName="absolute inset-0 z-0 overflow-hidden"
            motionClassName="absolute inset-[-10%]"
            yOffset={['-6%', '6%']}
          />
        </motion.div>
      </Link>
    </div>
  )
}

export function HomepageWorksParallax({ items }: WorksParallaxProps) {
  const p1 = items[0] // OBX Fash
  const p2 = items[1] // OB and associates

  if (!p1) return null

  return (
    <section className="bg-black text-white pt-28 pb-20 md:pt-40 md:pb-28 lg:pt-52 lg:pb-36 px-6 md:px-[6vw] lg:px-[8vw] w-full overflow-hidden">
      <div className="max-w-[1920px] mx-auto w-full">
        {/* Mobile Top Statement (shows only on mobile before the cards) */}
        <div className="block md:hidden mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-normal tracking-tight text-white leading-[1.1] text-balance">
            Good brands communicate.
            <br />
            Great brands build trust.
          </h2>
        </div>

        {/* Asymmetrical 2-Column Grid Matching the Editorial Aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 lg:gap-x-14 gap-y-16 items-start w-full">
          {/* Left Column: Project 1 (OBX Fash - Editorial Portrait) */}
          <div className="md:col-span-6 lg:col-span-6">
            <EditorialProjectCard
              project={p1}
              aspectClass="aspect-[4/5] sm:aspect-[3/4]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
              parallaxSpeed={25}
            />
          </div>

          {/* Right Column: Headline + Project 2 (OB and associates - Screen Mockup) */}
          <div className="md:col-span-6 lg:col-span-6 flex flex-col justify-start">
            {/* Desktop Headline */}
            <div className="hidden md:flex justify-end mb-20 lg:mb-28 xl:mb-36">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal tracking-tight text-white leading-[1.08] text-balance text-left w-full max-w-lg">
                Good brands communicate.
                <br />
                Great brands build trust.
              </h2>
            </div>

            {/* Project 2 Card */}
            {p2 && (
              <div className="w-full">
                <EditorialProjectCard
                  project={p2}
                  aspectClass="aspect-[16/10] sm:aspect-[4/3]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                  parallaxSpeed={40}
                />
              </div>
            )}
          </div>
        </div>

        {/* Bottom Editorial Bar: View all, Count, Year */}
        <div className="mt-28 md:mt-40 lg:mt-52 pt-8 md:pt-10 border-t border-white/10 flex items-center justify-between text-white">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 font-heading text-2xl sm:text-3xl md:text-4xl font-normal text-white hover:text-neutral-400 transition-colors"
          >
            <span>View all</span>
            <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-0.5">
              ↳
            </span>
          </Link>

          <span className="font-mono text-xs sm:text-sm text-neutral-400 tracking-widest">
            (02)
          </span>

          <span className="font-mono text-xs sm:text-sm text-neutral-400 tracking-widest">
            © 24. 26
          </span>
        </div>
      </div>
    </section>
  )
}
