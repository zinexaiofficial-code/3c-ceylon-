"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TravelExperience } from "@/data/experiences";
import { 
  ArrowRight, 
  Clock, 
  CheckCircle2,
  Compass,
  Landmark,
  Palmtree,
  Heart,
  Mountain,
  Users,
  Crown,
  Sliders
} from "lucide-react";

const ICONS: Record<string, React.ElementType> = {
  Compass,
  Landmark,
  Palmtree,
  Heart,
  Mountain,
  Users,
  Crown,
  Sliders,
};

interface ExperienceCardProps {
  exp: TravelExperience;
  variant?: "light" | "dark";
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, variant = "light" }) => {
  const IconComponent = ICONS[exp.iconName] || Compass;
  const isLight = variant === "light";

  return (
    <div className={`group rounded-3xl overflow-hidden transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1.5 ${
      isLight
        ? "bg-white border border-gray-200/80 hover:border-[#123B2A]/40 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]"
        : "bg-[#060B14]/85 backdrop-blur-xl border border-white/10 hover:border-[#18F000]/50 shadow-2xl hover:shadow-[0_10px_35px_rgba(24,240,0,0.14)]"
    }`}>
      {/* Visual Header */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-black">
        <Image
          src={exp.image}
          alt={exp.title}
          fill
          quality={88}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Shining Light Sweep Effect on Hover (Inspired by Into the Wild & Beyond) */}
        <div 
          className="pointer-events-none absolute inset-0 -translate-x-[140%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[240%] z-20" 
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Floating Category Icon */}
        <div className="absolute top-4 left-4 z-10 p-2.5 rounded-full bg-black/70 border border-[#18E600]/40 text-[#18E600] shadow-lg backdrop-blur-md">
          <IconComponent className="w-5 h-5 text-[#18E600]" />
        </div>

        {/* Duration Badge */}
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold bg-black/70 text-white border border-white/15 backdrop-blur-md flex items-center space-x-1">
          <Clock className="w-3.5 h-3.5 text-[#18E600]" />
          <span>{exp.recommendedDuration}</span>
        </div>

        {/* Tagline Over Image */}
        <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
          <p className="text-xs font-semibold text-[#18E600] tracking-wide line-clamp-1 drop-shadow">
            {exp.tagline}
          </p>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <h3 className={`text-xl sm:text-2xl font-extrabold tracking-tight leading-snug transition-colors ${
            isLight ? "text-[#172334] group-hover:text-[#123B2A]" : "text-white group-hover:text-[#18E600]"
          }`}>
            {exp.title}
          </h3>

          <p className={`text-xs sm:text-sm line-clamp-3 leading-relaxed font-normal ${
            isLight ? "text-[#526173]" : "text-gray-300"
          }`}>
            {exp.shortDesc}
          </p>

          {/* Top 3 Highlights */}
          <ul className={`space-y-1.5 pt-3 border-t ${isLight ? "border-gray-100" : "border-white/10"}`}>
            {exp.topHighlights.slice(0, 3).map((hl, i) => (
              <li key={i} className={`flex items-start space-x-2 rtl:space-x-reverse text-xs ${
                isLight ? "text-[#526173]" : "text-gray-300"
              }`}>
                <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                  isLight ? "text-[#123B2A]" : "text-[#0BFF01]"
                }`} />
                <span className="line-clamp-1">{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Link */}
        <div className={`pt-3 border-t flex items-center justify-between ${isLight ? "border-gray-100" : "border-white/10"}`}>
          <Link
            href={`/packages/${exp.featuredPackageSlug}`}
            className={`text-xs font-bold flex items-center space-x-1.5 transition-colors ${
              isLight ? "text-[#123B2A] hover:text-[#0E6838]" : "text-gray-300 hover:text-[#0BFF01]"
            }`}
          >
            <span>Explore Related Tour</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#18E600]" />
          </Link>

          <Link
            href={`/contact?experience=${encodeURIComponent(exp.title)}`}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              isLight
                ? "bg-gray-100 hover:bg-[#18E600] text-[#123B2A] hover:text-black border border-gray-200"
                : "bg-[#0BFF01]/10 hover:bg-[#0BFF01] text-[#0BFF01] hover:text-black border border-[#0BFF01]/30"
            }`}
          >
            Inquire
          </Link>
        </div>
      </div>
    </div>
  );
};
