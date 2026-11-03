export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  route?: string;
  description: string;
  highlights: string[];
  meals?: string;
  overnight?: string;
  notes?: string;
  image?: string;
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline?: string;
  brandLine?: string;
  durationDays: number;
  durationNights: number;
  image: string;
  gallery: string[];
  style: string;
  activityLevel: "Relaxed" | "Moderate" | "Active";
  idealFor: string;
  destinationsCovered: string[];
  highlights: string[];
  overview: string;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  faqs: { question: string; answer: string }[];
  featured: boolean;
  travelStyle: string;
}

export const TOUR_PACKAGES: TourPackage[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. Sri Lanka Highlights: 5 Nights / 6 Days
  // ─────────────────────────────────────────────────────────────
  {
    id: "pkg-1",
    slug: "sri-lanka-highlights-6-days",
    title: "Sri Lanka Highlights: 5 Nights / 6 Days",
    subtitle: "Ancient Wonders, Scenic Mountains & Tropical Beaches",
    tagline: "UNESCO heritage • Highland tea estates • Scenic train ride • Safari & southern beaches",
    brandLine: "A private journey with 3C Ceylon Tours",
    durationDays: 6,
    durationNights: 5,
    image: "/images/packages/main/sri-lanka-highlights-6-days.jpg",
    gallery: [
      "/images/packages/tropical-lighthouse-tuk-tuk.png",
      "/images/places/dambulla-sigiriya/dambulla1.jpg",
      "/images/places/ella/ella1.jpg",
      "/images/places/mirissa/mirissa1.jpg"
    ],
    style: "Cultural & Highlights",
    activityLevel: "Moderate",
    travelStyle: "Private Tour",
    idealFor: "Couples, families, first-time visitors and travellers seeking culture, nature, adventure and beaches.",
    destinationsCovered: ["Sigiriya", "Kandy", "Nuwara Eliya", "Ella", "Mirissa", "Galle"],
    highlights: [
      "Explore the ancient Sigiriya Rock Fortress and Dambulla Cave Temple",
      "Experience traditional Sri Lankan village life and home-cooked cuisine",
      "Enjoy panoramic views from Pidurangala Rock",
      "Discover the cultural charm of Kandy and the Temple of the Tooth",
      "Travel through lush tea plantations and misty mountains",
      "Experience the scenic train journey from Nanu Oya to Ella",
      "Explore Ella's iconic Nine Arch Bridge and Little Adam's Peak",
      "Enjoy a wildlife safari in Yala or Udawalawe National Park (optional)",
      "Discover the colonial charm of Galle Fort (UNESCO World Heritage)",
      "Relax on the golden tropical beaches of Mirissa and visit Coconut Tree Hill"
    ],
    overview: "Discover the best of Sri Lanka in six unforgettable days. Explore ancient UNESCO World Heritage Sites, experience authentic village life, travel through lush tea plantations, enjoy one of the world's most scenic train journeys, and relax on the beautiful southern coast. From cultural landmarks and mountain adventures to wildlife and golden beaches, this journey offers a wonderful introduction to the island.",
    inclusions: [
      "Private luxury air-conditioned vehicle with dedicated English-speaking chauffeur-guide",
      "Airport pick-up and drop-off with personalized meet and greet",
      "All driver accommodation, meals, highway tolls, parking and fuel costs",
      "Authentic village tour experience including bullock cart, catamaran ride & traditional lunch",
      "Scenic hill-country train tickets (subject to availability)",
      "24/7 dedicated traveler concierge support via WhatsApp"
    ],
    exclusions: [
      "International airfare and Sri Lanka ETA visa fees",
      "Entrance fees to monuments, temples, UNESCO sites and national parks",
      "Safari jeep hire and park tracker fees (unless specified in quotation)",
      "Personal expenses, optional adventure activities, and gratuities"
    ],
    faqs: [
      {
        question: "Can this 6-day itinerary be customized?",
        answer: "Yes, absolutely! All our journeys are 100% private and bespoke. We can adjust the route, add extra nights, upgrade accommodations, or swap activities to match your desires."
      },
      {
        question: "How does the scenic train ride work?",
        answer: "Your private chauffeur drops you at Nanu Oya Railway Station, safely transports all your heavy luggage in the vehicle, and warmly receives you on the platform at Ella station."
      }
    ],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Airport Arrival & Ancient Sigiriya",
        location: "Sigiriya",
        route: "Airport → Dambulla → Sigiriya",
        description: "Upon arrival at Bandaranaike International Airport, meet your friendly local representative from 3C Ceylon Tours and begin your journey towards Sri Lanka's Cultural Triangle. Visit the magnificent Dambulla Cave Temple, a UNESCO World Heritage Site famous for its ancient Buddhist paintings and impressive collection of Buddha statues. In the afternoon, enjoy an authentic Sri Lankan village experience featuring a traditional bullock cart ride, a catamaran ride across a village lake, and a demonstration of local village life with home-cooked lunch. In the evening, optionally climb Pidurangala Rock for sunset over Sigiriya Lion Rock.",
        highlights: ["Airport welcome", "Dambulla Cave Temple", "Village experience & traditional lunch", "Pidurangala sunset"],
        overnight: "Sigiriya"
      },
      {
        day: 2,
        title: "Sigiriya Rock Fortress & Cultural Kandy",
        location: "Kandy",
        route: "Sigiriya → Kandy",
        description: "Start your morning early with a climb to the iconic Sigiriya Rock Fortress, a UNESCO World Heritage Site renowned for its ancient royal palace, remarkable frescoes and fascinating history. After exploring this extraordinary landmark, continue towards Kandy through the beautiful landscapes of central Sri Lanka. In the evening, experience the vibrant rhythms and colourful traditions of a Sri Lankan cultural dance performance, followed by a relaxing walk around scenic Kandy Lake.",
        highlights: ["Sigiriya Rock Fortress", "Scenic countryside", "Traditional cultural dance show", "Kandy Lake walk"],
        overnight: "Kandy"
      },
      {
        day: 3,
        title: "Temple of the Tooth, Tea Country & Scenic Train Journey",
        location: "Ella",
        route: "Kandy → Nuwara Eliya → Ella",
        description: "Begin your morning with a visit to the sacred Temple of the Sacred Tooth Relic, one of Buddhism's most important pilgrimage sites. Continue into Sri Lanka's spectacular hill country, travelling through misty mountains, winding roads and lush tea plantations. Arrive in Nuwara Eliya ('Little England'), visit the historic post office and Gregory Lake. Later, board the celebrated scenic train from Nanu Oya to Ella through emerald tea estates and mountain tunnels. In the evening, explore Ella's lively town centre cafés and music.",
        highlights: ["Temple of the Sacred Tooth Relic", "Tea plantations & Nuwara Eliya", "Scenic hill-country train ride", "Ella town nightlife"],
        overnight: "Ella",
        notes: "Train tickets are subject to availability. Schedule may be adjusted to match railway timetable."
      },
      {
        day: 4,
        title: "Ella Adventures & Southern Coast",
        location: "Mirissa",
        route: "Ella → Ravana Falls → Wildlife Safari → Mirissa",
        description: "Start the day with an early morning hike to Little Adam's Peak for panoramic summit views. Optional adventure activities at Flying Ravana Adventure Park including the mega zip-line. Visit the world-famous Nine Arch Bridge and scenic Ravana Falls. Continue south for an optional afternoon wildlife safari in Yala National Park (famous for leopards and elephants) or Udawalawe National Park. Afterwards, transfer to the coastal town of Mirissa.",
        highlights: ["Little Adam's Peak hike", "Nine Arch Bridge", "Ravana Falls", "Optional wildlife safari (Yala / Udawalawe)"],
        overnight: "Mirissa",
        notes: "Safari is optional and depends on preferences and travel timing."
      },
      {
        day: 5,
        title: "Mirissa Beach & Historic Galle Fort",
        location: "Mirissa & Galle",
        route: "Mirissa → Galle Fort → Mirissa",
        description: "Enjoy a relaxed morning on golden Mirissa Beach. Swim in safe zones or relax under the palms. In the afternoon, travel to Galle and explore the historic Galle Fort, a UNESCO World Heritage Site. Wander through cobblestone streets, admire Dutch colonial architecture, browse boutique shops, art galleries and seaside cafés. Return to Mirissa for a tranquil evening.",
        highlights: ["Mirissa Beach relaxation", "Galle Dutch Fort exploration", "Colonial ramparts & lighthouse", "Boutique shopping & seaside dining"],
        overnight: "Mirissa"
      },
      {
        day: 6,
        title: "Coconut Tree Hill & Departure",
        location: "Mirissa to Colombo International Airport",
        route: "Mirissa → Airport",
        description: "Begin your final morning with a visit to the iconic Coconut Tree Hill, famous for its rows of coconut palms overlooking the Indian Ocean. Enjoy the coastal breeze and take memorable photographs. After breakfast, transfer comfortably to Bandaranaike International Airport for your departure flight.",
        highlights: ["Coconut Tree Hill", "Ocean views & photography", "Comfortable airport transfer"],
        overnight: "Departure"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 2. 3C Ceylon Heritage Escape: 2 Nights / 3 Days
  // ─────────────────────────────────────────────────────────────
  {
    id: "pkg-2",
    slug: "ceylon-heritage-escape-3-days",
    title: "3C Ceylon Heritage Escape: 2 Nights / 3 Days",
    subtitle: "Discover Ancient Wonders & Sri Lankan Culture",
    tagline: "Dambulla caves • Bullock cart & village meal • Sigiriya Lion Rock • Sacred Kandy",
    brandLine: "A private cultural journey with 3C Ceylon Tours",
    durationDays: 3,
    durationNights: 2,
    image: "/images/packages/main/ceylon-heritage-escape-3-days.jpg",
    gallery: [
      "/images/packages/ceylon-heritage-escape.jpeg",
      "/images/places/dambulla-sigiriya/dambulla2.jpg",
      "/images/places/kandy/kandy1.jpg",
      "/images/sri-lankan-village-cooking-workshop.png"
    ],
    style: "Heritage & Culture",
    activityLevel: "Moderate",
    travelStyle: "Private Tour",
    idealFor: "Couples, families, first-time visitors and culture lovers looking for a short high-impact escape.",
    destinationsCovered: ["Dambulla", "Sigiriya", "Kandy"],
    highlights: [
      "Dambulla Cave Temple – UNESCO World Heritage Site",
      "Traditional Sri Lankan village experience with bullock cart & catamaran ride",
      "Authentic village cooking demonstration and home-cooked lunch",
      "Sigiriya Rock Fortress – UNESCO World Heritage Site",
      "Temple of the Sacred Tooth Relic in Kandy",
      "Traditional Kandyan cultural dance performance",
      "Scenic Kandy Lake & optional Peradeniya Royal Botanic Gardens"
    ],
    overview: "Explore Sri Lanka's rich heritage on a memorable three-day journey. Discover ancient UNESCO World Heritage Sites, experience traditional village life, climb the iconic Sigiriya Rock Fortress and explore the cultural heart of Kandy. From authentic local experiences to sacred Buddhist landmarks, this short escape offers a wonderful introduction to Sri Lanka.",
    inclusions: [
      "Private luxury AC vehicle with licensed English-speaking chauffeur-guide",
      "Airport pick-up and drop-off transfers",
      "Authentic village tour with catamaran ride, bullock cart & traditional lunch",
      "Fuel, highway tolls, parking and driver allowances",
      "24/7 dedicated traveler concierge support"
    ],
    exclusions: [
      "Monument & temple entrance tickets",
      "Personal expenses, drinks and gratuities",
      "Visa & airfare"
    ],
    faqs: [
      {
        question: "Is this package suitable for travelers with limited time?",
        answer: "Yes, it is specifically designed to cover Sri Lanka's top two cultural crown jewels—Sigiriya and Kandy—in a convenient 3-day window."
      }
    ],
    featured: false,
    itinerary: [
      {
        day: 1,
        title: "Welcome to Sri Lanka & Traditional Village Life",
        location: "Sigiriya",
        route: "Airport → Dambulla → Sigiriya",
        description: "Your Sri Lankan adventure begins with a warm welcome from 3C Ceylon Tours at Bandaranaike International Airport. Travel towards the Cultural Triangle and visit the magnificent Dambulla Cave Temple. Continue to Sigiriya and enjoy an authentic Sri Lankan village experience with bullock cart ride, catamaran ride across a lotus lake, local cooking demo and home-cooked lunch.",
        highlights: ["Dambulla Cave Temple", "Bullock cart & catamaran ride", "Authentic village home lunch"],
        overnight: "Sigiriya"
      },
      {
        day: 2,
        title: "Ancient Sigiriya & Cultural Kandy",
        location: "Kandy",
        route: "Sigiriya → Kandy",
        description: "Begin your morning with an early climb to the magnificent Sigiriya Rock Fortress. Marvel at the ancient royal citadel, landscaped water gardens and iconic frescoes. Travel through scenic central landscapes to Kandy. Visit the sacred Temple of the Sacred Tooth Relic and attend a vibrant Kandyan cultural dance show in the evening.",
        highlights: ["Sigiriya Lion Rock Fortress", "Temple of the Sacred Tooth Relic", "Traditional Kandyan dance show"],
        overnight: "Kandy"
      },
      {
        day: 3,
        title: "Kandy & Departure",
        location: "Kandy to Airport",
        route: "Kandy → Airport",
        description: "Enjoy a relaxing morning walk around beautiful Kandy Lake. If time permits, visit the Peradeniya Royal Botanic Gardens with its renowned orchid house. Afterward, transfer to Bandaranaike International Airport for your departure flight.",
        highlights: ["Kandy Lake walk", "Optional Royal Botanic Gardens", "Comfortable airport transfer"],
        overnight: "Departure"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 3. 3C Southern Soul: 2 Nights / 3 Days
  // ─────────────────────────────────────────────────────────────
  {
    id: "pkg-3",
    slug: "southern-soul-3-days",
    title: "3C Southern Soul: 2 Nights / 3 Days",
    subtitle: "Feel the Rhythm of Sri Lanka's Southern Coast",
    tagline: "Tropical beaches • Colonial charm • Ocean adventures • Authentic local experiences",
    brandLine: "A private coastal journey with 3C Ceylon Tours",
    durationDays: 3,
    durationNights: 2,
    image: "/images/packages/main/southern-soul-3-days.jpg",
    gallery: [
      "/images/packages/southern-soul.jpeg",
      "/images/places/galle/galle1.jpg",
      "/images/places/mirissa/mirissa2.jpg",
      "/images/places/hirikatiya/hiriketiya1.jpg"
    ],
    style: "Coastal & Beach",
    activityLevel: "Relaxed",
    travelStyle: "Private Tour",
    idealFor: "Couples, friends, beach lovers and travellers seeking culture, relaxation and coastal experiences.",
    destinationsCovered: ["Galle", "Unawatuna", "Mirissa", "Koggala"],
    highlights: [
      "Explore the UNESCO World Heritage Site of Galle Fort",
      "Relax on the beautiful beaches of Unawatuna and Mirissa",
      "Discover the iconic Coconut Tree Hill viewpoint",
      "Enjoy optional seasonal whale-watching adventures",
      "Experience a scenic boat ride on Koggala Lake",
      "Discover Ceylon cinnamon production and traditional local life",
      "Visit the islands of Koggala Lake (Cinnamon Island & Temple Island)",
      "Learn about sea turtle conservation at a local hatchery"
    ],
    overview: "Discover the charm of Sri Lanka's southern coast on a relaxing three-day escape. Wander through the historic streets of Galle Fort, unwind on golden beaches, enjoy the vibrant atmosphere of Mirissa and discover the island's traditional cinnamon heritage on a scenic boat ride across Koggala Lake.",
    inclusions: [
      "Private luxury AC vehicle with dedicated English-speaking chauffeur-guide",
      "Airport pick-up and return transfers",
      "Koggala Lake scenic boat safari with Ceylon cinnamon experience",
      "All driver costs, tolls, parking and fuel",
      "24/7 dedicated traveler concierge support"
    ],
    exclusions: [
      "Optional whale watching boat tickets",
      "Turtle hatchery and monument entrance tickets",
      "Meals, beverages and personal expenses"
    ],
    faqs: [
      {
        question: "When is the best season for whale watching in Mirissa?",
        answer: "The prime whale watching season in Mirissa runs from November to April when seas are calm and blue whales frequent the southern continental shelf."
      }
    ],
    featured: false,
    itinerary: [
      {
        day: 1,
        title: "Welcome to the Southern Coast",
        location: "Galle or Unawatuna",
        route: "Airport → Unawatuna → Galle",
        description: "Your coastal escape begins with a warm welcome at Bandaranaike International Airport. Travel south along the expressway to Unawatuna for relaxing beach time. In the evening, explore the cobblestone alleys, ramparts and boutique cafés of historic Galle Fort, ending with a memorable dinner inside the fort.",
        highlights: ["Airport welcome", "Unawatuna Beach", "Galle Fort sunset walk", "Dinner inside Galle Fort"],
        overnight: "Galle or Unawatuna"
      },
      {
        day: 2,
        title: "Mirissa Beach & Ocean Adventures",
        location: "Mirissa",
        route: "Galle / Unawatuna → Mirissa",
        description: "Start with an optional early-morning whale-watching excursion from Mirissa harbour. Spend the afternoon relaxing beside the turquoise waters of Mirissa Beach, followed by a sunset walk to the famous Coconut Tree Hill for iconic ocean photographs. Enjoy beachside dining and music in the evening.",
        highlights: ["Optional whale watching", "Mirissa Beach", "Coconut Tree Hill viewpoint", "Beachfront dining"],
        overnight: "Mirissa"
      },
      {
        day: 3,
        title: "Koggala Lake, Cinnamon Heritage & Departure",
        location: "Mirissa to Airport",
        route: "Mirissa → Koggala → Airport",
        description: "After breakfast, take a scenic boat cruise across Koggala Lake. Visit Cinnamon Island to observe traditional cinnamon peeling and taste fresh Ceylon cinnamon. Stop at a turtle conservation centre to learn about sea turtle protection before continuing to the airport for your flight.",
        highlights: ["Koggala Lake boat cruise", "Cinnamon Island peeling experience", "Turtle conservation centre", "Airport transfer"],
        overnight: "Departure"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 4. 3C Ceylon Explorer: 3 Nights / 4 Days
  // ─────────────────────────────────────────────────────────────
  {
    id: "pkg-4",
    slug: "ceylon-explorer-4-days",
    title: "3C Ceylon Explorer: 3 Nights / 4 Days",
    subtitle: "Explore Ancient Wonders & Discover the Heart of Sri Lanka",
    tagline: "Ancient kingdoms • Authentic village life • Cultural heritage • Scenic mountains • Ceylon tea",
    brandLine: "A private cultural and highland tour with 3C Ceylon Tours",
    durationDays: 4,
    durationNights: 3,
    image: "/images/packages/main/ceylon-explorer-4-days.jpg",
    gallery: [
      "/images/packages/ceylon-explorer.jpeg",
      "/images/places/dambulla-sigiriya/dambulla3.jpg",
      "/images/places/kandy/kandy2.jpg",
      "/images/places/nuwara-eliya/nuwara1.jpg"
    ],
    style: "Highlands & Culture",
    activityLevel: "Moderate",
    travelStyle: "Private Tour",
    idealFor: "Couples, families, first-time visitors, culture lovers and nature enthusiasts.",
    destinationsCovered: ["Dambulla", "Sigiriya", "Kandy", "Nuwara Eliya"],
    highlights: [
      "Discover Dambulla Cave Temple, a UNESCO World Heritage Site",
      "Experience authentic Sri Lankan village life with bullock cart & catamaran ride",
      "Enjoy traditional village cooking and a home-cooked lunch",
      "Climb the iconic Sigiriya Rock Fortress & optional Pidurangala sunset",
      "Visit the sacred Temple of the Sacred Tooth Relic in Kandy",
      "Enjoy a traditional Kandyan cultural dance performance",
      "Explore Ramboda Falls and spectacular hill-country landscapes",
      "Discover Ceylon tea through a working plantation, factory tour & tea tasting",
      "Experience the colonial charm of Nuwara Eliya ('Little England')",
      "Visit the sacred Seetha Amman Temple associated with the Ramayana"
    ],
    overview: "Discover the diversity of Sri Lanka on a four-day journey through its cultural heartland and spectacular hill country. Explore ancient rock fortresses, experience traditional village life, discover sacred Buddhist landmarks and travel through lush tea plantations into the cool, misty landscapes of Nuwara Eliya.",
    inclusions: [
      "Private luxury AC vehicle with licensed chauffeur-guide",
      "Airport pick-up and return transfers",
      "Village tour with bullock cart, catamaran ride & authentic home lunch",
      "Ceylon tea factory visit and tasting experience",
      "All driver accommodation, highway tolls and parking fees",
      "24/7 dedicated traveler concierge support"
    ],
    exclusions: [
      "Monument and site entrance fees",
      "Personal expenses, optional activities and gratuities",
      "International flights and visa"
    ],
    faqs: [
      {
        question: "What clothing should I pack for Nuwara Eliya?",
        answer: "Nuwara Eliya is in the high central mountains (1,868m above sea level) with temperatures between 12°C and 20°C. We recommend packing a light jacket or sweater for the evenings."
      }
    ],
    featured: false,
    itinerary: [
      {
        day: 1,
        title: "Ancient Dambulla & Traditional Village Life",
        location: "Sigiriya",
        route: "Airport → Dambulla → Sigiriya",
        description: "Arrive at Bandaranaike International Airport, meet your private chauffeur-guide, and head to the Cultural Triangle. Visit the historic Dambulla Cave Temple. In Sigiriya, immerse yourself in rural traditions with a bullock cart ride, catamaran ride across a lotus lake, village cooking demo, and freshly prepared local lunch. In the evening, optionally climb Pidurangala Rock for sunset.",
        highlights: ["Dambulla Cave Temple", "Bullock cart & catamaran ride", "Village home lunch", "Pidurangala sunset (optional)"],
        overnight: "Sigiriya"
      },
      {
        day: 2,
        title: "Sigiriya Rock Fortress & Cultural Kandy",
        location: "Kandy",
        route: "Sigiriya → Kandy",
        description: "Early morning climb of the world-famous Sigiriya Rock Fortress. Explore the summit ruins and world-renowned 5th-century frescoes. Journey to Kandy, visit the sacred Temple of the Tooth Relic, attend an evening Kandyan cultural dance show, and take a stroll along Kandy Lake.",
        highlights: ["Sigiriya Lion Rock Fortress", "Temple of the Tooth Relic", "Kandyan cultural dance performance", "Kandy Lake walk"],
        overnight: "Kandy"
      },
      {
        day: 3,
        title: "Ramboda Falls & The Tea Country of Nuwara Eliya",
        location: "Nuwara Eliya",
        route: "Kandy → Ramboda → Nuwara Eliya",
        description: "Ascend into the central highlands via winding mountain passes. Admire roaring Ramboda Falls. Tour an authentic working Ceylon tea plantation and factory, learning how tea is harvested and crafted, followed by an aromatic tasting. Check in to Nuwara Eliya, visit the colonial Red Post Office and Gregory Lake.",
        highlights: ["Scenic highland drive", "Ramboda Falls", "Ceylon tea plantation & tasting", "Nuwara Eliya colonial town & Gregory Lake"],
        overnight: "Nuwara Eliya"
      },
      {
        day: 4,
        title: "Seetha Amman Temple & Departure",
        location: "Nuwara Eliya to Airport",
        route: "Nuwara Eliya → Airport",
        description: "Visit the sacred Seetha Amman Temple, a historic Hindu temple nestled amid highland pines and associated with the ancient Ramayana legend. Journey comfortably down through scenic mountain landscapes to Bandaranaike International Airport for your flight.",
        highlights: ["Seetha Amman Temple", "Scenic mountain views", "Airport transfer"],
        overnight: "Departure"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 5. 3C Ceylon Grand Discovery: 7 Nights / 8 Days
  // ─────────────────────────────────────────────────────────────
  {
    id: "pkg-5",
    slug: "ceylon-grand-discovery-8-days",
    title: "3C Ceylon Grand Discovery: 7 Nights / 8 Days",
    subtitle: "Discover Ancient Wonders, Scenic Mountains, Wildlife & Tropical Beaches",
    tagline: "Sigiriya • Dambulla • Kandy • Nuwara Eliya • Scenic Train • Ella • Yala Safari • Mirissa • Galle Fort",
    brandLine: "A private signature journey with 3C Ceylon Tours",
    durationDays: 8,
    durationNights: 7,
    image: "/images/packages/main/ceylon-grand-discovery-8-days.jpg",
    gallery: [
      "/images/hero/jungle-curve-blue-train-adventure.png",
      "/images/places/dambulla-sigiriya/dambulla1.jpg",
      "/images/places/ella/ella2.jpg",
      "/images/places/yala/yala1.jpg",
      "/images/places/galle/galle2.jpg"
    ],
    style: "Cultural & Highlights",
    activityLevel: "Moderate",
    travelStyle: "Private Tour",
    idealFor: "Couples, families, and travelers wanting the comprehensive all-in-one quintessential Sri Lanka adventure.",
    destinationsCovered: ["Sigiriya", "Dambulla", "Kandy", "Nuwara Eliya", "Ella", "Yala", "Mirissa", "Galle", "Weligama"],
    highlights: [
      "Explore two UNESCO World Heritage Sites in Sigiriya and Dambulla",
      "Authentic Sri Lankan village life, bullock cart, catamaran & village lunch",
      "Panoramic sunset views from Pidurangala Rock",
      "Temple of the Tooth Relic, gem museum and Kandyan cultural dance in Kandy",
      "Ramboda Falls, Ceylon tea plantation tour and colonial Nuwara Eliya",
      "Scenic hill country train journey from Nanu Oya to Ella",
      "Nine Arch Bridge, Little Adam's Peak & Ravana Falls in Ella",
      "Buduruwagala ancient rock carvings",
      "Exciting wildlife safari in Yala or Udawalawe National Park",
      "Coconut Tree Hill, Mirissa Beach & UNESCO Galle Dutch Fort ramparts"
    ],
    overview: "Experience the incredible diversity of Sri Lanka on an unforgettable eight-day journey with 3C Ceylon Tours. Discover ancient kingdoms, immerse yourself in authentic village life, explore sacred temples, travel through misty tea plantations, and enjoy one of the world's most scenic train journeys. From the breathtaking views of Sigiriya and the green hills of Ella to an exciting wildlife safari and the golden beaches of the southern coast, this journey brings together Sri Lanka's most memorable experiences.",
    inclusions: [
      "Private luxury AC vehicle with licensed professional chauffeur-guide",
      "Airport meet & greet with return transfers",
      "Village experience with catamaran, bullock cart and traditional lunch",
      "Scenic train tickets from Nanu Oya to Ella (subject to availability)",
      "All driver lodging, highway tolls, parking and fuel",
      "24/7 dedicated traveler concierge support"
    ],
    exclusions: [
      "Entrance fees to monuments, temples and national parks",
      "4x4 safari jeep and park guide fees",
      "Optional adventure activities and whale watching",
      "Personal expenses and gratuities"
    ],
    faqs: [
      {
        question: "Can we choose between Yala and Udawalawe for the safari?",
        answer: "Yes! Yala is world-renowned for Sri Lankan leopards, sloth bears, and elephants, while Udawalawe guarantees massive herds of wild elephants in open savannah."
      }
    ],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Welcome to Sri Lanka | Sigiriya",
        location: "Sigiriya",
        route: "Airport → Sigiriya",
        description: "Ayubowan! Welcome to Sri Lanka. Meet your private chauffeur-guide at Bandaranaike International Airport. Journey towards Sigiriya in the Cultural Triangle. Enjoy an authentic village tour with bullock cart ride, catamaran ride across a lake, local cooking demo, and your first traditional Sri Lankan lunch in a village home. Later, climb Pidurangala Rock for sunset views of Sigiriya Lion Rock.",
        highlights: ["Warm airport welcome", "Traditional village experience & lunch", "Pidurangala sunset panorama"],
        overnight: "Sigiriya"
      },
      {
        day: 2,
        title: "Sigiriya & Dambulla",
        location: "Sigiriya",
        route: "Sigiriya → Dambulla → Sigiriya",
        description: "Early morning ascent to the top of Sigiriya Lion Rock Fortress, exploring the 5th-century royal citadel, water gardens and world-famous frescoes. Continue to Dambulla to tour the sacred Dambulla Cave Temple with its hundreds of Buddha statues and murals. In the afternoon, enjoy a tranquil kayaking experience on a lake near Sigiriya.",
        highlights: ["Sigiriya Lion Rock Fortress", "Dambulla Cave Temple", "Scenic lake kayaking"],
        overnight: "Sigiriya"
      },
      {
        day: 3,
        title: "Sigiriya to Kandy",
        location: "Kandy",
        route: "Sigiriya → Kandy",
        description: "Travel towards Kandy, Sri Lanka's historic hill capital. Visit a traditional gem museum to learn about Ceylon sapphires. Take in panoramic vistas from a scenic viewpoint, stroll around Kandy Lake, and attend an evening Kandyan cultural dance show with fire walking.",
        highlights: ["Scenic drive to Kandy", "Gem museum & lapidary", "Kandy viewpoint & lake walk", "Kandyan cultural dance"],
        overnight: "Kandy"
      },
      {
        day: 4,
        title: "Kandy to Nuwara Eliya",
        location: "Nuwara Eliya",
        route: "Kandy → Ramboda → Nuwara Eliya",
        description: "Visit the sacred Temple of the Tooth Relic in Kandy. Ascend into the central highlands, stopping at scenic Ramboda Falls. Tour a working tea plantation and tea factory, discover Ceylon tea processing, and enjoy an aromatic tea tasting. In Nuwara Eliya, visit the colonial post office and stroll around Gregory Lake.",
        highlights: ["Temple of the Tooth Relic", "Ramboda Falls", "Tea factory tour & tasting", "Nuwara Eliya & Gregory Lake"],
        overnight: "Nuwara Eliya"
      },
      {
        day: 5,
        title: "Nuwara Eliya to Ella",
        location: "Ella",
        route: "Nanu Oya → Scenic Train → Ella",
        description: "Board the world-famous scenic train from Nanu Oya to Ella through emerald tea plantations and mountain tunnels (luggage transported separately by your vehicle). Meet your chauffeur at Ella station. Visit the iconic Nine Arch Bridge and hike Little Adam's Peak. In the evening, explore Ella town's vibrant cafés.",
        highlights: ["Scenic train journey to Ella", "Nine Arch Bridge", "Little Adam's Peak hike", "Ella town nightlife"],
        overnight: "Ella"
      },
      {
        day: 6,
        title: "Ella to the Southern Coast",
        location: "Mirissa",
        route: "Ella → Ravana Falls → Buduruwagala → Wildlife Safari → Mirissa",
        description: "Descend from the highlands, stopping at Ravana Falls and the ancient 10th-century Buduruwagala rock-carved Buddha sculptures. Proceed to an afternoon 4x4 wildlife safari in Yala National Park (famous for leopards and elephants) or Udawalawe National Park. Afterward, drive to Mirissa on the southern coast.",
        highlights: ["Ravana Falls", "Buduruwagala rock carvings", "Yala or Udawalawe 4x4 safari", "Mirissa arrival"],
        overnight: "Mirissa"
      },
      {
        day: 7,
        title: "Mirissa to Galle",
        location: "Galle",
        route: "Mirissa → Coconut Tree Hill → Galle Fort",
        description: "Optional early morning whale-watching cruise from Mirissa. Visit the photogenic Coconut Tree Hill overlooking the Indian Ocean. In the afternoon, travel to Galle and explore the UNESCO World Heritage Galle Dutch Fort, including the lighthouse, ramparts, colonial clock tower, boutique shops, and a sunset dinner inside the fort.",
        highlights: ["Optional whale watching", "Coconut Tree Hill", "Galle Dutch Fort ramparts & lighthouse", "Sunset dinner in the fort"],
        overnight: "Galle"
      },
      {
        day: 8,
        title: "Weligama & Departure",
        location: "Weligama to Airport",
        route: "Weligama → Airport",
        description: "Enjoy breakfast overlooking the coast. If flight permits, visit Weligama Beach to observe surfers and stilt fishing traditions. Your private chauffeur-guide transfers you comfortably along the Southern Expressway to Bandaranaike International Airport for your departure flight.",
        highlights: ["Weligama Beach", "Scenic coastal memories", "Comfortable airport transfer"],
        overnight: "Departure"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 6. TOUR PACKAGE 06 – 3C Ceylon Wild Escape: 4 Nights / 5 Days
  // ─────────────────────────────────────────────────────────────
  {
    id: "pkg-6",
    slug: "ceylon-wild-escape-5-days",
    title: "3C Ceylon Wild Escape: 4 Nights / 5 Days",
    subtitle: "Wildlife Adventures, Misty Mountains, Waterfall Hikes, Tropical Beaches & Colonial Heritage",
    tagline: "Yala National Park leopard safari • Ella mountains • Diyaluma Waterfall pools • Udawalawe elephants • Mirissa & Galle Fort",
    brandLine: "A private adventure with 3C Ceylon Tours",
    durationDays: 5,
    durationNights: 4,
    image: "/images/packages/main/ceylon-wild-escape-5-days.jpg",
    gallery: [
      "/images/leopard-portraits-in-the-forest.png",
      "/images/places/yala/yala2.jpg",
      "/images/places/ella/ella1.jpg",
      "/images/places/mirissa/mirissa1.jpg",
      "/images/places/galle/galle1.jpg"
    ],
    style: "Wildlife & Safari",
    activityLevel: "Active",
    travelStyle: "Private Tour",
    idealFor: "Wildlife lovers, adventure seekers, couples, and photographers wanting Sri Lanka's wildest nature and southern beaches.",
    destinationsCovered: ["Yala", "Tissamaharama", "Ella", "Udawalawe", "Mirissa", "Galle", "Koggala", "Weligama", "Ahangama"],
    highlights: [
      "Exciting afternoon 4x4 safari in Yala National Park for leopards, elephants & bears",
      "Visit historic Tissamaharama Raja Maha Viharaya",
      "Hike Little Adam's Peak for panoramic views across Ella Gap",
      "Visit Ravana Falls and hike to upper natural pools of spectacular Diyaluma Falls",
      "Afternoon safari in Udawalawe National Park (famous for wild elephant herds)",
      "Optional seasonal early morning whale-watching excursion in Mirissa",
      "Iconic photo stop at Coconut Tree Hill",
      "Turtle conservation centre & UNESCO Galle Fort exploration at sunset",
      "Scenic boat cruise across Koggala Lake & visit to Cinnamon Island"
    ],
    overview: "Discover the wild and wonderful side of Sri Lanka on an unforgettable five-day adventure. From the wildlife-rich landscapes of Yala to the breathtaking mountain views of Ella, the spectacular Diyaluma Waterfall, and the golden beaches of Mirissa, this journey combines nature, adventure, culture, and coastal relaxation.",
    inclusions: [
      "Private luxury AC vehicle with licensed professional chauffeur-guide",
      "Airport meet & greet with return transfer",
      "Guided waterfall hike to Diyaluma Falls",
      "Koggala Lake boat cruise",
      "All fuel, highway tolls, parking and driver accommodation",
      "24/7 dedicated traveler concierge support"
    ],
    exclusions: [
      "National park entrance fees and 4x4 safari jeep hire",
      "Optional whale watching and adventure park activities",
      "Meals, beverages and personal expenses"
    ],
    faqs: [
      {
        question: "Can we swim at Diyaluma Falls?",
        answer: "Yes, there are natural rock pools at the upper falls where swimming is possible during safe weather conditions under the supervision of your guide."
      }
    ],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrival & Wildlife Adventure in Yala",
        location: "Yala",
        route: "Airport → Yala National Park",
        description: "Warm welcome at Bandaranaike International Airport by your private chauffeur-guide. Journey towards Yala in the southern dry zone. Check in to your hotel and set off on an exciting afternoon 4x4 safari in Yala National Park, renowned for having one of the highest leopard densities in the world, wild elephants, sloth bears, spotted deer and crocodiles.",
        highlights: ["Airport welcome", "Scenic drive to Yala", "Afternoon Yala 4x4 leopard safari"],
        overnight: "Yala"
      },
      {
        day: 2,
        title: "Sacred Heritage & The Adventure Capital of Ella",
        location: "Ella",
        route: "Yala → Tissamaharama → Ella",
        description: "Optional dawn safari in Yala for more wildlife sightings. Visit the historic Tissamaharama Raja Maha Viharaya stupa. Travel up through scenic mountain passes into Ella. Hike Little Adam's Peak for panoramic vistas, with optional ziplining at Flying Ravana Adventure Park. Spend the evening enjoying Ella's lively café culture.",
        highlights: ["Tissamaharama Temple", "Scenic mountain drive", "Little Adam's Peak hike", "Ella town cafés"],
        overnight: "Ella"
      },
      {
        day: 3,
        title: "Waterfall Wonders & Journey to Mirissa",
        location: "Mirissa",
        route: "Ella → Ravana Falls → Diyaluma Falls → Udawalawe → Mirissa",
        description: "Visit roaring Ravana Falls, then proceed to Diyaluma Falls (Sri Lanka's 2nd highest waterfall) for a guided hike to the upper natural rock pools. Continue to Udawalawe for an afternoon elephant safari in Udawalawe National Park. Drive to Mirissa on the southern coast for dinner beside the Indian Ocean.",
        highlights: ["Ravana Falls", "Diyaluma Falls upper pools hike", "Udawalawe elephant safari", "Mirissa beachfront dinner"],
        overnight: "Mirissa"
      },
      {
        day: 4,
        title: "Ocean Experiences & The Colonial Charm of Galle",
        location: "Mirissa & Galle",
        route: "Mirissa → Galle → Mirissa",
        description: "Optional early morning whale watching in Mirissa. Relax on Mirissa Beach and visit Coconut Tree Hill. Visit a sea turtle hatchery and conservation centre. Explore UNESCO World Heritage Galle Fort, stroll the ramparts, admire colonial architecture, and celebrate with a farewell dinner inside Galle Fort.",
        highlights: ["Optional whale watching", "Coconut Tree Hill", "Turtle conservation centre", "Galle Fort sunset & dinner"],
        overnight: "Mirissa"
      },
      {
        day: 5,
        title: "Lagoon Discovery & Departure",
        location: "Mirissa to Airport",
        route: "Mirissa → Koggala → Weligama → Ahangama → Airport",
        description: "Enjoy a morning boat cruise across Koggala Lake, visiting Cinnamon Island and birdwatching spots. Explore Weligama Beach and the trendy coastal cafés of Ahangama. In the afternoon, transfer comfortably along the Southern Expressway to Bandaranaike International Airport for departure.",
        highlights: ["Koggala Lake boat cruise & Cinnamon Island", "Weligama & Ahangama coastal vibe", "Airport transfer"],
        overnight: "Departure"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 7. TOUR PACKAGE 07 – 3C Ceylon Hill Country Journey: 7 Nights / 8 Days
  // ─────────────────────────────────────────────────────────────
  {
    id: "pkg-7",
    slug: "ceylon-hill-country-journey-8-days",
    title: "3C Ceylon Hill Country Journey: 7 Nights / 8 Days",
    subtitle: "Ancient Heritage, Misty Mountains, Ceylon Tea, Scenic Train Journeys & Waterfall Adventures",
    tagline: "Kandy • Peradeniya Gardens • Ramboda Falls • Nuwara Eliya • Horton Plains World's End • Scenic Train • Ella • Diyaluma Falls • Udawalawe",
    brandLine: "A private highland journey with 3C Ceylon Tours",
    durationDays: 8,
    durationNights: 7,
    image: "/images/packages/main/ceylon-hill-country-journey-8-days.jpg",
    gallery: [
      "/images/misty-valleys.png",
      "/images/places/kandy/kandy1.jpg",
      "/images/places/nuwara-eliya/nuwara2.jpg",
      "/images/places/ella/ella2.jpg",
      "/images/places/yala/yala3.jpg"
    ],
    style: "Highlands & Culture",
    activityLevel: "Active",
    travelStyle: "Private Tour",
    idealFor: "Hikers, nature lovers, photographers and travelers seeking cool climates, tea estates, cloud forests and mountain vistas.",
    destinationsCovered: ["Kandy", "Peradeniya", "Ramboda", "Nuwara Eliya", "Horton Plains", "Ella", "Diyaluma Falls", "Udawalawe"],
    highlights: [
      "Visit the sacred Temple of the Tooth Relic & Royal Botanical Gardens at Peradeniya",
      "Experience a traditional Kandyan cultural dance show",
      "Drive through breathtaking tea country to Ramboda Falls",
      "Tour an authentic working Ceylon tea plantation and factory with tea tasting",
      "Colonial charm of Nuwara Eliya ('Little England') and Gregory Lake",
      "Morning trek through Horton Plains National Park to the dramatic World's End cliff",
      "Scenic hill-country train ride from Nanu Oya to Ella",
      "Iconic Nine Arch Bridge, Little Adam's Peak hike and Ravana Falls in Ella",
      "Spectacular Diyaluma Falls hike and upper rock pools",
      "Afternoon 4x4 safari in Udawalawe National Park (famous for wild elephants)"
    ],
    overview: "Discover the breathtaking beauty of Sri Lanka on an unforgettable eight-day journey through its cultural heartland and spectacular hill country. From the sacred temples of Kandy to the lush tea plantations of Nuwara Eliya, the dramatic landscapes of Horton Plains, and the charming mountain town of Ella, this tour brings you closer to the natural beauty and authentic experiences of Sri Lanka.",
    inclusions: [
      "Private luxury AC vehicle with licensed professional chauffeur-guide",
      "Airport pick-up and drop-off transfers",
      "Scenic train tickets from Nanu Oya to Ella (subject to availability)",
      "Ceylon tea factory visit and tasting",
      "All driver lodging, highway tolls, parking and fuel",
      "24/7 dedicated traveler concierge support"
    ],
    exclusions: [
      "National park and temple entrance fees (Horton Plains, Udawalawe, Temple of Tooth)",
      "Udawalawe 4x4 safari jeep hire",
      "Personal expenses, meals, drinks and gratuities"
    ],
    faqs: [
      {
        question: "How difficult is the Horton Plains World's End trek?",
        answer: "The circular trek is approximately 9.5 km (3-4 hours) over gentle rolling terrain and cloud forest trails. An early start (6:00 AM) is recommended to view the escarpment before mist rolls in."
      }
    ],
    featured: false,
    itinerary: [
      {
        day: 1,
        title: "Arrival & Journey to Kandy",
        location: "Kandy",
        route: "Airport → Kandy",
        description: "Warm welcome at the airport by your private chauffeur-guide. Begin your scenic drive towards Kandy, the historic hill capital. Check in to your hotel, visit Kandy Lake, explore the lively city centre, and soak in the cultural atmosphere.",
        highlights: ["Airport welcome", "Scenic drive to Kandy", "Kandy Lake & city walk"],
        overnight: "Kandy"
      },
      {
        day: 2,
        title: "Kandy Culture & Heritage",
        location: "Kandy",
        route: "Kandy & Peradeniya",
        description: "Visit the sacred Temple of the Sacred Tooth Relic. Explore the expansive Peradeniya Royal Botanical Gardens with giant bamboo and royal palms. Visit a traditional gem museum or handicraft centre, and enjoy an evening Kandyan cultural dance performance.",
        highlights: ["Temple of the Tooth Relic", "Peradeniya Royal Botanical Gardens", "Gem museum", "Kandyan cultural dance"],
        overnight: "Kandy"
      },
      {
        day: 3,
        title: "Scenic Highlands & Tea Country",
        location: "Nuwara Eliya",
        route: "Kandy → Ramboda → Nuwara Eliya",
        description: "Ascend through winding mountain roads surrounded by rolling tea plantations. Stop at Ramboda Falls for photographs. Visit a Ceylon tea plantation and working factory to observe harvesting and processing, followed by tea tasting. Arrive in Nuwara Eliya and visit Gregory Lake.",
        highlights: ["Ramboda Falls", "Ceylon tea factory tour & tasting", "Nuwara Eliya colonial town", "Gregory Lake"],
        overnight: "Nuwara Eliya"
      },
      {
        day: 4,
        title: "Horton Plains & Nature Exploration",
        location: "Nuwara Eliya",
        route: "Nuwara Eliya → Horton Plains → Nuwara Eliya",
        description: "Early morning expedition to Horton Plains National Park. Trek through montane grasslands and cloud forests to World's End (a sheer 880m precipice) and Baker's Falls. Return to Nuwara Eliya for a relaxed afternoon exploring the town and Victoria Park.",
        highlights: ["Horton Plains trek", "World's End sheer cliff viewpoint", "Baker's Falls", "Afternoon in Nuwara Eliya"],
        overnight: "Nuwara Eliya"
      },
      {
        day: 5,
        title: "Hill-Country Train Journey to Ella",
        location: "Ella",
        route: "Nuwara Eliya → Nanu Oya → Ella",
        description: "Transfer to Nanu Oya Railway Station for your scenic train journey to Ella through mist-shrouded valleys and tea estates. Your chauffeur transports your luggage by road. Meet in Ella, transfer to your hotel, and spend the evening enjoying Ella's lively café culture.",
        highlights: ["Nanu Oya to Ella scenic train journey", "Spectacular mountain views", "Ella café and dining scene"],
        overnight: "Ella"
      },
      {
        day: 6,
        title: "Ella's Mountains & Adventure Experiences",
        location: "Ella",
        route: "Explore Ella",
        description: "Visit the iconic colonial-era Nine Arch Bridge nestled in lush jungle. Hike Little Adam's Peak for stunning 360-degree mountain views. Visit cascading Ravana Falls. Optional adventure activities at Flying Ravana Adventure Park. Relax in Ella town in the evening.",
        highlights: ["Nine Arch Bridge", "Little Adam's Peak hike", "Ravana Falls", "Optional Flying Ravana zipline"],
        overnight: "Ella"
      },
      {
        day: 7,
        title: "Waterfalls & The Journey to Udawalawe",
        location: "Udawalawe",
        route: "Ella → Diyaluma Falls → Udawalawe",
        description: "Drive to spectacular Diyaluma Falls (Sri Lanka's 2nd highest waterfall) with an optional hike to the upper natural rock pools. Continue towards Udawalawe in the southern plains. Embark on an afternoon 4x4 safari in Udawalawe National Park, renowned for its large elephant herds and rich birdlife.",
        highlights: ["Diyaluma Falls upper pools", "Scenic countryside drive", "Udawalawe 4x4 elephant safari"],
        overnight: "Udawalawe"
      },
      {
        day: 8,
        title: "Elephant Country & Departure",
        location: "Udawalawe to Airport",
        route: "Udawalawe → Airport",
        description: "Enjoy breakfast and check out. Visit an ethical elephant observation centre if desired before your private transfer along the Southern Expressway to Bandaranaike International Airport for your departure flight.",
        highlights: ["Udawalawe elephant country", "Scenic drive to airport", "Airport departure transfer"],
        overnight: "Departure"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 8. TOUR PACKAGE 08 – 3C Ceylon Family Adventure: 10 Nights / 11 Days
  // ─────────────────────────────────────────────────────────────
  {
    id: "pkg-8",
    slug: "ceylon-family-adventure-11-days",
    title: "3C Ceylon Family Adventure: 10 Nights / 11 Days",
    subtitle: "Family Fun, Wildlife Encounters, Cultural Discoveries, Scenic Train Journeys & Tropical Beaches",
    tagline: "Sigiriya Lion Rock • Village cooking • Matale spice garden • Kandy temples • Nuwara Eliya tea • Scenic train • Ella adventures • Udawalawe safari • Sea turtles • Galle Fort",
    brandLine: "A private family holiday with 3C Ceylon Tours",
    durationDays: 11,
    durationNights: 10,
    image: "/images/packages/main/ceylon-family-adventure-11-days.jpg",
    gallery: [
      "/images/kandy-group-portrait.png",
      "/images/ox-cart-adventures-countryside.png",
      "/images/places/kandy/kandy2.jpg",
      "/images/places/nuwara-eliya/nuwara1.jpg",
      "/images/places/mirissa/mirissa2.jpg"
    ],
    style: "Family Adventure",
    activityLevel: "Moderate",
    travelStyle: "Private Tour",
    idealFor: "Families with kids or teens, multi-generational groups, and travelers wanting balanced fun, nature, and relaxation.",
    destinationsCovered: ["Sigiriya", "Dambulla", "Matale", "Kandy", "Peradeniya", "Nuwara Eliya", "Ella", "Udawalawe", "Southern Coast", "Galle"],
    highlights: [
      "Climb Sigiriya Lion Rock Fortress or choose easy Pidurangala viewpoint",
      "Traditional Sri Lankan village tour with bullock cart, catamaran ride & cooking demo",
      "Matale spice garden sensory experience",
      "Temple of the Tooth Relic & Kandyan cultural dance with fire walking",
      "Peradeniya Royal Botanical Gardens tree collection and bat colonies",
      "Ramboda Falls and Ceylon tea factory tour with sweet tea tasting",
      "Famous scenic train journey from Nanu Oya to Ella",
      "Nine Arch Bridge, Little Adam's Peak & Ravana Falls",
      "Thrilling elephant safari in Udawalawe National Park",
      "Sea turtle conservation hatchery and sunset at UNESCO Galle Fort ramparts"
    ],
    overview: "Discover the best of Sri Lanka together on a memorable family holiday designed for adventure, relaxation, and unforgettable experiences. Explore ancient kingdoms, experience traditional village life, discover misty mountain landscapes, enjoy a scenic train journey, and unwind on beautiful tropical beaches. With a private chauffeur-guide, flexible sightseeing, and activities for different ages, 3C Ceylon Tours helps your family experience Sri Lanka comfortably and at your own pace.",
    inclusions: [
      "Private spacious air-conditioned vehicle with family-friendly chauffeur-guide",
      "Airport meet & greet with return transfers",
      "Authentic village tour with bullock cart, boat ride & home-cooked lunch",
      "Scenic train tickets (subject to availability)",
      "Child car seat available upon advance request",
      "All driver accommodation, fuel, highway tolls and parking",
      "24/7 dedicated traveler concierge support"
    ],
    exclusions: [
      "Site and national park entrance fees",
      "Udawalawe 4x4 safari jeep hire",
      "Optional adventure park activities",
      "Meals, beverages and personal expenses"
    ],
    faqs: [
      {
        question: "Is this itinerary suitable for young children?",
        answer: "Yes, our private chauffeurs adapt the daily pace for your children's comfort. Shorter hikes (like Pidurangala or Little Adam's Peak) and flexible rest stops make it ideal for all ages."
      }
    ],
    featured: false,
    itinerary: [
      {
        day: 1,
        title: "Arrival & Journey to Sigiriya",
        location: "Sigiriya",
        route: "Airport → Sigiriya",
        description: "Warm welcome at the airport by your private family chauffeur-guide. Travel to Sigiriya through the lush countryside. Check in to your hotel and unwind by the pool surrounded by tropical nature.",
        highlights: ["Warm airport welcome", "Scenic country drive", "Relaxing family evening"],
        overnight: "Sigiriya"
      },
      {
        day: 2,
        title: "Ancient Wonders & Village Experiences",
        location: "Sigiriya",
        route: "Explore Sigiriya & Dambulla",
        description: "Climb the iconic Sigiriya Lion Rock Fortress or choose the gentler Pidurangala viewpoint depending on your children's ages. In the afternoon, enjoy a traditional village tour with bullock cart ride, catamaran ride across a lotus lake, cooking demonstration, and authentic lunch in a village home. Visit Dambulla Cave Temple if energy permits.",
        highlights: ["Sigiriya Lion Rock", "Bullock cart & catamaran ride", "Village cooking demo & lunch", "Dambulla Cave Temple"],
        overnight: "Sigiriya"
      },
      {
        day: 3,
        title: "Elephants & Cultural Kandy",
        location: "Kandy",
        route: "Sigiriya → Matale → Kandy",
        description: "Travel towards Kandy, stopping at a fragrant spice garden in Matale to discover cinnamon, cardamom and vanilla plants. In Kandy, visit the sacred Temple of the Tooth Relic, attend an evening Kandyan cultural dance show with fire-breathing performances, and stroll along Kandy Lake.",
        highlights: ["Matale spice garden", "Temple of the Tooth Relic", "Kandyan cultural dance show", "Kandy Lake"],
        overnight: "Kandy"
      },
      {
        day: 4,
        title: "Kandy Family Discovery",
        location: "Kandy",
        route: "Explore Kandy & Peradeniya",
        description: "Spend a fun family morning at the Peradeniya Royal Botanical Gardens, admiring giant bamboo, flying fox colonies and the orchid house. Visit a local handicraft or gem workshop, followed by a relaxed family afternoon around Kandy.",
        highlights: ["Peradeniya Royal Botanical Gardens", "Local handicraft workshop", "Family free time in Kandy"],
        overnight: "Kandy"
      },
      {
        day: 5,
        title: "Tea Country & Nuwara Eliya",
        location: "Nuwara Eliya",
        route: "Kandy → Ramboda → Nuwara Eliya",
        description: "Enjoy a scenic drive through emerald hills and tea plantations. Stop at Ramboda Falls for family photos. Tour a working tea factory to see how Ceylon tea is made. Arrive in cool Nuwara Eliya and enjoy Gregory Lake swan pedal boats and park walks.",
        highlights: ["Ramboda Falls", "Tea factory tour", "Gregory Lake activities", "Nuwara Eliya colonial charm"],
        overnight: "Nuwara Eliya"
      },
      {
        day: 6,
        title: "Highland Nature & Waterfalls",
        location: "Nuwara Eliya",
        route: "Discover Nuwara Eliya Region",
        description: "Morning excursion to scenic highland viewpoints or optional Horton Plains trek for families with older children. Visit Victoria Park playground and the colonial post office. Relax in the cool mountain climate.",
        highlights: ["Highland nature walks", "Victoria Park & town exploration", "Cool mountain climate"],
        overnight: "Nuwara Eliya"
      },
      {
        day: 7,
        title: "Scenic Train Journey to Ella",
        location: "Ella",
        route: "Nanu Oya → Ella",
        description: "Board the famous hill country train at Nanu Oya for a magical ride across mountain ridges, tea estates, and tunnels to Ella. Meet your chauffeur at Ella station, check in to your hotel, and relax in Ella's family-friendly cafés.",
        highlights: ["Scenic train journey to Ella", "Spectacular mountain views", "Ella café atmosphere"],
        overnight: "Ella"
      },
      {
        day: 8,
        title: "Ella Adventures & Waterfalls",
        location: "Ella",
        route: "Explore Ella",
        description: "Visit the iconic Nine Arch Bridge to watch the train pass over. Take an easy hike up Little Adam's Peak. Stop at cascading Ravana Falls. Optional family adventure activities at Flying Ravana Adventure Park. Relax in Ella town in the evening.",
        highlights: ["Nine Arch Bridge", "Little Adam's Peak hike", "Ravana Falls", "Optional Flying Ravana activities"],
        overnight: "Ella"
      },
      {
        day: 9,
        title: "Elephant Country & Journey to the South",
        location: "Southern Coast",
        route: "Ella → Udawalawe → Southern Coast",
        description: "Descend from the mountains towards Udawalawe National Park. Embark on an afternoon 4x4 safari where children can watch wild elephant families, water buffaloes, crocodiles, and colourful birds up close. Continue to your coastal beach resort.",
        highlights: ["Udawalawe 4x4 elephant safari", "Close wildlife encounters", "Southern coast beach arrival"],
        overnight: "Southern Coast"
      },
      {
        day: 10,
        title: "Beaches, Turtles & Galle Fort",
        location: "Southern Coast",
        route: "Explore Southern Coast & Galle",
        description: "Enjoy a relaxed family morning swimming and playing on golden beaches. Visit a sea turtle conservation centre to see baby turtles. In the afternoon, explore historic Galle Fort, wander cobblestone ramparts, browse ice cream shops, and watch sunset from the fort walls.",
        highlights: ["Beach relaxation", "Sea turtle conservation centre", "Galle Fort exploration", "Rampart sunset"],
        overnight: "Southern Coast"
      },
      {
        day: 11,
        title: "Departure with Wonderful Memories",
        location: "Southern Coast to Airport",
        route: "Southern Coast → Airport",
        description: "Enjoy a final tropical breakfast by the sea. Depending on your flight time, make a short stop at Weligama Bay before transferring comfortably along the Southern Expressway to Bandaranaike International Airport for your journey home.",
        highlights: ["Weligama Bay stop", "Southern expressway transfer", "Departure with lasting memories"],
        overnight: "Departure"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 9. TOUR PACKAGE 09 – 3C Ceylon Romantic Escape: 8 Nights / 9 Days
  // ─────────────────────────────────────────────────────────────
  {
    id: "pkg-9",
    slug: "ceylon-romantic-escape-9-days",
    title: "3C Ceylon Romantic Escape: 8 Nights / 9 Days",
    subtitle: "Romantic Getaways, Mountain Adventures, Wildlife Safaris, Tropical Beaches, Rainforest Exploration & Sunset Experiences",
    tagline: "Negombo seaside • Ella mountain paradise • Nine Arch Bridge • Udawalawe safari • Hiriketiya Bay • Mirissa sunsets • Weligama & Ahangama • Kanneliya Rainforest • Galle Fort",
    brandLine: "A private romantic getaway with 3C Ceylon Tours",
    durationDays: 9,
    durationNights: 8,
    image: "/images/packages/main/ceylon-romantic-escape-9-days.jpg",
    gallery: [
      "/images/romance-sigiriya.png",
      "/images/places/hirikatiya/hiriketiya1.jpg",
      "/images/places/mirissa/mirissa1.jpg",
      "/images/places/galle/galle2.jpg",
      "/images/places/ella/ella1.jpg"
    ],
    style: "Romantic Escape",
    activityLevel: "Moderate",
    travelStyle: "Private Tour",
    idealFor: "Honeymooners, couples, anniversaries, and romantic travelers wanting boutique hotels, secluded bays, nature, and candlelight dining.",
    destinationsCovered: ["Negombo", "Ella", "Udawalawe", "Hiriketiya", "Mirissa", "Weligama", "Ahangama", "Kanneliya Rainforest", "Galle"],
    highlights: [
      "Seaside welcome dinner in tropical Negombo",
      "Scenic mountain drive into the romantic hill paradise of Ella",
      "Nine Arch Bridge, Little Adam's Peak & private dinner overlooking Ella Gap",
      "Ravana Falls & afternoon 4x4 elephant safari in Udawalawe National Park",
      "Two relaxing nights at horseshoe-shaped Hiriketiya Bay & Dikwella",
      "Mirissa Beach, Coconut Tree Hill viewpoint & romantic beachfront seafood dinner",
      "Weligama Bay surfing vibe and chic bohemian cafés of Ahangama",
      "Guided nature walk through the lush tropical wilderness of Kanneliya Forest Reserve",
      "UNESCO Galle Fort cobblestone exploration, rampart sunset & candlelight farewell dinner"
    ],
    overview: "Discover the romantic side of Sri Lanka on a memorable nine-day journey designed for couples who love nature, adventure, and beautiful scenery. From the misty mountains of Ella to exciting wildlife safaris, peaceful southern beaches, and the lush tropical rainforest of Kanneliya, this journey combines relaxation with unforgettable experiences.",
    inclusions: [
      "Private luxury AC vehicle with dedicated romantic journey chauffeur-guide",
      "Airport meet & greet with return transfer",
      "Guided nature walk in Kanneliya Rainforest Reserve with local specialist guide",
      "All fuel, highway tolls, parking and driver accommodation",
      "24/7 dedicated traveler concierge support"
    ],
    exclusions: [
      "National park and rainforest entrance fees",
      "Udawalawe 4x4 safari jeep hire",
      "Optional whale watching and surfing lessons",
      "Meals, beverages and personal expenses"
    ],
    faqs: [
      {
        question: "Can special honeymoon surprises be arranged?",
        answer: "Yes! We can coordinate candlelight beachfront dinners, bed decorations, tropical flower bouquets, and boutique room upgrades throughout your trip."
      }
    ],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrival & A Warm Sri Lankan Welcome",
        location: "Negombo",
        route: "Airport → Negombo",
        description: "Ayubowan! Warm welcome at Bandaranaike International Airport by your private chauffeur-guide. Short transfer to your beachfront hotel in Negombo. Relax after your flight with a sunset beach walk and an optional romantic seaside dinner.",
        highlights: ["Warm airport welcome", "Negombo beach relaxation", "Romantic seaside dinner"],
        overnight: "Negombo"
      },
      {
        day: 2,
        title: "Scenic Journey to the Mountain Paradise of Ella",
        location: "Ella",
        route: "Negombo → Ella",
        description: "Enjoy breakfast before beginning your scenic journey towards Ella. Travel through Sri Lanka's beautiful countryside, stopping for king coconut refreshments and photographs. Arrive in Ella, check in to your boutique mountain lodge, and enjoy dinner overlooking the mist-filled valley.",
        highlights: ["Scenic countryside journey", "Mountain lodge check-in", "Ella mountain atmosphere"],
        overnight: "Ella"
      },
      {
        day: 3,
        title: "Romantic Mountain Views & Ella Adventures",
        location: "Ella",
        route: "Explore Ella",
        description: "Visit the iconic Nine Arch Bridge surrounded by lush tea hills. Hike Little Adam's Peak for panoramic views across Ella Gap. Visit picturesque Ravana Falls. Spend the evening exploring Ella's boutique cafés, ending with a romantic candlelight dinner overlooking the mountains.",
        highlights: ["Nine Arch Bridge", "Little Adam's Peak summit views", "Ravana Falls", "Romantic mountain dinner"],
        overnight: "Ella"
      },
      {
        day: 4,
        title: "Wildlife Safari & Elephant Country",
        location: "Udawalawe",
        route: "Ella → Udawalawe",
        description: "Travel down from the highlands towards Udawalawe. Embark on an exciting afternoon 4x4 safari in Udawalawe National Park to observe wild elephants, water birds, and peacocks in their open habitat. Check in to your nature resort and enjoy a tranquil evening.",
        highlights: ["Scenic mountain descent", "Udawalawe 4x4 elephant safari", "Peaceful nature resort stay"],
        overnight: "Udawalawe"
      },
      {
        day: 5,
        title: "Tropical Beaches & Hiriketiya Bay",
        location: "Hiriketiya",
        route: "Udawalawe → Hiriketiya",
        description: "Drive towards the southern coast to picturesque Hiriketiya Bay, a horseshoe-shaped turquoise cove fringed by coconut palms. Spend the afternoon swimming, lounging on the sand, or trying a beginner surf lesson. Enjoy sunset cocktails at a bohemian beachside café.",
        highlights: ["Hiriketiya horseshoe cove", "Tropical beach relaxation", "Beachfront sunset cocktails"],
        overnight: "Hiriketiya or Dikwella"
      },
      {
        day: 6,
        title: "Mirissa Beach & Romantic Coastal Experiences",
        location: "Mirissa",
        route: "Hiriketiya → Mirissa",
        description: "Travel along the scenic southern coastline to Mirissa. Visit the world-famous Coconut Tree Hill for romantic photographs. Unwind on Mirissa Beach, visit Parrot Rock, or join an optional seasonal whale watching cruise. Celebrate with a romantic beachfront seafood dinner with lanterns by the water.",
        highlights: ["Coconut Tree Hill", "Mirissa Beach relaxation", "Romantic beachfront seafood dinner"],
        overnight: "Mirissa"
      },
      {
        day: 7,
        title: "Coastal Discovery & Journey to Galle",
        location: "Galle",
        route: "Mirissa → Weligama → Ahangama → Galle",
        description: "Enjoy a relaxed morning at Mirissa Beach. Drive through Weligama Bay to observe traditional stilt fishermen and surfers. Stop in trendy Ahangama for specialty coffee at an oceanfront café. Continue to the historic coastal city of Galle and check in to your colonial hotel.",
        highlights: ["Weligama Bay", "Ahangama stylish cafés", "Galle colonial check-in"],
        overnight: "Galle"
      },
      {
        day: 8,
        title: "Kanneliya Rainforest & Galle Fort",
        location: "Galle",
        route: "Galle → Kanneliya Forest → Galle",
        description: "Morning expedition into the pristine tropical rainforest of Kanneliya Forest Reserve. Take a guided nature walk along forest streams and waterfalls, discovering endemic birds and tropical flora. Return to Galle to explore UNESCO Galle Fort, watch sunset from the ocean ramparts, and enjoy a romantic farewell dinner.",
        highlights: ["Kanneliya Rainforest guided walk", "Endemic wildlife & forest streams", "Galle Fort sunset ramparts", "Romantic farewell dinner"],
        overnight: "Galle"
      },
      {
        day: 9,
        title: "Departure with Beautiful Memories",
        location: "Galle to Airport",
        route: "Galle → Airport",
        description: "Enjoy breakfast overlooking the fort walls. Spend final moments strolling cobblestone boutiques before your private transfer along the Southern Expressway to Bandaranaike International Airport for your departure flight.",
        highlights: ["Final morning in Galle", "Expressway transfer to airport", "Departure with lasting memories"],
        overnight: "Departure"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 10. TOUR PACKAGE 10 – 3C Ceylon Northern Discovery: 7 Nights / 8 Days
  // ─────────────────────────────────────────────────────────────
  {
    id: "pkg-10",
    slug: "ceylon-northern-discovery-8-days",
    title: "3C Ceylon Northern Discovery: 7 Nights / 8 Days",
    subtitle: "Ancient Kingdoms, Authentic Village Life, Tamil Culture, Sacred Temples, Northern Islands & Local Food Experiences",
    tagline: "Sigiriya Lion Rock • Village lunch • Anuradhapura sacred city • Jaffna Peninsula • Nallur Kandaswamy Kovil • Jaffna Fort • Delft Island wild ponies",
    brandLine: "A private cultural exploration with 3C Ceylon Tours",
    durationDays: 8,
    durationNights: 7,
    image: "/images/packages/main/ceylon-northern-discovery-8-days.jpg",
    gallery: [
      "/images/packages/ceylon-northern-discovery.jpg",
      "/images/places/anuradhapura/anu1.jpg",
      "/images/places/jaffna-mannar/jaffna1.jpg",
      "/images/places/dambulla-sigiriya/dambulla1.jpg"
    ],
    style: "Northern & Cultural",
    activityLevel: "Moderate",
    travelStyle: "Private Tour",
    idealFor: "Culture enthusiasts, history lovers, intrepid travelers and foodies wanting to explore Sri Lanka's northern heritage and Tamil culture.",
    destinationsCovered: ["Sigiriya", "Dambulla", "Anuradhapura", "Jaffna", "Delft Island", "Northern Peninsula"],
    highlights: [
      "Climb the iconic Sigiriya Lion Rock Fortress or Pidurangala Rock",
      "Traditional Sri Lankan village experience with bullock cart, catamaran ride & authentic lunch",
      "Explore the ancient kingdom of Anuradhapura, sacred Jaya Sri Maha Bodhi & Ruwanwelisaya Stupa",
      "Scenic journey north crossing Elephant Pass into the Jaffna Peninsula",
      "Visit the magnificent gold-gilded Nallur Kandaswamy Kovil temple during evening pooja",
      "Explore historic Jaffna Fort, Jaffna Public Library and bustling local markets",
      "Taste authentic northern Tamil cuisine including famous Jaffna crab curry, dosai & Rio ice cream",
      "Excursion to remote Delft Island to see wild horses, coral walls & Dutch ruins",
      "Experience Sri Lanka's diverse cultural harmony across northern and central provinces"
    ],
    overview: "Discover a different side of Sri Lanka on this eight-day journey from the ancient rock fortress of Sigiriya to the historic kingdom of Anuradhapura and the vibrant northern city of Jaffna. Experience traditional village life, explore remarkable archaeological sites, discover colourful Hindu temples, taste authentic local cuisine, and enjoy the unique landscapes of Sri Lanka's northern islands.",
    inclusions: [
      "Private luxury AC vehicle with licensed professional chauffeur-guide throughout",
      "Airport pick-up and drop-off transfers",
      "Village tour with bullock cart, catamaran ride & traditional lunch",
      "All driver accommodation, fuel, highway tolls and parking",
      "24/7 dedicated traveler concierge support"
    ],
    exclusions: [
      "Site, monument and temple entrance fees",
      "Delft Island ferry and local transport fees",
      "Meals, beverages and personal expenses"
    ],
    faqs: [
      {
        question: "What should I wear when visiting Hindu temples in Jaffna?",
        answer: "Visitors should dress modestly with shoulders and knees covered. At Nallur Kandaswamy Kovil, men are traditionally required to remove their shirts before entering the inner sanctum."
      }
    ],
    featured: false,
    itinerary: [
      {
        day: 1,
        title: "A Warm Welcome to Sri Lanka",
        location: "Sigiriya",
        route: "Airport → Sigiriya",
        description: "Receive a warm Sri Lankan welcome at Bandaranaike International Airport from your private chauffeur-guide. Travel through beautiful countryside into the Cultural Triangle. Check in to your hotel and enjoy a tranquil evening in nature.",
        highlights: ["Airport welcome", "Scenic countryside drive", "Peaceful Cultural Triangle evening"],
        overnight: "Sigiriya"
      },
      {
        day: 2,
        title: "Sigiriya Heritage & Authentic Village Experience",
        location: "Sigiriya",
        route: "Explore Sigiriya & Dambulla",
        description: "Climb the magnificent Sigiriya Lion Rock Fortress or choose Pidurangala Rock for panoramic views. Experience traditional village life with a bullock cart ride, catamaran ride across a lotus lake, cooking demonstration, and authentic village lunch. Optional visit to Dambulla Cave Temple.",
        highlights: ["Sigiriya Lion Rock Fortress", "Bullock cart & catamaran ride", "Authentic village home lunch", "Optional Dambulla Cave Temple"],
        overnight: "Sigiriya"
      },
      {
        day: 3,
        title: "Ancient Anuradhapura Kingdom",
        location: "Anuradhapura",
        route: "Sigiriya → Anuradhapura",
        description: "Travel to Anuradhapura, Sri Lanka's first ancient royal capital. Visit the sacred Jaya Sri Maha Bodhi (the oldest recorded human-planted tree in the world, planted in 288 BC). Marvel at the colossal white Ruwanwelisaya Stupa, ancient moonstones, and historic reservoirs.",
        highlights: ["Sacred Jaya Sri Maha Bodhi", "Ruwanwelisaya Stupa", "Ancient city ruins & stone carvings"],
        overnight: "Anuradhapura"
      },
      {
        day: 4,
        title: "Journey to the Northern Capital",
        location: "Jaffna",
        route: "Anuradhapura → Jaffna",
        description: "Drive north through changing landscapes, traversing the historic Elephant Pass into the Jaffna Peninsula. Check in to your Jaffna hotel. In the evening, visit the grand Nallur Kandaswamy Kovil temple to witness the vibrant evening pooja ceremonies with bell ringing, drumming and holy fires.",
        highlights: ["Drive through Elephant Pass", "Arrival in Jaffna Peninsula", "Nallur Kandaswamy Kovil evening pooja"],
        overnight: "Jaffna"
      },
      {
        day: 5,
        title: "Jaffna Culture, History & Local Flavours",
        location: "Jaffna",
        route: "Explore Jaffna",
        description: "Tour historic Jaffna Fort built by the Portuguese and expanded by the Dutch. Visit the iconic Jaffna Public Library, local spice markets, and fruit stalls. Savor world-famous Jaffna crab curry, crispy dosai, and sweet treats at iconic Rio Ice Cream parlour.",
        highlights: ["Jaffna Dutch Fort", "Jaffna Public Library", "Authentic Jaffna crab curry experience", "Rio Ice Cream"],
        overnight: "Jaffna"
      },
      {
        day: 6,
        title: "Jaffna Island Adventure",
        location: "Jaffna",
        route: "Jaffna → Delft Island (Optional) → Jaffna",
        description: "Take an exciting morning ferry excursion to remote Delft Island (Neduntheevu). Explore this unique island built of coral stone, see the wild descendants of Dutch ponies roaming free, view the giant baobab tree, and discover Dutch fort ruins before returning to Jaffna.",
        highlights: ["Delft Island ferry ride", "Wild ponies of Delft", "Coral-stone architecture & baobab tree", "Island ruins"],
        overnight: "Jaffna",
        notes: "Delft Island excursion depends on ferry schedules and sea conditions."
      },
      {
        day: 7,
        title: "Return Through the Northern Countryside",
        location: "Anuradhapura",
        route: "Jaffna → Anuradhapura",
        description: "After breakfast, begin your scenic journey south through the northern countryside. Enjoy scenic stops for fresh palmyrah fruit and tea. Arrive in Anuradhapura, check in to your hotel, and relax before your departure day.",
        highlights: ["Scenic return drive through northern plains", "Palmyrah fruit & tea stops", "Relaxing evening in Anuradhapura"],
        overnight: "Anuradhapura"
      },
      {
        day: 8,
        title: "Departure with Wonderful Memories",
        location: "Anuradhapura to Airport",
        route: "Anuradhapura → Airport",
        description: "Enjoy breakfast and check out from your hotel. Travel comfortably along the highway to Bandaranaike International Airport for your departure flight, carrying unforgettable memories of ancient kingdoms, northern heritage, and sacred temples.",
        highlights: ["Comfortable airport highway transfer", "Departure with lasting memories"],
        overnight: "Departure"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 11. TOUR PACKAGE 11 – 3C Ceylon East to South Adventure: 14 Nights / 15 Days
  // ─────────────────────────────────────────────────────────────
  {
    id: "pkg-11",
    slug: "ceylon-east-to-south-adventure-15-days",
    title: "3C Ceylon East to South Adventure: 14 Nights / 15 Days",
    subtitle: "Ancient Kingdoms, East Coast Beaches, Arugam Bay Surf, Mountain Adventures, Nightlife & Southern Coastline",
    tagline: "Sigiriya • Polonnaruwa • Pasikudah turquoise beaches • Trincomalee Koneswaram Temple • Pigeon Island • Arugam Bay surf & nightlife • Ella mountains • Diyaluma Falls • Mirissa • Galle Fort",
    brandLine: "A private epic expedition with 3C Ceylon Tours",
    durationDays: 15,
    durationNights: 14,
    image: "/images/packages/main/ceylon-east-to-south-adventure-15-days.jpg",
    gallery: [
      "/images/packages/ceylon-east-to-south-adventure.jpg",
      "/images/places/ella/ella2.jpg",
      "/images/places/mirissa/mirissa1.jpg",
      "/images/places/galle/galle1.jpg"
    ],
    style: "Adventure & Nature",
    activityLevel: "Active",
    travelStyle: "Private Tour",
    idealFor: "Adventurers, surfers, beach lovers, road trippers and travelers wanting an epic 2-week loop of culture, east coast beaches, hill country and the south.",
    destinationsCovered: ["Sigiriya", "Polonnaruwa", "Pasikudah", "Trincomalee", "Arugam Bay", "Ella", "Diyaluma Falls", "Mirissa", "Weligama", "Ahangama", "Galle"],
    highlights: [
      "Sigiriya Lion Rock Fortress and authentic Sri Lankan village tour with home lunch",
      "Ancient ruins of UNESCO World Heritage Polonnaruwa kingdom",
      "Two relaxing days on the calm turquoise waters of Pasikudah Beach",
      "Trincomalee's clifftop Koneswaram Temple, Fort Frederick & Nilaveli Beach",
      "Optional boat trip to Pigeon Island National Park for coral reef snorkeling",
      "Three vibrant days in world-famous surf mecca Arugam Bay with lagoon safari & nightlife",
      "Spectacular journey into Ella: Nine Arch Bridge, Little Adam's Peak & Ravana Falls",
      "Hike to the upper pools of magnificent Diyaluma Falls",
      "Mirissa Beach, Coconut Tree Hill, Parrot Rock & Weligama Bay",
      "Trendy café culture in Ahangama and sunset on UNESCO Galle Fort ramparts"
    ],
    overview: "Discover the best of Sri Lanka on an unforgettable fifteen-day journey, starting with the ancient wonders of Sigiriya and continuing to the beautiful east coast. Enjoy tropical beaches, surfing, lagoon adventures, and authentic local experiences before travelling to the misty mountains of Ella for scenic hikes, waterfalls, cafés, and nightlife. Finish your adventure along the spectacular southern coastline, exploring Mirissa, Weligama, Ahangama, and historic Galle before departure.",
    inclusions: [
      "Private luxury AC vehicle with licensed professional chauffeur-guide for all 15 days",
      "Airport meet & greet with return transfer",
      "Village tour with bullock cart, catamaran ride & traditional lunch",
      "All driver lodging, highway tolls, parking and fuel",
      "24/7 dedicated traveler concierge support"
    ],
    exclusions: [
      "Entrance fees to monuments, temples and national parks",
      "Pigeon Island boat and park fees, surf lessons, lagoon safari",
      "Meals, beverages and personal expenses"
    ],
    faqs: [
      {
        question: "When is the best season for the East Coast and Arugam Bay?",
        answer: "The east coast (Pasikudah, Trincomalee, Arugam Bay) enjoys its prime dry, sunny weather and world-class surfing waves from April to October."
      }
    ],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrival & Journey to Sigiriya",
        location: "Sigiriya",
        route: "Airport → Sigiriya",
        description: "Warm welcome at the airport by your private chauffeur-guide. Travel through scenic countryside into the Cultural Triangle. Check in to your hotel and enjoy a tranquil evening in nature.",
        highlights: ["Warm airport welcome", "Scenic countryside drive", "Cultural Triangle check-in"],
        overnight: "Sigiriya"
      },
      {
        day: 2,
        title: "Sigiriya Rock Fortress & Village Experience",
        location: "Sigiriya",
        route: "Explore Sigiriya & Dambulla",
        description: "Climb the world-renowned Sigiriya Lion Rock Fortress or choose Pidurangala Rock. Experience traditional village life with a bullock cart ride, catamaran lake cruise, cooking demonstration, and authentic village lunch. Optional visit to Dambulla Cave Temple.",
        highlights: ["Sigiriya Lion Rock Fortress", "Bullock cart & catamaran ride", "Authentic village home lunch", "Dambulla Cave Temple (optional)"],
        overnight: "Sigiriya"
      },
      {
        day: 3,
        title: "Cultural Discovery & Journey to the East",
        location: "Pasikudah",
        route: "Sigiriya → Polonnaruwa → Pasikudah",
        description: "Travel east, visiting the ancient royal capital of Polonnaruwa (UNESCO World Heritage) to admire the Gal Vihara rock-cut Buddhas and royal palace ruins. Continue to the east coast resort of Pasikudah and check in by the turquoise sea.",
        highlights: ["Polonnaruwa ancient kingdom ruins", "Gal Vihara rock Buddhas", "Pasikudah Beach arrival"],
        overnight: "Pasikudah"
      },
      {
        day: 4,
        title: "Pasikudah Beach Escape",
        location: "Pasikudah",
        route: "Explore Pasikudah",
        description: "Spend a full day relaxing on Pasikudah's famous shallow, crystal-clear bay. Swim safely in calm waters, enjoy water sports, and dine on fresh seafood at a beachfront restaurant.",
        highlights: ["Pasikudah calm turquoise bay", "Swimming & beach relaxation", "Beachfront seafood dinner"],
        overnight: "Pasikudah"
      },
      {
        day: 5,
        title: "Trincomalee & The Eastern Coast",
        location: "Trincomalee",
        route: "Pasikudah → Trincomalee",
        description: "Travel north along the coast to historic Trincomalee. Visit clifftop Koneswaram Temple perched high above Swami Rock with panoramic ocean views. Explore Fort Frederick and relax on Nilaveli or Uppuveli Beach.",
        highlights: ["Clifftop Koneswaram Temple", "Fort Frederick & spotted deer", "Nilaveli Beach"],
        overnight: "Trincomalee"
      },
      {
        day: 6,
        title: "East Coast Beaches & Local Experiences",
        location: "Trincomalee",
        route: "Explore Trincomalee",
        description: "Enjoy a relaxed morning at Nilaveli Beach with optional boat excursion to Pigeon Island National Park for live coral reef and marine life snorkeling. Explore Trincomalee town markets and sample local Tamil cuisine.",
        highlights: ["Nilaveli Beach relaxation", "Optional Pigeon Island snorkeling", "Trincomalee markets & sunset"],
        overnight: "Trincomalee"
      },
      {
        day: 7,
        title: "Journey to Arugam Bay",
        location: "Arugam Bay",
        route: "Trincomalee → Arugam Bay",
        description: "Enjoy a scenic coastal road trip south to Arugam Bay, Sri Lanka's renowned international surf hub. Settle into your hotel, stroll down the beach, and soak in the vibrant surf culture and beach cafés.",
        highlights: ["Scenic coastal drive", "Arugam Bay check-in", "Surf town vibe & beach walk"],
        overnight: "Arugam Bay"
      },
      {
        day: 8,
        title: "Arugam Bay Surf & Beach Adventure",
        location: "Arugam Bay",
        route: "Explore Arugam Bay",
        description: "Morning at the beach with optional surf lessons suited to your skill level. Relax on golden sand, browse boutique shops, and watch world-class surfers riding Main Point. Experience Arugam Bay's lively social nightlife in the evening.",
        highlights: ["Surfing & beach morning", "Main Point surf watching", "Arugam Bay evening social scene"],
        overnight: "Arugam Bay"
      },
      {
        day: 9,
        title: "Lagoon Safari & Arugam Bay Experiences",
        location: "Arugam Bay",
        route: "Explore Arugam Bay & Surroundings",
        description: "Take an optional early morning or sunset boat safari through Kottukal or Urani Lagoon mangroves to observe wild elephants, crocodiles, and water birds. Spend the afternoon surfing or relaxing at Elephant Rock.",
        highlights: ["Mangrove lagoon boat safari", "Elephant Rock viewpoint", "Sunset ocean drinks"],
        overnight: "Arugam Bay"
      },
      {
        day: 10,
        title: "Scenic Journey to Ella",
        location: "Ella",
        route: "Arugam Bay → Ella",
        description: "Leave the coast behind and wind up into Sri Lanka's spectacular hill country. Check in to your hotel in Ella, take in panoramic mountain views, and enjoy the lively restaurants and music in Ella town.",
        highlights: ["Scenic mountain drive", "Ella arrival & mountain vistas", "Ella town dining & nightlife"],
        overnight: "Ella"
      },
      {
        day: 11,
        title: "Ella Mountains & Adventure",
        location: "Ella",
        route: "Explore Ella",
        description: "Visit the iconic Nine Arch Bridge surrounded by lush hills. Hike Little Adam's Peak for panoramic views. Visit roaring Ravana Falls. Optional adventure activities at Flying Ravana Adventure Park. Spend the evening enjoying Ella's cafés.",
        highlights: ["Nine Arch Bridge", "Little Adam's Peak hike", "Ravana Falls", "Flying Ravana adventure"],
        overnight: "Ella"
      },
      {
        day: 12,
        title: "Waterfalls & Journey to the South",
        location: "Mirissa",
        route: "Ella → Diyaluma Falls → Mirissa",
        description: "Drive to spectacular Diyaluma Falls, Sri Lanka's second highest waterfall. Take an optional guided hike to the upper falls and natural rock pools. Continue towards the southern coast and check in to Mirissa for a relaxing beachside evening.",
        highlights: ["Diyaluma Falls upper pools hike", "Scenic southern drive", "Mirissa beachside arrival"],
        overnight: "Mirissa"
      },
      {
        day: 13,
        title: "Mirissa Beach & Southern Coast Highlights",
        location: "Mirissa",
        route: "Explore Mirissa & Weligama",
        description: "Visit Coconut Tree Hill for iconic palm-fringed ocean photographs. Explore Mirissa Beach and Parrot Rock. Visit neighboring Weligama Bay for surfing lessons or beach relaxation, and enjoy dinner at a beachfront restaurant.",
        highlights: ["Coconut Tree Hill", "Mirissa Beach & Parrot Rock", "Weligama Bay", "Beachfront dining"],
        overnight: "Mirissa"
      },
      {
        day: 14,
        title: "Ahangama & Galle Fort",
        location: "Galle",
        route: "Mirissa → Ahangama → Galle",
        description: "Explore the bohemian cafés and beach spots of trendy Ahangama. Travel to historic Galle and explore UNESCO Galle Fort. Walk cobblestone streets, admire colonial architecture, visit the lighthouse, and watch sunset from the fort ramparts.",
        highlights: ["Ahangama trendy cafés", "Galle Fort UNESCO World Heritage", "Historic ramparts & lighthouse", "Sunset farewell dinner"],
        overnight: "Galle"
      },
      {
        day: 15,
        title: "Departure",
        location: "Galle to Airport",
        route: "Galle → Airport",
        description: "Enjoy breakfast and check out. Transfer comfortably along the Southern Expressway to Bandaranaike International Airport for your departure flight with unforgettable memories of your east-to-south adventure.",
        highlights: ["Southern Expressway transfer", "Airport departure"],
        overnight: "Departure"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 12. Tour 12 – 3C Ceylon Complete Journey 🇱🇰: 14 Nights / 15 Days
  // ─────────────────────────────────────────────────────────────
  {
    id: "pkg-12",
    slug: "ceylon-complete-journey-15-days",
    title: "3C Ceylon Complete Journey: 14 Nights / 15 Days",
    subtitle: "The Ultimate Sri Lankan Holiday",
    tagline: "Ancient kingdoms • Cultural heritage • Tea country • Scenic train journeys • Wildlife safaris • Tropical beaches • Rainforest adventures • Authentic local experiences",
    brandLine: "The definitive grand tour by 3C Ceylon Tours",
    durationDays: 15,
    durationNights: 14,
    image: "/images/packages/main/ceylon-complete-journey-15-days.jpg",
    gallery: [
      "/images/packages-hero.png",
      "/images/places/dambulla-sigiriya/dambulla2.jpg",
      "/images/places/nuwara-eliya/nuwara2.jpg",
      "/images/places/yala/yala1.jpg",
      "/images/places/galle/galle2.jpg"
    ],
    style: "Cultural & Highlights",
    activityLevel: "Moderate",
    travelStyle: "Private Tour",
    idealFor: "Travelers seeking the complete, immersive Sri Lanka experience with ancient heritage, tea hills, scenic train, Yala safari, southern beaches, Sinharaja rainforest and Colombo.",
    destinationsCovered: ["Sigiriya", "Dambulla", "Kandy", "Nuwara Eliya", "Ella", "Yala", "Mirissa", "Koggala", "Galle", "Sinharaja Rainforest", "Colombo"],
    highlights: [
      "Sigiriya Lion Rock Fortress and Dambulla Cave Temple (UNESCO World Heritage Sites)",
      "Traditional Sri Lankan village tour with bullock cart, catamaran ride & authentic lunch",
      "Kandy's sacred Temple of the Tooth Relic and cultural dance performance",
      "Ramboda Falls, Ceylon tea plantation and factory tour with tasting",
      "Colonial Nuwara Eliya ('Little England'), Gregory Lake & optional Horton Plains",
      "Iconic hill-country train journey from Nanu Oya to Ella",
      "Nine Arch Bridge, Little Adam's Peak & Ravana Falls in Ella",
      "Early morning 4x4 wildlife safari in Yala National Park",
      "Mirissa Beach, Coconut Tree Hill & optional whale watching",
      "Scenic Koggala Lake boat safari visiting Cinnamon Island",
      "UNESCO Galle Dutch Fort cobblestone exploration and rampart sunset",
      "Guided rainforest trek in Sinharaja Forest Reserve (UNESCO Biosphere Reserve)",
      "Colombo city highlights, Gangaramaya Temple & shopping"
    ],
    overview: "Discover the very best of Sri Lanka on an unforgettable 15-day journey through the island's diverse landscapes and rich heritage. Explore ancient rock fortresses, experience traditional village life, wander through lush tea plantations, enjoy one of the world's most scenic train journeys, encounter wildlife on safari, relax on beautiful southern beaches, cruise across Koggala Lake and explore the extraordinary biodiversity of Sinharaja Rainforest. With your private chauffeur-guide and personalized travel assistance, experience Sri Lanka at a comfortable pace while discovering its culture, nature and warm hospitality.",
    inclusions: [
      "Private luxury AC vehicle with licensed professional chauffeur-guide for all 15 days",
      "Airport meet & greet with return transfers",
      "Village tour with bullock cart, catamaran lake cruise & traditional home lunch",
      "Scenic train tickets from Nanu Oya to Ella (subject to availability)",
      "Koggala Lake boat safari and Cinnamon Island experience",
      "Guided trek in Sinharaja Rainforest Reserve with licensed forest naturalist",
      "All driver accommodation, highway tolls, parking and fuel",
      "24/7 dedicated traveler concierge support"
    ],
    exclusions: [
      "Entrance fees to monuments, temples and national parks",
      "Yala 4x4 safari jeep hire and tracker fees",
      "Optional activities and whale watching",
      "Meals, beverages and personal expenses"
    ],
    faqs: [
      {
        question: "What gear is needed for Sinharaja Rainforest?",
        answer: "Light breathable clothing, sturdy walking shoes or hiking boots, leech socks (usually provided by the forest office), and rain gear are recommended for exploring Sinharaja."
      }
    ],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Airport → Sigiriya",
        location: "Sigiriya",
        route: "Airport → Sigiriya",
        description: "Meet your private chauffeur-guide at Bandaranaike International Airport. Enjoy a comfortable transfer through scenic countryside to Sigiriya, the heart of Sri Lanka's Cultural Triangle. Check in and relax in peaceful tropical greenery.",
        highlights: ["Airport welcome", "Transfer to Sigiriya", "Cultural Triangle arrival"],
        overnight: "Sigiriya"
      },
      {
        day: 2,
        title: "Sigiriya & Dambulla",
        location: "Sigiriya",
        route: "Explore Sigiriya & Dambulla",
        description: "Climb the magnificent Sigiriya Lion Rock Fortress or choose Pidurangala Rock. Experience traditional village life with bullock cart, catamaran ride and home-cooked lunch. Visit the ancient Dambulla Cave Temple.",
        highlights: ["Sigiriya Lion Rock Fortress", "Bullock cart & catamaran ride", "Village lunch", "Dambulla Cave Temple"],
        overnight: "Sigiriya"
      },
      {
        day: 3,
        title: "Sigiriya → Kandy",
        location: "Kandy",
        route: "Sigiriya → Kandy",
        description: "Travel through scenic central hills to Kandy. Visit the sacred Temple of the Tooth Relic, stroll around Kandy Lake, and attend an evening Kandyan cultural dance show.",
        highlights: ["Scenic drive to Kandy", "Temple of the Tooth Relic", "Kandy Lake", "Kandyan cultural dance"],
        overnight: "Kandy"
      },
      {
        day: 4,
        title: "Kandy → Ramboda → Nuwara Eliya",
        location: "Nuwara Eliya",
        route: "Kandy → Ramboda → Nuwara Eliya",
        description: "Ascend into the central highlands, stopping at Ramboda Falls. Tour a working tea plantation and tea factory to learn Ceylon tea production and enjoy an aromatic tasting. Check in to colonial Nuwara Eliya.",
        highlights: ["Ramboda Falls", "Ceylon tea factory tour & tasting", "Nuwara Eliya colonial town"],
        overnight: "Nuwara Eliya"
      },
      {
        day: 5,
        title: "Explore Nuwara Eliya",
        location: "Nuwara Eliya",
        route: "Explore Nuwara Eliya",
        description: "Explore Gregory Lake and the town centre. Visit Victoria Park and enjoy the cool mountain air. Optional early morning excursion to Horton Plains National Park and World's End.",
        highlights: ["Gregory Lake", "Victoria Park", "Optional Horton Plains World's End"],
        overnight: "Nuwara Eliya"
      },
      {
        day: 6,
        title: "Nuwara Eliya → Ella",
        location: "Ella",
        route: "Nanu Oya → Scenic Train → Ella",
        description: "Transfer to Nanu Oya Railway Station for the world-famous scenic train journey to Ella across mountain ridges and tea estates (luggage transported by vehicle). Arrive in Ella and enjoy the evening café scene.",
        highlights: ["Scenic train journey to Ella", "Mountain vistas", "Ella town nightlife"],
        overnight: "Ella"
      },
      {
        day: 7,
        title: "Explore Ella",
        location: "Ella",
        route: "Explore Ella",
        description: "Visit the iconic Nine Arch Bridge, hike Little Adam's Peak for panoramic views, and stop at Ravana Falls. Enjoy free time to experience Ella's boutique cafés and restaurants.",
        highlights: ["Nine Arch Bridge", "Little Adam's Peak hike", "Ravana Falls", "Ella cafés"],
        overnight: "Ella"
      },
      {
        day: 8,
        title: "Ella → Yala",
        location: "Yala",
        route: "Ella → Diyaluma Falls → Yala",
        description: "Descend towards the southern dry zone, stopping at scenic Diyaluma Falls if time permits. Continue to Yala / Tissamaharama and relax at your hotel before tomorrow's safari.",
        highlights: ["Scenic descent from Ella", "Diyaluma Falls stop", "Yala area arrival"],
        overnight: "Yala / Tissamaharama area"
      },
      {
        day: 9,
        title: "Yala Safari → Mirissa",
        location: "Mirissa",
        route: "Yala → Mirissa",
        description: "Early morning 4x4 safari in Yala National Park, famous for leopards, elephants, sloth bears and crocodiles. Travel to the southern coast and check in to Mirissa to relax beside the Indian Ocean.",
        highlights: ["Yala 4x4 wildlife safari", "Scenic coastal drive", "Mirissa Beach arrival"],
        overnight: "Mirissa"
      },
      {
        day: 10,
        title: "Explore Mirissa",
        location: "Mirissa",
        route: "Explore Mirissa",
        description: "Visit Coconut Tree Hill for palm-fringed ocean views. Explore Parrot Rock and relax on Mirissa Beach. Optional seasonal whale-watching excursion in the morning.",
        highlights: ["Coconut Tree Hill", "Parrot Rock", "Mirissa Beach relaxation", "Optional whale watching"],
        overnight: "Mirissa"
      },
      {
        day: 11,
        title: "Koggala Lake → Galle",
        location: "Galle",
        route: "Mirissa → Koggala → Galle",
        description: "Enjoy a scenic boat safari on Koggala Lake visiting Cinnamon Island. Travel to historic Galle and explore UNESCO Galle Fort's cobblestone streets, lighthouse, ramparts and boutique shops.",
        highlights: ["Koggala Lake boat safari", "Cinnamon Island", "Galle Fort exploration", "Rampart sunset"],
        overnight: "Galle"
      },
      {
        day: 12,
        title: "Galle → Sinharaja Rainforest",
        location: "Sinharaja",
        route: "Galle → Sinharaja Rainforest",
        description: "Travel inland as coastal scenes give way to the dense tropical vegetation of Sinharaja Rainforest. Check in to an eco-lodge near the forest and enjoy a peaceful evening immersed in nature.",
        highlights: ["Scenic inland drive", "Sinharaja eco-lodge arrival", "Sounds of the rainforest"],
        overnight: "Sinharaja area"
      },
      {
        day: 13,
        title: "Sinharaja Rainforest → Colombo",
        location: "Colombo",
        route: "Sinharaja → Colombo",
        description: "Join a specialist forest guide for an awe-inspiring trek through Sinharaja Rainforest (UNESCO Biosphere Reserve). Observe endemic bird feeding waves, giant trees, and rare flora. Travel to Colombo for your final city stay.",
        highlights: ["Guided Sinharaja rainforest trek", "Endemic birdwatching & flora", "Arrival in Colombo"],
        overnight: "Colombo"
      },
      {
        day: 14,
        title: "Explore Colombo",
        location: "Colombo",
        route: "Explore Colombo",
        description: "Discover Colombo's blend of modern and colonial heritage. Visit Gangaramaya Temple, Independence Square, Galle Face Green, and enjoy souvenir shopping at local boutiques and tea lounges.",
        highlights: ["Gangaramaya Temple", "Independence Square", "Galle Face Green", "Local shopping & dining"],
        overnight: "Colombo"
      },
      {
        day: 15,
        title: "Colombo → Airport",
        location: "Colombo to Airport",
        route: "Colombo → Airport",
        description: "Enjoy breakfast and free time depending on your flight schedule. Transfer comfortably to Bandaranaike International Airport for your departure flight with memories to last a lifetime.",
        highlights: ["Colombo transfer to airport", "Departure farewell"],
        overnight: "Departure"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 13. Tour 13 – 3C Ceylon Spiritual Journey 🇱🇰: 10 Nights / 11 Days
  // ─────────────────────────────────────────────────────────────
  {
    id: "pkg-13",
    slug: "ceylon-spiritual-journey-11-days",
    title: "3C Ceylon Spiritual Journey: 10 Nights / 11 Days",
    subtitle: "Find Peace, Discover Sacred Places and Experience Sri Lanka's Spiritual Heritage",
    tagline: "Sacred temples • Ancient stupas • Buddhist heritage • Pilgrimage sites • Meditation • Cultural traditions • Peaceful landscapes",
    brandLine: "A sacred journey with 3C Ceylon Tours",
    durationDays: 11,
    durationNights: 10,
    image: "/images/packages/main/ceylon-spiritual-journey-11-days.jpg",
    gallery: [
      "/images/packages/Couple at a Vibrant Buddhist Stupa.png",
      "/images/places/anuradhapura/anu2.jpg",
      "/images/places/kandy/kandy1.jpg",
      "/images/places/dambulla-sigiriya/dambulla1.jpg"
    ],
    style: "Spiritual & Pilgrimage",
    activityLevel: "Relaxed",
    travelStyle: "Private Tour",
    idealFor: "Spiritual seekers, pilgrims, Buddhist history enthusiasts, meditation practitioners and travelers seeking peaceful sacred reflection.",
    destinationsCovered: ["Negombo", "Anuradhapura", "Mihintale", "Sigiriya", "Dambulla", "Polonnaruwa", "Matale", "Kandy", "Nuwara Eliya", "Kataragama", "Colombo"],
    highlights: [
      "Visit the sacred Jaya Sri Maha Bodhi and colossal Ruwanwelisaya Stupa in Anuradhapura",
      "Discover Mihintale, the cradle of Buddhism in Sri Lanka",
      "Dambulla Cave Temple's ancient Buddhist rock paintings and statues",
      "Polonnaruwa Gal Vihara rock-cut masterpiece Buddha sculptures",
      "Aluvihare Rock Temple in Matale where the Buddhist Pali Canon was first inscribed in writing",
      "Experience sacred offering rituals at the Temple of the Sacred Tooth Relic in Kandy",
      "Visit revered Kataragama Devalaya and Kiri Vehera, sacred to Buddhists, Hindus, and Muslims",
      "Visit Kelaniya Raja Maha Viharaya and Gangaramaya Temple in Colombo",
      "Peaceful travel pace with ample time for personal prayer, offerings, and meditation"
    ],
    overview: "Embark on a meaningful spiritual journey through Sri Lanka, exploring sacred Buddhist sites, ancient kingdoms and places of deep religious significance. From the sacred Sri Maha Bodhi in Anuradhapura to the peaceful monasteries of Mihintale, the magnificent Dambulla Cave Temple and the revered Temple of the Sacred Tooth Relic in Kandy, discover the island's rich Buddhist heritage. Continue through the peaceful hill country to Kataragama, a significant pilgrimage destination for people of different faiths, before concluding your journey in Colombo. With 3C Ceylon Tours, experience Sri Lanka at a thoughtful pace, with opportunities for prayer, offerings, quiet reflection and authentic local experiences.",
    inclusions: [
      "Private luxury AC vehicle with dedicated respectful chauffeur-guide throughout",
      "Airport meet & greet with return transfer",
      "Assistance with temple offerings, flower arrangements and lotus flowers",
      "All driver accommodation, fuel, highway tolls and parking",
      "24/7 dedicated traveler concierge support"
    ],
    exclusions: [
      "Temple donations, specialist meditation instructor fees, and site entrance tickets",
      "Meals, beverages and personal expenses",
      "International airfare and visa"
    ],
    faqs: [
      {
        question: "What is the dress code for sacred Buddhist and Hindu sites?",
        answer: "Visitors must wear white or light-coloured modest clothing covering shoulders and knees. Shoes and hats must be removed before entering temple courtyards and shrines."
      }
    ],
    featured: false,
    itinerary: [
      {
        day: 1,
        title: "Airport → Negombo",
        location: "Negombo",
        route: "Airport → Negombo",
        description: "Ayubowan! Welcome to Sri Lanka. Warm welcome at Bandaranaike International Airport by your private chauffeur-guide. Transfer to Negombo to relax after your flight and prepare for your spiritual journey. If time permits, visit a local Buddhist temple.",
        highlights: ["Airport welcome", "Negombo transfer", "Quiet evening preparation"],
        overnight: "Negombo"
      },
      {
        day: 2,
        title: "Negombo → Anuradhapura",
        location: "Anuradhapura",
        route: "Negombo → Anuradhapura",
        description: "Travel to Anuradhapura, Sri Lanka's ancient sacred capital. Visit selected sacred sites and experience the serene spiritual atmosphere of the ancient monasteries and towering stupas.",
        highlights: ["Journey to sacred Anuradhapura", "Ancient monastic ruins", "Serene spiritual atmosphere"],
        overnight: "Anuradhapura"
      },
      {
        day: 3,
        title: "Anuradhapura & Mihintale",
        location: "Anuradhapura",
        route: "Anuradhapura & Mihintale",
        description: "Visit the sacred Jaya Sri Maha Bodhi and explore Ruwanwelisaya and Isurumuniya Temple. In the afternoon, travel to Mihintale, where Buddhism was first introduced to Sri Lanka in the 3rd century BC, and climb to the meditation peaks for peaceful contemplation.",
        highlights: ["Jaya Sri Maha Bodhi pilgrimage", "Ruwanwelisaya Stupa", "Mihintale cradle of Buddhism"],
        overnight: "Anuradhapura"
      },
      {
        day: 4,
        title: "Anuradhapura → Sigiriya",
        location: "Sigiriya",
        route: "Anuradhapura → Sigiriya",
        description: "Morning visit to an ancient monastery in Anuradhapura for personal meditation. Travel to the Sigiriya area through countryside landscapes and enjoy a quiet evening at your hotel.",
        highlights: ["Morning meditation in Anuradhapura", "Scenic countryside drive", "Peaceful Cultural Triangle evening"],
        overnight: "Sigiriya / Dambulla area"
      },
      {
        day: 5,
        title: "Dambulla & Polonnaruwa",
        location: "Sigiriya",
        route: "Dambulla & Polonnaruwa",
        description: "Visit the UNESCO Dambulla Cave Temple with its exquisite Buddhist murals and 153 Buddha statues. Travel to ancient Polonnaruwa to visit Gal Vihara, renowned for its four monumental rock-carved Buddha figures representing the supreme peace of Parinirvana.",
        highlights: ["Dambulla Cave Temple", "Polonnaruwa ancient monuments", "Gal Vihara rock-carved Buddha statues"],
        overnight: "Sigiriya / Dambulla area"
      },
      {
        day: 6,
        title: "Sigiriya → Matale → Kandy",
        location: "Kandy",
        route: "Sigiriya → Matale → Kandy",
        description: "Travel towards Kandy. Stop at Aluvihare Rock Temple in Matale, the historic rock monastery where the Buddhist Pali scriptures (Tripitaka) were first written down on palm leaves. Continue to Kandy and attend the evening offering ritual at the Temple of the Tooth.",
        highlights: ["Aluvihare Rock Temple in Matale", "Tripitaka historic site", "Temple of the Tooth evening offering"],
        overnight: "Kandy"
      },
      {
        day: 7,
        title: "Kandy",
        location: "Kandy",
        route: "Kandy Temple Experiences",
        description: "Visit the revered Temple of the Sacred Tooth Relic during the morning Thevava ritual. Explore historic monastic colleges (Malwatte and Asgiriya) or visit forest hermitages around Kandy. Enjoy time for personal prayer, meditation and walking around Kandy Lake.",
        highlights: ["Temple of the Tooth Thevava ritual", "Monastic colleges", "Kandy Lake meditation walk"],
        overnight: "Kandy"
      },
      {
        day: 8,
        title: "Kandy → Nuwara Eliya",
        location: "Nuwara Eliya",
        route: "Kandy → Nuwara Eliya",
        description: "Travel through the central highlands surrounded by misty mountains and waterfalls. Visit a highland Buddhist temple en route, and spend a restful, peaceful evening in the cool climate of Nuwara Eliya.",
        highlights: ["Scenic mountain drive", "Highland Buddhist temple", "Restful highland evening"],
        overnight: "Nuwara Eliya"
      },
      {
        day: 9,
        title: "Nuwara Eliya → Kataragama",
        location: "Kataragama",
        route: "Nuwara Eliya → Kataragama",
        description: "Descend from the misty mountains through southern rural landscapes to Kataragama, an ancient holy city of pilgrimage revered by Buddhists, Hindus, Muslims, and the indigenous Vedda community. Relax and prepare for evening pooja.",
        highlights: ["Scenic mountain descent", "Arrival in sacred Kataragama", "Multi-faith pilgrimage atmosphere"],
        overnight: "Kataragama"
      },
      {
        day: 10,
        title: "Kataragama → Colombo",
        location: "Colombo",
        route: "Kataragama → Colombo",
        description: "Early morning visit to Kiri Vehera, a revered ancient stupa, and Kataragama Devalaya to observe the sacred pooja with fruit and flower offerings. Journey comfortably to Colombo. Visit Gangaramaya Temple on Beira Lake in the evening.",
        highlights: ["Kiri Vehera ancient stupa", "Kataragama Devalaya sacred pooja", "Gangaramaya Temple in Colombo"],
        overnight: "Colombo"
      },
      {
        day: 11,
        title: "Colombo → Airport",
        location: "Colombo to Airport",
        route: "Colombo → Airport",
        description: "Visit Kelaniya Raja Maha Viharaya, one of Sri Lanka's most sacred temples visited by Lord Buddha. Transfer to Bandaranaike International Airport for your departure flight with profound memories of Sri Lanka's spiritual heritage.",
        highlights: ["Kelaniya Raja Maha Viharaya", "Airport transfer", "Peaceful farewell"],
        overnight: "Departure"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 14. 3C Ceylon Wild & Sacred Adventure: 8 Nights / 9 Days
  // ─────────────────────────────────────────────────────────────
  {
    id: "pkg-14",
    slug: "ceylon-wild-and-sacred-adventure-9-days",
    title: "3C Ceylon Wild & Sacred Adventure: 8 Nights / 9 Days",
    subtitle: "From Wild Rivers to Sacred Peaks",
    tagline: "Pinnawala elephants • Knuckles Mountain Range hike • Kitulgala white-water rafting • Adam's Peak (Sri Pada) sunrise trek • Lakshapana Waterfall",
    brandLine: "A private high-adventure expedition with 3C Ceylon Tours",
    durationDays: 9,
    durationNights: 8,
    image: "/images/packages/main/ceylon-wild-and-sacred-adventure-9-days.jpg",
    gallery: [
      "/images/packages/adams-peak-sunrise.jpg",
      "/images/packages/knuckles-mountain-range.jpg",
      "/images/packages/kitulgala-rafting.jpg",
      "/images/packages/lakshapana-waterfall.jpg",
      "/images/packages/pinnawala-elephants.jpg"
    ],
    style: "Adventure & Nature",
    activityLevel: "Active",
    travelStyle: "Private Tour",
    idealFor: "Trekking enthusiasts, adrenaline lovers, active adventurers and nature explorers seeking Sri Lanka's highest peaks, wild rivers and cloud forests.",
    destinationsCovered: ["Pinnawala", "Kandy", "Knuckles Mountain Range", "Kitulgala", "Adam's Peak (Sri Pada)", "Maskeliya", "Negombo"],
    highlights: [
      "Meet Asian elephants at Pinnawala and explore cultural Kandy",
      "Two nights in the rugged Knuckles Mountain Range UNESCO World Heritage wilderness",
      "Guided trek through Knuckles cloud forests, hidden waterfalls and remote mountain villages",
      "White-water rafting on the thrilling rapids of the Kelani River in Kitulgala",
      "Sacred night pilgrimage trek up Adam's Peak (Sri Pada - 2,243m) for the mystical sunrise and triangular shadow",
      "Visit scenic Lakshapana Waterfall viewing area in Maskeliya",
      "Optional professionally operated rope-jump activity at Lakshapana",
      "Scenic hill-country drives and relaxing final evening in Negombo"
    ],
    overview: "From the wild rapids of the Kelani River to the mist-covered peaks of the Knuckles Range and the sacred summit of Adam's Peak, this active journey showcases the dramatic natural power and spiritual heights of Sri Lanka. Experience white-water rafting, cloud forest trekking, and an unforgettable sunrise above the clouds on the island's most revered mountain.",
    inclusions: [
      "Private luxury AC vehicle with licensed adventure chauffeur-guide for all 9 days",
      "Airport meet & greet with return transfers",
      "Kitulgala white-water rafting session with professional river guides and safety equipment",
      "Licensed Knuckles mountain trekking guide",
      "All driver accommodation, fuel, highway tolls and parking",
      "24/7 dedicated traveler concierge support"
    ],
    exclusions: [
      "Entrance fees and optional Lakshapana rope jump",
      "Meals, beverages and personal hiking gear",
      "International flights and visa"
    ],
    faqs: [
      {
        question: "When is the main Adam's Peak (Sri Pada) climbing season?",
        answer: "The pilgrimage season runs from December (Unduwap Poya) to May (Vesak Poya). During this time, the trail is illuminated by lanterns with resting stalls and temple ceremonies."
      },
      {
        question: "How physically demanding is the Adam's Peak trek?",
        answer: "The ascent involves approximately 5,500 stone steps (3 to 4 hours uphill). A good level of physical fitness and warm layered clothing are recommended."
      }
    ],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrival, Pinnawala & Kandy",
        location: "Kandy",
        route: "Airport → Pinnawala → Kandy",
        description: "Warm welcome at the airport by your private chauffeur-guide. Travel towards Pinnawala for an elephant-related experience. Continue through scenic countryside into Kandy. Enjoy a relaxing evening in the cultural capital.",
        highlights: ["Airport welcome", "Pinnawala elephant experience", "Kandy evening walk"],
        overnight: "Kandy"
      },
      {
        day: 2,
        title: "Journey to the Knuckles Mountain Range",
        location: "Knuckles region",
        route: "Kandy → Knuckles Mountain Range",
        description: "Enjoy a scenic drive up into the rugged Knuckles Mountain Range. Discover mist-covered mountain peaks, deep green valleys and rural terraced villages. Check in to an eco-lodge and spend the afternoon relaxing in nature.",
        highlights: ["Scenic mountain drive", "Knuckles cloud forest views", "Eco-retreat check-in"],
        overnight: "Knuckles region"
      },
      {
        day: 3,
        title: "Guided Knuckles Mountain Hike",
        location: "Knuckles region",
        route: "Knuckles Forest Trails",
        description: "Explore the spectacular Knuckles Mountain Range with a licensed local forest guide. Trek through lush cloud forest trails, hidden stream crossings, and mountain viewpoints showcasing Sri Lanka's extraordinary biodiversity.",
        highlights: ["Guided Knuckles wilderness trek", "Highland streams & flora", "Panoramic mountain viewpoints"],
        overnight: "Knuckles region"
      },
      {
        day: 4,
        title: "Scenic Journey to Kitulgala",
        location: "Kitulgala",
        route: "Knuckles → Kitulgala",
        description: "Travel through Sri Lanka's lush hill country towards Kitulgala on the banks of the Kelani River. Enjoy scenic countryside views along the way. Check in to a riverside lodge surrounded by tropical greenery and prepare for your river adventure.",
        highlights: ["Scenic hill country drive", "Riverside eco-lodge check-in", "Kelani River views"],
        overnight: "Kitulgala"
      },
      {
        day: 5,
        title: "White-Water Rafting & Adam's Peak Region",
        location: "Nallathanniya / Adam's Peak area",
        route: "Kitulgala → Nallathanniya",
        description: "Experience exciting white-water rafting on the Kelani River with a certified professional operator, navigating grade 2 and 3 rapids with full safety equipment. Afterward, travel towards Nallathanniya at the base of sacred Adam's Peak. Rest early before the overnight climb.",
        highlights: ["Kitulgala white-water rafting", "Safety briefing & grade 2-3 rapids", "Scenic drive to Nallathanniya"],
        overnight: "Nallathanniya / Adam's Peak area"
      },
      {
        day: 6,
        title: "Adam's Peak (Sri Pada) Sunrise Trek",
        location: "Adam's Peak area",
        route: "Adam's Peak Summit Trek",
        description: "Begin your night climb (around 2:00 AM) up sacred Adam's Peak (Sri Pada). Reach the 2,243m summit for sunrise, witnessing the mystical triangular shadow cast by the peak across the cloud blanket. Descend to your lodge and spend the day resting.",
        highlights: ["Night pilgrimage climb", "Mystical summit sunrise", "Triangular shadow phenomenon", "Well-earned rest"],
        overnight: "Adam's Peak area",
        notes: "Main pilgrimage season runs from December to May. Itinerary best suited for travellers with good fitness."
      },
      {
        day: 7,
        title: "Lakshapana Waterfall & Optional Adventure",
        location: "Maskeliya / Adam's Peak area",
        route: "Explore Maskeliya & Lakshapana",
        description: "Enjoy a relaxed morning after your mountain climb. Visit the majestic Lakshapana Waterfall viewing area. Adventure seekers may inquire about an optional professionally operated rope-jump activity with certified safety equipment. Spend the evening in the peaceful hill country.",
        highlights: ["Lakshapana Waterfall view", "Optional certified rope-jump activity", "Peaceful mountain scenery"],
        overnight: "Maskeliya / Adam's Peak area"
      },
      {
        day: 8,
        title: "Scenic Hill Country & Journey to Negombo",
        location: "Negombo",
        route: "Maskeliya → Negombo",
        description: "Enjoy breakfast and your final mountain views before beginning your journey towards Negombo on the coast. Stop along the way for photographs, refreshments and viewpoints. Enjoy a relaxing final evening before your flight.",
        highlights: ["Scenic descent to the coast", "Refreshment stops", "Negombo seaside evening"],
        overnight: "Negombo / airport area"
      },
      {
        day: 9,
        title: "Departure from Sri Lanka",
        location: "Negombo to Airport",
        route: "Negombo → Airport",
        description: "Enjoy breakfast overlooking the coast. Transfer to Bandaranaike International Airport with your private chauffeur-guide for your departure flight, filled with memories of wild rivers, mountains, and sacred peaks.",
        highlights: ["Airport transfer", "Departure farewell"],
        overnight: "Departure"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // 15. Tour Package 14 – 3C Ceylon Gem & Green Heritage: 6 Nights / 7 Days
  // ─────────────────────────────────────────────────────────────
  {
    id: "pkg-15",
    slug: "ceylon-gem-and-green-heritage-7-days",
    title: "3C Ceylon Gem & Green Heritage: 6 Nights / 7 Days",
    subtitle: "Discover Precious Gems, Ancient Traditions & the Emerald Heart of Sri Lanka",
    tagline: "Bopath Ella Waterfall • Ratnapura artisan gem mining • Lapidary & sapphire heritage • Erathna tea estate • Traditional kithul tapping • Guided Sinharaja Rainforest exploration",
    brandLine: "A private artisan & rainforest journey with 3C Ceylon Tours",
    durationDays: 7,
    durationNights: 6,
    image: "/images/packages/main/ceylon-gem-and-green-heritage-7-days.jpg",
    gallery: [
      "/images/packages/bopath-ella-falls.jpg",
      "/images/packages/ratnapura-gem-mining.jpg",
      "/images/packages/erathna-tea-estate.jpg",
      "/images/packages/sinharaja-rainforest-path.jpg",
      "/images/packages/ratnapura-gem-craft.jpg"
    ],
    style: "Gems & Living Heritage",
    activityLevel: "Moderate",
    travelStyle: "Private Tour",
    idealFor: "Gem collectors, geology enthusiasts, nature lovers, photographers and travelers seeking authentic artisan traditions and untamed rainforest.",
    destinationsCovered: ["Ratnapura", "Bopath Ella", "Erathna", "Kudawa", "Sinharaja Rainforest"],
    highlights: [
      "Visit scenic Bopath Ella Waterfall and its lush natural setting",
      "Authentic working gem mine visit in Ratnapura with an authorized local host",
      "Observe traditional gravel-washing and identification of rough Ceylon sapphires",
      "Visit a master gem-cutting and polishing lapidary workshop",
      "Erathna low-country tea estate visit & traditional kithul sap tapping experience with local producers",
      "Scenic journey to Kudawa entrance of Sinharaja Forest Reserve",
      "Full guided nature exploration in UNESCO World Heritage Sinharaja Rainforest",
      "Gem museum tour and independent gemstone shopping with certification"
    ],
    overview: "Immerse yourself in the captivating world of Sri Lankan gemstones, traditional craftsmanship, and primordial rainforest. Journey into Ratnapura—the historic 'City of Gems'—to descend into working artisan gem pits, discover how world-renowned Ceylon sapphires are mined, cut, and polished, witness traditional kithul syrup tapping in Erathna, and explore the dense, living canopy of Sinharaja Rainforest.",
    inclusions: [
      "Private luxury AC vehicle with licensed professional chauffeur-guide for all 7 days",
      "Airport meet & greet with return transfer",
      "Authorized artisan gem mine visit and lapidary demonstration",
      "Erathna tea estate & traditional kithul tapping demonstration with local producer",
      "Licensed naturalist guide for Sinharaja Rainforest exploration",
      "All driver accommodation, fuel, highway tolls and parking",
      "24/7 dedicated traveler concierge support"
    ],
    exclusions: [
      "Sinharaja Forest Reserve entrance permits",
      "Purchases of certified gemstones or jewelry",
      "Meals, beverages and personal expenses",
      "International flights and visa"
    ],
    faqs: [
      {
        question: "Can I buy certified Ceylon sapphires during the tour?",
        answer: "Yes, we visit reputable gemological establishments in Ratnapura where you can purchase gemstones with independent gemological laboratory certificates (NGJA / GIA / GRS)."
      },
      {
        question: "How does the traditional gem mining visit work?",
        answer: "You visit a licensed working pit with a local miner, observe the timber shoring, water pumping, and gravel-washing baskets (illama), and learn how rough stones are spotted."
      }
    ],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: "Arrival, Bopath Ella & Ratnapura",
        location: "Ratnapura",
        route: "Airport → Bopath Ella → Ratnapura",
        description: "Warm welcome at the airport by your private chauffeur-guide. Travel towards Ratnapura, Sri Lanka's famous City of Gems. Visit beautiful Bopath Ella Waterfall (shaped like a sacred Bo leaf). Continue to Ratnapura, settle into your accommodation, and relax.",
        highlights: ["Airport welcome", "Bopath Ella Waterfall", "Ratnapura arrival"],
        overnight: "Ratnapura"
      },
      {
        day: 2,
        title: "Authentic Gem Mining & Ceylon Gemstone Heritage",
        location: "Ratnapura",
        route: "Explore Ratnapura Gem Pits & Lapidary",
        description: "Visit an authentic working gem mine with an authorized local host. Learn how miners extract gem-bearing gravel (illama) using ancient traditional techniques. Watch the washing process and rough gemstone identification. Later, visit a gem-cutting and polishing workshop to see rough stones transformed into brilliant sapphires.",
        highlights: ["Working gem mine pit visit", "Traditional gravel-washing demonstration", "Lapidary cutting & polishing workshop", "Ceylon sapphire heritage"],
        overnight: "Ratnapura"
      },
      {
        day: 3,
        title: "Erathna Tea Country & Traditional Kithul Experience",
        location: "Ratnapura / Erathna area",
        route: "Ratnapura → Erathna",
        description: "Travel through beautiful countryside to Erathna. Visit a low-country tea estate to learn about low-grown tea cultivation and processing. Experience traditional kithul tapping with a local producer, observing how kithul sap is harvested from palm flowers and boiled into golden treacle and sweet jaggery.",
        highlights: ["Erathna low-country tea estate", "Traditional kithul tapping demonstration", "Tasting fresh kithul treacle & jaggery", "Authentic village hospitality"],
        overnight: "Ratnapura / Erathna area"
      },
      {
        day: 4,
        title: "Journey to Sinharaja Rainforest via Kudawa",
        location: "Kudawa / Sinharaja area",
        route: "Erathna → Kudawa",
        description: "Enjoy a scenic drive through the emerald countryside towards Kudawa, the northern gateway to Sinharaja Forest Reserve. Check in to an eco-lodge bordering the rainforest and enjoy the peaceful canopy sounds.",
        highlights: ["Scenic rural countryside journey", "Kudawa forest gate arrival", "Rainforest eco-lodge check-in"],
        overnight: "Kudawa / Sinharaja area"
      },
      {
        day: 5,
        title: "Guided Sinharaja Rainforest Exploration",
        location: "Kudawa / Sinharaja area",
        route: "Sinharaja Forest Reserve (Kudawa Gate)",
        description: "Enter Sinharaja Forest Reserve through the Kudawa gate with a licensed forest naturalist. Explore pristine rainforest trails, giant tree ferns, forest streams, and look out for endemic birds such as the Sri Lanka Blue Magpie and Red-faced Malkoha. Return to your lodge for a relaxing evening.",
        highlights: ["Sinharaja UNESCO World Heritage exploration", "Endemic bird species & flora", "Cool forest streams & waterfalls", "Canopy nature walk"],
        overnight: "Kudawa / Sinharaja area"
      },
      {
        day: 6,
        title: "Gem Discovery, Local Culture & Relaxation",
        location: "Ratnapura",
        route: "Kudawa → Ratnapura",
        description: "Return towards Ratnapura at a comfortable pace. Visit a gem museum to learn about gemstone grading, colour varieties, and historical royal jewelry. Enjoy time for optional gemstone shopping with verified certification. Savor local cuisine in the evening.",
        highlights: ["Gem museum visit", "Gemstone grading & certification guide", "Optional certified gem shopping", "Local cuisine"],
        overnight: "Ratnapura"
      },
      {
        day: 7,
        title: "Departure from Ratnapura",
        location: "Ratnapura to Airport",
        route: "Ratnapura → Airport",
        description: "Enjoy breakfast and a relaxed morning. Begin your private transfer through green countryside towards Bandaranaike International Airport or your next destination, carrying sparkling memories of Sri Lanka's gem and green heritage.",
        highlights: ["Scenic transfer to airport", "Departure farewell"],
        overnight: "Departure"
      }
    ]
  }
];
