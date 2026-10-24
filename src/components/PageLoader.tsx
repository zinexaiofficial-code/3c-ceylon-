"use client";

import React, { useEffect, useState } from "react";

const HERO_IMAGE_SRC = "/images/hero/triumphant-overlook-above-misty-valley.png";

/**
 * AI Expo-inspired full-screen page preloader for 3C Ceylon Tours.
 * Recreates the exact black & neon-green circular loader visual design from https://www.aiexpo.lk/
 *
 * Visual specs:
 * - Pure black background: #000000
 * - Centered 80px circular spinner with:
 *   - Outer 80px ring in dark blue-gray (#202B38) with bright neon-green segment (#00EE00)
 *   - Outer trailing glow segment (#00EE00 at 50% opacity)
 *   - Inner 64px reverse-spinning ring in lighter blue-gray (#253444) with neon-green segment (#00EE00)
 * - "Loading..." text below spinner in neon-green (#00EE00), 16px regular sans-serif
 *
 * Loading behavior:
 * - Preloads the primary hero carousel image with highest priority
 * - Fades out smoothly (400ms) once decoded or on fallback timeout
 * - Fully unmounts from DOM after fade-out completes
 */
export const PageLoader: React.FC = () => {
  const [isFading, setIsFading] = useState(false);
  const [isExited, setIsExited] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let fadeTimer: NodeJS.Timeout | null = null;
    let fallbackTimer: NodeJS.Timeout | null = null;

    const MIN_DISPLAY_TIME = 1600; // Match AI Expo's 1.5s - 1.6s display duration
    const mountTime = Date.now();
    let delayTimer: NodeJS.Timeout | null = null;

    const dismissLoader = () => {
      if (!isMounted) return;
      const elapsed = Date.now() - mountTime;
      const remaining = Math.max(0, MIN_DISPLAY_TIME - elapsed);

      delayTimer = setTimeout(() => {
        if (!isMounted) return;
        setIsFading(true);
        fadeTimer = setTimeout(() => {
          if (isMounted) {
            setIsExited(true);
          }
        }, 420); // 400ms fade + 20ms transition buffer
      }, remaining);
    };

    // Preload & decode the first hero carousel image
    const img = new Image();
    img.src = HERO_IMAGE_SRC;

    const onImageReady = () => {
      if (img.decode) {
        img.decode().then(dismissLoader).catch(dismissLoader);
      } else {
        dismissLoader();
      }
    };

    if (img.complete) {
      onImageReady();
    } else {
      img.onload = onImageReady;
      img.onerror = dismissLoader;
    }

    // Safety fallback: prevents infinite loader if network is slow or image fails
    fallbackTimer = setTimeout(() => {
      dismissLoader();
    }, 3200);

    return () => {
      isMounted = false;
      if (delayTimer) clearTimeout(delayTimer);
      if (fadeTimer) clearTimeout(fadeTimer);
      if (fallbackTimer) clearTimeout(fallbackTimer);
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  // Remove completely from DOM once fade-out completes
  if (isExited) {
    return null;
  }

  return (
    <div
      id="app-page-preloader"
      role="status"
      aria-live="polite"
      aria-label="Loading 3C Ceylon Tours"
      aria-hidden={isFading}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#000000] select-none motion-reduce:transition-none transition-opacity duration-[400ms] ease-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        {/* Animated Dual Circular Spinner - AI Expo Sri Lanka Signature Loader */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          {/* Outer Ring (80px): Dark blue-gray base (#202B38) with bright neon-green rotating head (#00EE00) */}
          <div className="w-20 h-20 rounded-full border-4 border-[#202B38] border-t-[#00EE00] animate-spin motion-reduce:animate-none drop-shadow-[0_0_8px_rgba(0,238,0,0.45)]" />

          {/* Outer Trailing Glow Segment */}
          <div className="absolute inset-0 w-20 h-20 rounded-full border-4 border-transparent border-t-[#00EE00]/50 opacity-75 animate-spin motion-reduce:animate-none" />

          {/* Inner Ring (64px): Lighter blue-gray (#253444) with reverse rotation (1.5s) */}
          <div
            className="absolute inset-2 w-16 h-16 rounded-full border-[2.5px] border-[#253444] border-t-[#00EE00]/80 animate-spin motion-reduce:animate-none"
            style={{
              animationDirection: "reverse",
              animationDuration: "1.5s",
            }}
          />
        </div>

        {/* "Loading..." text directly below the spinner */}
        <div className="mt-7 text-center">
          <p className="font-sans text-[16px] font-normal tracking-[0.06em] text-[#00EE00] animate-pulse drop-shadow-[0_0_10px_rgba(0,238,0,0.5)]">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
};
