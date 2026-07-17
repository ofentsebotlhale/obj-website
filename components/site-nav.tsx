'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Menu, X, Instagram, Linkedin, Facebook, MessageCircle, Mail } from 'lucide-react'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/studio', label: 'Studio' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
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
          "fixed inset-x-0 top-0 z-[90] transition-all duration-500 pointer-events-auto mix-blend-difference",
          scrolled && !open 
            ? "bg-transparent text-white" 
            : "bg-transparent text-white",
          open ? "text-white" : ""
        )}
      >
        <nav className={cn(
          "flex items-center justify-between px-4 transition-all duration-300 md:px-6",
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
            className="fixed inset-0 z-40 flex flex-col items-end justify-center bg-background px-4 md:px-6 overflow-hidden"
          >
            {/* Cool Subtle Background Animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-100">
              <motion.div
                className="absolute -top-[10%] -left-[10%] w-[65%] h-[65%] rounded-full bg-foreground/[0.09] blur-[90px]"
                animate={{
                  x: [0, 50, -30, 0],
                  y: [0, -40, 60, 0],
                  scale: [1, 1.15, 0.85, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-[25%] right-[-15%] w-[75%] h-[75%] rounded-full bg-foreground/[0.11] blur-[100px]"
                animate={{
                  x: [0, -60, 40, 0],
                  y: [0, 50, -35, 0],
                  scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-[10%] left-[15%] w-[60%] h-[60%] rounded-full bg-foreground/[0.07] blur-[80px]"
                animate={{
                  x: [0, 40, -40, 0],
                  y: [0, -50, 30, 0],
                  scale: [1, 1.12, 0.92, 1],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className="relative z-10 flex flex-col items-end justify-center max-w-full">
              <ul className="flex flex-col items-end gap-3 md:gap-4">
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
                          "font-heading text-5xl font-bold tracking-tight md:text-7xl transition-opacity",
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

              {/* Subtle Divider Line */}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="w-48 h-[1px] bg-foreground/15 my-8 origin-right"
              />

              {/* Email Button & Social Icons Column */}
              <div className="flex flex-col items-end gap-6 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="flex flex-col items-end gap-2"
                >
                  <a
                    href="mailto:hello@obxstudio.co.za"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-6 font-sans text-xs font-semibold uppercase tracking-widest text-background transition-all hover:scale-105 active:scale-95 shadow-sm"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Email Us
                  </a>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/50 select-all">
                    hello@obxstudio.co.za
                  </p>
                </motion.div>

                <div className="flex gap-3">
                  {[
                    { icon: Instagram, href: "https://www.instagram.com/obxstudio_/", label: "Instagram" },
                    { icon: Linkedin, href: "https://www.linkedin.com/company/obxstudio/", label: "LinkedIn" },
                    { icon: Facebook, href: "https://www.facebook.com/share/1PKDMxQTLx/?mibextid=wwXIfr", label: "Facebook" },
                    { icon: MessageCircle, href: "https://wa.me/27760190339", label: "WhatsApp" },
                  ].map((social, i) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.45 + i * 0.05, duration: 0.3 }}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-foreground/75 hover:border-foreground hover:text-foreground hover:bg-foreground/5 transition-all"
                        aria-label={social.label}
                      >
                        <Icon className="h-4 w-4" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
