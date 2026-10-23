"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type SupportedLocale = "en" | "de" | "fr" | "es" | "it" | "ru" | "zh" | "ja" | "ar";

export interface LocaleInfo {
  code: SupportedLocale;
  name: string;
  nativeName: string;
  dir: "ltr" | "rtl";
}

export const SUPPORTED_LOCALES: LocaleInfo[] = [
  { code: "en", name: "English", nativeName: "English", dir: "ltr" },
  { code: "de", name: "German", nativeName: "Deutsch", dir: "ltr" },
  { code: "fr", name: "French", nativeName: "Français", dir: "ltr" },
  { code: "es", name: "Spanish", nativeName: "Español", dir: "ltr" },
  { code: "it", name: "Italian", nativeName: "Italiano", dir: "ltr" },
  { code: "ru", name: "Russian", nativeName: "Русский", dir: "ltr" },
  { code: "zh", name: "Chinese (Simplified)", nativeName: "简体中文", dir: "ltr" },
  { code: "ja", name: "Japanese", nativeName: "日本語", dir: "ltr" },
  { code: "ar", name: "Arabic", nativeName: "العربية", dir: "rtl" }
];

export interface Translations {
  nav: {
    home: string;
    packages: string;
    destinations: string;
    experiences: string;
    about: string;
    blog: string;
    contact: string;
    planTrip: string;
  };
  hero: {
    tagline: string;
    headline: string;
    subheading: string;
    exploreBtn: string;
    planBtn: string;
    scrollDown: string;
    curatedJourneys: string;
    destBadge: string;
  };
  common: {
    viewDetails: string;
    requestQuote: string;
    whatsappInquiry: string;
    bookTour: string;
    days: string;
    nights: string;
    startingFrom: string;
    perPerson: string;
    allTours: string;
    allDestinations: string;
    readMore: string;
    quickTripPlanner: string;
    travelDates: string;
    travelers: string;
    travelStyle: string;
    findTours: string;
    expertGuidance: string;
    bespokeLuxury: string;
    verifiedReviews: string;
  };
  sections: {
    whySriLankaTitle: string;
    whySriLankaSubtitle: string;
    featuredPackagesTitle: string;
    featuredPackagesSubtitle: string;
    destinationsTitle: string;
    destinationsSubtitle: string;
    experiencesTitle: string;
    experiencesSubtitle: string;
    whyUsTitle: string;
    whyUsSubtitle: string;
    testimonialsTitle: string;
    testimonialsSubtitle: string;
    journalTitle: string;
    journalSubtitle: string;
    ctaBannerTitle: string;
    ctaBannerSubtitle: string;
    ctaBannerBtn: string;
  };
  form: {
    fullName: string;
    email: string;
    country: string;
    whatsappNumber: string;
    preferredDates: string;
    numberOfGuests: string;
    style: string;
    budget: string;
    message: string;
    submit: string;
    submitting: string;
    successMessage: string;
    errorMessage: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    destinations: string;
    contactUs: string;
    certifications: string;
    rights: string;
    privacy: string;
    terms: string;
  };
}

const DICTIONARIES: Record<SupportedLocale, Translations> = {
  en: {
    nav: {
      home: "Home",
      packages: "Tour Packages",
      destinations: "Destinations",
      experiences: "Travel Experiences",
      about: "About Us",
      blog: "Travel Guide",
      contact: "Contact & Inquiries",
      planTrip: "Plan Your Trip"
    },
    hero: {
      tagline: "Premier Sri Lanka Destination Specialists",
      headline: "Discover the Soul of Sri Lanka",
      subheading: "Extraordinary journeys. Timeless memories. Beautifully crafted private luxury holidays by 3C Ceylon Tours.",
      exploreBtn: "Explore Tour Packages",
      planBtn: "Plan Your Bespoke Trip",
      scrollDown: "Scroll to Discover",
      curatedJourneys: "100% Tailor-Made Private Journeys",
      destBadge: "Sigiriya Rock Citadel & Wild Leopards"
    },
    common: {
      viewDetails: "View Details",
      requestQuote: "Request Quote",
      whatsappInquiry: "WhatsApp Inquiry",
      bookTour: "Book This Tour",
      days: "Days",
      nights: "Nights",
      startingFrom: "Starting from",
      perPerson: "per person",
      allTours: "View All Packages",
      allDestinations: "View All Destinations",
      readMore: "Read Full Article",
      quickTripPlanner: "Quick Trip Finder",
      travelDates: "When would you like to travel?",
      travelers: "How many travelers?",
      travelStyle: "Select Travel Style",
      findTours: "Find My Ideal Tour",
      expertGuidance: "24/7 Island Concierge",
      bespokeLuxury: "Hand-Crafted Itineraries",
      verifiedReviews: "Verified 5-Star Reviews"
    },
    sections: {
      whySriLankaTitle: "Why Visit Sri Lanka",
      whySriLankaSubtitle: "An ancient island of emerald tea hills, untamed wildlife, golden coastlines, and 2,500 years of living heritage.",
      featuredPackagesTitle: "Signature Tour Packages",
      featuredPackagesSubtitle: "Hand-crafted private itineraries designed to reveal the most breathtaking corners of the island.",
      destinationsTitle: "Iconic Sri Lankan Destinations",
      destinationsSubtitle: "From the dramatic rock citadel of Sigiriya to the leopard-ruled scrublands of Yala and the mist of Ella.",
      experiencesTitle: "Curated Travel Experiences",
      experiencesSubtitle: "Tailor your journey around the passions that move you most.",
      whyUsTitle: "The 3C Standard: Care, Comfort, Craftsmanship",
      whyUsSubtitle: "Why discerning international travelers choose 3C Ceylon Tours for their bespoke Sri Lankan escape.",
      testimonialsTitle: "Traveler Stories & Praise",
      testimonialsSubtitle: "Unfiltered feedback from international travelers who explored Sri Lanka with us.",
      journalTitle: "Travel Inspiration & Guides",
      journalSubtitle: "Insider tips, seasonal weather advice, and packing guides written by our local destination architects.",
      ctaBannerTitle: "Ready to Create Your Dream Sri Lanka Vacation?",
      ctaBannerSubtitle: "Speak directly with our senior destination architects via WhatsApp or submit a bespoke inquiry today.",
      ctaBannerBtn: "Chat on WhatsApp Now"
    },
    form: {
      fullName: "Full Name",
      email: "Email Address",
      country: "Country of Residence",
      whatsappNumber: "WhatsApp / Mobile Number",
      preferredDates: "Preferred Travel Month or Dates",
      numberOfGuests: "Number of Travelers",
      style: "Preferred Travel Style",
      budget: "Estimated Budget per Person (USD)",
      message: "Tell us about your dream trip (interests, preferred pace, special requirements)",
      submit: "Send My Trip Inquiry",
      submitting: "Processing Inquiry...",
      successMessage: "Thank you! Your inquiry has been received. Our senior travel designer will contact you within 24 hours.",
      errorMessage: "Please fill out all required fields marked with an asterisk."
    },
    footer: {
      tagline: "Extraordinary journeys. Timeless memories. Beautifully crafted private holidays in Sri Lanka.",
      quickLinks: "Quick Navigation",
      destinations: "Premier Destinations",
      contactUs: "Direct Inquiries",
      certifications: "Official Accreditations & Safety",
      rights: "All rights reserved. 3C Ceylon Tours (Pvt) Ltd.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  de: {
    nav: {
      home: "Startseite",
      packages: "Reisepakete",
      destinations: "Reiseziele",
      experiences: "Erlebnisse",
      about: "Über Uns",
      blog: "Reiseführer",
      contact: "Kontakt & Anfragen",
      planTrip: "Reise Planen"
    },
    hero: {
      tagline: "Erstklassige Sri Lanka Reisespezialisten",
      headline: "Entdecken Sie die Seele Sri Lankas",
      subheading: "Außergewöhnliche Reisen. Zeitlose Erinnerungen. Wunderschön gestalteter Luxusurlaub mit 3C Ceylon Tours.",
      exploreBtn: "Reisepakete Entdecken",
      planBtn: "Individuelle Reise Planen",
      scrollDown: "Nach unten scrollen",
      curatedJourneys: "100% Maßgeschneiderte Privatreisen",
      destBadge: "Sigiriya Felsenfestung & Wilde Leoparden"
    },
    common: {
      viewDetails: "Details Anzeigen",
      requestQuote: "Angebot Anfordern",
      whatsappInquiry: "WhatsApp Anfrage",
      bookTour: "Reise Buchen",
      days: "Tage",
      nights: "Nächte",
      startingFrom: "Ab",
      perPerson: "pro Person",
      allTours: "Alle Reisepakete",
      allDestinations: "Alle Reiseziele",
      readMore: "Vollständigen Artikel lesen",
      quickTripPlanner: "Schnellsuche",
      travelDates: "Wann möchten Sie reisen?",
      travelers: "Wie viele Reisende?",
      travelStyle: "Reisestil Wählen",
      findTours: "Passende Reise Finden",
      expertGuidance: "24/7 Insel-Concierge",
      bespokeLuxury: "Handgefertigte Routen",
      verifiedReviews: "Verifizierte 5-Sterne Bewertungen"
    },
    sections: {
      whySriLankaTitle: "Warum Sri Lanka Besuchen",
      whySriLankaSubtitle: "Eine antike Insel aus smaragdgrünen Teehügeln, unberührter Wildnis, goldenen Küsten und 2.500 Jahren Kultur.",
      featuredPackagesTitle: "Exklusive Reisepakete",
      featuredPackagesSubtitle: "Handverlesene private Rundreisen zu den faszinierendsten Orten der Insel.",
      destinationsTitle: "Ikonische Reiseziele",
      destinationsSubtitle: "Von der spektakulären Felsenfestung Sigiriya bis zur wilden Tierwelt in Yala.",
      experiencesTitle: "Kuratorische Reiseerlebnisse",
      experiencesSubtitle: "Gestalten Sie Ihre Reise nach Ihren ganz persönlichen Vorlieben.",
      whyUsTitle: "Der 3C Standard: Sorgfalt, Komfort, Handwerkskunst",
      whyUsSubtitle: "Warum anspruchsvolle Reisende 3C Ceylon Tours wählen.",
      testimonialsTitle: "Reiseberichte & Kundenstimmen",
      testimonialsSubtitle: "Echte Erfahrungen unserer internationalen Gäste.",
      journalTitle: "Reiseinspiration & Einblicke",
      journalSubtitle: "Praktische Tipps und Empfehlungen unserer lokalen Reisedesigner.",
      ctaBannerTitle: "Bereit für Ihre Sri Lanka Traumreise?",
      ctaBannerSubtitle: "Sprechen Sie direkt mit unseren Spezialisten per WhatsApp oder fordern Sie Ihr Angebot an.",
      ctaBannerBtn: "Jetzt auf WhatsApp Schreiben"
    },
    form: {
      fullName: "Vollständiger Name",
      email: "E-Mail-Adresse",
      country: "Wohnsitzland",
      whatsappNumber: "WhatsApp- / Telefonnummer",
      preferredDates: "Bevorzugter Reisezeitraum",
      numberOfGuests: "Anzahl der Reisenden",
      style: "Bevorzugter Reisestil",
      budget: "Geschätztes Budget pro Person (USD)",
      message: "Erzählen Sie uns von Ihrer Wunschreise (Interessen, Tempo, Wünsche)",
      submit: "Reiseanfrage Absenden",
      submitting: "Wird gesendet...",
      successMessage: "Vielen Dank! Ihre Anfrage ist eingegangen. Wir melden uns innerhalb von 24 Stunden.",
      errorMessage: "Bitte füllen Sie alle erforderlichen Felder aus."
    },
    footer: {
      tagline: "Außergewöhnliche Reisen. Zeitlose Erinnerungen. Maßgeschneiderte Privatreisen in Sri Lanka.",
      quickLinks: "Navigation",
      destinations: "Reiseziele",
      contactUs: "Direkter Kontakt",
      certifications: "Offizielle Akkreditierungen",
      rights: "Alle Rechte vorbehalten. 3C Ceylon Tours (Pvt) Ltd.",
      privacy: "Datenschutz",
      terms: "AGB"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      packages: "Circuits & Forfaits",
      destinations: "Destinations",
      experiences: "Expériences",
      about: "À Propos",
      blog: "Guide de Voyage",
      contact: "Contact & Devis",
      planTrip: "Créer Mon Voyage"
    },
    hero: {
      tagline: "Spécialistes du Voyage d'Exception au Sri Lanka",
      headline: "Découvrez l'Âme du Sri Lanka",
      subheading: "Voyages extraordinaires. Souvenirs intemporels. Séjours privés de luxe conçus avec passion par 3C Ceylon Tours.",
      exploreBtn: "Découvrir les Circuits",
      planBtn: "Créer Votre Voyage Privé",
      scrollDown: "Défiler pour Explorer",
      curatedJourneys: "Circuits 100% Sur Mesure",
      destBadge: "Citadelle de Sigiriya & Léopards Sauvages"
    },
    common: {
      viewDetails: "Voir Détails",
      requestQuote: "Demander un Devis",
      whatsappInquiry: "Contact WhatsApp",
      bookTour: "Réserver ce Circuit",
      days: "Jours",
      nights: "Nuits",
      startingFrom: "À partir de",
      perPerson: "par personne",
      allTours: "Tous les Circuits",
      allDestinations: "Toutes les Destinations",
      readMore: "Lire l'Article",
      quickTripPlanner: "Recherche Rapide",
      travelDates: "Quand souhaitez-vous voyager ?",
      travelers: "Combien de voyageurs ?",
      travelStyle: "Style de Voyage",
      findTours: "Trouver Mon Circuit",
      expertGuidance: "Conciergerie 24/7",
      bespokeLuxury: "Itinéraires d'Exception",
      verifiedReviews: "Avis 5 Étoiles Vérifiés"
    },
    sections: {
      whySriLankaTitle: "Pourquoi Visiter le Sri Lanka",
      whySriLankaSubtitle: "Une île envoûtante aux collines de thé émeraude, faune sauvage et 2 500 ans d'histoire vivante.",
      featuredPackagesTitle: "Nos Circuits Signatures",
      featuredPackagesSubtitle: "Des itinéraires privés conçus pour révéler les plus beaux secrets de l'île.",
      destinationsTitle: "Destinations Emblématiques",
      destinationsSubtitle: "De la forteresse dans les nuages de Sigiriya aux savanes de Yala et plages de Mirissa.",
      experiencesTitle: "Expériences Sur Mesure",
      experiencesSubtitle: "Vivez le voyage qui correspond parfaitement à vos aspirations.",
      whyUsTitle: "Le Standard 3C: Attention, Confort, Savoir-faire",
      whyUsSubtitle: "L'expertise d'une agence réceptive locale dédiée au luxe et à l'authenticité.",
      testimonialsTitle: "Témoignages de Voyageurs",
      testimonialsSubtitle: "Les récits authentiques de nos voyageurs internationaux.",
      journalTitle: "Inspiration & Récits de Voyage",
      journalSubtitle: "Conseils d'experts et guides saisonniers rédigés par nos spécialistes locaux.",
      ctaBannerTitle: "Prêt à Imaginer Votre Voyage au Sri Lanka ?",
      ctaBannerSubtitle: "Échangez directement avec nos concepteurs via WhatsApp ou envoyez-nous votre projet.",
      ctaBannerBtn: "Discuter sur WhatsApp"
    },
    form: {
      fullName: "Nom Complet",
      email: "Adresse E-mail",
      country: "Pays de Résidence",
      whatsappNumber: "Numéro WhatsApp / Téléphone",
      preferredDates: "Dates ou Mois de Voyage Préférés",
      numberOfGuests: "Nombre de Voyageurs",
      style: "Style de Voyage Préféré",
      budget: "Budget Estimé par Personne (USD)",
      message: "Décrivez-nous votre projet de voyage (intérêts, rythme, exigences particulières)",
      submit: "Envoyer ma Demande",
      submitting: "Envoi en cours...",
      successMessage: "Merci ! Votre demande a bien été reçue. Notre spécialiste vous répondra sous 24h.",
      errorMessage: "Veuillez remplir tous les champs obligatoires."
    },
    footer: {
      tagline: "Voyages extraordinaires. Souvenirs intemporels. Circuits privés haut de gamme au Sri Lanka.",
      quickLinks: "Navigation",
      destinations: "Destinations",
      contactUs: "Contact Direct",
      certifications: "Agréments Officiels",
      rights: "Tous droits réservés. 3C Ceylon Tours (Pvt) Ltd.",
      privacy: "Confidentialité",
      terms: "Conditions Générales"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      packages: "Paquetes Turísticos",
      destinations: "Destinos",
      experiences: "Experiencias",
      about: "Nosotros",
      blog: "Guía de Viaje",
      contact: "Contacto y Cotización",
      planTrip: "Planear Mi Viaje"
    },
    hero: {
      tagline: "Especialistas en Viajes Exclusivos en Sri Lanka",
      headline: "Descubra el Alma de Sri Lanka",
      subheading: "Viajes extraordinarios. Recuerdos inolvidables. Vacaciones privadas de lujo diseñadas a medida por 3C Ceylon Tours.",
      exploreBtn: "Explorar Paquetes",
      planBtn: "Planear Viaje a Medida",
      scrollDown: "Desplácese para Descubrir",
      curatedJourneys: "Viajes Privados 100% Personalizados",
      destBadge: "Fortaleza de Sigiriya y Leopardos Salvajes"
    },
    common: {
      viewDetails: "Ver Detalles",
      requestQuote: "Solicitar Cotización",
      whatsappInquiry: "Consulta por WhatsApp",
      bookTour: "Reservar este Tour",
      days: "Días",
      nights: "Noches",
      startingFrom: "Desde",
      perPerson: "por persona",
      allTours: "Ver Todos los Paquetes",
      allDestinations: "Ver Todos los Destinos",
      readMore: "Leer Artículo Completo",
      quickTripPlanner: "Búsqueda Rápida",
      travelDates: "¿Cuándo desea viajar?",
      travelers: "¿Cuántos viajeros?",
      travelStyle: "Estilo de Viaje",
      findTours: "Buscar Tour Ideal",
      expertGuidance: "Conserje 24/7",
      bespokeLuxury: "Itinerarios de Lujo",
      verifiedReviews: "Opiniones 5 Estrellas"
    },
    sections: {
      whySriLankaTitle: "Por Qué Visitar Sri Lanka",
      whySriLankaSubtitle: "Una isla mágica de colinas de té, fauna salvaje, playas doradas y 2.500 años de patrimonio vivo.",
      featuredPackagesTitle: "Paquetes de Viaje Exclusivos",
      featuredPackagesSubtitle: "Rutas privadas diseñadas para mostrar los rincones más fascinantes de la isla.",
      destinationsTitle: "Destinos Emblemáticos",
      destinationsSubtitle: "Desde la fortaleza celestial de Sigiriya hasta el reino de leopardos de Yala.",
      experiencesTitle: "Experiencias de Viaje",
      experiencesSubtitle: "Personalice su itinerario según sus mayores pasiones.",
      whyUsTitle: "El Estándar 3C: Cuidado, Confort, Calidad",
      whyUsSubtitle: "La elección predilecta de viajeros internacionales exigentes.",
      testimonialsTitle: "Testimonios de Viajeros",
      testimonialsSubtitle: "Experiencias reales de quienes descubrieron Sri Lanka con nosotros.",
      journalTitle: "Guía e Inspiración de Viaje",
      journalSubtitle: "Consejos prácticos y recomendaciones de nuestros expertos locales.",
      ctaBannerTitle: "¿Listo para Planear sus Vacaciones Soñadas?",
      ctaBannerSubtitle: "Escríbanos directamente por WhatsApp o solicite una propuesta personalizada.",
      ctaBannerBtn: "Chatear en WhatsApp"
    },
    form: {
      fullName: "Nombre Completo",
      email: "Correo Electrónico",
      country: "País de Residencia",
      whatsappNumber: "Número de WhatsApp / Teléfono",
      preferredDates: "Fechas o Mes Preferido",
      numberOfGuests: "Número de Viajeros",
      style: "Estilo de Viaje Preferido",
      budget: "Presupuesto Estimado por Persona (USD)",
      message: "Cuéntenos sobre el viaje de sus sueños (intereses, ritmo, requerimientos)",
      submit: "Enviar Consulta",
      submitting: "Enviando...",
      successMessage: "¡Gracias! Hemos recibido su consulta. Nos pondremos en contacto en menos de 24 horas.",
      errorMessage: "Por favor complete todos los campos requeridos."
    },
    footer: {
      tagline: "Viajes extraordinarios. Recuerdos inolvidables. Vacaciones privadas a medida en Sri Lanka.",
      quickLinks: "Navegación",
      destinations: "Destinos",
      contactUs: "Contacto Directo",
      certifications: "Acreditaciones Oficiales",
      rights: "Todos los derechos reservados. 3C Ceylon Tours (Pvt) Ltd.",
      privacy: "Privacidad",
      terms: "Términos y Condiciones"
    }
  },
  it: {
    nav: {
      home: "Home",
      packages: "Pacchetti Tour",
      destinations: "Destinazioni",
      experiences: "Esperienze",
      about: "Chi Siamo",
      blog: "Guida di Viaggio",
      contact: "Contatti e Preventivo",
      planTrip: "Crea il Tuo Viaggio"
    },
    hero: {
      tagline: "Specialisti di Viaggi Esclusivi in Sri Lanka",
      headline: "Scopri l'Anima dello Sri Lanka",
      subheading: "Viaggi straordinari. Ricordi senza tempo. Vacanze private di lusso curate nei minimi dettagli da 3C Ceylon Tours.",
      exploreBtn: "Esplora i Tour",
      planBtn: "Pianifica Viaggio su Misura",
      scrollDown: "Scorri per Scoprire",
      curatedJourneys: "Viaggi Privati 100% su Misura",
      destBadge: "Fortezza di Sigiriya e Leopardi Selvaggi"
    },
    common: {
      viewDetails: "Vedi Dettagli",
      requestQuote: "Richiedi Preventivo",
      whatsappInquiry: "Contatto WhatsApp",
      bookTour: "Prenota Questo Tour",
      days: "Giorni",
      nights: "Notti",
      startingFrom: "A partire da",
      perPerson: "a persona",
      allTours: "Tutti i Pacchetti",
      allDestinations: "Tutte le Destinazioni",
      readMore: "Leggi Articolo Completo",
      quickTripPlanner: "Ricerca Rapida",
      travelDates: "Quando vorresti viaggiare?",
      travelers: "Quanti viaggiatori?",
      travelStyle: "Stile di Viaggio",
      findTours: "Trova il Tuo Tour",
      expertGuidance: "Concierge 24/7",
      bespokeLuxury: "Itinerari di Lusso",
      verifiedReviews: "Recensioni a 5 Stelle"
    },
    sections: {
      whySriLankaTitle: "Perché Visitare lo Sri Lanka",
      whySriLankaSubtitle: "Un'isola leggendaria di piantagioni di tè, fauna selvaggia, coste dorate e 2.500 anni di civiltà.",
      featuredPackagesTitle: "I Nostri Tour Esclusivi",
      featuredPackagesSubtitle: "Itinerari privati ideati per mostrare il meglio dell'isola.",
      destinationsTitle: "Destinazioni Iconiche",
      destinationsSubtitle: "Dalla cittadella nella roccia di Sigiriya al parco di Yala e alle spiagge di Mirissa.",
      experiencesTitle: "Esperienze su Misura",
      experiencesSubtitle: "Personalizza il tuo viaggio intorno a ciò che ami di più.",
      whyUsTitle: "Lo Standard 3C: Cura, Comfort, Competenza",
      whyUsSubtitle: "Perché i viaggiatori esigenti scelgono 3C Ceylon Tours.",
      testimonialsTitle: "Cosa Dicono i Nostri Ospiti",
      testimonialsSubtitle: "Esperienze reali di chi ha viaggiato con noi.",
      journalTitle: "Ispirazione e Guide di Viaggio",
      journalSubtitle: "Consigli pratici e guide stagionali dei nostri esperti locali.",
      ctaBannerTitle: "Pronto a Pianificare il Tuo Viaggio da Sogno?",
      ctaBannerSubtitle: "Scrivici su WhatsApp o richiedi un preventivo personalizzato.",
      ctaBannerBtn: "Chatta su WhatsApp"
    },
    form: {
      fullName: "Nome e Cognome",
      email: "Indirizzo Email",
      country: "Paese di Residenza",
      whatsappNumber: "Numero WhatsApp / Telefono",
      preferredDates: "Periodo o Date Preferite",
      numberOfGuests: "Numero di Viaggiatori",
      style: "Stile di Viaggio Preferito",
      budget: "Budget Stimato per Persona (USD)",
      message: "Descrivi il tuo viaggio ideale (interessi, ritmo, preferenze)",
      submit: "Invia Richiesta",
      submitting: "Invio in corso...",
      successMessage: "Grazie! La tua richiesta è stata ricevuta. Ti risponderemo entro 24 ore.",
      errorMessage: "Compila tutti i campi obbligatori."
    },
    footer: {
      tagline: "Viaggi straordinari. Ricordi senza tempo. Vacanze private su misura in Sri Lanka.",
      quickLinks: "Navigazione",
      destinations: "Destinazioni",
      contactUs: "Contatto Diretto",
      certifications: "Accreditamenti Ufficiali",
      rights: "Tutti i diritti riservati. 3C Ceylon Tours (Pvt) Ltd.",
      privacy: "Privacy",
      terms: "Termini e Condizioni"
    }
  },
  ru: {
    nav: {
      home: "Главная",
      packages: "Туры и Маршруты",
      destinations: "Направления",
      experiences: "Впечатления",
      about: "О Нас",
      blog: "Гид по Шри-Ланке",
      contact: "Контакты и Заявка",
      planTrip: "Спланировать Тур"
    },
    hero: {
      tagline: "Премиальные Туроператоры по Шри-Ланке",
      headline: "Откройте Душу Шри-Ланки",
      subheading: "Незабываемые путешествия. Вечные воспоминания. Индивидуальный отдых премиум-класса от 3C Ceylon Tours.",
      exploreBtn: "Смотреть Туры",
      planBtn: "Индивидуальный Маршрут",
      scrollDown: "Листайте вниз",
      curatedJourneys: "100% Авторские Частные Путешествия",
      destBadge: "Крепость Сигирия и Сафари на Леопардов"
    },
    common: {
      viewDetails: "Подробнее",
      requestQuote: "Запросить Стоимость",
      whatsappInquiry: "Задать Вопрос в WhatsApp",
      bookTour: "Забронировать Тур",
      days: "Дней",
      nights: "Ночей",
      startingFrom: "От",
      perPerson: "на человека",
      allTours: "Все Туры",
      allDestinations: "Все Направления",
      readMore: "Читать Статью",
      quickTripPlanner: "Быстрый Подбор",
      travelDates: "Когда вы планируете поездку?",
      travelers: "Количество путешественников?",
      travelStyle: "Стиль Отдыха",
      findTours: "Найти Идеальный Тур",
      expertGuidance: "Консьерж 24/7",
      bespokeLuxury: "Индивидуальный Сервис",
      verifiedReviews: "Отзывы 5 Звезд"
    },
    sections: {
      whySriLankaTitle: "Почему Стоит Посетить Шри-Ланку",
      whySriLankaSubtitle: "Остров чайных холмов, диких леопардов, золотых пляжей и 2500-летней истории.",
      featuredPackagesTitle: "Флагманские Маршруты",
      featuredPackagesSubtitle: "Эксклюзивные частные путешествия по самым впечатляющим уголкам острова.",
      destinationsTitle: "Главные Направления",
      destinationsSubtitle: "От скальной крепости Сигирия до национального парка Яла и пляжей Мириссы.",
      experiencesTitle: "Коллекция Впечатлений",
      experiencesSubtitle: "Создайте маршрут вокруг ваших персональных интересов.",
      whyUsTitle: "Стандарт 3C: Забота, Комфорт, Мастерство",
      whyUsSubtitle: "Почему взыскательные гости выбирают 3C Ceylon Tours.",
      testimonialsTitle: "Отзывы Наших Гостей",
      testimonialsSubtitle: "Подлинные впечатления путешественников со всего мира.",
      journalTitle: "Гид и Вдохновение для Путешествий",
      journalSubtitle: "Советы и сезонные рекомендации от наших ланкийских экспертов.",
      ctaBannerTitle: "Готовы Спланировать Путешествие Мечты?",
      ctaBannerSubtitle: "Свяжитесь с нами напрямую через WhatsApp или отправьте индивидуальную заявку.",
      ctaBannerBtn: "Написать в WhatsApp"
    },
    form: {
      fullName: "Полное Имя",
      email: "Электронная Почта",
      country: "Страна Проживания",
      whatsappNumber: "Номер WhatsApp / Телефон",
      preferredDates: "Желаемые Даты или Месяц",
      numberOfGuests: "Количество Гостей",
      style: "Предпочтительный Стиль Тура",
      budget: "Примерный Бюджет на Человека (USD)",
      message: "Расскажите о ваших пожеланиях (интересы, темп, особые требования)",
      submit: "Отправить Заявку",
      submitting: "Отправка...",
      successMessage: "Спасибо! Ваша заявка принята. Наш специалист свяжется с вами в течение 24 часов.",
      errorMessage: "Пожалуйста, заполните все обязательные поля."
    },
    footer: {
      tagline: "Незабываемые путешествия. Индивидуальный роскошный отдых на Шри-Ланке.",
      quickLinks: "Навигация",
      destinations: "Направления",
      contactUs: "Прямая Связь",
      certifications: "Официальные Лицензии",
      rights: "Все права защищены. 3C Ceylon Tours (Pvt) Ltd.",
      privacy: "Конфиденциальность",
      terms: "Условия"
    }
  },
  zh: {
    nav: {
      home: "首页",
      packages: "精品行程",
      destinations: "热门目的地",
      experiences: "主题体验",
      about: "关于我们",
      blog: "旅行指南",
      contact: "联系与定制",
      planTrip: "定制我的行程"
    },
    hero: {
      tagline: "斯里兰卡顶级私人定制旅行专家",
      headline: "探索斯里兰卡的灵魂之美",
      subheading: "非凡之旅，永恒回忆。3C Ceylon Tours 为您悉心打造尊贵私享海岛假期。",
      exploreBtn: "探索精品行程",
      planBtn: "定制专属旅程",
      scrollDown: "向下滑动探索",
      curatedJourneys: "100% 尊贵私家定制",
      destBadge: "狮子岩空中宫殿与野生金钱豹"
    },
    common: {
      viewDetails: "查看详情",
      requestQuote: "获取报价",
      whatsappInquiry: "WhatsApp 咨询",
      bookTour: "预订行程",
      days: "天",
      nights: "晚",
      startingFrom: "起价",
      perPerson: "每人",
      allTours: "查看全部行程",
      allDestinations: "查看全部目的地",
      readMore: "阅读全文",
      quickTripPlanner: "快速旅行筛选",
      travelDates: "您计划何时出发？",
      travelers: "同行人数？",
      travelStyle: "旅行偏好",
      findTours: "寻找理想行程",
      expertGuidance: "24/7 专属管家",
      bespokeLuxury: "纯正奢华定制",
      verifiedReviews: "真实五星好评"
    },
    sections: {
      whySriLankaTitle: "为何选择斯里兰卡",
      whySriLankaSubtitle: "翡翠茶山、野生动物王国、金黄海岸与两千五百年古文明交织的印度洋明珠。",
      featuredPackagesTitle: "标志性私享行程",
      featuredPackagesSubtitle: "精心编排的私密路线，带您领略海岛至美风光。",
      destinationsTitle: "标志性目的地",
      destinationsSubtitle: "从狮子岩的云端宫殿到雅拉的国家公园与美蕊沙的碧海蓝天。",
      experiencesTitle: "特色主题体验",
      experiencesSubtitle: "根据您的心之所向，打造独一无二的海岛时光。",
      whyUsTitle: "3C 尊贵标准：关怀、舒适、精湛",
      whyUsSubtitle: "为何全球挑剔旅行者信赖 3C Ceylon Tours。",
      testimonialsTitle: "旅行者口碑评价",
      testimonialsSubtitle: "来自世界各地客人的真实旅途分享。",
      journalTitle: "旅行灵感与指南",
      journalSubtitle: "由斯里兰卡当地旅行专家倾心撰写的情报与贴士。",
      ctaBannerTitle: "准备好开启您的斯里兰卡梦幻之旅了吗？",
      ctaBannerSubtitle: "立即通过 WhatsApp 与我们的高级旅行策划师一对一交流。",
      ctaBannerBtn: "立即在 WhatsApp 上沟通"
    },
    form: {
      fullName: "您的姓名",
      email: "电子邮箱",
      country: "居住国家/地区",
      whatsappNumber: "WhatsApp / 手机号码",
      preferredDates: "预计出行日期或月份",
      numberOfGuests: "出行人数",
      style: "偏好旅行风格",
      budget: "预计每人预算 (美元)",
      message: "请分享您的梦想之旅（喜好、旅行节奏或特殊要求）",
      submit: "提交旅行咨询",
      submitting: "正在提交...",
      successMessage: "非常感谢！我们已收到您的咨询，高级旅行设计师将在24小时内与您联系。",
      errorMessage: "请完整填写所有必填项。"
    },
    footer: {
      tagline: "非凡之旅，永恒回忆。斯里兰卡尊贵定制私家团。",
      quickLinks: "快速导航",
      destinations: "主要目的地",
      contactUs: "直接联系",
      certifications: "官方官方认证与保障",
      rights: "版权所有 3C Ceylon Tours (Pvt) Ltd.",
      privacy: "隐私政策",
      terms: "条款及细则"
    }
  },
  ja: {
    nav: {
      home: "ホーム",
      packages: "ツアーパッケージ",
      destinations: "観光地",
      experiences: "体験スタイル",
      about: "会社概要",
      blog: "旅行ガイド",
      contact: "お問い合わせ",
      planTrip: "オーダーメイド旅行"
    },
    hero: {
      tagline: "スリランカ最高峰のプライベート旅行スペシャリスト",
      headline: "スリ兰カの魂に出会う旅へ",
      subheading: "特別な感動。永遠の思い出。3C Ceylon Tours がお届けする極上のプライベートラグジュアリーホリデー。",
      exploreBtn: "ツアーを見る",
      planBtn: "旅をプランニング",
      scrollDown: "下にスクロール",
      curatedJourneys: "100% 完全プライベート旅程",
      destBadge: "シーギリヤ岩峰と野生のヒョウ"
    },
    common: {
      viewDetails: "詳細を見る",
      requestQuote: "お見積り依頼",
      whatsappInquiry: "WhatsApp で相談",
      bookTour: "ツアーを予約",
      days: "日間",
      nights: "泊",
      startingFrom: "参考価格",
      perPerson: "1名様あたり",
      allTours: "すべてのツアー",
      allDestinations: "すべての観光地",
      readMore: "記事を読む",
      quickTripPlanner: "簡単ツアー検索",
      travelDates: "ご出発時期はいつ頃ですか？",
      travelers: "ご旅行人数は？",
      travelStyle: "旅行スタイル",
      findTours: "最適なツアーを探す",
      expertGuidance: "24時間 現地コンシェルジュ",
      bespokeLuxury: "完全オーダーメイド",
      verifiedReviews: "高評価レビュー"
    },
    sections: {
      whySriLankaTitle: "スリランカを訪れる理由",
      whySriLankaSubtitle: "エメラルド色の茶畑、息を呑む野生動物、黄金色の海岸線、そして2500年の生きた歴史。",
      featuredPackagesTitle: "厳選シグネチャーツアー",
      featuredPackagesSubtitle: "スリランカの魅力を贅沢に満喫するプライベートツアー。",
      destinationsTitle: "象徴的なデスティネーション",
      destinationsSubtitle: "天空の要塞シーギリヤからヤーラのサファリ、エッラの茶畑まで。",
      experiencesTitle: "テーマ別トラベル体験",
      experiencesSubtitle: "あなたの好奇心を満たすオーダーメイドの旅立ち。",
      whyUsTitle: "3C クオリティ：真心・快適・熟練",
      whyUsSubtitle: "世界中の上質な旅人が 3C Ceylon Tours を選ぶ理由。",
      testimonialsTitle: "お客様の声・体験談",
      testimonialsSubtitle: "スリランカをご旅行されたお客様からのメッセージ。",
      journalTitle: "旅行インスピレーション＆ガイド",
      journalSubtitle: "現地スタッフがお届けする最新のお役立ち情報。",
      ctaBannerTitle: "スリランカへの夢の旅を始めませんか？",
      ctaBannerSubtitle: "専任のトラベルプランナーが WhatsApp にて直接ご案内いたします。",
      ctaBannerBtn: "WhatsApp で問い合わせる"
    },
    form: {
      fullName: "お名前",
      email: "メールアドレス",
      country: "お住まいの国",
      whatsappNumber: "WhatsApp / お電話番号",
      preferredDates: "ご希望の旅行時期・日程",
      numberOfGuests: "ご旅行人数",
      style: "ご希望の旅行スタイル",
      budget: "1名様あたりのご予算目安 (USD)",
      message: "ご希望の旅についてお聞かせください（行きたい場所、こだわり等）",
      submit: "プランの相談を送信する",
      submitting: "送信中...",
      successMessage: "ありがとうございます！お問い合わせを受け付けました。24時間以内にご連絡いたします。",
      errorMessage: "必須項目をすべてご入力ください。"
    },
    footer: {
      tagline: "特別な感動。永遠の思い出。スリランカ最高峰のプライベートツアー。",
      quickLinks: "メニュー",
      destinations: "主な観光地",
      contactUs: "お問い合わせ",
      certifications: "政府公認ライセンス",
      rights: "All rights reserved. 3C Ceylon Tours (Pvt) Ltd.",
      privacy: "プライバシーポリシー",
      terms: "利用規約"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      packages: "باقات السفر",
      destinations: "الوجهات",
      experiences: "تجارب السفر",
      about: "من نحن",
      blog: "دليل السفر",
      contact: "اتصل بنا والحجز",
      planTrip: "صمم رحلتك الخاصة"
    },
    hero: {
      tagline: "خبراء السياحة الفاخرة الأولى في سريلانكا",
      headline: "اكتشف روح وجوهر سريلانكا",
      subheading: "رحلات استثنائية. ذكريات لا تُنسى. إجازات خاصة فاخرة ومصممة بعناية فائقة من شركة 3C Ceylon Tours.",
      exploreBtn: "استكشف الباقات السياحية",
      planBtn: "صمم رحلتك الخاصة",
      scrollDown: "مرر للأسفل للاستكشاف",
      curatedJourneys: "رحلات خاصة 100% مصممة حسب رغبتك",
      destBadge: "قلعة سيغيريا الصخرية والفهود البرية"
    },
    common: {
      viewDetails: "عرض التفاصيل",
      requestQuote: "طلب عرض أسعار",
      whatsappInquiry: "استفسار عبر واتساب",
      bookTour: "احجز هذه الرحلة",
      days: "أيام",
      nights: "ليالٍ",
      startingFrom: "ابتداءً من",
      perPerson: "للشخص الواحد",
      allTours: "عرض جميع الباقات",
      allDestinations: "عرض جميع الوجهات",
      readMore: "قراءة المقال كاملاً",
      quickTripPlanner: "البحث السريع عن الرحلات",
      travelDates: "متى تفضل السفر؟",
      travelers: "كم عدد المسافرين؟",
      travelStyle: "نمط السفر المفضل",
      findTours: "ابحث عن رحلتي المثالية",
      expertGuidance: "خدمة كونسيرج 24/7",
      bespokeLuxury: "برامج سياحية حصرية",
      verifiedReviews: "تقييمات موثقة 5 نجوم"
    },
    sections: {
      whySriLankaTitle: "لماذا تزور سريلانكا؟",
      whySriLankaSubtitle: "جزيرة ساحرة تحتضن تلال الشاي الخضراء، والحياة البرية الخلابة، والشواطئ الذهبية، و2500 عام من التاريخ.",
      featuredPackagesTitle: "باقاتنا المميزة الحصرية",
      featuredPackagesSubtitle: "برامج سياحية خاصة أُعدت بعناية لتكشف لك أجمل معالم الجزيرة.",
      destinationsTitle: "أبرز الوجهات السياحية",
      destinationsSubtitle: "من صخرة سيغيريا الأسطورية إلى براري يالا وشواطئ ميريسا الساحرة.",
      experiencesTitle: "تجارب سفر مصممة لك",
      experiencesSubtitle: "اختر أسلوب رحلتك بما يتناسب مع شغفك ورغباتك الخاصة.",
      whyUsTitle: "معيار 3C: العناية، الراحة، الإتقان",
      whyUsSubtitle: "لماذا يفضل المسافرون من دول الخليج والعالم شركة 3C Ceylon Tours.",
      testimonialsTitle: "تجارب وآراء عملائنا",
      testimonialsSubtitle: "شهادات حقيقية من ضيوفنا الكرام الذين استمتعوا بسحر سريلانكا معنا.",
      journalTitle: "إلهام ودليل السفر",
      journalSubtitle: "نصائح محلية وإرشادات السفر أعدها خبراؤنا المقيمون في الجزيرة.",
      ctaBannerTitle: "هل أنت مستعد لتصميم رحلة أحلامك في سريلانكا؟",
      ctaBannerSubtitle: "تواصل مباشرة مع خبرائنا عبر الواتساب أو أرسل لنا تفاصيل رحلتك الآن.",
      ctaBannerBtn: "تحدث معنا عبر الواتساب"
    },
    form: {
      fullName: "الاسم الكامل",
      email: "البريد الإلكتروني",
      country: "بلد الإقامة",
      whatsappNumber: "رقم الواتساب / الجوال",
      preferredDates: "تاريخ أو شهر السفر المفضل",
      numberOfGuests: "عدد المسافرين",
      style: "نمط السفر المفضل",
      budget: "الميزانية التقريبية للشخص (بالدولار)",
      message: "أخبرنا عن تفاصيل رحلتك المنشودة (الأماكن، الاهتمامات، أي متطلبات خاصة)",
      submit: "إرسال طلب الرحلة",
      submitting: "جارٍ الإرسال...",
      successMessage: "شكراً لك! تم استلام طلبك بنجاح. سيتواصل معك مستشار السفر خلال 24 ساعة.",
      errorMessage: "يرجى تعبئة جميع الحقول المطلوبة."
    },
    footer: {
      tagline: "رحلات استثنائية. ذكريات لا تُنسى. إجازات خاصة وفاخرة في سريلانكا.",
      quickLinks: "روابط سريعة",
      destinations: "أهم الوجهات",
      contactUs: "اتصال مباشر",
      certifications: "تراخيص واعتمادات رسمية",
      rights: "جميع الحقوق محفوظة. شركة 3C Ceylon Tours (Pvt) Ltd.",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام"
    }
  }
};

interface LanguageContextType {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  t: Translations;
  isRTL: boolean;
  locales: LocaleInfo[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<SupportedLocale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("3c_locale") as SupportedLocale;
    if (saved && DICTIONARIES[saved]) {
      setLocaleState(saved);
      document.documentElement.lang = saved;
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
    }
  }, []);

  const setLocale = (newLocale: SupportedLocale) => {
    if (DICTIONARIES[newLocale]) {
      setLocaleState(newLocale);
      localStorage.setItem("3c_locale", newLocale);
      document.documentElement.lang = newLocale;
      document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
    }
  };

  const isRTL = locale === "ar";
  const t = DICTIONARIES[locale] || DICTIONARIES.en;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, isRTL, locales: SUPPORTED_LOCALES }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
