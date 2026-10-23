"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { getWhatsAppLink } from "@/data/company";
import { ContactForm } from "@/components/ContactForm";
import { 
  MessageCircle, 
  Calendar, 
  ShieldCheck, 
  Compass, 
  Clock, 
  X,
  Car
} from "lucide-react";

interface PackageBookingSidebarProps {
  packageTitle: string;
  packageSlug: string;
  durationDays: number;
  durationNights: number;
}

export const PackageBookingSidebar: React.FC<PackageBookingSidebarProps> = ({
  packageTitle,
  packageSlug,
  durationDays,
  durationNights,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on ESC key press & lock body scroll when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const modalContent = isModalOpen && (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto bg-black/80 backdrop-blur-lg animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsModalOpen(false);
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="max-w-3xl w-full bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-gray-200/90 relative my-auto text-[#172334] max-h-[90vh] overflow-y-auto">
        
        {/* Close Button (X) */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 text-[#172334] flex items-center justify-center transition-colors shadow-sm cursor-pointer z-20"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5 text-[#172334]" />
        </button>

        {/* Modal Header */}
        <div className="pr-12 mb-6 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#18E600]/15 text-[#0E6838] text-xs font-extrabold uppercase tracking-wider">
            <span>Tailored Private Proposal</span>
          </div>
          
          <h2 id="modal-title" className="font-sans text-2xl sm:text-3xl font-extrabold text-[#172334] tracking-tight leading-snug">
            Customize Your Journey: {packageTitle}
          </h2>
          
          <p className="text-xs sm:text-sm text-[#526173] leading-relaxed font-normal">
            Tell us your preferred dates and travel party. Our local Ceylon travel architects will prepare a personalized itinerary with private chauffeur and handpicked accommodations.
          </p>
        </div>

        {/* Roomy Form */}
        <div className="pt-2">
          <ContactForm 
            initialPackageTitle={packageTitle}
            onSuccess={() => {
              setTimeout(() => {
                setIsModalOpen(false);
              }, 2500);
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          STICKY SIDEBAR CARD (Clean, Professional, Non-Cramped)
         ───────────────────────────────────────────────────────────── */}
      <div className="sticky top-28 space-y-6 select-none">
        <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-gray-200/90 space-y-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0E6838] block">
              100% Private Tour
            </span>
            <h3 className="font-sans text-2xl font-black text-[#172334] tracking-tight mt-1">
              Book This Expedition
            </h3>
            <p className="text-xs text-[#526173] leading-relaxed mt-2 font-normal">
              Tailored specifically to your dates, party size, and preferred hotels with dedicated private chauffeur.
            </p>
          </div>

          {/* Direct Action Buttons */}
          <div className="space-y-3 pt-2">
            {/* WhatsApp Quick Chat */}
            <a
              href={getWhatsAppLink(undefined, packageTitle)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-4 rounded-full bg-[#18E600] hover:bg-[#15D600] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-[0_4px_20px_rgba(24,230,0,0.4)] transition-all hover:scale-102 active:scale-95 text-center cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-black flex-shrink-0" />
              <span>Inquire on WhatsApp</span>
            </a>

            {/* Request Custom Proposal - Opens Professional Modal */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-3.5 px-4 rounded-full bg-[#172334] hover:bg-[#123B2A] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-sm transition-all hover:scale-102 active:scale-95 text-center cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#18E600] flex-shrink-0" />
              <span>Request Custom Proposal</span>
            </button>
          </div>

          {/* Quick Tour Highlights Summary */}
          <div className="p-3.5 rounded-2xl bg-[#F4F9F5] border border-[#18E600]/30 text-xs text-[#123B2A] font-semibold space-y-1.5">
            <div className="flex items-center justify-between">
              <span>Duration:</span>
              <strong className="text-[#0E6838]">{durationNights}N / {durationDays}D</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>Transportation:</span>
              <strong className="text-[#0E6838]">Dedicated AC Vehicle</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>Flexibility:</span>
              <strong className="text-[#0E6838]">100% Customizable</strong>
            </div>
          </div>

          {/* Trust Guarantee List */}
          <div className="pt-4 border-t border-gray-100 space-y-2.5 text-xs text-[#526173]">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <ShieldCheck className="w-4 h-4 text-[#0E6838] flex-shrink-0" />
              <span>100% Private tour with dedicated chauffeur</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Compass className="w-4 h-4 text-[#0E6838] flex-shrink-0" />
              <span>Flexible dates &amp; customizable stops</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Clock className="w-4 h-4 text-[#0E6838] flex-shrink-0" />
              <span>Instant response from local travel specialist</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          PORTAL POPUP MODAL (Rendered directly on document.body, z-[9999])
          Completely covers the Navbar, floating elements, and page.
         ───────────────────────────────────────────────────────────── */}
      {mounted && typeof document !== "undefined" && modalContent
        ? createPortal(modalContent, document.body)
        : null}
    </>
  );
};
