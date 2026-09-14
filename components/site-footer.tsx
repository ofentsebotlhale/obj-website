'use client'

import Link from 'next/link'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="flex flex-col w-full bg-background text-foreground pt-24 md:pt-40 px-[5vw] pb-[5vw]">
      <div className="mx-auto w-full max-w-[1920px] flex flex-col justify-between min-h-[50svh]">
        
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          
          {/* Left Column (Brand) */}
          <div className="md:col-span-8 flex flex-col items-start gap-2">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight uppercase">
              OBX STUDIO
            </h2>
            <p className="font-mono text-sm md:text-base uppercase tracking-widest text-muted-foreground mt-4">
              JOHANNESBURG — SOUTH AFRICA
            </p>
            <a 
              href="mailto:HELLO@OBXSTUDIO.CO.ZA" 
              className="font-mono text-sm md:text-base uppercase tracking-widest text-foreground hover:opacity-60 transition-opacity mt-2"
            >
              HELLO@OBXSTUDIO.CO.ZA
            </a>
          </div>

          {/* Right Column (Navigation Links) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-0">
            <div className="flex flex-col gap-4">
              <Link href="/work" className="font-sans text-lg md:text-xl font-medium uppercase tracking-wide hover:opacity-60 transition-opacity">WORK</Link>
              <Link href="/studio" className="font-sans text-lg md:text-xl font-medium uppercase tracking-wide hover:opacity-60 transition-opacity">STUDIO</Link>
              <Link href="/contact" className="font-sans text-lg md:text-xl font-medium uppercase tracking-wide hover:opacity-60 transition-opacity">CONTACT</Link>
            </div>
            <div className="flex flex-col gap-4">
              <a href="https://www.instagram.com/obxstudio_/" target="_blank" rel="noopener noreferrer" className="font-sans text-lg md:text-xl font-medium uppercase tracking-wide hover:opacity-60 transition-opacity">INSTAGRAM</a>
              <a href="https://www.linkedin.com/company/obxstudio/" target="_blank" rel="noopener noreferrer" className="font-sans text-lg md:text-xl font-medium uppercase tracking-wide hover:opacity-60 transition-opacity">LINKEDIN</a>
            </div>
          </div>
          
        </div>

        {/* Bottom Metadata */}
        <div className="mt-24 md:mt-40 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">
            &copy; {year} OBX STUDIO
          </div>
          <div className="flex gap-6 font-mono text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">PRIVACY</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">TERMS</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

