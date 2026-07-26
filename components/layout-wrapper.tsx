'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Preloader } from '@/components/preloader'

interface PreloaderContextType {
  loading: boolean
}

const PreloaderContext = createContext<PreloaderContextType>({ loading: true })

export function usePreloader() {
  return useContext(PreloaderContext)
}

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Lock scroll during preloader overlay
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <PreloaderContext.Provider value={{ loading }}>
      <Preloader onComplete={() => setLoading(false)} />
      <motion.div
        animate={loading ? { scale: 0.96, opacity: 0.8 } : { scale: 1, opacity: 1 }}
        transition={{
          duration: 0.85,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="w-full min-h-screen origin-top"
      >
        {children}
      </motion.div>
    </PreloaderContext.Provider>
  )
}
