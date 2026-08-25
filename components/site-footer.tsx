'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative flex flex-col w-full bg-background text-foreground overflow-hidden pt-12 md:pt-16">
      <div className="mx-auto w-full max-w-[1920px] px-4 md:px-8 pb-12 md:pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 font-sans">
          
          {/* INFOS */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-foreground">Infos</span>
            <div className="flex flex-col gap-3 text-[14px] text-muted-foreground font-medium">
              <p>Johannesburg | South Africa</p>
              <a href="mailto:hello@obxstudio.co.za" className="hover:text-foreground transition-colors">hello@obxstudio.co.za</a>
            </div>
          </div>

          {/* PAGES */}
          <div className="col-span-1 flex flex-col gap-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-foreground">Pages</span>
            <nav className="flex flex-col gap-3 text-[14px] text-muted-foreground font-medium">
              {['Home', 'Work', 'Archive', 'Studio', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="hover:text-foreground transition-colors uppercase tracking-wide"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* SOCIALS */}
          <div className="col-span-1 flex flex-col gap-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-foreground">Socials</span>
            <div className="flex flex-col gap-3 text-[14px] text-muted-foreground font-medium">
              <a href="https://www.instagram.com/obxstudio_/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors uppercase tracking-wide">Instagram</a>
              <a href="https://www.linkedin.com/company/obxstudio/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors uppercase tracking-wide">LinkedIn</a>
            </div>
          </div>

          {/* LEGALS & CREDITS */}
          <div className="col-span-2 md:col-span-1 flex flex-col justify-between gap-12">
            <div className="flex flex-col gap-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-foreground">Legals</span>
              <div className="flex flex-col gap-3 text-[14px] text-muted-foreground font-medium">
                <Link href="/terms" className="hover:text-foreground transition-colors uppercase tracking-wide">Terms</Link>
                <Link href="/privacy" className="hover:text-foreground transition-colors uppercase tracking-wide">Privacy</Link>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-foreground">Designed & Developed by <Link href="/" className="underline underline-offset-4 hover:text-foreground/70 transition-opacity">OBX</Link></span>
              <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">© {year} OBX STUDIO</span>
            </div>
          </div>

        </div>
      </div>

      {/* Large Wordmark */}
      <div className="w-full flex justify-center pb-4 overflow-hidden select-none pointer-events-none px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-bold uppercase leading-[0.75] tracking-tighter text-center whitespace-nowrap text-black w-full"
          style={{ 
            fontSize: 'clamp(3rem, 13vw, 25rem)',
          }}
        >
          OBX STUDIO
        </motion.h2>
      </div>
    </footer>
  )
}
