'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/lib/projects'
import { Reveal, RevealWords } from '@/components/anim/reveal'

export function FeaturedWork({ items }: { items: Project[] }) {
  if (!items || items.length === 0) return null

  const heroProject = items[0]
  const gridProjects = items.slice(1, 5) // Take up to 4 more projects

  return (
    <div className="w-full pb-10 md:pb-20 flex flex-col gap-6 md:gap-10">
      {/* Hero Project Card */}
      <Reveal>
        <Link href={`/work#${heroProject.slug}`} className="group block w-full outline-none">
          <div className="relative w-full overflow-hidden rounded-[2rem] border border-border bg-background min-h-[60vh] md:min-h-[80vh] flex flex-col justify-end transition-transform duration-500 hover:scale-[0.98]">
            <div className="absolute inset-0 z-0 overflow-hidden bg-black">
              <Image
                src={heroProject.image || "/placeholder.svg"}
                alt={heroProject.title}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            </div>
            
            <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col justify-end w-full lg:w-3/4">
              <div className="mb-6 flex items-baseline gap-5 md:mb-8 md:gap-8">
                <span className="font-mono text-xs uppercase tracking-widest text-accent bg-accent/20 px-3 py-1 rounded-full border border-accent/30">
                  Featured Case
                </span>
              </div>
              
              <h3 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                {heroProject.title}
              </h3>
              
              <p className="font-sans text-lg leading-relaxed text-white/80 sm:text-xl md:text-2xl line-clamp-2 md:line-clamp-3 mb-8 max-w-3xl">
                {heroProject.overview}
              </p>
              
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex flex-wrap gap-2">
                  {heroProject.services.slice(0, 3).map((s: string) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/20 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-white bg-white/10 backdrop-blur-sm"
                    >
                      {s}
                    </span>
                  ))}
                  {heroProject.services.length > 3 && (
                    <span className="rounded-full border border-white/20 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-white bg-white/10 backdrop-blur-sm">
                      +{heroProject.services.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Reveal>

      {/* Grid Projects */}
      {gridProjects.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {gridProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <Link href={`/work#${project.slug}`} className="group block w-full outline-none">
                <div className="relative w-full overflow-hidden rounded-[1.5rem] border border-border bg-background min-h-[40vh] md:min-h-[50vh] flex flex-col justify-end transition-transform duration-500 hover:scale-[0.98]">
                  <div className="absolute inset-0 z-0 overflow-hidden bg-black">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>
                  
                  <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end w-full">
                    <h3 className="font-heading text-2xl font-semibold tracking-tight text-white md:text-3xl mb-3">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm leading-relaxed text-white/70 line-clamp-2 mb-6">
                      {project.overview}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.slice(0, 2).map((s: string) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-white bg-white/10 backdrop-blur-sm"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  )
}
