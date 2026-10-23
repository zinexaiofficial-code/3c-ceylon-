"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO, getWhatsAppLink } from "@/data/company";
import { 
  ShieldCheck, 
  Heart, 
  Compass, 
  Car, 
  Users, 
  Award, 
  MessageCircle, 
  CheckCircle2,
  TreePine,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Play,
  Pause,
  Star
} from "lucide-react";

interface AboutSlide {
  id: string;
  image: string;
  alt: string;
  tagline: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
}

const ABOUT_CAROUSEL_SLIDES: AboutSlide[] = [
  {
    id: "kandy-temple-group",
    image: "/images/about-hero.png",
    alt: "Group Portrait at Kandy's Temple of the Tooth - 3C Ceylon Tours Cultural Travelers",
    tagline: "ABOUT 3C CEYLON TOURS",
    titlePrefix: "Crafting Journeys of ",
    titleHighlight: "True Distinction",
    subtitle: "Authentic storytelling, private luxury, and ethical island journeys curated by passionate local masters."
  },
  {
    id: "highland-heritage",
    image: "/images/hero/jungle-curve-blue-train-adventure.png",
    alt: "Jungle Curve Blue Train Adventure - Central Highlands of Sri Lanka",
    tagline: "PASSION FOR AUTHENTICITY",
    titlePrefix: "Our Legacy & ",
    titleHighlight: "Island Heritage",
    subtitle: "Curating bespoke expeditions across Sri Lanka's most breathtaking kingdoms, tea ridges, and cloud forests."
  },
  {
    id: "wildlife-stewardship",
    image: "/images/hero/three-elephants-in-lush-wetland.png",
    alt: "Three Elephants in a Lush Wetland - Minneriya and Udawalawe National Parks",
    tagline: "RESPONSIBLE & ETHICAL TOURISM",
    titlePrefix: "Vigilant Stewards of ",
    titleHighlight: "Wild Ceylon",
    subtitle: "Promoting ethical safari distances, fair local wages, and zero animal exploitation across all tours."
  },
  {
    id: "coastal-craftsmanship",
    image: "/images/hero/embracing-freedom-by-the-sea.png",
    alt: "Embracing Freedom by the Sea - Mirissa and Bentota Golden Coastlines",
    tagline: "CAREFULLY CURATED EXCELLENCE",
    titlePrefix: "Care, Comfort & ",
    titleHighlight: "Craftsmanship",
    subtitle: "The 3C Standard — your private sanctuary from your first airport welcome to your departure."
  }
];

const AUTO_PLAY_INTERVAL = 6000;

export default function AboutPage() {
  // Carousel State
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [mountedSlides, setMountedSlides] = useState<number[]>([0]);
  const touchStartXRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const next = (prev + 1) % ABOUT_CAROUSEL_SLIDES.length;
      setMountedSlides((m) => (m.includes(next) ? m : [...m, next]));
      return next;
    });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const p = (prev - 1 + ABOUT_CAROUSEL_SLIDES.length) % ABOUT_CAROUSEL_SLIDES.length;
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
    const nextIdx = (currentSlideIndex + 1) % ABOUT_CAROUSEL_SLIDES.length;
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

  const currentSlide = ABOUT_CAROUSEL_SLIDES[currentSlideIndex];

  return (
    <div className="bg-[#FAF8F2] min-h-screen text-[#172334] select-none">
      
      {/* ─────────────────────────────────────────────────────────────
          1. FULL-HEIGHT CINEMATIC CAROUSEL (Identical Home Page Format)
          - Height: min-h-[92vh] md:min-h-screen
          - Color pattern: Natural vibrant photo with subtle multi-layer vignette
          - Hero Typography: Bold Impact with #18E600 highlight
          - Primary image: Group Portrait at Kandy's Temple of the Tooth
         ───────────────────────────────────────────────────────────── */}
      <section 
        className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-roledescription="carousel"
        aria-label="3C Ceylon Tours Story and Heritage"
      >
        {/* Background Images Carousel Stack */}
        <div className="absolute inset-0 z-0">
          {ABOUT_CAROUSEL_SLIDES.map((slide, index) => {
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
              href="#about-content"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#18E600] hover:bg-[#15D600] text-black font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_0_25px_rgba(24,230,0,0.45)] hover:shadow-[0_0_40px_rgba(24,230,0,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2.5 rtl:space-x-reverse cursor-pointer"
            >
              <span>Discover Our Philosophy</span>
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
            {ABOUT_CAROUSEL_SLIDES.map((slide, idx) => (
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
          href="#about-content"
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-1 text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <span className="text-[10px] tracking-widest uppercase font-medium">Scroll to Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#0BFF01]" />
        </a>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. ABOUT PAGE MAIN CONTENT (Warm Ivory #FAF8F2 Background)
         ───────────────────────────────────────────────────────────── */}
      <div id="about-content" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative h-[520px] sm:h-[600px] lg:h-[640px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-200/90 bg-white group">
              <Image
                src="/images/about/executive-portrait.png"
                alt="3C Ceylon Tours Leadership & Founding Story"
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Shining sweep effect */}
              <div 
                className="pointer-events-none absolute inset-0 -translate-x-[140%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[240%] z-20" 
                aria-hidden="true"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-[#18E600]/15 border border-[#18E600]/30 text-[#0E6838] text-xs font-extrabold uppercase tracking-wider">
              <span>Our Founding Story</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172334] leading-tight tracking-tight">
              Crafting Journeys of Distinction
            </h2>

            <p className="text-sm sm:text-base text-[#526173] leading-relaxed font-normal">
              3C Ceylon Tours was established by Sri Lankan travel architects and seasoned naturalists committed to unhurried, private luxury travel rooted in deep island knowledge, authentic cultural encounters, and uncompromised traveler comfort.
            </p>

            <p className="text-sm sm:text-base text-[#526173] leading-relaxed font-normal">
              From our licensed chauffeur guides to our 24/7 dedicated travel concierge, every journey is curated from scratch to bring you into the real heart of Ceylon.
            </p>

            <div className="pt-2 flex items-center space-x-4 rtl:space-x-reverse">
              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm text-center flex-1">
                <span className="font-sans text-2xl sm:text-3xl font-extrabold text-[#0E6838] block tracking-tight">100%</span>
                <span className="text-[11px] text-[#526173] uppercase font-bold tracking-wider">Private & Tailor-Made</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm text-center flex-1">
                <span className="font-sans text-2xl sm:text-3xl font-extrabold text-[#172334] block tracking-tight">24/7</span>
                <span className="text-[11px] text-[#526173] uppercase font-bold tracking-wider">Concierge Care</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm text-center flex-1">
                <span className="font-sans text-2xl sm:text-3xl font-extrabold text-[#0E6838] block tracking-tight">5★</span>
                <span className="text-[11px] text-[#526173] uppercase font-bold tracking-wider">Verified Standards</span>
              </div>
            </div>
          </div>
        </div>

        {/* The 3C Philosophy (Care, Comfort, Craftsmanship) */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-gray-200/90 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0E6838]">
              Our Core DNA
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172334] tracking-tight">
              The 3C Travel Philosophy
            </h2>
            <p className="text-base text-[#526173] font-normal">
              Three foundational pillars guiding every itinerary we design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Care */}
            <div className="p-7 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#18E600]/70 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#172334] border border-[#172334] text-white flex items-center justify-center font-bold shadow-md">
                <Heart className="w-6 h-6 text-[#18E600]" />
              </div>
              <h3 className="font-sans text-xl font-extrabold text-[#172334] tracking-tight">1. Care (You &amp; Island)</h3>
              <p className="text-xs sm:text-sm text-[#526173] leading-relaxed font-normal">
                Round-the-clock WhatsApp support, fair village wages, and strictly ethical wildlife encounters without animal exploitation.
              </p>
            </div>

            {/* Pillar 2: Comfort */}
            <div className="p-7 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#18E600]/70 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#172334] border border-[#172334] text-white flex items-center justify-center font-bold shadow-md">
                <Car className="w-6 h-6 text-[#18E600]" />
              </div>
              <h3 className="font-sans text-xl font-extrabold text-[#172334] tracking-tight">2. Comfort (VIP Transport)</h3>
              <p className="text-xs sm:text-sm text-[#526173] leading-relaxed font-normal">
                Air-conditioned Mercedes, luxury minivans, and Prado SUVs with on-board Wi-Fi and handpicked boutique 5★ stays.
              </p>
            </div>

            {/* Pillar 3: Craftsmanship */}
            <div className="p-7 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#18E600]/70 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#172334] border border-[#172334] text-white flex items-center justify-center font-bold shadow-md">
                <Compass className="w-6 h-6 text-[#18E600]" />
              </div>
              <h3 className="font-sans text-xl font-extrabold text-[#172334] tracking-tight">3. Craftsmanship (Bespoke)</h3>
              <p className="text-xs sm:text-sm text-[#526173] leading-relaxed font-normal">
                Hand-crafted custom itineraries tailored to your unique travel style, pace, hobbies, and personal dreams.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white text-[#172334] rounded-3xl p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] space-y-4 border border-gray-200">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0E6838]">
              Our Vision
            </span>
            <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#172334] tracking-tight">
              The World&apos;s Most Trusted Gateway to Sri Lanka
            </h3>
            <p className="text-sm text-[#526173] font-normal leading-relaxed">
              Setting the international benchmark for authentic, ethical, and inspiring private luxury travel across Sri Lanka.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-200 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0E6838]">
              Our Mission
            </span>
            <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#172334] tracking-tight">
              Deliver Transformative Island Experiences
            </h3>
            <p className="text-sm text-[#526173] font-normal leading-relaxed">
              Flawless private journeys guided by licensed naturalists, transparent pricing, and 24/7 concierge care.
            </p>
          </div>
        </div>

        {/* Responsible Tourism & Wildlife Ethics */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-200 space-y-8">
          <div className="flex items-center space-x-3 rtl:space-x-reverse text-[#0E6838]">
            <TreePine className="w-7 h-7" />
            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172334] tracking-tight">
              Responsible Tourism &amp; Wildlife Ethics
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#526173] font-normal leading-relaxed max-w-4xl">
            Sri Lanka&apos;s delicate natural beauty and wildlife require vigilant stewardship. We enforce strict conservation guidelines across all operations:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex items-start space-x-3 rtl:space-x-reverse bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-[#0E6838] flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-extrabold text-sm text-[#172334]">Ethical Safari Distances</h4>
                <p className="text-xs text-[#526173] font-normal">We never crowd or harass wildlife. Jeep engines are shut down during sightings.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 rtl:space-x-reverse bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-[#0E6838] flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-extrabold text-sm text-[#172334]">No Animal Exploitation</h4>
                <p className="text-xs text-[#526173] font-normal">Strictly no elephant riding or captive shows. Only verified sanctuaries.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 rtl:space-x-reverse bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-[#0E6838] flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-extrabold text-sm text-[#172334]">Community Empowerment</h4>
                <p className="text-xs text-[#526173] font-normal">Directing tourism revenue directly to village artisans, naturalists, and local cooks.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 rtl:space-x-reverse bg-gray-50 p-4 rounded-2xl border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-[#0E6838] flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-extrabold text-sm text-[#172334]">Plastic Reduction</h4>
                <p className="text-xs text-[#526173] font-normal">Promoting refillable bottles and eliminating single-use plastics.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditations & Trust */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm space-y-6">
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#172334] text-center tracking-tight">
            Official Accreditations &amp; Standards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {COMPANY_INFO.certifications.map((cert, i) => (
              <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-center space-x-3 rtl:space-x-reverse">
                <ShieldCheck className="w-5 h-5 text-[#0E6838] flex-shrink-0" />
                <span className="text-xs font-bold text-[#172334]">{cert}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
