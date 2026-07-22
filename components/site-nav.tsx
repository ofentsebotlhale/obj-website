'use client'

import Link from 'next/link'
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

function MenuLinks({ pathname }: { pathname: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  return (
    <ul className="flex flex-col items-start gap-4 md:gap-6 w-full">
      {LINKS.map((link, i) => {
        const isActive = pathname === link.href
        const isAnyHovered = hoveredIndex !== null
        const isThisHovered = hoveredIndex === i
        
        return (
          <motion.li
            key={link.href}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 15 }}
            transition={{ 
              delay: 0.05 * i + 0.1, 
              duration: 0.45, 
              ease: [0.215, 0.61, 0.355, 1] 
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="block w-full"
          >
            <Link
              href={link.href}
              className={cn(
                "flex items-baseline gap-6 transition-opacity duration-300",
                isActive ? "text-[#FFFFFF]" : "text-[#FFFFFF]",
                isAnyHovered && !isThisHovered ? "opacity-25" : "opacity-100"
              )}
              aria-disabled={isActive}
            >
              <span className="font-mono text-sm md:text-base text-[#8E8E93] select-none">
                0{i + 1}
              </span>
              <span className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FFFFFF]">
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
            className="fixed inset-0 z-40 flex flex-col justify-center bg-[#000000] px-6 md:px-12 lg:px-24 overflow-y-auto"
          >
            <div className="w-full max-w-[1500px] mx-auto py-24 lg:py-32 flex-grow flex flex-col justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-end w-full">
                
                {/* Left Column - Essential Info */}
                <div className="col-span-1 lg:col-span-4 flex flex-col justify-end space-y-10 order-last lg:order-first mt-12 lg:mt-0 lg:pb-4">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-[#8E8E93] block">Location</span>
                    <p className="font-sans text-sm md:text-base text-[#FFFFFF]">Johannesburg, South Africa</p>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-[#8E8E93] block">Inquiries</span>
                    <a 
                      href="mailto:hello@obxstudio.co.za" 
                      className="font-sans text-sm md:text-base text-[#FFFFFF] hover:text-[#8E8E93] transition-colors inline-block"
                    >
                      hello@obxstudio.co.za
                    </a>
                  </div>
                  
                  <div className="space-y-4">
                    <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-[#8E8E93] block">Connect</span>
                    <div className="flex gap-6">
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
                            <Icon className="h-5 w-5" />
                          </a>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Column - Nav Links */}
                <div className="col-span-1 lg:col-span-8 flex flex-col items-start w-full">
                  <MenuLinks pathname={pathname} />
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
