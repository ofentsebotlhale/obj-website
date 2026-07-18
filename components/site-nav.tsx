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

function LiveClock() {
  const [time, setTime] = useState<string>('')
  
  useEffect(() => {
    const formatTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Johannesburg',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }
      return new Intl.DateTimeFormat('en-US', options).format(new Date())
    }
    
    setTime(formatTime())
    const interval = setInterval(() => {
      setTime(formatTime())
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])

  if (!time) {
    return (
      <div className="flex items-center font-mono text-[11px] tracking-widest text-neutral-500 uppercase h-[18px]">
        JHB LOCAL TIME: --:--:-- (UTC+2)
      </div>
    )
  }

  return (
    <div className="flex items-center font-mono text-[11px] tracking-widest text-neutral-400 uppercase h-[18px]">
      <span className="relative flex h-1.5 w-1.5 mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
      </span>
      JHB LOCAL TIME: {time} (UTC+2)
    </div>
  )
}

function MenuLinks({ pathname }: { pathname: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  return (
    <ul className="flex flex-col items-start lg:items-end gap-2 md:gap-3 w-full">
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
            className="block"
          >
            <Link
              href={link.href}
              className={cn(
                "relative flex items-baseline gap-4 py-1 transition-all duration-300 origin-left lg:origin-right",
                isActive ? "text-white" : "text-neutral-400",
                isAnyHovered && !isThisHovered ? "opacity-30 scale-[0.98] blur-[0.5px]" : "opacity-100 scale-100"
              )}
              aria-disabled={isActive}
            >
              <span className="font-mono text-xs text-neutral-600 select-none">
                0{i + 1}
              </span>
              <span className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white transition-colors duration-200">
                {link.label}
              </span>
              {isActive && (
                <motion.span 
                  layoutId="menuActiveIndicator"
                  className="absolute -left-6 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white hidden lg:block"
                />
              )}
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
            className="fixed inset-0 z-40 flex flex-col justify-center bg-[#0a0a0a] px-6 md:px-12 lg:px-24 overflow-y-auto"
          >
            <div className="w-full max-w-[1500px] mx-auto py-24 lg:py-32 flex-grow flex flex-col justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center w-full">
                
                {/* Left Column - Studio Info (Hidden on mobile, elegant on lg) */}
                <div className="hidden lg:flex lg:col-span-5 flex-col justify-between h-full min-h-[350px] pr-12 text-left">
                  <div className="space-y-4">
                    <h3 className="font-heading text-2xl font-bold tracking-tight text-white">
                      OBX Studio
                    </h3>
                    <p className="font-sans text-sm text-neutral-400 max-w-xs leading-relaxed">
                      We craft brands, interfaces, and high-performance digital experiences for ambitious partners worldwide.
                    </p>
                  </div>

                  <div className="space-y-8 pt-8 border-t border-white/10">
                    <div className="space-y-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 block">Location</span>
                      <p className="font-sans text-sm text-neutral-300">Johannesburg, South Africa</p>
                      <LiveClock />
                    </div>

                    <div className="space-y-1">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 block">General Inquiries</span>
                      <a 
                        href="mailto:hello@obxstudio.co.za" 
                        className="font-sans text-base text-neutral-200 hover:text-white transition-colors underline underline-offset-4 decoration-neutral-700 hover:decoration-white"
                      >
                        hello@obxstudio.co.za
                      </a>
                    </div>
                    
                    <div className="space-y-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 block">Connect</span>
                      <div className="flex gap-4">
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
                              className="text-neutral-400 hover:text-white transition-colors duration-200"
                              aria-label={social.label}
                            >
                              <Icon className="h-4 w-4" />
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Nav Links */}
                <div className="col-span-1 lg:col-span-7 flex flex-col items-start lg:items-end w-full">
                  <MenuLinks pathname={pathname} />
                  
                  {/* Subtle Divider for mobile only */}
                  <div className="w-full h-[1px] bg-white/10 my-8 lg:hidden" />
                  
                  {/* Mobile footer details (visible only on mobile) */}
                  <div className="flex flex-col gap-6 lg:hidden w-full text-left">
                    <div className="flex flex-col gap-1">
                      <LiveClock />
                      <p className="font-mono text-[10px] text-neutral-500 tracking-widest">
                        JOHANNESBURG, SOUTH AFRICA
                      </p>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">Say Hello</span>
                      <a 
                        href="mailto:hello@obxstudio.co.za" 
                        className="font-sans text-sm text-neutral-200 hover:text-white transition-colors"
                      >
                        hello@obxstudio.co.za
                      </a>
                    </div>

                    <div className="flex gap-4">
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
                            className="text-neutral-400 hover:text-white transition-colors"
                            aria-label={social.label}
                          >
                            <Icon className="h-4 w-4" />
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
