import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TOUR_PACKAGES } from "@/data/packages";
import { PackageBookingSidebar } from "@/components/PackageBookingSidebar";
import { getWhatsAppLink } from "@/data/company";
import { 
  Clock, 
  MapPin, 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  Calendar, 
  MessageCircle, 
  ShieldCheck, 
  Compass,
  ArrowRight,
  Info,
  Car
} from "lucide-react";
import type { Metadata } from "next";

interface PackageDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return TOUR_PACKAGES.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: PackageDetailPageProps): Promise<Metadata> {
  const pkg = TOUR_PACKAGES.find((p) => p.slug === params.slug);
  if (!pkg) return { title: "Tour Package Not Found" };

  return {
    title: `${pkg.title} | 3C Ceylon Tours`,
    description: pkg.subtitle,
    openGraph: {
      title: `${pkg.title} | 3C Ceylon Tours`,
      description: pkg.subtitle,
      images: [{ url: pkg.image }],
    },
  };
}

export default function PackageDetailPage({ params }: PackageDetailPageProps) {
  const pkg = TOUR_PACKAGES.find((p) => p.slug === params.slug);

  if (!pkg) {
    notFound();
  }

  // Schema.org TouristTrip JSON-LD (Zero price fields as requested)
  const touristTripJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": pkg.title,
    "description": pkg.overview,
    "touristType": pkg.idealFor,
    "provider": {
      "@type": "TravelAgency",
      "name": "3C Ceylon Tours",
      "url": "https://3cceylontours.com"
    },
    "itinerary": pkg.itinerary.map((day) => ({
      "@type": "TouristDestination",
      "name": `Day ${day.day}: ${day.title}`,
      "description": day.description
    }))
  };

  return (
    <div className="bg-[#FAF8F2] min-h-screen pt-24 pb-24 text-[#172334] select-none">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripJsonLd) }}
      />

      {/* Breadcrumb Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs text-[#526173]">
          <Link href="/" className="hover:text-[#0E6838] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/packages" className="hover:text-[#0E6838] transition-colors">Tour Packages</Link>
          <span>/</span>
          <span className="text-[#0E6838] font-bold truncate max-w-xs">{pkg.title}</span>
        </div>
      </div>

      {/* Hero Banner Section (Destination Card Aesthetic) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="relative h-[380px] sm:h-[480px] md:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 bg-black">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Layered Gradient Overlay - Preserves image brightness and natural sunlight at top & center */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

          {/* Content Overlay */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 text-white space-y-4 z-20">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#18E600] text-black shadow-lg">
                {pkg.style}
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-black/65 backdrop-blur-md text-white border border-white/20">
                {pkg.durationNights} Nights / {pkg.durationDays} Days
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-black/65 backdrop-blur-md text-[#18E600] border border-[#18E600]/40 flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% Private Tour</span>
              </span>
            </div>

            <h1 className="font-sans text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white max-w-4xl leading-tight tracking-tight drop-shadow-md">
              {pkg.title}
            </h1>

            <p className="text-sm sm:text-lg text-white/90 font-medium max-w-3xl leading-relaxed drop-shadow">
              {pkg.subtitle}
            </p>

            {pkg.brandLine && (
              <p className="text-xs sm:text-sm text-[#18E600] font-bold uppercase tracking-widest drop-shadow">
                {pkg.brandLine}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Layout (2 Columns: Detail Content + Sticky Inquiry Sidebar) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Itinerary, Highlights, Inclusions */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Quick Facts Panel */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-200/90 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#526173] block">Duration</span>
                <span className="font-sans text-base sm:text-lg font-extrabold text-[#172334] flex items-center space-x-1 mt-0.5 tracking-tight">
                  <Clock className="w-4 h-4 text-[#0E6838]" />
                  <span>{pkg.durationDays} Days</span>
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#526173] block">Travel Pace</span>
                <span className="font-sans text-base sm:text-lg font-extrabold text-[#172334] flex items-center space-x-1 mt-0.5 tracking-tight">
                  <Compass className="w-4 h-4 text-[#0E6838]" />
                  <span>{pkg.activityLevel}</span>
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#526173] block">Tour Type</span>
                <span className="font-sans text-base sm:text-lg font-extrabold text-[#0E6838] flex items-center space-x-1 mt-0.5 tracking-tight">
                  <ShieldCheck className="w-4 h-4 text-[#0E6838]" />
                  <span>Private Tour</span>
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#526173] block">Vehicle</span>
                <span className="font-sans text-base sm:text-lg font-extrabold text-[#172334] flex items-center space-x-1 mt-0.5 tracking-tight">
                  <Car className="w-4 h-4 text-[#0E6838]" />
                  <span>Dedicated AC</span>
                </span>
              </div>
            </div>

            {/* Destinations Covered Strip */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-200/90 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0E6838] flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-[#0E6838]" />
                <span>Destinations Covered</span>
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {pkg.destinationsCovered.map((dest, i) => (
                  <span 
                    key={i} 
                    className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#F4F9F5] text-[#123B2A] border border-[#18E600]/30"
                  >
                    {dest}
                  </span>
                ))}
              </div>
            </div>

            {/* Overview Narrative */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-200/90 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#18E600]/15 text-[#0E6838] text-xs font-bold uppercase tracking-wider">
                <span>Journey Introduction</span>
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#172334] tracking-tight">
                Tour Overview
              </h2>
              <div className="text-sm sm:text-base text-[#526173] leading-relaxed font-normal whitespace-pre-line">
                {pkg.overview}
              </div>

              {/* Highlights checklist */}
              <div className="pt-6 border-t border-gray-100 space-y-4">
                <h3 className="font-bold text-sm text-[#172334] uppercase tracking-wider">
                  Tour Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pkg.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start space-x-2.5 rtl:space-x-reverse text-xs sm:text-sm text-[#334155]">
                      <CheckCircle className="w-4 h-4 text-[#0E6838] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Day-by-Day In-Detail Itinerary */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172334] tracking-tight">
                    Day-by-Day Itinerary
                  </h2>
                  <p className="text-xs sm:text-sm text-[#526173] font-normal mt-1">
                    Every step is flexible and can be customized to your preferred pace.
                  </p>
                </div>
                <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#18E600]/20 border border-[#18E600]/50 text-[#0E6838]">
                  {pkg.itinerary.length} Days Itinerary
                </span>
              </div>

              <div className="space-y-5">
                {pkg.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-200/90 hover:border-[#18E600]/80 transition-all space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="w-11 h-11 rounded-2xl bg-[#172334] text-[#18E600] flex items-center justify-center font-black text-sm shadow-md flex-shrink-0">
                          {day.day < 10 ? `0${day.day}` : day.day}
                        </span>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0E6838] block">
                            DAY {day.day}
                          </span>
                          <h3 className="font-sans text-lg sm:text-xl font-extrabold text-[#172334] tracking-tight leading-snug">
                            {day.title}
                          </h3>
                        </div>
                      </div>

                      {day.route && (
                        <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-[#172334] border border-gray-200 self-start sm:self-center">
                          <MapPin className="w-3.5 h-3.5 text-[#0E6838] mr-1.5 flex-shrink-0" />
                          <span className="truncate">{day.route}</span>
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#526173] leading-relaxed font-normal">
                      {day.description}
                    </p>

                    {/* Daily Highlights */}
                    {day.highlights && day.highlights.length > 0 && (
                      <div className="pt-2">
                        <span className="text-[11px] font-bold text-[#172334] uppercase tracking-wider block mb-2">
                          Day Highlights:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {day.highlights.map((h, idx) => (
                            <span 
                              key={idx}
                              className="inline-flex items-center text-xs font-medium px-3 py-1 rounded-full bg-[#F4F9F5] text-[#123B2A] border border-green-200"
                            >
                              ✓ {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Note if available */}
                    {day.notes && (
                      <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs flex items-start space-x-2">
                        <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed"><strong>Note:</strong> {day.notes}</span>
                      </div>
                    )}

                    {/* Overnight Stay Info */}
                    {day.overnight && (
                      <div className="pt-2 flex items-center justify-between text-xs text-[#526173] border-t border-gray-100">
                        <span>
                          Overnight Stay: <strong className="text-[#172334]">{day.overnight}</strong>
                        </span>
                        {day.meals && (
                          <span>
                            Meals: <strong className="text-[#0E6838]">{day.meals}</strong>
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions and Exclusions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#18E600]/40 space-y-4">
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-[#0E6838]">
                  <CheckCircle className="w-5 h-5 text-[#0E6838]" />
                  <h3 className="font-sans text-lg sm:text-xl font-extrabold tracking-tight text-[#172334]">What is Included</h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#526173]">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <span className="text-[#0E6838] font-bold flex-shrink-0">•</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-200/90 space-y-4">
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-amber-700">
                  <XCircle className="w-5 h-5 text-amber-600" />
                  <h3 className="font-sans text-lg sm:text-xl font-extrabold tracking-tight text-[#172334]">What is Not Included</h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#526173]">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <span className="text-gray-400 font-bold flex-shrink-0">•</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-200/90 space-y-6">
              <div className="flex items-center space-x-2 text-[#0E6838]">
                <HelpCircle className="w-5 h-5 text-[#0E6838]" />
                <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#172334] tracking-tight">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {pkg.faqs.map((faq, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-[#F7F9F6] border border-gray-200/80 space-y-2">
                    <h3 className="font-bold text-sm sm:text-base text-[#172334]">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#526173] leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking & WhatsApp Quote Card with Popup Proposal Modal */}
          <div className="lg:col-span-4">
            <PackageBookingSidebar
              packageTitle={pkg.title}
              packageSlug={pkg.slug}
              durationDays={pkg.durationDays}
              durationNights={pkg.durationNights}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
