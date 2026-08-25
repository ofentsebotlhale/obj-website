'use client'

import { Reveal } from '@/components/anim/reveal'
import Link from 'next/link'

export function StudioStatement() {
  return (
    <section className="flex flex-col justify-center bg-background px-[5vw] py-[80px] md:py-[120px] text-foreground border-t border-b border-black/10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center space-y-12">
        <Reveal className="max-w-4xl">
          <h2 className="font-heading text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-pretty text-black">
            We partner with businesses who understand that a website isn't a brochure — it's the first impression a client forms before they ever speak to you.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="font-heading text-xl font-semibold tracking-tight text-foreground/90 sm:text-2xl md:text-3xl">
            Let's make yours count.
          </p>
        </Reveal>

        <Reveal delay={0.4} className="pt-4">
          <Link
            href="/contact"
            className="group/cta inline-flex items-center bg-black text-white text-[14px] font-medium rounded-[80px] pt-[12.8px] pb-[12.8px] pr-[28.8px] pl-[16px] transition-transform hover:scale-105"
          >
            <span>SCHEDULE A CALL</span>
            <span className="inline-block transition-transform duration-300 group-hover/cta:translate-x-1 ml-2">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

