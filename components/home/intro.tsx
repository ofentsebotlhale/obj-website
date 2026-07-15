'use client'

import { Reveal } from '@/components/anim/reveal'

export function Intro() {
  return (
    <section className="flex min-h-[85svh] flex-col justify-center px-5 py-40 md:px-10 md:py-60 bg-background text-foreground">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="max-w-5xl space-y-12 md:space-y-16">
          <Reveal>
            <p className="font-heading text-3xl font-light leading-relaxed tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.5rem] text-pretty">
              Your website is often the only meeting a prospective client has with you before they decide whether to trust you.
            </p>
          </Reveal>
          
          <Reveal delay={0.25}>
            <p className="font-heading text-3xl font-light leading-relaxed tracking-tight text-foreground/80 sm:text-4xl md:text-5xl lg:text-[3.5rem] text-pretty">
              Whatever you're building — that first impression carries more weight than a portfolio, a pitch, or a referral.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

