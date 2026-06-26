'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { Reveal, RevealWords } from '@/components/anim/reveal'
import type { Project } from '@/lib/projects'

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
  const [isExpanded, setIsExpanded] = useState(false)

  const isOdd = index % 2 !== 0

  return (
    <div className={`flex flex-col gap-6 ${isOdd ? 'md:mt-32' : 'md:mb-32'}`}>
      <Reveal>
        <div 
          className="group relative w-full overflow-hidden rounded-[2rem] bg-muted cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="relative w-full aspect-video">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-white backdrop-blur-md bg-black/30 px-6 py-3 rounded-full">
              {isExpanded ? 'Close Case' : 'View Case'}
            </span>
          </div>
        </div>
      </Reveal>

      <div className="flex flex-col gap-6">
        <Reveal delay={0.1}>
          <div className="flex items-baseline justify-between border-b border-border/50 pb-4">
            <h3 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {project.title}
            </h3>
            <span className="font-mono text-sm tracking-widest text-muted-foreground">{project.year}</span>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {project.category}
            </span>
          </div>
        </Reveal>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="py-6 space-y-10 border-t border-border mt-2">
                <div className="flex flex-wrap gap-2">
                  {project.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-foreground bg-muted/30"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="space-y-8">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-3">
                      Overview
                    </p>
                    <p className="font-sans text-base leading-relaxed text-foreground/90">
                      {project.overview}
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-3">
                      Challenge
                    </p>
                    <p className="font-sans text-base leading-relaxed text-muted-foreground">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-3">
                      Solution
                    </p>
                    <p className="font-sans text-base leading-relaxed text-muted-foreground">
                      {project.solution}
                    </p>
                  </div>

                  <div className="bg-card/40 rounded-xl p-6 border border-border/40">
                    <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground mb-5">
                      Results
                    </p>
                    <ul className="flex flex-col gap-4">
                      {project.results.map((res, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-foreground font-sans text-sm md:text-[15px] font-medium leading-relaxed"
                        >
                          <span className="text-accent shrink-0 mt-0.5">✦</span>
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>

                    {project.link !== '#' && (
                      <div className="flex border-t border-border/40 pt-6 mt-8 items-center justify-between">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent hover:text-foreground transition-colors"
                        >
                          <span>Visit Live Website</span>
                          <span>↗</span>
                        </a>
                      </div>
                    )}
                  </div>
                  
                  {project.images && project.images.length > 0 && (
                    <div className="flex flex-col gap-6 pt-4">
                      {project.images.slice(1).map((img, i) => (
                        <div key={i} className="relative w-full aspect-video overflow-hidden rounded-[1.5rem] bg-muted">
                          <Image
                            src={img}
                            alt={`${project.title} screenshot ${i + 2}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
