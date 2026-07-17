'use client'

import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { ScrollRevealText } from '@/components/anim/scroll-reveal-text'

export function Intro() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 45%"],
  })

  return (
    <section 
      ref={sectionRef}
      className="flex min-h-[100svh] flex-col justify-center px-4 pt-40 pb-40 md:px-6 md:pt-60 md:pb-80 bg-background text-black"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <div className="max-w-xl">
            <ScrollRevealText
              text="Your website is often the only meeting a prospective client has with you before they decide whether to trust you."
              className="font-heading text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl md:text-5xl lg:text-[3.2rem] text-pretty"
              progress={scrollYProgress}
              range={[0, 0.45]}
            />
          </div>
          
          <div className="max-w-xl lg:mt-80">
            <ScrollRevealText
              text="Whatever you're building — that first impression carries more weight than a portfolio, a pitch, or a referral."
              className="font-heading text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl md:text-5xl lg:text-[3.2rem] text-pretty"
              progress={scrollYProgress}
              range={[0.55, 1]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

