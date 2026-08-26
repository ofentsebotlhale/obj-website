'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

const WORDS = ['DESIGN', 'EXPERIENCES', 'PERFORMANCE']

export function Preloader({ onComplete }: PreloaderProps) {
  const [index, setIndex] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (index >= WORDS.length) {
      setExiting(true)
      const timer = setTimeout(onComplete, 300) // Call onComplete fast
      return () => clearTimeout(timer)
    }

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1)
    }, 400)

    return () => clearTimeout(timeout)
  }, [index, onComplete])

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground select-none overflow-hidden"
        >
          <div className="w-full flex items-center justify-center px-4 md:px-6 relative h-32">
            <AnimatePresence mode="wait">
              {index < WORDS.length && (
                <motion.h2
                  key={WORDS[index]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2 }}
                  className="absolute text-5xl md:text-7xl lg:text-9xl font-heading font-black tracking-tighter text-foreground text-center uppercase"
                >
                  {WORDS[index]}
                </motion.h2>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
