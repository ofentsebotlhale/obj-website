'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

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
        className="fixed inset-x-0 top-0 z-50"
      >
        <nav className="flex items-center justify-between px-5 py-5 md:px-10 md:py-7">
          <Link
            href="/"
            className="font-heading text-lg font-bold tracking-tight text-foreground min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="OBX Studio home"
          >
            OBX Studio
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-4 md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative flex items-center justify-center min-h-[44px] px-4 font-mono text-xs uppercase tracking-widest text-foreground"
                >
                  <span className="opacity-80 transition-opacity group-hover:opacity-100">
                    {link.label}
                  </span>
                  <span
                    className={cn(
                      'absolute bottom-2 left-4 h-px w-[calc(100%-32px)] origin-left scale-x-0 bg-foreground transition-transform duration-300 group-hover:scale-x-100',
                      pathname === link.href && 'scale-x-100',
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex items-center justify-center min-h-[44px] min-w-[44px] font-mono text-xs uppercase tracking-widest text-foreground md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-background px-6 md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    className="font-heading text-5xl font-semibold tracking-tight text-foreground"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <p className="mt-12 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              hello@obxstudio.co.za
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
