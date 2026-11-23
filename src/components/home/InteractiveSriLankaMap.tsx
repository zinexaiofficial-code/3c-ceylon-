"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  SRI_LANKA_EXPERIENCE_CATEGORIES, 
  ExperienceCategory,
  DestinationPin,
  MAP_CALIBRATION_BOUNDS
} from "@/data/sriLankaExperiences";
import { ExperienceCategoryCard } from "./ExperienceCategoryCard";
import { ArrowRight, MapPin, Compass, Info, CheckCircle2 } from "lucide-react";

export const InteractiveSriLankaMap: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [hoveredPin, setHoveredPin] = useState<DestinationPin | null>(null);
  const [isDebug, setIsDebug] = useState(false);
  const [cursorPos, setCursorPos] = useState<{ xPct: number; yPct: number } | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const activeCategory: ExperienceCategory = SRI_LANKA_EXPERIENCE_CATEGORIES[activeCategoryIndex];
  const leftCategories = SRI_LANKA_EXPERIENCE_CATEGORIES.filter((c) => c.side === "left");
  const rightCategories = SRI_LANKA_EXPERIENCE_CATEGORIES.filter((c) => c.side === "right");

  // Read URL search params for ?debugMap=true and ?category=<id>
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("debugMap") === "true") {
        setIsDebug(true);
      }
      const catParam = params.get("category");
      if (catParam) {
        const idx = SRI_LANKA_EXPERIENCE_CATEGORIES.findIndex((c) => c.id === catParam);
        if (idx !== -1) {
          setActiveCategoryIndex(idx);
        }
      }
    }
  }, []);

  const selectCategory = (index: number) => {
    setActiveCategoryIndex(index);
    setHoveredPin(null);
  };

  // Track mouse coordinates over map for GIS calibration HUD
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDebug || !mapContainerRef.current) return;
    const rect = mapContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setCursorPos({ xPct: parseFloat(x.toFixed(1)), yPct: parseFloat(y.toFixed(1)) });
  };

  const handleMouseLeave = () => {
    if (isDebug) setCursorPos(null);
  };

  // Convert map % to estimated GPS (for GIS verification HUD)
  const calculateEstimatedGps = (xPct: number, yPct: number) => {
    const lat = 9.835 - ((yPct - 6.9) / (89.0 - 6.9)) * (9.835 - 5.924);
    const lng = 79.69 + ((xPct - 15.6) / (88.8 - 15.6)) * (81.88 - 79.69);
    return { lat: lat.toFixed(4), lng: lng.toFixed(4) };
  };

  return (
    <section
      id="interactive-map"
      className="relative py-14 sm:py-18 bg-white text-[#172334] overflow-hidden select-none"
      aria-label="Discover Sri Lanka Your Way"
    >
      {/* Developer Debug Mode Toggle (Always available via ?debugMap=true or button in dev) */}
      {(process.env.NODE_ENV !== "production" || isDebug) && (
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-end">
          <button
            onClick={() => setIsDebug(!isDebug)}
            className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold transition-all shadow-sm ${
              isDebug 
                ? "bg-[#247A32] text-white ring-2 ring-[#329B38]/50" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>GIS Calibration: {isDebug ? "ON" : "OFF"}</span>
          </button>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading matching Iconic Destinations font style */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#91B58A]/20 text-[#476A4C] border border-[#91B58A]/35 text-xs font-extrabold uppercase tracking-widest mb-3 shadow-sm">
            <span>Explore the Island</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#172334] tracking-tight leading-[1.08] mb-3">
            Discover Sri Lanka <span className="text-[#476A4C]">Your Way.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#526173] font-normal max-w-xl mx-auto">
            Select any experience to view signature destinations curated across Sri Lanka.
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
                    ? "bg-[#329B38] text-white border-[#247A32] shadow-md scale-102"
                    : "bg-[#F4F4F2] text-[#222222] border-transparent hover:bg-[#ECECE8]"
                }`}
              >
                <div className={`relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 ${isActive ? "ring-2 ring-white" : ""
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
            {/* Seamless Map Container */}
            <div 
              id="map-canvas-container"
              ref={mapContainerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full mx-auto"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "480px",
                aspectRatio: "680 / 1100"
              }}
            >
              {/* Illustrated Sri Lanka Location Map */}
              <Image
                src="/images/Sri-Lanka-location-map-680x1100-1.jpg"
                alt="Illustrated Sri Lanka Tourism Map - 3C Ceylon Tours"
                fill
                quality={92}
                priority
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-contain object-center pointer-events-none"
              />

              {/* GIS DEBUG MODE OVERLAY */}
              {isDebug && (
                <div 
                  className="z-30 pointer-events-none border border-emerald-500/30"
                  style={{ position: "absolute", inset: 0 }}
                >
                  {/* Calibrated Landmass Bounding Box */}
                  <div 
                    className="border border-dashed border-emerald-600/60 bg-emerald-500/5"
                    style={{
                      position: "absolute",
                      left: `${MAP_CALIBRATION_BOUNDS.landMinXPercent}%`,
                      top: `${MAP_CALIBRATION_BOUNDS.landMinYPercent}%`,
                      width: `${MAP_CALIBRATION_BOUNDS.landMaxXPercent - MAP_CALIBRATION_BOUNDS.landMinXPercent}%`,
                      height: `${MAP_CALIBRATION_BOUNDS.landMaxYPercent - MAP_CALIBRATION_BOUNDS.landMinYPercent}%`
                    }}
                  >
                    <span className="absolute top-1 left-1 bg-emerald-700 text-white text-[9px] font-mono px-1 py-0.5 rounded">
                      Land Bounds: 15.6% - 88.8% X | 6.9% - 89.0% Y
                    </span>
                  </div>

                  {/* Parallels (Latitudes) */}
                  <div 
                    className="border-b border-blue-400/30"
                    style={{ position: "absolute", left: 0, right: 0, top: "14.5%" }}
                  >
                    <span className="text-[9px] font-mono text-blue-600 bg-white/80 px-1 ml-1">9°N</span>
                  </div>
                  <div 
                    className="border-b border-blue-400/30"
                    style={{ position: "absolute", left: 0, right: 0, top: "44.0%" }}
                  >
                    <span className="text-[9px] font-mono text-blue-600 bg-white/80 px-1 ml-1">8°N</span>
                  </div>
                  <div 
                    className="border-b border-blue-400/30"
                    style={{ position: "absolute", left: 0, right: 0, top: "65.5%" }}
                  >
                    <span className="text-[9px] font-mono text-blue-600 bg-white/80 px-1 ml-1">7°N</span>
                  </div>
                  <div 
                    className="border-b border-blue-400/30"
                    style={{ position: "absolute", left: 0, right: 0, top: "85.0%" }}
                  >
                    <span className="text-[9px] font-mono text-blue-600 bg-white/80 px-1 ml-1">6°N</span>
                  </div>

                  {/* Meridians (Longitudes) */}
                  <div 
                    className="border-r border-blue-400/30"
                    style={{ position: "absolute", top: 0, bottom: 0, left: "36.0%" }}
                  >
                    <span className="text-[9px] font-mono text-blue-600 bg-white/80 px-1 mt-1 block">80°E</span>
                  </div>
                  <div 
                    className="border-r border-blue-400/30"
                    style={{ position: "absolute", top: 0, bottom: 0, left: "64.0%" }}
                  >
                    <span className="text-[9px] font-mono text-blue-600 bg-white/80 px-1 mt-1 block">81°E</span>
                  </div>

                  {/* Live Cursor Coordinate HUD */}
                  {cursorPos && (
                    <div 
                      className="bg-gray-900/90 text-white font-mono text-[10px] px-2 py-1 rounded shadow-lg pointer-events-none transform -translate-x-1/2 -translate-y-full mb-2 z-50 whitespace-nowrap"
                      style={{ position: "absolute", top: `${cursorPos.yPct}%`, left: `${cursorPos.xPct}%` }}
                    >
                      <div>Map: {cursorPos.xPct}% X, {cursorPos.yPct}% Y</div>
                      <div className="text-emerald-400">
                        GPS ≈ {calculateEstimatedGps(cursorPos.xPct, cursorPos.yPct).lat}°N, {calculateEstimatedGps(cursorPos.xPct, cursorPos.yPct).lng}°E
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* DYNAMIC DESTINATION PINS OVERLAY */}
              <div 
                className="z-20 pointer-events-none"
                style={{ position: "absolute", inset: 0 }}
              >
                {activeCategory.destinations.map((dest, idx) => {
                  const position = dest.labelPosition || dest.labelSide || "right";

                  return (
                    <div
                      key={`${activeCategory.id}-${dest.id}`}
                      className="pointer-events-auto transition-all duration-500 ease-out animate-fade-in group/pin"
                      style={{
                        position: "absolute",
                        top: `${dest.top}%`,
                        left: `${dest.left}%`,
                        animationDelay: `${idx * 40}ms`
                      }}
                      onMouseEnter={() => setHoveredPin(dest)}
                      onMouseLeave={() => setHoveredPin(null)}
                    >
                      {/* FIXED ANCHOR POINT: (0, 0) is EXACTLY the center of the pin dot */}
                      <div className="relative">
                        {/* The Pin Dot itself: perfectly centered at (0, 0) */}
                        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
                          <span className="absolute inline-flex h-4 w-4 rounded-full bg-[#E6007E]/30 animate-ping opacity-75" />
                          <span className="relative inline-flex h-3 w-3 rounded-full bg-[#E6007E] border-2 border-white shadow-sm transition-transform duration-200 group-hover/pin:scale-125 cursor-pointer" />
                        </div>

                        {/* Debug Mode Coordinates Badge */}
                        {isDebug && (
                          <div className="absolute top-2 left-2 bg-black/85 text-white font-mono text-[8px] px-1.5 py-0.5 rounded shadow z-40 whitespace-nowrap pointer-events-none">
                            <span className="text-amber-300">({dest.top}%, {dest.left}%)</span>
                            <span className="text-gray-400 ml-1">[{dest.lat.toFixed(2)}, {dest.lng.toFixed(2)}]</span>
                          </div>
                        )}

                        {/* DIRECTIONAL LABEL PILL */}
                        {position === "left" && (
                          <div 
                            className="flex items-center pr-1 pointer-events-auto"
                            style={{
                              position: "absolute",
                              top: 0,
                              right: "8px",
                              transform: "translateY(-50%)"
                            }}
                          >
                            <Link
                              href={dest.link}
                              className="whitespace-nowrap px-2.5 py-0.5 rounded-full bg-white text-[#172334] text-[11px] sm:text-xs font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.12)] border border-gray-100 hover:border-[#329B38]/40 hover:text-[#329B38] transition-all duration-200 group-hover/pin:scale-105 group-hover/pin:shadow-md block"
                            >
                              {dest.name}
                            </Link>
                          </div>
                        )}

                        {position === "right" && (
                          <div 
                            className="flex items-center pl-1 pointer-events-auto"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: "8px",
                              transform: "translateY(-50%)"
                            }}
                          >
                            <Link
                              href={dest.link}
                              className="whitespace-nowrap px-2.5 py-0.5 rounded-full bg-white text-[#172334] text-[11px] sm:text-xs font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.12)] border border-gray-100 hover:border-[#329B38]/40 hover:text-[#329B38] transition-all duration-200 group-hover/pin:scale-105 group-hover/pin:shadow-md block"
                            >
                              {dest.name}
                            </Link>
                          </div>
                        )}

                        {position === "bottom" && (
                          <div 
                            className="flex flex-col items-center pointer-events-auto"
                            style={{
                              position: "absolute",
                              top: "6px",
                              left: 0,
                              transform: "translateX(-50%)"
                            }}
                          >
                            {/* Vertical leader stem to displace label below dot into open ocean space */}
                            <div className="w-[1.5px] h-3.5 bg-gradient-to-b from-[#E6007E] to-[#E6007E]/30 rounded-full" />
                            <Link
                              href={dest.link}
                              className="whitespace-nowrap px-2.5 py-0.5 rounded-full bg-white text-[#172334] text-[11px] sm:text-xs font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.12)] border border-gray-100 hover:border-[#329B38]/40 hover:text-[#329B38] transition-all duration-200 group-hover/pin:scale-105 group-hover/pin:shadow-md block mt-0.5"
                            >
                              {dest.name}
                            </Link>
                          </div>
                        )}

                        {position === "top" && (
                          <div 
                            className="flex flex-col items-center pointer-events-auto"
                            style={{
                              position: "absolute",
                              bottom: "6px",
                              left: 0,
                              transform: "translateX(-50%)"
                            }}
                          >
                            <Link
                              href={dest.link}
                              className="whitespace-nowrap px-2.5 py-0.5 rounded-full bg-white text-[#172334] text-[11px] sm:text-xs font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.12)] border border-gray-100 hover:border-[#329B38]/40 hover:text-[#329B38] transition-all duration-200 group-hover/pin:scale-105 group-hover/pin:shadow-md block mb-0.5"
                            >
                              {dest.name}
                            </Link>
                            {/* Vertical leader stem */}
                            <div className="w-[1.5px] h-3.5 bg-gradient-to-t from-[#E6007E] to-[#E6007E]/30 rounded-full" />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ACTIVE PIN HOVER CARD PREVIEW */}
              {hoveredPin && !isDebug && (
                <div className="absolute bottom-3 left-4 right-4 z-40 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-gray-200/80 animate-fade-in pointer-events-auto">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="inline-block w-2 h-2 rounded-full bg-[#E6007E]" />
                        <h4 className="font-bold text-sm text-[#172334]">
                          {hoveredPin.name}
                        </h4>
                        <span className="text-[10px] text-gray-500 font-medium">
                          ({hoveredPin.district} District, {hoveredPin.province})
                        </span>
                      </div>
                      {hoveredPin.highlightText && (
                        <p className="text-xs font-semibold text-[#247A32] mb-1">
                          {hoveredPin.highlightText}
                        </p>
                      )}
                      <p className="text-xs text-[#526173] line-clamp-2">
                        {hoveredPin.description}
                      </p>
                    </div>
                    <Link
                      href={hoveredPin.link}
                      className="ml-3 flex-shrink-0 text-xs font-bold text-[#329B38] hover:text-[#247A32] flex items-center space-x-1"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* GIS Audit Table in Debug Mode */}
            {isDebug && (
              <div className="mt-6 w-full max-w-[500px] bg-gray-900 text-white p-4 rounded-xl text-xs font-mono shadow-2xl border border-gray-800">
                <div className="flex items-center justify-between pb-2 border-b border-gray-800 mb-2">
                  <span className="font-bold text-emerald-400">GIS Coordinate Verification</span>
                  <span className="text-gray-400">{activeCategory.destinations.length} points</span>
                </div>
                <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                  {activeCategory.destinations.map((d) => (
                    <div key={d.id} className="flex items-center justify-between py-0.5 border-b border-gray-800/50">
                      <div className="font-semibold text-gray-200">{d.name}</div>
                      <div className="text-gray-400">
                        GPS: {d.lat.toFixed(2)}°N, {d.lng.toFixed(2)}°E
                      </div>
                      <div className="text-amber-400">
                        Map: {d.top}% Y, {d.left}% X ({d.labelPosition})
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#476A4C] hover:bg-[#38553C] text-white font-sans font-bold text-sm tracking-wide border border-[#91B58A]/40 shadow-md hover:shadow-lg hover:scale-102 active:scale-98 transition-all duration-300"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
