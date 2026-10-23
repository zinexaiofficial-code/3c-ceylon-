"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  SRI_LANKA_EXPERIENCE_CATEGORIES, 
  ExperienceCategory 
} from "@/data/sriLankaExperiences";
import { ExperienceCategoryCard } from "./ExperienceCategoryCard";
import { ArrowRight } from "lucide-react";

export const InteractiveSriLankaMap: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeCategory: ExperienceCategory = SRI_LANKA_EXPERIENCE_CATEGORIES[activeCategoryIndex];
  const leftCategories = SRI_LANKA_EXPERIENCE_CATEGORIES.filter((c) => c.side === "left");
  const rightCategories = SRI_LANKA_EXPERIENCE_CATEGORIES.filter((c) => c.side === "right");

  const selectCategory = (index: number) => {
    setActiveCategoryIndex(index);
  };

  return (
    <section 
      id="interactive-map"
      className="relative py-14 sm:py-18 bg-white text-[#172334] overflow-hidden select-none"
      aria-label="Discover Sri Lanka Your Way"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading matching Iconic Destinations font style */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#18E600]/15 text-[#123B2A] border border-[#18E600]/30 text-xs font-extrabold uppercase tracking-widest mb-3 shadow-sm">
            <span>Explore the Island</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#172334] tracking-tight leading-[1.08] mb-3">
            Discover Sri Lanka <span className="text-[#123B2A]">Your Way.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#526173] font-normal max-w-xl mx-auto">
            Hover over any category to view signature destinations across the island.
          </p>
        </div>

        {/* Mobile / Tablet Category Selector */}
        <div className="lg:hidden mb-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {SRI_LANKA_EXPERIENCE_CATEGORIES.map((cat, idx) => {
            const isActive = idx === activeCategoryIndex;
            return (
              <button
                key={cat.id}
                onClick={() => selectCategory(idx)}
                className={`flex items-center space-x-2.5 p-2 rounded-full border transition-all duration-300 text-left ${
                  isActive
                    ? "bg-[#9D9C3E] text-white border-[#9D9C3E] shadow-md scale-102"
                    : "bg-[#F4F4F2] text-[#222222] border-transparent hover:bg-[#ECECE8]"
                }`}
              >
                <div className={`relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 ${
                  isActive ? "ring-2 ring-white" : ""
                }`}>
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
                <span className="font-sans text-xs font-semibold truncate pr-1">
                  {cat.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3-Column Layout: Left Category Pills | Center Illustrated Map | Right Category Pills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
          {/* Left Column Categories (Desktop) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col justify-center space-y-6 sm:space-y-8">
            {leftCategories.map((cat) => {
              const overallIdx = SRI_LANKA_EXPERIENCE_CATEGORIES.findIndex((c) => c.id === cat.id);
              return (
                <ExperienceCategoryCard
                  key={cat.id}
                  category={cat}
                  isActive={overallIdx === activeCategoryIndex}
                  onClick={() => selectCategory(overallIdx)}
                  orientation="left"
                />
              );
            })}
          </div>

          {/* Center Column: Illustrated Sri Lanka Location Map */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            {/* Seamless Map Container (Floating naturally with no card box border, matching Jetwing Travels) */}
            <div className="relative w-full max-w-[460px] sm:max-w-[480px] aspect-[680/1100] mx-auto">
              {/* Illustrated Sri Lanka Location Map */}
              <Image
                src="/images/Sri-Lanka-location-map-680x1100-1.jpg"
                alt="Illustrated Sri Lanka Tourism Map - 3C Ceylon Tours"
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-contain object-center"
              />

              {/* DYNAMIC DESTINATION PINS OVERLAY */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                {activeCategory.destinations.map((dest, idx) => {
                  return (
                    <div
                      key={`${activeCategory.id}-${dest.id}`}
                      className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out animate-fade-in group/pin"
                      style={{
                        top: `${dest.top}%`,
                        left: `${dest.left}%`,
                        animationDelay: `${idx * 50}ms`
                      }}
                    >
                      {dest.labelSide === "left" ? (
                        <div className="flex items-center">
                          {/* Label Pill on Left */}
                          <span className="mr-1.5 whitespace-nowrap px-2.5 py-0.5 rounded bg-white text-[#172334] text-[11px] sm:text-xs font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.12)] border border-gray-100 transition-all duration-200 group-hover/pin:scale-105">
                            {dest.name}
                          </span>

                          {/* Pink / Magenta Dot */}
                          <div className="relative flex items-center justify-center">
                            <span className="absolute inline-flex h-4 w-4 rounded-full bg-[#E6007E]/30 animate-ping opacity-75" />
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#E6007E] border-2 border-white shadow-sm transition-transform duration-200 group-hover/pin:scale-125" />
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          {/* Pink / Magenta Dot */}
                          <div className="relative flex items-center justify-center">
                            <span className="absolute inline-flex h-4 w-4 rounded-full bg-[#E6007E]/30 animate-ping opacity-75" />
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#E6007E] border-2 border-white shadow-sm transition-transform duration-200 group-hover/pin:scale-125" />
                          </div>

                          {/* Label Pill on Right */}
                          <span className="ml-1.5 whitespace-nowrap px-2.5 py-0.5 rounded bg-white text-[#172334] text-[11px] sm:text-xs font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.12)] border border-gray-100 transition-all duration-200 group-hover/pin:scale-105">
                            {dest.name}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column Categories (Desktop) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col justify-center space-y-6 sm:space-y-8">
            {rightCategories.map((cat) => {
              const overallIdx = SRI_LANKA_EXPERIENCE_CATEGORIES.findIndex((c) => c.id === cat.id);
              return (
                <ExperienceCategoryCard
                  key={cat.id}
                  category={cat}
                  isActive={overallIdx === activeCategoryIndex}
                  onClick={() => selectCategory(overallIdx)}
                  orientation="right"
                />
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/destinations"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#18E600] hover:bg-[#15D000] text-black font-sans font-bold text-sm tracking-wide shadow-md hover:shadow-lg hover:scale-102 active:scale-98 transition-all duration-300"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
