'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { href: '/work', label: 'Work' },
  { href: '/studio', label: 'Studio' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  })

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header 
        initial={pathname === '/' ? { opacity: 0 } : { opacity: 1 }}
        animate={{ 
          opacity: 1, 
          y: '0%' 
        }}
        transition={{ 
          opacity: { duration: 0.8, delay: pathname === '/' ? 2.5 : 0 },
          y: { duration: 0.3, ease: 'easeInOut' }
        }}
        className={cn(
          "fixed inset-x-0 top-0 z-[90] transition-all duration-500 pointer-events-auto",
          scrolled && !open 
            ? "bg-background/45 backdrop-blur-md border-b border-border/10 text-foreground" 
            : "bg-transparent text-foreground",
          open ? "text-foreground" : ""
        )}
      >
        <nav className={cn(
          "flex items-center justify-between px-5 transition-all duration-300 md:px-10",
          scrolled && !open ? "py-3 md:py-4" : "py-5 md:py-7"
        )}>
          <Link
            href="/"
            className={cn(
              "font-heading font-bold tracking-tight min-h-[44px] flex items-center justify-center transition-all duration-300 ease-out",
              (pathname === '/' && !scrolled && !open) 
                ? "opacity-0 translate-y-[10px] pointer-events-none" 
                : "opacity-100 translate-y-0 text-base scale-95 origin-left"
            )}
            aria-label="OBX Studio home"
          >
            OBX Studio
          </Link>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex items-center justify-center min-h-[44px] min-w-[44px] rounded-full transition-transform hover:scale-105 active:scale-95"
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span className={cn("absolute transition-all duration-300", open ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100")}>
                  <Menu className="w-6 h-6" />
                </span>
                <span className={cn("absolute transition-all duration-300", open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50")}>
                  <X className="w-6 h-6" />
                </span>
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-end justify-center bg-background px-6 md:px-20"
          >
            <ul className="flex flex-col items-end gap-4">
              {LINKS.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: 0.08 * i + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "font-heading text-5xl font-semibold tracking-tight md:text-7xl transition-opacity",
                        isActive
                          ? "text-foreground pointer-events-none underline underline-offset-8"
                          : "text-foreground hover:opacity-70"
                      )}
                      aria-disabled={isActive}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-16 text-right font-mono text-xs uppercase tracking-widest text-foreground"
            >
              hello@obxstudio.co.za
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
