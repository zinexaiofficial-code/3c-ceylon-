"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Clock, Compass, Users, Search } from "lucide-react";

export const TripPlannerBar: React.FC = () => {
  const { t } = useLanguage();
  const router = useRouter();

  const [duration, setDuration] = useState("");
  const [style, setStyle] = useState("");
  const [travelers, setTravelers] = useState("2");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (duration) params.set("duration", duration);
    if (style) params.set("style", style);
    if (travelers) params.set("travelers", travelers);
    router.push(`/packages?${params.toString()}`);
  };

  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 -mt-10 md:-mt-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white/95 border border-gray-200/90 rounded-2xl md:rounded-full p-4 md:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 items-center"
      >
        {/* Field 1: Duration */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse px-3 py-2 border-b md:border-b-0 md:border-r border-gray-200">
          <Clock className="w-5 h-5 text-[#123B2A] flex-shrink-0" />
          <div className="w-full">
            <label htmlFor="duration-select" className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">
              Duration
            </label>
            <select
              id="duration-select"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full bg-transparent text-xs md:text-sm font-semibold text-[#172334] focus:outline-none cursor-pointer appearance-none"
            >
              <option value="" className="bg-white text-[#172334]">Any Duration</option>
              <option value="1-7" className="bg-white text-[#172334]">1 - 7 Days (Highlights)</option>
              <option value="8-11" className="bg-white text-[#172334]">8 - 11 Days (Classic)</option>
              <option value="12-16" className="bg-white text-[#172334]">12 - 16 Days (Grand Tour)</option>
            </select>
          </div>
        </div>

        {/* Field 2: Travel Style */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse px-3 py-2 border-b md:border-b-0 md:border-r border-gray-200">
          <Compass className="w-5 h-5 text-[#123B2A] flex-shrink-0" />
          <div className="w-full">
            <label htmlFor="style-select" className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">
              Travel Style
            </label>
            <select
              id="style-select"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full bg-transparent text-xs md:text-sm font-semibold text-[#172334] focus:outline-none cursor-pointer appearance-none"
            >
              <option value="" className="bg-white text-[#172334]">All Travel Styles</option>
              <option value="Luxury" className="bg-white text-[#172334]">Ultra-Luxury & VIP</option>
              <option value="Wildlife" className="bg-white text-[#172334]">Wildlife & Safaris</option>
              <option value="Honeymoon" className="bg-white text-[#172334]">Honeymoon & Romance</option>
              <option value="Family" className="bg-white text-[#172334]">Family Adventure</option>
              <option value="Cultural" className="bg-white text-[#172334]">Cultural Heritage</option>
            </select>
          </div>
        </div>

        {/* Field 3: Number of Travelers */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse px-3 py-2 border-b sm:border-b-0 md:border-r border-gray-200">
          <Users className="w-5 h-5 text-[#123B2A] flex-shrink-0" />
          <div className="w-full">
            <label htmlFor="travelers-select" className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">
              Travelers
            </label>
            <select
              id="travelers-select"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              className="w-full bg-transparent text-xs md:text-sm font-semibold text-[#172334] focus:outline-none cursor-pointer appearance-none"
            >
              <option value="1" className="bg-white text-[#172334]">Solo Traveler</option>
              <option value="2" className="bg-white text-[#172334]">Couple (2 Guests)</option>
              <option value="3-4" className="bg-white text-[#172334]">Small Group (3 - 4)</option>
              <option value="5+" className="bg-white text-[#172334]">Family / Group (5+)</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="px-2">
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-full bg-[#18E600] hover:bg-[#15C800] text-black font-extrabold text-xs md:text-sm tracking-wider uppercase shadow-[0_4px_15px_rgba(24,230,0,0.3)] hover:shadow-[0_6px_22px_rgba(24,230,0,0.5)] hover:scale-102 active:scale-98 transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse"
          >
            <Search className="w-4 h-4" />
            <span>{t.common.findTours}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
