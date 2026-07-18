import type { Metadata } from 'next'
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
    <div className="relative min-h-screen px-4 pb-20 pt-32 md:px-6 md:pb-28 md:pt-40 bg-background text-foreground">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and info */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                <span>Start a project</span>
                <span>( 05 / 05 )</span>
              </div>
              <h1 className="font-heading text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl text-foreground">
                Contact Us
              </h1>
            </div>

            <div className="space-y-6">
              <h2 className="font-heading text-xl sm:text-2xl font-medium leading-snug tracking-tight text-foreground/80">
                <RevealWords
                  text="Start a project with OBX Studio. Tell us what you are building."
                  className="text-foreground"
                />
              </h2>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-md">
                Have a brief, a rough idea, or just a question? We read every contact message.
                The more context you share, the better we can help. Get in touch with our team today.
              </p>
            </div>

            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border max-w-md">
              {DETAILS.map((d, i) => (
                <Reveal key={d.label} delay={i * 0.06}>
                  <div className="bg-card p-5">
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {d.label}
                    </dt>
                    <dd className="mt-1 text-sm text-foreground">{d.value}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          {/* Right Column: Contact form immediately visible */}
          <div className="lg:col-span-7 lg:pl-8">
            <Reveal>
              <div className="rounded-xl border border-border bg-card p-6 md:p-10 shadow-sm">
                <ContactForm />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </div>
  )
}
