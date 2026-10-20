'use client'

import React, { useEffect, useState } from 'react'
import { MAINTENANCE_MODE } from '@/lib/maintenance'
import { MaintenanceView } from '@/components/maintenance-view'
import { Eye, ShieldCheck, X } from 'lucide-react'

interface MaintenanceGateProps {
  children: React.ReactNode
}

export function MaintenanceGate({ children }: MaintenanceGateProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [previewActive, setPreviewActive] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Check if staff has enabled preview mode via localStorage or query string
    try {
      const searchParams = new URLSearchParams(window.location.search)
      const previewParam = searchParams.get('preview')
      const storedPreview = localStorage.getItem('obx_maintenance_preview')

      if (previewParam === 'true' || previewParam === '1' || storedPreview === 'true') {
        setPreviewActive(true)
      }
    } catch {
      // Ignore if localStorage unavailable
    }
  }, [])

  const handleEnablePreview = () => {
    try {
      localStorage.setItem('obx_maintenance_preview', 'true')
    } catch {
      // ignore
    }
    setPreviewActive(true)
  }

  const handleExitPreview = () => {
    try {
      localStorage.removeItem('obx_maintenance_preview')
    } catch {
      // ignore
    }
    setPreviewActive(false)
  }

  // If maintenance mode is switched OFF, render children directly
  if (!MAINTENANCE_MODE) {
    return <>{children}</>
  }

  // If maintenance mode is ON, and user is in staff preview mode:
  if (isMounted && previewActive) {
    return (
      <>
        {/* Floating Staff Preview Mode Banner */}
        <div className="fixed top-0 inset-x-0 z-[10000] bg-black text-white px-4 py-2 border-b border-white/20 font-mono text-xs flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="font-semibold tracking-wider uppercase">
              MAINTENANCE MODE IS ACTIVE FOR VISITORS
            </span>
            <span className="hidden md:inline text-white/60">
              (You are currently previewing the live site)
            </span>
          </div>

          <button
            type="button"
            onClick={handleExitPreview}
            className="flex items-center gap-1.5 px-3 py-1 bg-white text-black text-[11px] font-mono uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            <Eye className="w-3 h-3" />
            <span>Return to Maintenance View</span>
          </button>
        </div>

        {/* Offset children slightly so banner doesn't cover top navigation */}
        <div className="pt-9">
          {children}
        </div>
      </>
    )
  }

  // Default: Maintenance mode is ACTIVE. Render the centered minimal MaintenanceView with bypass support.
  return <MaintenanceView onBypass={handleEnablePreview} />
}
