"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Flame } from "lucide-react";
import { getWhatsAppLink } from "@/data/company";

interface SportCategoryItem {
  id: string;
  title: string;
  image: string;
  titlePosition: "top" | "bottom";
  tag: string;
}

const SPORT_CATEGORIES: SportCategoryItem[] = [
  {
    id: "waterfall-zipline",
    title: "Waterfall Zipline & Cascade Crossing",
    image: "/images/sports/waterfall-zipline.png",
    titlePosition: "top",
    tag: "High Altitude Thrill",
  },
  {
    id: "canyoning-abseiling",
    title: "Canyoning & Waterfall Abseiling",
    image: "/images/sports/canyoning-cliff-abseiling.png",
    titlePosition: "bottom",
    tag: "Extreme Cascade",
  },
  {
    id: "rope-swing-freefall",
    title: "Waterfall Rope Swing & Freefall",
    image: "/images/sports/rope-swing-freefall.png",
    titlePosition: "top",
    tag: "Adrenaline Rush",
  },
  {
    id: "canyon-cliff-jump",
    title: "Canyon Cliff Jump & High Flying Swing",
    image: "/images/sports/canyon-cliff-jump.png",
    titlePosition: "bottom",
    tag: "Highland Adventure",
  },
  {
    id: "flying-fox-cascade",
    title: "Waterfall Flying Fox Zipline",
    image: "/images/sports/flying-fox-cascade.jpg",
    titlePosition: "top",
    tag: "Epic Waterfall Flight",
  },
  {
    id: "diyaluma-mega-swing",
    title: "Diyaluma Falls Mega Cliff Swing",
    image: "/images/sports/diyaluma-mega-swing.jpg",
    titlePosition: "bottom",
    tag: "Gravity Defying",
  },
  {
    id: "waterfall-abseil-flight",
    title: "Vertical Rockface Abseiling",
    image: "/images/sports/waterfall-abseil-flight.jpg",
    titlePosition: "top",
    tag: "Technical Descent",
  },
  {
    id: "natural-infinity-pool",
    title: "Upper Diyaluma Natural Infinity Pool",
    image: "/images/sports/natural-infinity-pool.jpg",
    titlePosition: "bottom",
    tag: "Summit Natural Swim",
  },
];

export const SportAdventureCategoriesSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth manual scroll with left/right arrow controls
  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="sports-adventures" 
      className="pt-10 pb-14 sm:pt-14 sm:pb-16 relative overflow-hidden bg-[#FAF8F2] text-[#172334] select-none"
      aria-label="Sports and Extreme Adventures in Sri Lanka"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-6 sm:mb-8">
        {/* Header Section matching Our Journey Categories style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-[#18E600]/15 text-[#123B2A] border border-[#18E600]/30 text-[11px] font-extrabold uppercase tracking-widest mb-2 shadow-sm">
              <Flame className="w-3.5 h-3.5 text-[#123B2A]" />
              <span>Extreme Thrills &amp; Water Sports</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172334] tracking-tight leading-[1.08] mb-1.5">
              Sports &amp; Extreme Adventures.
            </h2>

            <p className="text-sm sm:text-base text-[#526173] font-normal leading-relaxed">
              Waterfall ziplines, cliff jumping, canyoning abseils, and natural infinity pool swims across Ceylon.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            {/* Manual Glide Buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <button
                onClick={() => handleScroll("left")}
                aria-label="Previous sports categories"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#18E600] text-[#172334] hover:text-[#0E6838] flex items-center justify-center shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                aria-label="Next sports categories"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#18E600] text-[#172334] hover:text-[#0E6838] flex items-center justify-center shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <a
              href={getWhatsAppLink("Hello 3C Ceylon Tours! I am interested in booking Waterfall Ziplining, Canyoning & Extreme Sports in Sri Lanka. Please share packages and pricing.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#172334] hover:bg-[#123B2A] text-white font-sans font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>Book Adventure</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#18E600]" />
            </a>
          </div>
        </div>
      </div>

      {/* Infinite Seamless Continuous Marquee Loop */}
      <div 
        className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Soft edge blur vignettes */}
        <div className="absolute top-0 left-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#FAF8F2] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#FAF8F2] to-transparent z-20 pointer-events-none" />

        {/* The Marquee Track (Strictly no scrollbar / seamless loop) */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden no-scrollbar py-2 px-3"
          style={{ scrollBehavior: "smooth" }}
        >
          <div 
            className="flex gap-5 sm:gap-7 flex-nowrap will-change-transform"
            style={{
              animation: "journey-marquee 50s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
              width: "max-content",
            }}
          >
            {/* Render items twice for 100% mathematically seamless infinite loop with translateX(-50%) */}
            {[...SPORT_CATEGORIES, ...SPORT_CATEGORIES].map((item, idx) => {
              const isTop = item.titlePosition === "top";
              const inquiryUrl = getWhatsAppLink(`Hello 3C Ceylon Tours! I want to experience "${item.title}" (${item.tag}) in Sri Lanka. Please provide details.`);

              return (
                <a
                  key={`${item.id}-${idx}`}
                  href={inquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-shrink-0 w-[270px] sm:w-[310px] md:w-[340px] flex flex-col justify-center transition-transform duration-500 hover:-translate-y-1.5 select-none"
                >
                  {/* Card Container with Alternating Title: Top vs Bottom */}
                  <div className="flex flex-col">
                    {/* TOP TITLE (If titlePosition === 'top') */}
                    {isTop && (
                      <div className="min-h-[46px] flex items-end mb-2.5 px-1">
                        <h3 className="font-sans text-lg sm:text-[20px] font-bold text-[#172334] group-hover:text-[#0E6838] transition-colors leading-snug line-clamp-2">
                          {item.title}
                        </h3>
                      </div>
                    )}

                    {/* PHOTO CARD: Pure natural image with NO filter effect */}
                    <div className="relative w-full h-[360px] sm:h-[400px] md:h-[430px] rounded-2xl overflow-hidden bg-gray-100 shadow-[0_8px_25px_rgba(0,0,0,0.06)] group-hover:shadow-[0_16px_35px_rgba(0,0,0,0.14)] transition-all duration-500 border border-black/5">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        quality={88}
                        sizes="(max-width: 768px) 270px, 340px"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Subtle hover gradient and interactive pill badge */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                        <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#18E600] text-black font-sans font-bold text-xs uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <span>Explore Sport</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      {/* Top tag badge */}
                      <div className="absolute top-3.5 left-3.5 z-10">
                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#172334] text-[11px] font-semibold tracking-wide shadow-sm border border-black/5">
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    {/* BOTTOM TITLE (If titlePosition === 'bottom') */}
                    {!isTop && (
                      <div className="min-h-[46px] flex items-start mt-2.5 px-1">
                        <h3 className="font-sans text-lg sm:text-[20px] font-bold text-[#172334] group-hover:text-[#0E6838] transition-colors leading-snug line-clamp-2">
                          {item.title}
                        </h3>
                      </div>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
