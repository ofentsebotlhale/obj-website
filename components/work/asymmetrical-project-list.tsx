'use client'

import React from 'react'
import Link from 'next/link'
import { Reveal } from '@/components/anim/reveal'
import type { Project } from '@/lib/projects'
import { ParallaxImage } from '@/components/anim/parallax-image'

export function AsymmetricalProjectList({ items }: { items: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 relative">
      {items.map((project, i) => (
        <ProjectCard key={project.slug} project={project} index={i} />
      ))}
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isOdd = index % 2 !== 0

  return (
    <div className={`flex flex-col gap-6 ${isOdd ? 'md:mt-32' : 'md:mb-32'}`}>
      <Reveal>
        <Link 
          href={`/work/${project.slug}`}
          className="group relative block w-full overflow-hidden rounded-[2rem] bg-muted cursor-pointer"
        >
          <div className="relative w-full aspect-video overflow-hidden">
            <ParallaxImage
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              priority={index < 2}
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-white backdrop-blur-md bg-black/70 px-6 py-3 rounded-full transition-transform duration-300 group-hover:scale-105">
              View Case Study
            </span>
          </div>
        </Link>
      </Reveal>

      <div className="flex flex-col gap-6">
        <Reveal delay={0.1}>
          <Link href={`/work/${project.slug}`} className="group flex items-baseline justify-between border-b border-border/50 pb-4">
            <h3 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl group-hover:opacity-80 transition-opacity">
              {project.title}
            </h3>
            <span className="font-mono text-sm tracking-widest text-foreground opacity-60">{project.year}</span>
          </Link>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-widest text-foreground">
              {project.category}
            </span>
            <Link 
              href={`/work/${project.slug}`}
              className="font-mono text-xs uppercase tracking-widest text-foreground hover:opacity-70 transition-opacity flex items-center gap-1"
            >
              <span>Explore</span>
              <span>→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
