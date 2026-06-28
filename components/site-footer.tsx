'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
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
    label: 'X / Twitter',
    href: 'https://x.com',
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
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    )
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
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
  {
    label: 'Dribbble',
    href: 'https://dribbble.com',
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
        <circle cx="12" cy="12" r="10" />
        <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
        <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
        <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
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
    <footer className="relative overflow-hidden border-t border-border bg-background px-5 pb-8 pt-20 md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Have a project in mind?
            </p>
            <div className="group mt-4 inline-flex items-center gap-4">
              <Link
                href="/contact"
                data-cursor="Say hi"
                className="font-heading text-4xl font-semibold tracking-tight text-foreground transition-all duration-300 group-hover:opacity-60 sm:text-5xl md:text-6xl"
              >
                Let&apos;s build something
              </Link>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/10 text-foreground transition-all duration-300 group-hover:bg-foreground group-hover:text-background sm:h-16 sm:w-16">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
            </div>
          </div>

          <div className="md:col-span-5 md:flex md:justify-end mt-12 md:mt-0">
            <div className="flex flex-col gap-10 sm:max-w-[320px]">
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Navigation
                </span>
                <div className="flex flex-wrap gap-2">
                  <Link href="/" className="inline-flex items-center justify-center rounded-full bg-secondary/50 border border-border/50 px-5 min-h-[40px] font-mono text-[10px] uppercase tracking-widest text-foreground transition-all hover:bg-foreground hover:text-background">Index</Link>
                  <Link href="/work" className="inline-flex items-center justify-center rounded-full bg-secondary/50 border border-border/50 px-5 min-h-[40px] font-mono text-[10px] uppercase tracking-widest text-foreground transition-all hover:bg-foreground hover:text-background">Work</Link>
                  <Link href="/studio" className="inline-flex items-center justify-center rounded-full bg-secondary/50 border border-border/50 px-5 min-h-[40px] font-mono text-[10px] uppercase tracking-widest text-foreground transition-all hover:bg-foreground hover:text-background">Studio</Link>
                  <Link href="/blog" className="inline-flex items-center justify-center rounded-full bg-secondary/50 border border-border/50 px-5 min-h-[40px] font-mono text-[10px] uppercase tracking-widest text-foreground transition-all hover:bg-foreground hover:text-background">Blog</Link>
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-secondary/50 border border-border/50 px-5 min-h-[40px] font-mono text-[10px] uppercase tracking-widest text-foreground transition-all hover:bg-foreground hover:text-background">Contact</Link>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Connect
                </span>
                <div className="flex flex-wrap gap-3">
                  {SOCIALS.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/50 border border-border/50 text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
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

        {/* Oversized wordmark */}
        <motion.div
          ref={ref}
          style={{ opacity, y }}
          className="mt-16 select-none"
        >
          <h2 className="font-heading text-[22vw] font-bold leading-[0.8] tracking-tighter text-foreground md:text-[18vw]">
            OBX
          </h2>
        </motion.div>

        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-6 items-center">
            <span className="py-2">© {year} OBX Studio — All rights reserved</span>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-foreground transition-colors py-2 min-h-[44px] flex items-center">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-foreground transition-colors py-2 min-h-[44px] flex items-center">Terms & Conditions</Link>
            </div>
          </div>
          <span className="py-2">A few skilled humans doing the work of many™</span>
        </div>
      </div>
    </footer>
  )
}
