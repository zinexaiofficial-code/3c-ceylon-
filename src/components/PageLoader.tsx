"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

/**
 * Ultra High-Quality Fast-Loading Full-Screen Video Page Loader for 3C Ceylon Tours.
 * - Fast-start MP4 with moov atom pre-positioned at byte 0 for instantaneous streaming.
 * - Hardware GPU accelerated rendering with crisp edge enhancement.
 * - Pure full-screen presentation across the total page with zero text or UI overlays.
 * - Smooth cinematic transition to the website upon completion.
 */
export const PageLoader: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isExited, setIsExited] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasDismissedRef = useRef(false);

  const dismissLoader = useCallback(() => {
    if (hasDismissedRef.current) return;
    hasDismissedRef.current = true;

    setIsFading(true);
    setTimeout(() => {
      setIsExited(true);
    }, 600); // 600ms smooth cinematic dissolve
  }, []);

  const handleVideoEnded = () => {
    dismissLoader();
  };

  const handleLoadedData = () => {
    if (videoRef.current && !hasDismissedRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  useEffect(() => {
    setIsMounted(true);

    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      // Pre-warm video playback pipeline
      video.load();
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }

    // Safety fallback: auto-dismisses after 4.2 seconds
    const safetyTimer = setTimeout(() => {
      dismissLoader();
    }, 4200);

    return () => {
      clearTimeout(safetyTimer);
    };
  }, [dismissLoader]);

  // Completely unmount from DOM once faded out
  if (isExited || !isMounted) {
    return null;
  }

  return (
    <div
      id="app-page-preloader"
      role="status"
      aria-label="Loading 3C Ceylon Tours"
      aria-hidden={isFading}
      onClick={dismissLoader}
      className={`fixed inset-0 z-[99999] w-screen h-screen bg-[#f1ede0] flex items-center justify-center overflow-hidden select-none transition-opacity duration-600 ease-out cursor-default ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
      }`}
    >
      <video
        ref={videoRef}
        src="/videos/loader.mp4"
        poster="/images/loader-poster.png"
        autoPlay
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        onLoadedData={handleLoadedData}
        onCanPlay={handleLoadedData}
        onEnded={handleVideoEnded}
        className="w-full h-full object-contain select-none pointer-events-none"
        style={{
          transform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          imageRendering: "-webkit-optimize-contrast",
          filter: "contrast(1.02) saturate(1.04)",
        }}
      />
    </div>
  );
};
