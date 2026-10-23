"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { TESTIMONIALS, Testimonial } from "@/data/testimonials";
import { getWhatsAppLink } from "@/data/company";
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  MessageCircle,
  Award,
  CheckCircle2
} from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const total = TESTIMONIALS.length;

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("next");
    setCurrentIndex((prev) => (prev + 1) % total);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, total]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, total]);

  const handleSelect = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    setIsAnimating(true);
    setSlideDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Continuous auto-play loop (slides every 6 seconds, pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Keyboard arrow keys navigation (left / right arrows)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch swipe support for mobile/tablets
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    setTouchStart(null);
  };

  const currentItem: Testimonial = TESTIMONIALS[currentIndex];

  return (
    <section 
      id="testimonials"
      className="pt-10 pb-14 sm:pt-14 sm:pb-18 relative overflow-hidden bg-[#FAF8F2] text-[#172334] select-none"
      aria-label="Client Testimonials and Reviews"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Ceylon Expeditions */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-[#18E600]/15 text-[#123B2A] border border-[#18E600]/30 text-[11px] font-extrabold uppercase tracking-widest mb-2 shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#123B2A]" />
            <span>TESTIMONIALS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172334] tracking-tight leading-[1.08] mb-2">
            Clients Will Tell You The Experience.
          </h2>

          <p className="text-sm sm:text-base text-[#526173] font-normal max-w-xl mx-auto">
            Unfiltered feedback and unforgettable memories from international travelers who explored Sri Lanka with 3C Ceylon Tours.
          </p>
        </div>

        {/* Testimonials Main Card Container */}
        <div 
          className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.14)] border border-black/5 bg-[#2B2921]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main 2-Column Split: Left Image + Right Comment */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] sm:min-h-[540px] lg:min-h-[560px]">
            
            {/* ─────────────────────────────────────────────────────────────
                LEFT SIDE: CLIENT PHOTO (Natural Color, Always Visible)
               ───────────────────────────────────────────────────────────── */}
            <div className="lg:col-span-6 relative w-full h-[340px] sm:h-[420px] lg:h-full min-h-[340px] bg-gray-900 overflow-hidden">
              <Image
                key={currentItem.image}
                src={currentItem.image}
                alt={`${currentItem.name} on tour in Sri Lanka with 3C Ceylon Tours`}
                fill
                quality={88}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-all duration-700 ease-out animate-fadeIn"
              />

              {/* Gradient overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

              {/* Verified Traveler Badge overlay on top */}
              <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 text-xs font-semibold shadow-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#18E600]" />
                  <span>Verified Guest</span>
                </span>
              </div>

              {/* Tour Taken badge on bottom */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="inline-block px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-[#172334] text-xs font-bold shadow-md border border-black/5">
                  <span className="text-[#123B2A] font-extrabold mr-1.5">Itinerary:</span>
                  <span>{currentItem.tourTaken}</span>
                </div>
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────────
                RIGHT SIDE: TESTIMONIAL COMMENT CARD
                (Inspired by Ceylon Expeditions warm dark-olive palette)
               ───────────────────────────────────────────────────────────── */}
            <div className="lg:col-span-6 bg-[#2B2921] text-white p-6 sm:p-10 lg:p-12 flex flex-col justify-between relative">
              
              {/* Background watermark quote */}
              <Quote className="absolute right-6 top-8 w-24 h-24 text-white/[0.04] pointer-events-none" />

              {/* Content with smooth fade-in */}
              <div 
                key={`content-${currentIndex}`} 
                className="space-y-4 sm:space-y-5 relative z-10 transition-all duration-500 animate-fadeIn"
              >
                {/* 5 Gold Stars Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(currentItem.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                </div>

                {/* Big Quote Symbol */}
                <div className="text-3xl sm:text-4xl text-[#F59E0B] font-serif font-bold leading-none">
                  &ldquo;
                </div>

                {/* Review Quote Headline */}
                <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-white leading-snug tracking-tight">
                  {currentItem.quote}
                </h3>

                {/* Full Review Text */}
                <p className="text-sm sm:text-[15px] text-[#E2E8F0]/90 leading-relaxed font-normal">
                  &ldquo;{currentItem.review}&rdquo;
                </p>
              </div>

              {/* Bottom Details & Ceylon Expeditions Circular Navigation Buttons */}
              <div className="pt-6 mt-6 border-t border-white/15 flex items-end justify-between relative z-10">
                <div key={`author-${currentIndex}`} className="animate-fadeIn">
                  <h4 className="font-extrabold text-lg text-white tracking-tight flex items-center space-x-2">
                    <span>{currentItem.name}</span>
                    <span title={currentItem.country} className="text-base">{currentItem.flag}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#F59E0B] font-medium mt-0.5">
                    {currentItem.country}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {currentItem.date}
                  </p>

                  {/* WhatsApp Quick Chat Link */}
                  <a
                    href={getWhatsAppLink(`Hi 3C Ceylon Tours, I saw the review by ${currentItem.name} from ${currentItem.country} and would like to plan a similar Sri Lanka tour!`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 mt-3 text-[11px] font-bold text-[#18E600] hover:text-[#52FF3D] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>

                {/* Ceylon Expeditions Circular Arrow Buttons (Stacked or Side-by-Side) */}
                <div className="flex flex-col sm:flex-row items-center gap-2.5 flex-shrink-0">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                    className="w-12 h-12 rounded-full border-2 border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-[#2B2921] flex items-center justify-center transition-all duration-300 active:scale-95 shadow-md cursor-pointer group"
                  >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next testimonial"
                    className="w-12 h-12 rounded-full border-2 border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-[#2B2921] flex items-center justify-center transition-all duration-300 active:scale-95 shadow-md cursor-pointer group"
                  >
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Dots Indicator inside Card Bottom */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-1.5 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === currentIndex
                    ? "w-6 h-2 bg-[#F59E0B]"
                    : "w-2 h-2 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
