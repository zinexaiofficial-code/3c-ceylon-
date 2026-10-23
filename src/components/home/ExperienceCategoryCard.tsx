"use client";

import React from "react";
import Image from "next/image";
import { ExperienceCategory } from "@/data/sriLankaExperiences";

interface ExperienceCategoryCardProps {
  category: ExperienceCategory;
  isActive: boolean;
  onClick: () => void;
  orientation?: "left" | "right";
}

export const ExperienceCategoryCard: React.FC<ExperienceCategoryCardProps> = ({
  category,
  isActive,
  onClick,
  orientation = "left",
}) => {
  const isRight = orientation === "right";

  return (
    <button
      onClick={onClick}
      onMouseEnter={onClick}
      onFocus={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      role="tab"
      aria-selected={isActive}
      tabIndex={0}
      className={`group relative w-full flex items-center transition-all duration-300 outline-none select-none ${
        isRight ? "flex-row text-left justify-end" : "flex-row text-left justify-start"
      }`}
    >
      {/* LEFT SIDE: Circle on the Left, Pill extends to the Right */}
      {!isRight && (
        <>
          {/* Circle Image Icon */}
          <div
            className={`relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 transition-all duration-300 ${
              isActive
                ? "ring-2 ring-offset-2 ring-[#E6007E] scale-105 shadow-md"
                : "border-2 border-white shadow group-hover:scale-105"
            }`}
          >
            <Image
              src={category.image}
              alt={category.alt}
              fill
              quality={88}
              sizes="(max-width: 640px) 64px, 80px"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Pill Container */}
          <div
            className={`-ml-6 pl-9 pr-6 py-3.5 sm:py-4 rounded-r-full transition-all duration-300 flex-1 flex items-center ${
              isActive
                ? "bg-[#9D9C3E] text-white shadow-md"
                : "bg-[#F4F4F2] text-[#222222] group-hover:bg-[#ECECE8]"
            }`}
          >
            <span className="font-sans text-[15px] sm:text-base md:text-[17px] font-semibold tracking-tight whitespace-nowrap">
              {category.title}
            </span>
          </div>
        </>
      )}

      {/* RIGHT SIDE: Pill extends to the Left, Circle on the Right */}
      {isRight && (
        <>
          {/* Pill Container */}
          <div
            className={`-mr-6 pr-9 pl-6 py-3.5 sm:py-4 rounded-l-full transition-all duration-300 flex-1 flex items-center justify-start ${
              isActive
                ? "bg-[#9D9C3E] text-white shadow-md"
                : "bg-[#F4F4F2] text-[#172334] group-hover:bg-[#ECECE8]"
            }`}
          >
            <span className="font-sans text-[15px] sm:text-base md:text-[17px] font-semibold tracking-tight whitespace-nowrap">
              {category.title}
            </span>
          </div>

          {/* Circle Image Icon */}
          <div
            className={`relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 transition-all duration-300 ${
              isActive
                ? "ring-2 ring-offset-2 ring-[#E6007E] scale-105 shadow-md"
                : "border-2 border-white shadow group-hover:scale-105"
            }`}
          >
            <Image
              src={category.image}
              alt={category.alt}
              fill
              quality={88}
              sizes="(max-width: 640px) 64px, 80px"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </>
      )}
    </button>
  );
};
