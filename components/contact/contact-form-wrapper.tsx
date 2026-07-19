'use client'

import { useState } from 'react'
import { ContactForm } from '@/components/contact/contact-form'
import { motion, AnimatePresence } from 'framer-motion'

export function ContactFormWrapper() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!showForm ? (
          <motion.div
            key="button"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-start"
          >
            <div className="w-full flex flex-col items-center justify-center min-h-[24rem]">
              <h3 className="font-heading text-2xl mb-6 text-foreground text-center">Ready to start?</h3>
              <button
                onClick={() => setShowForm(true)}
                className="group flex w-fit items-center gap-3 rounded-full bg-foreground px-8 py-5 font-mono text-sm uppercase tracking-widest text-background transition-all hover:opacity-80"
              >
                Start a Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full"
          >
            <ContactForm />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
