"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";

/**
 * DynamicBackground
 * 
 * Implements the continuous, cinema-grade animated background inspired by AI Expo Sri Lanka (https://www.aiexpo.lk/).
 * Calibrated specifically for 3C Ceylon Tours luxury branding:
 * - Deep dark foundation: #020407
 * - Subtle Midnight Navy: #03091C
 * - Deep Ocean Glow: #071A35
 * - Dark Forest Green: #052819
 * - Deep Emerald Glow: #07502A
 * 
 * Tuned with controlled 0.12–0.28 opacities so text, badges, and tour cards
 * maintain flawless WCAG AA contrast and visibility throughout all cycles.
 */
interface DynamicBackgroundProps {
  className?: string;
  position?: "fixed" | "absolute";
}

export const DynamicBackground: React.FC<DynamicBackgroundProps> = ({
  className = "",
  position = "absolute"
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let intervalId: any;
    let isCancelled = false;

    const initFinisher = () => {
      if (isCancelled) return true;
      if (typeof window !== "undefined" && (window as any).FinisherHeader && containerRef.current) {
        try {
          const existingCanvas = containerRef.current.querySelector("canvas");
          if (!existingCanvas) {
            new (window as any).FinisherHeader({
              count: 3,
              size: { min: 800, max: 1300, pulse: 0 },
              speed: { x: { min: 0.3, max: 0.7 }, y: { min: 0.3, max: 0.7 } },
              colors: {
                background: "#071323",
                particles: ["#0a40d0", "#0db840", "#066a35"]
              },
              blending: "lighten",
              opacity: { center: 0.16, edge: 0 },
              skew: 0,
              shapes: ["c"]
            });
          }
          return true;
        } catch (e) {
          console.warn("FinisherHeader initialization:", e);
          return true;
        }
      }
      return false;
    };

    if (!initFinisher()) {
      intervalId = setInterval(() => {
        if (initFinisher()) {
          clearInterval(intervalId);
        }
      }, 50);
    }

    return () => {
      isCancelled = true;
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Script 
        src="/js/finisher-header.es5.min.js" 
        strategy="afterInteractive" 
      />

      {/* Background container */}
      <div 
        ref={containerRef}
        className={`finisher-header pointer-events-none select-none ${className}`}
        style={{
          position: position,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          backgroundColor: "#071323",
          overflow: "hidden"
        }}
        aria-hidden="true"
      >
        {/* Layer 1: Subtle Deep Emerald Glow Orb (State A -> B -> C) */}
        <div 
          className="dynamic-orb dynamic-orb-emerald"
          style={{
            top: "12%",
            left: "22%",
            width: "45vw",
            height: "45vw",
            maxWidth: "700px",
            maxHeight: "700px",
          }}
        />

        {/* Layer 2: Deep Dark Blue Ambient Orb (State A -> B -> C) */}
        <div 
          className="dynamic-orb dynamic-orb-blue"
          style={{
            top: "22%",
            left: "8%",
            width: "50vw",
            height: "50vw",
            maxWidth: "800px",
            maxHeight: "800px",
          }}
        />

        {/* Layer 3: Dark Forest Green Subtle Glow */}
        <div 
          className="dynamic-orb dynamic-orb-forest"
          style={{
            bottom: "8%",
            right: "12%",
            width: "40vw",
            height: "40vw",
            maxWidth: "600px",
            maxHeight: "600px",
          }}
        />

        {/* Layer 4: Midnight Navy Deep Atmosphere */}
        <div 
          className="dynamic-orb dynamic-orb-navy"
          style={{
            top: "5%",
            right: "8%",
            width: "55vw",
            height: "55vw",
            maxWidth: "850px",
            maxHeight: "850px",
          }}
        />
      </div>
    </>
  );
};
