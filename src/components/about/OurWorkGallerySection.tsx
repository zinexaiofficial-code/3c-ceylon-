"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Camera, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  location: string;
  aspect: "landscape" | "portrait";
}

const WORK_PHOTOS: GalleryPhoto[] = [
  {
    id: "01",
    src: "/images/our-work/journey-moment-01.jpeg",
    title: "Sigiriya Rock Citadel Exploration",
    location: "Cultural Triangle",
    aspect: "landscape",
  },
  {
    id: "02",
    src: "/images/our-work/journey-moment-02.jpeg",
    title: "Golden Hour Coastline Vista",
    location: "Southern Coast",
    aspect: "landscape",
  },
  {
    id: "03",
    src: "/images/our-work/journey-moment-03.jpeg",
    title: "Temple of the Sacred Tooth Relic",
    location: "Kandy",
    aspect: "portrait",
  },
  {
    id: "04",
    src: "/images/our-work/journey-moment-04.jpeg",
    title: "Misty Tea Hills Discovery",
    location: "Nuwara Eliya",
    aspect: "portrait",
  },
  {
    id: "05",
    src: "/images/our-work/journey-moment-05.jpeg",
    title: "Warm Ceylon Chauffeur Welcome",
    location: "Island Wide",
    aspect: "portrait",
  },
  {
    id: "06",
    src: "/images/our-work/journey-moment-06.jpeg",
    title: "World Famous Highland Scenic Train",
    location: "Ella to Nanu Oya",
    aspect: "portrait",
  },
  {
    id: "07",
    src: "/images/our-work/journey-moment-07.jpeg",
    title: "Wild Safari & Elephant Gathering",
    location: "Minneriya National Park",
    aspect: "portrait",
  },
  {
    id: "08",
    src: "/images/our-work/journey-moment-08.jpeg",
    title: "Authentic Village Culinary Experience",
    location: "Habarana Village",
    aspect: "portrait",
  },
  {
    id: "09",
    src: "/images/our-work/journey-moment-09.jpeg",
    title: "Happy Travelers & Scenic Overlooks",
    location: "Central Highlands",
    aspect: "portrait",
  },
  {
    id: "10",
    src: "/images/our-work/journey-moment-10.jpeg",
    title: "Handcrafted Island Memories",
    location: "Sigiriya",
    aspect: "portrait",
  },
  {
    id: "11",
    src: "/images/our-work/journey-moment-11.jpeg",
    title: "Historic Dutch Ramparts Stroll",
    location: "Galle Fort",
    aspect: "portrait",
  },
  {
    id: "12",
    src: "/images/our-work/journey-moment-12.jpeg",
    title: "Family Moments in Paradise",
    location: "Bentota & South Coast",
    aspect: "landscape",
  },
  {
    id: "13",
    src: "/images/our-work/journey-moment-13.jpeg",
    title: "Ancient Sacred City Relics",
    location: "Anuradhapura",
    aspect: "portrait",
  },
  {
    id: "14",
    src: "/images/our-work/journey-moment-14.jpeg",
    title: "Tropical Madu River Safari",
    location: "Balapitiya Mangroves",
    aspect: "landscape",
  },
  {
    id: "15",
    src: "/images/our-work/journey-moment-15.jpeg",
    title: "Pristine Golden Sand Beach",
    location: "Mirissa Bay",
    aspect: "landscape",
  },
  {
    id: "16",
    src: "/images/our-work/journey-moment-16.jpeg",
    title: "Majestic Wild Asian Elephants",
    location: "Udawalawe Sanctuary",
    aspect: "portrait",
  },
  {
    id: "17",
    src: "/images/our-work/journey-moment-17.jpeg",
    title: "Cascading Highland Waterfalls",
    location: "Ella Gap",
    aspect: "portrait",
  },
  {
    id: "18",
    src: "/images/our-work/journey-moment-18.jpeg",
    title: "Traditional Ceylon Hospitality",
    location: "Island Wide",
    aspect: "landscape",
  },
  {
    id: "19",
    src: "/images/our-work/journey-moment-19.jpeg",
    title: "Royal Botanical Gardens Flora",
    location: "Peradeniya",
    aspect: "portrait",
  },
  {
    id: "20",
    src: "/images/our-work/journey-moment-20.jpeg",
    title: "Sunlit Coastal Expressway Journey",
    location: "Southern Coastline",
    aspect: "landscape",
  },
  {
    id: "21",
    src: "/images/our-work/journey-moment-21.jpeg",
    title: "Cherished Friendships & Farewell Smiles",
    location: "Colombo Departure",
    aspect: "landscape",
  },
];

export const OurWorkGallerySection: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Lightbox navigation
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % WORK_PHOTOS.length);
  }, [lightboxIndex]);

  const prevPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + WORK_PHOTOS.length) % WORK_PHOTOS.length);
  }, [lightboxIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextPhoto, prevPhoto]);

  return (
    <section
      id="our-work"
      className="py-14 sm:py-18 lg:py-20 bg-[#FAF8F2] relative overflow-hidden"
      aria-label="Our Work and Traveler Moments"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-1.5 rounded-full bg-[#329B38]/12 text-[#247A32] border border-[#329B38]/30 text-xs font-extrabold uppercase tracking-widest mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#329B38]" />
            <span>Our Work &amp; Guest Moments</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-[#172334] tracking-tight leading-[1.08] mb-3">
            Our Work in Action.
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#526173] font-normal max-w-2xl mx-auto leading-relaxed">
            Real smiles, authentic encounters, and unforgettable moments captured across Sri Lanka with our cherished travelers.
          </p>
        </div>

        {/* Gallery Grid with Reduced Tight Gaps & Shining Sweep Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-3.5 lg:gap-4">
          {WORK_PHOTOS.map((photo, index) => {
            const isLandscape = photo.aspect === "landscape";
            return (
              <div
                key={photo.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-950 cursor-pointer shadow-md hover:shadow-[0_16px_40px_-10px_rgba(50,155,56,0.3)] transition-all duration-500 border border-gray-200/80 hover:border-[#329B38]/60 ${
                  isLandscape ? "sm:col-span-2 lg:col-span-2 aspect-[16/10]" : "aspect-[3/4]"
                }`}
              >
                {/* Photo Image with Smooth 5% Zoom */}
                <Image
                  src={photo.src}
                  alt={`${photo.title} - ${photo.location}`}
                  fill
                  quality={88}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* ─────────────────────────────────────────────────────────────
                    LUXURY SHINING EFFECT:
                    Soft diagonal sunlight ray sweeping across the image on hover
                   ───────────────────────────────────────────────────────────── */}
                <div
                  className="pointer-events-none absolute inset-0 -translate-x-[140%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[250%] z-20"
                  aria-hidden="true"
                />

                {/* Bottom Readability Vignette */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 z-10"
                  aria-hidden="true"
                />

                {/* Top Subtle Location Pill */}
                <div className="absolute top-3.5 left-3.5 z-20 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold tracking-wide shadow-md">
                  <Camera className="w-3 h-3 text-[#329B38]" />
                  <span>{photo.location}</span>
                </div>

                {/* Bottom Title & Verified Guest Badge */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20">
                  <h3 className="font-bold text-white text-sm sm:text-base lg:text-[17px] leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] group-hover:text-[#3CA647] transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-300 font-medium mt-0.5 drop-shadow-sm flex items-center space-x-1">
                    <span>3C Ceylon Tours</span>
                    <span>•</span>
                    <span className="text-[#3CA647]">Verified Guest Journey</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          LIGHTBOX MODAL FOR FULL-SCREEN VIEWING
          ───────────────────────────────────────────────────────────── */}
      {lightboxIndex !== null && WORK_PHOTOS[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 select-none animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Close photo view"
            className="absolute top-5 right-5 sm:top-7 sm:right-7 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-50 cursor-pointer border border-white/20"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            aria-label="Previous photo"
            className="absolute left-4 sm:left-7 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-50 cursor-pointer border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            aria-label="Next photo"
            className="absolute right-4 sm:right-7 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-50 cursor-pointer border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Photo Card in Modal */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-[75vh] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={WORK_PHOTOS[lightboxIndex].src}
              alt={WORK_PHOTOS[lightboxIndex].title}
              fill
              quality={95}
              priority
              className="object-contain"
            />

            {/* Bottom Modal Caption */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 text-center text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-[#3CA647] block mb-1">
                {WORK_PHOTOS[lightboxIndex].location} • {lightboxIndex + 1} of {WORK_PHOTOS.length}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold">
                {WORK_PHOTOS[lightboxIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurWorkGallerySection;
