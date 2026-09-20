'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function ValueStatement() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth > 768)
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])
  
  const { scrollYProgress: containerProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const { scrollYProgress: textProgress } = useScroll({
    target: textRef,
    offset: ["start 80%", "end 40%"],
  })

  const scale = useTransform(containerProgress, [0, 0.4, 0.8, 1], [0.94, 1, 1, 0.94])

  // Scroll driven transforms for lines
  const x1 = useTransform(textProgress, [0, 0.2], [-50, 0])
  const o1 = useTransform(textProgress, [0, 0.2], [0, 1])

  const x2 = useTransform(textProgress, [0.1, 0.4], [30, 0])
  const o2 = useTransform(textProgress, [0.1, 0.4], [0, 1])

  const x3 = useTransform(textProgress, [0.3, 0.6], [-40, 0])
  const o3 = useTransform(textProgress, [0.3, 0.6], [0, 1])

  const x4 = useTransform(textProgress, [0.5, 0.8], [20, 0])
  const o4 = useTransform(textProgress, [0.5, 0.8], [0, 1])

  const x5 = useTransform(textProgress, [0.7, 1.0], [-20, 0])
  const o5 = useTransform(textProgress, [0.7, 1.0], [0, 1])

  const principles = [
    { title: "CLARITY" },
    { title: "CREDIBILITY" },
    { title: "ACTION" }
  ]

  return (
    <div ref={containerRef} className="w-full bg-background overflow-hidden px-[2vw] md:px-[4vw] py-12 md:py-24">
      <motion.section 
        style={{ scale, willChange: 'transform' }}
        className="px-[5vw] py-32 md:py-48 lg:py-64 bg-foreground text-background origin-center flex flex-col justify-center rounded-3xl"
      >
        <div className="mx-auto max-w-[1920px] w-full grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-8 items-start">
          
          <div className="lg:col-span-8 lg:col-start-2" ref={textRef}>
            <div className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.05] tracking-tight uppercase overflow-hidden">
              <motion.div style={isDesktop ? { x: x1, opacity: o1 } : {}} className="block">
                YOUR
              </motion.div>
              <motion.div style={isDesktop ? { x: x2, opacity: o2 } : {}} className="block text-background/80">
                WEBSITE
              </motion.div>
              <motion.div style={isDesktop ? { x: x3, opacity: o3 } : {}} className="block">
                IS OFTEN
              </motion.div>
              <motion.div style={isDesktop ? { x: x4, opacity: o4 } : {}} className="block text-background/80">
                THE FIRST
              </motion.div>
              <motion.div style={isDesktop ? { x: x5, opacity: o5 } : {}} className="block">
                CONVERSATION.
              </motion.div>
            </div>
            
            <div className="mt-16 md:mt-24 flex flex-col md:flex-row gap-6 md:gap-12">
              {principles.map((principle, index) => (
                <motion.div 
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="font-mono text-sm md:text-base uppercase tracking-widest text-background/50 flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-background/50 inline-block" />
                  {principle.title}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </motion.section>
    </div>
  )
}
