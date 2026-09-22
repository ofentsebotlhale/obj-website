"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
  });

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem("obx_cookie_consent");

    if (!consent) {
      if (window.gtag) {
        window.gtag("consent", "default", {
          analytics_storage: "denied",
          security_storage: "granted",
        });
      }

      const timer = setTimeout(() => {
        setVisible(true);
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(consent);
        updateGoogleConsent(parsed.analytics);
      } catch (e) {
        // Fallback
      }
    }
  }, []);

  const updateGoogleConsent = (analyticsAllowed: boolean) => {
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: analyticsAllowed ? "granted" : "denied",
      });
    }
  };

  const handleAcceptAll = () => {
    const consentObj = { necessary: true, analytics: true };
    localStorage.setItem("obx_cookie_consent", JSON.stringify(consentObj));
    updateGoogleConsent(true);
    window.dispatchEvent(
      new CustomEvent("obx-consent-updated", { detail: { analytics: true } })
    );
    setVisible(false);
  };

  const handleRejectAll = () => {
    const consentObj = { necessary: true, analytics: false };
    localStorage.setItem("obx_cookie_consent", JSON.stringify(consentObj));
    updateGoogleConsent(false);
    window.dispatchEvent(
      new CustomEvent("obx-consent-updated", { detail: { analytics: false } })
    );
    setVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("obx_cookie_consent", JSON.stringify(preferences));
    updateGoogleConsent(preferences.analytics);
    window.dispatchEvent(
      new CustomEvent("obx-consent-updated", {
        detail: { analytics: preferences.analytics },
      })
    );
    setVisible(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="obx-cookie-banner"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/20 bg-background/95 backdrop-blur-sm p-4 shadow-2xl"
        >
          <div className="mx-auto max-w-4xl flex justify-center">
            {!showPreferences ? (
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full text-center md:text-left">
                <div className="flex-1">
                  <p className="text-sm font-medium leading-relaxed text-foreground select-none text-center">
                    We use cookies to elevate your experience and analyze site traffic.
                    <Link
                      href="/privacy"
                      className="inline-flex text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity ml-2 font-bold"
                      id="cookie-privacy-link"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 shrink-0">
                  <button
                    id="cookie-btn-preferences"
                    onClick={() => setShowPreferences(true)}
                    className="px-4 py-2 min-h-[40px] font-mono text-[10px] uppercase tracking-widest text-foreground hover:bg-muted transition-colors rounded-full"
                  >
                    Customize
                  </button>
                  <button
                    id="cookie-btn-reject"
                    onClick={handleRejectAll}
                    className="px-4 py-2 min-h-[40px] font-mono text-[10px] uppercase tracking-widest text-foreground hover:bg-muted transition-colors rounded-full"
                  >
                    Reject
                  </button>
                  <button
                    id="cookie-btn-accept"
                    onClick={handleAcceptAll}
                    className="bg-foreground text-background px-6 py-2 min-h-[40px] font-mono text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity rounded-full"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-6 max-w-xl mx-auto w-full">
                <div className="space-y-4">
                  <p className="text-sm text-foreground uppercase tracking-wider font-mono font-bold text-center">
                    Privacy Settings
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-border/20 pb-4">
                      <div className="text-left">
                        <span className="text-sm font-bold text-foreground block">
                          Essential Data
                        </span>
                        <span className="text-xs text-muted-foreground font-medium">
                          Required for secure navigation.
                        </span>
                      </div>
                      <span className="font-mono text-[10px] font-bold uppercase text-foreground tracking-widest px-3 py-1 bg-muted rounded-full">
                        Required
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between pb-2">
                      <div className="text-left">
                        <span className="text-sm font-bold text-foreground block">
                          Analytics
                        </span>
                        <span className="text-xs text-muted-foreground font-medium">
                          Anonymous telemetry compilation.
                        </span>
                      </div>
                      <button
                        id="cookie-toggle-analytics"
                        onClick={() =>
                          setPreferences((prev) => ({
                            ...prev,
                            analytics: !prev.analytics,
                          }))
                        }
                        className={`font-mono text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border transition-all duration-300 ${
                          preferences.analytics
                            ? "bg-foreground border-foreground text-background"
                            : "bg-transparent border-border text-foreground hover:bg-muted"
                        }`}
                      >
                        {preferences.analytics ? "Enabled" : "Disabled"}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/20">
                  <button
                    id="cookie-btn-back"
                    onClick={() => setShowPreferences(false)}
                    className="px-4 py-2 min-h-[44px] font-mono text-[10px] uppercase tracking-widest text-foreground hover:bg-muted transition-colors rounded-full"
                  >
                    &larr; Back
                  </button>
                  <button
                    id="cookie-btn-save"
                    onClick={handleSavePreferences}
                    className="bg-foreground text-background px-6 py-2 min-h-[44px] font-mono text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity rounded-full border border-foreground"
                  >
                    Save & Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
