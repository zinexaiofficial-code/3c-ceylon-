"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Compass, Sparkles } from "lucide-react";

/**
 * Premium Scroll-Triggered Fullscreen Sri Lankan Gem Mining Expansion for Experiences Page.
 * 
 * Features:
 * - Stage 1 (0%): Contained image (76vw / 64vh) with 24px border radius & curated gem heritage header.
 * - Stage 2 (10-80%): Proportional scroll-controlled expansion to 100vw x 100dvh, border radius 24px -> 0px.
 * - Stage 3 (80-100%): Complete full-bleed viewport coverage with subtle cinematic overlay & bold title.
 * - Stage 4: Unlocks naturally into the tailored experiences callout.
 * - Stage 5: Flawless bidirectional reverse animation upon upward scroll.
 * - Zero CLS, optimized Next.js image loading, prefers-reduced-motion support.
 */
export const GemMiningFullscreenScrollSection: React.FC = () => {
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

  // Width: 76vw (92vw on mobile) -> 100vw
  const width = useTransform(expansionProgress, (v) => {
    const clamped = Math.min(Math.max(v, 0), 1);
    const start = isMobile ? 92 : 76;
    return `${start + (100 - start) * clamped}vw`;
  });

  // Height: 64vh (56vh on mobile) -> 100% (100dvh)
  const height = useTransform(expansionProgress, (v) => {
    const clamped = Math.min(Math.max(v, 0), 1);
    const start = isMobile ? 56 : 64;
    return `${start + (100 - start) * clamped}%`;
  });

  // Border radius: 24px -> 0px
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

  // Fullscreen cinematic caption appears at Stage 3 (74% -> 86%)
  const captionOpacity = useTransform(scrollYProgress, [0.74, 0.86], [0, 1]);
  const captionY = useTransform(scrollYProgress, [0.74, 0.86], [10, 0]);

  // Reduced motion fallback (Static clean layout)
  if (shouldReduceMotion) {
    return (
      <section className="py-16 sm:py-20 bg-[#FAF8F2] text-[#172334] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#18E600]/15 text-[#123B2A] border border-[#18E600]/30 text-xs font-extrabold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#123B2A]" />
            <span>Ratnapura Heritage • The City of Gems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#172334] mb-3">
            Sri Lankan Gem Mining Journey.
          </h2>
          <p className="text-base sm:text-lg text-[#526173] max-w-xl mx-auto">
            Descend into artisan shafts and discover centuries of Ceylon blue sapphire and royal gem heritage.
          </p>
        </div>
        <div className="relative w-[92vw] md:w-[80vw] max-w-6xl h-[55vh] md:h-[68vh] mx-auto rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/sri-lankan-gem-mining-journey.png"
            alt="Sri Lankan Gem Mining Journey - Ratnapura Artisan Sapphire Pits"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative h-[230vh] bg-[#FAF8F2] text-[#172334] z-20"
      aria-label="Sri Lankan Gem Mining Journey Scroll Showcase"
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
            <span>Ratnapura Heritage • The City of Gems</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#172334] tracking-tight leading-tight">
            Sri Lankan Gem Mining Journey.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#526173] font-normal max-w-xl mx-auto mt-1 sm:mt-1.5">
            Scroll to immerse yourself in Ceylon&apos;s subterranean sapphire pits and ancient mining traditions.
          </p>
        </motion.div>

        {/* Scroll-Expanding Image Container */}
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
          {/* High-Definition Gem Mining Image */}
          <Image
            src="/images/sri-lankan-gem-mining-journey.png"
            alt="Sri Lankan Gem Mining Journey - Ratnapura Artisan Sapphire Pits"
            fill
            priority
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

          {/* Stage 3 Fullscreen Typography Overlay (Reveals smoothly at 80-100%) */}
          <motion.div
            style={{
              opacity: isMounted ? captionOpacity : 0,
              y: isMounted ? captionY : 0,
            }}
            className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-28 left-6 sm:left-12 md:left-16 lg:left-20 z-20 max-w-3xl text-white pointer-events-none select-none pb-2"
          >
            <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] text-white leading-tight">
              Sri Lankan Gem Mining Journey.
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
