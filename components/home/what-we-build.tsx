'use client'

import { Reveal } from '@/components/anim/reveal'

const ITEMS = [
  {
    title: 'Business Websites',
    description: 'Professional websites designed to build trust and generate enquiries.',
  },
  {
    title: 'E-Commerce',
    description: 'Online stores built for seamless shopping experiences.',
  },
  {
    title: 'Landing Pages',
    description: 'Focused pages designed to convert traffic into leads.',
  },
  {
    title: 'Redesigns',
    description: 'Modern redesigns that improve performance and user experience.',
  },
  {
    title: 'Custom Web Apps',
    description: 'Tailored functionality built around specific business needs.',
  },
  {
    title: 'Maintenance',
    description: 'Ongoing support, updates, and improvements.',
  },
]

export function WhatWeBuild() {
  return (
    <section className="px-5 py-28 md:px-10 md:py-40 border-t border-border bg-secondary/20">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="mb-16">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
            What we build
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-background p-8 border border-border/50 hover:border-border transition-colors">
                <div className="mb-12">
                  <div className="mb-6 h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-medium tracking-tight text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
