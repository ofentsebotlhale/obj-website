import type { Metadata } from 'next'
import { ContactFormWrapper } from '@/components/contact/contact-form-wrapper'
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

      <section className="relative px-5 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-4xl relative z-10 text-left">
          <h2 className="font-heading text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl text-left">
            <RevealWords
              text="Start a project with OBX Studio. Tell us what you are building."
              className="text-foreground"
            />
          </h2>
        </div>
      </section>

      <section className="border-t border-border px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="w-full">
              <ContactFormWrapper />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
