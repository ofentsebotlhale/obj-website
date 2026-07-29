'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [animating, setAnimating] = useState(true)

  useEffect(() => {
    // Ensure window is scrolled to top on page transition
    window.scrollTo(0, 0)
    setAnimating(true)

    const timer = setTimeout(() => {
      setAnimating(false)
    }, 850)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {/* Curved Canvas Wipe Overlay */}
      {animating && (
        <motion.div
          key={pathname}
          initial={{ y: '0%' }}
          animate={{ y: '-100%' }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1], // Custom architectural cubic-bezier curve
          }}
          className="fixed inset-0 z-[9990] pointer-events-none w-full h-[120vh] -top-[10vh] left-0 flex flex-col overflow-hidden"
        >
          {/* Solid Black Canvas Overlay */}
          <div className="w-full h-[100vh] bg-[#0D0D0D] flex-shrink-0 flex items-center justify-center">
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
              OBX STUDIO
            </span>
          </div>

          {/* Bottom Curved SVG Edge */}
          <svg
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
            className="w-full h-[120px] md:h-[180px] fill-[#0D0D0D] -mt-1 flex-shrink-0"
          >
            <motion.path
              initial={{ d: 'M0 0 Q500 200 1000 0 L1000 0 L0 0 Z' }}
              animate={{ d: 'M0 0 Q500 0 1000 0 L1000 0 L0 0 Z' }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              }}
            />
          </svg>
        </motion.div>
      )}

      {/* Main Page Content */}
      <motion.div
        key={pathname + '-content'}
        initial={{ opacity: 0.92, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </>
  )
}
