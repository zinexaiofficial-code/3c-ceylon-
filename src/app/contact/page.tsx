"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { COMPANY_INFO, getWhatsAppLink, getSecondaryWhatsAppLink } from "@/data/company";
import { useCookieConsent } from "@/context/CookieConsentContext";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ShieldCheck, 
  Calendar,
  Compass,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Play,
  Pause
} from "lucide-react";

interface ContactSlide {
  id: string;
  image: string;
  alt: string;
  tagline: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
}

const CONTACT_CAROUSEL_SLIDES: ContactSlide[] = [
  {
    id: "surf-adventure",
    image: "/images/contact-hero.png",
    alt: "Joyful Tropical Surf Adventure - Sri Lanka Beach and Bespoke Holidays",
    tagline: "BESPOKE TRAVEL CONCIERGE",
    titlePrefix: "Plan Your Bespoke ",
    titleHighlight: "Ceylon Journey",
    subtitle: "Connect directly with our senior destination architects for a personalized holiday itinerary within 24 hours."
  },
  {
    id: "highland-routes",
    image: "/images/hero/jungle-curve-blue-train-adventure.png",
    alt: "Jungle Curve Blue Train Adventure - Central Highlands of Sri Lanka",
    tagline: "TAILOR-MADE FREEDOM",
    titlePrefix: "Custom Routes & ",
    titleHighlight: "VIP Chauffeurs",
    subtitle: "First-class scenic train passes, private 5-star chauffeur guides, and handpicked boutique stays."
  },
  {
    id: "wildlife-safaris",
    image: "/images/hero/three-elephants-in-lush-wetland.png",
    alt: "Three Elephants in a Lush Wetland - Minneriya and Udawalawe National Parks",
    tagline: "AUTHENTIC LOCAL EXPERTISE",
    titlePrefix: "Big Game Safaris & ",
    titleHighlight: "Certified Naturalists",
    subtitle: "We arrange exclusive park permits, private 4x4 open-top jeeps, and luxury tented glamping."
  },
  {
    id: "coastal-peace",
    image: "/images/hero/embracing-freedom-by-the-sea.png",
    alt: "Embracing Freedom by the Sea - Mirissa and Bentota Golden Coastlines",
    tagline: "24/7 DEDICATED CONCIERGE",
    titlePrefix: "Seamless Island ",
    titleHighlight: "Holiday Planning",
    subtitle: "Round-the-clock WhatsApp support from your first inquiry until you return home safely."
  }
];

const AUTO_PLAY_INTERVAL = 6000;

export default function ContactPage() {
  const { consent, acceptAll } = useCookieConsent();

  // Carousel State
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [mountedSlides, setMountedSlides] = useState<number[]>([0]);
  const [isMapInView, setIsMapInView] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const next = (prev + 1) % CONTACT_CAROUSEL_SLIDES.length;
      setMountedSlides((m) => (m.includes(next) ? m : [...m, next]));
      return next;
    });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const p = (prev - 1 + CONTACT_CAROUSEL_SLIDES.length) % CONTACT_CAROUSEL_SLIDES.length;
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
    const nextIdx = (currentSlideIndex + 1) % CONTACT_CAROUSEL_SLIDES.length;
    setMountedSlides((prev) => {
      const needed = [currentSlideIndex, nextIdx];
      const missing = needed.filter((idx) => !prev.includes(idx));
      return missing.length > 0 ? [...prev, ...missing] : prev;
    });
  }, [currentSlideIndex]);

  // Lazy-load Google Maps only when section approaches viewport
  useEffect(() => {
    if (!mapContainerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsMapInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(mapContainerRef.current);
    return () => observer.disconnect();
  }, []);

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

  const currentSlide = CONTACT_CAROUSEL_SLIDES[currentSlideIndex];

  return (
    <div className="bg-[#FAF8F2] min-h-screen text-[#172334] select-none">
      
      {/* ─────────────────────────────────────────────────────────────
          1. FULL-HEIGHT CINEMATIC CAROUSEL (Identical Home Page Format)
          - Height: min-h-[92vh] md:min-h-screen
          - Color pattern: Natural vibrant photo with subtle multi-layer vignette
          - Hero Typography: Bold Impact with #18E600 highlight
          - Primary image: Joyful Tropical Surf Adventure
         ───────────────────────────────────────────────────────────── */}
      <section 
        className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-roledescription="carousel"
        aria-label="3C Ceylon Tours Bespoke Holiday Planning"
      >
        {/* Background Images Carousel Stack */}
        <div className="absolute inset-0 z-0">
          {CONTACT_CAROUSEL_SLIDES.map((slide, index) => {
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
              href="#contact-section"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#18E600] hover:bg-[#15D600] text-black font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_0_25px_rgba(24,230,0,0.45)] hover:shadow-[0_0_40px_rgba(24,230,0,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2.5 rtl:space-x-reverse cursor-pointer"
            >
              <span>Start Planning Below</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold text-sm sm:text-base tracking-wider border border-white/25 hover:border-white/50 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <MessageCircle className="w-4 h-4 text-[#18E600]" />
              <span>WhatsApp Concierge</span>
            </a>
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
            {CONTACT_CAROUSEL_SLIDES.map((slide, idx) => (
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
          href="#contact-section"
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-1 text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <span className="text-[10px] tracking-widest uppercase font-medium">Scroll to Inquiry Form</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#0BFF01]" />
        </a>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CONTACT & INQUIRY FORM SECTION (Warm Ivory #FAF8F2 Background)
         ───────────────────────────────────────────────────────────── */}
      <div id="contact-section" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Inquiries & Office Info */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Card */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-gray-200/90 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0E6838]">
                  Colombo Operations Hub
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172334] tracking-tight mt-1">
                  Direct Contact Concierge
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#526173] leading-relaxed font-normal">
                Reach out at any time. Our Colombo headquarters operates round-the-clock to assist international travelers across all time zones.
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* 24/7 WhatsApp Concierge Lines */}
                <div className="space-y-2.5">
                  <span className="block text-[11px] uppercase font-bold tracking-wider text-[#0E6838]">
                    24/7 WhatsApp Concierge (Both Numbers Active)
                  </span>
                  
                  {/* WhatsApp Line 1 */}
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-[#18E600]/15 border border-[#18E600]/40 hover:bg-[#18E600]/25 text-[#0E6838] font-bold flex items-center justify-between transition-all shadow-sm group"
                  >
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="w-9 h-9 rounded-full bg-[#18E600] flex items-center justify-center text-black flex-shrink-0 shadow-sm">
                        <MessageCircle className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase font-bold text-[#0E6838]">Line 1 • Primary Concierge</span>
                        <span className="text-sm font-extrabold text-[#172334] group-hover:text-[#0E6838] transition-colors">
                          {COMPANY_INFO.whatsappFormatted}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white text-[#0E6838] border border-[#18E600]/30 shadow-xs">
                      Chat Now
                    </span>
                  </a>

                  {/* WhatsApp Line 2 */}
                  <a
                    href={getSecondaryWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-[#18E600]/15 border border-[#18E600]/40 hover:bg-[#18E600]/25 text-[#0E6838] font-bold flex items-center justify-between transition-all shadow-sm group"
                  >
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="w-9 h-9 rounded-full bg-[#18E600] flex items-center justify-center text-black flex-shrink-0 shadow-sm">
                        <MessageCircle className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase font-bold text-[#0E6838]">Line 2 • Reservations &amp; Inquiries</span>
                        <span className="text-sm font-extrabold text-[#172334] group-hover:text-[#0E6838] transition-colors">
                          {COMPANY_INFO.whatsappSecondaryFormatted}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white text-[#0E6838] border border-[#18E600]/30 shadow-xs">
                      Chat Now
                    </span>
                  </a>
                </div>

                {/* Direct Calling Lines */}
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                  <div className="flex items-center space-x-2 text-[#526173]">
                    <Phone className="w-4 h-4 text-[#0E6838]" />
                    <span className="text-[10px] uppercase font-bold tracking-wider">Direct Calling Lines</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-gray-200/60">
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                      className="p-2.5 rounded-lg bg-white border border-gray-200 hover:border-[#0E6838] text-xs font-bold text-[#172334] hover:text-[#0E6838] transition-all flex items-center justify-between"
                    >
                      <span>{COMPANY_INFO.phone}</span>
                      <span className="text-[10px] text-gray-400 font-semibold">Primary</span>
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.phoneSecondary.replace(/\s+/g, '')}`}
                      className="p-2.5 rounded-lg bg-white border border-gray-200 hover:border-[#0E6838] text-xs font-bold text-[#172334] hover:text-[#0E6838] transition-all flex items-center justify-between"
                    >
                      <span>{COMPANY_INFO.phoneSecondary}</span>
                      <span className="text-[10px] text-gray-400 font-semibold">Line 2</span>
                    </a>
                  </div>
                </div>

                {/* Official Email */}
                <div className="flex items-center space-x-3 rtl:space-x-reverse p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <Mail className="w-5 h-5 text-[#0E6838] flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-[#526173]">Official Inquiries Email</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-[#172334] hover:text-[#0E6838] transition-colors break-all">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 rtl:space-x-reverse p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <MapPin className="w-5 h-5 text-[#0E6838] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-[#526173]">Headquarters Location</span>
                    <p className="text-[#172334] text-xs font-medium">
                      {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.postalCode}, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 rtl:space-x-reverse p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <Clock className="w-5 h-5 text-[#0E6838] flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-[#526173]">Concierge Support Hours</span>
                    <p className="text-[#172334] text-xs font-medium">{COMPANY_INFO.officeHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Colombo Location Map */}
            <div className="bg-white rounded-3xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-gray-200/90 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0E6838] flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-[#0E6838]" />
                <span>Our Location: Colombo World Trade Center</span>
              </span>
              <div ref={mapContainerRef} className="w-full h-56 rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 flex items-center justify-center">
                {isMapInView ? (
                  consent === "rejected" ? (
                    <div className="flex flex-col items-center justify-center p-5 text-center space-y-2 bg-gray-50 h-full w-full">
                      <div className="w-8 h-8 rounded-full bg-[#0E6838]/10 text-[#0E6838] flex items-center justify-center">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <p className="text-xs text-gray-600 max-w-xs leading-relaxed">
                        Interactive map is paused because optional third-party services are disabled.
                      </p>
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          type="button"
                          onClick={acceptAll}
                          className="px-3 py-1.5 rounded-lg bg-[#0E6838] hover:bg-[#0A4D2A] text-white text-[11px] font-bold transition-colors"
                        >
                          Enable Map
                        </button>
                        <a
                          href="https://maps.google.com/?q=6.9338,79.8433"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700 text-[11px] font-medium transition-colors"
                        >
                          Open in Google Maps ↗
                        </a>
                      </div>
                    </div>
                  ) : (
                    <iframe
                      title="3C Ceylon Tours Colombo Head Office"
                      src="https://maps.google.com/maps?q=6.9338,79.8433&z=15&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  )
                ) : (
                  <span className="text-xs text-gray-400 font-medium">Loading Map...</span>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Multi-Step Trip Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
