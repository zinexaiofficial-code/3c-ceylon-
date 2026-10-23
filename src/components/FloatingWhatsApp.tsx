"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { getWhatsAppLink } from "@/data/company";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 rtl:space-x-reverse">
      {/* Tooltip bubble on desktop */}
      <div 
        className={`hidden sm:flex items-center space-x-2 rtl:space-x-reverse bg-[#050811]/95 text-white px-3.5 py-2 rounded-2xl shadow-2xl border border-[#25D366]/40 text-xs backdrop-blur-xl transition-all duration-300 ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        <span className="font-semibold text-white">Chat with our Concierge</span>
        <button 
          onClick={() => setShowTooltip(false)}
          className="text-gray-400 hover:text-white"
          aria-label="Dismiss tooltip"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Real WhatsApp Floating Action Button (Ceylon Expeditions Style) */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group block rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
        aria-label="Chat on WhatsApp with 3C Ceylon Tours"
      >
        {/* Subtle pulsating radar wave */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10 group-hover:opacity-70" />

        {/* Real WhatsApp Icon Image */}
        <div className="relative w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full overflow-hidden flex items-center justify-center bg-[#25D366]">
          <Image
            src="/images/whatsapp-icon.png"
            alt="WhatsApp Chat"
            width={60}
            height={60}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Online Status Green Indicator */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#18E600] border-2 border-white rounded-full shadow-sm" />
      </a>
    </div>
  );
};
