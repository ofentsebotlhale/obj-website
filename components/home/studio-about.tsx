'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/anim/reveal'

export function StudioAbout() {
  const lineVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: { 
      y: '0%', 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const descriptors = [
    { text: "DESIGN-LED.", direction: -10 },
    { text: "TECHNICALLY RIGOROUS.", direction: 10 },
    { text: "BUILT FOR THE WEB.", direction: -10 }
  ]

  return (
    <section className="px-[5vw] py-24 md:py-32 lg:py-48 bg-background text-foreground border-t border-border/10 flex flex-col justify-center">
      <div className="mx-auto max-w-[1920px] grid grid-cols-1 md:grid-cols-12 gap-y-16 lg:gap-y-0 gap-x-4 md:gap-x-8">
        
        {/* Left Column: Label */}
        <div className="md:col-span-4">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="sticky top-32"
          >
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-normal">
              WHY OBX
            </h2>
          </motion.div>
        </div>

        {/* Right Column: Content */}
        <div className="md:col-span-8 space-y-16 md:space-y-24">
          
          <div className="space-y-2 overflow-hidden">
            <motion.h3 
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground uppercase leading-[1.05]"
            >
              WE DON'T BUILD WEBSITES TO FILL A SITEMAP.
            </motion.h3>
            <motion.h3 
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground uppercase leading-[1.05]"
            >
              WE BUILD THEM TO GIVE A BUSINESS
            </motion.h3>
            <motion.h3 
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground uppercase leading-[1.05]"
            >
              A SHARPER POSITION ONLINE.
            </motion.h3>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-sans text-xl md:text-2xl font-normal leading-relaxed text-foreground/80 max-w-2xl text-pretty"
          >
            OBX Studio is an independent, design-led digital studio based in Johannesburg.
            <br className="hidden md:block" />
            <br className="hidden md:block" />
            We work across strategy, interface design and development to create websites that feel considered, communicate clearly and hold up technically.
          </motion.p>
          
          <div className="space-y-3 pt-4">
            {descriptors.map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: item.direction }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.4 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                className="font-mono text-sm md:text-base uppercase tracking-widest text-muted-foreground"
              >
                {item.text}
              </motion.p>
            ))}
          </div>

          <Reveal delay={0.6}>
            <div className="pt-8">
              <Link
                href="/studio"
                className="group inline-flex items-center font-sans text-sm md:text-base font-medium transition-colors hover:text-muted-foreground text-foreground"
              >
                <span className="border-b border-foreground/30 pb-0.5 group-hover:border-foreground transition-colors">
                  More about the studio
                </span>
              </Link>
            </div>
          </Reveal>
          
        </div>
      </div>
    </section>
  )
}
