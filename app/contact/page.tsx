import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact/contact-form'
import { Reveal, RevealWords } from '@/components/anim/reveal'

export const metadata: Metadata = {
  title: 'Contact OBX Studio | Get in Touch with Our Team',
  description: 'Start a project with OBX Studio. Tell us what you are building.',
  alternates: {
    canonical: '/contact',
  },
}

const DETAILS = [
  { label: 'New business', value: 'hello@obxstudio.co.za' },
  { label: 'Studio', value: 'Johannesburg, South Africa' },
  { label: 'Hours', value: 'Mon—Fri, 9–18 SAST' },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader index="05 / 05" subtitle="Start a project" title="Contact Us" />

      <section className="relative px-5 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1600px] relative z-10">
          <div className="max-w-4xl text-pretty">
            <h2 className="font-heading text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <RevealWords
                text="Start a project with OBX Studio. Tell us what you are building."
                className="text-foreground"
              />
            </h2>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal className="mb-8">
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Have a brief, a rough idea, or just a question? We read every message.
                The more context you share, the better we can help.
              </p>
            </Reveal>
            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border">
              {DETAILS.map((d, i) => (
                <Reveal key={d.label} delay={i * 0.06}>
                  <div className="bg-card p-5">
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {d.label}
                    </dt>
                    <dd className="mt-1 text-foreground">{d.value}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  )
}
