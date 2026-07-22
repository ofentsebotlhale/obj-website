'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    id: '01',
    title: 'Web Design',
    description: 'We design clean, structured, and user-focused websites that communicate clearly and build trust. Every design is tailored to your brand, audience, and business goals.',
    tags: ['UI/UX', 'Figma', 'Prototyping', 'Design Systems'],
    link: '/services/web-design',
    linkText: 'Explore Design'
  },
  {
    id: '02',
    title: 'Web Development',
    description: 'We develop fast, responsive, and scalable websites built for performance and usability. Every build is optimised for speed, responsiveness, and real-world usage.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    link: '/services/web-development',
    linkText: 'Explore Development'
  },
  {
    id: '03',
    title: 'Full Website Build',
    description: 'For clients who want a complete solution, we handle both design and development — delivering a fully finished website from initial concept to final launch.',
    tags: ['End-to-End', 'Performance', 'SEO', 'Deployment'],
    link: '/contact',
    linkText: 'Start a Project'
  }
]

export function ServiceCards() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {SERVICES.map((service, i) => (
        <motion.div
          key={service.id}
          initial={false}
          animate={mounted ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          whileInView={mounted ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href={service.link} className="group block h-full">
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card/40 border border-border/50 rounded-xl p-8 flex flex-col h-full transition-colors group-hover:border-foreground/30 group-hover:bg-foreground/5 relative overflow-hidden"
            >
              <div className="absolute top-8 right-8 font-mono text-xs text-muted-foreground">
                / {service.id}
              </div>
              
              <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground mb-4 pr-8">
                {service.title}
              </h3>
              
              <p className="font-sans text-base leading-relaxed text-muted-foreground mb-8 flex-grow">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-secondary/50 border border-border/50 rounded-md font-mono text-[10px] uppercase tracking-widest text-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-foreground mt-auto">
                <span>{service.linkText}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
