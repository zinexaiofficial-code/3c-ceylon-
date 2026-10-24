"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, X, Check, Cookie, Lock } from "lucide-react";
import { useCookieConsent } from "@/context/CookieConsentContext";

export const CookieConsent: React.FC = () => {
  const {
    consent,
    isOpen,
    acceptAll,
    rejectOptional,
    closeBanner,
    showPrivacyModal,
    openPrivacyModal,
    closePrivacyModal,
  } = useCookieConsent();

  return (
    <>
      {/* Non-intrusive Floating Cookie Consent Banner */}
      {isOpen && (
        <aside
          role="region"
          aria-label="Cookie and Privacy Preferences"
          className="fixed z-40 transition-all duration-200 ease-out animate-fade-in-quick
            bottom-24 left-3.5 right-3.5
            sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[390px] w-auto sm:w-full
            pointer-events-auto"
        >
          <div className="relative overflow-hidden rounded-2xl bg-[#070B14]/95 backdrop-blur-xl border border-white/15 p-4 sm:p-5 shadow-[0_16px_50px_rgba(0,0,0,0.65)] text-white">
            {/* Subtle luxury ambient accent glow */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-[#18E600]/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header: Icon, Title & Close Button */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                <div className="w-8 h-8 rounded-xl bg-[#18E600]/15 border border-[#18E600]/30 flex items-center justify-center flex-shrink-0 text-[#18E600]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-sans text-[15px] font-bold text-white tracking-tight leading-snug">
                    We value your privacy
                  </h3>
                  {consent && (
                    <span className="text-[10px] text-gray-400 font-medium block">
                      Current setting:{" "}
                      <span className={consent === "accepted" ? "text-[#18E600]" : "text-gray-300 font-semibold"}>
                        {consent === "accepted" ? "All Cookies Enabled" : "Optional Disabled"}
                      </span>
                    </span>
                  )}
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={closeBanner}
                aria-label="Dismiss cookie notice"
                className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10 -mr-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Consent Description */}
            <p className="mt-2.5 text-[12.5px] leading-relaxed text-gray-300 font-normal">
              We use cookies where necessary to support your browsing experience. You can accept or reject optional cookies at any time.
            </p>

            {/* Privacy Policy Link */}
            <div className="mt-2 flex items-center gap-1.5 text-[11px] text-gray-400">
              <span>Read our</span>
              <button
                type="button"
                onClick={openPrivacyModal}
                className="text-[#18E600] hover:text-[#4CEB00] underline font-medium hover:opacity-90 transition-colors focus:outline-none focus:ring-1 focus:ring-[#18E600] rounded"
              >
                Privacy Policy
              </button>
              <span>or</span>
              <Link
                href="/about#privacy"
                onClick={closeBanner}
                className="text-gray-300 hover:text-white underline font-medium transition-colors"
              >
                full details
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 grid grid-cols-2 gap-2.5 pt-1">
              <button
                type="button"
                onClick={rejectOptional}
                className="w-full px-3 py-2.5 rounded-xl border border-white/20 bg-white/[0.05] hover:bg-white/[0.12] hover:border-white/40 text-gray-200 hover:text-white text-xs font-semibold tracking-wide transition-all duration-150 active:scale-[0.98] text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                Reject Optional
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="w-full px-3 py-2.5 rounded-xl bg-[#18E600] hover:bg-[#15D400] text-black text-xs font-bold tracking-wide transition-all duration-150 shadow-[0_2px_14px_rgba(24,230,0,0.35)] hover:shadow-[0_4px_20px_rgba(24,230,0,0.5)] active:scale-[0.98] text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18E600]"
              >
                Accept All
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Accessible In-Page Privacy Policy Modal */}
      {showPrivacyModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
        >
          <div className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl bg-[#090D18] border border-white/20 p-6 sm:p-7 shadow-2xl text-white space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                <div className="w-8 h-8 rounded-xl bg-[#18E600]/15 border border-[#18E600]/30 flex items-center justify-center text-[#18E600]">
                  <Lock className="w-4 h-4" />
                </div>
                <h2 id="privacy-modal-title" className="font-sans text-lg font-bold text-white">
                  Privacy &amp; Cookie Policy
                </h2>
              </div>
              <button
                type="button"
                onClick={closePrivacyModal}
                className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close privacy modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-3.5 text-xs sm:text-[13px] text-gray-300 leading-relaxed">
              <p>
                At <strong className="text-white">3C Ceylon Tours (Pvt) Ltd</strong>, we prioritize your privacy and transparency. We operate a streamlined, privacy-respecting website designed for discerning luxury travelers.
              </p>

              <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10 space-y-2">
                <div className="flex items-center space-x-2 text-white font-semibold text-xs uppercase tracking-wider">
                  <Cookie className="w-3.5 h-3.5 text-[#18E600]" />
                  <span>How We Use Cookies &amp; Storage</span>
                </div>
                <ul className="space-y-1.5 pl-4 list-disc text-gray-300 text-xs">
                  <li>
                    <strong className="text-white">Essential Preferences:</strong> We use local storage solely to store your chosen language (<code className="text-[#18E600] bg-black/40 px-1 py-0.5 rounded">3c_locale</code>) and your cookie consent status.
                  </li>
                  <li>
                    <strong className="text-white">Third-Party Embeds:</strong> Interactive elements like Google Maps on our contact page are only activated if you accept optional services.
                  </li>
                  <li>
                    <strong className="text-white">No Tracking Pixels:</strong> We do not deploy intrusive advertising cookies, third-party remarketing pixels, or unsolicited trackers.
                  </li>
                </ul>
              </div>

              <p>
                You can review or change your cookie choices at any time by clicking <span className="text-[#18E600] font-semibold">Cookie Settings</span> located in the footer of every page.
              </p>

              <p className="text-[11px] text-gray-400 pt-1">
                For questions regarding your data or our bespoke tour arrangements, contact us at{" "}
                <a href="mailto:info@3cceylontours.com" className="text-[#18E600] underline">
                  info@3cceylontours.com
                </a>.
              </p>
            </div>

            {/* Footer Buttons */}
            <div className="pt-2 flex items-center justify-end space-x-3 rtl:space-x-reverse border-t border-white/10">
              <button
                type="button"
                onClick={closePrivacyModal}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
