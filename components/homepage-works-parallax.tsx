'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { motion, useTransform, useScroll } from 'framer-motion'
import type { Project } from '@/lib/projects'
import { Reveal } from '@/components/anim/reveal'
import { ParallaxImage } from '@/components/anim/parallax-image'

interface WorksParallaxProps {
  items: Project[]
}

interface CardConfig {
  colSpanClass: string
  parallaxSpeed: number
  alignmentClass: string
  sizes: string
}

const cardConfigs: CardConfig[] = [
  { colSpanClass: 'md:col-span-8 lg:col-span-7 md:col-start-1', parallaxSpeed: 30, alignmentClass: 'md:mt-0', sizes: '(max-width: 768px) 100vw, 60vw' },
  { colSpanClass: 'md:col-span-6 lg:col-span-5 md:col-start-7 lg:col-start-8', parallaxSpeed: 50, alignmentClass: 'md:mt-64 lg:mt-80', sizes: '(max-width: 768px) 100vw, 40vw' },
  { colSpanClass: 'md:col-span-7 lg:col-span-6 md:col-start-1', parallaxSpeed: 20, alignmentClass: 'md:mt-32 lg:mt-48', sizes: '(max-width: 768px) 100vw, 50vw' },
  { colSpanClass: 'md:col-span-6 lg:col-span-5 md:col-start-7 lg:col-start-8', parallaxSpeed: 60, alignmentClass: 'md:mt-64 lg:mt-80', sizes: '(max-width: 768px) 100vw, 45vw' },
  { colSpanClass: 'md:col-span-8 lg:col-span-7 md:col-start-2', parallaxSpeed: 35, alignmentClass: 'md:mt-32 lg:mt-48', sizes: '(max-width: 768px) 100vw, 60vw' },
]

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
    <div ref={cardRef} className={`w-full ${config.colSpanClass} ${config.alignmentClass}`}>
      <motion.div style={{ y }} className="flex flex-col w-full mx-auto">
        <Reveal>
          <div className="flex flex-col gap-2 mb-6 md:mb-8">
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-background/60 block">
              {project.title}
            </span>
            <h3 className="font-sans text-2xl md:text-3xl lg:text-4xl tracking-tight font-medium text-background leading-tight">
              {project.overview}
            </h3>
          </div>
        </Reveal>

        <Link href={`/work/${project.slug}`} className="group block w-full outline-none">
          <div className="relative w-full aspect-square overflow-hidden bg-background rounded-none transition-all duration-500">
            <ParallaxImage
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              sizes={config.sizes}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              containerClassName="absolute inset-0 z-0 overflow-hidden"
              motionClassName="absolute inset-[-12%]"
              yOffset={['-8%', '8%']}
            />
            {/* Composited Reveal Overlay */}
            <motion.div
              initial={{ scaleY: 1 }}
              whileInView={{ scaleY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="absolute inset-0 z-10 bg-foreground origin-bottom"
            />
          </div>
        </Link>
      </motion.div>
    </div>
  )
}

export function HomepageWorksParallax({ items }: WorksParallaxProps) {
  return (
    <section className="bg-foreground text-background py-24 md:py-32 lg:py-48 px-6 md:px-[5vw] w-full overflow-hidden flex flex-col justify-center">
      <div className="max-w-[1920px] mx-auto w-full">
        {/* Section Header */}
        <div className="mb-24 md:mb-32 lg:mb-48 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          <div className="md:col-span-5 lg:col-span-4">
            <Reveal>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-background uppercase">
                WORKS
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="font-sans text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-background leading-tight">
                Good brands communicate.<br />Great brands surprise.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Asymmetrical Grid with Container Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-y-0 gap-x-6 md:gap-x-12 items-start w-full">
          {items.map((project, index) => (
            <ProjectParallaxCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* Bottom View All Link */}
        <div className="mt-24 md:mt-48 flex justify-center md:justify-end">
          <Reveal>
            <Link
              href="/work"
              data-cursor="All"
              className="group inline-flex items-center font-sans text-sm md:text-base font-medium transition-colors hover:text-muted-foreground text-background"
            >
              <span className="border-b border-background/30 pb-0.5 group-hover:border-background transition-colors">
                View all
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
