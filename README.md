# 3C CEYLON TOURS — Official Production Website

> **Discover the Soul of Sri Lanka**  
> Luxury Private Tours, Cultural Expeditions, Big Four Wildlife Safaris, & Bespoke Island Holidays.

---

## 🌴 Project Overview

**3C CEYLON TOURS** is a luxury, multilingual, high-performance, and technically SEO-optimized web application designed for a premier Sri Lankan Destination Management Company (DMC). Built on **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**, it features the company's brand identity:
- **Primary Luxury Teal (`#064F59` / `#075662`)**
- **Vibrant Coral (`#FF6B5E`)**
- **Champagne Gold (`#D8B46A`)**
- **Midnight Navy (`#102B35`)**
- **Warm Ivory (`#FAF7EF`)**

---

## 🚀 Key Architectural Features

1. **7 Primary Navigation Pages & Dynamic Detail Routes**:
   - **Home (`/`)**: Cinematic video/photo hero, interactive quick trip finder, curated package cards, destination showcases, 3C standard pillars, verified traveler testimonials, and journal insights.
   - **Tour Packages (`/packages` & `/packages/[slug]`)**: Search, duration, and travel style filters with comprehensive day-by-day itineraries, inclusions/exclusions, photo galleries, FAQs, and 1-click WhatsApp quote links.
   - **Destinations (`/destinations` & `/destinations/[slug]`)**: 10 Sri Lanka destination guides (Sigiriya, Kandy, Ella, Nuwara Eliya, Galle Fort, Yala, Mirissa, Anuradhapura, Polonnaruwa, Bentota) with climate, top attractions, and insider tips.
   - **Travel Experiences (`/experiences`)**: 9 curated holiday categories (Wildlife Safaris, Cultural Heritage, Beach Escapes, Honeymoon Romance, Adventure, Family Holidays, Ultra-Luxury, Nature & Ayurveda Wellness, Tailor-Made Private Tours).
   - **About Us (`/about`)**: Company story, mission & vision, the 3C Standard (Care, Comfort, Craftsmanship), fleet & guide accreditations, and ethical wildlife pledge.
   - **Travel Guide / Blog (`/blog` & `/blog/[slug]`)**: 8 in-depth, SEO-rich articles with reading times, author credentials, table of contents, and JSON-LD `BlogPosting` structured data.
   - **Contact & Plan Your Trip (`/contact`)**: Interactive multi-step booking planner, server-side validation, honeypot anti-spam protection, direct WhatsApp concierge, and verified Google Map coordinates.
2. **Multilingual System (9 International Languages)**:
   - English (`en` - Default), German (`de`), French (`fr`), Spanish (`es`), Italian (`it`), Russian (`ru`), Chinese (`zh`), Japanese (`ja`), and Arabic (`ar`).
   - Native Arabic right-to-left (`dir="rtl"`) layout and font rendering.
3. **Technical SEO & Structured Data**:
   - Schema.org JSON-LD implementations: `TravelAgency`, `TouristDestination`, `TouristTrip`, `BlogPosting`, and `BreadcrumbList`.
   - Dynamic XML Sitemap (`/sitemap.xml`) and `robots.txt`.
   - OpenGraph and Twitter/X metadata cards on every page.
4. **Performance & Core Web Vitals**:
   - Target 95+ Lighthouse across Performance, Accessibility, Best Practices, and SEO.
   - Priority Largest Contentful Paint (LCP) hero image loading (`fetchpriority="high"`).
   - Progressive video loading with lightweight poster fallback.
   - Zero layout shifts (CLS < 0.1).

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14.2 (App Router, Server Components & Static Site Generation)
- **Language**: TypeScript 5.6
- **Styling**: Tailwind CSS 3.4 & Vanilla CSS Variables
- **Icons**: Lucide React
- **Typography**: Google Fonts (Playfair Display for luxury serif headings + Manrope for modern body text)
- **Animations**: CSS GPU transforms & Framer Motion with `prefers-reduced-motion` compliance

---

## 📦 Getting Started

### 1. Prerequisites
- Node.js `v18.18+` or `v20+` (Tested on Node `v22.14.0`)
- npm `v10+`

### 2. Installation
```bash
# Clone or navigate to the project directory
cd "3C CEYLON TOURS"

# Install dependencies
npm install
```

### 3. Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Local Preview
```bash
# Build production bundle (generates 36 prerendered static pages)
npm run build

# Start production server
npm run start
```

---

## 🌐 Environment Variables

Create a `.env.local` file in the root directory:
```env
# Public Site URL
NEXT_PUBLIC_SITE_URL=https://3cceylontours.com

# WhatsApp Concierge Number (Country code + phone without '+' or spaces)
NEXT_PUBLIC_WHATSAPP_NUMBER=94779541203

# Company Email
NEXT_PUBLIC_COMPANY_EMAIL=3cceylon.tours@gmail.com

# Google Analytics 4 (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 🚀 Deployment Guidance

### Deploying to Vercel (Recommended)
1. Push this repository to GitHub or GitLab.
2. Sign in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your repository. Vercel automatically detects Next.js settings.
4. Add the environment variables from `.env.example` in the **Environment Variables** tab.
5. Click **Deploy**. Your website will be live globally on Vercel's edge network within minutes.

### Deploying to a VPS (Ubuntu / Debian with PM2 & Nginx)
1. Install Node.js v20+ and PM2:
   ```bash
   sudo npm install -g pm2
   ```
2. Build the application on the server:
   ```bash
   npm ci
   npm run build
   ```
3. Start the Next.js process with PM2:
   ```bash
   pm2 start npm --name "3c-ceylon-tours" -- start -- -p 3000
   pm2 save
   pm2 startup
   ```
4. Configure Nginx reverse proxy to forward requests from port `80`/`443` to `http://127.0.0.1:3000`.

---

## 📋 Pre-Launch SEO Checklist

- [x] Unique `<title>` and `<meta description>` on every route
- [x] One primary `<h1>` per page with semantic `<h2>`/`<h3>` hierarchy
- [x] Validated JSON-LD schemas (`TravelAgency`, `TouristTrip`, `TouristDestination`, `BlogPosting`)
- [x] Dynamic `/sitemap.xml` with priority and lastmod timestamps
- [x] Search engine crawler directives in `/robots.txt`
- [x] OpenGraph and Twitter/X social preview images
- [x] Favicon and official brand logo (`/images/logo.png`)
- [x] Context-aware WhatsApp links passing package inquiries directly
- [x] Multi-step contact form with anti-spam honeypot
- [x] 100% Mobile responsive layout with touch-friendly navigation

---

## 📞 Support & Contacts

**3C Ceylon Tours (Pvt) Ltd**  
- **Office**: Level 12, West Tower, World Trade Center, Colombo 01, Sri Lanka  
- **WhatsApp / Phone (Primary)**: +94 77 954 1203  
- **WhatsApp / Phone (Secondary)**: +94 76 914 1852  
- **Email**: 3cceylon.tours@gmail.com  
- **Website**: [https://3cceylontours.com](https://3cceylontours.com)
