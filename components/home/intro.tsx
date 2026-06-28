'use client'

import Link from 'next/link'
import { Reveal } from '@/components/anim/reveal'

export function Intro() {
  return (
    <section className="px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
            Studio
          </h2>
        </Reveal>
        <div className="md:col-span-9 max-w-3xl">
          <Reveal>
            <p className="text-xl md:text-3xl font-heading text-foreground leading-[1.3] text-pretty">
              OBX Studio is a web design practice. We build thoughtful, high-performing websites for ambitious businesses. We take on a select number of clients to ensure precision in every project. See our <Link href="/services" className="text-foreground underline hover:opacity-80">services</Link>.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <Link
              href="/studio"
              className="group inline-flex items-center gap-3 rounded-full border border-border/50 bg-secondary/30 px-6 py-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
            >
              Learn more about the studio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
