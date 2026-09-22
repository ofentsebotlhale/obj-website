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
  const formattedIndex = (index + 1).toString().padStart(2, '0')

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  // Small parallax for image wrapper and even smaller for text
  const yImage = useTransform(scrollYProgress, [0, 1], [config.parallaxSpeed, -config.parallaxSpeed])
  const yText = useTransform(scrollYProgress, [0, 1], [config.parallaxSpeed * 0.3, -config.parallaxSpeed * 0.3])

  return (
    <div ref={cardRef} className={`w-full ${config.colSpanClass} ${config.alignmentClass}`}>
      <div className="flex flex-col w-full mx-auto group">
        <Link href={`/work/${project.slug}`} className="block w-full outline-none">
          <motion.div style={{ y: yText }} className="flex flex-col gap-1 mb-4 md:mb-6 pl-2">
            <div className="flex items-center justify-between">
              <motion.span
                initial={{ scale: 0.75, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-mono text-sm md:text-base tracking-widest text-background/30 block group-hover:translate-x-1 transition-transform duration-500 ease-out"
              >
                {formattedIndex}
              </motion.span>
            </div>
            
            <div className="flex items-baseline gap-4">
              <motion.h3 
                initial={{ x: -16, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-sans text-xl md:text-2xl lg:text-3xl tracking-tight font-medium text-background leading-tight uppercase group-hover:translate-x-2 transition-transform duration-500 ease-out"
              >
                {project.title}
              </motion.h3>
            </div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-background/50 block group-hover:text-background/80 transition-colors duration-500 ease-out"
            >
              {project.category} · {project.year}
            </motion.span>
          </motion.div>

          <motion.div style={{ y: yImage }} className="relative w-full aspect-[4/5] overflow-hidden bg-background rounded-none transition-all duration-500">
            <ParallaxImage
              src={project.image}
              alt={project.title}
              sizes={config.sizes}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              containerClassName="absolute inset-0 z-0 overflow-hidden"
              motionClassName="absolute inset-[-12%]"
              yOffset={['-8%', '8%']}
            />
            {/* Composited Reveal Overlay */}
            <motion.div
              initial={{ scaleY: 1 }}
              whileInView={{ scaleY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="absolute inset-0 z-10 bg-foreground origin-bottom pointer-events-none"
            />
          </motion.div>
        </Link>
      </div>
    </div>
  )
}

export function HomepageWorksParallax({ items }: WorksParallaxProps) {
  return (
    <section className="bg-foreground text-background pt-40 pb-24 md:pt-56 md:pb-32 lg:pt-72 lg:pb-48 px-6 md:px-[5vw] w-full overflow-hidden flex flex-col justify-center">
      <div className="max-w-[1920px] mx-auto w-full">
        {/* Section Header */}
        <div className="mb-24 md:mb-32 lg:mb-48 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          <div className="md:col-span-5 lg:col-span-4">
            <Reveal>
              <h2 className="font-mono text-[10px] md:text-xs tracking-widest text-background/50 uppercase">
                WORK
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="font-sans text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-background leading-tight text-pretty">
                SELECTED WORK, <br className="hidden md:block" />
                BUILT TO BE REMEMBERED.
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
