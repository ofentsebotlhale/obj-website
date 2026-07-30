'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

const PRELOADER_IMAGES = [
  '/work/obx-fash-1.avif',
  '/work/ob-law-1.avif',
  '/work/obx-fash-2.avif',
]

export function Preloader({ onComplete }: PreloaderProps) {
  const [imgIndex, setImgIndex] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const duration = 1800 // ms
    
    const interval = setInterval(() => {
      setImgIndex(i => (i + 1) % PRELOADER_IMAGES.length)
    }, 120)

    const timer = setTimeout(() => {
      clearInterval(interval)
      setExiting(true)
      onComplete()
    }, duration)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background text-foreground select-none overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.2 }}
            className="w-full flex items-center justify-center px-4 md:px-6"
          >
            <svg viewBox="0 0 800 160" className="w-full h-auto block overflow-visible select-none" preserveAspectRatio="xMidYMid meet">
              <defs>
                <clipPath id="preloader-text-clip">
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="central"
                    textAnchor="middle"
                    className="font-heading font-bold"
                    style={{ fontSize: '136px', letterSpacing: '-0.03em' }}
                  >
                    OBX STUDIO
                  </text>
                </clipPath>
              </defs>
              <text
                x="50%"
                y="50%"
                dominantBaseline="central"
                textAnchor="middle"
                className="font-heading font-bold fill-foreground/10"
                style={{ fontSize: '136px', letterSpacing: '-0.03em' }}
              >
                OBX STUDIO
              </text>
              <image
                href={PRELOADER_IMAGES[imgIndex]}
                x="0"
                y="0"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#preloader-text-clip)"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
