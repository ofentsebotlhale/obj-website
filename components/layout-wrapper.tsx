'use client'

import { useEffect } from 'react'

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  // Just return children directly without the global loading screen overlay,
  // since the Hero component inherently acts as the preloader.
  return <>{children}</>
}
