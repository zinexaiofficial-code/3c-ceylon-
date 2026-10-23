"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Compass, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/data/company";

export const SigiriyaParallaxSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Detect prefers-reduced-motion
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mediaQuery.matches);
      const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mediaQuery.addEventListener("change", handleMotionChange);
      return () => mediaQuery.removeEventListener("change", handleMotionChange);
    }
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const section = sectionRef.current;
    if (!section) return;

    // Use IntersectionObserver to only compute parallax when section is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "200px 0px 200px 0px", threshold: 0 }
    );

    observer.observe(section);

    let animationFrameId: number;

    const handleScroll = () => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate progress relative to viewport (-1 to 1)
      // When section enters from bottom: rect.top = viewportHeight -> progress ~ 0
      // When section leaves top: rect.bottom = 0 -> progress ~ 1
      const sectionHeight = rect.height;
      const progress = (viewportHeight - rect.top) / (viewportHeight + sectionHeight);
      
      // Clamp between 0 and 1
      const clampedProgress = Math.max(0, Math.min(1, progress));
      setOffsetY(clampedProgress);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial calculation
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  // Parallax calculations:
  // Background Rock moves very slowly (gentle 20-30px drift for subtle perspective)
  const bgTranslate = reducedMotion ? 0 : (offsetY - 0.5) * -40;
  // Foreground Couple moves at a noticeable, elegant rate (rising ~80-120px as you scroll down)
  const coupleTranslate = reducedMotion ? 0 : (0.5 - offsetY) * 110;

  return (
    <section
      ref={sectionRef}
      id="sigiriya-parallax"
      className="relative w-full min-h-[760px] sm:min-h-[840px] lg:min-h-[920px] xl:min-h-[980px] overflow-hidden bg-[#071323] text-white flex items-center select-none"
      aria-label="Experience Sri Lanka Beyond the Ordinary"
    >
      {/* ─────────────────────────────────────────────────────────────
          LAYER 1: FIXED / SLOW-PARALLAX SIGIRIYA ROCK BACKGROUND
          ───────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(0, ${bgTranslate}px, 0) scale(1.08)`,
          transition: reducedMotion ? "none" : "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)",
        }}
      >
        <Image
          src="/images/parallax/sigiriya-rock.png"
          alt="Ancient Sigiriya Rock Citadel rising above the emerald Sri Lankan forest"
          fill
          quality={88}
          sizes="100vw"
          className="object-cover object-[center_35%] lg:object-[center_30%]"
        />

        {/* Soft atmospheric gradient layers (preserves natural vibrant colors of rock & sky) */}
        {/* Top vignette to blend smoothly from preceding section */}
        <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#FAF8F2] via-[#FAF8F2]/40 to-transparent" />
        
        {/* Left side text readability shadow (transparent soft veil, keeping right 65% bright & open) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 via-45% to-transparent" />

        {/* Bottom vignette to transition into next section */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#071323] via-[#071323]/50 to-transparent" />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          LAYER 2: MOVING FOREGROUND TRAVELER COUPLE (TRANSPARENT CUTOUT)
          ───────────────────────────────────────────────────────────── */}
      <div
        className="absolute bottom-0 right-2 sm:right-8 md:right-16 lg:right-24 xl:right-32 pointer-events-none z-20 will-change-transform"
        style={{
          transform: `translate3d(0, ${coupleTranslate}px, 0)`,
          transition: reducedMotion ? "none" : "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)",
        }}
      >
        <div className="relative w-[290px] sm:w-[380px] md:w-[460px] lg:w-[560px] xl:w-[640px] aspect-[1122/1402] filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
          <Image
            src="/images/parallax/traveler-couple.png"
            alt="Travelers gazing out across the Sigiriya horizon"
            fill
            quality={88}
            sizes="(max-width: 768px) 380px, 640px"
            className="object-contain object-bottom"
          />
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          LAYER 3: STORYTELLING CONTENT & INTERACTIVE CONTROLS
          ───────────────────────────────────────────────────────────── */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-2xl lg:max-w-xl space-y-6">
          {/* Section Pill Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#18E600] text-xs font-extrabold uppercase tracking-widest shadow-lg">
            <span className="text-white">Living Ceylon Heritage</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] drop-shadow-[0_3px_18px_rgba(0,0,0,0.85)]">
            Experience Sri Lanka{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18E600] to-[#55FF38]">
              Beyond the Ordinary.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-100 tracking-tight leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Where timeless landscapes and unforgettable journeys come together.
          </p>

          {/* Short Narrative */}
          <p className="text-sm sm:text-base text-gray-200/90 leading-relaxed font-normal max-w-lg drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
            Stand in awe before the 5th-century fortress citadel of Sigiriya. Traverse untouched wilderness, misty Ceylon tea hills, and sunlit coastlines with bespoke chauffeured luxury crafted exclusively for you.
          </p>

          {/* Luxury Feature Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 max-w-lg">
            <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 flex items-center space-x-3 shadow-lg">
              <div className="w-9 h-9 rounded-full bg-[#18E600]/20 flex items-center justify-center flex-shrink-0 border border-[#18E600]/40">
                <ShieldCheck className="w-5 h-5 text-[#18E600]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">100% Private Journeys</h4>
                <p className="text-xs text-gray-300">Custom tailored freedom</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 flex items-center space-x-3 shadow-lg">
              <div className="w-9 h-9 rounded-full bg-[#18E600]/20 flex items-center justify-center flex-shrink-0 border border-[#18E600]/40">
                <Compass className="w-5 h-5 text-[#18E600]" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Chauffeur-Guides</h4>
                <p className="text-xs text-gray-300">SLTDA-certified experts</p>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href="/packages"
              className="px-8 py-4 rounded-full bg-[#18E600] hover:bg-[#15C800] text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_4px_20px_rgba(24,230,0,0.4)] hover:shadow-[0_6px_25px_rgba(24,230,0,0.6)] transition-all inline-flex items-center space-x-2.5 transform hover:-translate-y-0.5"
            >
              <span>Explore Tour Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-extrabold text-xs uppercase tracking-wider border border-white/25 hover:border-white/40 transition-all inline-flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 text-[#18E600]" />
              <span>Ask via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
