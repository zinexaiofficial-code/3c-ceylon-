"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Compass, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { Destination } from "@/data/destinations";
import { getWhatsAppLink } from "@/data/company";

interface DestinationFullscreenScrollCardProps {
  destination: Destination;
  index: number;
}

/**
 * Premium Scroll-Triggered Fullscreen Destination Card for 3C Ceylon Tours Destinations Page.
 * Follows the EXACT architecture and motion mechanics from https://www.3cceylon.com/packages
 * and https://www.3cceylon.com/experiences (AdventureFullscreenScrollSection).
 * 
 * - Stage 1 (0%): Contained image (76vw / 64% on desktop, 92vw / 56% on mobile) with 24px border radius & curated header.
 * - Stage 2 (8-82%): Proportional scroll-controlled expansion to 100vw x 100%, border radius 24px -> 0px.
 * - Stage 3 (74-100%): Complete full-bleed viewport coverage with subtle cinematic overlay, bold title, province & CTA.
 * - Stage 4: Unlocks smoothly into the next destination without scroll-locking.
 * - Stage 5: Flawless bidirectional reverse animation upon upward scroll.
 */
export const DestinationFullscreenScrollCard: React.FC<DestinationFullscreenScrollCardProps> = ({ destination, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Stage 1 -> 2 -> 3 Progress Normalization (Active expansion from 8% to 82% scroll)
  const expansionProgress = useTransform(scrollYProgress, [0.08, 0.82], [0, 1]);

  // Width: 76vw (92vw on mobile) -> 100vw (totally fills the screen)
  const width = useTransform(expansionProgress, (v) => {
    const clamped = Math.min(Math.max(v, 0), 1);
    const start = isMobile ? 92 : 76;
    return `${start + (100 - start) * clamped}vw`;
  });

  // Height: 64% (56% on mobile) -> 100% (100dvh totally fills the screen)
  const height = useTransform(expansionProgress, (v) => {
    const clamped = Math.min(Math.max(v, 0), 1);
    const start = isMobile ? 56 : 64;
    return `${start + (100 - start) * clamped}%`;
  });

  // Border radius: 24px -> 0px (seamless edge-to-edge)
  const borderRadius = useTransform(expansionProgress, (v) => {
    const clamped = Math.min(Math.max(v, 0), 1);
    return `${24 * (1 - clamped)}px`;
  });

  // Box shadow smoothly dissolves as it merges to full bleed
  const boxShadow = useTransform(expansionProgress, (v) => {
    const clamped = Math.min(Math.max(v, 0), 1);
    const alpha = 0.35 * (1 - clamped);
    return `0 25px 50px -12px rgba(0, 0, 0, ${alpha})`;
  });

  // Header fades out smoothly during initial scroll (0% -> 12%)
  const headerOpacity = useTransform(scrollYProgress, [0.0, 0.12], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0.0, 0.12], [0, -28]);

  // Fullscreen cinematic typography overlay appears at Stage 3 (74% -> 86%)
  const captionOpacity = useTransform(scrollYProgress, [0.74, 0.86], [0, 1]);
  const captionY = useTransform(scrollYProgress, [0.74, 0.86], [10, 0]);

  const whatsappUrl = getWhatsAppLink(undefined, destination.name);

  // Reduced motion fallback (Static clean layout)
  if (shouldReduceMotion) {
    return (
      <section className="py-16 sm:py-20 bg-[#FAF8F2] text-[#172334] overflow-hidden border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#18E600]/15 text-[#123B2A] border border-[#18E600]/30 text-xs font-extrabold uppercase tracking-widest mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#123B2A]" />
            <span>{destination.province} • Stay: {destination.idealStay}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#172334] mb-3">
            {destination.name}
          </h2>
          <p className="text-base sm:text-lg text-[#526173] max-w-xl mx-auto">
            {destination.tagline}
          </p>
        </div>

        <div className="relative w-[92vw] md:w-[76vw] max-w-6xl h-[56vh] md:h-[64vh] mx-auto rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={destination.image}
            alt={`${destination.name} - 3C Ceylon Tours`}
            fill
            priority={index < 2}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-40% to-transparent p-6 sm:p-10 flex flex-col justify-end text-white">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold text-[#18E600] mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#18E600]" />
              <span>{destination.province} • {destination.weather.split("(")[0]}</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold mb-2">{destination.name}</h3>
            <p className="text-xs sm:text-sm text-white/85 line-clamp-2 max-w-2xl mb-4">{destination.description}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/destinations/${destination.slug}`}
                className="px-6 py-3 rounded-full bg-[#18E600] text-black font-extrabold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-lg"
              >
                <span>Explore Destination Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative h-[230vh] bg-[#FAF8F2] text-[#172334] z-20"
      aria-label={`${destination.name} Scroll Showcase`}
    >
      {/* Sticky Fullscreen Frame */}
      <div className="sticky top-0 h-screen h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Stage 1 Section Header (Fades away as visitor scrolls into expansion) */}
        <motion.div
          style={{
            opacity: isMounted ? headerOpacity : 1,
            y: isMounted ? headerY : 0,
          }}
          className="w-full max-w-4xl text-center px-4 mb-3 sm:mb-5 flex-shrink-0 pointer-events-none select-none z-10"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#18E600]/15 text-[#123B2A] border border-[#18E600]/30 text-xs font-extrabold uppercase tracking-widest mb-2 sm:mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#123B2A]" />
            <span>{destination.province} • Stay: {destination.idealStay}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#172334] tracking-tight leading-tight">
            {destination.name}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#526173] font-normal max-w-xl mx-auto mt-1 sm:mt-1.5">
            {destination.tagline}
          </p>
        </motion.div>

        {/* Scroll-Expanding Image Container (Expands to totally fill the screen: 100vw x 100%) */}
        <motion.div
          style={{
            width: isMounted ? width : isMobile ? "92vw" : "76vw",
            height: isMounted ? height : isMobile ? "56%" : "64%",
            borderRadius: isMounted ? borderRadius : "24px",
            boxShadow: isMounted ? boxShadow : "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
            willChange: "width, height, border-radius, box-shadow",
          }}
          className="relative overflow-hidden flex items-center justify-center bg-[#07130F] flex-shrink-0"
        >
          {/* Main Destination Photo */}
          <Image
            src={destination.image}
            alt={`${destination.name} - 3C Ceylon Tours`}
            fill
            priority={index < 2}
            quality={92}
            sizes="100vw"
            className="object-cover object-center select-none pointer-events-none"
          />

          {/* Cinematic Vignette Overlay (Becomes prominent in Stage 3 for readability) */}
          <motion.div
            style={{
              opacity: isMounted ? captionOpacity : 0,
            }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 via-40% to-transparent pointer-events-none z-10"
          />

          {/* Stage 3 Fullscreen Typography & CTA Overlay (Reveals smoothly at 74-86%) */}
          <motion.div
            style={{
              opacity: isMounted ? captionOpacity : 0,
              y: isMounted ? captionY : 0,
            }}
            className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-28 left-6 sm:left-12 md:left-16 lg:left-20 z-20 max-w-4xl text-white select-none pointer-events-auto pb-2"
          >
            {/* Province and Weather Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#18E600]/40 text-[#18E600] text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#18E600]" />
              <span>{destination.province} • Stay: {destination.idealStay}</span>
            </div>

            {/* Bold Impact Title */}
            <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] text-white leading-tight mb-4">
              {destination.name}
            </h3>

            {/* Direct Call-To-Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href={`/destinations/${destination.slug}`}
                className="px-7 sm:px-9 py-3.5 rounded-full bg-[#18E600] hover:bg-[#15D600] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(24,230,0,0.45)] hover:shadow-[0_0_35px_rgba(24,230,0,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2 cursor-pointer"
              >
                <span>Explore Destination Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-xs sm:text-sm tracking-wider border border-white/25 hover:border-white/50 shadow-md hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#18E600]" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
