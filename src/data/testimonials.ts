export interface Testimonial {
  id: string;
  name: string;
  country: string;
  flag: string;
  tourTaken: string;
  date: string;
  rating: number;
  avatarText: string;
  quote: string;
  review: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Marta & Mark",
    country: "Spain",
    flag: "🇪🇸",
    tourTaken: "Honeymoon & Luxury Cultural Escape",
    date: "March 2026",
    rating: 5,
    avatarText: "MM",
    quote: "We came back home from our honeymoon with both sadness and joy in our hearts.",
    review: "Sadness because we had to leave the incredible paradise of Sri Lanka, but pure joy because the whole 3C Ceylon Tours team made it such an unforgettable experience. Their attention to every single detail is truly remarkable. They took immense care of us, prepared thoughtful surprises, floral baths, and wonderful gifts. Everything was beautiful—the trip of a lifetime! Special thanks to our dedicated chauffeur-guide for his warmth and safety.",
    image: "/images/testimonials/terminal-welcome.png"
  },
  {
    id: "test-2",
    name: "Arthur & Eleanor Vance",
    country: "United Kingdom",
    flag: "🇬🇧",
    tourTaken: "14-Day Grand Ceylon Luxury Tour",
    date: "February 2026",
    rating: 5,
    avatarText: "AV",
    quote: "A flawless, breathtaking holiday that exceeded every expectation.",
    review: "From the moment our chauffeur-guide greeted us at Colombo airport with warm smiles and chilled towels, we knew 3C Ceylon Tours was extraordinary. The hotels were magnificent, especially Ceylon Tea Trails and Water Garden Sigiriya. Watching leopards in Yala and ascending Sigiriya at dawn were memories we will cherish forever. Outstanding 5-star service!",
    image: "/images/testimonials/lighthouse-couple.png"
  },
  {
    id: "test-3",
    name: "The Harrison Family",
    country: "Australia",
    flag: "🇦🇺",
    tourTaken: "11-Day Island Explorer Family Adventure",
    date: "January 2026",
    rating: 5,
    avatarText: "HF",
    quote: "The kids had the adventure of a lifetime, and parents got to truly relax!",
    review: "Traveling with three kids can be stressful, but our chauffeur-guide Shantha was a godsend. He was patient, funny, and incredibly knowledgeable. The private van was spotless and comfortable throughout our entire tour. The turtle hatchery in Kosgoda, the scenic train ride, and the elephant safaris kept the children completely captivated while the luxury villas gave us total peace of mind.",
    image: "/images/testimonials/family-red-car.png"
  },
  {
    id: "test-4",
    name: "Dr. Julien & Camille Moreau",
    country: "France",
    flag: "🇫🇷",
    tourTaken: "9-Day Pure Romance Honeymoon Tour",
    date: "December 2025",
    rating: 5,
    avatarText: "JM",
    quote: "Pure enchantment. The most romantic journey of our lives.",
    review: "3C Ceylon Tours organized our dream honeymoon in Sri Lanka. The attention to intimate details—from candlelit beach dinners under tropical stars to private observation train tickets in the tea country—was magical. We felt treated like royalty from start to finish. We cannot recommend them highly enough to anyone seeking a luxury holiday in Ceylon.",
    image: "/images/testimonials/couple-temple.png"
  },
  {
    id: "test-5",
    name: "Maximilian & Clara Schneider",
    country: "Germany",
    flag: "🇩🇪",
    tourTaken: "10-Day Wild Sri Lanka Safari Expedition",
    date: "November 2025",
    rating: 5,
    avatarText: "MS",
    quote: "Exceptional wildlife expertise and ethical, respectful guiding.",
    review: "As passionate nature photographers, we were very particular about our safari requirements. The naturalist arranged by 3C Ceylon Tours was world-class. We captured incredible shots of leopards, sloth bears, and the elephant gathering without feeling rushed. Punctual, courteous, and exceptionally well-planned.",
    image: "/images/testimonials/forest-friends.png"
  },
  {
    id: "test-6",
    name: "Liam & Sophia Bennett",
    country: "Canada",
    flag: "🇨🇦",
    tourTaken: "12-Day Scenic Highlands & Waterfalls Tour",
    date: "October 2025",
    rating: 5,
    avatarText: "LS",
    quote: "Stunning waterfalls, misty tea estates, and genuine island warmth.",
    review: "Every day felt like stepping into a National Geographic documentary. Our guide knew the secret quiet viewpoints away from crowds and introduced us to authentic local tea masters and artisanal spice growers. The hospitality of 3C Ceylon Tours is second to none.",
    image: "/images/testimonials/waterfall-travelers.png"
  },
  {
    id: "test-7",
    name: "Oliver & Maya Jensen",
    country: "Denmark",
    flag: "🇩🇰",
    tourTaken: "8-Day Southern Coastline & Lake Serenity",
    date: "September 2025",
    rating: 5,
    avatarText: "OJ",
    quote: "Two big thumbs up! The best travel company in South Asia.",
    review: "Everything from airport pickup to our final sunset cruise in Koggala Lake was executed with perfection. The private boat safari, the fresh seafood dinners, and the 24/7 concierge WhatsApp assistance made us feel safe, cherished, and pampered every minute.",
    image: "/images/testimonials/lakeside-thumbsup.png"
  },
  {
    id: "test-8",
    name: "Chloe & Emma Watson",
    country: "United Kingdom",
    flag: "🇬🇧",
    tourTaken: "7-Day Botanical Wonders & Wellness Retreat",
    date: "August 2025",
    rating: 5,
    avatarText: "CW",
    quote: "Rejuvenating Ayurveda, lush botanical gardens, and total peace.",
    review: "We booked a wellness and nature escape to recharge. The Royal Botanical Gardens in Peradeniya and the Ayurvedic spa treatments arranged by 3C Ceylon Tours were world-class. Our chauffeur made us feel like family. Thank you for a glorious holiday!",
    image: "/images/testimonials/tropical-garden.png"
  }
];
