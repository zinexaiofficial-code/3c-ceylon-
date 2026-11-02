"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  Sun, 
  Flower2, 
  Waves, 
  Landmark, 
  Sparkles,
  ArrowUpRight, 
  ArrowRight 
} from "lucide-react";

interface SpiritualActivityItem {
  id: string;
  name: string;
  image: string;
  badgeColor: string;
  icon: React.ElementType;
  gridSpan: string;
}

const SPIRITUAL_ACTIVITIES: SpiritualActivityItem[] = [
  {
    id: "spirit-ayurveda",
    name: "MINDFULNESS & AYURVEDA",
    image: "/images/spiritual/img_4017.webp",
    badgeColor: "#10B981", // Emerald Healing Green
    icon: Heart,
    gridSpan: "col-span-12 lg:col-span-6 h-[440px] sm:h-[480px] lg:h-[530px]",
  },
  {
    id: "spirit-hermitage",
    name: "FOREST HERMITAGE MEDITATION",
    image: "/images/spiritual/img_4014.jpg",
    badgeColor: "#F59E0B", // Saffron Gold
    icon: Sun,
    gridSpan: "col-span-12 lg:col-span-6 h-[440px] sm:h-[480px] lg:h-[530px]",
  },
  {
    id: "spirit-yoga",
    name: "RAINFOREST YOGA RETREATS",
    image: "/images/spiritual/img_4015.jpg",
    badgeColor: "#EC4899", // Lotus Pink
    icon: Flower2,
    gridSpan: "col-span-12 sm:col-span-6 lg:col-span-3 h-[400px] sm:h-[440px] lg:h-[470px]",
  },
  {
    id: "spirit-lake",
    name: "TRANQUIL LAKE SANCTUARIES",
    image: "/images/spiritual/aaa.jpg",
    badgeColor: "#06B6D4", // Serene Cyan
    icon: Waves,
    gridSpan: "col-span-12 sm:col-span-6 lg:col-span-3 h-[400px] sm:h-[440px] lg:h-[470px]",
  },
  {
    id: "spirit-monastic",
    name: "MONASTIC DHAMMA WISDOM",
    image: "/images/spiritual/img_4019.webp",
    badgeColor: "#D97706", // Monastic Ochre
    icon: Landmark,
    gridSpan: "col-span-12 sm:col-span-6 lg:col-span-3 h-[400px] sm:h-[440px] lg:h-[470px]",
  },
  {
    id: "spirit-vipassana",
    name: "VIPASSANA RETREAT CENTRES",
    image: "/images/spiritual/img_4018.jpg",
    badgeColor: "#8B5CF6", // Spiritual Purple
    icon: Sparkles,
    gridSpan: "col-span-12 sm:col-span-6 lg:col-span-3 h-[400px] sm:h-[440px] lg:h-[470px]",
  },
];

export const SpiritualActivitiesSection: React.FC = () => {
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
      id="spiritual-activities"
      className="py-14 sm:py-18 relative overflow-hidden bg-[#FAF8F2] text-[#172334]"
      aria-label="Spiritual Activities and Mindful Sanctuaries in Sri Lanka"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-1.5 rounded-full bg-[#18E600]/15 text-[#123B2A] border border-[#18E600]/30 text-xs font-extrabold uppercase tracking-widest mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#123B2A]" />
            <span>Inner Peace &amp; Sacred Wisdom</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#172334] tracking-tight leading-[1.08] mb-3">
            Spiritual Activities.
          </h2>

          <p className="text-base sm:text-lg text-[#526173] font-normal max-w-xl mx-auto">
            Mindful sanctuaries, ancient forest hermitages, and transformative holistic wellness across Ceylon.
          </p>
        </div>

        {/* Asymmetric Master Photo Grid (Matching Curated Experiences Structure) */}
        <div className="grid grid-cols-12 gap-5 sm:gap-6 lg:gap-7">
          {SPIRITUAL_ACTIVITIES.map((act, index) => {
            const IconComponent = act.icon;
            return (
              <Link
                key={act.id}
                href="/experiences"
                aria-label={`Explore ${act.name} on Experiences Page`}
                style={{
                  transitionDelay: `${index * 85}ms`,
                }}
                className={`group relative block w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 hover:border-[#18E600]/60 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18E600] ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-[0.96]"
                } ${act.gridSpan}`}
              >
                {/* Background Image with Smooth 4% Hover Zoom */}
                <Image
                  src={act.image}
                  alt={`Sri Lanka Spiritual Experience - ${act.name}`}
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

                {/* Card Content (Bottom): Circular Icon + Activity Name Only */}
                <div className="absolute bottom-5 sm:bottom-7 left-5 sm:left-7 right-5 sm:right-7 z-20 flex items-center justify-between">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    {/* Circular Experience Badge */}
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-md border border-white/25 shadow-lg transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundColor: `${act.badgeColor}33`, borderColor: `${act.badgeColor}66` }}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow" />
                    </div>

                    {/* Activity Name — ONLY THE NAME (Big Bold White Typography) */}
                    <h3 className="font-sans text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-black uppercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] leading-none select-none group-hover:text-white transition-colors">
                      {act.name}
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
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#18E600] hover:bg-[#15C800] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_4px_15px_rgba(24,230,0,0.3)] hover:shadow-[0_6px_22px_rgba(24,230,0,0.45)] transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore All Spiritual Experiences</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
