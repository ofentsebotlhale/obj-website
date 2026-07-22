'use client'

import { Reveal } from '@/components/anim/reveal'

const STEPS = [
  {
    num: '01',
    title: 'DISCOVERY & POSITIONING',
    desc: 'We dissect your business, audience, and market position to establish a visual direction that commands authority.'
  },
  {
    num: '02',
    title: 'DESIGN & MOTION',
    desc: 'We craft bespoke, editorial interfaces paired with fluid motion design. No off-the-shelf templates, ever.'
  },
  {
    num: '03',
    title: 'ENGINEERING & LAUNCH',
    desc: 'Clean, scalable code built for extreme speed and seamless responsiveness across every screen size.'
  }
]

export function TheMethod() {
  return (
    <section className="px-4 pb-32 md:pb-48 md:px-6 bg-background text-foreground">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="mb-16 md:mb-24">
            <h2 className="font-mono text-xs uppercase tracking-widest text-black/40">
              The Method
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {STEPS.map((step, i) => (
            <Reveal key={i} delay={i * 0.15} className="flex flex-col space-y-6">
              <span className="font-mono text-4xl md:text-5xl text-black/10">
                {step.num}
              </span>
              <div className="space-y-3">
                <h3 className="font-mono text-xs md:text-sm uppercase tracking-widest text-black font-semibold">
                  {step.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-black/60 leading-relaxed text-pretty">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
