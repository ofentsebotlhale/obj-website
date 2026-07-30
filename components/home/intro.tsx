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
      className="flex min-h-[100svh] flex-col justify-center px-[5vw] py-[15vh] md:py-[20vh] bg-foreground text-background"
    >
      <div className="mx-auto w-full max-w-[1920px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-48 items-start">
          <div className="max-w-xl">
            <ScrollRevealText
              text="Your website is often the only meeting a prospective client has with you before they decide whether to trust you."
              className="font-heading text-3xl font-bold leading-tight tracking-tight text-background sm:text-4xl md:text-5xl lg:text-[3.2rem] text-pretty"
              progress={scrollYProgress}
              range={[0, 0.45]}
            />
          </div>
          
          <div className="max-w-xl lg:mt-64">
            <ScrollRevealText
              text="Whatever you're building — that first impression carries more weight than a portfolio, a pitch, or a referral."
              className="font-heading text-3xl font-bold leading-tight tracking-tight text-background sm:text-4xl md:text-5xl lg:text-[3.2rem] text-pretty"
              progress={scrollYProgress}
              range={[0.55, 1]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

