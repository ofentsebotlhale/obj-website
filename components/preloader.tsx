'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    // Rapid kinetic counter from 0 to 100 in ~1 second
    const startTime = performance.now()
    const duration = 950 // ms

    const animateCount = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(easedProgress * 100)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animateCount)
      } else {
        setCount(100)
        // Begin curtain exit motion
        setTimeout(() => {
          setExiting(true)
          onComplete()
        }, 120)
      }
    }

    const frameId = requestAnimationFrame(animateCount)
    return () => cancelAnimationFrame(frameId)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="preloader-overlay"
          initial={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{
            duration: 0.85,
            ease: [0.76, 0, 0.24, 1], // Smooth split curtain exit motion
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0D0D0D] text-white select-none overflow-hidden"
        >
          {/* Clean Large Kinetic Counter ONLY - No extra addon text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center font-mono font-bold text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] tracking-tighter text-white tabular-nums"
          >
            {String(count).padStart(2, '0')}
            <span className="text-neutral-500 text-4xl sm:text-5xl md:text-6xl font-light ml-1">%</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
