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
  sizeClass: string
  parallaxSpeed: number
  alignmentClass: string
}

const cardConfigs: CardConfig[] = [
  { sizeClass: 'w-full max-w-[766px]', parallaxSpeed: 30, alignmentClass: 'md:ml-0 md:mr-auto' },
  { sizeClass: 'w-full max-w-[462px]', parallaxSpeed: 65, alignmentClass: 'md:ml-auto md:mr-0 md:mt-24' },
  { sizeClass: 'w-full max-w-[352px]', parallaxSpeed: 100, alignmentClass: 'md:mx-auto md:-mt-12' },
  { sizeClass: 'w-full max-w-[572px]', parallaxSpeed: 40, alignmentClass: 'md:ml-0 md:mr-auto md:mt-16' },
  { sizeClass: 'w-full max-w-[418px]', parallaxSpeed: 80, alignmentClass: 'md:ml-auto md:mr-0 md:-mt-8' },
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
    <div ref={cardRef} className="w-full">
      <motion.div style={{ y }} className={`flex flex-col gap-6 md:gap-8 ${config.sizeClass} mx-auto ${config.alignmentClass}`}>
        
        <Reveal>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] md:text-xs text-muted-foreground block mb-2">
              0{index + 1}
            </span>
            <div className="flex items-baseline justify-between">
              <h3 className="font-sans text-xl md:text-2xl uppercase tracking-tight font-medium text-background">
                {project.title}
              </h3>
            </div>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground/80">
              {project.category} &middot; {project.year}
            </p>
          </div>
        </Reveal>

        <Link href={`/work/${project.slug}`} className="group block w-full outline-none">
          <motion.div 
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative w-full aspect-square overflow-hidden bg-background rounded-none transition-all duration-500"
          >
            <ParallaxImage
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              priority={index === 0}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              containerClassName="absolute inset-0 z-0 overflow-hidden"
              motionClassName="absolute inset-[-12%]"
              yOffset={['-8%', '8%']}
            />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  )
}

export function HomepageWorksParallax({ items }: WorksParallaxProps) {
  return (
    <section className="bg-foreground text-background py-24 md:py-32 lg:py-48 px-[5vw] md:px-[8vw] w-full overflow-hidden flex flex-col justify-center">
      <div className="max-w-[1920px] mx-auto">
        {/* Section Header */}
        <div className="mb-24 md:mb-32 lg:mb-40">
          <Reveal>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-background uppercase">
              WORKS
            </h2>
          </Reveal>
        </div>

        {/* Asymmetrical Grid with Square Image Containers of Different Sizes & Container Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32 lg:gap-48 items-start">
          {items.map((project, index) => (
            <ProjectParallaxCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* Bottom View All Link */}
        <div className="mt-32 md:mt-48 lg:mt-64 flex justify-center md:justify-end">
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
