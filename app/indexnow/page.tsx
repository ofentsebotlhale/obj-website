'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Check, 
  Send, 
  History, 
  Globe, 
  Key, 
  FileText, 
  ExternalLink, 
  RefreshCw, 
  AlertCircle, 
  CheckSquare, 
  Square,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

interface SubmissionLog {
  id: string
  timestamp: string
  urls: string[]
  success: boolean
  details: any
}

export default function IndexNowPage() {
  const [config, setConfig] = useState<{
    host: string
    key: string
    keyLocation: string
    urls: string[]
  } | null>(null)

  const [selectedUrls, setSelectedUrls] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [history, setHistory] = useState<SubmissionLog[]>([])
  const [activeTab, setActiveTab] = useState<'submit' | 'history' | 'diagnostics'>('submit')
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  // Fetch IndexNow configuration from server on mount
  useEffect(() => {
    fetchConfig()
    // Load submission history from localStorage
    const saved = localStorage.getItem('obx_indexnow_history')
    if (saved) {
      try {
        setHistory(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to parse history', e)
      }
    }
  }, [])

  const fetchConfig = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/indexnow')
      const contentType = res.headers.get('content-type')
      
      if (res.ok) {
        if (contentType && contentType.includes('application/json')) {
          const data = await res.json()
          setConfig(data)
          setSelectedUrls(data.urls || [])
        } else {
          const text = await res.text()
          console.error('Non-JSON response received:', text)
          setMessage({ 
            type: 'error', 
            text: `Server returned unexpected format. Expected JSON, got: ${text.slice(0, 100)}...` 
          })
        }
      } else {
        let errorMsg = 'Failed to load site index status.'
        if (contentType && contentType.includes('application/json')) {
          const data = await res.json()
          errorMsg = data.error || errorMsg
        } else {
          const text = await res.text()
          errorMsg = `${errorMsg} (Status ${res.status}): ${text.slice(0, 100)}`
        }
        setMessage({ type: 'error', text: errorMsg })
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: `An error occurred while connecting to the index engine: ${err.message}` })
    } finally {
      setLoading(false)
    }
  };

  const toggleUrl = (url: string) => {
    if (selectedUrls.includes(url)) {
      setSelectedUrls(selectedUrls.filter(u => u !== url))
    } else {
      setSelectedUrls([...selectedUrls, url])
    }
  }

  const toggleSelectAll = () => {
    if (!config) return
    if (selectedUrls.length === config.urls.length) {
      setSelectedUrls([])
    } else {
      setSelectedUrls([...config.urls])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedUrls.length === 0) {
      setMessage({ type: 'error', text: 'Please select at least one URL to submit.' })
      return
    }

    setSubmitting(true)
    setMessage(null)

    try {
      const res = await fetch('/api/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ urls: selectedUrls }),
      })

      const contentType = res.headers.get('content-type')
      let result: any = {}
      let isJson = false

      if (contentType && contentType.includes('application/json')) {
        result = await res.json()
        isJson = true
      } else {
        const text = await res.text()
        result = { error: `Server returned non-JSON format: ${text.slice(0, 150)}...` }
      }

      if (res.ok && isJson && result.success) {
        setMessage({
          type: 'success',
          text: `Successfully submitted ${selectedUrls.length} URL${selectedUrls.length > 1 ? 's' : ''} to IndexNow engines (Bing/Yandex)!`
        })

        // Add to history
        const newLog: SubmissionLog = {
          id: Math.random().toString(36).substring(2, 9),
          timestamp: new Date().toISOString(),
          urls: [...selectedUrls],
          success: true,
          details: result.results
        }

        const updatedHistory = [newLog, ...history]
        setHistory(updatedHistory)
        localStorage.setItem('obx_indexnow_history', JSON.stringify(updatedHistory))
      } else {
        setMessage({
          type: 'error',
          text: result.error || 'Failed to submit URLs. Check credentials or connection.'
        })

        const failedLog: SubmissionLog = {
          id: Math.random().toString(36).substring(2, 9),
          timestamp: new Date().toISOString(),
          urls: [...selectedUrls],
          success: false,
          details: result.error || result.results
        }
        const updatedHistory = [failedLog, ...history]
        setHistory(updatedHistory)
        localStorage.setItem('obx_indexnow_history', JSON.stringify(updatedHistory))
      }
    } catch (err: any) {
      setMessage({
        type: 'error',
        text: err.message || 'An error occurred during submission.'
      })
    } finally {
      setSubmitting(false)
    }
  }

  const clearHistory = () => {
    if (confirm('Are you sure you want to clear the submission history?')) {
      setHistory([])
      localStorage.removeItem('obx_indexnow_history')
    }
  }

  return (
    <div className="min-h-screen bg-background text-black selection:bg-black selection:text-white pt-32 pb-24 px-5 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-black font-semibold hover:border-b hover:border-black transition-all"
          >
            <span>← Return to Studio</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="border-b-2 border-black pb-12 mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-black font-bold block mb-4">
            Search Engine Optimization
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-black mb-6">
            IndexNow Console
          </h1>
          <p className="font-sans text-lg md:text-xl font-medium max-w-3xl leading-relaxed text-black">
            Instantly notify Bing, Yandex, and other open search engines when your pages are created, updated, or removed. Achieve crawl-less index updates for OBX Studio in seconds.
          </p>
        </div>

        {/* IndexNow Status Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="border-2 border-black p-6 bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Globe className="h-5 w-5 text-black" />
                <span className="font-mono text-xs uppercase tracking-widest text-black font-bold">Host Name</span>
              </div>
              <p className="font-heading text-2xl font-bold text-black truncate">
                {config?.host || 'obxstudio.co.za'}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-black">
              <span className="font-mono text-[10px] text-black block">VERIFIED DOMAIN</span>
            </div>
          </div>

          <div className="border-2 border-black p-6 bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Key className="h-5 w-5 text-black" />
                <span className="font-mono text-xs uppercase tracking-widest text-black font-bold">API Key</span>
              </div>
              <p className="font-mono text-base font-bold text-black truncate">
                {config?.key || 'cf583e4017cd47...'}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-black flex justify-between items-center">
              <span className="font-mono text-[10px] text-black">VALID HOST KEY</span>
              {config && (
                <a 
                  href={config.keyLocation} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] text-black underline font-bold flex items-center gap-1 hover:opacity-80"
                >
                  Verify File <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </div>

          <div className="border-2 border-black p-6 bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-5 w-5 text-black" />
                <span className="font-mono text-xs uppercase tracking-widest text-black font-bold">Total Pages</span>
              </div>
              <p className="font-heading text-4xl font-bold text-black">
                {config ? config.urls.length : '...'}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-black">
              <span className="font-mono text-[10px] text-black">SYNCED WITH SITEMAP.TS</span>
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b-2 border-black mb-8">
          <button
            onClick={() => setActiveTab('submit')}
            className={`px-6 py-3 font-mono text-xs uppercase tracking-widest font-bold transition-all border-t-2 border-x-2 -mb-[2px] ${
              activeTab === 'submit' 
                ? 'bg-black text-white border-black' 
                : 'bg-white text-black border-transparent hover:bg-black hover:text-white'
            }`}
          >
            Submit URLs
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-6 py-3 font-mono text-xs uppercase tracking-widest font-bold transition-all border-t-2 border-x-2 -mb-[2px] ${
              activeTab === 'history' 
                ? 'bg-black text-white border-black' 
                : 'bg-white text-black border-transparent hover:bg-black hover:text-white'
            }`}
          >
            Submission History ({history.length})
          </button>
          <button
            onClick={() => setActiveTab('diagnostics')}
            className={`px-6 py-3 font-mono text-xs uppercase tracking-widest font-bold transition-all border-t-2 border-x-2 -mb-[2px] ${
              activeTab === 'diagnostics' 
                ? 'bg-black text-white border-black' 
                : 'bg-white text-black border-transparent hover:bg-black hover:text-white'
            }`}
          >
            Diagnostics
          </button>
        </div>

        {/* Message Banner */}
        <AnimatePresence mode="wait">
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`border-2 p-4 mb-8 flex items-start gap-3 ${
                message.type === 'success' 
                  ? 'border-black bg-white text-black' 
                  : 'border-black bg-black text-white'
              }`}
            >
              <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
              <div>
                <p className="font-sans text-sm font-bold">{message.text}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tab Contents */}
        <div>
          {activeTab === 'submit' && (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="border-2 border-black p-6 bg-white">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-black">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-black">Select URLs to Submit</h3>
                    <p className="font-sans text-sm font-semibold text-black mt-1">
                      Choose which pages of OBX Studio you want to submit directly to index engines.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={toggleSelectAll}
                      className="font-mono text-xs uppercase tracking-widest font-bold text-black border border-black px-3 py-1.5 hover:bg-black hover:text-white transition-all"
                    >
                      {config && selectedUrls.length === config.urls.length ? 'Deselect All' : 'Select All'}
                    </button>
                    <button
                      type="button"
                      onClick={fetchConfig}
                      disabled={loading}
                      className="font-mono text-xs uppercase tracking-widest font-bold text-black border border-black p-1.5 hover:bg-black hover:text-white transition-all disabled:opacity-50"
                      title="Reload Sitemap"
                    >
                      <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                    </button>
                  </div>
                </div>

                {loading ? (
                  <div className="py-20 text-center">
                    <RefreshCw className="h-8 w-8 animate-spin mx-auto text-black mb-4" />
                    <span className="font-mono text-xs uppercase tracking-widest text-black font-bold">Scanning sitemap pages...</span>
                  </div>
                ) : config ? (
                  <div className="max-h-96 overflow-y-auto divide-y divide-black/10 pr-2">
                    {config.urls.map((url) => {
                      const isSelected = selectedUrls.includes(url)
                      return (
                        <div 
                          key={url}
                          onClick={() => toggleUrl(url)}
                          className="flex items-center gap-4 py-3.5 px-2 hover:bg-black/5 cursor-pointer transition-colors"
                        >
                          <button
                            type="button"
                            className="text-black shrink-0 focus:outline-none"
                          >
                            {isSelected ? (
                              <CheckSquare className="h-5 w-5 fill-black text-white" />
                            ) : (
                              <Square className="h-5 w-5 text-black" />
                            )}
                          </button>
                          <div className="flex-grow min-w-0">
                            <span className="font-mono text-sm font-bold text-black block truncate">
                              {url}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div className="py-12 text-center text-black font-semibold">
                    No configurations found. Make sure dynamic sitemap configuration is active.
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center bg-black text-white p-6 border-2 border-black">
                <div>
                  <h4 className="font-heading text-lg font-bold text-white mb-1">Confirm Index Request</h4>
                  <p className="font-sans text-xs text-white/90">
                    You have selected <span className="font-bold underline">{selectedUrls.length}</span> of <span className="font-bold">{config?.urls.length || 0}</span> pages for immediate submission.
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={submitting || selectedUrls.length === 0}
                  className="font-mono text-xs uppercase tracking-widest font-bold bg-white text-black px-6 py-3 border border-white hover:bg-black hover:text-white transition-all inline-flex items-center gap-2 disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <span>Submitting...</span>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Submit Now</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {activeTab === 'history' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-black pb-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-black">Log History</h3>
                  <p className="font-sans text-sm font-semibold text-black mt-1">
                    Review and verify past submission events and details.
                  </p>
                </div>
                {history.length > 0 && (
                  <button
                    onClick={clearHistory}
                    className="font-mono text-xs uppercase tracking-widest font-bold border border-black text-black px-4 py-2 hover:bg-black hover:text-white transition-all"
                  >
                    Clear All Logs
                  </button>
                )}
              </div>

              {history.length === 0 ? (
                <div className="border-2 border-dashed border-black py-20 text-center bg-white">
                  <History className="h-10 w-10 text-black mx-auto mb-4" />
                  <p className="font-heading text-lg font-bold text-black mb-1">No execution history found</p>
                  <p className="font-sans text-sm font-semibold text-black max-w-md mx-auto">
                    Submissions completed in this browser tab will be logged and stored here securely.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {history.map((log) => (
                    <div key={log.id} className="border-2 border-black bg-white overflow-hidden">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border-b border-black bg-black/5">
                        <div className="flex items-center gap-3">
                          <span className={`h-2.5 w-2.5 rounded-full ${log.success ? 'bg-black' : 'bg-red-500'}`} />
                          <span className="font-mono text-xs font-bold uppercase tracking-widest text-black">
                            {log.success ? 'SUBMISSION SUCCESSFUL' : 'SUBMISSION FAILED'}
                          </span>
                        </div>
                        <span className="font-mono text-xs font-bold text-black">
                          {new Date(log.timestamp).toLocaleString()}
                        </span>
                      </div>

                      <div className="p-6 space-y-4">
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-black font-bold block mb-2">
                            SUBMITTED URLS ({log.urls.length})
                          </span>
                          <div className="max-h-32 overflow-y-auto border border-black/10 p-3 bg-black/5 divide-y divide-black/5 font-mono text-xs font-bold text-black">
                            {log.urls.map(url => (
                              <div key={url} className="py-1 select-all">{url}</div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-black font-bold block mb-2">
                            ENGINE RESPONSE LOG
                          </span>
                          <pre className="bg-black text-white p-4 font-mono text-xs font-bold overflow-x-auto border-2 border-black leading-relaxed">
                            {JSON.stringify(log.details, null, 2)}
                          </pre>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'diagnostics' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-2 border-black p-6 bg-white space-y-6">
                <h3 className="font-heading text-xl font-bold text-black border-b border-black pb-3">How IndexNow Works</h3>
                
                <div className="space-y-4 text-black">
                  <p className="font-sans text-sm font-semibold leading-relaxed">
                    Normally, search engines must frequently request and crawl every single page of your website to discover updates. This process wastes bandwidth, server memory, and delays the appearance of new pages in results.
                  </p>
                  <p className="font-sans text-sm font-semibold leading-relaxed">
                    IndexNow flips this architecture. When you publish or edit content, you notify Bing and other search engines immediately. They prioritize these URLs and index them within seconds.
                  </p>
                  <div className="border border-black p-4 bg-black/5 font-mono text-xs font-bold space-y-2">
                    <span className="block font-bold">PROTOCOL WORKFLOW:</span>
                    <ol className="list-decimal pl-4 space-y-1">
                      <li>Generate unique key <span className="underline">{config?.key || 'cf583e40...'}</span></li>
                      <li>Host key file at root to verify ownership</li>
                      <li>Post API payload to Bing endpoint</li>
                      <li>Bing checks key file, matches ownership, and crawls URLs</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="border-2 border-black p-6 bg-white space-y-6">
                <h3 className="font-heading text-xl font-bold text-black border-b border-black pb-3">Diagnostic Status Check</h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-black/10">
                    <span className="font-mono text-xs font-bold text-black uppercase tracking-widest">Ownership Token:</span>
                    <span className="font-mono text-xs font-bold text-black">{config?.key || 'Active'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-black/10">
                    <span className="font-mono text-xs font-bold text-black uppercase tracking-widest">IndexNow Endpoint:</span>
                    <span className="font-mono text-xs font-bold text-black">api.indexnow.org</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-black/10">
                    <span className="font-mono text-xs font-bold text-black uppercase tracking-widest">Bing Gateway:</span>
                    <span className="font-mono text-xs font-bold text-black">bing.com/indexnow</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-black/10">
                    <span className="font-mono text-xs font-bold text-black uppercase tracking-widest">Verification Status:</span>
                    <span className="font-mono text-xs font-bold text-black inline-flex items-center gap-1">
                      <Check className="h-4 w-4 stroke-[3px]" /> Active (Public)
                    </span>
                  </div>
                  <div className="pt-4">
                    <a 
                      href={`https://${config?.host || 'obxstudio.co.za'}/${config?.key || 'cf583e4017cd47a691b9f88c75e5e521'}.txt`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group font-mono text-xs uppercase tracking-widest font-bold bg-black text-white px-5 py-3 border border-black hover:bg-white hover:text-black transition-all inline-flex items-center gap-2 cursor-pointer w-full justify-center"
                    >
                      <span>Check Key File Live</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
