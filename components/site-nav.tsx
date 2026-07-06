'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
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
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: pathname === '/' ? 2.5 : 0 }}
        className="fixed inset-x-0 top-0 z-[90] mix-blend-difference text-white pointer-events-none"
      >
        <nav className="flex items-center justify-between px-5 py-5 md:px-10 md:py-7 pointer-events-auto">
          <Link
            href="/"
            className="font-heading text-lg font-bold tracking-tight min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="OBX Studio home"
          >
            OBX Studio
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="flex items-center justify-center min-h-[44px] rounded-full border border-white/30 px-5 sm:px-6 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex items-center justify-center min-h-[44px] min-w-[44px] rounded-full transition-all hover:opacity-80"
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-end justify-center bg-background px-6 md:px-20"
          >
            <ul className="flex flex-col items-end gap-4">
              {LINKS.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * i + 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "font-heading text-5xl font-semibold tracking-tight md:text-7xl transition-opacity",
                        isActive
                          ? "text-muted-foreground pointer-events-none"
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
            <p className="mt-16 text-right font-mono text-xs uppercase tracking-widest text-muted-foreground">
              hello@obxstudio.co.za
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
