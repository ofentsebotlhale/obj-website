'use client'

import { useEffect } from 'react'
import { app, analytics } from '@/lib/firebase'

export function FirebaseAnalytics() {
  useEffect(() => {
    // Firebase is initialized in lib/firebase.ts
    // This effect ensures it runs on mount
  }, [])

  return null
}
