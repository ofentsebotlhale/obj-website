'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { PageHeader } from '@/components/page-header'
import { RevealWords } from '@/components/anim/reveal'
import { 
  MessageCircle, 
  Instagram, 
  Mail, 
  Send, 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowRight,
  ArrowLeft,
  Check,
  Globe,
  Palette,
  Search,
  ShoppingBag,
  Code2,
  HelpCircle,
  Sparkles
} from 'lucide-react'

const SERVICES = [
  { id: 'Web Design & Development', label: 'Web Design & Development', desc: 'Custom high-performance websites & web apps', icon: Globe },
  { id: 'Brand Identity & Strategy', label: 'Brand Identity & Strategy', desc: 'Logos, brand guidelines & visual positioning', icon: Palette },
  { id: 'SEO & Digital Systems', label: 'SEO & Digital Systems', desc: 'Search rankings, analytics & conversion optimization', icon: Search },
  { id: 'E-Commerce Experience', label: 'E-Commerce Experience', desc: 'Online stores built to convert shoppers', icon: ShoppingBag },
  { id: 'Custom Web Application', label: 'Custom Web Application', desc: 'Scalable SaaS & bespoke web platforms', icon: Code2 },
  { id: 'Other Inquiry', label: 'Other Inquiry / General', desc: 'Consultation, retainer, or custom scope', icon: HelpCircle },
]

const BUDGET_RANGES = [
  { id: 'R10,000 – R25,000', label: 'R10,000 – R25,000', desc: 'Essential website or brand foundation' },
  { id: 'R25,000 – R50,000', label: 'R25,000 – R50,000', desc: 'Full custom design, CMS & key features' },
  { id: 'R50,000 – R100,000+', label: 'R50,000 – R100,000+', desc: 'Complex web platform or full brand ecosystem' },
  { id: 'To be discussed', label: 'To be discussed', desc: 'Flexible budget depending on proposal' },
]

const TIMELINES = [
  'ASAP (1–2 weeks)',
  'Standard (3–5 weeks)',
  'Flexible (1–2 months)',
  'Just planning ahead',
]

const CONTACT_METHODS = [
  { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle, desc: 'Instant messaging' },
  { id: 'email', label: 'Email', icon: Mail, desc: 'Detailed response' },
  { id: 'instagram', label: 'Instagram DM', icon: Instagram, desc: '@obxstudio_' },
]

function ContactContent() {
  const searchParams = useSearchParams()
  const initialMode = searchParams.get('mode') === 'direct' ? 'direct' : 'form'

  const [activeTab, setActiveTab] = useState<'form' | 'direct'>(initialMode)
  const [currentStep, setCurrentStep] = useState<number>(1)

  const [formData, setFormData] = useState({
    service: 'Web Design & Development',
    budget: 'R25,000 – R50,000',
    timeline: 'Standard (3–5 weeks)',
    message: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    preferredMethod: 'whatsapp',
  })

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [stepErrors, setStepErrors] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    const mode = searchParams.get('mode')
    if (mode === 'direct') setActiveTab('direct')
    if (mode === 'form') setActiveTab('form')
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (e.target.name && stepErrors[e.target.name]) {
      setStepErrors((prev) => ({ ...prev, [e.target.name]: '' }))
    }
  }

  const validateStep = (step: number) => {
    const errors: { [key: string]: string } = {}

    if (step === 3) {
      if (!formData.message.trim()) {
        errors.message = 'Please provide a brief description of your project or goals.'
      }
    }

    if (step === 4) {
      if (!formData.name.trim()) {
        errors.name = 'Your name is required.'
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        errors.email = 'A valid email address is required.'
      }
    }

    setStepErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4))
    }
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(4)) return

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
        throw new Error(data.error || 'Failed to submit inquiry.')
      }

      setStatus('success')
    } catch (err: any) {
      console.error(err)
      setStatus('error')
      setErrorMessage(err.message || 'Something went wrong. You can also send us a message directly via WhatsApp.')
    }
  }

  const waNumber = '27760190339'
  const waPreFilled = encodeURIComponent(
    `Hi OBX Studio! I'm ${formData.name || 'a potential client'}. I'd like to discuss a project for ${formData.service} (Budget: ${formData.budget}).`
  )
  const whatsappUrl = `https://wa.me/${waNumber}?text=${waPreFilled}`

  return (
    <>
      <PageHeader index="04 / 04" subtitle="Get in touch" title="Contact" />

      {/* Hero Intro */}
      <section className="relative px-5 pb-8 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-10">
            <div className="max-w-2xl space-y-3">
              <h2 className="font-heading text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-5xl">
                <RevealWords
                  text="Let's build your next digital landmark."
                  className="text-foreground"
                />
              </h2>
              <p className="text-sm text-foreground/70">
                Use our step-by-step project form to specify your requirements, or contact us directly via WhatsApp / Email.
              </p>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="inline-flex rounded-full border border-border bg-foreground/5 p-1.5 shrink-0 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setActiveTab('form')}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all ${
                  activeTab === 'form'
                    ? 'bg-foreground text-background font-bold shadow-sm'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Start a Project (Form)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('direct')}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all ${
                  activeTab === 'direct'
                    ? 'bg-foreground text-background font-bold shadow-sm'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>Direct Contact (WhatsApp / Email)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section className="px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1600px]">
          {activeTab === 'direct' ? (
            /* Direct Contact Options View */
            <div className="max-w-4xl mx-auto space-y-10">
              <div className="text-center space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
                  ( Direct Contact Channels )
                </span>
                <h3 className="font-heading text-3xl font-bold text-foreground">
                  Reach us directly
                </h3>
                <p className="text-sm text-foreground/70 max-w-lg mx-auto">
                  For immediate assistance, direct inquiries, or fast chats, connect with us on WhatsApp or Email.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* WhatsApp Card */}
                <a
                  href="https://wa.me/27760190339?text=Hi%20OBX%20Studio%2C%20I'd%20like%20to%20get%20in%20touch..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-between p-8 rounded-3xl border border-emerald-500/40 bg-emerald-950/10 dark:bg-emerald-950/30 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500/10 hover:shadow-xl hover:shadow-emerald-500/5"
                >
                  <div className="space-y-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                      <MessageCircle className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-heading text-2xl font-bold text-foreground">
                          WhatsApp Chat
                        </h4>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold">
                          Fastest
                        </span>
                      </div>
                      <p className="text-xs text-foreground/70 mt-1">
                        Direct conversation with Ofentse & the studio team
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-emerald-500/20 flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      +27 76 019 0339
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-foreground group-hover:translate-x-1 transition-transform">
                      Open WhatsApp <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:hello@obxstudio.co.za"
                  className="group relative flex flex-col justify-between p-8 rounded-3xl border border-border bg-foreground/5 transition-all duration-300 hover:border-foreground hover:bg-foreground/10 hover:shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/10 text-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                      <Mail className="h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="font-heading text-2xl font-bold text-foreground">
                        Direct Email
                      </h4>
                      <p className="text-xs text-foreground/70 mt-1">
                        Send us project briefs, RFPs, or general questions
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-foreground">
                      hello@obxstudio.co.za
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-foreground group-hover:translate-x-1 transition-transform">
                      Send Email <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              </div>

              {/* Instagram Card */}
              <div className="p-8 rounded-3xl border border-pink-500/30 bg-pink-950/10 dark:bg-pink-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/20 text-pink-600 dark:text-pink-400">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <div>
                    <h5 className="font-heading text-lg font-bold text-foreground">Instagram Direct Message</h5>
                    <p className="text-xs text-foreground/70">@obxstudio_ • Follow our daily design drops & DM us anytime</p>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/obxstudio_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-pink-500/40 bg-pink-500/20 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-pink-700 dark:text-pink-300 hover:bg-pink-500 hover:text-white transition-all shrink-0"
                >
                  <span>Open Instagram DM</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ) : (
            /* Step-by-Step Project Inquiry Form */
            <div className="max-w-4xl mx-auto">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-3xl border border-border bg-background p-8 md:p-16 text-center space-y-6 shadow-sm"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-3xl font-bold text-foreground">
                      Project Inquiry Submitted!
                    </h3>
                    <p className="text-sm text-foreground/70 max-w-lg mx-auto leading-relaxed">
                      Thank you <strong className="text-foreground">{formData.name}</strong>. We have received your request for <strong>{formData.service}</strong> (Budget: {formData.budget}). We will review your details and respond within 24 hours.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border/60 max-w-md mx-auto space-y-4">
                    <span className="text-xs font-mono uppercase text-foreground/60 block font-semibold">
                      Want an instant conversation right now?
                    </span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full rounded-2xl bg-emerald-600 px-6 py-4 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:bg-emerald-500 transition-all"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Continue on WhatsApp with Pre-filled Details</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle')
                      setCurrentStep(1)
                    }}
                    className="font-mono text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground underline pt-4"
                  >
                    Start another inquiry
                  </button>
                </motion.div>
              ) : (
                <div className="rounded-3xl border border-border bg-background p-6 md:p-12 shadow-sm relative overflow-hidden">
                  {/* Progress Header */}
                  <div className="mb-10 space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest">
                      <span className="text-foreground/60 font-semibold">
                        Step {currentStep} of 4
                      </span>
                      <span className="text-foreground/80 font-bold">
                        {currentStep === 1 && '1. Choose Service'}
                        {currentStep === 2 && '2. Budget & Timeline'}
                        {currentStep === 3 && '3. Project Details'}
                        {currentStep === 4 && '4. Contact Information'}
                      </span>
                    </div>

                    {/* Step Progress Bar */}
                    <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-foreground rounded-full"
                        initial={{ width: '25%' }}
                        animate={{ width: `${(currentStep / 4) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Step Breadcrumbs Indicator */}
                    <div className="hidden sm:grid grid-cols-4 gap-2 pt-2">
                      {[
                        { step: 1, name: 'Service' },
                        { step: 2, name: 'Budget' },
                        { step: 3, name: 'Scope' },
                        { step: 4, name: 'Details' },
                      ].map((item) => {
                        const isDone = currentStep > item.step
                        const isCurrent = currentStep === item.step
                        return (
                          <button
                            key={item.step}
                            type="button"
                            onClick={() => {
                              if (item.step < currentStep) setCurrentStep(item.step)
                            }}
                            disabled={item.step > currentStep}
                            className={`flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-left border-b-2 pb-2 transition-colors ${
                              isCurrent
                                ? 'border-foreground text-foreground font-bold'
                                : isDone
                                ? 'border-foreground/40 text-foreground/70 cursor-pointer'
                                : 'border-transparent text-foreground/30 cursor-not-allowed'
                            }`}
                          >
                            <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${
                              isDone ? 'bg-foreground text-background' : isCurrent ? 'border border-foreground text-foreground' : 'border border-foreground/20 text-foreground/30'
                            }`}>
                              {isDone ? <Check className="h-3 w-3" /> : item.step}
                            </span>
                            <span>{item.name}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <AnimatePresence mode="wait">
                      {/* STEP 1: SERVICE SELECTION */}
                      {currentStep === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.25 }}
                          className="space-y-6"
                        >
                          <div className="space-y-1">
                            <h3 className="font-heading text-2xl font-bold text-foreground">
                              What service do you need?
                            </h3>
                            <p className="text-xs text-foreground/60">
                              Select the primary service for your project proposal.
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {SERVICES.map((serv) => {
                              const Icon = serv.icon
                              const isSelected = formData.service === serv.id
                              return (
                                <button
                                  key={serv.id}
                                  type="button"
                                  onClick={() => setFormData((prev) => ({ ...prev, service: serv.id }))}
                                  className={`group relative flex items-start gap-4 p-5 rounded-2xl border text-left transition-all ${
                                    isSelected
                                      ? 'border-foreground bg-foreground text-background shadow-md'
                                      : 'border-border bg-foreground/5 text-foreground hover:border-foreground/40 hover:bg-foreground/10'
                                  }`}
                                >
                                  <div className={`p-2.5 rounded-xl transition-colors shrink-0 ${
                                    isSelected ? 'bg-background/20 text-background' : 'bg-foreground/10 text-foreground'
                                  }`}>
                                    <Icon className="h-5 w-5" />
                                  </div>

                                  <div className="space-y-1 flex-1 pr-4">
                                    <h4 className="font-heading text-sm font-bold leading-tight">
                                      {serv.label}
                                    </h4>
                                    <p className={`text-xs leading-relaxed ${isSelected ? 'text-background/80' : 'text-foreground/60'}`}>
                                      {serv.desc}
                                    </p>
                                  </div>

                                  <div className={`absolute top-4 right-4 flex h-5 w-5 items-center justify-center rounded-full border transition-all ${
                                    isSelected ? 'border-background bg-background text-foreground' : 'border-foreground/20'
                                  }`}>
                                    {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                                  </div>
                                </button>
                              )
                            })}
                          </div>
                        </motion.div>
                      )}

                      {/* STEP 2: BUDGET & TIMELINE */}
                      {currentStep === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.25 }}
                          className="space-y-8"
                        >
                          <div className="space-y-1">
                            <h3 className="font-heading text-2xl font-bold text-foreground">
                              Budget & Estimated Timeline
                            </h3>
                            <p className="text-xs text-foreground/60">
                              This helps us tailor the scope and deliverable recommendations to your investment range.
                            </p>
                          </div>

                          {/* Budget Options */}
                          <div className="space-y-3">
                            <label className="block text-xs font-mono uppercase tracking-wider text-foreground/80 font-bold">
                              Estimated Investment Budget
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {BUDGET_RANGES.map((b) => {
                                const isSelected = formData.budget === b.id
                                return (
                                  <button
                                    key={b.id}
                                    type="button"
                                    onClick={() => setFormData((prev) => ({ ...prev, budget: b.id }))}
                                    className={`flex items-center justify-between p-4 rounded-2xl border text-left transition-all ${
                                      isSelected
                                        ? 'border-foreground bg-foreground text-background font-semibold shadow-md'
                                        : 'border-border bg-foreground/5 text-foreground/80 hover:border-foreground/40'
                                    }`}
                                  >
                                    <div>
                                      <div className="font-heading text-sm font-bold">{b.label}</div>
                                      <div className={`text-[11px] ${isSelected ? 'text-background/80' : 'text-foreground/60'}`}>
                                        {b.desc}
                                      </div>
                                    </div>
                                    {isSelected && <Check className="h-4 w-4 shrink-0" />}
                                  </button>
                                )
                              })}
                            </div>
                          </div>

                          {/* Timeline Options */}
                          <div className="space-y-3">
                            <label className="block text-xs font-mono uppercase tracking-wider text-foreground/80 font-bold">
                              Preferred Project Timeline
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                              {TIMELINES.map((t) => {
                                const isSelected = formData.timeline === t
                                return (
                                  <button
                                    key={t}
                                    type="button"
                                    onClick={() => setFormData((prev) => ({ ...prev, timeline: t }))}
                                    className={`p-3 rounded-xl border text-center text-xs transition-all ${
                                      isSelected
                                        ? 'border-foreground bg-foreground text-background font-bold'
                                        : 'border-border bg-foreground/5 text-foreground/80 hover:border-foreground/40'
                                    }`}
                                  >
                                    {t}
                                  </button>
                                )
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* STEP 3: PROJECT DETAILS */}
                      {currentStep === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.25 }}
                          className="space-y-6"
                        >
                          <div className="space-y-1">
                            <h3 className="font-heading text-2xl font-bold text-foreground">
                              Tell us about your project
                            </h3>
                            <p className="text-xs text-foreground/60">
                              Share your project goals, key features, reference websites, or current challenges.
                            </p>
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-foreground/80 font-bold">
                              Project Details / Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              required
                              rows={6}
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Describe what you want to build or achieve (e.g. We need a modern, high-converting website with an interactive showcase and blog...)"
                              className="w-full rounded-2xl border border-border bg-foreground/5 p-4 text-sm text-foreground placeholder:text-foreground/30 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all resize-none"
                            />
                            {stepErrors.message && (
                              <p className="text-xs text-red-500 font-mono">{stepErrors.message}</p>
                            )}
                          </div>
                        </motion.div>
                      )}

                      {/* STEP 4: CONTACT INFO */}
                      {currentStep === 4 && (
                        <motion.div
                          key="step4"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.25 }}
                          className="space-y-6"
                        >
                          <div className="space-y-1">
                            <h3 className="font-heading text-2xl font-bold text-foreground">
                              Your Contact Information
                            </h3>
                            <p className="text-xs text-foreground/60">
                              How should we send you the proposal and reach back out?
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-foreground/80 font-bold">
                                Your Full Name <span className="text-red-500">*</span>
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
                              {stepErrors.name && (
                                <p className="text-xs text-red-500 font-mono">{stepErrors.name}</p>
                              )}
                            </div>

                            <div className="space-y-1.5">
                              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-foreground/80 font-bold">
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
                              {stepErrors.email && (
                                <p className="text-xs text-red-500 font-mono">{stepErrors.email}</p>
                              )}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-foreground/80 font-bold">
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

                            <div className="space-y-1.5">
                              <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-foreground/80 font-bold">
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

                          {/* Preferred Contact Method */}
                          <div className="space-y-2 pt-2">
                            <label className="block text-xs font-mono uppercase tracking-wider text-foreground/80 font-bold">
                              Preferred Response Channel
                            </label>
                            <div className="grid grid-cols-3 gap-3">
                              {CONTACT_METHODS.map((m) => {
                                const Icon = m.icon
                                const isSelected = formData.preferredMethod === m.id
                                return (
                                  <button
                                    key={m.id}
                                    type="button"
                                    onClick={() => setFormData((prev) => ({ ...prev, preferredMethod: m.id }))}
                                    className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-bold transition-all ${
                                      isSelected
                                        ? 'border-foreground bg-foreground text-background shadow-sm'
                                        : 'border-border bg-foreground/5 text-foreground/80 hover:border-foreground/40'
                                    }`}
                                  >
                                    <Icon className="h-4 w-4" />
                                    <span>{m.label}</span>
                                  </button>
                                )
                              })}
                            </div>
                          </div>

                          {/* Summary Box */}
                          <div className="p-4 rounded-2xl bg-foreground/5 border border-border space-y-2 text-xs font-mono">
                            <div className="flex justify-between text-foreground/60">
                              <span>Service:</span>
                              <strong className="text-foreground">{formData.service}</strong>
                            </div>
                            <div className="flex justify-between text-foreground/60">
                              <span>Budget:</span>
                              <strong className="text-foreground">{formData.budget}</strong>
                            </div>
                            <div className="flex justify-between text-foreground/60">
                              <span>Timeline:</span>
                              <strong className="text-foreground">{formData.timeline}</strong>
                            </div>
                          </div>

                          {errorMessage && (
                            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs">
                              {errorMessage}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Navigation Buttons (Back & Next/Submit) */}
                    <div className="mt-10 pt-6 border-t border-border flex items-center justify-between gap-4">
                      {currentStep > 1 ? (
                        <button
                          type="button"
                          onClick={handleBack}
                          className="inline-flex items-center gap-2 rounded-xl border border-border bg-foreground/5 px-6 py-3 font-mono text-xs uppercase tracking-wider text-foreground hover:bg-foreground/10 transition-all"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          <span>Back</span>
                        </button>
                      ) : (
                        <div />
                      )}

                      {currentStep < 4 ? (
                        <button
                          type="button"
                          onClick={handleNext}
                          className="inline-flex items-center gap-2 rounded-xl bg-foreground px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-background hover:bg-foreground/90 transition-all active:scale-[0.99]"
                        >
                          <span>Next Step</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="inline-flex items-center gap-2 rounded-xl bg-foreground px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-background hover:bg-foreground/90 transition-all disabled:opacity-60 active:scale-[0.99]"
                        >
                          {status === 'submitting' ? (
                            <>
                              <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                              <span>Submitting...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Inquiry</span>
                              <Send className="h-4 w-4" />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center font-mono text-xs uppercase tracking-widest text-foreground/50">Loading contact form...</div>}>
      <ContactContent />
    </Suspense>
  )
}
