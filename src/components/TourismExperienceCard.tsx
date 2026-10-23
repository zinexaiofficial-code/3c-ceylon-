"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface TourismExperienceCardProps {
  name: string;
  image: string;
  link: string;
  badgeColor?: string;
  icon: React.ElementType;
  className?: string;
  priority?: boolean;
  isVisible?: boolean;
  index?: number;
}

export const TourismExperienceCard: React.FC<TourismExperienceCardProps> = ({
  name,
  image,
  link,
  badgeColor = "#18E600",
  icon: IconComponent,
  className = "",
  priority = false,
  isVisible = true,
  index = 0,
}) => {
  return (
    <Link
      href={link}
      aria-label={`Explore ${name} Experience`}
      style={{
        transitionDelay: `${index * 80}ms`,
      }}
      className={`group relative block w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-[#18E600]/60 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18E600] ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-[0.96]"
      } ${className}`}
    >
      {/* Background Image with Smooth 4% Hover Zoom */}
      <Image
        src={image}
        alt={`Sri Lanka ${name}`}
        fill
        priority={priority}
        quality={88}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* Shining Light Sweep Effect on Hover (Soft diagonal sunlight reflection moving across photo) */}
      <div 
        className="pointer-events-none absolute inset-0 -translate-x-[130%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[220%] group-focus-visible:translate-x-[220%] z-20" 
        aria-hidden="true"
      />

      {/* Layer 1: Bottom Text Readability Vignette (Top 60% stays natural, bright & colorful) */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 via-40% to-transparent transition-opacity duration-500 z-10" 
        aria-hidden="true"
      />

      {/* Layer 2: Subtle Brand Glow on Hover */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-[#18E600]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Card Content (Bottom): Circular Category Icon + One Large Bold Title */}
      <div className="absolute bottom-5 sm:bottom-7 left-5 sm:left-7 right-5 sm:right-7 z-20 flex items-center justify-between">
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Circular Category Icon Badge (Matching Sri Lanka Tourism Reference) */}
          <div 
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-md border border-white/25 shadow-lg transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundColor: `${badgeColor}33`, borderColor: `${badgeColor}66` }}
          >
            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow" />
          </div>

          {/* Category Title — ONLY ONE WORD (36-48px on Desktop, 24-32px on Mobile) */}
          <h3 className="font-sans text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-extrabold uppercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] leading-none select-none group-hover:text-white transition-colors">
            {name}
          </h3>
        </div>

        {/* Micro Hover Arrow */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0">
          <ArrowUpRight className="w-5 h-5 text-white" />
        </div>
      </div>
    </Link>
  );
};
