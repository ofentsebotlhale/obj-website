'use client'

const ITEMS = ['OBX STUDIO', 'UI / UX', 'DEVELOPMENT', 'BRANDING', 'MOTION', 'STRATEGY']

export function Marquee({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="group/marquee relative flex w-full overflow-hidden border-y border-border py-6">
      <div
        className={`flex shrink-0 items-center gap-8 whitespace-nowrap pr-8 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-heading text-4xl font-semibold uppercase tracking-tight text-foreground md:text-6xl">
              {item}
            </span>
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          </span>
        ))}
      </div>
      <div
        aria-hidden="true"
        className={`flex shrink-0 items-center gap-8 whitespace-nowrap pr-8 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-heading text-4xl font-semibold uppercase tracking-tight text-foreground md:text-6xl">
              {item}
            </span>
            <span className="h-2 w-2 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  )
}
