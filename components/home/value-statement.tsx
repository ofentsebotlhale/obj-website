'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function ValueStatement() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress: containerProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  })

  const scale = useTransform(containerProgress, [0, 1], [0.96, 1])

  const principles = [
    {
      num: "01",
      title: "CLARITY",
      desc: "Make the offer easier to understand.",
    },
    {
      num: "02",
      title: "CREDIBILITY",
      desc: "Make the quality of the business visible online.",
    },
    {
      num: "03",
      title: "ACTION",
      desc: "Give people a clear reason and path to move forward.",
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4
      }
    }
  }

  const lineVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: { 
      y: '0%', 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <div ref={containerRef} className="w-full bg-background overflow-hidden px-[2vw] md:px-[4vw] py-12 md:py-24">
      <motion.section 
        style={{ scale, willChange: 'transform' }}
        className="px-[5vw] py-32 md:py-48 bg-foreground text-background origin-center flex flex-col justify-center rounded-3xl"
      >
        <div className="mx-auto max-w-[1920px] w-full grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-8 items-start">
          
          <div className="lg:col-span-5 lg:col-start-2">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-background/50 mb-12 block"
            >
              WHY THE WEBSITE MATTERS
            </motion.p>
            
            <div className="overflow-hidden">
              <motion.h2 
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="font-sans text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] tracking-tight uppercase"
              >
                YOUR WEBSITE IS OFTEN THE FIRST CONVERSATION.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-xl md:text-2xl font-normal leading-relaxed text-background/80 mt-8 max-w-xl text-pretty"
            >
              Before someone calls, books, visits or buys, they form an opinion. We build digital experiences that make that opinion count.
            </motion.p>
          </div>

          <div className="lg:col-span-4 lg:col-start-8 mt-8 lg:mt-0">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="flex flex-col gap-12"
            >
              {principles.map((principle) => (
                <motion.div key={principle.num} variants={itemVariants} className="space-y-3">
                  <h3 className="font-sans text-sm md:text-base font-medium tracking-wide uppercase text-background">
                    <span className="text-background/50 mr-3">{principle.num} —</span> {principle.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-background/70 pl-8">
                    {principle.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </motion.section>
    </div>
  )
}
