'use client'

import React from 'react'
import { MAINTENANCE_MODE } from '@/lib/maintenance'
import { MaintenanceView } from '@/components/maintenance-view'

interface MaintenanceGateProps {
  children: React.ReactNode
}

export function MaintenanceGate({ children }: MaintenanceGateProps) {
  // If maintenance mode is switched OFF, render children directly
  if (!MAINTENANCE_MODE) {
    return <>{children}</>
  }

  // When maintenance mode is active, visitors only see the maintenance view.
  return <MaintenanceView />
}
