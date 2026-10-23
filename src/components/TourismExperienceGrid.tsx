"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { TourismExperienceCard } from "@/components/TourismExperienceCard";
import { DynamicBackground } from "@/components/DynamicBackground";
import { 
  Compass, 
  Palmtree, 
  Heart, 
  Mountain, 
  Flame, 
  PartyPopper, 
  Landmark, 
  UtensilsCrossed,
  ArrowRight
} from "lucide-react";

export const TourismExperienceGrid: React.FC = () => {
  const [hasRevealed, setHasRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Trigger entrance animation when user scrolls into section view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="wonders-gallery" 
      className="py-14 sm:py-20 relative overflow-hidden bg-[#071323] text-white"
    >
      {/* Dynamic Animated Background */}
      <DynamicBackground position="absolute" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header — AI Expo / Sri Lanka Tourism Bold Style */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-2.5">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-1.5 rounded-full bg-[#18E600]/10 text-[#18E600] border border-[#18E600]/30 text-xs font-extrabold uppercase tracking-widest shadow-[0_0_15px_rgba(24,230,0,0.18)]">
            <Compass className="w-3.5 h-3.5 text-[#18E600]" />
            <span>Sri Lanka Tourism Gallery</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.05]">
            Into the Wild &amp; <span className="text-[#18E600]">Beyond.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal max-w-xl mx-auto">
            Eight iconic dimensions of authentic Ceylon.
          </p>
        </div>

        {/* Asymmetric Full-Image Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
          {/* Row 1: WILD (Hero 6 cols), THRILLS (Tall 3 cols), FESTIVE (Tall 3 cols) */}
          <div className="sm:col-span-2 lg:col-span-6 h-[380px] sm:h-[460px] lg:h-[540px] xl:h-[580px]">
            <TourismExperienceCard
              name="WILD"
              image="/images/experiences/wild.png"
              link="/experiences"
              badgeColor="#10B981"
              icon={Compass}
              isVisible={hasRevealed}
              index={0}
              className="h-full"
            />
          </div>

          <div className="h-[320px] sm:h-[420px] lg:h-[540px] xl:h-[580px] lg:col-span-3">
            <TourismExperienceCard
              name="THRILLS"
              image="/images/experiences/thrills.png"
              link="/packages/family-adventure-sri-lanka-safaris-surfing"
              badgeColor="#EF4444"
              icon={Flame}
              isVisible={hasRevealed}
              index={1}
              className="h-full"
            />
          </div>

          <div className="h-[320px] sm:h-[420px] lg:h-[540px] xl:h-[580px] lg:col-span-3">
            <TourismExperienceCard
              name="FESTIVE"
              image="/images/experiences/festive-perahera.jpg"
              link="/destinations/kandy"
              badgeColor="#F59E0B"
              icon={PartyPopper}
              isVisible={hasRevealed}
              index={2}
              className="h-full"
            />
          </div>

          {/* Row 2: HERITAGE (Wide 6 cols), SCENIC (Wide 6 cols) */}
          <div className="sm:col-span-2 lg:col-span-6 h-[280px] sm:h-[320px] lg:h-[350px] xl:h-[380px]">
            <TourismExperienceCard
              name="HERITAGE"
              image="/images/experiences/heritage.png"
              link="/destinations/sigiriya"
              badgeColor="#EAB308"
              icon={Landmark}
              isVisible={hasRevealed}
              index={3}
              className="h-full"
            />
          </div>

          <div className="sm:col-span-2 lg:col-span-6 h-[280px] sm:h-[320px] lg:h-[350px] xl:h-[380px]">
            <TourismExperienceCard
              name="SCENIC"
              image="/images/experiences/scenic.png"
              link="/destinations/ella"
              badgeColor="#22C55E"
              icon={Mountain}
              isVisible={hasRevealed}
              index={4}
              className="h-full"
            />
          </div>

          {/* Row 3: PRISTINE (4 cols), BLISS (4 cols), ESSENCE (4 cols) */}
          <div className="h-[300px] sm:h-[340px] lg:h-[350px] xl:h-[380px] lg:col-span-4">
            <TourismExperienceCard
              name="PRISTINE"
              image="/images/experiences/pristine.png"
              link="/destinations/mirissa"
              badgeColor="#0EA5E9"
              icon={Palmtree}
              isVisible={hasRevealed}
              index={5}
              className="h-full"
            />
          </div>

          <div className="h-[300px] sm:h-[340px] lg:h-[350px] xl:h-[380px] lg:col-span-4">
            <TourismExperienceCard
              name="BLISS"
              image="/images/experiences/bliss.png"
              link="/packages/sri-lanka-honeymoon-luxury-beach-escape"
              badgeColor="#A855F7"
              icon={Heart}
              isVisible={hasRevealed}
              index={6}
              className="h-full"
            />
          </div>

          <div className="sm:col-span-2 lg:col-span-4 h-[300px] sm:h-[340px] lg:h-[350px] xl:h-[380px]">
            <TourismExperienceCard
              name="ESSENCE"
              image="/images/experiences/essence.png"
              link="/contact"
              badgeColor="#F97316"
              icon={UtensilsCrossed}
              isVisible={hasRevealed}
              index={7}
              className="h-full"
            />
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center mt-14 sm:mt-18">
          <Link
            href="/experiences"
            className="inline-flex items-center space-x-2.5 px-9 py-4 rounded-full bg-[#18E600] hover:bg-[#15C800] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(24,230,0,0.3)] hover:shadow-[0_0_35px_rgba(24,230,0,0.5)] transform hover:-translate-y-0.5"
          >
            <span>Explore All 8 Experiences</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
