export interface BlogSection {
  heading: string;
  subheading?: string;
  content: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: "Destinations" | "Travel Advice" | "Itineraries" | "Wildlife" | "Honeymoon & Luxury";
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedDate: string;
  updatedDate: string;
  metaDescription: string;
  keywords: string[];
  tableOfContents: string[];
  sections: BlogSection[];
  relatedSlugs: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    slug: "best-places-to-visit-in-sri-lanka",
    title: "10 Best Places to Visit in Sri Lanka: The Ultimate 2026 Travel Guide",
    excerpt: "From the celestial fortress of Sigiriya to the leopard-ruled wilderness of Yala and the mist-clad tea trails of Ella, discover Sri Lanka's finest destinations.",
    readTime: "8 min read",
    category: "Destinations",
    image: "/images/welcome-srilanka.jpg",
    author: {
      name: "3C Ceylon Tours Editorial Team",
      role: "Senior Destination Specialists",
      avatar: "/images/logo.png"
    },
    publishedDate: "2026-01-15",
    updatedDate: "2026-03-10",
    metaDescription: "Explore the 10 best places to visit in Sri Lanka in 2026. Discover ancient UNESCO fortresses, mist-shrouded tea hills, golden beaches, and wild leopard safaris.",
    keywords: ["best places to visit in sri lanka", "sri lanka destinations", "sigiriya", "ella sri lanka", "yala national park", "galle fort"],
    tableOfContents: [
      "1. Sigiriya Rock Fortress — The Citadel in the Sky",
      "2. Galle Fort — 17th-Century Living Maritime Heritage",
      "3. Ella — The Scenic Mountain & Railway Oasis",
      "4. Yala National Park — Kingdom of the Sri Lankan Leopard",
      "5. Nuwara Eliya — 'Little England' & Pure Ceylon Tea Country",
      "6. Kandy — The Spiritual Heart & Temple of the Tooth",
      "7. Mirissa & Weligama — Ocean Whales & Golden Waves",
      "8. Polonnaruwa & Anuradhapura — Sacred Ancient Capitals",
      "9. Bentota — Golden Sands & Tropical River Mangroves",
      "10. Sinharaja Forest Reserve — UNESCO Virgin Rainforest"
    ],
    sections: [
      {
        heading: "1. Sigiriya Rock Fortress — The Citadel in the Sky",
        subheading: "The Eighth Wonder of the World in the Cultural Triangle",
        content: "Rising 200 meters vertically above the dense forest plains of central Sri Lanka, Sigiriya is an engineering and artistic marvel from the 5th century. Commissioned by King Kasyapa, the summit once held a palace surrounded by symmetrical water gardens, mysterious mirror walls, and 1,500-year-old fresco murals. Arrive at 06:45 AM to climb the 1,200 steps in cool morning air and enjoy panoramic sunrises over the central mountains."
      },
      {
        heading: "2. Galle Fort — 17th-Century Living Maritime Heritage",
        subheading: "Cobblestone Romance on the Southern Shore",
        content: "Enclosed by thick oceanfront granite bastions, UNESCO-listed Galle Fort is South Asia's most enchanting fortified colonial enclave. Built by the Portuguese in 1588 and reinforced by the Dutch East India Company, its pedestrian-friendly cobblestone alleys are lined with restored Dutch colonial manors, chic art galleries, boutique gemstone ateliers, and fine-dining seafood restaurants. Walk the ramparts at twilight to watch the sunset past the iconic white Galle Lighthouse."
      },
      {
        heading: "3. Ella — The Scenic Mountain & Railway Oasis",
        subheading: "Cloud Forests, Iconic Viaducts & Chill Mountain Vibe",
        content: "Tucked into the dramatic southern escarpment of the hill country, Ella has emerged as a traveler favorite. The iconic Nine Arches Bridge, built from solid stone blocks in 1921 without structural steel, is surrounded by jungle and tea terraces. Take the gentle morning trek up Little Adam's Peak or challenge yourself on Ella Rock before heading into town to enjoy iced Ceylon teas at lively hillside cafes."
      },
      {
        heading: "4. Yala National Park — Kingdom of the Sri Lankan Leopard",
        subheading: "Highest Leopard Density on Planet Earth",
        content: "Spanning coastal scrub jungles, massive granite monoliths, and saltwater lagoons, Yala National Park is Sri Lanka's premier wildlife sanctuary. Block 1 is globally celebrated for having one of the highest densities of leopards (Panthera pardus kotiya). Alongside leopards, safaris regularly encounter wild Asian elephants, sloth bears, marsh mugger crocodiles, and over 215 bird species."
      },
      {
        heading: "5. Nuwara Eliya — 'Little England' & Pure Ceylon Tea Country",
        subheading: "High-Altitude Cool Air & Heritage Estates",
        content: "At 1,868 meters above sea level, Nuwara Eliya feels a world away from the tropical coast. With Tudor-style colonial bungalows, manicured rose gardens, and crisp mountain breezes, it is the cradle of the world's finest high-grown Ceylon black teas. Tour working tea factories, pluck tea leaves with local tea harvesters, and enjoy traditional afternoon high tea at The Grand Hotel."
      }
    ],
    relatedSlugs: ["best-time-to-visit-sri-lanka", "7-day-sri-lanka-itinerary", "things-to-do-in-ella"]
  },
  {
    id: "blog-2",
    slug: "best-time-to-visit-sri-lanka",
    title: "Best Time to Visit Sri Lanka: Weather, Seasons & Month-by-Month Guide",
    excerpt: "Understanding Sri Lanka's unique dual monsoon climate: how to experience golden beaches and dry weather in every month of the year.",
    readTime: "7 min read",
    category: "Travel Advice",
    image: "/images/beach-relaxation.jpg",
    author: {
      name: "3C Ceylon Tours Editorial Team",
      role: "Travel Architects",
      avatar: "/images/logo.png"
    },
    publishedDate: "2026-01-20",
    updatedDate: "2026-03-05",
    metaDescription: "When is the best time to visit Sri Lanka? Comprehensive weather breakdown of southwest and northeast monsoons, best months for wildlife, beaches, and tea hills.",
    keywords: ["best time to visit sri lanka", "sri lanka weather", "sri lanka monsoon season", "sri lanka travel seasons", "when to go to sri lanka"],
    tableOfContents: [
      "The Dual Monsoon Climate Explained",
      "Peak Season: December to April (West & South Coast, Cultural Triangle)",
      "Shoulder Season: May to September (East Coast & Central Safari)",
      "Month-by-Month Travel Guide",
      "Best Times for Wildlife & Whale Watching",
      "Summary Recommendation for Discerning Travelers"
    ],
    sections: [
      {
        heading: "The Dual Monsoon Climate Explained",
        content: "Sri Lanka's tropical teardrop island enjoys sunshine year-round, thanks to a rare meteorological gift: two alternating monsoon seasons. When the Yala monsoon brings rains to the southwest (May to September), the northern and eastern coasts (Passikudah, Trincomalee, Arugam Bay) enjoy dry, sunny, and calm waters. Conversely, when the Maha monsoon touches the northeast (October to January), the southwest coast (Bentota, Galle, Mirissa) and the Cultural Triangle are bathed in brilliant blue skies."
      },
      {
        heading: "Peak Season: December to April",
        content: "This is universally considered the prime window for classic Sri Lanka journeys. The south and west coast beaches boast calm ocean conditions ideal for swimming and boat cruises. Wildlife parks like Yala, Udawalawe, and Wilpattu are dry and animals congregate visibly near waterholes. The hill country (Kandy, Nuwara Eliya, Ella) experiences warm days and crisp, starry nights."
      },
      {
        heading: "The Secret Jewel: May to September",
        content: "Many international tourists mistakenly believe all of Sri Lanka experiences rain in summer. In reality, the east coast comes alive! Passikudah and Trincomalee offer powdery white beaches, zero monsoon swell, crystal-clear diving, and Pigeon Island snorkeling. Furthermore, Minneriya National Park hosts 'The Gathering' of hundreds of wild elephants during August and September."
      }
    ],
    relatedSlugs: ["best-places-to-visit-in-sri-lanka", "7-day-sri-lanka-itinerary", "sri-lanka-travel-tips-first-timers"]
  },
  {
    id: "blog-3",
    slug: "7-day-sri-lanka-itinerary",
    title: "The Perfect 7-Day Sri Lanka Itinerary: Culture, Tea Hills & Coast",
    excerpt: "Maximize every moment of a one-week island holiday with this expertly sequenced route balancing ancient palaces, scenic trains, and ocean relaxation.",
    readTime: "9 min read",
    category: "Itineraries",
    image: "/images/cultural-pilgrimage.jpg",
    author: {
      name: "3C Ceylon Tours Editorial Team",
      role: "Itinerary Planners",
      avatar: "/images/logo.png"
    },
    publishedDate: "2026-02-01",
    updatedDate: "2026-03-08",
    metaDescription: "Plan the ultimate 7-day Sri Lanka itinerary. Complete day-by-day route covering Sigiriya, Kandy, Nuwara Eliya tea hills, scenic trains, and Galle Fort.",
    keywords: ["7 day sri lanka itinerary", "one week in sri lanka", "sri lanka travel itinerary", "sri lanka 7 days route"],
    tableOfContents: [
      "Itinerary Overview & Route Map",
      "Day 1: Arrival & Transfer to Cultural Triangle",
      "Day 2: Sigiriya Lion Rock & Dambulla Caves",
      "Day 3: Spice Gardens & Royal Kandy",
      "Day 4: Peradeniya Botanical Gardens & Nuwara Eliya",
      "Day 5: Tea Masterclass & Descent to Galle Fort",
      "Day 6: Galle Heritage & Southern Beach Relaxation",
      "Day 7: Colombo Sights & Airport Farewell",
      "Essential Transportation Tips"
    ],
    sections: [
      {
        heading: "Itinerary Overview & Route Map",
        content: "With seven days, the secret to an effortless vacation is avoiding zigzag drives. By employing a dedicated private chauffeur-guide with a luxury vehicle, you eliminate stressful train delays, luggage juggling, and confusing public connections. This classic loop journeys from Colombo northeast into the ancient Cultural Triangle, climbs into the central highlands, and returns via the golden south coast expressway."
      },
      {
        heading: "Day 1 to Day 3: Ancient Wonders",
        content: "Begin directly with Sigiriya Lion Rock and the Dambulla Cave Monasteries. In King Kasyapa's ancient citadel, ancient frescoes and hydraulic gardens reveal the sophistication of ancient Sinhalese monarchs. Transition through Matale spice groves into the royal sanctuary of Kandy, where evening drumming rings out at the Temple of the Sacred Tooth Relic."
      },
      {
        heading: "Day 4 to Day 7: Mist, Mountain Rails & Colonial Fort",
        content: "Ascend past tumbling waterfalls into Nuwara Eliya to experience cool colonial high tea and learn the art of Ceylon orthodox tea plucking. Descend smoothly along expressway routes to 17th-century Galle Fort, ending your one-week escape with fresh seafood dinners on the sand and an unforgettable sunset over the Indian Ocean."
      }
    ],
    relatedSlugs: ["10-day-sri-lanka-travel-guide", "best-places-to-visit-in-sri-lanka", "sri-lanka-travel-tips-first-timers"]
  },
  {
    id: "blog-4",
    slug: "10-day-sri-lanka-travel-guide",
    title: "10-Day Sri Lanka Travel Guide: Complete Big Island Odyssey",
    excerpt: "The ideal duration for exploring Sri Lanka. Combine UNESCO world heritage, tea plantations, thrilling wildlife safaris, and beach downtime seamlessly.",
    readTime: "10 min read",
    category: "Itineraries",
    image: "/images/tea-plantations.jpg",
    author: {
      name: "3C Ceylon Tours Editorial Team",
      role: "Luxury Travel Curators",
      avatar: "/images/logo.png"
    },
    publishedDate: "2026-02-05",
    updatedDate: "2026-03-12",
    metaDescription: "Discover the definitive 10-day Sri Lanka travel guide. Day-by-day plan featuring Sigiriya, Polonnaruwa, Kandy, Ella, Yala leopards, and southern beach villas.",
    keywords: ["10 day sri lanka itinerary", "sri lanka travel guide 10 days", "best 10 day tour sri lanka", "sri lanka holiday plan"],
    tableOfContents: [
      "Why 10 Days is the Golden Duration",
      "Route Summary: The Complete Grand Loop",
      "Days 1-3: Cultural Triangle & Wild Elephants",
      "Days 4-5: Royal Kandy & Ceylon Tea Country",
      "Days 6-7: Scenic Mountain Train & Bohemian Ella",
      "Days 8-9: Yala Big Game Safaris & Southern Shores",
      "Day 10: Galle Fort & Departure",
      "Hotel & Dining Recommendations"
    ],
    sections: [
      {
        heading: "Why 10 Days is the Golden Duration",
        content: "Ten days provides the breathing room to truly absorb Sri Lanka's contrasts without feeling rushed. You can hike ancient peaks in the morning, relax by jungle resort pools in the afternoon, embark on dawn game drives in search of leopards, and spend dedicated days unwinding on quiet beaches."
      },
      {
        heading: "Days 1 to 5: Kingdoms to Highlands",
        content: "Arrive in Colombo and transfer comfortably to your Sigiriya resort. Ascend the Lion Rock, cycle through the medieval stone city of Polonnaruwa, and witness wild elephant herds at Minneriya. Travel south through spice sanctuaries to Kandy, attending sacred temple ceremonies before climbing into the cool tea country of Nuwara Eliya."
      },
      {
        heading: "Days 6 to 10: Ella Rails to Leopard Lands & Ocean",
        content: "Ride the iconic mountain train to Ella, walk the Demodara Nine Arches Bridge, and hike Little Adam's Peak. Descend into the coastal savannah of Yala for double game drives tracking leopards and sloth bears. Conclude with two nights in Galle Fort or a luxury beach resort in Weligama before an effortless expressway drive to the airport."
      }
    ],
    relatedSlugs: ["7-day-sri-lanka-itinerary", "best-wildlife-safaris-in-sri-lanka", "things-to-do-in-ella"]
  },
  {
    id: "blog-5",
    slug: "things-to-do-in-ella",
    title: "12 Extraordinary Things to Do in Ella, Sri Lanka: Mountain Magic",
    excerpt: "From chasing colonial train viaducts and hiking dramatic peaks to sipping mountain brews and flying across tea hills on South Asia's longest zip-line.",
    readTime: "6 min read",
    category: "Destinations",
    image: "/images/destinations/ella.jpg",
    author: {
      name: "3C Ceylon Tours Editorial Team",
      role: "Highland Specialists",
      avatar: "/images/logo.png"
    },
    publishedDate: "2026-02-12",
    updatedDate: "2026-03-02",
    metaDescription: "Top 12 things to do in Ella Sri Lanka. Complete guide to Nine Arches Bridge, Little Adam's Peak, Flying Ravana zip-line, Ravana Falls, and scenic train tips.",
    keywords: ["things to do in ella", "ella sri lanka", "nine arches bridge ella", "little adams peak", "ella rock hike", "flying ravana"],
    tableOfContents: [
      "1. Photograph the Iconic Demodara Nine Arches Bridge",
      "2. Hike Little Adam's Peak at Sunrise",
      "3. Ride the World-Famous Kandy to Ella Scenic Train",
      "4. Conquer the Challenging Ella Rock Trail",
      "5. Fly Across the Tea Terraces on Flying Ravana Zip-line",
      "6. Cool Off at Ravana Waterfall Cascades",
      "7. Tour the Uva Halpewatte Tea Factory",
      "8. Savor Mountain Dining & Ceylon Cocktails at Cafe Chill"
    ],
    sections: [
      {
        heading: "1. Photograph the Iconic Demodara Nine Arches Bridge",
        content: "Built by local builders and British engineers during World War I without steel reinforcement, the Nine Arches Bridge is nestled in a green amphitheater of tea and banana trees. The bridge is best visited around 09:15 AM or 11:30 AM when the vintage red and blue passenger trains slowly cross the viaduct."
      },
      {
        heading: "2. Hike Little Adam's Peak at Sunrise",
        content: "Unlike its challenging namesake (Sri Pada), Little Adam's Peak is a pleasant 45-minute stroll through gently sloping tea plantations. The summit offers a 360-degree viewpoint overlooking Ella Gap and Ravana Falls. Arriving at dawn rewards you with pastel morning skies and drifting mountain mist."
      },
      {
        heading: "3. Fly Across the Valley on Flying Ravana Mega Zip-line",
        content: "Spanning over half a kilometer with dual steel cables, Flying Ravana is South Asia's fastest and most scenic zip-line. Reaching speeds up to 80 km/h, travelers soar over lush emerald tea fields with panoramic views of the Ella valley below, backed by rigorous European safety standards."
      }
    ],
    relatedSlugs: ["best-places-to-visit-in-sri-lanka", "7-day-sri-lanka-itinerary", "sri-lanka-travel-tips-first-timers"]
  },
  {
    id: "blog-6",
    slug: "best-wildlife-safaris-in-sri-lanka",
    title: "The Ultimate Guide to Wildlife Safaris in Sri Lanka: Where & When",
    excerpt: "Everything you need to know about planning ethical safaris in Yala, Wilpattu, Minneriya, and Udawalawe to track leopards, bears, and elephants.",
    readTime: "8 min read",
    category: "Wildlife",
    image: "/images/wildlife-safari.jpg",
    author: {
      name: "3C Ceylon Tours Editorial Team",
      role: "Wildlife Naturalists",
      avatar: "/images/logo.png"
    },
    publishedDate: "2026-02-18",
    updatedDate: "2026-03-01",
    metaDescription: "Comprehensive guide to Sri Lanka wildlife safaris. Compare Yala vs Wilpattu, the Minneriya elephant gathering, Udawalawe, and ethical safari practices.",
    keywords: ["best wildlife safaris in sri lanka", "yala safari", "wilpattu leopards", "minneriya elephant gathering", "sri lanka big five"],
    tableOfContents: [
      "Why Sri Lanka is Asia's Premier Safari Destination",
      "Yala National Park: The Leopard Capital",
      "Wilpattu National Park: The Land of Lakes & Bears",
      "Minneriya & Kaudulla: The Great Elephant Gathering",
      "Udawalawe: Year-Round Wild Elephant Guarantee",
      "Mirissa: Ocean Safari with the Blue Whales",
      "Ethical Safari Guidelines & Photography Gear Tips"
    ],
    sections: [
      {
        heading: "Why Sri Lanka is Asia's Premier Safari Destination",
        content: "Sri Lanka is one of the world's 36 recognized biodiversity hotspots. For safari enthusiasts, its small geographic size is its greatest asset: within 48 hours, you can photograph wild Asian elephants in dry scrubland, spot the world's largest mammal (the Blue Whale) in the Indian Ocean, and track leopards prowling granite outcrops."
      },
      {
        heading: "Yala vs. Wilpattu: Which is Better for Leopards?",
        content: "Yala Block 1 has the world's highest density of leopards and open scrub vegetation that makes sightings frequent and dramatic. Wilpattu is vastly larger, featuring dense thickets and natural freshwater lakes (villus), offering a quieter, more exclusive wilderness experience with higher odds of observing sloth bears."
      },
      {
        heading: "Ethical Wildlife Guidelines by 3C Ceylon Tours",
        content: "We enforce strict ethical standards on all our safaris: private customized 4x4 vehicles, certified respectful driver-naturalists, engines switched off during sightings, no crowding or chasing animals, and zero plastic waste left in national reserves."
      }
    ],
    relatedSlugs: ["best-places-to-visit-in-sri-lanka", "10-day-sri-lanka-travel-guide", "sri-lanka-travel-tips-first-timers"]
  },
  {
    id: "blog-7",
    slug: "sri-lanka-honeymoon-guide",
    title: "Sri Lanka Honeymoon Guide: The Most Romantic Resorts & Secret Escapes",
    excerpt: "Dreamy colonial bungalows with private butlers, cliffside pool villas, starlit beach dinners, and couples Ayurvedic wellness sanctuaries.",
    readTime: "7 min read",
    category: "Honeymoon & Luxury",
    image: "/images/honeymoon-luxury.jpg",
    author: {
      name: "3C Ceylon Tours Editorial Team",
      role: "Romance Specialists",
      avatar: "/images/logo.png"
    },
    publishedDate: "2026-02-22",
    updatedDate: "2026-03-09",
    metaDescription: "Plan an unforgettable Sri Lanka honeymoon. Curated luxury resorts, romantic private villas, high tea in tea country, and candlelit seafood dinners.",
    keywords: ["sri lanka honeymoon guide", "romantic resorts sri lanka", "sri lanka honeymoon itinerary", "luxury honeymoon sri lanka"],
    tableOfContents: [
      "Why Sri Lanka is the Ideal Honeymoon Destination",
      "Top Romantic Sanctuaries: Tea Trails, Amangalla & Cape Weligama",
      "Unforgettable Experiences for Couples",
      "Recommended 9-Day Romantic Route",
      "Honeymoon Booking Tips & Complimentary Perks"
    ],
    sections: [
      {
        heading: "Why Sri Lanka is the Ideal Honeymoon Destination",
        content: "Few places on earth combine such romantic diversity in a single week. Couples can wake to tea served in bed by personal butlers in the misty hills, take hand-in-hand twilight walks along Galle's 17th-century ramparts, and spend evenings in private plunge pool villas overlooking the sapphire expanse of the Indian Ocean."
      },
      {
        heading: "Top Romantic Sanctuaries",
        content: "Ceylon Tea Trails (Relais & Châteaux) offers five restored colonial planters' bungalows set on mirror-like Castlereagh Lake. On the coast, Anantara Peace Haven in Tangalle and Cape Weligama deliver cliffside pool villas with panoramic sunset cocktail decks and world-class Ayurvedic spa sanctuaries."
      }
    ],
    relatedSlugs: ["best-time-to-visit-sri-lanka", "7-day-sri-lanka-itinerary", "best-places-to-visit-in-sri-lanka"]
  },
  {
    id: "blog-8",
    slug: "sri-lanka-travel-tips-first-timers",
    title: "15 Crucial Sri Lanka Travel Tips for First-Time Visitors",
    excerpt: "Visa rules, packing advice, local etiquette, currency, tipping customs, and health advice to ensure a seamless and joyful vacation.",
    readTime: "8 min read",
    category: "Travel Advice",
    image: "/images/sinharaja-rainforest.jpg",
    author: {
      name: "3C Ceylon Tours Editorial Team",
      role: "Client Care Specialists",
      avatar: "/images/logo.png"
    },
    publishedDate: "2026-02-28",
    updatedDate: "2026-03-11",
    metaDescription: "Essential Sri Lanka travel tips for first-time travelers. Learn about ETA visas, currency, local etiquette, temple dress codes, tipping, and health safety.",
    keywords: ["sri lanka travel tips", "first time to sri lanka", "sri lanka visa eta", "sri lanka dress code", "tipping in sri lanka"],
    tableOfContents: [
      "1. Visa & Entry Requirements (ETA Online)",
      "2. Currency, Cards & Cash Management",
      "3. Temple Etiquette & Sacred Site Dress Code",
      "4. The Game-Changer: Dedicated Private Chauffeur-Guide",
      "5. Drinking Water & Culinary Delights",
      "6. Tipping Guidelines in Sri Lanka",
      "7. Staying Connected: SIM Cards & Wi-Fi",
      "8. Health, Vaccines & Sun Protection"
    ],
    sections: [
      {
        heading: "1. Visa & Entry Requirements",
        content: "Most international travelers require an Electronic Travel Authorization (ETA) before flying to Sri Lanka. Apply only through the official Sri Lankan immigration portal or secure government-approved channels well in advance of departure."
      },
      {
        heading: "3. Temple Etiquette & Sacred Site Dress Code",
        content: "When entering Buddhist and Hindu temples (including Sigiriya sacred grounds and Kandy's Temple of the Tooth), both men and women must cover their shoulders and knees. White or light-colored attire is customary. Hats and footwear must be removed at temple entrances; bring a pair of thick socks to protect your soles from hot stone pavers in the sun."
      },
      {
        heading: "4. The Game-Changer: Dedicated Private Chauffeur-Guide",
        content: "Renting a car without a local driver is strongly discouraged due to erratic traffic, unfamiliar road markings, and mountain topography. A licensed private tourist chauffeur-guide from 3C Ceylon Tours transforms your journey: providing safe driving in luxury air-conditioned vehicles, seamless checkpoint handling, insider access to local eateries, and deep cultural insight."
      }
    ],
    relatedSlugs: ["best-time-to-visit-sri-lanka", "7-day-sri-lanka-itinerary", "best-places-to-visit-in-sri-lanka"]
  }
];
