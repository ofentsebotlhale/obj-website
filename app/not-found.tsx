'use client'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-background text-foreground">
      <h2 className="text-4xl font-bold mb-4 font-heading tracking-tight">404 - Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        We couldn't find the page you were looking for.
      </p>
      <Link 
        href="/"
        className="rounded-full bg-foreground px-6 py-2 font-mono text-[13px] uppercase tracking-widest text-background transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground"
      >
        Return Home
      </Link>
    </div>
  )
}
