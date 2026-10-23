"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Compass } from "lucide-react";

interface JourneyCategoryItem {
  id: string;
  title: string;
  image: string;
  titlePosition: "top" | "bottom";
  link: string;
  tag: string;
}

const JOURNEY_CATEGORIES: JourneyCategoryItem[] = [
  {
    id: "solo-trip",
    title: "Solo Trip In Sri Lanka",
    image: "/images/journey-categories/solo-trip.png",
    titlePosition: "top",
    link: "/packages",
    tag: "Independent Explorer",
  },
  {
    id: "family-holidays",
    title: "Family Holidays Sri Lanka",
    image: "/images/journey-categories/family-holidays.png",
    titlePosition: "bottom",
    link: "/packages",
    tag: "Multi-Gen Adventure",
  },
  {
    id: "tailor-made-holidays",
    title: "Tailor Made Holidays",
    image: "/images/journey-categories/tailor-made-holidays.png",
    titlePosition: "top",
    link: "/contact",
    tag: "100% Customized",
  },
  {
    id: "honeymoon-tours",
    title: "Honeymoon Tours",
    image: "/images/journey-categories/honeymoon-tours.png",
    titlePosition: "bottom",
    link: "/packages/sri-lanka-honeymoon-luxury-beach-escape",
    tag: "Pure Romance",
  },
  {
    id: "wildlife-photography",
    title: "Wildlife Photography Tours Sri Lanka",
    image: "/images/journey-categories/wildlife-photography.png",
    titlePosition: "top",
    link: "/packages/wild-sri-lanka-safari-big-four-expedition",
    tag: "Big Four Safaris",
  },
  {
    id: "educational-holidays",
    title: "Educational Holidays In Sri Lanka",
    image: "/images/journey-categories/educational-holidays.png",
    titlePosition: "bottom",
    link: "/packages/grand-ceylon-heritage-wildlife-luxury",
    tag: "Cultural Immersion",
  },
];

export const OurJourneyCategoriesSection: React.FC = () => {
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
      id="packages" 
      className="pt-10 pb-14 sm:pt-14 sm:pb-16 relative overflow-hidden bg-[#FAF8F2] text-[#172334] select-none"
      aria-label="Our Journey Categories"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-6 sm:mb-8">
        {/* Header Section matching Iconic Destinations & Ceylon Expeditions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-[#18E600]/15 text-[#123B2A] border border-[#18E600]/30 text-[11px] font-extrabold uppercase tracking-widest mb-2 shadow-sm">
              <Compass className="w-3.5 h-3.5 text-[#123B2A]" />
              <span>Find The Best From</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172334] tracking-tight leading-[1.08] mb-1.5">
              Our Journey Categories.
            </h2>

            <p className="text-sm sm:text-base text-[#526173] font-normal leading-relaxed">
              Tailor-made luxury itineraries and specialized expeditions across the island.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            {/* Manual Glide Buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <button
                onClick={() => handleScroll("left")}
                aria-label="Previous categories"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#18E600] text-[#172334] hover:text-[#0E6838] flex items-center justify-center shadow-sm hover:shadow transition-all active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                aria-label="Next categories"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-[#18E600] text-[#172334] hover:text-[#0E6838] flex items-center justify-center shadow-sm hover:shadow transition-all active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <Link
              href="/packages"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#172334] hover:bg-[#123B2A] text-white font-sans font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <span>Explore All Tours</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#18E600]" />
            </Link>
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

        {/* The Marquee Track (Strictly no scrollbar / no timeline) */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden no-scrollbar py-2 px-3"
          style={{ scrollBehavior: "smooth" }}
        >
          <div 
            className="flex gap-5 sm:gap-7 flex-nowrap will-change-transform"
            style={{
              animation: "journey-marquee 45s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
              width: "max-content",
            }}
          >
            {/* Render items twice for 100% mathematically seamless infinite loop with translateX(-50%) */}
            {[...JOURNEY_CATEGORIES, ...JOURNEY_CATEGORIES].map((item, idx) => {
              const isTop = item.titlePosition === "top";

              return (
                <Link
                  key={`${item.id}-${idx}`}
                  href={item.link}
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
                          <span>Explore Journey</span>
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
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
