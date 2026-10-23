export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  slogan: string;
  phone: string;
  phoneSecondary: string;
  whatsapp: string;
  whatsappFormatted: string;
  whatsappSecondary: string;
  whatsappSecondaryFormatted: string;
  whatsappDefaultMessage: string;
  email: string;
  inquiryEmail: string;
  address: {
    street: string;
    city: string;
    province: string;
    country: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  officeHours: string;
  socials: {
    facebook: string;
    instagram: string;
    tripadvisor: string;
    youtube: string;
    linkedin: string;
  };
  certifications: string[];
  features: {
    title: string;
    desc: string;
    icon: string;
  }[];
}

export const COMPANY_INFO: CompanyInfo = {
  name: "3C CEYLON TOURS",
  legalName: "3C Ceylon Tours (Pvt) Ltd",
  tagline: "Discover the Soul of Sri Lanka",
  slogan: "Extraordinary journeys. Timeless memories. Beautifully crafted by 3C Ceylon Tours.",
  description: "Premier destination management company and bespoke luxury tour operator in Sri Lanka. We craft private, authentic, and unforgettable island journeys with 24/7 dedicated concierge service.",
  phone: "+94 77 954 1203",
  phoneSecondary: "+94 76 914 1852",
  whatsapp: "94779541203",
  whatsappFormatted: "+94 77 954 1203",
  whatsappSecondary: "94769141852",
  whatsappSecondaryFormatted: "+94 76 914 1852",
  whatsappDefaultMessage: "Hello 3C Ceylon Tours! I am interested in planning a customized Sri Lanka holiday. Please share more details.",
  email: "3cceylon.tours@gmail.com",
  inquiryEmail: "3cceylon.tours@gmail.com",
  address: {
    street: "Level 12, West Tower, World Trade Center",
    city: "Colombo 01",
    province: "Western Province",
    country: "Sri Lanka",
    postalCode: "00100",
    coordinates: {
      lat: 6.9338,
      lng: 79.8433
    }
  },
  officeHours: "24/7 Dedicated Traveler Concierge (Colombo Standard Time GMT+5:30)",
  socials: {
    facebook: "https://facebook.com/3cceylontours",
    instagram: "https://instagram.com/3cceylontours",
    tripadvisor: "https://tripadvisor.com/profile/3cceylontours",
    youtube: "https://youtube.com/@3cceylontours",
    linkedin: "https://linkedin.com/company/3cceylontours"
  },
  certifications: [
    "Sri Lanka Tourism Development Authority (SLTDA) Approved Operator",
    "Sri Lanka Association of Inbound Tour Operators (SLAITO) Member",
    "Certified Safe & Secure Tourism Protocols",
    "Ethical Wildlife & Environmental Protection Pledge"
  ],
  features: [
    {
      title: "100% Tailor-Made Journeys",
      desc: "Every itinerary is individually curated to match your travel pace, interests, luxury standards, and desires.",
      icon: "Compass"
    },
    {
      title: "Chauffeur-Guides of Distinction",
      desc: "English-speaking, government-licensed tourist chauffeurs with deep cultural, botanical, and wildlife expertise.",
      icon: "ShieldCheck"
    },
    {
      title: "Luxury & Eco-Friendly Fleet",
      desc: "Premium air-conditioned Mercedes, Toyota Prado SUVs, luxury vans, and hybrid vehicles with on-board Wi-Fi and chilled amenities.",
      icon: "Car"
    },
    {
      title: "24/7 Island-Wide Concierge",
      desc: "Direct round-the-clock WhatsApp support from your personal journey specialist throughout your entire stay in Sri Lanka.",
      icon: "Clock"
    }
  ]
};

export const getWhatsAppLink = (message?: string, packageName?: string, useSecondary = false): string => {
  let text = message || COMPANY_INFO.whatsappDefaultMessage;
  if (packageName) {
    text = `Hello 3C Ceylon Tours! I am interested in the "${packageName}" tour package. Could you please send me a customized itinerary, pricing, and availability?`;
  }
  const number = useSecondary ? COMPANY_INFO.whatsappSecondary : COMPANY_INFO.whatsapp;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};

export const getSecondaryWhatsAppLink = (message?: string, packageName?: string): string => {
  return getWhatsAppLink(message, packageName, true);
};
