'use client'

import { motion } from 'framer-motion'
import { Reveal } from '@/components/anim/reveal'

const STEPS = [
  {
    num: '01',
    title: 'CLARIFY',
    desc: 'We establish what the business needs to communicate, who it needs to reach, and what the website needs to achieve.'
  },
  {
    num: '02',
    title: 'DESIGN',
    desc: 'We shape the visual system, interface and experience around that direction.'
  },
  {
    num: '03',
    title: 'BUILD',
    desc: 'We develop the site for performance, responsiveness and real-world use.'
  },
  {
    num: '04',
    title: 'LAUNCH',
    desc: 'We test, refine and put the finished experience into the world properly.'
  }
]

export function TheMethod() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const stepVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.8 }
    }
  }

  const numberVariants = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <section className="px-[5vw] py-24 md:py-32 lg:py-48 bg-background text-foreground flex flex-col justify-center">
      <div className="mx-auto max-w-[1920px]">
        <Reveal>
          <div className="mb-16 md:mb-24 space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              PROCESS
            </h2>
            <p className="font-sans text-xl md:text-2xl font-medium uppercase tracking-tight text-foreground">
              A CLEAR PROCESS KEEPS THE WORK SHARP.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Progress Line */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-16 left-0 right-0 h-px bg-border/40 origin-left hidden lg:block"
          />
          
          <motion.div 
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 bottom-0 left-[21px] w-px bg-border/40 origin-top block lg:hidden"
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8"
          >
            {STEPS.map((step, i) => (
              <motion.div key={i} variants={stepVariants} className="flex flex-row lg:flex-col gap-6 lg:gap-12 relative z-10">
                <div className="bg-background lg:bg-transparent lg:pb-0 shrink-0 w-12 lg:w-auto flex items-center justify-center lg:justify-start">
                  <motion.span variants={numberVariants} className="font-mono text-3xl md:text-4xl lg:text-5xl text-foreground/20 block origin-bottom-left">
                    {step.num}
                  </motion.span>
                </div>
                
                <div className="flex flex-col gap-4 lg:gap-6 pt-1 lg:pt-6">
                  <motion.h3 variants={textVariants} className="font-sans text-xl md:text-2xl uppercase tracking-tight text-foreground font-medium">
                    {step.title}
                  </motion.h3>
                  <motion.p variants={textVariants} className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed text-pretty">
                    {step.desc}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
