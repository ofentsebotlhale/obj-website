'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal } from '@/components/anim/reveal'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How much does a custom web build cost?',
    answer:
      'Our engagements start at a minimum project floor of R12,500 (~$750) for high-impact single-page scrollytelling experiences and scale up from R22,500 (~$1,350) for multi-page editorial sites with headless CMS integration. Every build is tailored—reach out for an itemized proposal within 24 hours.',
  },
  {
    id: 'faq-2',
    question: 'How long does a project take from kickoff to launch?',
    answer:
      'We run tight, dedicated development sprints. Single-page builds and landing pages typically ship in 3 to 5 days. Multi-page editorial sites or feature-dense web applications are deployed in 1 to 2 weeks.',
  },
  {
    id: 'faq-3',
    question: 'Do you use WordPress or pre-made templates?',
    answer:
      'No. We build custom front-end architectures from scratch using Next.js, Tailwind CSS, GSAP, and Framer Motion. This guarantees ultra-fast load times, bespoke motion design, top-tier security, and clean search indexability.',
  },
  {
    id: 'faq-4',
    question: 'Will I be able to update my content after launch?',
    answer:
      'Yes. We integrate Sanity.io (or your preferred headless CMS) so your team can effortlessly update copy, upload media, publish articles, or add new case studies through a clean dashboard without touching code.',
  },
  {
    id: 'faq-5',
    question: 'How does the payment and hosting structure work?',
    answer:
      'We operate on a standard 50/50 split: a 50% deposit secures your sprint slot, and the final 50% is due upon final sign-off before live domain deployment. Live hosting, SSL, and routine maintenance are managed via a streamlined monthly retainer starting at R750/month.',
  },
  {
    id: 'faq-6',
    question: 'Can you engineering-build a site if we already have Figma designs?',
    answer:
      'Yes. If you already have finished brand assets or Figma layouts, we step in strictly for front-end engineering, interactive motion, performance optimization, and SEO deployment.',
  },
]

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="px-5 py-24 md:py-36 md:px-10 bg-[#FFFFFF] text-[#000000] border-t border-[#E5E5E5]">
      <div className="mx-auto max-w-[1600px]">
        {/* Header Setup: Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end mb-16 md:mb-24">
          <div className="md:col-span-8 flex flex-col space-y-3">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-widest text-[#71717A] font-medium block">
                04 / INFORMATION
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#000000] leading-[1.05]">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <Reveal delay={0.15}>
              <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#71717A] font-medium block self-end pb-1">
                Clear Answers / Direct Communication
              </span>
            </Reveal>
          </div>
        </div>

        {/* The Accordion Stack bounded by full-width top and bottom borders */}
        <div className="border-y border-[#E5E5E5] divide-y divide-[#E5E5E5] w-full">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id

            return (
              <div key={item.id} className="w-full">
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full flex items-center justify-between py-6 md:py-8 text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-2 transition-colors select-none"
                >
                  <span className="font-heading text-xl md:text-2xl font-bold tracking-tight text-[#000000] transition-colors duration-300 group-hover:text-[#71717A] pr-6 text-balance">
                    {item.question}
                  </span>
                  <span
                    className="font-mono text-xl md:text-2xl font-bold select-none text-[#000000] flex-shrink-0 transition-transform duration-200"
                    aria-hidden="true"
                  >
                    {isOpen ? '—' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-base md:text-lg text-[#52525B] leading-relaxed max-w-2xl text-pretty font-medium pb-6 md:pb-8">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
