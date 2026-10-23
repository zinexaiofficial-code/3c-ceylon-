"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/data/company";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scrolling while mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // EXACT short navigation labels as specified
  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/packages", label: "PACKAGES" },
    { href: "/destinations", label: "DESTINATIONS" },
    { href: "/experiences", label: "EXPERIENCES" },
    { href: "/about", label: "ABOUT" },
    { href: "/blog", label: "GUIDE" },
    { href: "/contact", label: "CONTACT" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* Sticky Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#03091C]/95 backdrop-blur-md shadow-lg border-b border-white/10 h-[76px] md:h-[82px]"
            : "bg-gradient-to-b from-black/85 via-black/45 to-transparent border-none shadow-none h-[84px] md:h-[90px]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo and Brand Name */}
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18E600] rounded-xl"
            >
              {/* Circular Company Logo (Desktop: 54px, Mobile: 44px) */}
              <div className="relative w-[44px] h-[44px] md:w-[54px] md:h-[54px] rounded-full overflow-hidden bg-white/95 p-0.5 shadow-md flex-shrink-0 border-2 border-white/20 group-hover:border-[#18E600] transition-all duration-300 aspect-square">
                <Image
                  src="/images/logo.png"
                  alt="3C Ceylon Tours Logo"
                  width={60}
                  height={60}
                  priority
                  className="object-contain w-full h-full rounded-full"
                />
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                <span className="font-sans text-[17px] sm:text-[18px] xl:text-[20px] font-extrabold tracking-tight text-white uppercase group-hover:text-[#18E600] transition-colors leading-tight">
                  3C CEYLON <span className="text-[#18E600]">TOURS</span>
                </span>
                <span className="text-[10px] xl:text-[11px] tracking-[0.22em] uppercase font-semibold text-gray-200 block -mt-0.5">
                  Luxury Island Journeys
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links — Clean horizontal row */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-5 xl:gap-7"
            >
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-1 text-[14px] xl:text-[15px] font-bold tracking-wider uppercase transition-colors duration-200 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#18E600] rounded drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] ${
                      active
                        ? "text-[#18E600]"
                        : "text-white hover:text-[#18E600]"
                    }`}
                  >
                    <span>{link.label}</span>

                    {/* Active Accent Indicator */}
                    {active ? (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#18E600] shadow-[0_0_8px_rgba(24,230,0,0.8)] rounded-full" />
                    ) : (
                      /* Hover subtle underline slide */
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white hover:text-[#18E600] transition-colors focus:outline-none focus:ring-2 focus:ring-[#18E600]"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Accessible Mobile Navigation Drawer via Portal to Document Body */}
      {mounted && mobileMenuOpen && createPortal(
        <div
          className="fixed inset-0 z-[99999] lg:hidden flex flex-col bg-[#03091C] text-white w-screen h-[100dvh] overflow-hidden animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Drawer Top Header (solid dark background, prominent branding & close button) */}
          <div className="flex items-center justify-between px-5 h-[76px] border-b border-white/10 bg-[#020614] flex-shrink-0">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-3 group"
            >
              <div className="relative w-[44px] h-[44px] rounded-full overflow-hidden bg-white/95 p-0.5 border border-white/20 aspect-square flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="3C Ceylon Tours Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-[17px] font-extrabold tracking-tight text-white uppercase leading-tight">
                  3C CEYLON <span className="text-[#18E600]">TOURS</span>
                </span>
                <span className="text-[10px] tracking-[0.22em] uppercase font-semibold text-gray-300 block -mt-0.5">
                  Luxury Island Journeys
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#18E600]"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Drawer Navigation Links (scrollable with overscroll-contain) */}
          <nav className="flex-1 overflow-y-auto px-5 py-6 space-y-2 overscroll-contain">
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#18E600] px-3 mb-2 flex items-center space-x-1.5">
              <span>EXPLORE THE ISLAND</span>
            </div>

            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3.5 px-4 rounded-2xl text-[16px] font-extrabold tracking-wider uppercase transition-all duration-200 ${
                    active
                      ? "bg-[#18E600] text-black shadow-[0_0_20px_rgba(24,230,0,0.35)]"
                      : "text-white hover:text-[#18E600] bg-white/[0.04] hover:bg-white/[0.08] border border-white/5"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className={`w-5 h-5 ${active ? "text-black" : "text-gray-400"}`} />
                </Link>
              );
            })}

            {/* Quick Action CTA Cards in Mobile Menu */}
            <div className="pt-6 space-y-3">
              <Link
                href="/packages"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 px-5 rounded-2xl bg-[#18E600] hover:bg-[#15D600] text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(24,230,0,0.4)] flex items-center justify-center space-x-2 transition-all active:scale-98"
              >
                <span>Explore All Tour Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-2xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] font-bold text-sm tracking-wider border border-[#25D366]/30 flex items-center justify-center space-x-2.5 transition-all active:scale-98"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span className="text-white">Chat on WhatsApp (24/7)</span>
              </a>
            </div>
          </nav>

          {/* Drawer Bottom Footer */}
          <div className="px-5 py-4 border-t border-white/10 bg-[#020614] flex-shrink-0 text-center">
            <p className="text-xs text-gray-400 font-medium">
              3C Ceylon Tours • SLTDA-Approved Destination Specialists
            </p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
