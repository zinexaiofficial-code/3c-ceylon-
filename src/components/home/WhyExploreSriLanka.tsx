"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Compass, ChevronLeft, ChevronRight } from "lucide-react";

interface VerticalPanelItem {
  id: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  objectPosition: string;
}

const PANELS: VerticalPanelItem[] = [
  {
    id: "hospitality",
    image: "/images/why-us/hospitality-dancer.avif",
    alt: "Warm Sri Lankan Kandyan dancer in traditional costume at sunset",
    title: "Welcomed Like Family",
    description: "Feel the warmth of Sri Lankan hospitality.",
    objectPosition: "center 35%",
  },
  {
    id: "locals",
    image: "/images/why-us/locals-flag.avif",
    alt: "Sri Lanka national lion flag flying proudly beside coastal stilt fishermen",
    title: "Guided by Locals",
    description: "Discover the island with people who know it best.",
    objectPosition: "center 40%",
  },
  {
    id: "adventure",
    image: "/images/why-us/adventure-surfer.avif",
    alt: "Surfer catching an ocean wave along the golden south coast of Sri Lanka",
    title: "Untamed Adventure",
    description: "Safari, hiking, surfing, diving, and unforgettable experiences.",
    objectPosition: "center center",
  },
  {
    id: "flavours",
    image: "/images/why-us/taste-spices.avif",
    alt: "Authentic fragrant Ceylon spices, cinnamon, and herbal flavours",
    title: "Taste Sri Lanka",
    description: "Discover the island through its food, tea, and flavours.",
    objectPosition: "center center",
  },
  {
    id: "culture",
    image: "/images/why-us/culture-mask.avif",
    alt: "Traditional colorful handcrafted Sri Lankan wooden mask carving",
    title: "Live the Culture",
    description: "Connect with traditions, communities, and authentic island life.",
    objectPosition: "center 40%",
  },
];

export const WhyExploreSriLanka: React.FC = () => {
  // State for 3D flip rotation
  const [autoFlippedIndex, setAutoFlippedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const autoIndexRef = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Touch tracking to distinguish tap from drag/swipe
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const isDraggingRef = useRef<boolean>(false);

  // Active flipped index: hover strictly overrides auto sequence
  const activeFlippedIndex = hoveredIndex !== null ? hoveredIndex : autoFlippedIndex;

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Viewport IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
      const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, []);

  // Automatic sequential 3D flip animation loop:
  // Runs on desktop where all 5 panels are visible side by side.
  // Disabled on mobile so touch gestures and scrolling are never interrupted or hijacked.
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Pause when on mobile, hovered, offscreen, or if user prefers reduced motion
    if (isMobile || hoveredIndex !== null || !isVisible || prefersReducedMotion) {
      if (hoveredIndex !== null) {
        setAutoFlippedIndex(null);
      }
      return;
    }

    let isCancelled = false;

    const runStep = () => {
      if (isCancelled) return;
      const currentIdx = autoIndexRef.current;

      // 1. Flip to back face
      setAutoFlippedIndex(currentIdx);

      // 2. Hold back face: 850ms transition + 2000ms display time = 2850ms
      timeoutRef.current = setTimeout(() => {
        if (isCancelled) return;

        // 3. Flip back to front face
        setAutoFlippedIndex(null);

        // 4. Wait for return flip (850ms transition + 400ms pause = 1250ms)
        timeoutRef.current = setTimeout(() => {
          if (isCancelled) return;
          autoIndexRef.current = (currentIdx + 1) % PANELS.length;
          runStep();
        }, 1250);
      }, 2850);
    };

    // Initial small pause when entering viewport or after hover stops
    timeoutRef.current = setTimeout(runStep, 1000);

    return () => {
      isCancelled = true;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [isMobile, hoveredIndex, isVisible, prefersReducedMotion]);

  // Mobile scroll synchronization to update active indicator dot
  const handleMobileScroll = useCallback(() => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const scrollLeft = container.scrollLeft;
    const firstCard = container.firstElementChild as HTMLElement | null;
    if (!firstCard) return;
    const cardWidth = firstCard.clientWidth;
    const gap = 14; // gap-3.5 = 14px
    const index = Math.round(scrollLeft / (cardWidth + gap));
    const clamped = Math.max(0, Math.min(PANELS.length - 1, index));
    setActiveSlide(clamped);
  }, []);

  // Smooth scroll to target slide on mobile
  const scrollToSlide = useCallback((index: number) => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const targetCard = container.children[index] as HTMLElement | undefined;
    if (targetCard) {
      const containerLeft = container.getBoundingClientRect().left;
      const targetLeft = targetCard.getBoundingClientRect().left;
      const offset = targetLeft - containerLeft - (container.clientWidth / 2 - targetCard.clientWidth / 2);
      container.scrollBy({ left: offset, behavior: "smooth" });
      setActiveSlide(index);
    }
  }, []);

  // Desktop hover handlers
  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
    autoIndexRef.current = (index + 1) % PANELS.length;
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  // Click/Tap toggle (especially for touch devices)
  const handlePanelClick = useCallback((index: number) => {
    setHoveredIndex((prev) => (prev === index ? null : index));
  }, []);

  // Touch gesture tracking for mobile: prevent flip when swiping/scrolling
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
      isDraggingRef.current = false;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current || e.touches.length !== 1) return;
    const dx = Math.abs(e.touches[0].clientX - touchStartRef.current.x);
    const dy = Math.abs(e.touches[0].clientY - touchStartRef.current.y);
    // If movement exceeds 8px in either direction, this is a scroll/swipe, not a tap
    if (dx > 8 || dy > 8) {
      isDraggingRef.current = true;
    }
  };

  const handleMobileCardTap = (index: number) => {
    if (isDraggingRef.current) {
      // Swiping or scrolling: do not toggle flip
      return;
    }
    handlePanelClick(index);
  };

  return (
    <section
      ref={sectionRef}
      id="why-explore"
      aria-label="Why explore Sri Lanka with us"
      className="w-full py-16 sm:py-20 lg:py-24 bg-white text-[#172334] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1.5 rounded-full bg-[#329B38]/12 text-[#247A32] border border-[#329B38]/30 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#329B38]" />
            <span>Authentic Sri Lanka Unbound</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#172334] tracking-tight leading-[1.08]">
            Why explore Sri Lanka with us?
          </h2>
        </div>

        {/* Desktop View: Exactly 5 tall vertical panels with Real 3D Card Flip */}
        <div
          className="hidden md:flex w-full h-[600px] lg:h-[680px] xl:h-[720px] bg-white overflow-visible shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)]"
          role="region"
          aria-label="Vertical 3D Rotating Image Gallery"
        >
          {PANELS.map((panel, idx) => {
            const isFlipped = activeFlippedIndex === idx;

            return (
              <div
                key={panel.id}
                role="button"
                tabIndex={0}
                aria-pressed={isFlipped}
                aria-label={`${panel.title}: ${panel.description}`}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handlePanelClick(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handlePanelClick(idx);
                  }
                }}
                className={`relative flex-1 h-full cursor-pointer select-none border-r-[3px] last:border-r-0 border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#329B38] ${
                  isFlipped ? "z-20" : "z-10"
                }`}
                style={{
                  perspective: "1200px",
                  WebkitPerspective: "1200px",
                }}
              >
                {/* Inner 3D Rotating Container */}
                <div
                  className="relative w-full h-full"
                  style={{
                    transformStyle: "preserve-3d",
                    WebkitTransformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    transition: "transform 850ms cubic-bezier(0.22, 1, 0.36, 1)",
                    willChange: "transform",
                  }}
                >
                  {/* FRONT FACE: Crystal clear original photograph */}
                  <div
                    className="absolute inset-0 w-full h-full overflow-hidden bg-gray-950"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(0deg)",
                    }}
                  >
                    <Image
                      src={panel.image}
                      alt={panel.alt}
                      fill
                      sizes="(max-width: 1024px) 20vw, 260px"
                      className="object-cover"
                      style={{ objectPosition: panel.objectPosition }}
                      priority={idx < 2}
                    />
                  </div>

                  {/* BACK FACE: Dark overlay, cinematic blur, and centered white description */}
                  <div
                    className="absolute inset-0 w-full h-full overflow-hidden bg-black"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <Image
                      src={panel.image}
                      alt={panel.alt}
                      fill
                      sizes="(max-width: 1024px) 20vw, 260px"
                      className="object-cover filter blur-[6px] scale-[1.06]"
                      style={{ objectPosition: panel.objectPosition }}
                    />
                    <div className="absolute inset-0 bg-black/55" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none">
                      <p className="text-white text-base sm:text-[17px] md:text-[18px] lg:text-[19px] font-normal leading-relaxed max-w-[85%] mx-auto drop-shadow-sm">
                        {panel.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View: Fluid touch carousel with free vertical & horizontal scrolling */}
        <div className="md:hidden w-full relative">
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-4 no-scrollbar -mx-4 px-4 overscroll-x-contain"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollSnapType: "x mandatory",
            }}
          >
            {PANELS.map((panel, idx) => {
              const isFlipped = activeFlippedIndex === idx;

              return (
                <div
                  key={panel.id}
                  onClick={() => handleMobileCardTap(idx)}
                  className="relative w-[80vw] sm:w-[54vw] shrink-0 h-[480px] snap-center select-none rounded-2xl overflow-hidden border border-gray-100 cursor-pointer shadow-md bg-gray-950"
                  style={{
                    perspective: "1200px",
                    WebkitPerspective: "1200px",
                  }}
                >
                  {/* 3D Flipper Container */}
                  <div
                    className="relative w-full h-full"
                    style={{
                      transformStyle: "preserve-3d",
                      WebkitTransformStyle: "preserve-3d",
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                      transition: "transform 850ms cubic-bezier(0.22, 1, 0.36, 1)",
                      willChange: "transform",
                    }}
                  >
                    {/* Front Face */}
                    <div
                      className="absolute inset-0 w-full h-full overflow-hidden bg-gray-950"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(0deg)",
                      }}
                    >
                      <Image
                        src={panel.image}
                        alt={panel.alt}
                        fill
                        sizes="80vw"
                        className="object-cover"
                        style={{ objectPosition: panel.objectPosition }}
                      />
                      {/* Title Badge & Tap Hint on Front Face */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <div className="px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white text-[12px] font-semibold tracking-wide flex items-center space-x-1.5 shadow-md">
                          <span>{panel.title}</span>
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-white/25 backdrop-blur-md text-white text-[10px] font-medium border border-white/30 shadow-md">
                          Tap to reveal ↻
                        </div>
                      </div>
                    </div>

                    {/* Back Face */}
                    <div
                      className="absolute inset-0 w-full h-full overflow-hidden bg-black"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <Image
                        src={panel.image}
                        alt={panel.alt}
                        fill
                        sizes="80vw"
                        className="object-cover filter blur-[6px] scale-[1.06]"
                        style={{ objectPosition: panel.objectPosition }}
                      />
                      <div className="absolute inset-0 bg-black/60" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none">
                        <h4 className="text-[#3CA647] font-bold text-xs uppercase tracking-wider mb-2">
                          {panel.title}
                        </h4>
                        <p className="text-white text-base sm:text-[17px] font-normal leading-relaxed max-w-[90%] mx-auto drop-shadow-sm mb-4">
                          {panel.description}
                        </p>
                        <span className="text-[11px] text-gray-300 font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15">
                          Tap to view photo ↻
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Indicator Dots & Touch Navigation Arrows */}
          <div className="flex items-center justify-between px-2 mt-4">
            <button
              onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
              disabled={activeSlide === 0}
              aria-label="Previous image"
              className="w-9 h-9 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-700 disabled:opacity-25 disabled:cursor-not-allowed hover:bg-gray-100 transition-all shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
              {PANELS.map((panel, idx) => (
                <button
                  key={panel.id}
                  onClick={() => scrollToSlide(idx)}
                  aria-label={`Go to image ${idx + 1}: ${panel.title}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === idx
                      ? "w-8 bg-[#329B38]"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => scrollToSlide(Math.min(PANELS.length - 1, activeSlide + 1))}
              disabled={activeSlide === PANELS.length - 1}
              aria-label="Next image"
              className="w-9 h-9 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-700 disabled:opacity-25 disabled:cursor-not-allowed hover:bg-gray-100 transition-all shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
