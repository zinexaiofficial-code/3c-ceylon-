"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  Landmark, 
  Flame, 
  Palmtree, 
  Users, 
  ArrowUpRight, 
  ArrowRight 
} from "lucide-react";

interface CuratedExperienceItem {
  id: string;
  name: string;
  slug: string;
  image: string;
  badgeColor: string;
  icon: React.ElementType;
  gridSpan: string;
}

const CURATED_EXPERIENCES: CuratedExperienceItem[] = [
  {
    id: "exp-honeymoon",
    name: "HONEYMOON & ROMANCE",
    slug: "honeymoon-romance",
    image: "/images/experiences/curated/honeymoon-escapes.png",
    badgeColor: "#EC4899",
    icon: Heart,
    gridSpan: "col-span-12 lg:col-span-6 h-[440px] sm:h-[480px] lg:h-[530px]",
  },
  {
    id: "exp-heritage",
    name: "CULTURAL HERITAGE",
    slug: "cultural-heritage",
    image: "/images/experiences/curated/cultural-heritage.png",
    badgeColor: "#F59E0B",
    icon: Landmark,
    gridSpan: "col-span-12 lg:col-span-6 h-[440px] sm:h-[480px] lg:h-[530px]",
  },
  {
    id: "exp-adventure",
    name: "ADVENTURE & EXPEDITIONS",
    slug: "adventure-travel",
    image: "/images/experiences/curated/adventure-active.png",
    badgeColor: "#EF4444",
    icon: Flame,
    gridSpan: "col-span-12 sm:col-span-6 lg:col-span-3 h-[400px] sm:h-[440px] lg:h-[470px]",
  },
  {
    id: "exp-beaches",
    name: "TROPICAL BEACHES",
    slug: "beach-holidays",
    image: "/images/experiences/curated/tropical-beaches.png",
    badgeColor: "#06B6D4",
    icon: Palmtree,
    gridSpan: "col-span-12 sm:col-span-6 lg:col-span-3 h-[400px] sm:h-[440px] lg:h-[470px]",
  },
  {
    id: "exp-ruins",
    name: "ANCIENT SACRED RUINS",
    slug: "cultural-heritage",
    image: "/images/experiences/curated/ancient-ruins.png",
    badgeColor: "#EAB308",
    icon: Landmark,
    gridSpan: "col-span-12 sm:col-span-6 lg:col-span-3 h-[400px] sm:h-[440px] lg:h-[470px]",
  },
  {
    id: "exp-family",
    name: "FAMILY & MULTI-GEN",
    slug: "family-holidays",
    image: "/images/experiences/curated/family-holidays.png",
    badgeColor: "#10B981",
    icon: Users,
    gridSpan: "col-span-12 sm:col-span-6 lg:col-span-3 h-[400px] sm:h-[440px] lg:h-[470px]",
  },
];

export const CuratedExperiencesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tailor-made"
      className="py-14 sm:py-18 relative overflow-hidden bg-[#F7F9F6] text-[#172334]"
      aria-label="Curated Travel Experiences"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-1.5 rounded-full bg-[#18E600]/15 text-[#123B2A] border border-[#18E600]/30 text-xs font-extrabold uppercase tracking-widest mb-3 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-[#123B2A]" />
            <span>Tailored To Your Passion</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#172334] tracking-tight leading-[1.08] mb-3">
            Curated Experiences.
          </h2>

          <p className="text-base sm:text-lg text-[#526173] font-normal max-w-xl mx-auto">
            Private journeys shaped around what moves you.
          </p>
        </div>

        {/* Asymmetric Master Photo Grid (Inspired by Into the Wild & Beyond) */}
        <div className="grid grid-cols-12 gap-5 sm:gap-6 lg:gap-7">
          {CURATED_EXPERIENCES.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <Link
                key={exp.id}
                href={`/experiences#${exp.slug}`}
                aria-label={`Explore ${exp.name} Experience`}
                style={{
                  transitionDelay: `${index * 85}ms`,
                }}
                className={`group relative block w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 hover:border-[#18E600]/60 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18E600] ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-[0.96]"
                } ${exp.gridSpan}`}
              >
                {/* Background Image with Smooth 4% Hover Zoom */}
                <Image
                  src={exp.image}
                  alt={`Sri Lanka Experience - ${exp.name}`}
                  fill
                  quality={88}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Shining Light Sweep Effect on Hover (Soft diagonal sunlight reflection moving across photo) */}
                <div
                  className="pointer-events-none absolute inset-0 -translate-x-[130%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[220%] group-focus-visible:translate-x-[220%] z-20"
                  aria-hidden="true"
                />

                {/* Layer 1: Bottom Text Readability Vignette (Top 65% stays natural, bright & colorful) */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 via-40% to-transparent transition-opacity duration-500 z-10"
                  aria-hidden="true"
                />

                {/* Layer 2: Subtle Brand Glow on Hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#18E600]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Card Content (Bottom): Circular Icon + Experience Name Only */}
                <div className="absolute bottom-5 sm:bottom-7 left-5 sm:left-7 right-5 sm:right-7 z-20 flex items-center justify-between">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    {/* Circular Experience Badge */}
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-md border border-white/25 shadow-lg transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundColor: `${exp.badgeColor}33`, borderColor: `${exp.badgeColor}66` }}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow" />
                    </div>

                    {/* Experience Name — ONLY THE NAME (Big Bold White Typography) */}
                    <h3 className="font-sans text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-black uppercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] leading-none select-none group-hover:text-white transition-colors">
                      {exp.name}
                    </h3>
                  </div>

                  {/* Micro Hover Arrow */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0 shadow-md">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Experiences Button */}
        <div className="text-center mt-12 sm:mt-14">
          <Link
            href="/experiences"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#18E600] hover:bg-[#15C800] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_4px_15px_rgba(24,230,0,0.3)] hover:shadow-[0_6px_22px_rgba(24,230,0,0.45)] transform hover:-translate-y-0.5"
          >
            <span>Explore All Travel Experiences</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
