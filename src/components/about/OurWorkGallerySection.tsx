"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Camera, Sparkles, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  location: string;
  category: "all" | "guests" | "heritage" | "nature" | "coastal";
  aspect: "landscape" | "portrait";
}

const WORK_PHOTOS: GalleryPhoto[] = [
  {
    id: "01",
    src: "/images/our-work/journey-moment-01.jpeg",
    title: "Sigiriya Rock Citadel Exploration",
    location: "Cultural Triangle",
    category: "heritage",
    aspect: "landscape",
  },
  {
    id: "02",
    src: "/images/our-work/journey-moment-02.jpeg",
    title: "Golden Hour Coastline Vista",
    location: "Southern Coast",
    category: "coastal",
    aspect: "landscape",
  },
  {
    id: "03",
    src: "/images/our-work/journey-moment-03.jpeg",
    title: "Temple of the Sacred Tooth Relic",
    location: "Kandy",
    category: "heritage",
    aspect: "portrait",
  },
  {
    id: "04",
    src: "/images/our-work/journey-moment-04.jpeg",
    title: "Misty Tea Hills Discovery",
    location: "Nuwara Eliya",
    category: "nature",
    aspect: "portrait",
  },
  {
    id: "05",
    src: "/images/our-work/journey-moment-05.jpeg",
    title: "Warm Ceylon Chauffeur Welcome",
    location: "Island Wide",
    category: "guests",
    aspect: "portrait",
  },
  {
    id: "06",
    src: "/images/our-work/journey-moment-06.jpeg",
    title: "World Famous Highland Scenic Train",
    location: "Ella to Nanu Oya",
    category: "nature",
    aspect: "portrait",
  },
  {
    id: "07",
    src: "/images/our-work/journey-moment-07.jpeg",
    title: "Wild Safari & Elephant Gathering",
    location: "Minneriya National Park",
    category: "nature",
    aspect: "portrait",
  },
  {
    id: "08",
    src: "/images/our-work/journey-moment-08.jpeg",
    title: "Authentic Village Culinary Experience",
    location: "Habarana Village",
    category: "heritage",
    aspect: "portrait",
  },
  {
    id: "09",
    src: "/images/our-work/journey-moment-09.jpeg",
    title: "Happy Travelers & Scenic Overlooks",
    location: "Central Highlands",
    category: "guests",
    aspect: "portrait",
  },
  {
    id: "10",
    src: "/images/our-work/journey-moment-10.jpeg",
    title: "Handcrafted Island Memories",
    location: "Sigiriya",
    category: "guests",
    aspect: "portrait",
  },
  {
    id: "11",
    src: "/images/our-work/journey-moment-11.jpeg",
    title: "Historic Dutch Ramparts Stroll",
    location: "Galle Fort",
    category: "heritage",
    aspect: "portrait",
  },
  {
    id: "12",
    src: "/images/our-work/journey-moment-12.jpeg",
    title: "Family Moments in Paradise",
    location: "Bentota & South Coast",
    category: "guests",
    aspect: "landscape",
  },
  {
    id: "13",
    src: "/images/our-work/journey-moment-13.jpeg",
    title: "Ancient Sacred City Relics",
    location: "Anuradhapura",
    category: "heritage",
    aspect: "portrait",
  },
  {
    id: "14",
    src: "/images/our-work/journey-moment-14.jpeg",
    title: "Tropical Madu River Safari",
    location: "Balapitiya Mangroves",
    category: "nature",
    aspect: "landscape",
  },
  {
    id: "15",
    src: "/images/our-work/journey-moment-15.jpeg",
    title: "Pristine Golden Sand Beach",
    location: "Mirissa Bay",
    category: "coastal",
    aspect: "landscape",
  },
  {
    id: "16",
    src: "/images/our-work/journey-moment-16.jpeg",
    title: "Majestic Wild Asian Elephants",
    location: "Udawalawe Sanctuary",
    category: "nature",
    aspect: "portrait",
  },
  {
    id: "17",
    src: "/images/our-work/journey-moment-17.jpeg",
    title: "Cascading Highland Waterfalls",
    location: "Ella Gap",
    category: "nature",
    aspect: "portrait",
  },
  {
    id: "18",
    src: "/images/our-work/journey-moment-18.jpeg",
    title: "Traditional Ceylon Hospitality",
    location: "Island Wide",
    category: "guests",
    aspect: "landscape",
  },
  {
    id: "19",
    src: "/images/our-work/journey-moment-19.jpeg",
    title: "Royal Botanical Gardens Flora",
    location: "Peradeniya",
    category: "nature",
    aspect: "portrait",
  },
  {
    id: "20",
    src: "/images/our-work/journey-moment-20.jpeg",
    title: "Sunlit Coastal Expressway Journey",
    location: "Southern Coastline",
    category: "coastal",
    aspect: "landscape",
  },
  {
    id: "21",
    src: "/images/our-work/journey-moment-21.jpeg",
    title: "Cherished Friendships & Farewell Smiles",
    location: "Colombo Departure",
    category: "guests",
    aspect: "landscape",
  },
];

type CategoryFilter = "all" | "guests" | "heritage" | "nature" | "coastal";

const FILTER_TABS: { key: CategoryFilter; label: string }[] = [
  { key: "all", label: "All Moments (21)" },
  { key: "guests", label: "Happy Guests" },
  { key: "heritage", label: "Culture & Temples" },
  { key: "nature", label: "Nature & Wildlife" },
  { key: "coastal", label: "Coastal & Sea" },
];

export const OurWorkGallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  // Filtered photos
  const filteredPhotos = WORK_PHOTOS.filter(
    (photo) => activeCategory === "all" || photo.category === activeCategory
  );

  // Display subset or all
  const INITIAL_COUNT = 12;
  const displayedPhotos = showAll ? filteredPhotos : filteredPhotos.slice(0, INITIAL_COUNT);

  // Lightbox navigation
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % filteredPhotos.length);
  }, [lightboxIndex, filteredPhotos.length]);

  const prevPhoto = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length);
  }, [lightboxIndex, filteredPhotos.length]);

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
      className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F2] relative overflow-hidden"
      aria-label="Our Work and Traveler Moments"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-1.5 rounded-full bg-[#329B38]/12 text-[#247A32] border border-[#329B38]/30 text-xs font-extrabold uppercase tracking-widest mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#329B38]" />
            <span>Our Work &amp; Guest Moments</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#172334] tracking-tight leading-[1.08] mb-3">
            Our Work in Action.
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#526173] font-normal max-w-2xl mx-auto leading-relaxed">
            Real smiles, authentic encounters, and unforgettable moments captured across Sri Lanka with our cherished travelers.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
          {FILTER_TABS.map((tab) => {
            const isActive = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveCategory(tab.key);
                  setShowAll(false);
                }}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-xs cursor-pointer ${
                  isActive
                    ? "bg-[#329B38] text-white shadow-md shadow-[#329B38]/25 scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 hover:text-black border border-gray-200/80"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid with Asymmetric Polish & Shining Sweep Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {displayedPhotos.map((photo, index) => {
            const isLandscape = photo.aspect === "landscape";
            return (
              <div
                key={photo.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-3xl overflow-hidden bg-gray-950 cursor-pointer shadow-lg hover:shadow-[0_20px_50px_-10px_rgba(50,155,56,0.35)] transition-all duration-500 border border-gray-200/70 hover:border-[#329B38]/50 ${
                  isLandscape ? "sm:col-span-2 lg:col-span-2 aspect-[16/10]" : "aspect-[3/4]"
                }`}
              >
                {/* Photo Image with Smooth 6% Zoom */}
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

                {/* Top Subtle Pill with Location */}
                <div className="absolute top-4 left-4 z-20 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold tracking-wide shadow-md">
                  <Camera className="w-3 h-3 text-[#329B38]" />
                  <span>{photo.location}</span>
                </div>

                {/* Hover Center Icon: View Full Size */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-[#329B38] text-white flex items-center justify-center shadow-xl border border-white/30">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Bottom Title & Action */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="font-bold text-white text-base sm:text-lg leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] group-hover:text-[#3CA647] transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-medium mt-0.5 drop-shadow-sm flex items-center space-x-1">
                    <span>3C Ceylon Tours</span>
                    <span>•</span>
                    <span className="text-[#3CA647]">Verified Guest Journey</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All / Show Less Toggle Button */}
        {filteredPhotos.length > INITIAL_COUNT && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-full bg-white hover:bg-[#329B38] text-[#172334] hover:text-white font-extrabold text-xs uppercase tracking-wider border border-gray-300 hover:border-[#329B38] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{showAll ? "Show Less Moments" : `View All (${filteredPhotos.length}) Moments`}</span>
              <Sparkles className="w-4 h-4 text-[#329B38] group-hover:text-white transition-colors" />
            </button>
          </div>
        )}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          LIGHTBOX MODAL FOR FULL-SCREEN VIEWING
          ───────────────────────────────────────────────────────────── */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
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
              src={filteredPhotos[lightboxIndex].src}
              alt={filteredPhotos[lightboxIndex].title}
              fill
              quality={95}
              priority
              className="object-contain"
            />

            {/* Bottom Modal Caption */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 text-center text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-[#3CA647] block mb-1">
                {filteredPhotos[lightboxIndex].location} • {lightboxIndex + 1} of {filteredPhotos.length}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold">
                {filteredPhotos[lightboxIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default OurWorkGallerySection;
