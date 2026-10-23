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
      {/* Deep Luxury Cinematic Tinted Overlay for Perfect Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85 pointer-events-none" />
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px] pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7 relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#18E600]/15 border border-[#18E600]/35 text-[#18E600] text-xs font-extrabold uppercase tracking-widest backdrop-blur-md shadow-[0_0_20px_rgba(24,230,0,0.25)]">
          <span>Sri Lanka Bespoke Concierge</span>
        </div>

        {/* Heading */}
        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] max-w-4xl mx-auto leading-tight">
          Ready to Plan Your{" "}
          <span className="text-[#18E600] drop-shadow-[0_2px_15px_rgba(24,230,0,0.4)]">
            Sri Lanka Journey?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 font-normal max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Direct WhatsApp consultation and custom private itineraries crafted for discerning travelers.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#18E600] hover:bg-[#15C800] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2.5 shadow-[0_0_30px_rgba(24,230,0,0.5)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
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
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-white/80 font-medium">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#18E600] shadow-[0_0_8px_#18E600]" />
            <span>100% Private &amp; Custom Designed</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#F59E0B]" />
            <span>SLTDA Certified Specialists</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#18E600] shadow-[0_0_8px_#18E600]" />
            <span>Direct WhatsApp Access</span>
          </div>
        </div>
      </div>
    </section>
  );
};
