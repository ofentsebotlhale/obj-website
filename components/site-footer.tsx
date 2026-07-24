'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'motion/react'
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
    <footer className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden border-t border-border bg-background px-4 pb-8 pt-20 md:px-6">
      <div className="mx-auto w-full max-w-[1600px] flex-grow flex flex-col justify-between">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-widest text-foreground">
              Have a project in mind?
            </p>
            <Link href="/contact" data-cursor="Say hi" className="group mt-4 inline-flex items-center gap-4">
              <span
                className="font-heading text-4xl font-bold tracking-tight text-foreground transition-all duration-300 group-hover:opacity-60 sm:text-5xl md:text-6xl"
              >
                Let&apos;s build something
              </span>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground/10 text-foreground transition-all duration-300 group-hover:bg-foreground group-hover:text-background sm:h-20 sm:w-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
            </Link>
          </div>

          <div className="md:col-span-5 md:flex md:justify-end mt-12 md:mt-0">
            <div className="flex flex-col gap-10 sm:max-w-[320px]">
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[12px] uppercase tracking-widest text-foreground">
                  Navigation
                </span>
                <div className="flex flex-wrap gap-3">
                  <Link href="/" className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-2 min-h-[48px] font-mono text-[13px] uppercase tracking-widest text-background transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground">Home</Link>
                  <Link href="/work" className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-2 min-h-[48px] font-mono text-[13px] uppercase tracking-widest text-background transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground">Work</Link>
                  <Link href="/studio" className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-2 min-h-[48px] font-mono text-[13px] uppercase tracking-widest text-background transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground">Studio</Link>
                  <Link href="/services" className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-2 min-h-[48px] font-mono text-[13px] uppercase tracking-widest text-background transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground">Services</Link>
                  <Link href="/blog" className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-2 min-h-[48px] font-mono text-[13px] uppercase tracking-widest text-background transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground">Blog</Link>
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-2 min-h-[48px] font-mono text-[13px] uppercase tracking-widest text-background transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground">Contact</Link>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[12px] uppercase tracking-widest text-foreground">
                  Connect
                </span>
                <div className="flex flex-wrap gap-4">
                  {SOCIALS.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-accent-foreground"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Oversized wordmark - stretched to fit perfectly within the overflow-hidden footer container */}
      <motion.div
        ref={ref}
        style={{ opacity, y }}
        className="w-[calc(100%+2rem)] md:w-[calc(100%+3rem)] -mx-4 md:-mx-6 select-none overflow-hidden mt-16"
      >
        <h2 className="font-heading text-[17.5vw] md:text-[18vw] font-black leading-[0.75] tracking-[-0.05em] text-foreground text-center uppercase whitespace-nowrap">
          OBX STUDIO
        </h2>
      </motion.div>

      <div className="mx-auto w-full max-w-[1600px] mt-8 flex flex-col gap-4 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:flex-row sm:items-center sm:justify-between px-4 md:px-0">
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-6 items-center">
          <span className="py-2">© {year} OBX Studio — All rights reserved</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors py-2 min-h-[44px] flex items-center">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors py-2 min-h-[44px] flex items-center">Terms & Conditions</Link>
          </div>
        </div>
        <span className="py-2">A few skilled humans doing the work of many™</span>
      </div>
    </footer>
  )
}
