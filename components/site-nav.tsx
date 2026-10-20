'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Menu, X, Instagram, Linkedin, Facebook } from 'lucide-react'

function WhatsAppNavIcon({ className = 'h-5 w-5 sm:h-6 sm:w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
    </svg>
  )
}

const LINKS = [
  { href: '/work', label: 'WORK' },
  { href: '/services', label: 'SERVICES' },
  { href: '/studio', label: 'STUDIO' },
  { href: '/blog', label: 'BLOG' },
  { href: '/contact', label: 'CONTACT' },
]

function MenuLinks({ pathname, onClose }: { pathname: string; onClose?: () => void }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  return (
    <ul className="flex flex-col items-start gap-4 sm:gap-6 md:gap-8 w-full">
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
                isActive ? "text-foreground" : "text-foreground",
                isAnyHovered && !isThisHovered ? "opacity-25" : "opacity-100"
              )}
            >
              <span className="font-mono text-sm sm:text-base md:text-lg text-muted-foreground select-none font-medium">
                0{i + 1}
              </span>
              <span className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-none transition-transform duration-300 group-hover:translate-x-3">
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
            "flex items-center justify-between px-4 transition-all duration-300 md:px-8",
            scrolled && !open ? "pb-3 pt-3 md:pb-4 md:pt-4" : "pb-5 pt-5 md:pb-6 md:pt-6"
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
            className="font-sans font-bold text-xl md:text-2xl tracking-tight text-white flex items-center min-h-[44px] hover:opacity-80 transition-opacity"
            aria-label="OBX Studio home"
          >
            OBX Studio
          </Link>
          <div className="flex items-center gap-6 md:gap-8">
            <div className="hidden md:flex items-center gap-7 text-sm font-sans tracking-tight text-white/85">
              <Link href="/work" className="hover:text-white transition-colors">
                Work
              </Link>
              <Link href="/studio" className="hover:text-white transition-colors">
                About
              </Link>
              <Link href="/services" className="hover:text-white transition-colors">
                Approach
              </Link>
              <Link
                href="/contact"
                className="hover:text-white transition-colors flex items-center gap-1 group"
              >
                <span>Contact</span>
                <span className="text-white/60 group-hover:translate-x-0.5 group-hover:text-white transition-transform font-mono">
                  &gt;
                </span>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex md:hidden items-center gap-2 justify-center min-h-[44px] px-3 rounded-full transition-transform hover:scale-105 active:scale-95"
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              <span className="font-mono text-[9.6px] font-bold uppercase tracking-widest text-white hidden sm:block pt-0.5">
                MENU
              </span>
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span className={cn("absolute transition-all duration-300", open ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100")}>
                  <Menu className="w-6 h-6 text-white" />
                </span>
                <span className={cn("absolute transition-all duration-300", open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50")}>
                  <X className="w-6 h-6 text-white" />
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
            className="fixed inset-0 z-40 h-[100dvh] w-full bg-background px-2 md:px-4 overflow-y-auto flex flex-col justify-between pt-[calc(env(safe-area-inset-top,0px)+4.5rem)] pb-[calc(env(safe-area-inset-bottom,0px)+1.5rem)] select-none"
          >
            <div className="w-full max-w-[1500px] mx-auto h-full flex flex-col justify-between my-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-y-12 gap-x-4 md:gap-x-8 items-center w-full my-auto flex-1 min-h-0">
                
                {/* Left Column - Nav Links */}
                <div className="col-span-1 lg:col-span-7 flex flex-col items-start justify-center w-full">
                  <MenuLinks pathname={pathname} onClose={() => setOpen(false)} />
                </div>

                {/* Right Column - Essential Info */}
                <div className="col-span-1 lg:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-8 border-t lg:border-t-0 lg:border-l border-foreground/10 pt-4 lg:pt-0 lg:pl-12">
                  <div className="space-y-1">
                    <span className="font-mono text-[11px] md:text-xs uppercase tracking-widest text-[#8E8E8E] block">Location</span>
                    <p className="font-sans text-sm sm:text-base md:text-lg text-foreground">Johannesburg, South Africa</p>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-[#8E8E8E] block">Inquiries</span>
                    <a 
                      href="mailto:hello@obxstudio.co.za" 
                      className="inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base font-medium text-background transition-transform hover:scale-105 active:scale-95"
                    >
                      Send us an email
                    </a>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-[#8E8E8E] block">Connect</span>
                    <div className="flex gap-5">
                      {[
                        { icon: Instagram, href: "https://www.instagram.com/obxstudio_/", label: "Instagram" },
                        { icon: Linkedin, href: "https://www.linkedin.com/company/obxstudio/", label: "LinkedIn" },
                        { icon: Facebook, href: "https://www.facebook.com/share/1PKDMxQTLx/?mibextid=wwXIfr", label: "Facebook" },
                        { icon: WhatsAppNavIcon, href: "https://wa.me/27603759829", label: "WhatsApp" },
                      ].map((social) => {
                        const Icon = social.icon
                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-[#8E8E8E] transition-colors duration-300"
                            aria-label={social.label}
                          >
                            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
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
