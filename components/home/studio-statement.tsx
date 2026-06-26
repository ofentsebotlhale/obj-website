'use client'

import { Reveal } from '@/components/anim/reveal'

export function StudioStatement() {
  return (
    <section className="px-5 py-28 md:px-10 md:py-40 bg-foreground text-background">
      <div className="mx-auto max-w-[1600px] flex flex-col items-center text-center">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
            ( Studio Statement )
          </span>
        </Reveal>
        <Reveal delay={0.1} className="mt-12 max-w-5xl">
          <h2 className="font-heading text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-7xl">
            We partner with ambitious teams to create digital experiences that perform flawlessly and leave a lasting impression.
          </h2>
        </Reveal>
        <Reveal delay={0.2} className="mt-10 max-w-3xl">
          <p className="font-sans text-lg md:text-xl leading-relaxed text-muted font-light">
            Our approach combines deep strategic thinking with precise execution. We don't just build websites; we craft comprehensive digital platforms that actively support your business objectives. By focusing on both aesthetics and technical performance, we ensure your digital presence is as powerful as the services you provide. Let us help you navigate the complexities of the digital landscape with confidence and clarity.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
