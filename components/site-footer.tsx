'use client'

import Link from 'next/link'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer 
      className="flex flex-col w-full bg-white text-black overflow-hidden border-t justify-between pt-[64px] px-[24px] pb-[16px] md:pt-[120px] md:px-[48px] md:pb-[24px] min-h-[100svh] gap-32" 
      style={{ borderColor: 'rgba(0,0,0,0.08)' }}
    >
      {/* Hero CTA & Socials Grid (Top Section) */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 w-full">
        {/* Left Column (CTA Block) */}
        <div className="flex flex-col items-start gap-6">
          <h2 className="font-heading text-[36px] md:text-[64px] font-medium tracking-[-0.03em] leading-tight text-black">
            Let's build something.
          </h2>
          <div className="flex flex-row flex-wrap items-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center border border-black/80 text-black px-[24px] py-[12px] rounded-full text-[14px] font-medium hover:bg-black hover:text-white transition-colors uppercase tracking-wide"
            >
              SCHEDULE A CALL &rarr;
            </Link>
            <a 
              href="mailto:hello@obxstudio.co.za" 
              className="inline-flex items-center justify-center border border-black/80 text-black px-[24px] py-[12px] rounded-full text-[14px] font-medium hover:bg-black hover:text-white transition-colors uppercase tracking-wide"
            >
              DROP AN EMAIL @
            </a>
          </div>
        </div>

        {/* Right Column (Social Navigation) */}
        <div className="flex flex-col items-start md:items-end gap-[8px] text-left md:text-right w-full md:w-auto">
          <a 
            href="https://www.linkedin.com/company/obxstudio/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-heading text-[20px] text-black hover:text-black/60 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://www.instagram.com/obxstudio_/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-heading text-[20px] text-black hover:text-black/60 transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="flex flex-col w-full mt-auto">
        {/* Massive Display Wordmark (Center/Bottom) */}
        <div className="w-full flex justify-center overflow-hidden select-none pointer-events-none pb-4 md:pb-8 leading-none">
          <h2 
            className="font-heading font-black uppercase tracking-tighter text-center whitespace-nowrap text-black"
            style={{ fontSize: '15.5vw', lineHeight: '0.75' }}
          >
            OBX STUDIO
          </h2>
        </div>

        {/* Minimal Metadata Bar (Bottom Edge) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full font-mono text-[10px] uppercase tracking-widest text-black/60">
          <div className="text-center md:text-left">
            <span>&copy; {year} — OBX STUDIO</span>
          </div>
          <div className="text-center">
            <span>JOHANNESBURG, ZA</span>
          </div>
          <div className="text-center md:text-right flex justify-center md:justify-end gap-3">
            <Link href="/terms" className="hover:text-black transition-colors">TERMS</Link>
            <span>&amp;</span>
            <Link href="/privacy" className="hover:text-black transition-colors">PRIVACY</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
