'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageHeader } from '@/components/page-header'
import { Reveal, RevealWords } from '@/components/anim/reveal'
import { 
  MessageCircle, 
  Instagram, 
  Mail, 
  Send, 
  CheckCircle2, 
  ArrowUpRight, 
  Clock, 
  MapPin, 
  Sparkles,
  Phone,
  Building,
  Check
} from 'lucide-react'

const SERVICES = [
  'Web Design & Development',
  'Brand Identity & Strategy',
  'SEO & Digital Systems',
  'E-Commerce Experience',
  'Custom Web Application',
  'Other Inquiry',
]

const BUDGET_RANGES = [
  'R10,000 – R25,000',
  'R25,000 – R50,000',
  'R50,000 – R100,000+',
  'To be discussed',
]

const CONTACT_METHODS = [
  { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
  { id: 'instagram', label: 'Instagram DM', icon: Instagram },
  { id: 'email', label: 'Email / Website Form', icon: Mail },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Web Design & Development',
    budget: 'R25,000 – R50,000',
    preferredMethod: 'whatsapp',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message. Please try again or use WhatsApp / Instagram DM.')
      }

      setStatus('success')
    } catch (err: any) {
      console.error(err)
      // Even if server submission hits an error, we give a friendly option to fallback to WhatsApp
      setStatus('error')
      setErrorMessage(err.message || 'Something went wrong. Please try WhatsApp or Instagram DM directly.')
    }
  }

  const waNumber = '27760190339'
  const waPreFilled = encodeURIComponent(
    `Hi OBX Studio! I'd like to book a consultation for ${formData.service || 'a new website/brand project'}.`
  )
  const whatsappUrl = `https://wa.me/${waNumber}?text=${waPreFilled}`
  const instagramUrl = 'https://www.instagram.com/obxstudio_/'

  return (
    <>
      <PageHeader index="04 / 04" subtitle="Get in touch" title="Contact" />

      {/* Hero Subtitle */}
      <section className="relative px-5 pb-12 md:px-10 md:pb-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              <RevealWords
                text="Book directly via Instagram DM or WhatsApp, or send us a message using the contact form below."
                className="text-foreground"
              />
            </h2>
          </div>
        </div>
      </section>

      {/* Main Grid: Direct Fast-Track Booking vs Website Form */}
      <section className="px-5 pb-28 md:px-10 md:pb-40">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols) — Fast Booking Cards & Studio Details */}
          <div className="lg:col-span-5 space-y-10">
            <Reveal>
              <div className="space-y-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-foreground/60">
                  ( Direct Booking Options )
                </span>
                <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                  Fastest way to reach us
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  For immediate booking or quick project inquiries, reach out to us on WhatsApp or Instagram DM. We respond within hours during business time.
                </p>
              </div>
            </Reveal>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              {/* WhatsApp Card */}
              <Reveal delay={0.1}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between p-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/10 dark:bg-emerald-950/30 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading text-lg font-bold text-foreground">
                          WhatsApp Booking
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-semibold">
                          Recommended
                        </span>
                      </div>
                      <p className="text-xs text-foreground/60 mt-0.5">
                        Direct line to Ofentse & studio team • +27 76 019 0339
                      </p>
                    </div>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shrink-0">
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              </Reveal>

              {/* Instagram DM Card */}
              <Reveal delay={0.2}>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between p-6 rounded-2xl border border-pink-500/30 bg-pink-950/10 dark:bg-pink-950/30 transition-all duration-300 hover:border-pink-500 hover:bg-pink-500/10 hover:shadow-lg hover:shadow-pink-500/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/20 text-pink-600 dark:text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                      <Instagram className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading text-lg font-bold text-foreground">
                          Instagram DM
                        </span>
                        <span className="text-xs text-foreground/50 font-mono">
                          @obxstudio_
                        </span>
                      </div>
                      <p className="text-xs text-foreground/60 mt-0.5">
                        Send a message directly on Instagram
                      </p>
                    </div>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 group-hover:border-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 shrink-0">
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              </Reveal>
            </div>

            {/* General Info Card */}
            <Reveal delay={0.3}>
              <div className="p-8 rounded-2xl border border-border bg-foreground/5 space-y-6">
                <h4 className="font-mono text-xs uppercase tracking-widest text-foreground/60">
                  Studio Info & Details
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-foreground/60 mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-xs font-mono uppercase tracking-wider text-foreground/50">Email</span>
                      <a href="mailto:hello@obxstudio.co.za" className="text-sm font-medium text-foreground hover:underline">
                        hello@obxstudio.co.za
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-foreground/60 mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-xs font-mono uppercase tracking-wider text-foreground/50">Location</span>
                      <span className="text-sm font-medium text-foreground">
                        Johannesburg, South Africa
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-foreground/60 mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-xs font-mono uppercase tracking-wider text-foreground/50">Operating Hours</span>
                      <span className="text-sm text-foreground/80">
                        Mon – Fri: 08:30 – 17:00 (SAST / UTC+2)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center gap-2 text-xs text-foreground/70 font-mono">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Accepting new projects for Q3/Q4
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column (7 cols) — Interactive Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border bg-background p-8 md:p-12 shadow-sm relative overflow-hidden">
                <div className="space-y-2 mb-8">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-foreground/60">
                    ( Contact Form )
                  </span>
                  <h3 className="font-heading text-3xl font-bold tracking-tight text-foreground">
                    Send us a project inquiry
                  </h3>
                  <p className="text-sm text-foreground/60">
                    Fill in your project details below and we&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 px-6 text-center space-y-6"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-heading text-2xl font-bold text-foreground">
                        Message Received!
                      </h4>
                      <p className="text-sm text-foreground/70 max-w-md mx-auto leading-relaxed">
                        Thank you for contacting OBX Studio, <strong className="text-foreground">{formData.name}</strong>. We have received your inquiry for <strong>{formData.service}</strong> and will get back to you shortly.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-foreground/5 border border-border max-w-md mx-auto text-left space-y-2">
                      <span className="text-xs font-mono uppercase text-foreground/60 block font-semibold">Need a faster response?</span>
                      <p className="text-xs text-foreground/70">
                        You can also jump directly onto WhatsApp with your details already pre-filled.
                      </p>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:underline pt-1"
                      >
                        <MessageCircle className="h-3.5 w-3.5" /> Continue on WhatsApp →
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="font-mono text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground underline pt-4"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-foreground/80 font-medium">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full rounded-xl border border-border bg-foreground/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-foreground/80 font-medium">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. sarah@company.com"
                          className="w-full rounded-xl border border-border bg-foreground/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone & Company Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-foreground/80 font-medium">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +27 82 123 4567"
                          className="w-full rounded-xl border border-border bg-foreground/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-foreground/80 font-medium">
                          Company / Brand Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Acme Studio"
                          className="w-full rounded-xl border border-border bg-foreground/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-foreground/80 font-medium">
                        Service Needed
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {SERVICES.map((serv) => {
                          const isSelected = formData.service === serv
                          return (
                            <button
                              key={serv}
                              type="button"
                              onClick={() => setFormData((prev) => ({ ...prev, service: serv }))}
                              className={`flex items-center justify-between px-4 py-3 rounded-xl border text-left text-xs font-medium transition-all ${
                                isSelected
                                  ? 'border-foreground bg-foreground text-background font-semibold shadow-sm'
                                  : 'border-border bg-foreground/5 text-foreground/80 hover:border-foreground/40'
                              }`}
                            >
                              <span>{serv}</span>
                              {isSelected && <Check className="h-3.5 w-3.5 shrink-0" />}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Budget Selection */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-foreground/80 font-medium">
                        Estimated Budget Range
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {BUDGET_RANGES.map((b) => {
                          const isSelected = formData.budget === b
                          return (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setFormData((prev) => ({ ...prev, budget: b }))}
                              className={`px-3 py-2.5 rounded-xl border text-center text-xs transition-all ${
                                isSelected
                                  ? 'border-foreground bg-foreground text-background font-semibold'
                                  : 'border-border bg-foreground/5 text-foreground/80 hover:border-foreground/40'
                              }`}
                            >
                              {b}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Preferred Response Channel */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-foreground/80 font-medium">
                        Preferred Response Channel
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {CONTACT_METHODS.map((m) => {
                          const Icon = m.icon
                          const isSelected = formData.preferredMethod === m.id
                          return (
                            <button
                              key={m.id}
                              type="button"
                              onClick={() => setFormData((prev) => ({ ...prev, preferredMethod: m.id }))}
                              className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-medium transition-all ${
                                isSelected
                                  ? 'border-foreground bg-foreground text-background font-semibold'
                                  : 'border-border bg-foreground/5 text-foreground/80 hover:border-foreground/40'
                              }`}
                            >
                              <Icon className="h-3.5 w-3.5" />
                              <span className="hidden sm:inline">{m.label}</span>
                              <span className="sm:hidden">{m.label.split(' ')[0]}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Project Details Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-foreground/80 font-medium">
                        Project Details / Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your goals, timelines, or specific requirements..."
                        className="w-full rounded-xl border border-border bg-foreground/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all resize-none"
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs space-y-2">
                        <p>{errorMessage}</p>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider underline"
                        >
                          <MessageCircle className="h-3.5 w-3.5" /> Book directly on WhatsApp instead →
                        </a>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="group relative flex w-full items-center justify-center gap-3 rounded-xl bg-foreground px-8 py-4 font-mono text-xs uppercase tracking-widest text-background transition-all hover:bg-foreground/90 active:scale-[0.99] disabled:opacity-60"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Contact Form</span>
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

        </div>
      </section>
    </>
  )
}
