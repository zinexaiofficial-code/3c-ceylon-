"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin 
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { useCookieConsent } from "@/context/CookieConsentContext";

// Alphabetical Sri Lankan destination list (Inspired by ceylontours.lk)
const DESTINATION_COLUMNS = [
  [
    { name: "Anuradhapura", slug: "anuradhapura" },
    { name: "Bandarawela", slug: "bandarawela" },
    { name: "Bentota", slug: "bentota" },
    { name: "Dambulla", slug: "dambulla" },
    { name: "Ella", slug: "ella" },
    { name: "Galle", slug: "galle" },
    { name: "Habarana", slug: "habarana" },
    { name: "Hatton", slug: "hatton" },
    { name: "Jaffna", slug: "jaffna" },
    { name: "Kalpitiya", slug: "kalpitiya" },
  ],
  [
    { name: "Kandy", slug: "kandy" },
    { name: "Kataragama", slug: "kataragama" },
    { name: "Kitulgala", slug: "kitulgala" },
    { name: "Kumana", slug: "kumana" },
    { name: "Mannar", slug: "mannar" },
    { name: "Minneriya", slug: "minneriya" },
    { name: "Mirissa", slug: "mirissa" },
    { name: "Negombo", slug: "negombo" },
    { name: "Nuwara Eliya", slug: "nuwara-eliya" },
    { name: "Pasikuda", slug: "pasikuda" },
  ],
  [
    { name: "Pinnawala", slug: "pinnawala" },
    { name: "Polonnaruwa", slug: "polonnaruwa" },
    { name: "Sigiriya", slug: "sigiriya" },
    { name: "Sinharaja", slug: "sinharaja" },
    { name: "Tangalle", slug: "tangalle" },
    { name: "Trincomalee", slug: "trincomalee" },
    { name: "Udawalawe", slug: "udawalawe" },
    { name: "Unawatuna", slug: "unawatuna" },
    { name: "Wilpattu", slug: "wilpattu" },
    { name: "Yala National Park", slug: "yala" },
  ],
];

export const Footer: React.FC = () => {
  const { openCookieSettings } = useCookieConsent();

  return (
    <footer className="bg-[#050E1A] text-white border-t border-white/10 pt-16 sm:pt-20 pb-12 relative z-10 select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Clean & Professional (Inspired by ceylontours.lk) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Philosophy (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-5">
            <Link href="/" className="inline-flex items-center space-x-3 rtl:space-x-reverse group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/95 p-0.5 border border-white/20 shadow-md group-hover:border-[#18E600] transition-colors flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="3C Ceylon Tours"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-lg font-extrabold tracking-tight text-white uppercase group-hover:text-[#18E600] transition-colors leading-tight">
                  3C CEYLON <span className="text-[#18E600]">TOURS</span>
                </span>
                <span className="text-[10px] text-gray-300 tracking-[0.2em] uppercase font-semibold">
                  Luxury Island Journeys
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-[13px] text-gray-300/80 leading-relaxed font-normal max-w-sm">
              Tailor-made Sri Lanka luxury itineraries. Ancient cities, mist-veiled tea country, wild safari realms, and golden coastlines, planned by travel specialists who drive these roads themselves.
            </p>

            {/* Social Media Row */}
            <div className="flex items-center space-x-4 pt-1 text-gray-300">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#18E600] hover:text-black flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#18E600]"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#18E600] hover:text-black flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#18E600]"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#18E600] hover:text-black flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#18E600]"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.38a6.34 6.34 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 9.89 5.25c.34-.23.65-.5.92-.81.65-.75 1.05-1.71 1.05-2.76V8.71a8.28 8.28 0 0 0 4.73 1.48v-3.5Z" />
                </svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#18E600] hover:text-black flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#18E600]"
              >
                <Youtube className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#18E600] hover:text-black flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#18E600]"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#D4AF37]">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-gray-300/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-white transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-white transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Guide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Offices (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#D4AF37]">
              OFFICES
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-300/80 leading-relaxed font-normal">
              Level 12, West Tower,<br />
              World Trade Center,<br />
              Colombo 01,<br />
              Sri Lanka
            </p>
          </div>

          {/* Column 4, 5, 6: Destinations Multi-Column Showcase (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/destinations" className="inline-block group/dest-title">
              <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#D4AF37] group-hover/dest-title:text-[#18E600] transition-colors flex items-center space-x-1.5">
                <span>DESTINATIONS</span>
              </h3>
            </Link>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 text-xs sm:text-[13px] text-gray-300/80">
              {DESTINATION_COLUMNS.map((col, colIdx) => (
                <ul key={colIdx} className="space-y-2">
                  {col.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href="/destinations" 
                        className="hover:text-[#18E600] transition-colors block truncate"
                        title={`Explore ${item.name} in Sri Lanka Destinations`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Clean Copyright, Contact & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} 3C Ceylon Tours (Pvt) Ltd. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-gray-300/80">
            <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
              {COMPANY_INFO.email}
            </a>
            <span className="hidden sm:inline text-gray-600">•</span>
            <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
              {COMPANY_INFO.phone}
            </a>
            <span className="hidden sm:inline text-gray-600">•</span>
            <a href={`tel:${COMPANY_INFO.phoneSecondary.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
              {COMPANY_INFO.phoneSecondary}
            </a>
            <span className="hidden sm:inline text-gray-600">•</span>
            <span>Colombo, Sri Lanka</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-gray-400">
            <button
              type="button"
              onClick={openCookieSettings}
              className="hover:text-white transition-colors cursor-pointer text-xs focus:outline-none focus:underline"
            >
              Cookie Settings
            </button>
            <span className="text-gray-600">•</span>
            <Link href="/about#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/about#terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
