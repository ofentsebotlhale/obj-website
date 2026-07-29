'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const SOCIALS = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/message/IYQSC46QIM5BP1',
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    )
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1PKDMxQTLx/?mibextid=wwXIfr',
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/obxstudio_/',
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/obxstudio/',
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
]

export function SiteFooter() {
  const year = new Date().getFullYear()
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 60%"]
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [40, 0])

  return (
    <footer className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-foreground text-background pt-20 md:pt-32">
      <div className="mx-auto w-full max-w-[1600px] flex-grow flex flex-col justify-between px-6 md:px-12 lg:px-24">
        
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left / Contact & Brand */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-12">
            <motion.div
              ref={ref}
              style={{ opacity, y }}
              className="w-full flex flex-col items-start justify-center text-background select-none -space-y-1 sm:-space-y-2 md:-space-y-3 lg:-space-y-4"
            >
              <div className="overflow-hidden w-full">
                <div className="w-full">
                  <svg viewBox="0 0 600 135" className="w-full h-auto block overflow-visible select-none">
                    <text
                      x="0"
                      y="116"
                      className="font-heading font-extrabold fill-background uppercase"
                      style={{ fontSize: '136px', letterSpacing: '-0.04em' }}
                    >
                      OBX
                    </text>
                  </svg>
                </div>
              </div>
              <div className="overflow-hidden w-full">
                <div className="w-full">
                  <svg viewBox="0 0 600 135" className="w-full h-auto block overflow-visible select-none">
                    <text
                      x="0"
                      y="116"
                      className="font-heading font-extrabold fill-background uppercase"
                      style={{ fontSize: '136px', letterSpacing: '-0.04em' }}
                    >
                      STUDIO
                    </text>
                  </svg>
                </div>
              </div>
            </motion.div>

            <div className="flex gap-4">
               <a 
                  href="mailto:hello@obxstudio.co.za" 
                  className="inline-flex items-center justify-center rounded-full bg-background px-8 py-4 font-mono text-[13px] uppercase tracking-widest text-foreground transition-all hover:scale-105"
                >
                  Email Us
                </a>
            </div>
          </div>

          {/* Right / Links */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-12 sm:gap-24 lg:gap-16 lg:items-end">
            
            <div className="flex flex-col gap-6 w-full lg:w-auto lg:text-right">
              <span className="font-mono text-[11px] uppercase tracking-widest text-background/60">
                Navigation
              </span>
              <nav className="flex flex-col gap-3">
                {['Home', 'Work', 'Studio', 'Services', 'Blog', 'Contact'].map((item) => (
                  <Link 
                    key={item} 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="font-sans text-xl md:text-2xl font-medium text-background hover:text-background/60 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-6 w-full lg:w-auto lg:text-right">
              <span className="font-mono text-[11px] uppercase tracking-widest text-background/60">
                Socials
              </span>
              <div className="flex flex-col gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xl md:text-2xl font-medium text-background hover:text-background/60 transition-colors inline-flex lg:justify-end items-center gap-3 group"
                  >
                    <span className="group-hover:-translate-x-1 transition-transform">↗</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-8 font-mono text-[10px] uppercase tracking-widest text-background/60 mt-24">
          <div className="flex gap-4">
            <span>© {year} OBX Studio</span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-background transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-background transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
