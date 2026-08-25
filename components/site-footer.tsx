'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative flex flex-col w-full bg-background text-foreground overflow-hidden pt-24 md:pt-48">
      <div className="mx-auto w-full max-w-[1920px] px-4 md:px-8 pb-16 md:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 md:gap-4 font-sans">
          {/* INFOS */}
          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-foreground">Infos</span>
            <div className="flex flex-col gap-2 text-[13px] text-foreground/60">
              <p>Johannesburg | South Africa</p>
              <a href="mailto:hello@obxstudio.co.za" className="hover:text-foreground transition-colors">hello@obxstudio.co.za</a>
            </div>
          </div>

          {/* PAGES */}
          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-foreground">Pages</span>
            <nav className="flex flex-col gap-2 text-[13px] text-foreground/60">
              {['Home', 'Work', 'Archive', 'Studio', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="hover:text-foreground transition-colors uppercase"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* SOCIALS */}
          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-foreground">Socials</span>
            <div className="flex flex-col gap-2 text-[13px] text-foreground/60">
              <a href="https://www.instagram.com/obxstudio_/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors uppercase">Instagram</a>
              <a href="https://www.linkedin.com/company/obxstudio/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors uppercase">LinkedIn</a>
            </div>
          </div>

          {/* LEGALS */}
          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-foreground">Legals</span>
            <div className="flex flex-col gap-2 text-[13px] text-foreground/60">
              <Link href="/terms" className="hover:text-foreground transition-colors uppercase">Terms</Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors uppercase">Privacy</Link>
            </div>
          </div>

          {/* CREDITS */}
          <div className="flex flex-col gap-6 md:text-right">
            <span className="text-[11px] font-bold uppercase tracking-widest text-foreground">Designed & Developed by <Link href="/" className="underline underline-offset-4 hover:text-foreground/70 transition-opacity">OBX STUDIO</Link></span>
          </div>
        </div>
      </div>

      {/* Large Image Masked Text */}
      <div className="w-full flex justify-center pb-4 overflow-hidden select-none pointer-events-none">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-bold uppercase leading-[0.75] tracking-tighter text-center whitespace-nowrap"
          style={{ 
            fontSize: 'clamp(4rem, 20vw, 35rem)',
            backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          OBX STUDIO
        </motion.h2>
      </div>
    </footer>
  )
}
