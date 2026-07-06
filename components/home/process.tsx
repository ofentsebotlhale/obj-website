'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const PROCESS_STEPS = [
  {
    n: '01',
    title: 'Discovery',
    desc: 'Understanding your business, target audience, and project goals to set a clear direction.',
    tags: ['Research', 'Interviews', 'Audits'],
  },
  {
    n: '02',
    title: 'Strategy',
    desc: 'Positioning, naming, and brand architecture that give the work a reason to exist.',
    tags: ['Positioning', 'Planning', 'Wireframing'],
  },
  {
    n: '03',
    title: 'Design',
    desc: 'Editorial, accessible interfaces designed pixel-by-pixel for clarity and emotion.',
    tags: ['UI/UX', 'Design Systems', 'Prototyping'],
  },
  {
    n: '04',
    title: 'Development',
    desc: 'Fast, fluid, hardware-accelerated builds engineered for 60fps and great Core Web Vitals.',
    tags: ['Next.js', 'Motion', 'WebGL'],
  },
  {
    n: '05',
    title: 'Launch',
    desc: 'Rollout, motion, and the details that make a release land with momentum.',
    tags: ['Testing', 'Deployment', 'Support'],
  },
]

export function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  // Translate the track horizontally as the user scrolls through the tall section.
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-72%'])

  return (
    <section ref={ref} className="relative h-[320vh] bg-background md:h-[400vh]">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="mb-10 flex items-end justify-between px-5 md:px-10">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
            Process
          </h2>
        </div>
        <motion.div style={{ x }} className="flex gap-5 px-5 md:gap-8 md:px-10">
          {PROCESS_STEPS.map((s) => (
            <article
              key={s.n}
              className="flex h-[58vh] w-[80vw] shrink-0 flex-col justify-between rounded-md border border-border bg-card p-6 sm:w-[60vw] md:w-[34vw] md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
                <span className="h-2 w-2 rounded-full bg-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
                  {s.title}
                </h3>
                <p className="mt-5 max-w-sm text-pretty leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-foreground/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
