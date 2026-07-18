'use client'

import { useRef, useLayoutEffect, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import type { Project } from '@/lib/projects'
import { Reveal, RevealWords } from '@/components/anim/reveal'
import { ParallaxImage } from '@/components/anim/parallax-image'

gsap.registerPlugin(ScrollTrigger)

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function StickyProjectList({ items }: { items: Project[] }) {
  return (
    <div className="relative w-full pb-10 md:pb-20">
      {items.map((project, i) => (
        <Card key={project.slug} project={project} i={i} />
      ))}
    </div>
  )
}

function Card({ project, i }: { project: Project; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 95%',
            end: 'top 60%',
            scrub: true,
          }
        }
      )
    }, cardRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={cardRef}
      className="sticky z-10 w-full overflow-hidden rounded-[2rem] border border-border bg-background shadow-sm mb-16 md:mb-32 group"
      style={{
        top: `calc(6rem + ${i * 1.5}rem)`,
      }}
    >
      <div className="relative min-h-[60vh] md:min-h-[85vh] flex flex-col justify-end">
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <ParallaxImage
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            priority={i === 0}
            className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 z-[1]" />
        </div>
        
        <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col justify-end w-full lg:w-3/4">
          <div className="mb-6 flex items-baseline gap-5 md:mb-10 md:gap-8">
            <span className="font-mono text-sm tracking-widest text-white/90">0{i + 1}</span>
            <h3 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <RevealWords text={project.title} stagger={0.05} />
            </h3>
          </div>
          
          <div className="flex flex-col gap-8">
            <Reveal delay={0.2}>
              <p className="font-sans text-xl leading-relaxed text-white/90 sm:text-2xl md:text-3xl line-clamp-3">
                {project.overview}
              </p>
            </Reveal>
            
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end justify-between mt-4">
              <Reveal delay={0.3}>
                <div>
                  <span className="mb-4 block font-mono text-[11px] uppercase tracking-widest text-white/90">
                    Services
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.services.slice(0, 3).map((s: string) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/20 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-white bg-white/10 backdrop-blur-sm"
                      >
                        {s}
                      </span>
                    ))}
                    {project.services.length > 3 && (
                      <span className="rounded-full border border-white/20 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-white bg-white/10 backdrop-blur-sm">
                        +{project.services.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
              
              <Reveal delay={0.4}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group/btn flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 min-h-[44px] font-mono text-[11px] uppercase tracking-widest text-black transition-all hover:bg-white/90"
                >
                  View Case
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
