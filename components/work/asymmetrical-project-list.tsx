'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { Project } from '@/lib/projects'
import { ParallaxImage } from '@/components/anim/parallax-image'

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

export function AsymmetricalProjectList({ items }: { items: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 relative items-start">
      {items.map((project, i) => (
        <ProjectCard key={project.slug} project={project} index={i} />
      ))}
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const config = cardConfigs[index % cardConfigs.length]

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  // Smaller image containers move at higher parallax speeds
  const y = useTransform(scrollYProgress, [0, 1], [config.parallaxSpeed, -config.parallaxSpeed])

  return (
    <div ref={cardRef} className={`w-full ${config.alignmentClass}`}>
      <motion.div style={{ y }} className={`flex flex-col gap-3 ${config.sizeClass} mx-auto md:mx-0`}>
        {/* Text OUTSIDE and ABOVE the image on top */}
        <Link href={`/work/${project.slug}`} className="group block space-y-1 outline-none">
          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground group-hover:text-muted-foreground transition-colors">
            {project.title}
          </h3>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {project.category}
          </p>
        </Link>

        {/* Square Image Container with sharp corners */}
        <Link href={`/work/${project.slug}`} className="group block w-full outline-none">
          <div className="relative w-full aspect-square overflow-hidden border border-border/70 bg-muted/40 shadow-xl rounded-none transition-all duration-500 group-hover:border-foreground/50">
            <ParallaxImage
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              priority={index < 2}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              containerClassName="absolute inset-0 z-0 overflow-hidden"
              motionClassName="absolute inset-[-12%]"
              yOffset={['-8%', '8%']}
            />
          </div>
        </Link>
      </motion.div>
    </div>
  )
}
