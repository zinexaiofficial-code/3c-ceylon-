"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TourPackage } from "@/data/packages";
import { 
  Clock, 
  MapPin, 
  ArrowRight, 
  ShieldCheck,
  Compass
} from "lucide-react";

interface PackageCardProps {
  pkg: TourPackage;
  variant?: "light" | "dark";
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className="group relative h-[460px] sm:h-[500px] md:h-[530px] rounded-3xl overflow-hidden shadow-2xl block transform hover:-translate-y-2 transition-all duration-500 border border-gray-200/40 hover:border-[#045965]/80 hover:shadow-[0_20px_45px_rgba(4,89,101,0.22)] bg-neutral-950 select-none"
    >
      {/* Background Image - Natural brightness, vibrant colors, no dark filters */}
      <Image
        src={pkg.image}
        alt={`${pkg.title} - ${pkg.subtitle}`}
        fill
        quality={88}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-108"
      />

      {/* Shining Light Sweep Effect on Hover (Matching Destination Card) */}
      <div 
        className="pointer-events-none absolute inset-0 -translate-x-[140%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[240%] z-20" 
        aria-hidden="true"
      />

      {/* Top Badges (Matching Destination Card brightness) */}
      <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between">
        {/* Style / Tour Type Badge */}
        <span className="px-3.5 py-1.5 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-black/60 text-[#D97706] border border-[#045965]/40 backdrop-blur-md flex items-center space-x-1.5 shadow-md">
          <Compass className="w-3.5 h-3.5 text-[#D97706]" />
          <span>{pkg.style}</span>
        </span>

        {/* Duration Badge */}
        <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-black/60 text-white border border-white/20 backdrop-blur-md flex items-center space-x-1.5 shadow-md">
          <Clock className="w-3.5 h-3.5 text-[#D97706]" />
          <span>{pkg.durationNights}N / {pkg.durationDays}D</span>
        </span>
      </div>

      {/* Content Container (Bottom) - High-contrast frosted glass pill for readability without darkening the whole image */}
      <div className="absolute bottom-4 left-4 right-4 p-5 sm:p-6 z-20 text-white rounded-2xl bg-black/55 backdrop-blur-md border border-white/15 transform transition-transform duration-300">
        
        {/* Trust Pill */}
        <div className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-wider text-[#D97706] mb-1.5 drop-shadow">
          <ShieldCheck className="w-3.5 h-3.5 text-[#D97706]" />
          <span>Private Chauffeur Tour</span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-1.5 group-hover:text-[#D97706] transition-colors leading-tight drop-shadow-md">
          {pkg.title}
        </h3>
        
        {/* Subtitle / Tagline */}
        <p className="text-xs sm:text-sm text-white/90 font-medium line-clamp-2 mb-3 leading-relaxed drop-shadow">
          {pkg.subtitle}
        </p>

        {/* Route / Destinations Covered Pills */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] text-white/95 font-semibold mb-3.5">
          <div className="flex items-center space-x-1.5 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 shadow-sm max-w-full">
            <MapPin className="w-3.5 h-3.5 text-[#D97706] flex-shrink-0" />
            <span className="truncate">
              {pkg.destinationsCovered.join(" → ")}
            </span>
          </div>
        </div>

        {/* Call-to-action Button Row */}
        <div className="flex items-center justify-between pt-2 border-t border-white/15">
          <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#D97706] group-hover:text-white transition-colors">
            <span>Explore Tour in Details</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform rtl:group-hover:-translate-x-1.5" />
          </div>

          <span className="text-[10px] uppercase font-bold text-white/80 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/15">
            Customizable
          </span>
        </div>
      </div>
    </Link>
  );
};
