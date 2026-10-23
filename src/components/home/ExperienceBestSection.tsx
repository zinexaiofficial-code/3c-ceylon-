"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ListChecks, Route, ThumbsUp, ArrowRight } from "lucide-react";

export const ExperienceBestSection: React.FC = () => {
  return (
    <section 
      id="experience-the-best"
      className="py-14 sm:py-20 relative overflow-hidden bg-[#FAF8F2] text-[#172334] select-none"
      aria-label="Experience The Best In Travel"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Ceylon Expeditions */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-[#18E600]/15 text-[#123B2A] border border-[#18E600]/30 text-[11px] font-extrabold uppercase tracking-widest mb-2.5 shadow-sm">
            <span>Why Choose Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#172334] tracking-tight leading-[1.08] mb-3">
            Experience The Best In Travel.
          </h2>

          <p className="text-sm sm:text-base text-[#526173] font-normal max-w-xl mx-auto">
            Bespoke itineraries, licensed chauffeur guides, and unmatched local expertise across Sri Lanka.
          </p>
        </div>

        {/* 6-Block Checkerboard Alternating Mosaic Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          
          {/* ─────────────────────────────────────────────────────────────
              ROW 1 - SLOT 1: IMAGE 1 (Tuk-Tuk Adventure at Sigiriya)
             ───────────────────────────────────────────────────────────── */}
          <div className="group relative h-[320px] sm:h-[350px] lg:h-[380px] rounded-3xl overflow-hidden bg-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-black/5">
            <Image
              src="/images/experience-best/tuk-tuk-sigiriya.png"
              alt="Tuk-Tuk Adventure at Sigiriya Rock Fortress with 3C Ceylon Tours"
              fill
              quality={88}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white text-xs font-bold uppercase tracking-wider">
                Sigiriya &amp; Cultural Triangle
              </span>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              ROW 1 - SLOT 2: TEXT CARD 1 (Tailor-Made Experiences)
             ───────────────────────────────────────────────────────────── */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/70 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-center items-center text-center group">
            {/* Golden Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#D97706] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <ListChecks className="w-7 h-7 text-[#D97706]" />
            </div>

            <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#172334] tracking-tight leading-snug mb-3">
              Tailor-Made Experiences
            </h3>

            <p className="text-xs sm:text-sm text-[#526173] leading-relaxed font-normal">
              We craft personalized, off-the-shelf-free itineraries from family, senior, or honeymoon tours to wildlife photography and cultural immersion, promising your trip feels uniquely yours.
            </p>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              ROW 1 - SLOT 3: IMAGE 2 (Couple at a Vibrant Buddhist Stupa)
             ───────────────────────────────────────────────────────────── */}
          <div className="group relative h-[320px] sm:h-[350px] lg:h-[380px] rounded-3xl overflow-hidden bg-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-black/5">
            <Image
              src="/images/experience-best/stupa-couple.png"
              alt="Couple at a Vibrant Buddhist Stupa in Sri Lanka with 3C Ceylon Tours"
              fill
              quality={88}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white text-xs font-bold uppercase tracking-wider">
                Sacred Heritage &amp; Spiritual Wonders
              </span>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              ROW 2 - SLOT 4: TEXT CARD 2 (Trusted Expertise)
             ───────────────────────────────────────────────────────────── */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/70 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-center items-center text-center group">
            {/* Golden Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#D97706] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Route className="w-7 h-7 text-[#D97706]" />
            </div>

            <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#172334] tracking-tight leading-snug mb-3">
              Trusted Expertise
            </h3>

            <p className="text-xs sm:text-sm text-[#526173] leading-relaxed font-normal">
              Our locally owned, Sri Lankan Tourist Board-approved team combines decade-long wildlife, nature, and cultural expertise with professionalism to deliver safe, reliable, deeply informed journeys.
            </p>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              ROW 2 - SLOT 5: IMAGE 3 (Tropical Waterfall Viewpoint and Pink Bus)
             ───────────────────────────────────────────────────────────── */}
          <div className="group relative h-[320px] sm:h-[350px] lg:h-[380px] rounded-3xl overflow-hidden bg-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-black/5">
            <Image
              src="/images/experience-best/waterfall-viewpoint.png"
              alt="Tropical Waterfall Viewpoint in Central Highlands Sri Lanka with 3C Ceylon Tours"
              fill
              quality={88}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white text-xs font-bold uppercase tracking-wider">
                Highland Waterfalls &amp; Tea Trails
              </span>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              ROW 2 - SLOT 6: TEXT CARD 3 (Award-Winning Service)
             ───────────────────────────────────────────────────────────── */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/70 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-center items-center text-center group">
            {/* Golden Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#D97706] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <ThumbsUp className="w-7 h-7 text-[#D97706]" />
            </div>

            <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#172334] tracking-tight leading-snug mb-3">
              Award-Winning Service
            </h3>

            <p className="text-xs sm:text-sm text-[#526173] leading-relaxed font-normal">
              We uphold world-class service standards with licensed chauffeur-guides, modern luxury transport fleet, and a responsible tourism ethos, ensuring every guest is treated with exceptional care.
            </p>
          </div>

        </div>

        {/* Bottom CTA to plan journey */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#172334] hover:bg-[#123B2A] text-white font-sans font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <span>Plan Your Bespoke Ceylon Journey</span>
            <ArrowRight className="w-4 h-4 text-[#18E600]" />
          </Link>
        </div>

      </div>
    </section>
  );
};
