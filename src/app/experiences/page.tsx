"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { EXPERIENCES, TravelExperience } from "@/data/experiences";
import { getWhatsAppLink } from "@/data/company";
import { 
  Compass, 
  MessageCircle, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Play,
  Pause,
  ShieldCheck,
  Star
} from "lucide-react";

interface ExperienceSlide {
  id: string;
  image: string;
  alt: string;
  tagline: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
}

const EXPERIENCE_CAROUSEL_SLIDES: ExperienceSlide[] = [
  {
    id: "romance-sigiriya",
    image: "/images/experiences-hero.png",
    alt: "Romance Beneath Sigiriya Rock - Sri Lanka Luxury Honeymoon and Romantic Experiences",
    tagline: "CURATED THEMATIC JOURNEYS",
    titlePrefix: "Extraordinary ",
    titleHighlight: "Ceylon Experiences",
    subtitle: "Handcrafted themes celebrating romance, untamed wildlife, ancient wisdom, and private coastal escapes."
  },
  {
    id: "safari-wildlife",
    image: "/images/hero/three-elephants-in-lush-wetland.png",
    alt: "Three Elephants in a Lush Wetland - Minneriya and Udawalawe National Parks",
    tagline: "BIG FOUR WILDLIFE SAFARIS",
    titlePrefix: "Untamed Nature & ",
    titleHighlight: "Safari Expeditions",
    subtitle: "Thrilling 4x4 safaris across ancient national parks guided by expert private naturalists."
  },
  {
    id: "highland-trains",
    image: "/images/hero/jungle-curve-blue-train-adventure.png",
    alt: "Jungle Curve Blue Train Adventure - Central Highlands of Sri Lanka",
    tagline: "SCENIC RAILWAYS & TEA RIDGES",
    titlePrefix: "Highland Railways & ",
    titleHighlight: "Tea Trails",
    subtitle: "Scenic first-class train journeys through misty mountain tea estates and cascading waterfalls."
  },
  {
    id: "tropical-retreats",
    image: "/images/hero/embracing-freedom-by-the-sea.png",
    alt: "Embracing Freedom by the Sea - Mirissa and Bentota Golden Coastlines",
    tagline: "TROPICAL OCEAN SANCTUARIES",
    titlePrefix: "Golden Coasts & ",
    titleHighlight: "Private Retreats",
    subtitle: "Exclusive coastal villas, secluded sunset beaches, and ocean catamaran cruises."
  }
];

const AUTO_PLAY_INTERVAL = 6000;

export default function ExperiencesPage() {
  // Carousel State
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [mountedSlides, setMountedSlides] = useState<number[]>([0]);
  const touchStartXRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const next = (prev + 1) % EXPERIENCE_CAROUSEL_SLIDES.length;
      setMountedSlides((m) => (m.includes(next) ? m : [...m, next]));
      return next;
    });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const p = (prev - 1 + EXPERIENCE_CAROUSEL_SLIDES.length) % EXPERIENCE_CAROUSEL_SLIDES.length;
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
    const nextIdx = (currentSlideIndex + 1) % EXPERIENCE_CAROUSEL_SLIDES.length;
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

  const currentSlide = EXPERIENCE_CAROUSEL_SLIDES[currentSlideIndex];

  return (
    <div className="bg-[#FAF8F2] min-h-screen text-[#172334] select-none">
      
      {/* ─────────────────────────────────────────────────────────────
          1. FULL-HEIGHT CINEMATIC CAROUSEL (Identical Home Page Pattern)
          - Height: min-h-[92vh] md:min-h-screen
          - Color pattern: Natural vibrant photo with subtle multi-layer vignette
          - Hero Typography: Bold Impact with #18E600 highlight
          - Primary image: Romance Beneath Sigiriya Rock
         ───────────────────────────────────────────────────────────── */}
      <section 
        className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-roledescription="carousel"
        aria-label="3C Ceylon Tours Travel Experiences"
      >
        {/* Background Images Carousel Stack */}
        <div className="absolute inset-0 z-0">
          {EXPERIENCE_CAROUSEL_SLIDES.map((slide, index) => {
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

          {/* Multi-Layer Natural Readability Overlay */}
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/85 via-black/40 to-transparent z-10 pointer-events-none" />

          <div 
            className="absolute inset-0 z-10 pointer-events-none" 
            style={{
              background: "radial-gradient(ellipse at center, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0.12) 100%)"
            }}
          />

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

          {/* Master Headline */}
          <h1 
            key={`headline-${currentSlideIndex}`}
            className="font-sans text-[42px] sm:text-[58px] md:text-[72px] lg:text-[88px] xl:text-[96px] font-black text-white tracking-tight leading-[1.02] mb-6 drop-shadow-[0_4px_28px_rgba(0,0,0,0.98)] animate-fade-in transition-all duration-700 select-none"
          >
            {currentSlide.titlePrefix}
            <span className="text-[#18E600] drop-shadow-[0_0_35px_rgba(24,230,0,0.65)]">
              {currentSlide.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            key={`sub-${currentSlideIndex}`}
            className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-white font-medium leading-relaxed mb-10 drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] animate-fade-in transition-all duration-700"
          >
            {currentSlide.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
            <a
              href="#experiences-section"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#18E600] hover:bg-[#15D600] text-black font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_0_25px_rgba(24,230,0,0.45)] hover:shadow-[0_0_40px_rgba(24,230,0,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2.5 rtl:space-x-reverse cursor-pointer"
            >
              <span>Explore All Experiences</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold text-sm sm:text-base tracking-wider border border-white/25 hover:border-white/50 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <span>Design Bespoke Theme</span>
            </Link>
          </div>

          {/* Trust Badges */}
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

        {/* Carousel Navigation Chevron Arrows */}
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

        {/* Carousel Slide Indicators */}
        <div className="absolute bottom-7 right-4 md:right-8 z-20 flex items-center space-x-3 rtl:space-x-reverse bg-black/60 backdrop-blur-xl px-3 py-2 rounded-full border border-white/10 text-xs text-white shadow-xl">
          <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
            {EXPERIENCE_CAROUSEL_SLIDES.map((slide, idx) => (
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
          href="#experiences-section"
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-1 text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <span className="text-[10px] tracking-widest uppercase font-medium">Scroll to Experiences</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#0BFF01]" />
        </a>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. EXPERIENCES CONTENT SECTION (Matching Blue Lanka Tours)
          - Header: Large serif "Experiences"
          - Intro text explaining Sri Lanka's exotic getaways
          - 3-Column Luxury Card Grid with Images from images/Experiences
          - NO "READ MORE" button (as instructed by user)
         ───────────────────────────────────────────────────────────── */}
      <section id="experiences-section" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-24">
        
        {/* Editorial Header & Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 space-y-5">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#18E600]/15 text-[#0E6838] border border-[#18E600]/30 text-xs font-black uppercase tracking-widest">
            Unforgettable Sri Lanka
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#172334] tracking-tight leading-tight">
            Experiences
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#526173] leading-relaxed font-normal max-w-3xl mx-auto">
            Sri Lanka is one of the most exotic getaways in the world. Surrounded by the azure Indian Ocean, this island paradise has contrasting landscapes, stretches of golden sandy beaches and a wealth of wildlife and culture to discover. It is home to 8 UNESCO World Heritage Sites, 15 national parks showcasing spectacular wildlife and nearly 500,000 acres of lush tea estates.
          </p>

          <div className="w-24 h-1 bg-[#18E600] mx-auto rounded-full mt-6" />
        </div>

        {/* 3-Column Experiences Grid (Matching Blue Lanka Tours structure without Read More button) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {EXPERIENCES.map((exp) => (
            <div 
              key={exp.id}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(24,230,0,0.18)] border border-gray-200/80 hover:border-[#18E600]/60 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Card Image Container (Top) */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-950">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  quality={88}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Shining Light Sweep Effect on Hover (Inspired by Home Page) */}
                <div 
                  className="pointer-events-none absolute inset-0 -translate-x-[140%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[240%] z-20" 
                  aria-hidden="true"
                />

                {/* Soft Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity z-10" />
              </div>

              {/* Card Content (Bottom) - Centered text matching Blue Lanka Tours */}
              <div className="flex-1 p-7 sm:p-8 text-center flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl sm:text-[26px] font-bold text-[#172334] group-hover:text-[#0E6838] transition-colors leading-snug">
                    {exp.title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-[#526173] leading-relaxed font-normal">
                    {exp.shortDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bespoke Callout */}
        <div className="mt-20 bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 text-center max-w-3xl mx-auto shadow-sm space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-50 text-[#0E6838] text-xs font-bold uppercase tracking-wider border border-emerald-200">
            <Compass className="w-4 h-4 text-[#0E6838]" />
            <span>Tailor-Made Tour Experiences</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#172334] tracking-tight">
            Want to Include These Experiences in Your Private Journey?
          </h3>

          <p className="text-sm sm:text-base text-[#526173] max-w-xl mx-auto leading-relaxed">
            Our luxury travel specialists will seamlessly weave these authentic experiences, private chauffeur transfers, and 5-star boutique accommodations into a customized itinerary tailored specifically for you.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink("Hello 3C Ceylon Tours, I am interested in customizing an itinerary with authentic Sri Lanka experiences (Yoga, Ayurveda, Wildlife, Culture). Can you assist me?")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#18E600] hover:bg-[#15D600] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-[#172334] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
            >
              <span>Plan Custom Tour</span>
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}
