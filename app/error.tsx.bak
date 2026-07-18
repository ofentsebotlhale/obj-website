'use client'

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center p-8 text-center">
      <h2 className="font-heading text-2xl font-bold tracking-tight mb-4 text-foreground">Something went wrong!</h2>
      <p className="text-muted-foreground mb-8 text-sm">{error.message || "An unexpected error occurred."}</p>
      <button
        onClick={() => reset()}
        className="rounded-full bg-foreground px-6 py-2 font-mono text-[13px] uppercase tracking-widest text-background transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground"
      >
        Try again
      </button>
    </div>
  )
}
