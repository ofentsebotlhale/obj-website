'use client'

import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const CAPABILITIES = [
  {
    title: 'Custom Web Applications',
    description: 'We architect and build tailored web applications using modern React and Next.js ecosystems, ensuring scalable and maintainable codebases for complex business logic.',
  },
  {
    title: 'Design Systems & Motion',
    description: 'We develop cohesive visual languages and interactive component libraries. Fluid motion and micro-interactions are integrated natively using Framer Motion.',
  },
  {
    title: 'Performance & Technical SEO',
    description: 'Every project is engineered for speed. We optimize Core Web Vitals, implement server-side rendering, and structure semantic HTML to maximize search engine visibility.',
  },
  {
    title: 'Maintenance & Scalability',
    description: 'We build for the long term. Our architectures support easy feature expansion, seamless integration with external APIs, and robust ongoing maintenance.',
  }
]

export function CapabilitiesMatrix() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div className="mb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl mb-4">
            Deliverables & Capabilities
          </h2>
          <p className="font-sans text-lg leading-relaxed text-muted-foreground">
            A comprehensive breakdown of our technical capabilities and the specific deliverables we provide across our service engagements.
          </p>
        </div>
        <Link 
          href="/studio"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-foreground hover:text-muted-foreground transition-colors shrink-0"
        >
          <span>Read about our approach</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/50 rounded-xl overflow-hidden border border-border/50">
        {CAPABILITIES.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={false}
            animate={mounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={mounted ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-background p-8 md:p-12"
          >
            <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground mb-4">
              {cap.title}
            </h3>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              {cap.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
