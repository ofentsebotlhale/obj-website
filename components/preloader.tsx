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
  const [isLoaded, setIsLoaded] = useState(false)

  // Track actual page load status
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        setIsLoaded(true)
      } else {
        const handleLoad = () => setIsLoaded(true)
        window.addEventListener('load', handleLoad)
        
        // Safety fallback: Force load complete after 5 seconds
        // in case a third-party script or unoptimized image hangs the load event
        const fallbackTimer = setTimeout(() => setIsLoaded(true), 5000)
        
        return () => {
          window.removeEventListener('load', handleLoad)
          clearTimeout(fallbackTimer)
        }
      }
    }
  }, [])

  // Sequence the words based on load status
  useEffect(() => {
    if (exiting) return

    let timer: NodeJS.Timeout

    if (index < WORDS.length - 1) {
      // Advance to the next word at a slower pace
      timer = setTimeout(() => {
        setIndex((prev) => prev + 1)
      }, 700)
    } else if (index === WORDS.length - 1) {
      // Hold on the last word until the page is fully loaded
      if (isLoaded) {
        timer = setTimeout(() => {
          setExiting(true)
          setTimeout(onComplete, 300)
        }, 700)
      }
    }

    return () => clearTimeout(timer)
  }, [index, isLoaded, exiting, onComplete])

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
                  transition={{ duration: 0.3 }}
                  className="absolute text-5xl md:text-7xl lg:text-9xl font-heading font-medium tracking-tight text-foreground text-center uppercase"
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
