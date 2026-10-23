"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/data/destinations";
import { MapPin, ArrowRight, Sun, Calendar, Camera } from "lucide-react";

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative h-[460px] sm:h-[500px] md:h-[530px] rounded-3xl overflow-hidden shadow-2xl block transform hover:-translate-y-2 transition-all duration-500 border border-gray-200/40 hover:border-[#18E600]/80 hover:shadow-[0_20px_45px_rgba(24,230,0,0.22)] bg-neutral-950"
    >
      {/* Background Image - High-performance Next.js AVIF/WebP with crisp 88% quality */}
      <Image
        src={destination.image}
        alt={`${destination.name} - ${destination.tagline}`}
        fill
        quality={88}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-108"
      />

      {/* Shining Light Sweep Effect on Hover (Inspired by Into the Wild & Beyond) */}
      <div 
        className="pointer-events-none absolute inset-0 -translate-x-[140%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[240%] z-20" 
        aria-hidden="true"
      />

      {/* Layered Gradient Overlay - Preserves image brightness at top, deep contrast at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300 group-hover:via-black/50 z-10" />

      {/* Top Badges (Province + Gallery Count) */}
      <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between">
        <span className="px-3.5 py-1.5 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-black/75 text-[#18E600] border border-[#18E600]/40 backdrop-blur-md flex items-center space-x-1.5 shadow-md">
          <MapPin className="w-3.5 h-3.5 text-[#18E600]" />
          <span>{destination.province}</span>
        </span>

        {destination.gallery && destination.gallery.length > 0 && (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 text-white/90 border border-white/20 backdrop-blur-md flex items-center space-x-1 shadow-sm">
            <Camera className="w-3 h-3 text-[#18E600]" />
            <span>{destination.gallery.length} Photos</span>
          </span>
        )}
      </div>

      {/* Content Container (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 z-20 text-white transform transition-transform duration-300">
        <h3 className="text-2xl sm:text-[28px] font-black text-white tracking-tight mb-2 group-hover:text-[#18E600] transition-colors leading-tight drop-shadow-md">
          {destination.name}
        </h3>
        
        <p className="text-xs sm:text-sm text-white/85 font-medium line-clamp-2 mb-4 leading-relaxed drop-shadow">
          {destination.tagline}
        </p>

        {/* Info pills */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-white/90 font-semibold mb-5">
          <span className="flex items-center space-x-1 bg-black/45 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
            <Sun className="w-3.5 h-3.5 text-amber-300" />
            <span>{destination.weather.split("(")[0]}</span>
          </span>
          <span className="flex items-center space-x-1 bg-black/45 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
            <Calendar className="w-3.5 h-3.5 text-[#18E600]" />
            <span>Stay: {destination.idealStay}</span>
          </span>
        </div>

        {/* Discover Button */}
        <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#18E600] group-hover:text-white transition-colors">
          <span>Explore Destination Guide</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform rtl:group-hover:-translate-x-1.5" />
        </div>
      </div>
    </Link>
  );
};
