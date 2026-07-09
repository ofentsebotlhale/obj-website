"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
      // Set default consent state for Google Analytics prior to choice
      if (window.gtag) {
        window.gtag("consent", "default", {
          analytics_storage: "denied",
          security_storage: "granted",
        });
      }
      // Delay presentation slightly for aesthetic timing
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
    setVisible(false);
  };

  const handleRejectAll = () => {
    const consentObj = { necessary: true, analytics: false };
    localStorage.setItem("obx_cookie_consent", JSON.stringify(consentObj));
    updateGoogleConsent(false);
    setVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("obx_cookie_consent", JSON.stringify(preferences));
    updateGoogleConsent(preferences.analytics);
    setVisible(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="obx-cookie-banner"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background p-6 md:bottom-8 md:left-8 md:right-auto md:max-w-[380px] md:border md:shadow-none"
        >
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Context Information */}
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  OBX Studio
                </span>
              </div>

              {!showPreferences ? (
                <p className="text-sm font-light leading-relaxed text-foreground select-none">
                  We collect cookie data regarding website interactions to
                  analyze and elevate our physical-to-digital representations.
                  Rejecting limits tracking. Learn more in our{" "}
                  <Link
                    href="/privacy"
                    className="text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity font-medium"
                    id="cookie-privacy-link"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              ) : (
                <div className="space-y-4 pt-2">
                  <p className="text-xs text-foreground uppercase tracking-wider font-mono">
                    Configure Privacy Settings
                  </p>

                  <div className="space-y-3">
                    {/* Necessary cookies */}
                    <div className="flex items-center justify-between border-b border-border/50 pb-2">
                      <div>
                        <span className="text-sm font-medium text-foreground block">
                          Essential Data
                        </span>
                        <span className="text-xs text-foreground">
                          Required for secure navigation, core assets and
                          structural layout.
                        </span>
                      </div>
                      <span className="font-mono text-[10px] uppercase text-foreground tracking-widest px-2.5 py-1 bg-secondary/50 border border-foreground/20">
                        Required
                      </span>
                    </div>

                    {/* Analytics cookies */}
                    <div className="flex items-center justify-between pb-1">
                      <div>
                        <span className="text-sm font-medium text-foreground block">
                          Performance &amp; Analytics
                        </span>
                        <span className="text-xs text-foreground">
                          Allows anonymous telemetry compilation via Google
                          Analytics.
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
                        className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1 border transition-all duration-300 ${
                          preferences.analytics
                            ? "bg-foreground border-foreground text-background"
                            : "bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background"
                        }`}
                      >
                        {preferences.analytics ? "Enabled" : "Disabled"}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 shrink-0">
              {!showPreferences ? (
                <>
                  <button
                    id="cookie-btn-accept"
                    onClick={handleAcceptAll}
                    className="bg-foreground text-background w-full px-6 py-3 min-h-[44px] font-mono text-xs font-medium uppercase tracking-widest hover:opacity-90 transition-opacity duration-300"
                  >
                    Accept All
                  </button>
                  <div className="flex justify-between gap-3">
                    <button
                      id="cookie-btn-preferences"
                      onClick={() => setShowPreferences(true)}
                      className="group relative px-2 py-2.5 min-h-[44px] min-w-[44px] font-mono text-[10px] uppercase tracking-widest text-foreground hover:opacity-70 transition-colors duration-300"
                    >
                      <span>Customize</span>
                      <span className="absolute bottom-1 left-2 h-px w-[calc(100%-16px)] scale-x-0 bg-muted-foreground origin-left transition-transform duration-300 group-hover:scale-x-100" />
                    </button>
                    <button
                      id="cookie-btn-reject"
                      onClick={handleRejectAll}
                      className="px-2 py-2.5 min-h-[44px] min-w-[44px] font-mono text-[10px] uppercase tracking-widest text-foreground hover:opacity-70 transition-colors duration-300"
                    >
                      Only Essential
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <button
                    id="cookie-btn-save"
                    onClick={handleSavePreferences}
                    className="bg-foreground text-background w-full px-6 py-3 min-h-[44px] font-mono text-xs font-medium uppercase tracking-widest hover:opacity-90 transition-opacity duration-300"
                  >
                    Save &amp; Apply
                  </button>
                  <button
                    id="cookie-btn-back"
                    onClick={() => setShowPreferences(false)}
                    className="group relative self-center px-4 py-2.5 min-h-[44px] min-w-[44px] font-mono text-[10px] uppercase tracking-widest text-foreground hover:opacity-70 transition-colors duration-300"
                  >
                    &larr; Back
                  </button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
