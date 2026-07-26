'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
import type { Project } from '@/lib/projects'
import { Reveal } from '@/components/anim/reveal'
import { ParallaxImage } from '@/components/anim/parallax-image'

interface WorksParallaxProps {
  items: Project[]
}

interface CardConfig {
  sizeClass: string
  parallaxSpeed: number
  alignmentClass: string
}

const cardConfigs: CardConfig[] = [
  { sizeClass: 'w-full max-w-[580px]', parallaxSpeed: 30, alignmentClass: 'justify-self-start' },
  { sizeClass: 'w-full max-w-[420px]', parallaxSpeed: 65, alignmentClass: 'justify-self-end md:mt-24' },
  { sizeClass: 'w-full max-w-[320px]', parallaxSpeed: 100, alignmentClass: 'justify-self-center md:-mt-12' },
  { sizeClass: 'w-full max-w-[520px]', parallaxSpeed: 40, alignmentClass: 'justify-self-start md:mt-16' },
  { sizeClass: 'w-full max-w-[380px]', parallaxSpeed: 80, alignmentClass: 'justify-self-end md:-mt-8' },
]

function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 })
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['3deg', '-3deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-3deg', '3deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      className="w-full relative perspective-[1000px] hover:z-10"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="w-full h-full relative"
      >
        <motion.div style={{ translateZ: '20px' }} className="w-full h-full block">
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

function ProjectParallaxCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const config = cardConfigs[index % cardConfigs.length]

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  // Smaller images have a higher parallax displacement speed
  const y = useTransform(scrollYProgress, [0, 1], [config.parallaxSpeed, -config.parallaxSpeed])

  return (
    <div ref={cardRef} className={`w-full ${config.alignmentClass}`}>
      <motion.div style={{ y }} className={`flex flex-col gap-3 ${config.sizeClass} mx-auto md:mx-0`}>
        {/* Text OUTSIDE and ABOVE the image on top */}
        <Link href={`/work/${project.slug}`} className="group block space-y-1 outline-none">
          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white group-hover:text-neutral-300 transition-colors">
            {project.title}
          </h3>
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            {project.category}
          </p>
        </Link>

        {/* Square Image Container with no rounded edges */}
        <TiltCard>
          <Link href={`/work/${project.slug}`} className="group block w-full outline-none">
            <div className="relative w-full aspect-square overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl rounded-none transition-all duration-500 group-hover:border-white/50">
              <ParallaxImage
                src={project.image || '/placeholder.svg'}
                alt={project.title}
                priority={index === 0}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                containerClassName="absolute inset-0 z-0 overflow-hidden"
                motionClassName="absolute inset-[-12%]"
                yOffset={['-8%', '8%']}
              />
            </div>
          </Link>
        </TiltCard>
      </motion.div>
    </div>
  )
}

export function HomepageWorksParallax({ items }: WorksParallaxProps) {
  return (
    <section className="bg-black text-white py-24 md:py-36 px-5 md:px-10 w-full overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                02 / Selected Works
              </h3>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white">
                Featured Builds
              </h2>
            </div>
            <Link
              href="/work"
              data-cursor="All"
              className="group inline-flex items-center gap-2 border border-white/20 bg-white/5 px-6 py-3 font-mono text-[11px] uppercase tracking-widest transition-all duration-300 hover:border-white hover:bg-white hover:text-black rounded-none text-white"
            >
              <span>View all projects</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </Link>
          </Reveal>
        </div>

        {/* Asymmetrical Grid with Square Image Containers of Different Sizes & Container Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          {items.map((project, index) => (
            <ProjectParallaxCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
