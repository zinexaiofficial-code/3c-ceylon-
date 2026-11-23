"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/data/company";

export const ReadyToPlanSection: React.FC = () => {
  return (
    <section 
      id="concierge" 
      className="relative py-24 sm:py-32 bg-fixed bg-cover bg-center overflow-hidden text-white select-none"
      style={{ 
        backgroundImage: "url('/images/tiny-planet-buddha.png')",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Plan Your Sri Lanka Journey"
    >
      {/* Content Container with Frosted Glass for Pure Image Brightness */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-black/45 backdrop-blur-md border border-white/20 text-center space-y-7 shadow-2xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#91B58A]/20 border border-[#91B58A]/40 text-[#D97706] text-xs font-extrabold uppercase tracking-widest backdrop-blur-md shadow-sm">
            <span>Sri Lanka Bespoke Concierge</span>
          </div>

          {/* Heading */}
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] max-w-4xl mx-auto leading-tight">
            Ready to Plan Your{" "}
            <span className="text-[#91B58A] [text-shadow:_0_2px_10px_rgba(0,0,0,0.9)]">
              Sri Lanka Journey?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-white/95 font-normal max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Direct WhatsApp consultation and custom private itineraries crafted for discerning travelers.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#476A4C] hover:bg-[#38553C] text-white font-extrabold text-xs uppercase tracking-wider border border-[#91B58A]/40 flex items-center justify-center space-x-2.5 shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp (24/7)</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/30 hover:border-white/60 backdrop-blur-md transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95"
            >
              Submit Custom Tour Request
            </Link>
          </div>

          {/* Luxury Service Highlights */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-white/90 font-medium">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#91B58A]" />
              <span>100% Private &amp; Custom Designed</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#F59E0B]" />
              <span>SLTDA Certified Specialists</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#91B58A]" />
              <span>Direct WhatsApp Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
