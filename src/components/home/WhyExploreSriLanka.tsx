"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Compass } from "lucide-react";

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
  // -1 indicates initial state: all 5 panels completely clear and sharp (as in reference screenshot 1)
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Viewport intersection observer to auto-start when scrolled into view
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
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
      const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, []);

  // Initial delay: When first visible, show all clear images for 1.2s, then activate panel 0
  useEffect(() => {
    if (isVisible && activeIndex === -1 && !prefersReducedMotion) {
      const initialTimer = setTimeout(() => {
        setActiveIndex(0);
      }, 1100);
      return () => clearTimeout(initialTimer);
    }
  }, [isVisible, activeIndex, prefersReducedMotion]);

  // Next slide advancing function
  const advanceNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % PANELS.length);
  }, []);

  // Automatic rotation loop: 2.8s per panel
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // Only run interval when in viewport, not hovered, activeIndex >= 0, and not reduced motion
    if (isVisible && !isHovered && activeIndex >= 0 && !prefersReducedMotion) {
      timerRef.current = setInterval(() => {
        advanceNext();
      }, 2800);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isVisible, isHovered, activeIndex, advanceNext, prefersReducedMotion]);

  // Mobile scroll sync when activeIndex updates
  useEffect(() => {
    if (activeIndex >= 0 && mobileScrollRef.current) {
      const container = mobileScrollRef.current;
      const targetCard = container.children[activeIndex] as HTMLElement;
      if (targetCard) {
        const containerLeft = container.getBoundingClientRect().left;
        const targetLeft = targetCard.getBoundingClientRect().left;
        const offset = targetLeft - containerLeft - (container.clientWidth / 2 - targetCard.clientWidth / 2);
        container.scrollBy({ left: offset, behavior: "smooth" });
      }
    }
  }, [activeIndex]);

  const handleMouseEnter = (index: number) => {
    setIsHovered(true);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlePanelClick = (index: number) => {
    setActiveIndex(index);
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
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1.5 rounded-full bg-[#18E600]/15 text-[#123B2A] border border-[#18E600]/30 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#123B2A]" />
            <span>Authentic Sri Lanka Unbound</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#172334] tracking-tight leading-[1.08]">
            Why explore Sri Lanka with us?
          </h2>
        </div>

        {/* Desktop View: Exactly 5 tall portrait-oriented panels in one row (equal width & height) */}
        <div
          className="hidden md:flex w-full h-[600px] lg:h-[680px] xl:h-[720px] bg-white divide-x-[3px] divide-white overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)]"
          role="region"
          aria-label="Vertical Image Gallery"
        >
          {PANELS.map((panel, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={panel.id}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
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
                className="relative flex-1 h-full cursor-pointer overflow-hidden group select-none transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18E600] focus-visible:z-20"
              >
                {/* 1. Underlying Photograph */}
                <Image
                  src={panel.image}
                  alt={panel.alt}
                  fill
                  sizes="(max-width: 1024px) 20vw, 250px"
                  className={`object-cover transition-[filter,transform] duration-[650ms] ${
                    isActive
                      ? "scale-[1.04] filter blur-[6px]"
                      : "scale-100 filter-none"
                  }`}
                  style={{
                    objectPosition: panel.objectPosition,
                    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                  priority={idx < 2}
                />

                {/* 2. Dark Translucent Overlay (Active only) */}
                <div
                  className={`absolute inset-0 bg-black/50 transition-opacity duration-[650ms] pointer-events-none ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                />

                {/* 3. Centered Elegant White Description Text */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none transition-all duration-500 ease-out ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }`}
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  <p className="text-white text-base sm:text-[17px] md:text-[18px] lg:text-[19px] font-normal leading-relaxed max-w-[85%] mx-auto drop-shadow-sm select-none">
                    {panel.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View: Touch-friendly horizontal carousel with snapping */}
        <div className="md:hidden w-full">
          <div
            ref={mobileScrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-4 no-scrollbar -mx-4 px-4 touch-pan-x"
          >
            {PANELS.map((panel, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={panel.id}
                  onClick={() => handlePanelClick(idx)}
                  className="relative w-[78vw] sm:w-[50vw] shrink-0 h-[480px] snap-center overflow-hidden cursor-pointer shadow-md select-none border-r-[3px] last:border-r-0 border-white"
                >
                  {/* Photograph */}
                  <Image
                    src={panel.image}
                    alt={panel.alt}
                    fill
                    sizes="80vw"
                    className={`object-cover transition-[filter,transform] duration-[650ms] ${
                      isActive
                        ? "scale-[1.04] filter blur-[6px]"
                        : "scale-100 filter-none"
                    }`}
                    style={{
                      objectPosition: panel.objectPosition,
                      transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  />

                  {/* Dark Translucent Overlay */}
                  <div
                    className={`absolute inset-0 bg-black/50 transition-opacity duration-[650ms] pointer-events-none ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Centered Description Text */}
                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none transition-all duration-500 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3"
                    }`}
                  >
                    <p className="text-white text-base sm:text-[17px] font-normal leading-relaxed max-w-[90%] mx-auto drop-shadow-sm">
                      {panel.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicator Dots on Mobile */}
          <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse mt-4">
            {PANELS.map((panel, idx) => (
              <button
                key={panel.id}
                onClick={() => handlePanelClick(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "w-8 bg-[#18E600]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
