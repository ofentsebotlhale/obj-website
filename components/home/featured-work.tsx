'use client'

import Link from 'next/link'
import type { Project } from '@/lib/projects'
import { Reveal } from '@/components/anim/reveal'
import { ParallaxImage } from '@/components/anim/parallax-image'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import React from 'react'

function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div 
      className="w-full relative perspective-[1000px] hover:z-10"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full relative"
      >
        <motion.div 
          style={{ translateZ: "50px" }} 
          className="w-full h-full block"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

export function FeaturedWork({ items }: { items: Project[] }) {
  if (!items || items.length === 0) return null

  // We take exactly 2 projects: OBX Fash (featured) and another one
  const featured = items.find(p => p.title.includes("Fash")) || items[0]
  const second = items.find(p => p !== featured) || items[1]
  
  const projects = [
    featured ? { ...featured, colSpan: "md:col-span-7 lg:col-span-8" } : null,
    second ? { ...second, colSpan: "md:col-span-5 lg:col-span-4" } : null
  ].filter(Boolean) as (Project & { colSpan: string })[]

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
        {projects.map((project, i) => (
          <div key={project.slug} className={`flex flex-col gap-5 ${project.colSpan}`}>
            <Reveal delay={i * 0.1}>
              <Link href={`/work/${project.slug}`} className="group block w-full outline-none">
                <TiltCard>
                  <div className="relative w-full overflow-hidden rounded-[2rem] bg-card border border-border/50 aspect-[4/3] md:aspect-[4/3] lg:aspect-[16/10] p-6 md:p-12">
                    <ParallaxImage 
                      src={project.image || "/placeholder.svg"} 
                      alt={project.title}
                      priority={i === 0}
                      className="object-contain opacity-90 drop-shadow-2xl" 
                      motionClassName="absolute inset-0"
                      containerClassName="relative w-full h-full z-0 overflow-visible"
                      yOffset={["-5%", "5%"]}
                    />
                  </div>
                </TiltCard>
              </Link>
            </Reveal>
            <Reveal delay={i * 0.1 + 0.1}>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
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

