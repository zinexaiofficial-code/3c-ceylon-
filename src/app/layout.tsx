import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReadyToPlanSection } from "@/components/common/ReadyToPlanSection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { DynamicBackground } from "@/components/DynamicBackground";
import { PageLoader } from "@/components/PageLoader";
import { COMPANY_INFO } from "@/data/company";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://3cceylontours.com"),
  title: {
    default: "3C CEYLON TOURS | Luxury Private Tours & Holidays in Sri Lanka",
    template: "%s | 3C Ceylon Tours Sri Lanka",
  },
  description:
    "Award-quality bespoke travel agency in Sri Lanka. Tailor-made luxury tour packages, cultural heritage, private wildlife safaris, tea hills, and beach holidays with dedicated chauffeur-guides.",
  keywords: [
    "Sri Lanka tour packages",
    "Sri Lanka travel agency",
    "Sri Lanka private tours",
    "Sri Lanka holiday packages",
    "Sri Lanka honeymoon tours",
    "Sri Lanka wildlife safari tours",
    "tailor-made Sri Lanka tours",
    "best places to visit in Sri Lanka",
    "luxury Sri Lanka travel",
    "Sri Lanka chauffeur guide",
    "3C Ceylon Tours"
  ],
  authors: [{ name: "3C Ceylon Tours (Pvt) Ltd", url: "https://3cceylontours.com" }],
  creator: "3C Ceylon Tours",
  publisher: "3C Ceylon Tours (Pvt) Ltd",
  alternates: {
    canonical: "https://3cceylontours.com",
  },
  openGraph: {
    title: "3C CEYLON TOURS | Luxury Private Tours & Holidays in Sri Lanka",
    description: "Extraordinary journeys. Timeless memories. Beautifully crafted private luxury holidays in Sri Lanka.",
    url: "https://3cceylontours.com",
    siteName: "3C Ceylon Tours",
    images: [
      {
        url: "/images/welcome-srilanka.jpg",
        width: 1200,
        height: 630,
        alt: "3C Ceylon Tours - Discover the Soul of Sri Lanka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3C CEYLON TOURS | Luxury Sri Lanka Tours & Safaris",
    description: "Discover the soul of Sri Lanka with bespoke tailor-made luxury journeys, private wildlife safaris, and 5-star chauffeur guides.",
    images: ["/images/welcome-srilanka.jpg"],
    creator: "@3cceylontours",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const travelAgencyJsonLd = {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "TouristInformationCenter"],
    "name": COMPANY_INFO.name,
    "legalName": COMPANY_INFO.legalName,
    "url": "https://3cceylontours.com",
    "logo": "https://3cceylontours.com/images/logo.png",
    "image": "https://3cceylontours.com/images/welcome-srilanka.jpg",
    "description": COMPANY_INFO.description,
    "slogan": COMPANY_INFO.slogan,
    "telephone": [COMPANY_INFO.phone, COMPANY_INFO.phoneSecondary],
    "email": COMPANY_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_INFO.address.street,
      "addressLocality": COMPANY_INFO.address.city,
      "addressRegion": COMPANY_INFO.address.province,
      "postalCode": COMPANY_INFO.address.postalCode,
      "addressCountry": "LK"
    }
  };

  return (
    <html lang="en" className={`${jakarta.variable} ${manrope.variable} font-sans`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero/triumphant-overlook-above-misty-valley.png"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencyJsonLd) }}
        />
      </head>
      <body className="font-sans flex flex-col min-h-screen bg-[#FAF8F2] text-[#172334] antialiased selection:bg-[#18F000] selection:text-black">
        <PageLoader />
        <LanguageProvider>
          <Header />
          <main className="flex-grow relative z-10">{children}</main>
          <ReadyToPlanSection />
          <Footer />
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
