import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Hero } from '@/components/home/hero'
import { Marquee } from '@/components/home/marquee'
import { Intro } from '@/components/home/intro'
import { Process } from '@/components/home/process'
import { WhatWeBuild } from '@/components/home/what-we-build'
import { StudioStatement } from '@/components/home/studio-statement'
import { StickyProjectList } from '@/components/home/sticky-project-list'
import { Reveal, RevealWords } from '@/components/anim/reveal'
import { projects } from '@/lib/projects'
import { PageHeader } from '@/components/page-header'
import { ProcessAccordion } from '@/components/studio/process-accordion'
import { AsymmetricalProjectList } from '@/components/work/asymmetrical-project-list'
import { blogPosts } from '@/lib/blogs'
import { ArrowUpRight } from 'lucide-react'
import { ContactForm } from '@/components/contact/contact-form'

export const metadata: Metadata = {
  title: 'OBX Studio | Design, Branding & Development in South Africa',
  description:
    'OBX Studio is a boutique digital agency based in South Africa, specializing in premium web design, custom branding, and scalable web development services.',
}

const DETAILS = [
  { label: 'New business', value: 'hello@obxstudio.co.za' },
  { label: 'Studio', value: 'Johannesburg, South Africa' },
  { label: 'Hours', value: 'Mon—Fri, 9–18 SAST' },
]

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'OBX Studio',
        url: 'https://obxstudio.co.za',
      },
      {
        '@type': 'Organization',
        name: 'OBX Studio',
        url: 'https://obxstudio.co.za',
        logo: 'https://obxstudio.co.za/icon.svg',
        description: 'OBX Studio is a boutique digital studio crafting premium brand identities, editorial interfaces, and high-performance web experiences.',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div id="hero">
        <Hero />
        <Marquee />
        <Intro />
        <WhatWeBuild />
      </div>

      <section id="work" className="scroll-mt-0">
        <PageHeader index="01 / 05" subtitle="Selected Projects" title="Our Work" />

        {/* Hero Intro */}
        <section className="px-5 pb-20 md:px-10 md:pb-28">
          <div className="mx-auto max-w-[1600px]">
            <div className="max-w-4xl text-pretty">
              <h2 className="font-heading text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
                <RevealWords
                  text="A selection of websites and digital experiences designed to help businesses build credibility and attract clients."
                  className="text-foreground"
                />
              </h2>
            </div>
          </div>
        </section>

        {/* Selected work */}
        <section className="px-5 pb-28 md:px-10 md:pb-40">
          <div className="mx-auto max-w-[1600px]">
            <Reveal className="mb-10 flex items-end justify-between">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
                Selected Highlights
              </h2>
            </Reveal>
            <StickyProjectList items={projects.slice(0, 4)} />
          </div>
        </section>

        <section className="px-5 pb-28 md:px-10 mt-16">
          <div className="mx-auto max-w-[1600px]">
            <AsymmetricalProjectList items={projects} />
          </div>
        </section>
      </section>

      <section id="studio" className="scroll-mt-0 border-t border-border">
        <PageHeader index="02 / 05" subtitle="Who we are" title="Studio" />

        {/* Hero Intro */}
        <section className="relative px-5 pb-20 md:px-10 md:pb-28">
          <div className="mx-auto max-w-[1600px] relative z-10">
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
        <section className="border-t border-border px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <div className="sticky top-28 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                ( Who We Are )
              </div>
            </Reveal>
            <div className="flex flex-col gap-8 md:col-span-8 md:max-w-3xl">
              <Reveal delay={0.1}>
                <p className="font-heading text-2xl font-light leading-relaxed tracking-tight text-foreground sm:text-3xl">
                  OBX Studio is a digital design and web development studio focused on creating modern websites for businesses that value quality and clarity.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  We believe a website should be more than a digital brochure. It must represent a business professionally, create confidence, and support meaningful objectives. Our work combines <Link href="#services" className="text-accent underline hover:text-accent/80">strategy, design, and development</Link> to create websites that are visually refined and commercially effective.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Based in Johannesburg, we partner with professional service firms, growing businesses, and modern brands. We bring technical expertise and creative vision to every project, ensuring your digital storefront accurately reflects the quality of your services.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <StudioStatement />

        {/* Studio Image Gallery */}
        <section className="px-5 md:px-10 py-12 md:py-20">
          <Reveal className="mx-auto max-w-[1600px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-muted">
                <Image
                  src="/studio/studio-wire-1.avif"
                  alt="OBX Studio workspace detail 1"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-90 saturate-50 transition-all duration-700 hover:scale-105 hover:saturate-100"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-muted">
                <Image
                  src="/studio/studio-wire-2.avif"
                  alt="OBX Studio workspace detail 2"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-90 saturate-50 transition-all duration-700 hover:scale-105 hover:saturate-100"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Approach (Process) */}
        <Process />

        <section className="px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12 mb-16">
              <Reveal className="md:col-span-4">
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
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
        <section className="border-t border-border px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
              <Reveal className="md:col-span-4">
                <div className="sticky top-28">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground block mb-2">
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
                <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground md:text-lg">
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
      </section>

      <section id="services" className="scroll-mt-0 border-t border-border">
        <PageHeader index="03 / 05" subtitle="What we do" title="Services" />

        <section className="relative px-5 pb-20 md:px-10 md:pb-28">
          <div className="mx-auto max-w-[1600px] relative z-10">
            <div className="max-w-4xl text-pretty">
              <h2 className="font-heading text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
                <RevealWords
                  text="OBX Studio provides end-to-end digital design and web development services focused on creating modern, high-performing websites for businesses."
                  className="text-foreground"
                />
              </h2>
            </div>
          </div>
        </section>

        <section className="border-t border-border px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1600px]">
            <Reveal delay={0.1}>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl mb-8">
                What We Do
              </h2>
              <p className="font-sans text-lg leading-relaxed text-muted-foreground mb-12">
                We offer a focused set of services designed to take a website from concept to launch.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <div className="bg-card/40 border border-border/50 rounded-xl p-8 transition-colors hover:border-accent/50 hover:bg-accent/5 flex flex-col h-full">
                  <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground mb-4">Web Design</h3>
                  <p className="font-sans text-base leading-relaxed text-muted-foreground mb-8 flex-grow">
                    We design clean, structured, and user-focused websites that communicate clearly and build trust. Every design is tailored to your brand, audience, and business goals.
                  </p>
                  <Link
                    href="/services/web-design"
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent hover:text-foreground transition-colors mt-auto"
                  >
                    <span>Explore Design</span>
                    <span>↗</span>
                  </Link>
                </div>

                <div className="bg-card/40 border border-border/50 rounded-xl p-8 transition-colors hover:border-accent/50 hover:bg-accent/5 flex flex-col h-full">
                  <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground mb-4">Web Development</h3>
                  <p className="font-sans text-base leading-relaxed text-muted-foreground mb-8 flex-grow">
                    We develop fast, responsive, and scalable websites built for performance and usability. Every build is optimised for speed, responsiveness, and real-world usage.
                  </p>
                  <Link
                    href="/services/web-development"
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent hover:text-foreground transition-colors mt-auto"
                  >
                    <span>Explore Development</span>
                    <span>↗</span>
                  </Link>
                </div>

                <div className="bg-card/40 border border-border/50 rounded-xl p-8 transition-colors hover:border-accent/50 hover:bg-accent/5 flex flex-col h-full">
                  <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground mb-4">Full Website Build</h3>
                  <p className="font-sans text-base leading-relaxed text-muted-foreground mb-8 flex-grow">
                    For clients who want a complete solution, we handle both design and development — delivering a fully finished website from initial concept to final launch.
                  </p>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent hover:text-foreground transition-colors mt-auto"
                  >
                    <span>Start a Project</span>
                    <span>↗</span>
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl mb-8">
                Our Approach
              </h2>
              <p className="font-sans text-lg leading-relaxed text-muted-foreground mb-12">
                We follow a structured process to ensure every project is clear, efficient, and aligned with your goals.
              </p>
            </Reveal>
            
            <div className="flex flex-col gap-12 mb-20">
              <div>
                <h3 className="font-mono text-sm uppercase tracking-widest text-foreground font-semibold mb-4">1. Strategy</h3>
                <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                  We understand your business, audience, and objectives to define the direction of the project.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-widest text-foreground font-semibold mb-4">2. Design</h3>
                <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                  We create a visual system and user experience that reflects your brand and guides users effectively. Read more about our <Link href="#services" className="text-accent underline hover:text-accent/80">web design services</Link>.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-widest text-foreground font-semibold mb-4">3. Development</h3>
                <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                  We build the website into a fully functional, responsive, and performance-optimised product. Read more about our <Link href="#services" className="text-accent underline hover:text-accent/80">web development services</Link>.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-widest text-foreground font-semibold mb-4">4. Launch</h3>
                <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                  We deploy and refine the website to ensure it is stable, fast, and ready for users.
                </p>
              </div>
            </div>

            <Reveal delay={0.3}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20 mb-20 border-y border-border py-16">
                <div>
                  <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground mb-8">
                    Who We Work With
                  </h2>
                  <p className="font-sans text-[15px] leading-relaxed text-foreground font-medium mb-4">
                    We work with businesses that value clarity, design quality, and performance.
                  </p>
                  <ul className="flex flex-col gap-4">
                    {[
                      "Professional service firms",
                      "Growing businesses",
                      "Modern brands",
                      "Startups building their digital presence",
                      "Companies upgrading outdated websites"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 font-sans text-[15px] leading-relaxed text-muted-foreground">
                        <span className="text-accent mt-0.5">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground mb-8">
                    Why OBX Studio
                  </h2>
                  <p className="font-sans text-[15px] md:text-base leading-relaxed text-muted-foreground mb-6">
                    We don't treat websites as just design projects.
                  </p>
                  <p className="font-sans text-[15px] md:text-base leading-relaxed text-muted-foreground mb-6">
                    We build digital systems that help businesses communicate better, build credibility, and attract clients.
                  </p>
                  <p className="font-sans text-[15px] md:text-base leading-relaxed text-foreground font-medium mb-4">
                    Every project is focused on:
                  </p>
                  <ul className="flex flex-col gap-4">
                    {[
                      "clarity",
                      "performance",
                      "usability",
                      "long-term scalability"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 font-sans text-[15px] leading-relaxed text-muted-foreground">
                        <span className="text-accent mt-0.5">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

      </section>

      <section id="blog" className="scroll-mt-0 border-t border-border">
        <PageHeader index="04 / 05" subtitle="Articles & Ideas" title="Blog" />
        <section className="px-5 pb-28 md:px-10 md:pb-40">
          <div className="mx-auto max-w-[1600px] border-t border-border/80 pt-16">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              
              {/* Left sidebar info or categories teaser */}
              <div className="lg:col-span-4 space-y-6">
                <Reveal>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mr-3">
                    ( Insights Hub )
                  </span>
                </Reveal>
                <Reveal>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-sm">
                    We write to make sense of design systems, technology performance, and user strategies that drive measurable growth for digital businesses.
                  </p>
                </Reveal>
                <div className="pt-4 border-t border-border/40 max-w-sm">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground block mb-2">Featured Topic</span>
                  <span className="rounded-full bg-accent/10 border border-accent/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent font-semibold inline-block">
                    Conversion Strategy
                  </span>
                </div>
              </div>

              {/* Main blog timeline list */}
              <div className="lg:col-span-8 space-y-12">
                {blogPosts.slice(0, 3).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block border border-border/60 hover:border-accent bg-card/10 hover:bg-card/40 rounded-md p-8 md:p-10 transition-all duration-300"
                  >
                      <div className="flex flex-col gap-4">
                        {/* Meta info */}
                        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          <span className="text-accent font-semibold">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-3">
                            <span>{post.date}</span>
                            <span className="text-border">•</span>
                            <span>{post.readingTime}</span>
                          </div>
                        </div>

                        {/* Main Title */}
                        <div className="flex items-start justify-between gap-6 mt-2">
                          <h2 className="font-heading text-2xl md:text-3.5xl font-medium tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
                            {post.title}
                          </h2>
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300">
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </div>

                        {/* Excerpt */}
                        <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed mt-2 max-w-2xl">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-foreground mt-4 group-hover:translate-x-1.5 transition-transform duration-300">
                          <span>Read Chapter</span>
                          <span>→</span>
                        </div>
                      </div>
                  </Link>
                ))}
                
                <div className="pt-4 flex justify-start">
                  <Link
                    href="/blog"
                    className="group flex w-fit items-center gap-3 rounded-full border border-border/50 bg-secondary/50 px-6 py-3 min-h-[44px] font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-all hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
                  >
                    View all articles
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </section>

      <section id="contact" className="scroll-mt-0 border-t border-border">
        <PageHeader index="05 / 05" subtitle="Start a project" title="Contact Us" />

        <section className="px-5 pb-24 md:px-10 md:pb-32">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-16 md:mb-24 text-center max-w-4xl mx-auto">
              <Reveal>
                <h2 className="font-heading text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
                  Let's build something.
                </h2>
                <p className="text-lg text-muted-foreground">
                  Have a brief, a rough idea, or just a question? We read every message. The more context you share, the better we can help.
                </p>
              </Reveal>
            </div>

            <div className="mx-auto max-w-4xl bg-card border border-border/50 rounded-[2rem] p-8 md:p-16 shadow-sm mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className="relative z-10">
                <ContactForm />
              </div>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {DETAILS.map((d, i) => (
                  <Reveal key={d.label} delay={i * 0.1}>
                    <div className="flex flex-col items-center text-center gap-2">
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {d.label}
                      </dt>
                      <dd className="font-heading text-lg font-medium text-foreground">{d.value}</dd>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
