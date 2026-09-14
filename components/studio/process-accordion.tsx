'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Reveal, RevealWords } from '@/components/anim/reveal'

const STEPS = [
  {
    n: '01',
    title: 'Think',
    desc: 'Research, positioning, and strategy. We define the structure before we design the surface.',
    deliverables: ['Research', 'Architecture'],
  },
  {
    n: '02',
    title: 'Design',
    desc: 'Visual systems, layouts, and typography. A focus on editorial clarity and digital interaction.',
    deliverables: ['UI/UX', 'Art Direction'],
  },
  {
    n: '03',
    title: 'Build',
    desc: 'Engineering the front-end with precision. Fast, scalable, and responsive across all devices.',
    deliverables: ['Development', 'Motion'],
  },
  {
    n: '04',
    title: 'Launch',
    desc: 'Final optimizations, quality assurance, and deployment to the live environment.',
    deliverables: ['Optimization', 'Deployment'],
  },
]

export function ProcessAccordion() {
  return (
    <div className="relative w-full pb-10 md:pb-20">
      {STEPS.map((step, i) => (
        <Card key={step.n} step={step} i={i} />
      ))}
    </div>
  )
}

function Card({ step, i }: { step: any; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 60%"]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [50, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1])

  return (
    <motion.div
      ref={ref}
      className="sticky z-10 w-full overflow-hidden rounded-[2rem] border border-border bg-background p-8 md:p-16 mb-16 md:mb-32"
      style={{
        top: `calc(6rem + ${i * 1.5}rem)`,
        opacity,
        y,
        scale
      }}
    >
      <div className="flex min-h-[40vh] flex-col justify-between md:min-h-[55vh]">
        <div className="mb-12 flex items-baseline gap-5 md:mb-20 md:gap-8">
          <span className="font-mono text-sm tracking-widest text-foreground">{step.n}</span>
          <h3 className="font-heading text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-[8rem] md:leading-[0.9]">
            <RevealWords text={step.title} stagger={0.08} />
          </h3>
        </div>
        
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-12 gap-x-4 md:gap-x-8">
          <div className="md:col-span-8 md:pl-14">
            <p className="text-xl leading-relaxed text-foreground sm:text-2xl md:text-4xl md:leading-snug">
              <RevealWords text={step.desc} delay={0.2} stagger={0.015} />
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Reveal delay={0.4}>
              <span className="mb-6 block font-mono text-[11px] uppercase tracking-widest text-foreground">
                Deliverables
              </span>
              <ul className="flex flex-wrap gap-2 md:justify-end">
                {step.deliverables.map((d: string) => (
                  <li
                    key={d}
                    className="rounded-full border border-foreground/20 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-foreground bg-muted/30"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
