import React from "react";
import Link from "next/link";
import { Compass, ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-transparent px-4 py-24 relative z-10 text-white">
      <div className="max-w-md w-full bg-white/[0.04] backdrop-blur-2xl rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/15 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#0BFF01]/10 border border-[#0BFF01]/30 text-[#0BFF01] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(11,255,1,0.25)]">
          <Compass className="w-8 h-8 text-[#0BFF01] animate-spin-slow" />
        </div>

        <span className="text-xs uppercase font-bold tracking-widest text-[#0BFF01] block">
          404 — Page Not Found
        </span>

        <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Lost in Paradise?
        </h1>

        <p className="text-sm text-white/80 leading-relaxed font-normal">
          The path you are looking for has moved. Let us guide you back to our signature journeys.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors"
          >
            <Home className="w-4 h-4 text-[#0BFF01]" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/packages"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#0BFF01] hover:bg-[#4CEB00] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-[0_0_20px_rgba(11,255,1,0.35)]"
          >
            <span>Explore Tours</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
