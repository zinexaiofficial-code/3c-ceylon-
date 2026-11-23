"use client";

import React from "react";
import Script from "next/script";
import { Star } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section 
      id="testimonials"
      className="py-16 sm:py-20 lg:py-24 relative bg-[#FAF8F2] text-[#172334] select-none"
      aria-label="Traveler Reviews and Testimonials"
    >
      {/* Elfsight All-in-One Reviews Platform Script (Loaded once via Next.js Script) */}
      <Script 
        src="https://elfsightcdn.com/platform.js" 
        strategy="afterInteractive" 
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1.5 rounded-full bg-[#329B38]/12 text-[#247A32] border border-[#329B38]/30 text-[11px] font-extrabold uppercase tracking-widest mb-3 shadow-xs">
            <Star className="w-3.5 h-3.5 text-[#329B38] fill-[#329B38]" />
            <span>VERIFIED REVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172334] tracking-tight leading-[1.12] mb-3">
            Loved by Travelers Worldwide
          </h2>

          <p className="text-base sm:text-lg text-[#526173] font-normal max-w-2xl mx-auto leading-relaxed">
            Real stories, genuine experiences, and unforgettable journeys shared by our travelers.
          </p>
        </div>

        {/* Elfsight All-in-One Reviews Widget Container */}
        <div className="w-full min-h-[460px] sm:min-h-[520px] flex justify-center">
          <div 
            className="elfsight-app-2b8ed7de-deb7-462b-83e9-ab8d53cfe922 w-full" 
            data-elfsight-app-lazy 
            suppressHydrationWarning
          />
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
