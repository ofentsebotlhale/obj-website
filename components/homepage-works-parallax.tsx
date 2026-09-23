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
        {/* Header: Small uppercase kicker & editorial headline */}
        <div className="mb-4 md:mb-5">
          <span className="block font-mono text-[11px] md:text-xs uppercase tracking-wider text-neutral-400 mb-1.5 transition-colors group-hover:text-neutral-300">
            {kicker}
          </span>
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
  // Map specific projects matching the editorial layout, with safe index fallbacks
  const p1 = items.find((p) => p.slug === 'utopia') || items[0]
  const p2 = items.find((p) => p.slug === 'aurbse') || items[1] || items[0]
  const p3 = items.find((p) => p.slug === 'in-cognita') || items[2] || items[0]
  const p4 = items.find((p) => p.slug === 'lgm') || items[3] || items[0]
  const p5 = items.find((p) => p.slug === 'haptify') || items[4] || items[0]

  return (
    <section className="bg-black text-white pt-28 pb-20 md:pt-40 md:pb-28 lg:pt-52 lg:pb-36 px-6 md:px-[6vw] lg:px-[8vw] w-full overflow-hidden">
      <div className="max-w-[1920px] mx-auto w-full">
        {/* Mobile Top Statement (shows only on mobile before the cards) */}
        <div className="block md:hidden mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-normal tracking-tight text-white leading-[1.1] text-balance">
            Good brands communicate.
            <br />
            Great brands surprise.
          </h2>
        </div>

        {/* Top Band: Utopia on Left, Headline + Aurbse on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 lg:gap-x-14 gap-y-16 items-start w-full">
          {/* Top Left: Utopia (Vertical Portrait in ferns) */}
          <div className="md:col-span-6 lg:col-span-6">
            <EditorialProjectCard
              project={p1}
              aspectClass="aspect-[4/5] sm:aspect-[3/4]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
              parallaxSpeed={25}
            />
          </div>

          {/* Top Right: Headline + Aurbse (Monitor on desk) */}
          <div className="md:col-span-6 lg:col-span-6 flex flex-col justify-start">
            {/* Desktop Headline */}
            <div className="hidden md:flex justify-end mb-20 lg:mb-28 xl:mb-36">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal tracking-tight text-white leading-[1.08] text-balance text-left w-full max-w-lg">
                Good brands communicate.
                <br />
                Great brands surprise.
              </h2>
            </div>

            {/* Aurbse Card */}
            <div className="w-full">
              <EditorialProjectCard
                project={p2}
                aspectClass="aspect-[16/10] sm:aspect-[4/3]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                parallaxSpeed={40}
              />
            </div>
          </div>
        </div>

        {/* Middle Band: In_Cognita (Centered / Staggered Widescreen Laptop) */}
        <div className="my-24 md:my-36 lg:my-48 grid grid-cols-1 md:grid-cols-12 w-full">
          <div className="md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 w-full">
            <EditorialProjectCard
              project={p3}
              aspectClass="aspect-[16/10] sm:aspect-[16/9]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 65vw"
              parallaxSpeed={30}
            />
          </div>
        </div>

        {/* Lower Band: LGM on Left, Haptify on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 lg:gap-x-14 gap-y-16 items-start w-full">
          {/* Bottom Left: LGM (Industrial Signage) */}
          <div className="md:col-span-5 lg:col-span-5">
            <EditorialProjectCard
              project={p4}
              aspectClass="aspect-[4/3]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
              parallaxSpeed={20}
            />
          </div>

          {/* Bottom Right: Haptify (Taller Angled Laptop on Chrome Tubes) */}
          <div className="md:col-span-7 lg:col-span-6 md:col-start-6 lg:col-start-7 md:mt-24 lg:mt-36">
            <EditorialProjectCard
              project={p5}
              aspectClass="aspect-[4/5] sm:aspect-square lg:aspect-[4/5]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 50vw"
              parallaxSpeed={45}
            />
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
            (07)
          </span>

          <span className="font-mono text-xs sm:text-sm text-neutral-400 tracking-widest">
            © 24. 26
          </span>
        </div>
      </div>
    </section>
  )
}

