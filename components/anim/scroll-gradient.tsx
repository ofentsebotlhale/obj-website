'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function ScrollGradient() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll progress of this specific transition area
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Smoothly morph the curve based on scroll position
  // Starts with a deep curved wave and flattens out as the user scrolls past
  const path = useTransform(
    scrollYProgress,
    [0.1, 0.65],
    [
      'M 0 300 L 0 180 Q 720 0 1440 180 L 1440 300 Z',
      'M 0 300 L 0 0 Q 720 0 1440 0 L 1440 300 Z'
    ]
  )

  // Also scale up or translate the shape slightly for additional depth/parallax
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-40 md:h-64 overflow-hidden bg-background select-none pointer-events-none"
    >
      <motion.svg 
        viewBox="0 0 1440 300" 
        preserveAspectRatio="none" 
        className="absolute inset-0 w-full h-[120%] text-foreground fill-current"
        style={{ y }}
      >
        <motion.path d={path} />
      </motion.svg>
    </div>
  )
}
