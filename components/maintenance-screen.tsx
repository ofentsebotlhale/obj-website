'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Copy,
  Check,
  Mail,
  ArrowUpRight,
  Clock,
  Sparkles,
  SlidersHorizontal,
  ChevronRight,
} from 'lucide-react'
import { MAINTENANCE_DETAILS } from '@/lib/maintenance'

interface MaintenanceScreenProps {
  onBypass?: () => void
}

export function MaintenanceScreen({ onBypass }: MaintenanceScreenProps) {
  const [copied, setCopied] = useState(false)
  const [notifyEmail, setNotifyEmail] = useState('')
  const [notified, setNotified] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(MAINTENANCE_DETAILS.contactEmail)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!notifyEmail || !notifyEmail.includes('@')) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setNotified(true)
    }, 600)
  }

  return (
    <div className="relative min-h-screen w-full bg-[#FAFAFA] text-[#0A0A0A] flex flex-col justify-between selection:bg-black selection:text-white overflow-x-hidden">
      {/* Background Architectural Grid Pattern */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Top Navigation Bar */}
      <header className="relative z-10 w-full border-b border-black/10 px-4 md:px-8 py-5 flex items-center justify-between backdrop-blur-sm bg-white/70">
        <div className="flex items-center gap-3">
          <div className="relative h-7 w-7 overflow-hidden rounded-sm border border-black/15 bg-white shadow-xs">
            <Image
              src="/logo.avif"
              alt="OBX Studio"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="font-heading text-lg tracking-tight font-medium uppercase">
            OBX STUDIO
          </span>
        </div>

        {/* Live Status Pill */}
        <div className="flex items-center gap-2 px-3 py-1.5 border border-amber-600/30 bg-amber-500/10 text-amber-900 rounded-full font-mono text-[11px] uppercase tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
          </span>
          <span className="font-medium">MAINTENANCE IN PROGRESS</span>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="relative z-10 flex-1 flex flex-col justify-center px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline and Message */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-black/15 bg-black/[0.03] px-3 py-1 font-mono text-xs uppercase tracking-widest text-black/70 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>SYSTEM UPGRADE & REFINEMENT</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] uppercase font-medium text-black mb-6"
            >
              WE&apos;RE CRAFTING SOMETHING EXCEPTIONAL.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-black/70 leading-relaxed max-w-2xl mb-8"
            >
              {MAINTENANCE_DETAILS.subheadline}
            </motion.p>

            {/* Quick Status Pill Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {['Bespoke Web Design', 'Digital Architecture', 'Creative Engineering', 'Johannesburg, ZA'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs uppercase tracking-wider px-3 py-1 border border-black/10 bg-white text-black/80"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Email Notification Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-xl border border-black/15 bg-white p-6 shadow-sm"
            >
              <h2 className="font-heading text-lg font-medium uppercase tracking-wide text-black mb-1">
                GET NOTIFIED WHEN WE RELAUNCH
              </h2>
              <p className="font-sans text-xs text-black/60 mb-4">
                Leave your email and receive priority notification when the new digital showcase goes live.
              </p>

              <AnimatePresence mode="wait">
                {notified ? (
                  <motion.div
                    key="notified-state"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-3 p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 font-mono text-xs"
                  >
                    <Check className="w-4 h-4 text-emerald-700" />
                    <span>Thank you. You are on the priority relaunch list.</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleNotifySubmit} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={notifyEmail}
                      onChange={(e) => setNotifyEmail(e.target.value)}
                      placeholder="your.email@domain.com"
                      required
                      className="flex-1 px-3.5 py-2.5 border border-black/20 text-sm font-sans placeholder:text-black/40 focus:outline-none focus:border-black bg-white"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-2.5 bg-black text-white text-xs font-mono uppercase tracking-widest hover:bg-black/85 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Notify Me</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Column: Direct Contact & System Telemetry */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            
            {/* Urgent Matters & Project Inquiries Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-black/15 bg-white p-6 sm:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-black/60 mb-2">
                <Mail className="w-3.5 h-3.5 text-black" />
                <span>URGENT INQUIRIES & NEW COMMISSIONS</span>
              </div>
              <h3 className="font-heading text-2xl font-medium uppercase tracking-tight text-black mb-3">
                LET&apos;S TALK DIRECTLY
              </h3>
              <p className="font-sans text-sm text-black/70 mb-5 leading-relaxed">
                Active client sprints, design consultations, and ongoing matters remain in full effect. You can reach our team directly at any time:
              </p>

              {/* Email Address with Copy Button */}
              <div className="flex items-center justify-between border border-black/15 bg-[#F9F9F9] p-3 mb-4">
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-black select-all">
                  {MAINTENANCE_DETAILS.contactEmail}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider border border-black/20 bg-white hover:bg-black hover:text-white transition-all cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${MAINTENANCE_DETAILS.contactEmail}?subject=Project%20Inquiry%20via%20OBX%20Studio`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-black text-white font-mono text-xs uppercase tracking-widest hover:bg-black/85 transition-colors"
                >
                  <span>Compose Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* System Status & Diagnostics Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border border-black/15 bg-white p-6 shadow-xs"
            >
              <div className="flex items-center justify-between pb-3 border-b border-black/10 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-black/60">
                  SYSTEM STATUS LOG
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-700 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 inline-block animate-pulse"></span>
                  OPERATIONAL
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center text-black/70">
                  <span className="text-black/50">BUILD STATUS</span>
                  <span className="font-semibold text-black">{MAINTENANCE_DETAILS.systemVersion}</span>
                </div>
                <div className="flex justify-between items-center text-black/70">
                  <span className="text-black/50">STUDIO LOCATION</span>
                  <span className="font-medium text-black">{MAINTENANCE_DETAILS.location}</span>
                </div>
                <div className="flex justify-between items-center text-black/70">
                  <span className="text-black/50">CLIENT ENGAGEMENTS</span>
                  <span className="text-emerald-700 font-semibold">{MAINTENANCE_DETAILS.clientServicesStatus}</span>
                </div>
                <div className="flex justify-between items-center text-black/70">
                  <span className="text-black/50">ESTIMATED RESTORATION</span>
                  <span className="inline-flex items-center gap-1 text-black font-medium">
                    <Clock className="w-3 h-3 text-black/60" />
                    {MAINTENANCE_DETAILS.estimatedReturn}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Social Channels */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-between border border-black/15 bg-white px-5 py-4"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-black/60">
                OFFICIAL CHANNELS
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={MAINTENANCE_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-wider font-semibold text-black hover:opacity-60 transition-opacity flex items-center gap-1"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <span className="text-black/20">|</span>
                <a
                  href={MAINTENANCE_DETAILS.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-wider font-semibold text-black hover:opacity-60 transition-opacity flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>

          </div>

        </div>
      </main>

      {/* Bottom Footer */}
      <footer className="relative z-10 w-full border-t border-black/10 px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/70 backdrop-blur-sm text-black/60">
        <div className="font-mono text-[11px] uppercase tracking-widest">
          &copy; {new Date().getFullYear()} OBX STUDIO. ALL RIGHTS RESERVED.
        </div>

        {/* Studio Admin Bypass / Preview Trigger */}
        {onBypass && (
          <button
            type="button"
            onClick={onBypass}
            className="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider border border-black/20 bg-white text-black/70 hover:text-black hover:border-black transition-colors cursor-pointer"
            title="Studio Owner / Staff: Preview live site without disabling maintenance mode"
          >
            <SlidersHorizontal className="w-3 h-3" />
            <span>Studio Staff: Preview Site</span>
          </button>
        )}
      </footer>
    </div>
  )
}
