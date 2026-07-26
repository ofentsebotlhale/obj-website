'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/lib/projects'
import { Reveal } from '@/components/anim/reveal'

interface WorksCarouselProps {
  items: Project[]
}

export function HomepageWorksCarousel({ items }: WorksCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Since we want OBX Fash to be full width left-to-right, we use full viewport width units for the cards.
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-foreground text-background">
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        
        {/* Section Header - Fixed with high z-index and solid gradient to prevent text overlap */}
        <div className="absolute top-0 left-0 right-0 z-50 w-full px-5 pt-16 md:px-10 md:pt-24 pb-8 bg-gradient-to-b from-foreground via-foreground to-transparent pointer-events-none">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-[1600px] mx-auto pointer-events-auto">
            <div className="space-y-2 max-w-2xl">
              <h3 className="font-mono text-xs uppercase tracking-widest text-background/60">
                02 / Selected Works
              </h3>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-background drop-shadow-lg">
                Featured Builds
              </h2>
            </div>
            <Link
              href="/work"
              data-cursor="All"
              className="group inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/10 px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest text-background transition-all duration-300 hover:border-background hover:bg-background/20"
            >
              <span>View all projects</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </Link>
          </Reveal>
        </div>

        {/* Carousel Track */}
        <div className="flex-1 flex items-center pt-24 h-full">
          <motion.div 
             style={{ x }} 
             className="flex h-full items-center"
          >
            {items.map((project, index) => {
              const indexStr = `/ 0${index + 1}`
              
              return (
                <div key={project.slug} className="group relative w-screen h-full max-h-[100vh] flex-shrink-0 flex items-center justify-center p-4 md:p-10">
                  <div className="relative w-full h-[70vh] md:h-[80vh] aspect-video border border-border/60 bg-muted/30 overflow-hidden backdrop-blur rounded-none mx-auto flex-shrink-0">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      sizes="100vw"
                    />
                    
                    {/* Ambient Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    {/* Card Content Overlay - Brand Name & Tagline */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 text-white pointer-events-none z-10">
                      <div className="space-y-2">
                        <h3 className="font-heading text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight drop-shadow-md">
                          {project.title}
                        </h3>
                        <p className="font-mono text-xs md:text-sm uppercase tracking-wider text-white/80 drop-shadow">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            
            {/* Spacer */}
            <div className="w-[10vw] flex-shrink-0" />
          </motion.div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-background/20 origin-left z-50">
          <motion.div 
             className="h-full bg-background origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>
      </div>
    </section>
  )
}
