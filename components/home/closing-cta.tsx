'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function ClosingCta() {
  const lineVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: { 
      y: '0%', 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <section className="px-[2vw] md:px-[4vw] pb-12 md:pb-24">
      <motion.div 
        initial={{ scale: 0.97 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full bg-foreground text-background rounded-3xl px-[5vw] py-24 md:py-32 lg:py-48 flex flex-col justify-center items-center text-center overflow-hidden"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="font-mono text-xs uppercase tracking-widest text-background/50 mb-12 block"
          >
            START A PROJECT
          </motion.p>
          
          <div className="space-y-2 overflow-hidden mb-12">
            <motion.h2 
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight uppercase leading-[1.05]"
            >
              MAKE YOUR NEXT
            </motion.h2>
            <motion.h2 
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight uppercase leading-[1.05]"
            >
              IMPRESSION COUNT.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-xl md:text-2xl font-normal leading-relaxed text-background/80 max-w-2xl text-pretty mb-16"
          >
            Tell us what you're building, where you're heading, and what the website needs to do.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 font-sans text-lg md:text-xl font-medium transition-colors text-background"
            >
              <span className="border-b border-background/30 pb-1 group-hover:border-background transition-colors">
                START A PROJECT
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
