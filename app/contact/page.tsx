import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact/contact-form'
import { Reveal, RevealWords } from '@/components/anim/reveal'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'Contact OBX Studio | Get in Touch with Our Team',
  description: 'Start a project with OBX Studio. Tell us what you are building.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        index="05 / 05" 
        subtitle="Start a project" 
        title="Contact Us" 
      />

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
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
              <Reveal>
                <div className="font-mono text-[11px] uppercase tracking-widest text-foreground">
                  ( Enquiry )
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal>
                <div className="w-full">
                  <ContactForm />
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
