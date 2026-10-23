import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DESTINATIONS } from "@/data/destinations";
import { TOUR_PACKAGES } from "@/data/packages";
import { PackageCard } from "@/components/PackageCard";
import { DestinationGallery } from "@/components/DestinationGallery";
import { getWhatsAppLink } from "@/data/company";
import { 
  MapPin, 
  Sun, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowLeft, 
  MessageCircle, 
  Compass,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import type { Metadata } from "next";

interface DestinationDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return DESTINATIONS.map((dest) => ({
    slug: dest.slug,
  }));
}

export async function generateMetadata({ params }: DestinationDetailPageProps): Promise<Metadata> {
  const dest = DESTINATIONS.find((d) => d.slug === params.slug);
  if (!dest) return { title: "Destination Not Found | 3C Ceylon Tours" };

  return {
    title: `${dest.name} Travel Guide | 3C Ceylon Tours`,
    description: `${dest.description.slice(0, 160)}...`,
    openGraph: {
      title: `${dest.name} Luxury Travel Guide | 3C Ceylon Tours`,
      description: dest.tagline,
      images: [{ url: dest.image }],
    },
  };
}

export default function DestinationDetailPage({ params }: DestinationDetailPageProps) {
  const dest = DESTINATIONS.find((d) => d.slug === params.slug);

  if (!dest) {
    notFound();
  }

  // Get packages that include this destination
  const relatedPackages = TOUR_PACKAGES.filter((p) => 
    dest.relatedPackageSlugs.includes(p.slug)
  );

  // Schema.org TouristDestination JSON-LD
  const destinationJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": dest.name,
    "description": dest.description,
    "image": dest.image,
    "touristType": ["Cultural tourism", "Nature tourism", "Luxury tourism", "Wildlife safari"],
    "containedInPlace": {
      "@type": "Country",
      "name": "Sri Lanka"
    }
  };

  return (
    <div className="bg-[#FAF8F2] min-h-screen pt-24 sm:pt-28 pb-24 text-[#172334] relative z-10 selection:bg-[#18E600] selection:text-black">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationJsonLd) }}
      />

      {/* Breadcrumb Navigation & Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2 rtl:space-x-reverse text-[#526173]">
            <Link href="/" className="hover:text-[#0E6838] transition-colors font-medium">Home</Link>
            <span>/</span>
            <Link href="/destinations" className="hover:text-[#0E6838] transition-colors font-medium">Destinations</Link>
            <span>/</span>
            <span className="text-[#0E6838] font-bold">{dest.name}</span>
          </div>

          <Link
            href="/destinations"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0E6838] hover:text-[#18E600] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Destinations</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="relative h-[480px] sm:h-[580px] md:h-[650px] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.25)] border border-gray-200/60 bg-neutral-950 group">
          <Image
            src={dest.image}
            alt={`${dest.name} Sri Lanka Luxury Destination`}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          {/* Shining Light Sweep Effect */}
          <div 
            className="pointer-events-none absolute inset-0 -translate-x-[140%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[240%] z-20" 
            aria-hidden="true"
          />

          {/* Balanced Vignette & Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10" />

          {/* Hero Overlay Details */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 text-white space-y-3 sm:space-y-4 z-20">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#18E600] text-black inline-flex items-center space-x-1.5 shadow-[0_0_15px_rgba(24,230,0,0.5)]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{dest.province}</span>
              </span>

              <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/60 backdrop-blur-md border border-white/20 text-white/90">
                {dest.gallery.length} Gallery Photographs
              </span>
            </div>

            <h1 className="font-sans text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-md">
              {dest.name}
            </h1>

            <p className="text-base sm:text-xl text-white/90 font-medium max-w-3xl leading-relaxed drop-shadow">
              {dest.tagline}
            </p>

            {/* Quick Hero Meta Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-semibold text-white/90">
              <div className="flex items-center space-x-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                <Sun className="w-3.5 h-3.5 text-amber-300" />
                <span>{dest.weather.split("(")[0]}</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                <Calendar className="w-3.5 h-3.5 text-[#18E600]" />
                <span>Recommended Stay: {dest.idealStay}</span>
              </div>
              <div className="hidden sm:flex items-center space-x-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5 text-[#18E600]" />
                <span>Private Chauffeur Escort</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Row 1: Overview & Practical Facts Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Main Description & Attractions */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-7 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-gray-200/90 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-[#18E600]/15 text-[#0E6838] border border-[#18E600]/30 text-xs font-extrabold uppercase tracking-widest">
                <Compass className="w-3.5 h-3.5 text-[#0E6838]" />
                <span>Destination Overview</span>
              </div>

              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172334] tracking-tight">
                Discover the Magic of {dest.name}
              </h2>

              <p className="text-base sm:text-lg text-[#526173] font-normal leading-relaxed">
                {dest.description}
              </p>
            </div>

            {/* Top Attractions & Experiences */}
            <div className="pt-6 border-t border-gray-200 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0E6838]">
                  Must-Visit Sights
                </span>
                <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-[#172334] tracking-tight mt-1">
                  Key Attractions in {dest.name}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {dest.attractions.map((att, i) => (
                  <div 
                    key={i} 
                    className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 hover:border-[#18E600]/60 hover:bg-emerald-50/20 transition-all duration-300 space-y-2 group"
                  >
                    <h4 className="font-extrabold text-sm sm:text-base text-[#172334] group-hover:text-[#0E6838] transition-colors flex items-center space-x-2 rtl:space-x-reverse">
                      <CheckCircle2 className="w-4 h-4 text-[#18E600] flex-shrink-0" />
                      <span>{att.title}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#526173] leading-relaxed font-normal">
                      {att.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Practical Travel Guide Panel (Sidebar) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.07)] border border-gray-200/90 space-y-6 sticky top-28">
              <h3 className="font-sans text-lg sm:text-xl font-extrabold text-[#172334] border-b border-gray-200 pb-3 tracking-tight flex items-center justify-between">
                <span>Visitor Information</span>
                <span className="text-[11px] font-bold text-[#0E6838] uppercase bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Verified Guide
                </span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="text-[10px] uppercase font-bold text-[#526173] tracking-wider flex items-center space-x-1.5 mb-1">
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                    <span>Best Time to Visit</span>
                  </span>
                  <p className="font-bold text-[#172334]">{dest.bestTimeToVisit}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="text-[10px] uppercase font-bold text-[#526173] tracking-wider flex items-center space-x-1.5 mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#0E6838]" />
                    <span>Weather &amp; Temperatures</span>
                  </span>
                  <p className="font-bold text-[#172334]">{dest.weather}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="text-[10px] uppercase font-bold text-[#526173] tracking-wider flex items-center space-x-1.5 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#0E6838]" />
                    <span>Recommended Duration</span>
                  </span>
                  <p className="font-bold text-[#172334]">{dest.idealStay}</p>
                </div>
              </div>

              {/* Local Chauffeur Insider Tips */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0E6838] block">
                  Chauffeur &amp; Guide Tips:
                </span>
                <ul className="space-y-2 text-xs text-[#526173]">
                  {dest.insiderTips.map((tip, i) => (
                    <li key={i} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <span className="text-[#18E600] font-bold text-sm leading-none">•</span>
                      <span className="leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2">
                <a
                  href={getWhatsAppLink(`Hello 3C Ceylon Tours, I'd like to plan a private tour to ${dest.name}. Can you recommend the best itinerary and luxury hotels?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-full bg-[#18E600] hover:bg-[#15D600] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-[0_0_20px_rgba(24,230,0,0.35)] hover:shadow-[0_0_30px_rgba(24,230,0,0.6)] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Customize Trip to {dest.name}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Comprehensive Visual Photo Gallery (All folder images) */}
        <DestinationGallery destinationName={dest.name} images={dest.gallery} />

        {/* Row 3: Related Tours Visiting this Destination */}
        {relatedPackages.length > 0 && (
          <div className="space-y-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0E6838]">
                  Recommended Itineraries
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172334] mt-1 tracking-tight">
                  Tour Packages Featuring {dest.name}
                </h2>
              </div>
              <Link
                href="/packages"
                className="text-xs font-bold text-[#0E6838] hover:text-[#18E600] flex items-center space-x-1.5 transition-colors"
              >
                <span>View All Tour Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
