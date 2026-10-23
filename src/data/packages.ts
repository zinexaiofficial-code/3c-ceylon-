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
  style: "Cultural & Highlights" | "Heritage & Culture" | "Coastal & Beach" | "Highlands & Culture" | "Private Tour";
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
  {
    id: "pkg-1",
    slug: "sri-lanka-highlights-6-days",
    title: "Sri Lanka Highlights: 5 Nights / 6 Days",
    subtitle: "Ancient Wonders, Scenic Mountains & Tropical Beaches",
    tagline: "UNESCO heritage • Highland tea estates • Scenic train ride • Safari & southern beaches",
    brandLine: "A private journey with 3C Ceylon Tours",
    durationDays: 6,
    durationNights: 5,
    image: "/images/packages/tropical-lighthouse-tuk-tuk.png",
    gallery: [
      "/images/packages/tropical-lighthouse-tuk-tuk.png",
      "/images/places/Sigiriya/Sigiriya.jpg",
      "/images/places/Ella/ella1.jpg",
      "/images/places/Mirissa/mirissa1.jpg"
    ],
    style: "Cultural & Highlights",
    activityLevel: "Moderate",
    travelStyle: "Private Tour",
    idealFor: "Couples, families, first-time visitors and travellers seeking culture, nature, adventure and beaches.",
    destinationsCovered: ["Sigiriya", "Kandy", "Nuwara Eliya", "Ella", "Mirissa", "Galle"],
    highlights: [
      "Explore the ancient Sigiriya Rock Fortress and Dambulla Cave Temple.",
      "Experience traditional Sri Lankan village life and home-cooked cuisine.",
      "Enjoy panoramic views from Pidurangala Rock.",
      "Discover the cultural charm of Kandy.",
      "Travel through tea plantations and misty mountains.",
      "Experience the scenic train journey from Nanu Oya to Ella.",
      "Explore Ella's iconic landmarks and adventure activities.",
      "Enjoy a wildlife safari in Yala or Udawalawe National Park.",
      "Discover the colonial charm of Galle Fort.",
      "Relax on the beautiful beaches of Mirissa."
    ],
    overview: "Discover the best of Sri Lanka in six unforgettable days. Explore ancient UNESCO World Heritage Sites, experience authentic village life, travel through lush tea plantations, enjoy one of the world's most scenic train journeys, and relax on the beautiful southern coast.\n\nFrom cultural landmarks and mountain adventures to wildlife and golden beaches, this journey offers a wonderful introduction to the island.",
    itinerary: [
      {
        day: 1,
        title: "Airport Arrival & Ancient Sigiriya",
        location: "Sigiriya",
        route: "Airport → Dambulla → Sigiriya",
        description: "Upon arrival at Bandaranaike International Airport, meet your friendly local representative from 3C Ceylon Tours and begin your journey towards Sri Lanka's Cultural Triangle. Along the way, visit the magnificent Dambulla Cave Temple, a UNESCO World Heritage Site famous for its ancient Buddhist paintings and impressive collection of Buddha statues. Continue to Sigiriya and check in to your hotel. In the afternoon, enjoy an authentic Sri Lankan village experience featuring a traditional bullock cart ride, a catamaran ride across a village lake, and a demonstration of local village life. Enjoy a freshly prepared traditional Sri Lankan lunch in a village home. In the evening, you can optionally climb Pidurangala Rock to enjoy breathtaking panoramic views of Sigiriya Rock Fortress at sunset.",
        highlights: [
          "Dambulla Cave Temple",
          "Village experience",
          "Traditional Sri Lankan lunch",
          "Pidurangala sunset"
        ],
        meals: "Traditional Sri Lankan Village Lunch",
        overnight: "Sigiriya"
      },
      {
        day: 2,
        title: "Sigiriya Rock Fortress & Cultural Kandy",
        location: "Kandy",
        route: "Sigiriya → Kandy",
        description: "Start your morning early with a climb to the iconic Sigiriya Rock Fortress, a UNESCO World Heritage Site renowned for its ancient royal palace, remarkable frescoes and fascinating history. After exploring this extraordinary landmark, continue towards Kandy, travelling through the beautiful landscapes of Sri Lanka's central region. In the evening, experience the vibrant rhythms and colourful traditions of a Sri Lankan cultural dance performance. End the day with a relaxing walk around Kandy Lake, enjoying the peaceful atmosphere of this historic city.",
        highlights: [
          "Sigiriya Rock Fortress",
          "Scenic countryside",
          "Traditional cultural dance",
          "Kandy Lake"
        ],
        meals: "Breakfast",
        overnight: "Kandy"
      },
      {
        day: 3,
        title: "Temple of the Tooth, Tea Country & Scenic Train Journey",
        location: "Ella",
        route: "Kandy → Nuwara Eliya → Ella",
        description: "Begin your morning with a visit to the sacred Temple of the Sacred Tooth Relic, one of Buddhism's most important pilgrimage sites and part of the UNESCO-listed Sacred City of Kandy. Continue into Sri Lanka's spectacular hill country, travelling through misty mountains, winding roads and lush tea plantations. Arrive in Nuwara Eliya, a charming town known for its cool climate and colonial character. Visit the historic Nuwara Eliya Post Office and enjoy the peaceful surroundings of Gregory Lake. Later, travel by train from Nanu Oya to Ella, enjoying one of Sri Lanka's most celebrated scenic railway journeys through green mountains, tea estates and picturesque villages. Upon arrival at Ella railway station, meet your driver and transfer to your hotel. In the evening, explore Ella's lively town centre, where you can enjoy local restaurants, cafés and music.",
        highlights: [
          "Temple of the Sacred Tooth Relic",
          "Tea plantations",
          "Nuwara Eliya",
          "Scenic hill-country train journey"
        ],
        meals: "Breakfast",
        overnight: "Ella",
        notes: "Train tickets are subject to availability. The journey and sightseeing schedule may be adjusted to match the confirmed train timetable."
      },
      {
        day: 4,
        title: "Ella Adventures & Southern Coast",
        location: "Mirissa",
        route: "Ella → Wildlife Safari (Optional) → Mirissa",
        description: "Start the day with an early morning hike to Little Adam's Peak, where spectacular mountain views reward you at the summit. For adventure lovers, enjoy optional activities at the Flying Ravana Adventure Park, including a zip-line experience and other available attractions. Continue to the famous Nine Arch Bridge, an architectural landmark surrounded by lush tropical greenery and tea-covered hills. On the way towards the southern coast, stop at Ravana Falls, one of Sri Lanka's best-known waterfalls. For an unforgettable wildlife experience, you may choose to visit either Yala National Park or Udawalawe National Park for an afternoon safari. Discover Sri Lanka's diverse wildlife, with opportunities to spot elephants, crocodiles, deer and a variety of bird species. Leopard sightings in Yala are possible but never guaranteed. After your safari, continue to Mirissa on Sri Lanka's beautiful southern coast.",
        highlights: [
          "Little Adam's Peak",
          "Adventure activities",
          "Nine Arch Bridge",
          "Ravana Falls",
          "Optional wildlife safari"
        ],
        meals: "Breakfast",
        overnight: "Mirissa",
        notes: "The safari is optional and depends on the chosen park, travel time and availability. Including a safari may make this day long, so the schedule should be confirmed before booking."
      },
      {
        day: 5,
        title: "Mirissa Beach & Historic Galle Fort",
        location: "Mirissa & Galle",
        route: "Mirissa → Galle Fort → Mirissa",
        description: "Enjoy a relaxed morning at Mirissa Beach, one of Sri Lanka's most popular coastal destinations. Take time to swim where conditions are safe, relax on the sand or enjoy the tropical atmosphere at a beachfront restaurant. In the afternoon, travel to Galle and discover the historic Galle Fort, a UNESCO World Heritage Site showcasing centuries of colonial history and distinctive architecture. Wander through charming cobblestone streets, admire historic buildings, browse boutique shops and enjoy the cafés and restaurants within the fort's atmospheric streets. As the day draws to a close, enjoy the beautiful coastal surroundings before returning to Mirissa.",
        highlights: [
          "Mirissa Beach",
          "Galle Dutch Fort",
          "Colonial architecture",
          "Boutique shopping and seaside cafés"
        ],
        meals: "Breakfast",
        overnight: "Mirissa"
      },
      {
        day: 6,
        title: "Coconut Tree Hill & Departure",
        location: "Mirissa to Colombo Airport",
        route: "Mirissa → Airport",
        description: "Begin your final morning with a visit to the iconic Coconut Tree Hill, famous for its rows of coconut palms overlooking the Indian Ocean. Enjoy the sea breeze, take memorable holiday photographs and spend some final moments relaxing by the beach, depending on your departure schedule. After breakfast, begin your journey to Bandaranaike International Airport for your departure flight, carrying wonderful memories of Sri Lanka's culture, mountains, wildlife and tropical coastline.",
        highlights: [
          "Coconut Tree Hill",
          "Ocean views",
          "Relaxing farewell to Sri Lanka"
        ],
        meals: "Breakfast",
        overnight: "Departure"
      }
    ],
    inclusions: [
      "100% Private tour with dedicated air-conditioned luxury vehicle",
      "Experienced English-speaking professional chauffeur-guide",
      "All airport pickups, transfers, and highway toll charges",
      "Sightseeing and excursions as outlined in the itinerary",
      "Authentic traditional Sri Lankan village lunch in Sigiriya",
      "Complimentary bottled water during travel",
      "24/7 dedicated customer service and support from 3C Ceylon Tours"
    ],
    exclusions: [
      "International flights and Sri Lanka entry visa fees",
      "Monument and site entrance tickets (Sigiriya, Dambulla, Temple of Tooth, etc.)",
      "Optional safari jeep hire and national park admission (Yala/Udawalawe)",
      "Optional adventure park activities (Flying Ravana zip-line)",
      "Personal expenses, laundry, telephone calls, and beverages",
      "Tips and gratuities for guide and drivers"
    ],
    faqs: [
      {
        question: "Can this tour itinerary be customized?",
        answer: "Yes, absolutely! 3C Ceylon Tours specializes in 100% private bespoke travel. We can add or remove days, change hotels, or adjust the sightseeing stops to perfectly suit your preferences."
      },
      {
        question: "Is the scenic hill-country train ride included?",
        answer: "The scenic train ride from Nanu Oya to Ella is scheduled as part of the tour. Train tickets are subject to government railway availability and timetable confirmation, and your chauffeur will assist with transfers."
      },
      {
        question: "Can we include the wildlife safari on Day 4?",
        answer: "Yes! You can choose an afternoon 4x4 safari at either Yala National Park (for leopards, elephants, and bears) or Udawalawe National Park (renowned for large elephant herds). Your itinerary can be tailored to accommodate either."
      }
    ],
    featured: true
  },
  {
    id: "pkg-2",
    slug: "ceylon-heritage-escape-3-days",
    title: "3C Ceylon Heritage Escape",
    subtitle: "Discover Ancient Wonders & Sri Lankan Culture",
    tagline: "Ancient kingdoms • UNESCO rock fortress • Sacred Tooth Relic • Kandyan dances",
    brandLine: "A private journey with 3C Ceylon Tours",
    durationDays: 3,
    durationNights: 2,
    image: "/images/packages/ceylon-heritage-escape.jpeg",
    gallery: [
      "/images/packages/ceylon-heritage-escape.jpeg",
      "/images/places/Sigiriya/Sigiriya.jpg",
      "/images/places/Kandy/kandy1.jpg",
      "/images/places/Dambulla/dambulla1.jpg"
    ],
    style: "Heritage & Culture",
    activityLevel: "Relaxed",
    travelStyle: "Private Tour",
    idealFor: "Couples, families, first-time visitors and culture lovers.",
    destinationsCovered: ["Sigiriya", "Dambulla", "Kandy"],
    highlights: [
      "Dambulla Cave Temple – UNESCO World Heritage Site",
      "Traditional Sri Lankan village experience",
      "Bullock cart and catamaran rides",
      "Authentic village cooking and lunch in a local home",
      "Sigiriya Rock Fortress – UNESCO World Heritage Site",
      "Temple of the Sacred Tooth Relic in Kandy",
      "Traditional Kandyan cultural dance performance",
      "Scenic Kandy Lake"
    ],
    overview: "Explore Sri Lanka's rich heritage on a memorable three-day journey. Discover ancient UNESCO World Heritage Sites, experience traditional village life, climb the iconic Sigiriya Rock Fortress and explore the cultural heart of Kandy.\n\nFrom authentic local experiences to sacred Buddhist landmarks, this short escape offers a wonderful introduction to Sri Lanka.",
    itinerary: [
      {
        day: 1,
        title: "Welcome to Sri Lanka & Traditional Village Life",
        location: "Sigiriya",
        route: "Airport → Dambulla → Sigiriya",
        description: "Your Sri Lankan adventure begins with a warm welcome from 3C Ceylon Tours at Bandaranaike International Airport. Travel towards the Cultural Triangle and visit the magnificent Dambulla Cave Temple, a UNESCO World Heritage Site famous for its ancient Buddhist murals and impressive Buddha statues. Continue to Sigiriya and enjoy an authentic Sri Lankan village experience. Discover traditional village life with a bullock cart ride, a catamaran ride across a village lake and an introduction to local customs and cooking. Enjoy a freshly prepared traditional Sri Lankan lunch in a village home before transferring to your hotel. Spend the rest of the evening relaxing and enjoying the peaceful surroundings of Sigiriya.",
        highlights: [
          "Dambulla Cave Temple",
          "Traditional village life",
          "Bullock cart ride",
          "Catamaran experience",
          "Authentic Sri Lankan lunch"
        ],
        meals: "Traditional Sri Lankan Village Lunch",
        overnight: "Sigiriya"
      },
      {
        day: 2,
        title: "Ancient Sigiriya & Cultural Kandy",
        location: "Kandy",
        route: "Sigiriya → Kandy",
        description: "Begin your morning with an early climb to the magnificent Sigiriya Rock Fortress, a UNESCO World Heritage Site renowned for its ancient royal history, remarkable frescoes, landscaped gardens and spectacular panoramic views. After exploring this iconic landmark, travel towards Kandy through the beautiful landscapes of central Sri Lanka. Visit the sacred Temple of the Sacred Tooth Relic, one of Buddhism's most important pilgrimage sites and a UNESCO World Heritage Site. In the evening, experience the vibrant rhythms, traditional costumes and captivating performances of a Kandyan cultural dance show.",
        highlights: [
          "Sigiriya Rock Fortress",
          "Scenic countryside",
          "Temple of the Sacred Tooth Relic",
          "Traditional Kandyan dance"
        ],
        meals: "Breakfast",
        overnight: "Kandy"
      },
      {
        day: 3,
        title: "Kandy & Departure",
        location: "Kandy to Airport",
        route: "Kandy → Airport",
        description: "Enjoy a relaxing morning with a walk around beautiful Kandy Lake, surrounded by the city's historic landmarks and peaceful scenery. If time permits, visit the Royal Botanic Gardens in Peradeniya, famous for their tropical plants, beautiful landscaped grounds and impressive tree collections. After your sightseeing, begin your journey to Bandaranaike International Airport for your departure flight. Leave Sri Lanka with unforgettable memories of its ancient heritage, welcoming people and fascinating culture.",
        highlights: [
          "Kandy Lake",
          "Optional Royal Botanic Gardens",
          "Comfortable airport transfer"
        ],
        meals: "Breakfast",
        overnight: "Departure"
      }
    ],
    inclusions: [
      "100% Private chauffeured tour with dedicated AC vehicle",
      "English-speaking professional tourist chauffeur-guide",
      "Airport meet & greet, roundtrip airport transfers",
      "Traditional village experience with catamaran and bullock cart ride",
      "Home-cooked authentic Sri Lankan lunch in village home",
      "All fuel, parking, and highway toll fees",
      "24/7 travel concierge assistance"
    ],
    exclusions: [
      "Entrance fees to monuments (Sigiriya Fortress, Dambulla Caves, Temple of Tooth)",
      "Optional entrance to Peradeniya Botanical Gardens",
      "Personal expenses, drinks, and meals not specified",
      "Gratuities for guide/driver"
    ],
    faqs: [
      {
        question: "Is this package suitable for a short stopover?",
        answer: "Yes, this 3-day itinerary is ideally planned for travelers with a short holiday or transit in Sri Lanka who wish to experience the most celebrated heritage icons without feeling rushed."
      },
      {
        question: "Can we start directly from a hotel in Colombo or Negombo?",
        answer: "Yes, pickup can be arranged from Bandaranaike Airport, or any hotel in Colombo, Negombo, or surrounding areas at no additional hassle."
      }
    ],
    featured: true
  },
  {
    id: "pkg-3",
    slug: "southern-soul-3-days",
    title: "3C Southern Soul",
    subtitle: "Feel the Rhythm of Sri Lanka's Southern Coast",
    tagline: "Tropical beaches • Colonial charm • Ocean adventures • Authentic local experiences",
    brandLine: "A private journey with 3C Ceylon Tours",
    durationDays: 3,
    durationNights: 2,
    image: "/images/packages/southern-soul.jpeg",
    gallery: [
      "/images/packages/southern-soul.jpeg",
      "/images/places/Mirissa/mirissa1.jpg",
      "/images/places/Galle/galle1.jpg",
      "/images/places/Bentota/bentota1.jpg"
    ],
    style: "Coastal & Beach",
    activityLevel: "Relaxed",
    travelStyle: "Private Tour",
    idealFor: "Couples, friends, beach lovers and travellers seeking culture, relaxation and coastal experiences.",
    destinationsCovered: ["Galle", "Unawatuna", "Mirissa", "Koggala"],
    highlights: [
      "Explore the UNESCO World Heritage Site of Galle Fort.",
      "Relax on the beautiful beaches of Unawatuna and Mirissa.",
      "Discover the iconic Coconut Tree Hill viewpoint.",
      "Enjoy optional seasonal whale-watching adventures.",
      "Experience a scenic boat ride on Koggala Lake.",
      "Discover Ceylon cinnamon and traditional local life.",
      "Visit the islands of Koggala Lake.",
      "Learn about sea turtle conservation at a local hatchery."
    ],
    overview: "Discover the charm of Sri Lanka's southern coast on a relaxing three-day escape. Wander through the historic streets of Galle Fort, unwind on golden beaches, enjoy the vibrant atmosphere of Mirissa and discover the island's traditional cinnamon heritage on a scenic boat ride across Koggala Lake.\n\nFrom coastal sunsets to authentic cultural encounters, experience the southern coast with 3C Ceylon Tours.",
    itinerary: [
      {
        day: 1,
        title: "Welcome to the Southern Coast",
        location: "Galle & Unawatuna",
        route: "Airport → Unawatuna → Galle",
        description: "Your Sri Lankan coastal escape begins with a warm welcome from 3C Ceylon Tours at Bandaranaike International Airport. Travel south towards the beautiful coastal city of Galle. After your journey, enjoy some relaxing beach time at Unawatuna, known for its tropical surroundings and inviting coastal atmosphere. In the evening, explore the historic Galle Fort, a UNESCO World Heritage Site renowned for its colonial architecture, charming streets and fascinating history. Walk along the historic fortifications, browse boutique shops and discover the cafés tucked away along the cobblestone streets. End your day with a memorable dinner at a restaurant within Galle Fort, enjoying the unique atmosphere of this historic coastal destination.",
        highlights: [
          "Airport welcome",
          "Unawatuna Beach",
          "Galle Fort",
          "Colonial streets",
          "Boutique shops",
          "Memorable dinner"
        ],
        meals: "Dinner Recommendation",
        overnight: "Galle or Unawatuna"
      },
      {
        day: 2,
        title: "Mirissa Beach & Ocean Adventures",
        location: "Mirissa",
        route: "Galle / Unawatuna → Mirissa",
        description: "Start your day with an optional early-morning whale-watching excursion from Mirissa, available when seasonal services and sea conditions permit. Return to the coast and enjoy some well-deserved relaxation at Mirissa Beach. Spend time beside the ocean, discover local beachfront cafés or enjoy lunch at a coastal restaurant. Later, visit the iconic Coconut Tree Hill, one of the southern coast's most recognisable photography spots, offering beautiful views of coconut palms overlooking the Indian Ocean. As evening approaches, experience the lively atmosphere of Mirissa. Enjoy beachfront dining, refreshing drinks and the sounds of music along the coast.",
        highlights: [
          "Optional whale watching",
          "Mirissa Beach",
          "Coconut Tree Hill",
          "Beachfront restaurants",
          "Coastal nightlife"
        ],
        meals: "Breakfast",
        overnight: "Mirissa"
      },
      {
        day: 3,
        title: "Koggala Lake, Cinnamon Heritage & Departure",
        location: "Koggala to Airport",
        route: "Mirissa → Koggala → Airport",
        description: "After breakfast, discover the natural beauty and cultural heritage of Koggala Lake on a scenic boat ride through its peaceful waterways. Explore the lake's distinctive island landscapes and discover the traditional Ceylon cinnamon experience, learning about one of Sri Lanka's most famous products and its connection to local livelihoods. Depending on the boat route and conditions, you may also visit selected islands, such as Cinnamon Island and Temple Island, and observe birdlife and other wildlife around the lake. Continue to a local turtle conservation centre to learn about sea turtles and the importance of protecting Sri Lanka's coastal ecosystems. After your coastal adventures, begin your journey to Bandaranaike International Airport for your departure flight, taking home unforgettable memories of Sri Lanka's southern coast.",
        highlights: [
          "Koggala Lake boat ride",
          "Ceylon cinnamon experience",
          "Selected lake islands",
          "Local wildlife",
          "Turtle conservation"
        ],
        meals: "Breakfast",
        overnight: "Departure"
      }
    ],
    inclusions: [
      "100% Private air-conditioned luxury vehicle throughout the tour",
      "Friendly, professional local chauffeur-guide",
      "Airport pickup and final airport transfer via the Southern Expressway",
      "Koggala Lake scenic boat safari and cinnamon experience",
      "Visit to sea turtle conservation hatchery",
      "Complimentary chilled mineral water during drives",
      "24/7 dedicated customer assistance"
    ],
    exclusions: [
      "Optional early morning whale watching boat tour in Mirissa",
      "Personal water sports, surfing lessons, and scuba diving",
      "Meals and beverages not explicitly listed",
      "Tips for boat operators, hotel staff, and driver"
    ],
    faqs: [
      {
        question: "When is the best season for whale watching in Mirissa?",
        answer: "The prime whale watching season in Mirissa runs from November to April when the sea is calm and blue whales, sperm whales, and dolphins migrate close to the southern coast."
      },
      {
        question: "Can we extend this tour with extra beach nights?",
        answer: "Yes, you can easily add extra relaxation days in Mirissa, Bentota, or Tangalle. Simply let our team know during your inquiry."
      }
    ],
    featured: true
  },
  {
    id: "pkg-4",
    slug: "ceylon-explorer-4-days",
    title: "3C Ceylon Explorer",
    subtitle: "Explore Ancient Wonders & Discover the Heart of Sri Lanka",
    tagline: "Ancient kingdoms • Authentic village life • Cultural heritage • Scenic mountains • Ceylon tea",
    brandLine: "A private journey with 3C Ceylon Tours",
    durationDays: 4,
    durationNights: 3,
    image: "/images/packages/ceylon-explorer.jpeg",
    gallery: [
      "/images/packages/ceylon-explorer.jpeg",
      "/images/places/Sigiriya/Sigiriya.jpg",
      "/images/places/Nuwara Eliya/nuwaraeliya1.jpg",
      "/images/places/Kandy/kandy1.jpg"
    ],
    style: "Highlands & Culture",
    activityLevel: "Moderate",
    travelStyle: "Private Tour",
    idealFor: "Couples, families, first-time visitors, culture lovers and nature enthusiasts.",
    destinationsCovered: ["Dambulla", "Sigiriya", "Kandy", "Nuwara Eliya"],
    highlights: [
      "Discover Dambulla Cave Temple, a UNESCO World Heritage Site.",
      "Experience authentic Sri Lankan village life, including a bullock cart ride and catamaran experience.",
      "Enjoy a traditional village cooking experience and local lunch.",
      "Climb the iconic Sigiriya Rock Fortress.",
      "Experience the panoramic sunset views from Pidurangala Rock (optional).",
      "Visit the sacred Temple of the Sacred Tooth Relic in Kandy.",
      "Enjoy a traditional Kandyan cultural dance performance.",
      "Explore Ramboda Falls and the spectacular hill-country landscapes.",
      "Discover Ceylon tea through a plantation visit, tea production and tea tasting.",
      "Experience the colonial charm of Nuwara Eliya.",
      "Visit the sacred Seetha Amman Temple."
    ],
    overview: "Discover the diversity of Sri Lanka on a four-day journey through its cultural heartland and spectacular hill country. Explore ancient rock fortresses, experience traditional village life, discover sacred Buddhist landmarks and travel through lush tea plantations into the cool, misty landscapes of Nuwara Eliya.\n\nFrom authentic local experiences to the timeless charm of the highlands, this journey brings you closer to the heart of Sri Lanka.",
    itinerary: [
      {
        day: 1,
        title: "Ancient Dambulla & Traditional Village Life",
        location: "Sigiriya",
        route: "Airport → Dambulla → Sigiriya",
        description: "Your Sri Lankan adventure begins with a warm welcome from 3C Ceylon Tours at Bandaranaike International Airport. Travel towards the Cultural Triangle and visit the magnificent Dambulla Cave Temple, a UNESCO World Heritage Site famous for its ancient Buddhist murals, impressive Buddha statues and fascinating history. Continue to Sigiriya and discover the charm of traditional Sri Lankan village life. Enjoy a memorable village experience featuring a traditional bullock cart ride, a catamaran ride across a village lake and an introduction to local customs and rural traditions. Experience traditional Sri Lankan cooking and savour a freshly prepared local lunch in a village home. In the evening, you may optionally climb Pidurangala Rock to enjoy spectacular panoramic views of the surrounding countryside and Sigiriya Rock Fortress at sunset. Return to your hotel and relax in the peaceful surroundings of Sigiriya.",
        highlights: [
          "Dambulla Cave Temple",
          "Traditional village experience",
          "Bullock cart ride",
          "Catamaran experience",
          "Local cooking",
          "Pidurangala sunset"
        ],
        meals: "Traditional Sri Lankan Village Lunch",
        overnight: "Sigiriya"
      },
      {
        day: 2,
        title: "Sigiriya Rock Fortress & Cultural Kandy",
        location: "Kandy",
        route: "Sigiriya → Kandy",
        description: "Start your morning early with a climb to the magnificent Sigiriya Rock Fortress, a UNESCO World Heritage Site renowned for its ancient royal palace, remarkable frescoes, landscaped gardens and breathtaking views. After exploring this iconic landmark, begin your journey towards Kandy through the beautiful landscapes of central Sri Lanka. Upon arrival, visit the sacred Temple of the Sacred Tooth Relic, one of the most important Buddhist pilgrimage sites in the world and a UNESCO World Heritage Site. In the evening, enjoy a traditional Kandyan cultural dance performance, featuring colourful costumes, rhythmic drumming and captivating Sri Lankan traditions. End the day with a relaxing walk around Kandy Lake, enjoying the peaceful atmosphere of this historic city.",
        highlights: [
          "Sigiriya Rock Fortress",
          "Scenic countryside",
          "Temple of the Sacred Tooth Relic",
          "Kandyan cultural dance",
          "Kandy Lake"
        ],
        meals: "Breakfast",
        overnight: "Kandy"
      },
      {
        day: 3,
        title: "Ramboda Falls & The Tea Country of Nuwara Eliya",
        location: "Nuwara Eliya",
        route: "Kandy → Ramboda → Nuwara Eliya",
        description: "After breakfast, begin your journey into Sri Lanka's spectacular hill country, travelling through winding mountain roads, lush green landscapes and beautiful tea plantations. Stop at Ramboda Falls, a picturesque waterfall surrounded by the natural beauty of the central highlands. Continue into the heart of Ceylon tea country and discover the story behind one of Sri Lanka's most famous exports. Visit a tea plantation and, where available, a working tea factory to learn about traditional tea cultivation, leaf processing and production. Enjoy a tea-tasting experience and discover the distinctive flavours of Ceylon tea. Arrive in Nuwara Eliya, affectionately known as Little England, a charming highland town famous for its cool climate, colonial architecture and scenic surroundings. Explore the historic Nuwara Eliya Post Office and enjoy a relaxing visit to Gregory Lake, where you can appreciate the peaceful mountain atmosphere. Spend the evening unwinding in the cool climate of this beautiful hill-country destination.",
        highlights: [
          "Scenic mountain drive",
          "Ramboda Falls",
          "Tea plantation",
          "Tea factory experience",
          "Ceylon tea tasting",
          "Colonial architecture",
          "Gregory Lake"
        ],
        meals: "Breakfast & Ceylon Tea Tasting",
        overnight: "Nuwara Eliya"
      },
      {
        day: 4,
        title: "Seetha Amman Temple & Departure",
        location: "Nuwara Eliya to Airport",
        route: "Nuwara Eliya → Airport",
        description: "Begin your final morning with a visit to the sacred Seetha Amman Temple, a unique Hindu temple associated with the Ramayana legend and situated amid the beautiful landscapes near Nuwara Eliya. Discover the temple's spiritual significance and enjoy the peaceful natural surroundings. After your visit, begin your journey towards Bandaranaike International Airport, travelling through Sri Lanka's scenic hill-country landscapes. Relax and reflect on your unforgettable journey through ancient kingdoms, traditional villages, sacred landmarks and the misty tea country of Sri Lanka. Depart with wonderful memories of your Ceylon adventure.",
        highlights: [
          "Seetha Amman Temple",
          "Hill-country scenery",
          "Memorable farewell to Sri Lanka"
        ],
        meals: "Breakfast",
        overnight: "Departure"
      }
    ],
    inclusions: [
      "100% Private air-conditioned luxury transportation with dedicated chauffeur-guide",
      "Airport meet & greet, all airport and intercity transfers",
      "Traditional village experience with bullock cart, catamaran ride, and local lunch",
      "Visit to tea plantation and working tea factory with Ceylon tea tasting session",
      "Scenic stops at Ramboda Falls, Gregory Lake, and Seetha Amman Temple",
      "Complimentary cold mineral water in vehicle throughout",
      "All tolls, parking fees, and chauffeur accommodation"
    ],
    exclusions: [
      "Entrance tickets to UNESCO Sigiriya Citadel, Dambulla Caves, and Kandy Temple",
      "Optional Pidurangala Rock entrance fee",
      "Personal items, souvenirs, alcoholic beverages, and extra meals",
      "Gratuities and tips for guides and drivers"
    ],
    faqs: [
      {
        question: "Is Nuwara Eliya cold during the evening?",
        answer: "Yes, Nuwara Eliya sits at 1,868 meters elevation and temperatures can drop to 12°C - 16°C in the evenings. We recommend packing a light jacket or sweater."
      },
      {
        question: "Can we extend this tour to include the southern coast beaches?",
        answer: "Yes! 3C Ceylon Tours can seamlessly extend this 4-day tour to continue down to Ella, Yala safari, and the beaches of Mirissa or Galle."
      }
    ],
    featured: true
  }
];
