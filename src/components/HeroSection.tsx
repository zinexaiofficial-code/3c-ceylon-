"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronLeft,
  ChevronRight,
  Play, 
  Pause, 
  ShieldCheck, 
  Compass,
  Star
} from "lucide-react";

interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  tagline: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  locationBadge: string;
  badgeLabel: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "misty-valley-overlook",
    image: "/images/hero/triumphant-overlook-above-misty-valley.png",
    alt: "Triumphant Overlook Above the Misty Valley - Pidurangala and Sigiriya Rock Fortress, Sri Lanka",
    tagline: "PREMIER SRI LANKA DESTINATION SPECIALISTS",
    titlePrefix: "Discover the ",
    titleHighlight: "Soul of Sri Lanka",
    subtitle: "Extraordinary journeys. Timeless memories. Beautifully crafted private luxury holidays by 3C Ceylon Tours.",
    locationBadge: "Sigiriya Rock Citadel & Misty Valley Overlook",
    badgeLabel: "Iconic Sunrise Vista"
  },
  {
    id: "wetland-elephants",
    image: "/images/hero/three-elephants-in-lush-wetland.png",
    alt: "Three Elephants in a Lush Wetland - Minneriya and Udawalawe National Parks",
    tagline: "UNRIVALED WILDLIFE & NATURE SANCTUARIES",
    titlePrefix: "Witness Majestic ",
    titleHighlight: "Untamed Wildlife",
    subtitle: "Roaming elephant herds and elusive leopards in ancient virgin reserves.",
    locationBadge: "Minneriya & Udawalawe Sanctuaries",
    badgeLabel: "Wild Elephant Gathering"
  },
  {
    id: "blue-train-adventure",
    image: "/images/hero/jungle-curve-blue-train-adventure.png",
    alt: "Jungle Curve Blue Train Adventure - Central Highlands of Sri Lanka",
    tagline: "LEGENDARY HIGHLAND TRAINS & TEA RIDGES",
    titlePrefix: "Journey Across ",
    titleHighlight: "Highland Splendor",
    subtitle: "Iconic blue railways winding through misty cloud forests and emerald tea hills.",
    locationBadge: "Nine Arch Bridge, Ella & Nuwara Eliya",
    badgeLabel: "Highland Rail Odyssey"
  },
  {
    id: "leopard-resting",
    image: "/images/hero/leopard-resting-on-forest-log.png",
    alt: "Leopard Resting on a Forest Log in Yala National Park",
    tagline: "ELUSIVE BIG CATS OF YALA & WILPATTU",
    titlePrefix: "Track Elusive ",
    titleHighlight: "Island Predators",
    subtitle: "Bespoke 4x4 big game safaris guided by dedicated resident naturalists.",
    locationBadge: "Yala & Wilpattu National Parks",
    badgeLabel: "Big Game Safari"
  },
  {
    id: "freedom-by-the-sea",
    image: "/images/hero/embracing-freedom-by-the-sea.png",
    alt: "Embracing Freedom by the Sea - Mirissa and Bentota Golden Coastlines",
    tagline: "PRISTINE COASTLINES & GOLDEN SHORES",
    titlePrefix: "Indulge in Pure ",
    titleHighlight: "Tropical Serenity",
    subtitle: "Warm Indian Ocean waves, secluded palm coves, and oceanfront luxury.",
    locationBadge: "Mirissa, Bentota & Southern Beaches",
    badgeLabel: "Coastal Paradise"
  }
];

const AUTO_PLAY_INTERVAL = 6000; // 6 seconds per slide

export const HeroSection: React.FC = () => {
  const { t, locale } = useLanguage();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  // Progressive slide loading: slide 0 mounts immediately for instant LCP, secondary slides mount lazily before rotation
  const [mountedSlides, setMountedSlides] = useState<number[]>([0]);
  const touchStartXRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const next = (prev + 1) % HERO_SLIDES.length;
      setMountedSlides((m) => (m.includes(next) ? m : [...m, next]));
      return next;
    });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const p = (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
      setMountedSlides((m) => (m.includes(p) ? m : [...m, p]));
      return p;
    });
  }, []);

  const goToSlide = (index: number) => {
    setMountedSlides((m) => (m.includes(index) ? m : [...m, index]));
    setCurrentSlideIndex(index);
  };

  // Pre-load slide 1 shortly after initial paint (well ahead of the 6s auto-rotation)
  useEffect(() => {
    const timer = setTimeout(() => {
      setMountedSlides((prev) => (prev.includes(1) ? prev : [...prev, 1]));
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Ensure current and upcoming slides are always mounted in advance
  useEffect(() => {
    const nextIdx = (currentSlideIndex + 1) % HERO_SLIDES.length;
    setMountedSlides((prev) => {
      const needed = [currentSlideIndex, nextIdx];
      const missing = needed.filter((idx) => !prev.includes(idx));
      return missing.length > 0 ? [...prev, ...missing] : prev;
    });
  }, [currentSlideIndex]);

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered, nextSlide]);

  // Touch handlers for mobile swipe
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

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  // For slide 0, if current language is not English, respect translated strings
  const displayTagline = currentSlideIndex === 0 ? (t.hero.tagline || currentSlide.tagline) : currentSlide.tagline;
  const displaySubtitle = currentSlideIndex === 0 ? (t.hero.subheading || currentSlide.subtitle) : currentSlide.subtitle;

  return (
    <section 
      className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="3C Ceylon Tours Featured Destinations"
    >
      {/* Background Images Carousel Stack */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => {
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

        {/* Cinematic Multi-Layer Readability Overlay (Preserves Natural Photo Vibrancy while ensuring 100% text legibility) */}
        {/* Top Vignette: Ensures navbar labels and logo are razor-sharp across all images */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/85 via-black/40 to-transparent z-10 pointer-events-none" />

        {/* Center Vignette: Enhances headline, subtitle and badge contrast over busy photographic details */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none" 
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.32) 55%, rgba(0,0,0,0.15) 100%)"
          }}
        />

        {/* Subtle Bottom Gradient for Clean Transition */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 md:pt-32 pb-24">
        {/* Animated Badge */}
        <div 
          key={`badge-${currentSlideIndex}`}
          className="inline-flex items-center px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-[#18E600]/40 text-[#18E600] text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(24,230,0,0.3)] animate-fade-in transition-all duration-500"
        >
          <span className="text-white drop-shadow">{displayTagline}</span>
        </div>

        {/* Master Headline - AI Expo Inspired Bold Impact */}
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
          {displaySubtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          <Link
            href="/packages"
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#18E600] hover:bg-[#15D600] text-black font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_0_25px_rgba(24,230,0,0.45)] hover:shadow-[0_0_40px_rgba(24,230,0,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2.5 rtl:space-x-reverse"
          >
            <span>{t.hero.exploreBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold text-sm sm:text-base tracking-wider border border-white/25 hover:border-white/50 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse"
          >
            <span>{t.hero.planBtn}</span>
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
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center bg-black/50 hover:bg-black/80 backdrop-blur-md text-white/80 hover:text-[#0BFF01] border border-white/15 hover:border-[#0BFF01]/60 transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center bg-black/50 hover:bg-black/80 backdrop-blur-md text-white/80 hover:text-[#0BFF01] border border-white/15 hover:border-[#0BFF01]/60 transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 group"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Carousel Slide Indicators & Auto-Play Controls (Bottom Right) */}
      <div className="absolute bottom-7 right-4 md:right-8 z-20 flex items-center space-x-3 rtl:space-x-reverse bg-black/60 backdrop-blur-xl px-3 py-2 rounded-full border border-white/10 text-xs text-white shadow-xl">
        {/* Slide Dots / Pill Bars */}
        <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${
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
          className="pl-1 text-gray-400 hover:text-[#0BFF01] transition-colors"
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
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-1 text-white/50 pointer-events-none">
        <span className="text-[10px] tracking-widest uppercase font-medium">{t.hero.scrollDown}</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#0BFF01]" />
      </div>
    </section>
  );
};
