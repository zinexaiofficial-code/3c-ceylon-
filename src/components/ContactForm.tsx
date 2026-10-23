"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppLink } from "@/data/company";
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  MessageCircle, 
  Calendar, 
  User, 
  Mail, 
  Globe2, 
  Phone,
  Compass
} from "lucide-react";

interface ContactFormProps {
  initialPackageTitle?: string;
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialPackageTitle, onSuccess }) => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    whatsapp: "",
    dates: "",
    travelers: "2",
    style: "Boutique Luxury",
    accommodation: "5-Star Luxury Resorts",
    message: initialPackageTitle 
      ? `Hello 3C Ceylon Tours, I am interested in booking or customizing the "${initialPackageTitle}" package.` 
      : "",
    websiteHoneypot: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.websiteHoneypot) {
      setStatus("success");
      return;
    }

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.whatsapp.trim()) {
      setStatus("error");
      setErrorMessage(t.form.errorMessage);
      return;
    }

    setStatus("submitting");

    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      setStatus("success");
      onSuccess?.();
    } catch (err) {
      setStatus("error");
      setErrorMessage("An unexpected network error occurred. Please reach out via WhatsApp directly.");
    }
  };

  const getCustomWhatsAppText = () => {
    return `Hello 3C Ceylon Tours!\nMy name is ${formData.fullName || "a traveler"}.\nTravel dates: ${formData.dates || "Flexible"}\nTravelers: ${formData.travelers}\nStyle: ${formData.style}\nNotes: ${formData.message || "I'd like to plan a bespoke Sri Lanka journey."}`;
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.06)] border border-[#18E600]/40 text-center space-y-6 animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-[#18E600]/15 text-[#0E6838] border border-[#18E600]/40 flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle className="w-8 h-8 text-[#0E6838]" />
        </div>
        <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#172334] tracking-tight">
          Inquiry Successfully Received
        </h3>
        <p className="text-sm sm:text-base text-[#526173] max-w-lg mx-auto leading-relaxed font-normal">
          {t.form.successMessage}
        </p>

        <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppLink(getCustomWhatsAppText())}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#18E600] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-[0_4px_20px_rgba(24,230,0,0.35)] hover:bg-[#15D600] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Fast-Track on WhatsApp</span>
          </a>

          <button
            onClick={() => {
              setStatus("idle");
              setFormData({
                fullName: "",
                email: "",
                country: "",
                whatsapp: "",
                dates: "",
                travelers: "2",
                style: "Boutique Luxury",
                accommodation: "5-Star Luxury Resorts",
                message: "",
                websiteHoneypot: ""
              });
            }}
            className="text-xs text-[#0E6838] hover:underline font-bold"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white rounded-3xl p-6 sm:p-8 md:p-9 shadow-[0_15px_45px_rgba(0,0,0,0.06)] border border-gray-200/90 space-y-6 text-[#172334]"
      noValidate
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteHoneypot">Leave this blank</label>
        <input 
          type="text" 
          id="websiteHoneypot" 
          name="websiteHoneypot" 
          value={formData.websiteHoneypot} 
          onChange={handleChange} 
          tabIndex={-1} 
          autoComplete="off" 
        />
      </div>

      {status === "error" && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start space-x-2.5 rtl:space-x-reverse animate-fade-in">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#172334] mb-2">
            {t.form.fullName} <span className="text-[#0E6838] font-black">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#0E6838] absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="e.g. Lord & Lady Hamilton"
              className="w-full pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-3.5 rounded-2xl bg-[#F8FAF7] border border-gray-200 text-[#172334] placeholder-gray-400 text-sm focus:outline-none focus:bg-white focus:border-[#18E600] focus:ring-2 focus:ring-[#18E600]/20 transition-all font-medium"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#172334] mb-2">
            {t.form.email} <span className="text-[#0E6838] font-black">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-[#0E6838] absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="e.g. travel@example.com"
              className="w-full pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-3.5 rounded-2xl bg-[#F8FAF7] border border-gray-200 text-[#172334] placeholder-gray-400 text-sm focus:outline-none focus:bg-white focus:border-[#18E600] focus:ring-2 focus:ring-[#18E600]/20 transition-all font-medium"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Country and WhatsApp Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="country" className="block text-xs font-bold uppercase tracking-wider text-[#172334] mb-2">
            {t.form.country}
          </label>
          <div className="relative">
            <Globe2 className="w-4 h-4 text-[#0E6838] absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="e.g. United Kingdom, Germany, UAE"
              className="w-full pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-3.5 rounded-2xl bg-[#F8FAF7] border border-gray-200 text-[#172334] placeholder-gray-400 text-sm focus:outline-none focus:bg-white focus:border-[#18E600] focus:ring-2 focus:ring-[#18E600]/20 transition-all font-medium"
            />
          </div>
        </div>

        <div>
          <label htmlFor="whatsapp" className="block text-xs font-bold uppercase tracking-wider text-[#172334] mb-2">
            {t.form.whatsappNumber} <span className="text-[#0E6838] font-black">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-[#0E6838] absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              placeholder="e.g. +44 7911 123456"
              className="w-full pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-3.5 rounded-2xl bg-[#F8FAF7] border border-gray-200 text-[#172334] placeholder-gray-400 text-sm focus:outline-none focus:bg-white focus:border-[#18E600] focus:ring-2 focus:ring-[#18E600]/20 transition-all font-medium"
            />
          </div>
        </div>
      </div>

      {/* Row 3: Travel Dates, Guests, Travel Style */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="dates" className="block text-xs font-bold uppercase tracking-wider text-[#172334] mb-2">
            {t.form.preferredDates}
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-[#0E6838] absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              id="dates"
              name="dates"
              value={formData.dates}
              onChange={handleChange}
              placeholder="e.g. Oct 2026 / 14 Days"
              className="w-full pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-3.5 rounded-2xl bg-[#F8FAF7] border border-gray-200 text-[#172334] placeholder-gray-400 text-sm focus:outline-none focus:bg-white focus:border-[#18E600] focus:ring-2 focus:ring-[#18E600]/20 transition-all font-medium"
            />
          </div>
        </div>

        <div>
          <label htmlFor="travelers" className="block text-xs font-bold uppercase tracking-wider text-[#172334] mb-2">
            {t.form.numberOfGuests}
          </label>
          <select
            id="travelers"
            name="travelers"
            value={formData.travelers}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-2xl bg-[#F8FAF7] border border-gray-200 text-[#172334] text-sm focus:outline-none focus:bg-white focus:border-[#18E600] focus:ring-2 focus:ring-[#18E600]/20 transition-all font-medium cursor-pointer"
          >
            <option value="1">1 Traveler (Solo)</option>
            <option value="2">2 Travelers (Couple)</option>
            <option value="3-4">3 - 4 Travelers (Family)</option>
            <option value="5-8">5 - 8 Travelers (Group)</option>
            <option value="9+">9+ Travelers (Private Party)</option>
          </select>
        </div>

        <div>
          <label htmlFor="style" className="block text-xs font-bold uppercase tracking-wider text-[#172334] mb-2">
            {t.form.style}
          </label>
          <select
            id="style"
            name="style"
            value={formData.style}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-2xl bg-[#F8FAF7] border border-gray-200 text-[#172334] text-sm focus:outline-none focus:bg-white focus:border-[#18E600] focus:ring-2 focus:ring-[#18E600]/20 transition-all font-medium cursor-pointer"
          >
            <option value="Ultra-Luxury">Ultra-Luxury & VIP</option>
            <option value="Boutique Luxury">Boutique & Heritage</option>
            <option value="Wildlife Safari">Wildlife Safari</option>
            <option value="Honeymoon Romance">Romantic Honeymoon</option>
            <option value="Family Comfort">Family Adventure</option>
          </select>
        </div>
      </div>

      {/* Row 4: Preferred Accommodation Preference (Replaces Budget to eliminate price mentions) */}
      <div>
        <label htmlFor="accommodation" className="block text-xs font-bold uppercase tracking-wider text-[#172334] mb-2">
          Accommodation Preference
        </label>
        <div className="relative">
          <Compass className="w-4 h-4 text-[#0E6838] absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            id="accommodation"
            name="accommodation"
            value={formData.accommodation}
            onChange={handleChange}
            className="w-full pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-3.5 rounded-2xl bg-[#F8FAF7] border border-gray-200 text-[#172334] text-sm focus:outline-none focus:bg-white focus:border-[#18E600] focus:ring-2 focus:ring-[#18E600]/20 transition-all font-medium cursor-pointer"
          >
            <option value="5-Star Luxury Resorts">5-Star Luxury Hotels & Resorts</option>
            <option value="Boutique Heritage Villas">Boutique Heritage & Tea Bungalows</option>
            <option value="Eco Safari Glamping">Luxury Eco-Safari Glamping Lodges</option>
            <option value="Beachfront Ocean Sanctuary">Beachfront Luxury Villas</option>
            <option value="Custom Mixed Selection">Custom Combination (Handpicked by Specialist)</option>
          </select>
        </div>
      </div>

      {/* Message Area */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#172334] mb-2">
          {t.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your dream trip, preferred places (Sigiriya, Tea Trails, Yala, beaches), dietary needs, or special milestones..."
          className="w-full p-4 rounded-2xl bg-[#F8FAF7] border border-gray-200 text-[#172334] placeholder-gray-400 text-sm focus:outline-none focus:bg-white focus:border-[#18E600] focus:ring-2 focus:ring-[#18E600]/20 transition-all resize-none font-medium leading-relaxed"
        />
      </div>

      {/* Submit Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:flex-1 py-4 px-8 rounded-full bg-[#18E600] hover:bg-[#15D600] text-black font-extrabold text-xs tracking-wider uppercase shadow-[0_4px_20px_rgba(24,230,0,0.35)] hover:shadow-[0_4px_25px_rgba(24,230,0,0.5)] transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse disabled:opacity-75 cursor-pointer hover:scale-102 active:scale-95"
        >
          <Send className="w-4 h-4 text-black" />
          <span>{status === "submitting" ? t.form.submitting : t.form.submit}</span>
        </button>

        <a
          href={getWhatsAppLink(getCustomWhatsAppText())}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto py-4 px-6 rounded-full bg-[#172334] hover:bg-[#123B2A] text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 rtl:space-x-reverse transition-colors shadow-sm text-center"
        >
          <MessageCircle className="w-4 h-4 text-[#18E600]" />
          <span>Instant WhatsApp Chat</span>
        </a>
      </div>
    </form>
  );
};
