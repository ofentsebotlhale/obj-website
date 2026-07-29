'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const WHO_WE_WORK_WITH = [
  "Professional service firms",
  "Growing businesses",
  "Modern brands",
  "Startups building their digital presence",
  "Companies upgrading outdated websites"
]

const WHY_OBX_STUDIO = [
  "clarity",
  "performance",
  "usability",
  "long-term scalability"
]

const METRICS = [
  { label: "Code Quality", value: "100% Custom Code" },
  { label: "Performance", value: "< 1s Load Targets" },
  { label: "Discovery", value: "SEO-First Architecture" },
]

export function FeatureMetricsGrid() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20 border-y border-border py-16">
      <motion.div
        initial={false}
        animate={mounted ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
        whileInView={mounted ? { opacity: 1, x: 0 } : undefined}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground mb-6">
          Who We Work With
        </h2>
        <p className="font-sans text-[15px] leading-relaxed text-muted-foreground font-medium mb-8 max-w-md">
          We work with businesses that value clarity, design quality, and performance to deliver exceptional digital experiences.
        </p>
        
        <ul className="flex flex-col gap-4 mb-12">
          {WHO_WE_WORK_WITH.map((item, i) => (
            <li key={i} className="flex gap-4 items-start font-sans text-[15px] leading-relaxed text-foreground">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-foreground/5 border border-foreground/10 text-[10px] shrink-0 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/60" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border/50 pt-8">
          {METRICS.map((metric, i) => (
            <div key={i}>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">{metric.label}</div>
              <div className="font-sans text-sm font-medium text-foreground">{metric.value}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={false}
        animate={mounted ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
        whileInView={mounted ? { opacity: 1, x: 0 } : undefined}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="lg:mt-24"
      >
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground mb-6">
          Why OBX Studio
        </h2>
        <div className="space-y-6 text-[15px] md:text-base leading-relaxed text-muted-foreground mb-8">
          <p>
            We don't treat websites as just design projects.
          </p>
          <p>
            We build digital systems that help businesses communicate better, build credibility, and attract clients through engineered precision.
          </p>
          <p className="font-medium text-foreground">
            Every project is focused on:
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {WHY_OBX_STUDIO.map((item, i) => (
            <div key={i} className="flex gap-3 items-center font-sans text-[15px] leading-relaxed text-foreground bg-card/30 border border-border/50 p-4 rounded-lg">
              <span className="text-muted-foreground font-mono text-xs">/ {String(i + 1).padStart(2, '0')}</span>
              <span className="capitalize">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
