"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";

export const FinisherBackground: React.FC = () => {
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
              count: 5,
              size: { min: 900, max: 1500, pulse: 0 },
              speed: { x: { min: 0.4, max: 1.2 }, y: { min: 0.4, max: 1.2 } },
              colors: {
                background: "#000000",
                particles: ["#0023dd", "#0bff01", "#00f0ff"]
              },
              blending: "lighten",
              opacity: { center: 0.22, edge: 0 },
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
      }, 80);
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

      {/* Persistent Background Container */}
      <div 
        ref={containerRef}
        className="finisher-header fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-black"
        aria-hidden="true"
      >
        {/* CSS Ambient Mesh Lights (Graceful instant glowing orbs matching AI Expo) */}
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#0023dd]/20 blur-[140px] animate-pulse" />
        <div className="absolute top-[35%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#0bff01]/14 blur-[150px] animate-pulse delay-1000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-[#0023dd]/18 blur-[130px]" />
        <div className="absolute top-[60%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#0bff01]/10 blur-[140px]" />
      </div>
    </>
  );
};
