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
      <div className="mx-auto max-w-4xl flex flex-col items-center">
        
        {/* Header Column: Heading and info */}
        <div className="w-full space-y-8 mb-16 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span>Start a project</span>
              <span>( 05 / 05 )</span>
            </div>
            <h1 className="font-heading text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl text-foreground">
              Contact Us
            </h1>
          </div>

          <div className="space-y-6 flex flex-col items-center">
            <h2 className="font-heading text-xl sm:text-2xl font-medium leading-snug tracking-tight text-foreground/80 max-w-2xl mx-auto">
              <RevealWords
                text="Start a project with OBX Studio. Tell us what you are building."
                className="text-foreground"
              />
            </h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
              Have a brief, a rough idea, or just a question? We read every contact message.
              The more context you share, the better we can help. Get in touch with our team today.
            </p>
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-md border border-border bg-border max-w-3xl mx-auto mt-8 text-left">
            {DETAILS.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.06}>
                <div className="bg-card p-5 h-full flex flex-col justify-center text-center">
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {d.label}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">{d.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>

        {/* Contact form immediately visible */}
        <div className="w-full">
          <Reveal>
            <div className="w-full bg-card/40 p-8 md:p-12 lg:p-16 border border-border rounded-2xl shadow-sm text-left">
              <ContactForm />
            </div>
          </Reveal>
        </div>

      </div>
    </div>
  )
}
