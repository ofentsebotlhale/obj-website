'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const QUOTE_LINES = [
  "OBX Studio redefined how our brand presents",
  "itself online. Within weeks of launch, our",
  "inbound lead quality completely shifted."
]

export function ClientEndorsement() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150])
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section 
      ref={containerRef}
      className="px-[5vw] py-24 md:py-32 lg:py-48 bg-background text-foreground border-t border-border/10 overflow-hidden"
    >
      <motion.div 
        style={{ y: yParallax, willChange: 'transform' }}
        className="mx-auto max-w-[1920px]"
      >
        <div className="mx-auto max-w-5xl text-center space-y-12">
          <motion.blockquote 
            initial={false}
            animate={mounted ? "hidden" : "visible"}
            whileInView={mounted ? "visible" : undefined}
            viewport={{ once: true, margin: "-10%" }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-foreground flex flex-col items-center gap-1 md:gap-2"
          >
            {QUOTE_LINES.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-1">
                <motion.span
                  custom={i}
                  variants={{
                    hidden: { y: "100%" },
                    visible: (i: number) => ({
                      y: "0%",
                      transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }
                    })
                  }}
                  className="block text-pretty"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.blockquote>
          <motion.p 
            initial={false}
            animate={mounted ? { opacity: 0 } : { opacity: 1 }}
            whileInView={mounted ? { opacity: 1 } : undefined}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.3 + (QUOTE_LINES.length * 0.15), ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs md:text-sm uppercase tracking-widest text-foreground/60"
          >
            — Founder, Tech & Consulting
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
