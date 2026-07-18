'use client'

import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

function Field({
  id,
  label,
  type = 'text',
  textarea = false,
  value,
  onChange,
}: {
  id: string
  label: string
  type?: string
  textarea?: boolean
  value: string
  onChange: (v: string) => void
}) {
  const [focused, setFocused] = useState(false)
  const active = focused || value.length > 0

  const shared =
    'peer w-full bg-transparent pb-3 pt-7 text-lg text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded'

  return (
    <div className="relative border-b border-border focus-within:border-foreground">
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-0 font-mono uppercase tracking-widest transition-all duration-300 ${
          active
            ? 'top-1 text-[10px] text-muted-foreground'
            : 'top-7 text-sm text-muted-foreground'
        }`}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={3}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className={`${shared} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className={shared}
        />
      )}
    </div>
  )
}

function SelectField({
  id,
  label,
  options,
  value,
  onChange,
}: {
  id: string
  label: string
  options: string[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="relative pb-2 pt-4">
      <label
        className="block mb-4 text-[10px] font-mono uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <div className="flex flex-wrap gap-2.5">
        {options.map((opt) => {
          const isSelected = value === opt
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className={`relative inline-flex items-center justify-center px-4 py-2.5 rounded-full border text-xs sm:text-sm font-sans tracking-wide transition-all duration-300 min-h-[44px] cursor-pointer overflow-hidden ${
                isSelected
                  ? 'border-foreground font-semibold text-background'
                  : 'bg-transparent text-foreground/80 border-border hover:border-foreground/50 hover:bg-foreground/5'
              }`}
            >
              {isSelected && (
                <span className="absolute inset-0 bg-foreground -z-10" />
              )}
              <span className={isSelected ? 'text-background relative z-10' : 'relative z-10'}>
                {opt}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function ContactForm() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    company: '', 
    need: '',
    budget: '',
    timeline: '',
    message: '' 
  })
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const stepContainerRef = useRef<HTMLDivElement>(null)
  const successRef = useRef<HTMLDivElement>(null)

  function set(key: keyof typeof form) {
    return (v: string) => setForm((f) => ({ ...f, [key]: v }))
  }

  // Animate step transitions
  useIsomorphicLayoutEffect(() => {
    if (stepContainerRef.current) {
      gsap.fromTo(stepContainerRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out', clearProps: 'all' }
      )
    }
  }, [step])

  // Animate success state
  useIsomorphicLayoutEffect(() => {
    if (sent && successRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(successRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
        )
        gsap.fromTo('.success-icon',
          { scale: 0 },
          { scale: 1, duration: 0.5, ease: 'back.out(1.7)', delay: 0.1 }
        )
      }, successRef)
      return () => ctx.revert()
    }
  }, [sent])

  function handleNext() {
    // Basic validation
    if (step === 1 && (!form.name || !form.email)) return
    if (step === 3 && !form.need) return
    if (step === 4 && (!form.budget || !form.timeline)) return
    
    // Animate out before changing step
    if (stepContainerRef.current) {
      gsap.to(stepContainerRef.current, {
        opacity: 0,
        x: -20,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => setStep(s => s + 1)
      })
    } else {
      setStep(s => s + 1)
    }
  }

  function handlePrev() {
    // Animate out before changing step
    if (stepContainerRef.current) {
      gsap.to(stepContainerRef.current, {
        opacity: 0,
        x: 20,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => setStep(s => Math.max(1, s - 1))
      })
    } else {
      setStep(s => Math.max(1, s - 1))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    if (!form.message) return
    
    setSubmitting(true)
    setError(null)

    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
      const endpoint = formspreeId ? `https://formspree.io/f/${formspreeId}` : '/api/contact'

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          need: form.need,
          budget: form.budget,
          timeline: form.timeline,
          message: form.message,
          _replyto: form.email,
          _subject: `New message from ${form.name || 'Website'}`,
        }),
      })

      const contentType = response.headers.get('content-type')
      let result: any = {}
      if (contentType && contentType.includes('application/json')) {
        result = await response.json()
      } else {
        const text = await response.text()
        if (!response.ok) {
          throw new Error(`Server error (${response.status}): ${text.slice(0, 100)}...`)
        }
        result = { success: true }
      }

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong while submitting the form.')
      }

      // Fade out form before showing success
      if (stepContainerRef.current) {
        gsap.to(stepContainerRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          onComplete: () => setSent(true)
        })
      } else {
        setSent(true)
      }
    } catch (err: any) {
      console.error('Form submission failed:', err)
      setError(err?.message || 'Failed to submit the message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col gap-8">
            <h3 className="text-xl md:text-2xl font-heading text-foreground mb-4">
              Let&apos;s build something exceptional. Who are we talking to?
            </h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <Field id="name" label="Your name" value={form.name} onChange={set('name')} />
              <Field
                id="email"
                label="Email"
                type="email"
                value={form.email}
                onChange={set('email')}
              />
            </div>
          </div>
        )
      case 2:
        return (
          <div className="flex flex-col gap-8">
            <h3 className="text-xl md:text-2xl font-heading text-foreground mb-4">
              Great to meet you. What company or website are you representing?
            </h3>
            <Field
              id="company"
              label="Company or Current Website (optional)"
              value={form.company}
              onChange={set('company')}
            />
          </div>
        )
      case 3:
        return (
          <div className="flex flex-col gap-8">
            <h3 className="text-xl md:text-2xl font-heading text-foreground mb-4">
              What can we help you create?
            </h3>
            <SelectField
              id="need"
              label="Project Direction"
              value={form.need}
              onChange={set('need')}
              options={[
                'Website Design & Development',
                'Website Redesign',
                'Branding & Visual Identity',
                'Motion Design',
                'Something else'
              ]}
            />
          </div>
        )
      case 4:
        return (
          <div className="flex flex-col gap-8">
            <h3 className="text-xl md:text-2xl font-heading text-foreground mb-4">
              Let&apos;s talk logistics. What is your estimated investment and ideal timeline?
            </h3>
            <div className="flex flex-col gap-6">
              <SelectField
                id="budget"
                label="Estimated Budget"
                value={form.budget}
                onChange={set('budget')}
                options={[
                  'Under R15,000',
                  'R15,000 – R35,000',
                  'R35,000 – R70,000',
                  'R70,000+',
                  'Let\'s discuss pricing'
                ]}
              />
              <SelectField
                id="timeline"
                label="Ideal Timeline"
                value={form.timeline}
                onChange={set('timeline')}
                options={[
                  'ASAP',
                  '2 weeks',
                  'Within 1 month',
                  '1-3 months',
                  'Flexible'
                ]}
              />
            </div>
          </div>
        )
      case 5:
        return (
          <div className="flex flex-col gap-8">
            <h3 className="text-xl md:text-2xl font-heading text-foreground mb-4">
              Tell us a bit more about your business and goals.
            </h3>
            <Field
              id="message"
              label="Project Details"
              textarea
              value={form.message}
              onChange={set('message')}
            />
            {error && (
              <div className="rounded-md border border-red-500/30 bg-red-500/5 p-4 text-xs font-mono uppercase tracking-wider text-red-600">
                ⚠ Error: {error}
              </div>
            )}
            <p className="text-xs text-foreground">
              By submitting this form, you agree to our privacy policy and terms.
            </p>
          </div>
        )
      default:
        return null
    }
  }

  const isNextDisabled = () => {
    if (step === 1) return !form.name || !form.email
    if (step === 3) return !form.need
    if (step === 4) return !form.budget || !form.timeline
    if (step === 5) return !form.message
    return false
  }

  return (
    <div className="relative">
      {sent ? (
        <div
          ref={successRef}
          className="flex min-h-[24rem] flex-col items-start justify-center opacity-0"
        >
          <span className="success-icon flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl text-accent-foreground">
            ✓
          </span>
          <h2 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Message received.
          </h2>
          <p className="mt-3 max-w-md text-pretty leading-relaxed text-foreground">
            Thanks{form.name ? `, ${form.name.split(' ')[0]}` : ''} — we&apos;ll be in
            touch within two business days.
          </p>
          <button
            type="button"
            onClick={() => {
              setSent(false)
              setStep(1)
              setForm({ name: '', email: '', company: '', need: '', budget: '', timeline: '', message: '' })
              setError(null)
            }}
            className="mt-8 font-mono text-[11px] uppercase tracking-widest text-foreground transition-colors hover:opacity-70"
          >
            ← Send another
          </button>
        </div>
      ) : (
        <div className="flex flex-col min-h-[24rem]">
          {/* Progress indicator */}
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  i <= step ? 'bg-foreground' : 'bg-muted'
                }`}
              />
            ))}
          </div>

          <form onSubmit={step === 5 ? handleSubmit : (e) => e.preventDefault()} className="flex-1 flex flex-col">
            <div ref={stepContainerRef}>
              {renderStepContent()}
            </div>

            <div className="mt-auto pt-12 flex items-center gap-4">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex w-fit items-center gap-3 rounded-full border border-foreground/30 px-7 py-4 min-h-[44px] font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:bg-muted"
                >
                  Back
                </button>
              )}
              
              {step < 5 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={isNextDisabled()}
                  className="group flex w-fit items-center gap-3 rounded-full bg-primary px-7 py-4 min-h-[44px] font-mono text-xs uppercase tracking-widest text-primary-foreground transition-all hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
                >
                  Next Step
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={submitting || isNextDisabled()}
                  data-cursor={submitting ? "Sending..." : "Send"}
                  className="group flex w-fit items-center gap-3 rounded-full bg-primary px-7 py-4 min-h-[44px] font-mono text-xs uppercase tracking-widest text-primary-foreground transition-all hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
                >
                  {submitting ? 'Sending...' : 'Send Enquiry'}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

