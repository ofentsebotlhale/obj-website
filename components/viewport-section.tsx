import { ReactNode } from 'react'

export function ViewportSection({ children, zIndex, className = '' }: { children: ReactNode, zIndex: number, className?: string }) {
  return (
    <div 
      className={`sticky top-0 w-full flex flex-col bg-white ${className}`}
      style={{ zIndex }}
    >
      {children}
    </div>
  )
}
