"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { 
  Camera, 
  MapPin, 
  Compass, 
  Sparkles, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2,
  TreePine,
  Landmark,
  Mountain,
  Palmtree,
  ArrowRight
} from "lucide-react";
import { getWhatsAppLink } from "@/data/company";

export interface GalleryPhoto {
  id: string;
  image: string;
  title: string;
  location: string;
  tag: string;
  category: "all" | "wildlife" | "heritage" | "highlands" | "coastal";
  badgeColor: string;
  isPortrait: boolean;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "work-01",
    image: "/images/our-work/journey-moment-01.jpeg",
    title: "Wild Elephant Encounters",
    location: "Minneriya & Udawalawe Sanctuary",
    tag: "WILDLIFE",
    category: "wildlife",
    badgeColor: "#10B981",
    isPortrait: false,
  },
  {
    id: "work-02",
    image: "/images/our-work/journey-moment-02.jpeg",
    title: "Golden Hour Ocean Breezes",
    location: "Mirissa South Coastline",
    tag: "COASTAL",
    category: "coastal",
    badgeColor: "#0EA5E9",
    isPortrait: false,
  },
  {
    id: "work-03",
    image: "/images/our-work/journey-moment-03.jpeg",
    title: "Ancient Rock Fortress Citadel",
    location: "Sigiriya World Heritage Site",
    tag: "HERITAGE",
    category: "heritage",
    badgeColor: "#F59E0B",
    isPortrait: true,
  },
  {
    id: "work-04",
    image: "/images/our-work/journey-moment-04.jpeg",
    title: "Misty Tea Ridges & Valleys",
    location: "Nuwara Eliya High Plains",
    tag: "HIGHLANDS",
    category: "highlands",
    badgeColor: "#329B38",
    isPortrait: true,
  },
  {
    id: "work-05",
    image: "/images/our-work/journey-moment-05.jpeg",
    title: "Sacred Temple Traditions",
    location: "Kandy Royal Kingdom",
    tag: "HERITAGE",
    category: "heritage",
    badgeColor: "#F59E0B",
    isPortrait: true,
  },
  {
    id: "work-06",
    image: "/images/our-work/journey-moment-06.jpeg",
    title: "Untamed Leopard Kingdom",
    location: "Yala National Park Block 1",
    tag: "WILDLIFE",
    category: "wildlife",
    badgeColor: "#10B981",
    isPortrait: true,
  },
  {
    id: "work-07",
    image: "/images/our-work/journey-moment-07.jpeg",
    title: "Iconic Nine Arch Bridge",
    location: "Ella Mountain Pass",
    tag: "HIGHLANDS",
    category: "highlands",
    badgeColor: "#329B38",
    isPortrait: true,
  },
  {
    id: "work-08",
    image: "/images/our-work/journey-moment-08.jpeg",
    title: "Chasing Secret Waterfalls",
    location: "Central Ceylon Tea Country",
    tag: "HIGHLANDS",
    category: "highlands",
    badgeColor: "#329B38",
    isPortrait: true,
  },
  {
    id: "work-09",
    image: "/images/our-work/journey-moment-09.jpeg",
    title: "Sunset Stilt Fishermen",
    location: "Koggala & Ahangama Shore",
    tag: "COASTAL",
    category: "coastal",
    badgeColor: "#0EA5E9",
    isPortrait: true,
  },
  {
    id: "work-10",
    image: "/images/our-work/journey-moment-10.jpeg",
    title: "Monolithic Cave Sanctuaries",
    location: "Dambulla Royal Rock Temples",
    tag: "HERITAGE",
    category: "heritage",
    badgeColor: "#F59E0B",
    isPortrait: true,
  },
  {
    id: "work-11",
    image: "/images/our-work/journey-moment-11.jpeg",
    title: "Colonial Ramparts Exploration",
    location: "Galle Fort Dutch Bastion",
    tag: "HERITAGE",
    category: "heritage",
    badgeColor: "#F59E0B",
    isPortrait: true,
  },
  {
    id: "work-12",
    image: "/images/our-work/journey-moment-12.jpeg",
    title: "Scenic Highland Blue Train",
    location: "Nanu Oya to Ella Route",
    tag: "HIGHLANDS",
    category: "highlands",
    badgeColor: "#329B38",
    isPortrait: false,
  },
  {
    id: "work-13",
    image: "/images/our-work/journey-moment-13.jpeg",
    title: "Gentle Giant Herd Safari",
    location: "Udawalawe Reservoir",
    tag: "WILDLIFE",
    category: "wildlife",
    badgeColor: "#10B981",
    isPortrait: true,
  },
  {
    id: "work-14",
    image: "/images/our-work/journey-moment-14.jpeg",
    title: "Turquoise Indian Ocean",
    location: "Bentota Golden Sand Beach",
    tag: "COASTAL",
    category: "coastal",
    badgeColor: "#0EA5E9",
    isPortrait: false,
  },
  {
    id: "work-15",
    image: "/images/our-work/journey-moment-15.jpeg",
    title: "Pristine Rainforest Escapes",
    location: "Sinharaja Biosphere Reserve",
    tag: "WILDLIFE",
    category: "wildlife",
    badgeColor: "#10B981",
    isPortrait: false,
  },
  {
    id: "work-16",
    image: "/images/our-work/journey-moment-16.jpeg",
    title: "Peak Panoramic Horizons",
    location: "Little Adam's Peak Summit",
    tag: "HIGHLANDS",
    category: "highlands",
    badgeColor: "#329B38",
    isPortrait: true,
  },
  {
    id: "work-17",
    image: "/images/our-work/journey-moment-17.jpeg",
    title: "Ancient City of Monks",
    location: "Polonnaruwa Vatadage",
    tag: "HERITAGE",
    category: "heritage",
    badgeColor: "#F59E0B",
    isPortrait: true,
  },
  {
    id: "work-18",
    image: "/images/our-work/journey-moment-18.jpeg",
    title: "Surf & Soul Coastline",
    location: "Arugam Bay Golden Point",
    tag: "COASTAL",
    category: "coastal",
    badgeColor: "#0EA5E9",
    isPortrait: false,
  },
  {
    id: "work-19",
    image: "/images/our-work/journey-moment-19.jpeg",
    title: "Ambuluwawa Biodiversity Peak",
    location: "Gampola Spiral Tower",
    tag: "HIGHLANDS",
    category: "highlands",
    badgeColor: "#329B38",
    isPortrait: true,
  },
  {
    id: "work-20",
    image: "/images/our-work/journey-moment-20.jpeg",
    title: "Lagoon River & Mangrove Safari",
    location: "Madu Ganga River Sanctuary",
    tag: "COASTAL",
    category: "coastal",
    badgeColor: "#0EA5E9",
    isPortrait: false,
  },
  {
    id: "work-21",
    image: "/images/our-work/journey-moment-21.jpeg",
    title: "Private Tailored Expeditions",
    location: "Throughout Island Sri Lanka",
    tag: "WILDLIFE",
    category: "wildlife",
    badgeColor: "#10B981",
    isPortrait: false,
  },
];

type CategoryFilter = "all" | "wildlife" | "heritage" | "highlands" | "coastal";

export const OurWorkGallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [hasRevealed, setHasRevealed] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Filtered list
  const filteredPhotos = activeFilter === "all" 
    ? GALLERY_PHOTOS 
    : GALLERY_PHOTOS.filter(p => p.category === activeFilter);

  const displayedPhotos = filteredPhotos.slice(0, visibleCount);

  // Entrance reveal observer
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Keyboard navigation for Lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => 
          prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : null
        );
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => 
          prev !== null ? (prev + 1) % filteredPhotos.length : null
        );
      }
    },
    [lightboxIndex, filteredPhotos.length]
  );

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, handleKeyDown]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
  };

  const prevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <section
      ref={sectionRef}
      id="our-work-gallery"
      aria-label="Our Work and Island Expeditions Gallery"
      className="py-18 sm:py-24 relative overflow-hidden bg-[#071323] text-white rounded-3xl my-10 shadow-2xl"
    >
      {/* Background radial glow matching Into the Wild & Beyond */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#329B38]/12 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#247A32]/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/[0.04] via-transparent to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Styled like 'Into the Wild & Beyond.' */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-1.5 rounded-full bg-[#329B38]/15 text-[#48C757] border border-[#329B38]/30 text-xs font-extrabold uppercase tracking-widest shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#48C757]" />
            <span>Our Work &amp; Expeditions in Action</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.08]">
            Into the Wild &amp; <span className="text-[#48C757]">Beyond.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Real travelers, genuine moments, and authentic Sri Lankan stories curated with bespoke private care.
          </p>

          {/* Filter Navigation Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {[
              { id: "all", label: "All Journeys", count: GALLERY_PHOTOS.length, icon: Compass },
              { id: "wildlife", label: "Wildlife & Safari", count: GALLERY_PHOTOS.filter(p => p.category === "wildlife").length, icon: TreePine },
              { id: "heritage", label: "Ancient Heritage", count: GALLERY_PHOTOS.filter(p => p.category === "heritage").length, icon: Landmark },
              { id: "highlands", label: "Highlands & Tea", count: GALLERY_PHOTOS.filter(p => p.category === "highlands").length, icon: Mountain },
              { id: "coastal", label: "Coast & Golden Sand", count: GALLERY_PHOTOS.filter(p => p.category === "coastal").length, icon: Palmtree },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveFilter(tab.id as CategoryFilter);
                    setVisibleCount(12);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all flex items-center space-x-2 shadow-xs ${
                    isActive
                      ? "bg-[#329B38] text-white shadow-md shadow-[#329B38]/25 scale-105"
                      : "bg-white/10 text-gray-300 hover:text-white hover:bg-white/15 border border-white/10"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-gray-400"}`} />
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-black/25 text-white" : "bg-white/10 text-gray-400"
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {displayedPhotos.map((photo, index) => {
            return (
              <div
                key={photo.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-3xl overflow-hidden bg-black/40 border border-white/10 cursor-pointer shadow-lg hover:shadow-2xl hover:border-white/25 transition-all duration-500 transform hover:-translate-y-1 ${
                  photo.isPortrait ? "h-[420px] sm:h-[460px]" : "h-[320px] sm:h-[350px]"
                } ${
                  index % 7 === 0 ? "sm:col-span-2 lg:col-span-2 h-[380px] sm:h-[420px]" : ""
                }`}
                style={{
                  opacity: hasRevealed ? 1 : 0,
                  transform: hasRevealed ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 600ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 40}ms, transform 600ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 40}ms`,
                }}
              >
                {/* Full-bleed Photo */}
                <Image
                  src={photo.image}
                  alt={`${photo.title} - ${photo.location} with 3C Ceylon Tours`}
                  fill
                  quality={88}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:from-black/95 transition-colors duration-300" />

                {/* Top Corner Maximize Hint */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Content Card matching Into the Wild & Beyond */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end">
                  {/* Badge Pill with Tag */}
                  <div className="inline-flex items-center space-x-2 self-start px-3 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/20 mb-2.5 shadow-sm">
                    <span 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: photo.badgeColor }} 
                    />
                    <span className="text-[11px] font-black uppercase tracking-wider text-white">
                      {photo.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-white tracking-tight leading-snug drop-shadow-sm group-hover:text-[#48C757] transition-colors duration-200">
                    {photo.title}
                  </h3>

                  {/* Location with Pin */}
                  <div className="flex items-center space-x-1.5 text-xs text-slate-300 font-medium mt-1 drop-shadow-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#48C757] shrink-0" />
                    <span className="truncate">{photo.location}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button if more photos exist */}
        {visibleCount < filteredPhotos.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 8, filteredPhotos.length))}
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-[#329B38] text-white font-extrabold text-xs uppercase tracking-wider border border-white/20 hover:border-transparent transition-all shadow-md inline-flex items-center space-x-2"
            >
              <span>View More Moments ({filteredPhotos.length - visibleCount} remaining)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Call-to-Action Bar below Gallery */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="space-y-1 max-w-xl">
            <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Ready to write your own Sri Lankan story?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Every photograph above was captured on a private journey tailored by 3C Ceylon Tours.
            </p>
          </div>

          <a
            href={getWhatsAppLink("Hello 3C Ceylon Tours! I saw your 'Into the Wild & Beyond' work gallery on your About page. I would love to discuss a custom journey for my upcoming holiday.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-[#329B38] hover:bg-[#3CA647] text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center space-x-2 shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>Plan Your Journey With Us</span>
          </a>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          FULLSCREEN LIGHTBOX MODAL
          ───────────────────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 select-none"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-all z-50 shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Photo Counter */}
          <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider z-50 shadow-lg">
            {lightboxIndex + 1} / {filteredPhotos.length}
          </div>

          {/* Previous Button */}
          <button
            onClick={prevLightbox}
            aria-label="Previous photo"
            className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-all z-50 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Active Image Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[82vh] h-[78vh] flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={filteredPhotos[lightboxIndex].image}
                alt={filteredPhotos[lightboxIndex].title}
                fill
                quality={92}
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Lightbox Caption */}
            <div className="mt-4 text-center space-y-1">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-[#48C757]">
                <span>{filteredPhotos[lightboxIndex].tag}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {filteredPhotos[lightboxIndex].title}
              </h3>
              <div className="flex items-center justify-center space-x-1.5 text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#48C757]" />
                <span>{filteredPhotos[lightboxIndex].location}</span>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextLightbox}
            aria-label="Next photo"
            className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-all z-50 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
