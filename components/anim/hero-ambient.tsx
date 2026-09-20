'use client'

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'

export function HeroAmbient() {
  const { scrollY } = useScroll()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 })

  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth > 768)
    checkIsDesktop()
    window.addEventListener('resize', checkIsDesktop)
    return () => window.removeEventListener('resize', checkIsDesktop)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      // Calculate mouse position relative to center (-0.5 to 0.5)
      const x = (e.clientX / innerWidth) - 0.5
      const y = (e.clientY / innerHeight) - 0.5
      mouseX.set(x * 20) // Max 10px shift
      mouseY.set(y * 20)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isDesktop, mouseX, mouseY])

  // Scroll parallax for different layers
  const yBg = useTransform(scrollY, [0, 1000], [0, -150])
  const yGrid = useTransform(scrollY, [0, 1000], [0, 100])
  const opacityGrid = useTransform(scrollY, [0, 300], [0.15, 0])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-difference selection:bg-transparent">
      {/* Grid overlay */}
      <motion.div 
        style={{ y: yGrid, opacity: opacityGrid }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
        }} />
        {/* Subtle moving coordinate line */}
        <motion.div 
          animate={{ x: ['-10%', '110%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 bottom-0 w-[1px] bg-foreground/10"
        />
        {/* Coordinate labels */}
        <div className="absolute top-[20%] left-8 font-mono text-[10px] text-foreground/20 uppercase tracking-widest hidden md:block">
          01 / 05
        </div>
        <div className="absolute top-[20%] right-8 font-mono text-[10px] text-foreground/20 uppercase tracking-widest hidden md:block">
          2026
        </div>
      </motion.div>

      {/* Interactive moving orb/field */}
      <motion.div
        style={{ 
          x: springX, 
          y: springY,
          rotate: useTransform(springX, [-10, 10], [-2, 2])
        }}
        className="absolute inset-0 flex items-center justify-center opacity-40 md:opacity-60"
      >
        <motion.div
          animate={{
            scale: [0.95, 1.04, 0.98, 0.95],
            x: ['-2%', '4%', '-2%', '-2%'],
            y: ['2%', '-3%', '2%', '2%'],
            rotate: [-1, 1, -1, -1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full blur-[100px] md:blur-[140px] bg-foreground/10 mix-blend-normal"
        />
      </motion.div>

      {/* Layered background translation */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-[-1]" />
    </div>
  )
}
