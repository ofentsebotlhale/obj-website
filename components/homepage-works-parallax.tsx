'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
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
  { sizeClass: 'w-full max-w-[638px]', parallaxSpeed: 30, alignmentClass: 'md:ml-0 md:mr-auto' },
  { sizeClass: 'w-full max-w-[462px]', parallaxSpeed: 65, alignmentClass: 'md:ml-auto md:mr-0 md:mt-24' },
  { sizeClass: 'w-full max-w-[352px]', parallaxSpeed: 100, alignmentClass: 'md:mx-auto md:-mt-12' },
  { sizeClass: 'w-full max-w-[572px]', parallaxSpeed: 40, alignmentClass: 'md:ml-0 md:mr-auto md:mt-16' },
  { sizeClass: 'w-full max-w-[418px]', parallaxSpeed: 80, alignmentClass: 'md:ml-auto md:mr-0 md:-mt-8' },
]

function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 })
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['3deg', '-3deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-3deg', '3deg'])

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
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="w-full h-full relative"
      >
        <motion.div style={{ translateZ: '20px' }} className="w-full h-full block">
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

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
      <motion.div style={{ y }} className={`flex flex-col gap-3 ${config.sizeClass} mx-auto ${config.alignmentClass}`}>
        {/* Text OUTSIDE and ABOVE the image on top */}
        <Reveal>
          <Link href={`/work/${project.slug}`} className="group block space-y-2 outline-none mb-6">
            <p className="font-sans text-sm text-muted-foreground font-medium uppercase tracking-wider">
              {project.title}
            </p>
            <h3 className="font-heading text-[23px] font-medium leading-snug tracking-tight text-background group-hover:text-muted-foreground transition-colors">
              {project.overview}
            </h3>
          </Link>
        </Reveal>

        <TiltCard>
          <Link href={`/work/${project.slug}`} className="group block w-full outline-none">
            <motion.div 
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative w-full aspect-square overflow-hidden border border-background/15 bg-background rounded-none transition-all duration-500 group-hover:border-background/50"
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
        </TiltCard>
      </motion.div>
    </div>
  )
}

export function HomepageWorksParallax({ items }: WorksParallaxProps) {
  return (
    <section className="bg-foreground text-background py-[15vh] md:py-[20vh] px-[5vw] md:px-[8vw] w-full overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <Reveal>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-background uppercase">
              WORKS
            </h2>
          </Reveal>
        </div>

        {/* Asymmetrical Grid with Square Image Containers of Different Sizes & Container Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          {items.map((project, index) => (
            <ProjectParallaxCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* Bottom View All Link */}
        <div className="mt-20 md:mt-32 flex justify-center md:justify-end">
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
