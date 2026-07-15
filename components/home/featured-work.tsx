'use client'

import Link from 'next/link'
import type { Project } from '@/lib/projects'
import { Reveal } from '@/components/anim/reveal'
import { ParallaxImage } from '@/components/anim/parallax-image'

export function FeaturedWork({ items }: { items: Project[] }) {
  if (!items || items.length === 0) return null

  // We take exactly 2 projects: OBX Fash (featured) and another one
  const featured = items.find(p => p.title.includes("Fash")) || items[0]
  const second = items.find(p => p !== featured) || items[1]
  
  const projects = [
    { ...featured, colSpan: "md:col-span-7 lg:col-span-8" },
    { ...second, colSpan: "md:col-span-5 lg:col-span-4" }
  ]

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
        {projects.map((project, i) => (
          <div key={project.slug} className={`flex flex-col gap-5 ${project.colSpan}`}>
            <Reveal delay={i * 0.1}>
              <Link href={`/work/${project.slug}`} className="group block w-full outline-none">
                <div className="relative w-full overflow-hidden rounded-none bg-black aspect-[4/3] md:aspect-[4/3] lg:aspect-[16/10] transition-transform duration-500 hover:scale-[0.98]">
                  <ParallaxImage 
                    src={project.image || "/placeholder.svg"} 
                    alt={project.title} 
                    priority={i === 0} 
                  />
                </div>
              </Link>
            </Reveal>
            <Reveal delay={i * 0.1 + 0.1}>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                    {project.title}
                  </h3>
                  <Link href={`/work/${project.slug}`} className="font-mono text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
                    View Project
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.services.slice(0, 3).map((s: string) => (
                    <span
                      key={s}
                      className="rounded-full border border-current/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest opacity-80"
                    >
                      {s}
                    </span>
                  ))}
                  {project.services.length > 3 && (
                    <span className="rounded-full border border-current/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest opacity-80">
                      +{project.services.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  )
}

