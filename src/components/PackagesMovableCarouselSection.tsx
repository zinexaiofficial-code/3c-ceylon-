"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Compass, Clock, MapPin, Sparkles } from "lucide-react";
import { TOUR_PACKAGES } from "@/data/packages";

export const PackagesMovableCarouselSection: React.FC = () => {
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
      id="movable-packages" 
      className="pt-12 pb-14 sm:pt-16 sm:pb-16 relative overflow-hidden bg-[#FAF8F2] text-[#172334] select-none border-b border-gray-200/60"
      aria-label="Our Handcrafted Tour Packages Carousel"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-6 sm:mb-8">
        {/* Header Section matching Our Journey Categories format */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-[#18E600]/15 text-[#123B2A] border border-[#18E600]/30 text-[11px] font-extrabold uppercase tracking-widest mb-2 shadow-sm">
              <Compass className="w-3.5 h-3.5 text-[#123B2A]" />
              <span>Explore All Handcrafted Journeys</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172334] tracking-tight leading-[1.08] mb-1.5">
              Our Journey Packages.
            </h2>

            <p className="text-sm sm:text-base text-[#526173] font-normal leading-relaxed">
              Bespoke private itineraries, dedicated chauffeur-guides, and authentic encounters across the island.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            {/* Manual Glide Buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <button
                onClick={() => handleScroll("left")}
                aria-label="Previous packages"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#18E600] text-[#172334] hover:text-[#0E6838] flex items-center justify-center shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                aria-label="Next packages"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#18E600] text-[#172334] hover:text-[#0E6838] flex items-center justify-center shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <a
              href="#packages-grid"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#172334] hover:bg-[#123B2A] text-white font-sans font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>Filter Packages</span>
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
        {/* The Marquee Track */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden no-scrollbar py-2 px-3"
          style={{ scrollBehavior: "smooth" }}
        >
          <div 
            className="flex gap-5 sm:gap-7 flex-nowrap will-change-transform"
            style={{
              animation: "journey-marquee 60s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
              width: "max-content",
            }}
          >
            {/* Render items twice for 100% mathematically seamless infinite loop with translateX(-50%) */}
            {[...TOUR_PACKAGES, ...TOUR_PACKAGES].map((pkg, idx) => {
              const isTop = idx % 2 === 0;

              return (
                <Link
                  key={`${pkg.id}-${idx}`}
                  href={`/packages/${pkg.slug}`}
                  className="group relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] flex flex-col justify-center transition-transform duration-500 hover:-translate-y-1.5 select-none"
                >
                  {/* Card Container with Alternating Title: Top vs Bottom */}
                  <div className="flex flex-col">
                    {/* TOP TITLE (If isTop === true) */}
                    {isTop && (
                      <div className="min-h-[52px] flex items-end mb-2.5 px-1">
                        <div>
                          <h3 className="font-sans text-base sm:text-lg font-bold text-[#172334] group-hover:text-[#0E6838] transition-colors leading-snug line-clamp-1">
                            {pkg.title}
                          </h3>
                          <p className="text-xs text-[#526173] font-medium line-clamp-1 mt-0.5">
                            {pkg.subtitle}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* PHOTO CARD - Crystal Clear, High Definition, No Dark Fog / No Blur */}
                    <div className="relative w-full h-[360px] sm:h-[400px] md:h-[430px] rounded-2xl overflow-hidden bg-gray-100 shadow-[0_8px_25px_rgba(0,0,0,0.06)] group-hover:shadow-[0_16px_35px_rgba(0,0,0,0.14)] transition-all duration-500 border border-black/5">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        quality={95}
                        sizes="(max-width: 768px) 100vw, 700px"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Top Badges (Duration & Travel Style) */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between pointer-events-none">
                        <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[#18E600] border border-[#18E600]/40 text-[11px] font-extrabold tracking-wide shadow-md flex items-center space-x-1">
                          <Clock className="w-3 h-3 text-[#18E600]" />
                          <span>{pkg.durationNights}N / {pkg.durationDays}D</span>
                        </span>

                        <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#172334] text-[10px] font-bold tracking-tight shadow-sm border border-black/5 line-clamp-1 max-w-[150px]">
                          {pkg.style}
                        </span>
                      </div>

                      {/* Bottom Destinations Floating Pill - Clean, crisp, no dark gradient veil covering photo */}
                      <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none flex items-center">
                        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-sm text-white/95 text-[10px] sm:text-[11px] font-semibold border border-white/15 shadow-md truncate max-w-full">
                          <MapPin className="w-3 h-3 text-[#18E600] flex-shrink-0" />
                          <span className="truncate">{pkg.destinationsCovered.slice(0, 4).join(" • ")}{pkg.destinationsCovered.length > 4 ? " +" : ""}</span>
                        </span>
                      </div>

                      {/* Interactive Hover CTA Pill - Subtle accent, photo stays 100% visible */}
                      <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-20 pointer-events-none">
                        <span className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#18E600] text-black font-sans font-extrabold text-xs uppercase tracking-wider shadow-2xl transform scale-95 group-hover:scale-100 transition-transform duration-300">
                          <span>View Itinerary</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    {/* BOTTOM TITLE (If isTop === false) */}
                    {!isTop && (
                      <div className="min-h-[52px] flex items-start mt-2.5 px-1">
                        <div>
                          <h3 className="font-sans text-base sm:text-lg font-bold text-[#172334] group-hover:text-[#0E6838] transition-colors leading-snug line-clamp-1">
                            {pkg.title}
                          </h3>
                          <p className="text-xs text-[#526173] font-medium line-clamp-1 mt-0.5">
                            {pkg.subtitle}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
