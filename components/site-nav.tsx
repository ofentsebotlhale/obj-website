'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Menu, X, Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/studio', label: 'Studio' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

function MenuLinks({ pathname, onClose }: { pathname: string; onClose?: () => void }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  return (
    <ul className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4.5 w-full">
      {LINKS.map((link, i) => {
        const isActive = pathname === link.href
        const isAnyHovered = hoveredIndex !== null
        const isThisHovered = hoveredIndex === i
        
        return (
          <motion.li
            key={link.href}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ 
              delay: 0.04 * i + 0.08, 
              duration: 0.35, 
              ease: [0.215, 0.61, 0.355, 1] 
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="block w-full"
          >
            <Link
              href={link.href}
              onClick={() => onClose?.()}
              className={cn(
                "flex items-baseline gap-3 sm:gap-4 md:gap-6 transition-opacity duration-300 group",
                isActive ? "text-[#FFFFFF]" : "text-[#FFFFFF]",
                isAnyHovered && !isThisHovered ? "opacity-25" : "opacity-100"
              )}
            >
              <span className="font-mono text-sm sm:text-base md:text-lg text-[#8E8E93] select-none font-medium">
                0{i + 1}
              </span>
              <span className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-[#FFFFFF] leading-none transition-transform duration-300 group-hover:translate-x-3">
                {link.label}
              </span>
            </Link>
          </motion.li>
        )
      })}
    </ul>
  )
}

export function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  const { scrollY } = useScroll()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

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
        initial={false}
        animate={mounted ? (pathname === '/' ? { opacity: [0, 1], y: '0%' } : { opacity: 1, y: '0%' }) : { opacity: 1, y: '0%' }}
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
        <nav
          className={cn(
            "flex items-center justify-between px-4 transition-all duration-300 md:px-6",
            scrolled && !open ? "pb-3 pt-3 md:pb-4 md:pt-4" : "pb-5 pt-5 md:pb-7 md:pt-7"
          )}
          style={{
            paddingTop: scrolled && !open 
              ? 'calc(env(safe-area-inset-top, 0px) + 0.75rem)' 
              : 'calc(env(safe-area-inset-top, 0px) + 1.25rem)',
          }}
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-heading font-bold tracking-tight min-h-[44px] flex items-center justify-center transition-all duration-300 ease-out opacity-100 origin-left"
            aria-label="OBX Studio home"
          >
            <Image
              src="/logo.png"
              alt="OBX Studio"
              width={160}
              height={160}
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-all duration-300"
              priority
              referrerPolicy="no-referrer"
            />
          </Link>
          <div className="flex items-center gap-3 sm:gap-4">
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="group relative inline-flex items-center justify-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-widest px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-black text-white border border-white/20 hover:border-white transition-all duration-300 font-medium whitespace-nowrap min-h-[40px] sm:min-h-[44px] shadow-md overflow-hidden"
              >
                {/* Subtle animated background gradient glow on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                <span className="relative z-10 text-white font-semibold tracking-wider">
                  Inquire
                </span>

                <motion.span
                  className="relative z-10 inline-block text-[11px] sm:text-xs transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  animate={{ x: [0, 1.5, 0], y: [0, -1.5, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                >
                  ↗
                </motion.span>
              </Link>
            </motion.div>
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
            className="fixed inset-0 z-40 h-[100svh] max-h-[100svh] w-full bg-[#000000] px-5 sm:px-8 md:px-12 lg:px-20 overflow-y-auto flex flex-col justify-between pt-[calc(env(safe-area-inset-top,0px)+4.5rem)] pb-[calc(env(safe-area-inset-bottom,0px)+1.5rem)] select-none"
          >
            <div className="w-full max-w-[1500px] mx-auto h-full flex flex-col justify-between my-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full my-auto flex-1 min-h-0">
                
                {/* Left Column - Nav Links */}
                <div className="col-span-1 lg:col-span-7 flex flex-col items-start justify-center w-full">
                  <MenuLinks pathname={pathname} onClose={() => setOpen(false)} />
                </div>

                {/* Right Column - Essential Info */}
                <div className="col-span-1 lg:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-12">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-[#8E8E93] block">Location</span>
                    <p className="font-sans text-xs sm:text-sm md:text-base text-[#FFFFFF]">Johannesburg, South Africa</p>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-[#8E8E93] block">Inquiries</span>
                    <a 
                      href="mailto:hello@obxstudio.co.za" 
                      className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-medium text-black transition-transform hover:scale-105 active:scale-95"
                    >
                      Send us an email
                    </a>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-[#8E8E93] block">Connect</span>
                    <div className="flex gap-5">
                      {[
                        { icon: Instagram, href: "https://www.instagram.com/obxstudio_/", label: "Instagram" },
                        { icon: Linkedin, href: "https://www.linkedin.com/company/obxstudio/", label: "LinkedIn" },
                        { icon: Facebook, href: "https://www.facebook.com/share/1PKDMxQTLx/?mibextid=wwXIfr", label: "Facebook" },
                        { icon: MessageCircle, href: "https://wa.me/27760190339", label: "WhatsApp" },
                      ].map((social) => {
                        const Icon = social.icon
                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#FFFFFF] hover:text-[#8E8E93] transition-colors duration-300"
                            aria-label={social.label}
                          >
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                          </a>
                        )
                      })}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
