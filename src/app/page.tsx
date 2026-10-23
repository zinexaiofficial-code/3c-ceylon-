import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { TripPlannerBar } from "@/components/TripPlannerBar";
import { SigiriyaParallaxSection } from "@/components/home/SigiriyaParallaxSection";
import { TourismExperienceGrid } from "@/components/TourismExperienceGrid";
import { InteractiveSriLankaMap } from "@/components/home/InteractiveSriLankaMap";
import { OurJourneyCategoriesSection } from "@/components/home/OurJourneyCategoriesSection";
import { PackageCard } from "@/components/PackageCard";
import { IconicDestinationsSection } from "@/components/home/IconicDestinationsSection";
import { CuratedExperiencesSection } from "@/components/home/CuratedExperiencesSection";
import { DestinationCard } from "@/components/DestinationCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ExperienceBestSection } from "@/components/home/ExperienceBestSection";
import { TOUR_PACKAGES } from "@/data/packages";
import { DESTINATIONS } from "@/data/destinations";
import { EXPERIENCES } from "@/data/experiences";
import { BLOG_POSTS } from "@/data/blogs";
import { COMPANY_INFO, getWhatsAppLink } from "@/data/company";
import { 
  ArrowRight, 
  ShieldCheck, 
  Compass, 
  Car, 
  Clock, 
  Heart, 
  CheckCircle,
  MessageCircle,
  Award
} from "lucide-react";

export default function HomePage() {
  const featuredPackages = TOUR_PACKAGES.filter(p => p.featured).slice(0, 3);
  const topDestinations = DESTINATIONS.slice(0, 6);
  const topExperiences = EXPERIENCES.slice(0, 6);
  const latestBlogs = BLOG_POSTS.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* 2. Interactive Quick Trip Finder */}
      <TripPlannerBar />

      {/* 3. Cinematic Two-Layer Parallax Section (Sigiriya Rock + Moving Couple Inspired by SLTDA) */}
      <SigiriyaParallaxSection />

      {/* 4. Our Journey Categories - Infinite Moving Marquee Loop */}
      <OurJourneyCategoriesSection />

      {/* 5. Sri Lanka Tourism-Inspired 8-Category Wonders Gallery (Deep Navy Dark) */}
      <TourismExperienceGrid />

      {/* 6. Interactive Sri Lanka Tourism Map Section (Warm Ivory Light) */}
      <InteractiveSriLankaMap />

      {/* 7. Iconic Sri Lankan Destinations Section (Full-Image Gallery Mosaic with Shine & Pop-Up Transitions) */}
      <IconicDestinationsSection />

      {/* 8. Curated Travel Experiences Grid (Full-Image Tourism Gallery Mosaic with Shine & Pop-Up Transitions) */}
      <CuratedExperiencesSection />

      {/* 9. The 3C Standard (Why Choose 3C Ceylon Tours) (Pure White Light) */}
      <section id="why-us" className="py-14 sm:py-18 relative overflow-hidden bg-white text-[#172334]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1.5 rounded-full bg-[#18E600]/15 text-[#123B2A] border border-[#18E600]/30 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-[#123B2A]" />
              <span>The 3C Difference</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#172334] tracking-tight leading-[1.08] mb-3">
              Why Travel With Us.
            </h2>
            <p className="text-base sm:text-lg text-[#526173] font-normal">
              Uncompromising luxury, authentic hospitality, and peace of mind across Sri Lanka.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_INFO.features.map((feat, i) => (
              <div 
                key={i} 
                className="p-7 rounded-3xl bg-[#F7F9F6] border border-gray-200/80 hover:border-[#123B2A]/40 hover:shadow-xl transition-all duration-300 space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 text-[#123B2A] flex items-center justify-center font-bold shadow-sm">
                  {i === 0 && <Compass className="w-6 h-6 text-[#123B2A]" />}
                  {i === 1 && <ShieldCheck className="w-6 h-6 text-[#123B2A]" />}
                  {i === 2 && <Car className="w-6 h-6 text-[#123B2A]" />}
                  {i === 3 && <Clock className="w-6 h-6 text-[#123B2A]" />}
                </div>
                <h3 className="font-extrabold text-xl text-[#172334] tracking-tight">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#526173] leading-relaxed font-normal">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Full-Width Visual Section: The Magic of Ceylon (Fixed Background Image Parallax) */}
      <section 
        className="relative py-16 sm:py-24 md:py-28 bg-fixed bg-cover bg-center md:bg-[position:center_right] overflow-hidden" 
        style={{ 
          backgroundImage: "url('/images/hero-poster.jpg')",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl bg-white/85 backdrop-blur-xl border border-white/70 shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-3xl p-8 sm:p-12 space-y-6">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#18E600]/15 border border-[#18E600]/30 text-[#0E6838] text-xs font-extrabold uppercase tracking-widest shadow-sm">
              <span>Pure Sri Lankan Splendor</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-[#0A1E14]">
              &ldquo;There is no other island on Earth that offers{" "}
              <span className="text-[#0E6838]">so much beauty</span>{" "}
              in such intimate proximity.&rdquo;
            </h2>

            <p className="text-base sm:text-lg text-[#334155] font-normal leading-relaxed">
              Let 3C Ceylon Tours design a once-in-a-lifetime vacation with private chauffeur-guides and 5-star service.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#18E600] hover:bg-[#15C800] text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_4px_20px_rgba(24,230,0,0.35)] hover:scale-105 transition-all text-center"
              >
                Plan Your Bespoke Escape
              </Link>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0A1E14] hover:bg-[#0E6838] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-colors flex items-center justify-center space-x-2 text-center"
              >
                <MessageCircle className="w-4 h-4 text-[#18E600]" />
                <span>Chat With Our Team</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Verified Customer Testimonials (Deep Navy Dark Section) */}
      <TestimonialsSection />

      {/* 12. Experience The Best In Travel (Checkerboard Alternating 6-Block Mosaic) */}
      <ExperienceBestSection />
    </div>
  );
}
