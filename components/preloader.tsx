'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    let currentProgress = 0
    const duration = 2000 // 2 seconds total
    const intervalTime = 30
    const steps = duration / intervalTime

    const interval = setInterval(() => {
      currentProgress += 100 / steps
      if (currentProgress >= 100) {
        currentProgress = 100
        clearInterval(interval)
        setTimeout(() => {
          setExiting(true)
          onComplete()
        }, 300) // slight pause at 100
      }
      setProgress(Math.floor(currentProgress))
    }, intervalTime)

    return () => {
      clearInterval(interval)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.85,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground select-none overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: '40vh', scale: 1.5 }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
            className="w-full flex items-center justify-center px-4 md:px-6"
          >
             <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-mono font-medium tracking-tighter text-foreground text-center">
               {progress}%
             </h2>
          </motion.div>
          <motion.div 
             exit={{ opacity: 0 }} 
             className="absolute bottom-12 font-mono text-xs uppercase tracking-widest text-foreground/60"
          >
             Loading Experience
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
