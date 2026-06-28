'use client'

import { Reveal } from '@/components/anim/reveal'

export function StudioStatement() {
  return (
    <section className="px-5 py-28 md:px-10 md:py-40 bg-foreground text-background">
      <div className="mx-auto max-w-[1600px] flex flex-col items-center text-center">
        <Reveal delay={0.1} className="mt-12 max-w-5xl">
          <h2 className="font-heading text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-7xl">
            We partner with ambitious teams to create digital experiences that perform flawlessly and leave a lasting impression.
          </h2>
        </Reveal>
      </div>
    </section>
  )
}
