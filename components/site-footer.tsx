'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'X / Twitter', href: 'https://x.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Dribbble', href: 'https://dribbble.com' },
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

          <div className="md:col-span-5 md:flex md:justify-end">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-8">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground pb-2">
                  Sitemap
                </span>
                <Link href="/" className="text-sm text-foreground/80 transition-colors hover:text-foreground py-2 min-h-[44px] flex items-center">Index</Link>
                <Link href="/work" className="text-sm text-foreground/80 transition-colors hover:text-foreground py-2 min-h-[44px] flex items-center">Work</Link>
                <Link href="/studio" className="text-sm text-foreground/80 transition-colors hover:text-foreground py-2 min-h-[44px] flex items-center">Studio</Link>
                <Link href="/blog" className="text-sm text-foreground/80 transition-colors hover:text-foreground py-2 min-h-[44px] flex items-center">Blog</Link>
                <Link href="/contact" className="text-sm text-foreground/80 transition-colors hover:text-foreground py-2 min-h-[44px] flex items-center">Contact</Link>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground pb-2">
                  Social
                </span>
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground py-2 min-h-[44px] flex items-center"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground pb-2">
                  Contact
                </span>
                <a
                  href="mailto:hello@obxstudio.co.za"
                  className="text-sm text-foreground/80 transition-colors hover:text-foreground py-2 min-h-[44px] flex items-center"
                >
                  hello@obxstudio.co.za
                </a>
                <span className="text-sm text-foreground/80 py-2">+{27} 60 375 9829</span>
                <span className="text-sm text-foreground/80 py-2">Johannesburg, SA</span>
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
