'use client'

import { Reveal } from '@/components/anim/reveal'

export function ClientEndorsement() {
  return (
    <section className="px-4 py-32 md:py-48 md:px-6 bg-background text-foreground border-t border-border/10">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="mx-auto max-w-5xl text-center space-y-12">
            <blockquote className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-black text-pretty">
              "OBX Studio redefined how our brand presents itself online. Within weeks of launch, our inbound lead quality completely shifted."
            </blockquote>
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-black/40">
              — Founder, Tech & Consulting
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
