"use client";

import React, { useState, useMemo, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { TOUR_PACKAGES } from "@/data/packages";
import { PackageCard } from "@/components/PackageCard";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppLink } from "@/data/company";
import { 
  Compass, 
  Clock, 
  SlidersHorizontal, 
  RotateCcw, 
  MessageCircle, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Play,
  Pause,
  ShieldCheck,
  Star,
  Search
} from "lucide-react";

interface PackageSlide {
  id: string;
  image: string;
  alt: string;
  tagline: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
}

const PACKAGE_CAROUSEL_SLIDES: PackageSlide[] = [
  {
    id: "woman-misty-valleys",
    image: "/images/packages-hero.png",
    alt: "Woman Overlooking Misty Mountain Valleys - Sri Lanka Highland Tour",
    tagline: "CURATED SRI LANKA EXPEDITIONS",
    titlePrefix: "Handcrafted ",
    titleHighlight: "Tour Packages",
    subtitle: "Bespoke itineraries meticulously crafted for discerning travelers seeking true wonder."
  },
  {
    id: "jungle-curve-blue-train",
    image: "/images/hero/jungle-curve-blue-train-adventure.png",
    alt: "Jungle Curve Blue Train Adventure - Central Highlands of Sri Lanka",
    tagline: "SCENIC RAILWAYS & EMERALD HILLS",
    titlePrefix: "Heritage & ",
    titleHighlight: "Highland Splendor",
    subtitle: "First-class scenic train odysseys winding through cloud forests and colonial tea trails."
  },
  {
    id: "wetland-elephants",
    image: "/images/hero/three-elephants-in-lush-wetland.png",
    alt: "Three Elephants in a Lush Wetland - Minneriya and Udawalawe National Parks",
    tagline: "UNMATCHED WILDLIFE EXPEDITIONS",
    titlePrefix: "Untamed Safari ",
    titleHighlight: "Big Four Journeys",
    subtitle: "Private 4x4 safaris guided by expert naturalists to witness wild elephants and leopards."
  },
  {
    id: "coastal-paradise",
    image: "/images/hero/embracing-freedom-by-the-sea.png",
    alt: "Embracing Freedom by the Sea - Mirissa and Bentota Golden Coastlines",
    tagline: "TROPICAL SERENITY & COASTAL RETREATS",
    titlePrefix: "Pure Luxury ",
    titleHighlight: "Beach Escapes",
    subtitle: "Secluded oceanfront villas, golden southern shores, and private yacht whale watching."
  }
];

const AUTO_PLAY_INTERVAL = 6000;

export default function PackagesPage() {
  const { t } = useLanguage();

  // Carousel State
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [mountedSlides, setMountedSlides] = useState<number[]>([0]);
  const touchStartXRef = useRef<number | null>(null);

  // Filters State
  const [selectedDuration, setSelectedDuration] = useState<string>("all");
  const [selectedStyle, setSelectedStyle] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const next = (prev + 1) % PACKAGE_CAROUSEL_SLIDES.length;
      setMountedSlides((m) => (m.includes(next) ? m : [...m, next]));
      return next;
    });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const p = (prev - 1 + PACKAGE_CAROUSEL_SLIDES.length) % PACKAGE_CAROUSEL_SLIDES.length;
      setMountedSlides((m) => (m.includes(p) ? m : [...m, p]));
      return p;
    });
  }, []);

  const goToSlide = (index: number) => {
    setMountedSlides((m) => (m.includes(index) ? m : [...m, index]));
    setCurrentSlideIndex(index);
  };

  // Pre-load slide 1 shortly after initial paint
  useEffect(() => {
    const timer = setTimeout(() => {
      setMountedSlides((prev) => (prev.includes(1) ? prev : [...prev, 1]));
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Ensure current and upcoming slides are mounted
  useEffect(() => {
    const nextIdx = (currentSlideIndex + 1) % PACKAGE_CAROUSEL_SLIDES.length;
    setMountedSlides((prev) => {
      const needed = [currentSlideIndex, nextIdx];
      const missing = needed.filter((idx) => !prev.includes(idx));
      return missing.length > 0 ? [...prev, ...missing] : prev;
    });
  }, [currentSlideIndex]);

  // Carousel Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered, nextSlide]);

  // Mobile swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
  };

  // Filtered packages logic
  const filteredPackages = useMemo(() => {
    return TOUR_PACKAGES.filter((pkg) => {
      // Filter by duration
      if (selectedDuration === "3d" && pkg.durationDays !== 3) return false;
      if (selectedDuration === "4d" && pkg.durationDays !== 4) return false;
      if (selectedDuration === "6d" && pkg.durationDays !== 6) return false;

      // Filter by style
      if (selectedStyle !== "all" && !pkg.style.toLowerCase().includes(selectedStyle.toLowerCase())) {
        return false;
      }

      // Filter by search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = pkg.title.toLowerCase().includes(query);
        const matchesDest = pkg.destinationsCovered.some(d => d.toLowerCase().includes(query));
        const matchesHighlights = pkg.highlights.some(h => h.toLowerCase().includes(query));
        if (!matchesTitle && !matchesDest && !matchesHighlights) return false;
      }

      return true;
    });
  }, [selectedDuration, selectedStyle, searchQuery]);

  const handleReset = () => {
    setSelectedDuration("all");
    setSelectedStyle("all");
    setSearchQuery("");
  };

  const currentSlide = PACKAGE_CAROUSEL_SLIDES[currentSlideIndex];

  return (
    <div className="bg-[#FAF8F2] min-h-screen text-[#172334] select-none">
      
      {/* ─────────────────────────────────────────────────────────────
          1. FULL-HEIGHT CINEMATIC CAROUSEL (Identical Home Page Format)
          - Height: min-h-[92vh] md:min-h-screen
          - Color pattern: Natural vibrant photo with subtle multi-layer vignette
          - Hero Typography: Bold Impact with #18E600 highlight
          - Primary image: Woman Overlooking Misty Mountain Valleys
         ───────────────────────────────────────────────────────────── */}
      <section 
        className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-roledescription="carousel"
        aria-label="3C Ceylon Tours Handcrafted Packages"
      >
        {/* Background Images Carousel Stack */}
        <div className="absolute inset-0 z-0">
          {PACKAGE_CAROUSEL_SLIDES.map((slide, index) => {
            const isMounted = mountedSlides.includes(index);
            const isActive = index === currentSlideIndex;
            if (!isMounted) return null;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-1" : "opacity-0 z-0 pointer-events-none"
                }`}
                aria-hidden={!isActive}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  quality={88}
                  sizes="100vw"
                  className={`object-cover object-center transition-transform duration-[7000ms] ease-out ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                />
              </div>
            );
          })}

          {/* Home Page Matching Multi-Layer Natural Readability Overlay */}
          {/* Top Vignette: Ensures navbar labels and logo are razor-sharp */}
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/85 via-black/40 to-transparent z-10 pointer-events-none" />

          {/* Center Vignette: Soft radial gradient preserving photo vibrancy without over-darkening */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none" 
            style={{
              background: "radial-gradient(ellipse at center, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0.12) 100%)"
            }}
          />

          {/* Subtle Bottom Gradient for Clean Transition */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
        </div>

        {/* Main Content Container */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 md:pt-32 pb-24">
          
          {/* Tagline Badge */}
          <div 
            key={`badge-${currentSlideIndex}`}
            className="inline-flex items-center px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-[#18E600]/40 text-[#18E600] text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(24,230,0,0.3)] animate-fade-in transition-all duration-500"
          >
            <span className="text-white drop-shadow">{currentSlide.tagline}</span>
          </div>

          {/* Master Headline - Home Page Style Bold Impact */}
          <h1 
            key={`headline-${currentSlideIndex}`}
            className="font-sans text-[42px] sm:text-[58px] md:text-[72px] lg:text-[88px] xl:text-[96px] font-black text-white tracking-tight leading-[1.02] mb-6 drop-shadow-[0_4px_28px_rgba(0,0,0,0.98)] animate-fade-in transition-all duration-700 select-none"
          >
            {currentSlide.titlePrefix}
            <span className="text-[#18E600] drop-shadow-[0_0_35px_rgba(24,230,0,0.65)]">
              {currentSlide.titleHighlight}
            </span>
          </h1>

          {/* Subtitle - Short & Powerful */}
          <p 
            key={`sub-${currentSlideIndex}`}
            className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-white font-medium leading-relaxed mb-10 drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] animate-fade-in transition-all duration-700"
          >
            {currentSlide.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
            <a
              href="#packages-grid"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#18E600] hover:bg-[#15D600] text-black font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_0_25px_rgba(24,230,0,0.45)] hover:shadow-[0_0_40px_rgba(24,230,0,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2.5 rtl:space-x-reverse cursor-pointer"
            >
              <span>Explore Tour Packages</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold text-sm sm:text-base tracking-wider border border-white/25 hover:border-white/50 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <span>Plan Your Bespoke Trip</span>
            </Link>
          </div>

          {/* Trust Badges — High-Contrast Frosted Glass Luxury Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto pt-6 border-t border-white/20">
            <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/25 text-white font-semibold text-xs sm:text-[13px] flex items-center space-x-2 shadow-lg drop-shadow">
              <Compass className="w-4 h-4 text-[#18E600] flex-shrink-0" />
              <span className="tracking-wide">100% Private &amp; Bespoke</span>
            </div>

            <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/25 text-white font-semibold text-xs sm:text-[13px] flex items-center space-x-2 shadow-lg drop-shadow">
              <ShieldCheck className="w-4 h-4 text-[#18E600] flex-shrink-0" />
              <span className="tracking-wide">SLTDA Certified</span>
            </div>

            <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/25 text-white font-semibold text-xs sm:text-[13px] flex items-center space-x-2 shadow-lg drop-shadow">
              <Star className="w-4 h-4 text-[#18E600] fill-[#18E600] flex-shrink-0" />
              <span className="tracking-wide">5-Star Chauffeurs</span>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Chevron Arrows (Desktop & Tablet) */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center bg-black/50 hover:bg-black/80 backdrop-blur-md text-white/80 hover:text-[#0BFF01] border border-white/15 hover:border-[#0BFF01]/60 transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 group cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center bg-black/50 hover:bg-black/80 backdrop-blur-md text-white/80 hover:text-[#0BFF01] border border-white/15 hover:border-[#0BFF01]/60 transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 group cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Carousel Slide Indicators & Auto-Play Controls (Bottom Right) */}
        <div className="absolute bottom-7 right-4 md:right-8 z-20 flex items-center space-x-3 rtl:space-x-reverse bg-black/60 backdrop-blur-xl px-3 py-2 rounded-full border border-white/10 text-xs text-white shadow-xl">
          {/* Slide Dots / Pill Bars */}
          <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
            {PACKAGE_CAROUSEL_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                  idx === currentSlideIndex
                    ? "w-7 bg-[#0BFF01] shadow-[0_0_10px_rgba(11,255,1,0.7)]"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Auto-Play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            aria-label={isAutoPlaying ? "Pause carousel auto-play" : "Start carousel auto-play"}
            className="pl-1 text-gray-400 hover:text-[#0BFF01] transition-colors cursor-pointer"
            title={isAutoPlaying ? "Pause" : "Play"}
          >
            {isAutoPlaying ? (
              <Pause className="w-3.5 h-3.5" />
            ) : (
              <Play className="w-3.5 h-3.5 text-[#0BFF01]" />
            )}
          </button>
        </div>

        {/* Scroll Down Indicator */}
        <a 
          href="#packages-grid"
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-1 text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <span className="text-[10px] tracking-widest uppercase font-medium">Scroll to Packages</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#0BFF01]" />
        </a>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. FILTER & SEARCH CONTROL BAR
         ───────────────────────────────────────────────────────────── */}
      <div id="packages-grid" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-12 sm:mb-16">
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-gray-200/90 space-y-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full lg:w-1/3">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by destination (Sigiriya, Yala, Ella)..."
                className="w-full pl-10 pr-4 py-3 rounded-full bg-gray-50 border border-gray-200 text-xs sm:text-sm text-[#172334] placeholder-gray-400 focus:outline-none focus:border-[#18E600] focus:ring-1 focus:ring-[#18E600] transition-all"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              {/* Duration filter */}
              <div className="flex items-center space-x-2 rtl:space-x-reverse bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                <Clock className="w-3.5 h-3.5 text-[#0E6838]" />
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="bg-transparent text-xs font-bold text-[#172334] focus:outline-none cursor-pointer pr-2"
                >
                  <option value="all">All Durations</option>
                  <option value="3d">2 Nights / 3 Days</option>
                  <option value="4d">3 Nights / 4 Days</option>
                  <option value="6d">5 Nights / 6 Days</option>
                </select>
              </div>

              {/* Style filter */}
              <div className="flex items-center space-x-2 rtl:space-x-reverse bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#0E6838]" />
                <select
                  value={selectedStyle}
                  onChange={(e) => setSelectedStyle(e.target.value)}
                  className="bg-transparent text-xs font-bold text-[#172334] focus:outline-none cursor-pointer pr-2"
                >
                  <option value="all">All Travel Styles</option>
                  <option value="Cultural & Highlights">Cultural & Highlights</option>
                  <option value="Heritage & Culture">Heritage & Culture</option>
                  <option value="Coastal & Beach">Coastal & Beach</option>
                  <option value="Highlands & Culture">Highlands & Culture</option>
                </select>
              </div>

              {/* Reset Button */}
              {(selectedDuration !== "all" || selectedStyle !== "all" || searchQuery) && (
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-600 hover:bg-red-100 text-xs font-bold flex items-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear</span>
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#526173] border-t border-gray-100 pt-3">
            <span>Showing <strong className="text-[#172334] font-bold">{filteredPackages.length}</strong> private tour packages</span>
            <span className="text-[#0E6838] font-bold hidden sm:inline">100% Private Chauffeur, Dedicated AC Vehicle &amp; Handcrafted Itineraries</span>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. PACKAGES GRID (2 Packages per Row - Visual Focus)
         ───────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 max-w-xl mx-auto space-y-4 shadow-sm">
            <Compass className="w-12 h-12 text-[#18E600] mx-auto animate-spin-slow" />
            <h3 className="font-sans text-2xl font-extrabold text-[#172334] tracking-tight">No Exact Matches Found</h3>
            <p className="text-sm text-[#526173] leading-relaxed font-normal">
              We customize every journey from scratch! Let our travel designers craft your bespoke itinerary.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-[#172334] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Reset Search Filters
              </button>
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full bg-[#18E600] hover:bg-[#15c400] text-black text-xs font-extrabold uppercase tracking-wider transition-all shadow-md"
              >
                Plan a Custom Tour
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
