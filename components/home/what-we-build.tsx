'use client'

import { Reveal } from '@/components/anim/reveal'
import Link from 'next/link'
import { Briefcase, ShoppingCart, AppWindow, RefreshCcw, Layers, Wrench, ArrowRight } from 'lucide-react'

const ITEMS = [
  {
    num: '01',
    title: 'Landing Pages',
    description: 'Focused pages designed to convert traffic into leads.',
    icon: AppWindow,
    tier: 'Quick Turnaround',
    href: '/work',
  },
  {
    num: '02',
    title: 'Redesigns',
    description: 'Modern redesigns that improve performance and user experience.',
    icon: RefreshCcw,
    tier: 'Optimization',
    href: '/work',
  },
  {
    num: '03',
    title: 'Business Websites',
    description: 'Professional websites designed to build trust and generate enquiries.',
    icon: Briefcase,
    tier: 'Standard',
    href: '/work',
  },
  {
    num: '04',
    title: 'E-Commerce',
    description: 'Online stores built for seamless shopping experiences.',
    icon: ShoppingCart,
    tier: 'Advanced',
    href: '/work',
  },
  {
    num: '05',
    title: 'Custom Web Apps',
    description: 'Tailored functionality built around specific business needs.',
    icon: Layers,
    tier: 'Complex',
    href: '/work',
  },
  {
    num: '06',
    title: 'Maintenance',
    description: 'Ongoing support, updates, and improvements.',
    icon: Wrench,
    tier: 'Retainer',
    href: '/work',
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
          {ITEMS.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={i} delay={i * 0.1}>
                <Link href={item.href} className="group block h-full outline-none">
                  <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-background p-8 border border-border hover:border-foreground/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    
                    {/* Header: Icon & Number */}
                    <div className="mb-12 flex items-start justify-between">
                      <div className="h-12 w-12 rounded-full bg-foreground/5 flex items-center justify-center text-foreground transition-colors duration-300 group-hover:bg-foreground/10 group-hover:text-foreground">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-foreground transition-colors duration-300 group-hover:text-foreground">
                        {item.num}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="mb-3 flex items-center justify-between">
                        <h3 className="font-heading text-xl font-medium tracking-tight text-foreground">
                          {item.title}
                        </h3>
                        <ArrowRight className="w-4 h-4 text-foreground opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                      </div>
                      <p className="text-foreground leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <span className="inline-block rounded-full border border-foreground/20 bg-secondary px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground transition-colors duration-300 group-hover:border-foreground/40 group-hover:text-foreground">
                        {item.tier}
                      </span>
                    </div>

                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
