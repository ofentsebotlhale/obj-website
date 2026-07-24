'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react'

export function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 380, mass: 0.4 }
  const cursorX = useSpring(x, springConfig)
  const cursorY = useSpring(y, springConfig)

  const [hovering, setHovering] = useState(false)
  const [label, setLabel] = useState<string | null>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const fine = window.matchMedia('(pointer: fine)').matches
    setEnabled(fine)
    if (!fine) return

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target as HTMLElement
      const interactive = target.closest(
        'a, button, [data-cursor], input, textarea, [role="button"]',
      ) as HTMLElement | null
      if (interactive) {
        setHovering(true)
        setLabel(interactive.getAttribute('data-cursor'))
      } else {
        setHovering(false)
        setLabel(null)
      }
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block mix-blend-difference"
      style={{ x: cursorX, y: cursorY }}
      aria-hidden="true"
    >
      <motion.div
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
        animate={{
          width: label ? 88 : hovering ? 48 : 12,
          height: label ? 88 : hovering ? 48 : 12,
          backgroundColor: label
            ? '#ffffff'
            : hovering
              ? 'rgba(255,255,255,0.05)'
              : '#ffffff',
          borderWidth: hovering && !label ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 300 }}
        style={{ borderColor: 'rgba(255,255,255,0.3)', borderStyle: 'solid' }}
      >
        <AnimatePresence>
          {label && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="font-mono text-[10px] font-medium uppercase tracking-wider text-black"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
