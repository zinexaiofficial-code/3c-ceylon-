"use client";

import React, { useState, useMemo, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { GUIDE_ARTICLES, GuideArticle } from "@/data/guideArticles";
import { getWhatsAppLink } from "@/data/company";
import { 
  Compass, 
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
  Search,
  SlidersHorizontal,
  Clock,
  BookOpen
} from "lucide-react";

interface BlogSlide {
  id: string;
  image: string;
  alt: string;
  tagline: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
}

const BLOG_CAROUSEL_SLIDES: BlogSlide[] = [
  {
    id: "forest-tour-guide",
    image: "/images/blog-hero.png",
    alt: "Animated Forest Tour Guide - Sri Lanka Travel Advice and Naturalist Insights",
    tagline: "EXPERT TRAVEL INTELLIGENCE",
    titlePrefix: "The Official ",
    titleHighlight: "Ceylon Travel Guide",
    subtitle: "Insider wisdom, packing advice, seasonal weather breakdowns, and curated route itineraries."
  },
  {
    id: "highland-routes",
    image: "/images/hero/jungle-curve-blue-train-adventure.png",
    alt: "Jungle Curve Blue Train Adventure - Central Highlands of Sri Lanka",
    tagline: "ITINERARIES & HIDDEN GEMS",
    titlePrefix: "Highland Railways & ",
    titleHighlight: "Secret Tea Trails",
    subtitle: "How to catch the iconic scenic blue train, explore Ella's ravines, and avoid crowds."
  },
  {
    id: "wildlife-seasons",
    image: "/images/hero/three-elephants-in-lush-wetland.png",
    alt: "Three Elephants in a Lush Wetland - Minneriya and Udawalawe National Parks",
    tagline: "SAFARI MASTERY & ADVICE",
    titlePrefix: "Leopard Tracking & ",
    titleHighlight: "Safari Seasons",
    subtitle: "The best months and national parks to encounter the Big Four with master resident naturalists."
  },
  {
    id: "coastal-secrets",
    image: "/images/hero/embracing-freedom-by-the-sea.png",
    alt: "Embracing Freedom by the Sea - Mirissa and Bentota Golden Coastlines",
    tagline: "TROPICAL BEACH ADVICE",
    titlePrefix: "Whale Watching & ",
    titleHighlight: "Southern Shores",
    subtitle: "Best seasons for Mirissa blue whales, secret surf bays, and colonial Galle Fort explorations."
  }
];

const AUTO_PLAY_INTERVAL = 6000;

export default function BlogListingPage() {
  // Carousel State
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [mountedSlides, setMountedSlides] = useState<number[]>([0]);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const next = (prev + 1) % BLOG_CAROUSEL_SLIDES.length;
      setMountedSlides((m) => (m.includes(next) ? m : [...m, next]));
      return next;
    });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const p = (prev - 1 + BLOG_CAROUSEL_SLIDES.length) % BLOG_CAROUSEL_SLIDES.length;
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
    const nextIdx = (currentSlideIndex + 1) % BLOG_CAROUSEL_SLIDES.length;
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

  // Filtered Guide Articles
  const filteredArticles = useMemo(() => {
    return GUIDE_ARTICLES.filter((article) => {
      // Category filter
      if (selectedCategory !== "all") {
        if (article.category !== selectedCategory) return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = article.title.toLowerCase().includes(query);
        const matchesExcerpt = article.excerpt.toLowerCase().includes(query);
        const matchesCategory = article.category.toLowerCase().includes(query);
        if (!matchesTitle && !matchesExcerpt && !matchesCategory) return false;
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  const handleReset = () => {
    setSelectedCategory("all");
    setSearchQuery("");
  };

  const currentSlide = BLOG_CAROUSEL_SLIDES[currentSlideIndex];

  return (
    <div className="bg-[#FAF8F2] min-h-screen text-[#172334] select-none">
      
      {/* ─────────────────────────────────────────────────────────────
          1. FULL-HEIGHT CINEMATIC CAROUSEL (Identical Home Page Pattern)
          - Height: min-h-[92vh] md:min-h-screen
          - Primary image: Animated Forest Tour Guide
         ───────────────────────────────────────────────────────────── */}
      <section 
        className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-roledescription="carousel"
        aria-label="3C Ceylon Tours Travel Guide"
      >
        {/* Background Images Carousel Stack */}
        <div className="absolute inset-0 z-0">
          {BLOG_CAROUSEL_SLIDES.map((slide, index) => {
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
              href="#guide-content-section"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#18E600] hover:bg-[#15D600] text-black font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_0_25px_rgba(24,230,0,0.45)] hover:shadow-[0_0_40px_rgba(24,230,0,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2.5 rtl:space-x-reverse cursor-pointer"
            >
              <span>Explore Travel Guides</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold text-sm sm:text-base tracking-wider border border-white/25 hover:border-white/50 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <span>Ask a Chauffeur Specialist</span>
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
            {BLOG_CAROUSEL_SLIDES.map((slide, idx) => (
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
          href="#guide-content-section"
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-1 text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <span className="text-[10px] tracking-widest uppercase font-medium">Scroll to Guide</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#0BFF01]" />
        </a>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. GUIDE CONTENT SECTION (Structure matching Visit My Sri Lanka)
          - Badge: KNOW BEFORE YOU GO
          - Title: Everything you need to travel Sri Lanka well.
          - Subtitle: Use our Sri Lanka travel guide...
          - Section Tagline: Local knowledge for better journeys.
          - 3-Column Luxury Card Grid (Images from images/guide)
          - NO "READ MORE" button (as explicitly requested)
         ───────────────────────────────────────────────────────────── */}
      <section id="guide-content-section" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-24">
        
        {/* Editorial Header (Matching Visit My Sri Lanka) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 space-y-5">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#18E600]/15 text-[#0E6838] border border-[#18E600]/30 text-xs font-black uppercase tracking-widest">
            KNOW BEFORE YOU GO
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#172334] tracking-tight leading-tight">
            Everything you need to travel Sri Lanka well.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#526173] leading-relaxed font-normal max-w-3xl mx-auto">
            Use our Sri Lanka travel guide to explore destinations, discover experiences and prepare for your trip. Browse the articles below for practical advice and inspiration for your journey.
          </p>

          <div className="pt-2">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0E6838]">
              Local knowledge for better journeys.
            </span>
          </div>

          <div className="w-24 h-1 bg-[#18E600] mx-auto rounded-full mt-4" />
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-12 bg-white rounded-3xl p-5 sm:p-6 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-gray-200/90 space-y-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full lg:w-1/3">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search guide (Wedding, Cost, Chauffeur, Honeymoon, Safaris)..."
                className="w-full pl-10 pr-4 py-3 rounded-full bg-gray-50 border border-gray-200 text-xs sm:text-sm text-[#172334] placeholder-gray-400 focus:outline-none focus:border-[#18E600] focus:ring-1 focus:ring-[#18E600] transition-all"
              />
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              {[
                { id: "all", label: "All Guides" },
                { id: "Travel Planning", label: "Travel Planning" },
                { id: "Destinations", label: "Destinations" },
                { id: "Experiences", label: "Experiences" },
              ].map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? "bg-[#18E600] text-black shadow-[0_0_15px_rgba(24,230,0,0.4)]" 
                        : "bg-gray-100 text-[#526173] hover:bg-gray-200 hover:text-[#172334]"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}

              {/* Reset Button */}
              {(selectedCategory !== "all" || searchQuery) && (
                <button
                  onClick={handleReset}
                  className="px-3.5 py-2 rounded-full bg-red-50 border border-red-200 text-red-600 hover:bg-red-100 text-xs font-bold flex items-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear</span>
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#526173] border-t border-gray-100 pt-3">
            <span>Showing <strong className="text-[#172334] font-bold">{filteredArticles.length}</strong> verified travel intelligence guides</span>
            <span className="text-[#0E6838] font-bold hidden sm:inline">Written by 3C Ceylon Tours Master Local Chauffeurs</span>
          </div>
        </div>

        {/* 3-Column Guide Articles Grid (Matching Visit My Sri Lanka - NO READ MORE BUTTON) */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredArticles.map((article) => (
              <div 
                key={article.id}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(24,230,0,0.18)] border border-gray-200/80 hover:border-[#18E600]/60 transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Top Image Container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-950">
                  <Image
                    src={article.image}
                    alt={article.title}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity z-10" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-black/75 text-[#18E600] border border-[#18E600]/40 backdrop-blur-md shadow-sm">
                      {article.category}
                    </span>
                  </div>

                  {/* Read Time Pill */}
                  <div className="absolute bottom-3 right-3 z-20 px-2.5 py-1 rounded-full bg-black/60 text-white text-[10px] font-medium backdrop-blur-md flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-[#18E600]" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Card Content (Bottom) - No Read More Button */}
                <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between space-y-3">
                  <div className="space-y-2.5">
                    <h3 className="font-serif text-xl sm:text-[22px] font-bold text-[#172334] group-hover:text-[#0E6838] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#526173] leading-relaxed font-normal">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 max-w-xl mx-auto space-y-4 shadow-sm">
            <BookOpen className="w-12 h-12 text-[#18E600] mx-auto" />
            <h3 className="font-sans text-2xl font-extrabold text-[#172334] tracking-tight">No Guides Found</h3>
            <p className="text-sm text-[#526173] leading-relaxed font-normal">
              Try a different keyword or reset filters to browse all Sri Lanka travel guides.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-[#172334] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Reset Search Filters
            </button>
          </div>
        )}

        {/* Bottom Bespoke Callout */}
        <div className="mt-20 bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 text-center max-w-3xl mx-auto shadow-sm space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-50 text-[#0E6838] text-xs font-bold uppercase tracking-wider border border-emerald-200">
            <Compass className="w-4 h-4 text-[#0E6838]" />
            <span>Ready to Plan Your Journey?</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#172334] tracking-tight">
            Have Questions About Planning Your Sri Lanka Trip?
          </h3>

          <p className="text-sm sm:text-base text-[#526173] max-w-xl mx-auto leading-relaxed">
            Our private tour specialists are on hand to provide personalized advice on routes, weather, hotel recommendations, and private chauffeur bookings.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink("Hello 3C Ceylon Tours, I am planning a trip to Sri Lanka and would like advice on itineraries, travel costs, and private chauffeur bookings.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#18E600] hover:bg-[#15D600] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask a Specialist via WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-[#172334] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}
