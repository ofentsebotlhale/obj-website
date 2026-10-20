'use client'

import { motion } from 'framer-motion'
import { Instagram, Linkedin, Facebook, MessageCircle, ArrowUpRight } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

const SOCIAL_LINKS = [
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/obxstudio_/',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/obxstudio/',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1PKDMxQTLx/?mibextid=wwXIfr',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/27760190339',
  },
]

export function MaintenanceView() {
  return (
    <div className="relative min-h-[100svh] w-full flex flex-col justify-between items-center overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] px-4 md:px-8 py-10 md:py-16 selection:bg-black/10 select-none">
      {/* Editorial Soft Light Architectural Gradient with warm glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 50% 52%, rgba(235, 180, 140, 0.18) 0%, rgba(245, 235, 225, 0.45) 35%, rgba(250, 250, 250, 0.95) 75%, #FAFAFA 100%)',
        }}
      />

      {/* Warm ambient radial aura matching reference composition */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] md:w-[900px] md:h-[900px] rounded-full blur-3xl opacity-35 z-0"
        style={{
          background:
            'radial-gradient(circle, rgba(220, 165, 125, 0.45) 0%, rgba(230, 195, 165, 0.2) 45%, transparent 70%)',
        }}
      />

      {/* Subtle fine architectural grid reflection */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.8) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Top Header: Brand Logo */}
      <header className="relative z-10 w-full flex items-center justify-center pt-2 md:pt-4">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="flex items-center gap-2"
        >
          <span className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-[#0A0A0A]">
            OBX Studio
          </span>
        </motion.div>
      </header>

      {/* Central Maintenance Notice (Matching reference layout & hierarchy) */}
      <main className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center px-4 my-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: EASE }}
          className="flex flex-col items-center"
        >
          {/* Status Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3.5 py-1 text-[11px] font-mono uppercase tracking-widest text-neutral-600 backdrop-blur-md shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <span>Maintenance in progress</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-tight text-[#0A0A0A] leading-[1.15] text-balance max-w-xl">
            Sorry! We&rsquo;re under construction maintenance!
          </h1>

          {/* Descriptive Subtext */}
          <p className="mt-5 text-sm sm:text-base md:text-lg text-neutral-600 max-w-lg leading-relaxed text-balance">
            Our website is currently undergoing scheduled maintenance, we will be back soon! Thank you for being so patient. Contact us for more information!
          </p>

          {/* Social Follow Us Section */}
          <div className="mt-10 sm:mt-12 flex flex-col items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 font-medium">
              Follow us
            </span>

            {/* Social Icons matching circular button style */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-neutral-800 shadow-sm"
                    aria-label={item.label}
                    title={item.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>

            {/* Email link with underline matching reference */}
            <div className="mt-4 pt-1">
              <a
                href="mailto:hello@obxstudio.co.za"
                className="group inline-flex items-center gap-1.5 font-mono text-sm md:text-base font-medium text-[#0A0A0A] border-b border-black pb-0.5 hover:text-neutral-600 hover:border-neutral-400 transition-colors"
              >
                <span>hello@obxstudio.co.za</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Bottom Footer Metadata */}
      <footer className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-neutral-500 font-mono tracking-wider pt-6 gap-2">
        <span>OBX STUDIO &copy; {new Date().getFullYear()}</span>
        <span className="text-center font-sans tracking-normal text-xs text-neutral-600">
          Johannesburg-based digital studio crafting bespoke web experiences
        </span>
        <span className="hidden sm:inline text-neutral-400">JOHANNESBURG &bull; ZA</span>
      </footer>
    </div>
  )
}
