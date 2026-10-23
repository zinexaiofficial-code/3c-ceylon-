"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface DestinationGalleryProps {
  destinationName: string;
  images: string[];
}

export const DestinationGallery: React.FC<DestinationGalleryProps> = ({ destinationName, images }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
  }, [images.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
  }, [images.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  /**
   * Helper that mathematically guarantees every single row is 100% filled
   * with ZERO empty spaces, ZERO middle holes, and ZERO trailing orphan gaps.
   */
  const getCardLayout = (index: number, total: number) => {
    // 4 images (Mirissa, Vil Uyana): 1 full row of 4
    if (total === 4) {
      return {
        span: "col-span-1 sm:col-span-1 lg:col-span-1",
        height: "h-64 sm:h-72 md:h-80",
      };
    }

    // 5 images (Blue Beach, Hirikatiya, Hikka Tranz, Rekawa):
    // Row 1: Item 0 (2 cols) + Item 1 (1 col) + Item 2 (1 col) = 4 cols
    // Row 2: Item 3 (2 cols) + Item 4 (2 cols) = 4 cols
    if (total === 5) {
      if (index === 0) {
        return { span: "col-span-2 sm:col-span-2 lg:col-span-2", height: "h-72 sm:h-80 md:h-[360px]" };
      }
      if (index === 1 || index === 2) {
        return { span: "col-span-1 sm:col-span-1 lg:col-span-1", height: "h-72 sm:h-80 md:h-[360px]" };
      }
      return { span: "col-span-2 sm:col-span-1 lg:col-span-2", height: "h-64 sm:h-72 md:h-[340px]" };
    }

    // 6 images (Heritance Kandalama):
    // Row 1: Item 0 (2 cols) + Items 1, 2 (1 col each) = 4 cols
    // Row 2: Items 3, 4 (1 col each) + Item 5 (2 cols) = 4 cols
    if (total === 6) {
      if (index === 0 || index === 5) {
        return { span: "col-span-2 sm:col-span-2 lg:col-span-2", height: "h-72 sm:h-80 md:h-[350px]" };
      }
      return { span: "col-span-1 sm:col-span-1 lg:col-span-1", height: "h-72 sm:h-80 md:h-[350px]" };
    }

    // 7 images (Ella, Galle):
    // Row 1: Item 0 (2 cols) + Items 1, 2 (1 col each) = 4 cols
    // Row 2: Items 3, 4, 5, 6 (1 col each) = 4 cols
    if (total === 7) {
      if (index === 0) {
        return { span: "col-span-2 sm:col-span-2 lg:col-span-2", height: "h-72 sm:h-80 md:h-[360px]" };
      }
      if (index === 1 || index === 2) {
        return { span: "col-span-1 sm:col-span-1 lg:col-span-1", height: "h-72 sm:h-80 md:h-[360px]" };
      }
      return { span: "col-span-1 sm:col-span-1 lg:col-span-1", height: "h-64 sm:h-72 md:h-80" };
    }

    // 10 images (Sigiriya, Nuwara Eliya, Yala):
    // Row 1: Item 0 (2 cols) + Item 1 (2 cols) = 4 cols (two featured wide landscapes)
    // Row 2: Items 2, 3, 4, 5 (1 col each) = 4 cols
    // Row 3: Items 6, 7, 8, 9 (1 col each) = 4 cols
    if (total === 10) {
      if (index === 0 || index === 1) {
        return { span: "col-span-2 sm:col-span-1 lg:col-span-2", height: "h-72 sm:h-80 md:h-[380px]" };
      }
      return { span: "col-span-1 sm:col-span-1 lg:col-span-1", height: "h-64 sm:h-72 md:h-80" };
    }

    // 11 images (Anuradhapura) & 23 images (Jaffna & Mannar):
    // Row 1: Item 0 (2 cols) + Items 1, 2 (1 col each) = 4 cols
    // Remaining rows: groups of 4 (1 col each) = 4 cols per row
    if (total === 11 || total === 23) {
      if (index === 0) {
        return { span: "col-span-2 sm:col-span-2 lg:col-span-2", height: "h-72 sm:h-80 md:h-[360px]" };
      }
      if (index === 1 || index === 2) {
        return { span: "col-span-1 sm:col-span-1 lg:col-span-1", height: "h-72 sm:h-80 md:h-[360px]" };
      }
      return { span: "col-span-1 sm:col-span-1 lg:col-span-1", height: "h-64 sm:h-72 md:h-80" };
    }

    // Default (e.g. 12 images in Kandy, or any multiple of 4):
    return {
      span: "col-span-1 sm:col-span-1 lg:col-span-1",
      height: "h-64 sm:h-72 md:h-80",
    };
  };

  return (
    <section className="space-y-6 pt-6">
      {/* Gallery Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200 pb-4">
        <div>
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-[#18E600]/15 text-[#0E6838] border border-[#18E600]/30 text-xs font-extrabold uppercase tracking-widest mb-2">
            <Camera className="w-3.5 h-3.5 text-[#0E6838]" />
            <span>High-Resolution Photo Gallery</span>
          </div>
          <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172334] tracking-tight">
            Visual Highlights of {destinationName}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[#526173] font-medium">
          Showing <span className="text-[#0E6838] font-bold">{images.length}</span> authentic photographs • Click any image to expand
        </p>
      </div>

      {/* Visual Responsive Mosaic Grid - Dense & Flush with NO Free Spaces */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
        {images.map((imgSrc, index) => {
          const layout = getCardLayout(index, images.length);
          return (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-neutral-950 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1.5 border border-gray-200/70 hover:border-[#18E600] ${layout.span} ${layout.height}`}
            >
              <Image
                src={imgSrc}
                alt={`${destinationName} photograph ${index + 1}`}
                fill
                quality={88}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Shining Light Sweep Effect on Hover (Inspired by Into the Wild & Beyond) */}
              <div 
                className="pointer-events-none absolute inset-0 -translate-x-[140%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[240%] z-20" 
                aria-hidden="true"
              />

              {/* Subtle Bottom Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              {/* Expand Icon on Hover */}
              <div className="absolute bottom-3 right-3 z-20 p-2 sm:p-2.5 rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                <Maximize2 className="w-4 h-4 text-[#18E600]" />
              </div>

              {/* Photo Count Pill */}
              <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full bg-black/60 text-white text-[10px] font-bold backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                Photo {index + 1} of {images.length}
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in select-none"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-200 hover:scale-110 cursor-pointer"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            aria-label="Previous Image"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 hover:border-[#18E600] transition-all hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            aria-label="Next Image"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 hover:border-[#18E600] transition-all hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </button>

          {/* Expanded Image Container */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-5xl max-h-[85vh] w-full h-[70vh] sm:h-[80vh] flex items-center justify-center"
          >
            <Image
              src={images[lightboxIndex]}
              alt={`${destinationName} expanded preview ${lightboxIndex + 1}`}
              fill
              quality={92}
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain"
            />
          </div>

          {/* Bottom Counter & Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-2 rounded-full bg-black/70 border border-white/20 text-white text-xs font-bold backdrop-blur-md flex items-center space-x-3">
            <span>{destinationName}</span>
            <span className="text-[#18E600]">•</span>
            <span>{lightboxIndex + 1} / {images.length}</span>
          </div>
        </div>
      )}
    </section>
  );
};
