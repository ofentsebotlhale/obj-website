import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { ProcessAccordion } from '@/components/studio/process-accordion'
import { Reveal, RevealWords } from '@/components/anim/reveal'
import { ParallaxImage } from '@/components/anim/parallax-image'

export const metadata: Metadata = {
  title: 'About OBX Studio | Web Design & Development Johannesburg',
  description: 'Building digital experiences that help businesses earn trust, communicate clearly, and grow online.',
  alternates: {
    canonical: '/studio',
  },
}

export default function StudioPage() {
  return (
    <>
      <PageHeader 
        index="02 / 04" 
        subtitle="Who we are" 
        title="Studio" 
      />

      {/* Hero Intro */}
      <section className="relative px-[5vw] pb-20 md:px-[8vw] md:pb-[10vh]">
        <div className="mx-auto max-w-[1920px] relative z-10">
          <div className="max-w-4xl text-pretty">
            <h2 className="font-heading text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <RevealWords
                text="Building digital experiences that help businesses earn trust, communicate clearly, and grow online."
                className="text-foreground"
              />
            </h2>
          </div>
        </div>
      </section>

      {/* Narrative Section - Who We Are */}
      <section className="border-t border-border px-[5vw] py-12 md:px-[8vw] md:py-32">
        <div className="mx-auto grid max-w-[1920px] grid-cols-1 gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <div className="sticky top-28 font-mono text-[11px] uppercase tracking-widest text-foreground">
              ( Who We Are )
            </div>
          </Reveal>
          <div className="flex flex-col gap-8 md:col-span-8 md:max-w-3xl">
            <Reveal delay={0.1}>
              <p className="font-heading text-2xl font-medium leading-relaxed tracking-tight text-foreground sm:text-3xl">
                OBX Studio is a digital design and web development studio focused on creating modern websites for businesses that value quality and clarity.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-foreground md:text-lg">
                  We believe a website should be more than a digital brochure. It must represent a business professionally, create confidence, and support meaningful objectives. Our work combines strategy, design, and development to create websites that are visually refined and commercially effective.
                </p>
                <div>
                  <Link
                    href="/services"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-foreground/30 px-6 font-sans text-xs font-medium uppercase tracking-widest text-foreground transition-all hover:bg-muted"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                Based in Johannesburg, we partner with professional service firms, growing businesses, and modern brands. We bring technical expertise and creative vision to every project, ensuring your digital storefront accurately reflects the quality of your services.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Studio Image Gallery */}
      <section className="px-[5vw] md:px-[8vw]">
        <Reveal className="mx-auto max-w-[1920px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-muted">
              <ParallaxImage
                src="/studio/studio-wire-1.avif"
                alt="OBX Studio workspace detail 1"
                className="object-cover opacity-90 saturate-50 transition-all duration-700 hover:scale-105 hover:saturate-100"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-muted">
              <ParallaxImage
                src="/studio/studio-wire-2.avif"
                alt="OBX Studio workspace detail 2"
                className="object-cover opacity-90 saturate-50 transition-all duration-700 hover:scale-105 hover:saturate-100"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Approach (Process) */}
      <section className="px-[5vw] py-12 md:px-[8vw] md:py-32">
        <div className="mx-auto max-w-[1920px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 mb-16">
            <Reveal className="md:col-span-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-foreground">
                ( Our Approach )
              </span>
            </Reveal>
            <div className="md:col-span-8 md:max-w-2xl">
              <Reveal delay={0.1}>
                <h3 className="font-heading text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                  Every project follows a structured process designed to ensure clarity, efficiency, and exceptional outcomes.
                </h3>
              </Reveal>
            </div>
          </div>
          <ProcessAccordion />
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="border-t border-border px-[5vw] py-12 md:px-[8vw] md:py-32">
        <div className="mx-auto max-w-[1920px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <div className="sticky top-28">
                <span className="font-mono text-[11px] uppercase tracking-widest text-foreground block mb-2">
                  ( Team )
                </span>
                <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                  Meet the Founder
                </h3>
              </div>
            </Reveal>
            <div className="md:col-span-8 md:max-w-3xl">
              <Reveal delay={0.1}>
                <h4 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-6">
                  Ofentse Lengwasa
                </h4>
              </Reveal>
              <div className="flex flex-col gap-6 text-base leading-relaxed text-foreground md:text-lg">
                <Reveal delay={0.2}>
                  <p>
                    OBX Studio was founded by Ofentse Lengwasa with a vision of helping businesses establish stronger digital foundations through thoughtful design.
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <p>
                    Driven by a passion for design and problem-solving, he approaches every project with a focus on creating work that is both visually compelling and strategically effective. Great design should not only look exceptional—it should help businesses communicate clearly.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
