export interface Destination {
  id: string;
  slug: string;
  name: string;
  province: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  bestTimeToVisit: string;
  weather: string;
  idealStay: string;
  attractions: {
    title: string;
    description: string;
  }[];
  insiderTips: string[];
  relatedPackageSlugs: string[];
}

export const DESTINATIONS: Destination[] = [
  {
    id: "dest-1",
    slug: "sigiriya",
    name: "Sigiriya & Dambulla",
    province: "Central Province / Cultural Triangle",
    tagline: "The UNESCO 5th-Century Fortress in the Clouds & Golden Cave Temples",
    description: "Rising 200 meters dramatically above the emerald jungle canopy, the monumental citadel of Sigiriya (Lion Rock) is acclaimed by travelers as the eighth wonder of the world. Built by King Kasyapa in the 5th century AD, it features symmetrical royal water gardens, mysterious mirror walls, heavenly frescoes of celestial nymphs, and colossal stone lion paws flanking the summit stairway. Nearby lies the ancient Dambulla Cave Temple complex, housing 153 statues of Buddha covered in intricate 2,000-year-old murals.",
    image: "/images/destinations/main/sigiriya.jpg",
    gallery: [
      "/images/places/dambulla-sigiriya/IMG_3583.JPG",
      "/images/places/dambulla-sigiriya/IMG_3579.JPG",
      "/images/places/dambulla-sigiriya/IMG_3581.JPG",
      "/images/places/dambulla-sigiriya/IMG_3587.JPG",
      "/images/places/dambulla-sigiriya/IMG_3586.JPG",
      "/images/places/dambulla-sigiriya/IMG_3580.JPG",
      "/images/places/dambulla-sigiriya/IMG_3585.JPG",
      "/images/places/dambulla-sigiriya/IMG_3582.JPG",
      "/images/places/dambulla-sigiriya/IMG_3588.JPG",
      "/images/places/dambulla-sigiriya/IMG_3584.JPG"
    ],
    bestTimeToVisit: "December to April & July to September (Dry & clear skies)",
    weather: "27°C - 32°C (Warm tropical dry-zone climate)",
    idealStay: "2 to 3 Days",
    attractions: [
      {
        title: "Sigiriya Lion Rock Fortress",
        description: "The ancient royal fortress summit featuring royal palace ruins, swimming cisterns, and 360-degree views across central Sri Lanka."
      },
      {
        title: "Dambulla Royal Cave Temple",
        description: "Five monumental cave sanctuaries carved into a towering granite outcrop, filled with gold-leaf statues and sacred frescoes."
      },
      {
        title: "Pidurangala Rock Sunrise Climb",
        description: "An adventurous adjacent rocky peak offering iconic photographic vistas directly facing the Sigiriya monolith during dawn."
      },
      {
        title: "Royal Water & Boulder Gardens",
        description: "Sophisticated ancient hydraulic engineering marvels, including underground conduits that still operate during monsoons."
      }
    ],
    insiderTips: [
      "Begin your Sigiriya climb at 06:45 AM to beat both the tropical heat and peak tourist crowds.",
      "Wear sturdy walking shoes with grip; there are approximately 1,200 steps to the summit.",
      "Combine Sigiriya with a sunset elephant safari at nearby Minneriya or Kaudulla National Park."
    ],
    relatedPackageSlugs: [
      "grand-ceylon-heritage-wildlife-luxury",
      "wild-sri-lanka-safari-big-four-expedition"
    ]
  },
  {
    id: "dest-2",
    slug: "kandy",
    name: "Kandy",
    province: "Central Province",
    tagline: "The Sacred Royal Hill Capital of Sri Lanka",
    description: "Nestled amidst misty green mountain ranges and encircling a peaceful centerpiece lake, Kandy was the last independent royal stronghold of Ceylon before British colonisation in 1815. Today, it remains the spiritual heartbeat of the island, home to the sacred Temple of the Tooth (Sri Dalada Maligawa), bustling spice markets, and the world-renowned Peradeniya Royal Botanical Gardens.",
    image: "/images/destinations/main/kandy.jpg",
    gallery: [
      "/images/places/kandy/IMG_3645.JPG",
      "/images/places/kandy/IMG_3647.JPG",
      "/images/places/kandy/IMG_3641.JPG",
      "/images/places/kandy/IMG_3648.WEBP",
      "/images/places/kandy/IMG_3640.JPG",
      "/images/places/kandy/IMG_3646.JPG",
      "/images/places/kandy/IMG_3642.JPG",
      "/images/places/kandy/IMG_3652.JPG",
      "/images/places/kandy/IMG_3651.JPG",
      "/images/places/kandy/IMG_3644.JPG",
      "/images/places/kandy/IMG_3650.JPG",
      "/images/places/kandy/IMG_3649.JPG"
    ],
    bestTimeToVisit: "December to April & July to August (Esala Perahera festival)",
    weather: "22°C - 28°C (Pleasantly temperate highland climate)",
    idealStay: "2 Days",
    attractions: [
      {
        title: "Temple of the Sacred Tooth Relic",
        description: "Sri Lanka's most venerated Buddhist sanctuary housing the sacred tooth relic of Gautama Buddha, alive with drumming pujas."
      },
      {
        title: "Peradeniya Royal Botanical Gardens",
        description: "A 147-acre royal botanical sanctuary featuring over 4,000 plant species, giant Java fig trees, and a world-class orchid house."
      },
      {
        title: "Kandy Lake (Kiri Muhuda)",
        description: "An artificial lake constructed in 1807 by King Sri Wickrama Rajasinghe, perfect for a peaceful evening twilight walk."
      },
      {
        title: "Bahirawakanda Vihara Buddha Statue",
        description: "A monumental 88-foot seated white Buddha overlooking Kandy city with sweeping panoramic viewpoints."
      }
    ],
    insiderTips: [
      "Wear modest attire covering shoulders and knees when visiting the Temple of the Tooth.",
      "Attend the evening Puja ceremony at 6:30 PM to experience traditional drummers and sacred horn rituals.",
      "Book tickets well in advance if visiting during the grand July/August Esala Perahera torchlight pageant."
    ],
    relatedPackageSlugs: [
      "grand-ceylon-heritage-wildlife-luxury",
      "sri-lanka-honeymoon-luxury-beach-escape"
    ]
  },
  {
    id: "dest-3",
    slug: "ella",
    name: "Ella",
    province: "Uva Province",
    tagline: "The Bohemian Mountain Haven & Iconic Train Trails",
    description: "Perched at the edge of the southern highland plateau, Ella is a serene mountain paradise surrounded by rolling cloud forests, cascading waterfalls, and emerald tea ridges. Famous worldwide for the colonial Nine Arch Bridge where blue passenger trains snake through lush valleys, Ella offers world-class hiking to Little Adam's Peak, panoramic zip-lining, and vibrant organic hillside cafes.",
    image: "/images/destinations/main/ella.jpg",
    gallery: [
      "/images/places/ella/IMG_3589.JPG",
      "/images/places/ella/IMG_3595.JPG",
      "/images/places/ella/IMG_3590.JPG",
      "/images/places/ella/IMG_3592.JPG",
      "/images/places/ella/IMG_3591.JPG",
      "/images/places/ella/IMG_3594.JPG",
      "/images/places/ella/IMG_3593.JPG"
    ],
    bestTimeToVisit: "January to May (Warm sunny days and clear mountain visibility)",
    weather: "18°C - 26°C (Cool mountain breezes with refreshing evenings)",
    idealStay: "2 to 3 Days",
    attractions: [
      {
        title: "Nine Arch Demodara Bridge",
        description: "A monumental 300-foot stone viaduct constructed without steel in 1921, encircled by towering bamboo and misty jungle."
      },
      {
        title: "Little Adam's Peak (Punchi Sri Pada)",
        description: "An accessible 45-minute summit trail through tea estates rewarding hikers with 360-degree views across Ella Gap."
      },
      {
        title: "Ravana Waterfall",
        description: "One of Sri Lanka's widest cascades, dropping 25 meters over dramatic rock tiers linked to the ancient Ramayana epic."
      },
      {
        title: "Ella Rock Expedition",
        description: "A more rigorous 4-hour trek across eucalyptus forests and railway tracks providing commanding views of the plains below."
      }
    ],
    insiderTips: [
      "Check train schedules with your 3C chauffeur to arrive at Nine Arch Bridge 20 minutes before train crossing.",
      "Sunrise from Little Adam's Peak is spectacular and avoids afternoon cloud buildup over Ella Gap.",
      "Enjoy artisanal Ceylon tea and wood-fired pizza at boutique cafes nestled along Ella Pass."
    ],
    relatedPackageSlugs: [
      "grand-ceylon-heritage-wildlife-luxury",
      "sri-lanka-honeymoon-luxury-beach-escape"
    ]
  },
  {
    id: "dest-4",
    slug: "nuwara-eliya",
    name: "Nuwara Eliya",
    province: "Central Province",
    tagline: "Little England Among Cloud Forests & Pure Ceylon Tea",
    description: "Nestled at 1,868 meters above sea level beneath Pidurutalagala (Sri Lanka's highest peak), Nuwara Eliya exudes the refined charm of an English country village. Established in the 19th century by British planters, it features red-brick post offices, Tudor-style manor houses, immaculate 18-hole golf greens, Gregory Lake boating, and world-renowned high-grown Ceylon tea factories.",
    image: "/images/destinations/main/nuwara-eliya.jpg",
    gallery: [
      "/images/places/nuwara-eliya/IMG_3612.JPG",
      "/images/places/nuwara-eliya/IMG_3608.JPG",
      "/images/places/nuwara-eliya/IMG_3607.JPG",
      "/images/places/nuwara-eliya/IMG_3604.JPG",
      "/images/places/nuwara-eliya/IMG_3609.JPG",
      "/images/places/nuwara-eliya/IMG_3605.JPG",
      "/images/places/nuwara-eliya/IMG_3606.JPG",
      "/images/places/nuwara-eliya/IMG_3610.JPG",
      "/images/places/nuwara-eliya/IMG_3611.AVIF",
      "/images/places/nuwara-eliya/IMG_3613.JPG"
    ],
    bestTimeToVisit: "February to May (Dry, crisp mornings and vibrant seasonal blossoms)",
    weather: "12°C - 20°C (Crisp and cool highland climate; pack a fleece for evening)",
    idealStay: "2 Days",
    attractions: [
      {
        title: "Pedro & Damro Historic Tea Estates",
        description: "Guided private tours through working colonial tea factories showcasing plucking, withering, rolling, and high-altitude tea tasting."
      },
      {
        title: "Gregory Lake Waterfront",
        description: "Picturesque recreational lake offering private swan boats, horseback riding along pine banks, and scenic water walkways."
      },
      {
        title: "Horton Plains & World's End",
        description: "A windswept plateau leading to a sheer 880-meter vertical abyss with views stretching to the southern coast on clear mornings."
      },
      {
        title: "Victoria Park & Colonial Post Office",
        description: "Lush botanical gardens home to rare Himalayan migratory birds, paired with an iconic 1894 Tudor-style postal landmark."
      }
    ],
    insiderTips: [
      "Temperatures drop to 10°C at night — bring warm jackets, scarves, and comfortable walking boots.",
      "For Horton Plains, depart Nuwara Eliya by 05:30 AM to reach World's End before mist obscures the drop at 09:00 AM.",
      "Experience high tea by a roaring fireplace at the historic Grand Hotel or Heritance Tea Factory."
    ],
    relatedPackageSlugs: [
      "grand-ceylon-heritage-wildlife-luxury",
      "sri-lanka-honeymoon-luxury-beach-escape"
    ]
  },
  {
    id: "dest-5",
    slug: "galle",
    name: "Galle Fort",
    province: "Southern Province",
    tagline: "UNESCO 17th-Century Living Dutch Colonial Citadel",
    description: "Built first by the Portuguese in 1588 and extensively fortified by the Dutch in the 17th century, Galle Fort is Asia's best-preserved European sea fortress. Within its massive coral-and-granite ramparts lies a living, vibrant colonial town where historic villas are transformed into luxury boutique hotels, jewel boutiques, chic cafes, and art galleries. Sunset strolls along the lighthouse ramparts over the Indian Ocean are unforgettable.",
    image: "/images/destinations/main/galle.jpg",
    gallery: [
      "/images/places/galle/IMG_3596.JPG",
      "/images/places/galle/IMG_3598.JPG",
      "/images/places/galle/IMG_3601.JPG",
      "/images/places/galle/IMG_3597.WEBP",
      "/images/places/galle/IMG_3603.WEBP",
      "/images/places/galle/IMG_3599.JPG",
      "/images/places/galle/IMG_3600.JPG"
    ],
    bestTimeToVisit: "November to April (Sunny coastal skies and calm ocean conditions)",
    weather: "26°C - 31°C (Warm tropical ocean climate with refreshing sea breezes)",
    idealStay: "2 Days",
    attractions: [
      {
        title: "Galle Lighthouse & Flag Rock",
        description: "The 1939 white lighthouse standing sentinel at Point Utrecht, flanked by ancient bastions where locals dive into sunset waves."
      },
      {
        title: "Historic Dutch Reformed Church",
        description: "Built in 1755 with gravestones paving the floor, showcasing original colonial wooden pulpits and VOC Dutch heraldry."
      },
      {
        title: "Pedlar & Church Street Boutiques",
        description: "Cobblestone lanes packed with world-class Ceylon sapphire jewelers, spice merchants, and designer linen emporiums."
      },
      {
        title: "Maritime Archaeology Museum",
        description: "Housed in a 1671 Dutch warehouse, displaying treasures recovered from shipwrecks scattered along the southern sea route."
      }
    ],
    insiderTips: [
      "Walk the perimeter ramparts between 17:00 and 18:30 for the best sunset photography in Sri Lanka.",
      "Vehicles are restricted in many fort lanes — explore leisurely on foot or hire an open-top vintage tuk-tuk.",
      "Pair Galle Fort with a seafood dining experience at a restored Dutch mansion courtyard."
    ],
    relatedPackageSlugs: [
      "sri-lanka-honeymoon-luxury-beach-escape",
      "grand-ceylon-heritage-wildlife-luxury"
    ]
  },
  {
    id: "dest-6",
    slug: "yala",
    name: "Yala National Park",
    province: "Southern & Uva Provinces",
    tagline: "The World's Highest Density Realm of the Elusive Leopard",
    description: "Bordering the wild Indian Ocean on Sri Lanka's southeast coast, Yala National Park is the crown jewel of Asian wildlife conservation. Boasting the highest concentration of leopards (Panthera pardus kotiya) on Earth, Yala's dramatic landscape transitions from coastal lagoons and sand dunes to thorny scrub jungle and sacred granite monoliths, inhabited by wild elephants, sloth bears, and mugger crocodiles.",
    image: "/images/destinations/main/yala.jpg",
    gallery: [
      "/images/places/yala/IMG_3569.JPG",
      "/images/places/yala/IMG_3575.JPG",
      "/images/places/yala/IMG_3576.JPG",
      "/images/places/yala/IMG_3572.PNG",
      "/images/places/yala/IMG_3571.JPG",
      "/images/places/yala/IMG_3573.JPG",
      "/images/places/yala/IMG_3570.JPG",
      "/images/places/yala/IMG_3578.JPG",
      "/images/places/yala/IMG_3577.JPG",
      "/images/places/yala/IMG_3574.JPG"
    ],
    bestTimeToVisit: "February to July (Dry season draws animals to central watering holes)",
    weather: "28°C - 34°C (Semi-arid dry zone climate)",
    idealStay: "2 Days (Minimum 2 safaris)",
    attractions: [
      {
        title: "Block 1 Big Cat Tracking Safaris",
        description: "Private customized 4x4 safaris with high-powered binoculars and licensed master trackers seeking leopards at dawn."
      },
      {
        title: "Kumbukkan River Sloth Bear Walks",
        description: "Venture near the freshwater riverbanks when Palu trees fruit in May and June, attracting rare Sri Lankan sloth bears."
      },
      {
        title: "Patanangala Beach & Coastal Monoliths",
        description: "A dramatic rocky coast inside the reserve where wild boar forage along breaking waves and ocean eagles roost."
      },
      {
        title: "Sithulpawwa Ancient Rock Monastery",
        description: "A 2,200-year-old Buddhist sanctuary perched atop high cliffs deep inside the reserve where wild elephants roam peacefully."
      }
    ],
    insiderTips: [
      "Book an early morning 05:45 AM safari; leopards are most active during the first two hours of daylight.",
      "Choose a private luxury open-top jeep with cushioned seats and 360-degree camera rails rather than shared jeeps.",
      "Block 1 closes annually for conservation from September to mid-October — explore adjacent Lunugamvehera instead."
    ],
    relatedPackageSlugs: [
      "wild-sri-lanka-safari-big-four-expedition",
      "grand-ceylon-heritage-wildlife-luxury"
    ]
  },
  {
    id: "dest-7",
    slug: "mirissa",
    name: "Mirissa",
    province: "Southern Province",
    tagline: "Blue Whale Encounters & Iconic Coconut Tree Hill",
    description: "Mirissa is the premier marine sanctuary and coastal jewel of southern Sri Lanka. Just a few nautical miles offshore, deep underwater submarine trenches bring nutrient-rich currents that attract colossal blue whales, sperm whales, and pods of spinner dolphins. On land, Mirissa enchants with Coconut Tree Hill — an iconic palm-crested promontory jutting into turquoise water — along with secret swimming coves and beachfront candlelight seafood dining.",
    image: "/images/destinations/main/mirissa.jpg",
    gallery: [
      "/images/places/mirissa/IMG_3554.PNG",
      "/images/places/mirissa/IMG_3556.JPG",
      "/images/places/mirissa/IMG_3555.WEBP",
      "/images/places/mirissa/IMG_3557.JPG"
    ],
    bestTimeToVisit: "November to April (Peak whale migration and placid glass-calm seas)",
    weather: "27°C - 31°C (Tropical ocean paradise climate)",
    idealStay: "2 to 3 Days",
    attractions: [
      {
        title: "Private Blue Whale Yacht Expeditions",
        description: "Board certified marine naturalists' catamarans to spot the largest animals on Earth feeding and breaching in deep waters."
      },
      {
        title: "Coconut Tree Hill",
        description: "A photogenic reddish-earth promontory overlooking panoramic turquoise waves framed by swaying coconut palms."
      },
      {
        title: "Secret Beach Mirissa",
        description: "A secluded hidden bay accessible via a winding jungle track, offering shallow natural tidal pools and chilled fresh coconuts."
      },
      {
        title: "Parrot Rock Lookout",
        description: "A climbable natural islet at the center of Mirissa bay offering sweeping views of surfers and the crescent shoreline."
      }
    ],
    insiderTips: [
      "Always select responsible whale-watching operators with minimum approach distances to safeguard marine giants.",
      "Visit Coconut Tree Hill at 06:30 AM to enjoy tranquil golden sunrise photography before day-tripper crowds arrive.",
      "Try freshly caught grilled jumbo prawns and yellowfin tuna with lime and garlic butter on the sand."
    ],
    relatedPackageSlugs: [
      "sri-lanka-honeymoon-luxury-beach-escape",
      "wild-sri-lanka-safari-big-four-expedition"
    ]
  },
  {
    id: "dest-8",
    slug: "anuradhapura",
    name: "Anuradhapura",
    province: "North Central Province",
    tagline: "Sacred 2,500-Year Ancient Capital & Colossal Stupas",
    description: "Established in the 4th century BC, the sacred city of Anuradhapura was the cradle of Theravada Buddhism and the flourishing capital of ancient Sri Lanka for over a millennium. Spanning dozens of square kilometers of forested archaeological park, it is home to colossal brick stupas rivaling the Pyramids of Giza in volume, sophisticated ancient irrigation tanks, and the sacred Jaya Sri Maha Bodhi — the world's oldest historically documented human-planted tree.",
    image: "/images/destinations/main/anuradhapura.jpg",
    gallery: [
      "/images/places/anuradhapura/IMG_3663.PNG",
      "/images/places/anuradhapura/IMG_3654.WEBP",
      "/images/places/anuradhapura/IMG_3658.JPG",
      "/images/places/anuradhapura/IMG_3664.JPG",
      "/images/places/anuradhapura/IMG_3653.JPG",
      "/images/places/anuradhapura/IMG_3657.JPG",
      "/images/places/anuradhapura/IMG_3662.JPG",
      "/images/places/anuradhapura/IMG_3656.JPG",
      "/images/places/anuradhapura/IMG_3660.JPG",
      "/images/places/anuradhapura/IMG_3659.JPG",
      "/images/places/anuradhapura/IMG_3655.WEBP"
    ],
    bestTimeToVisit: "November to March & June to September (Dry weather and sacred ceremonies)",
    weather: "28°C - 33°C (Tropical dry zone with warm sun)",
    idealStay: "2 Days",
    attractions: [
      {
        title: "Ruwanwelisaya White Stupa",
        description: "A gleaming white 338-foot architectural masterpiece built by King Dutugemunu in 140 BC, ringed by a wall of 344 carved elephant heads."
      },
      {
        title: "Jaya Sri Maha Bodhi Sacred Fig",
        description: "A sacred sapling from the original Bodhi Tree in Bodhgaya brought to Sri Lanka in 288 BC, protected by golden railings."
      },
      {
        title: "Jetavanaramaya Monastery",
        description: "Once the third-tallest structure in the ancient world, containing over 93 million baked clay bricks in its colossal dome."
      },
      {
        title: "Isurumuniya Rock Temple & Lovers Sculpture",
        description: "A tranquil rock temple famous for its 5th-century Gupta-style stone carving of the celebrated royal lovers Saliya and Asokamala."
      }
    ],
    insiderTips: [
      "Rent an electric bicycle or use your 3C chauffeur car to travel between ruins; the site spans over 16 square miles.",
      "Wear white or light-colored attire with knees and shoulders covered, and bring socks for walking on sun-warmed stone terraces.",
      "Experience the evening lamp-lighting rituals at Ruwanwelisaya when thousands of butter lamps illuminate the white dome."
    ],
    relatedPackageSlugs: [
      "grand-ceylon-heritage-wildlife-luxury"
    ]
  },
  {
    id: "dest-9",
    slug: "jaffna-mannar",
    name: "North Sri Lanka (Jaffna & Mannar)",
    province: "Northern Province",
    tagline: "Vibrant Tamil Culture, Nallur Kovil & Adam's Bridge",
    description: "Distinctly different from the rest of the island, Northern Sri Lanka is a realm of radiant Hindu temple towers, palmyrah-shaded causeways, colonial Dutch star forts, and ancient maritime legends. In Jaffna, the golden Nallur Kandaswamy Kovil resonates with Vedic chants, while the remote Mannar peninsula boasts centuries-old African baobab trees, flamingos, and the mythical sandbanks of Adam's Bridge (Ram Setu) stretching toward India.",
    image: "/images/destinations/main/jaffna-mannar.jpg",
    gallery: [
      "/images/places/jaffna-mannar/IMG_3622.JPG",
      "/images/places/jaffna-mannar/IMG_3628.WEBP",
      "/images/places/jaffna-mannar/IMG_3619.PNG",
      "/images/places/jaffna-mannar/IMG_3623.JPG",
      "/images/places/jaffna-mannar/IMG_3639.WEBP",
      "/images/places/jaffna-mannar/IMG_3615.JPG",
      "/images/places/jaffna-mannar/IMG_3633.JPG",
      "/images/places/jaffna-mannar/IMG_3630.JPG",
      "/images/places/jaffna-mannar/IMG_3636.JPG",
      "/images/places/jaffna-mannar/IMG_3620.JPG",
      "/images/places/jaffna-mannar/IMG_3629.JPG",
      "/images/places/jaffna-mannar/IMG_3614.JPG",
      "/images/places/jaffna-mannar/IMG_3632.JPG",
      "/images/places/jaffna-mannar/IMG_3616.WEBP",
      "/images/places/jaffna-mannar/IMG_3638.JPG",
      "/images/places/jaffna-mannar/IMG_3627.JPG",
      "/images/places/jaffna-mannar/IMG_3624.JPG",
      "/images/places/jaffna-mannar/IMG_3625.JPG",
      "/images/places/jaffna-mannar/IMG_3637.JPG",
      "/images/places/jaffna-mannar/IMG_3626.JPG",
      "/images/places/jaffna-mannar/IMG_3621.JPG",
      "/images/places/jaffna-mannar/IMG_3635.JPG",
      "/images/places/jaffna-mannar/IMG_3617.JPG"
    ],
    bestTimeToVisit: "January to September (Dry, clear weather and calm seas across the Palk Strait)",
    weather: "28°C - 33°C (Sunny dry zone tropical warmth)",
    idealStay: "3 Days",
    attractions: [
      {
        title: "Nallur Kandaswamy Kovil",
        description: "The grand golden Hindu temple complex dedicated to Lord Murugan, renowned for intricate gopuram towers and sacred puja drum processions."
      },
      {
        title: "Jaffna Star Fort & Clock Tower",
        description: "A monumental pentagonal limestone coastal fortress built by the Portuguese and Dutch overlooking the shimmering Jaffna lagoon."
      },
      {
        title: "Adam's Bridge (Ram Setu) - Mannar",
        description: "A 30-mile chain of limestone shoals and sand islands linking Sri Lanka to India, steeped in the Ramayana epic and marine bird colonies."
      },
      {
        title: "Nagadeepa Island & Delfts Island",
        description: "Boat excursions across turquoise straits to wild pony sanctuaries, coral-wall villages, and ancient Buddhist pilgrimage shrines."
      }
    ],
    insiderTips: [
      "Men are required to remove shirts before entering the inner sanctum of Nallur Kandaswamy Kovil.",
      "Taste authentic spicy Jaffna crab curry cooked with freshly ground roasted curry powder, murunga leaves, and thick coconut milk.",
      "Sample sweet Rio Ice Cream and Rio mango shakes — a legendary local institution loved across Jaffna."
    ],
    relatedPackageSlugs: [
      "grand-ceylon-heritage-wildlife-luxury"
    ]
  },
  {
    id: "dest-10",
    slug: "blue-beach",
    name: "Blue Beach (Nilwella)",
    province: "Southern Province",
    tagline: "Secret Island Tombolo & Turquoise Snorkeling Haven",
    description: "Blue Beach Island in Nilwella is one of southern Sri Lanka's most breathtaking geological secrets. A natural sand tombolo connects the mainland to a rocky emerald islet, creating calm, crystalline waters on both sides. Visitors can walk across the sandbar, snorkel over shallow coral beds teeming with colorful parrotfish, and camp beneath starlit skies surrounded by panoramic ocean breezes.",
    image: "/images/destinations/main/blue-beach.jpg",
    gallery: [
      "/images/places/blue-beach/IMG_3535.JPG",
      "/images/places/blue-beach/IMG_3532.JPG",
      "/images/places/blue-beach/IMG_3536.JPG",
      "/images/places/blue-beach/IMG_3533.JPG",
      "/images/places/blue-beach/IMG_3534.JPG"
    ],
    bestTimeToVisit: "November to April (Glass-clear turquoise water and gentle waves)",
    weather: "27°C - 31°C (Warm tropical ocean breeze)",
    idealStay: "1 to 2 Days",
    attractions: [
      {
        title: "The Nilwella Sand Tombolo Crossing",
        description: "Walk between gentle breaking waves across the natural narrow sandbar to reach the uninhabited rocky island."
      },
      {
        title: "Coral Reef Snorkeling",
        description: "Sheltered natural marine coves with vibrant brain corals, starfish, sea turtles, and kaleidoscopic reef fish."
      },
      {
        title: "Sunset Island Lookout",
        description: "Hike through coconut palms to the top of the islet for unobstructed 270-degree sunset panoramas across the Indian Ocean."
      },
      {
        title: "Private Beach Glamping",
        description: "Eco-camping right by the sandbar with bonfire dinners, fresh grilled catch of the day, and peaceful sea sounds."
      }
    ],
    insiderTips: [
      "Cross the tombolo during low tide for easiest walking across the sandbar.",
      "Bring water shoes and your own snorkeling mask to explore the rocky reef edges.",
      "Combine Blue Beach with nearby Hirikatiya bay or Dikwella blowhole for a perfect day on the south coast."
    ],
    relatedPackageSlugs: [
      "sri-lanka-honeymoon-luxury-beach-escape"
    ]
  },
  {
    id: "dest-11",
    slug: "hirikatiya",
    name: "Hirikatiya Bay",
    province: "Southern Province",
    tagline: "The Horseshoe Surf Cove & Bohemian Beach Haven",
    description: "Tucked inside a sheltered natural horseshoe-shaped bay fringed by leaning coconut palms, Hirikatiya (fondly called 'Hiri') has earned a global reputation as Sri Lanka's coolest boutique surf haven. Gentle left-hand peelers make it a dream for beginner and intermediate surfers, while the beachfront is dotted with specialty espresso bars, farm-to-table sourdough bakeries, yoga shalas, and laid-back sunset cocktail lounges.",
    image: "/images/destinations/main/hirikatiya.jpg",
    gallery: [
      "/images/places/hirikatiya/IMG_3524.WEBP",
      "/images/places/hirikatiya/IMG_3523.JPG",
      "/images/places/hirikatiya/IMG_3522.JPG",
      "/images/places/hirikatiya/IMG_3526.JPG",
      "/images/places/hirikatiya/IMG_3525.JPG"
    ],
    bestTimeToVisit: "October to April (Peak clean offshore surf and crystal waters)",
    weather: "27°C - 31°C (Tropical coastal paradise)",
    idealStay: "2 to 3 Days",
    attractions: [
      {
        title: "Horseshoe Bay Surfing",
        description: "Consistent left-hand reef break and sandy beach break suitable for all skill levels, with private coaching right on the beach."
      },
      {
        title: "Yoga & Wellness Retreats",
        description: "Open-air wooden shalas tucked in the coastal jungle canopy offering daily vinyasa and sound-bath relaxation."
      },
      {
        title: "Boutique Beachfront Dining",
        description: "Wood-fired pizzas, avocado toast, fresh ceviche, and organic passion fruit smoothies served steps from the tide."
      },
      {
        title: "Sea Turtle Swimming",
        description: "Resident green sea turtles frequently surface in the calm corners of the bay, delighting gentle snorkelers."
      }
    ],
    insiderTips: [
      "Rent surfboards directly on the beach from local surf shacks for roughly 500 LKR per hour.",
      "Early morning surf sessions from 06:30 to 08:30 offer the cleanest glassy waves with zero wind.",
      "Walk 5 minutes over the headland to expansive Dikwella beach for long, empty sand walks."
    ],
    relatedPackageSlugs: [
      "sri-lanka-honeymoon-luxury-beach-escape"
    ]
  },
  {
    id: "dest-12",
    slug: "heritance-kandalama",
    name: "Heritance Kandalama",
    province: "Central Province / Dambulla",
    tagline: "Geoffrey Bawa's Architectural Masterpiece in the Jungle",
    description: "Designed by Sri Lanka's legendary master architect Geoffrey Bawa, Heritance Kandalama is celebrated worldwide as a tour de force of sustainable luxury. Stretching 1 kilometer along a dramatic granite cliff face, the building is wrapped in creeping vines, wild fig trees, and timber pavilions that blur the boundary between human design and nature. Overlooking the serene Kandalama reservoir, wild monkeys and exotic birds roam the open-air corridors.",
    image: "/images/destinations/main/heritance-kandalama.jpg",
    gallery: [
      "/images/places/heritance-kandalama/IMG_3540.JPG",
      "/images/places/heritance-kandalama/IMG_3541.JPG",
      "/images/places/heritance-kandalama/IMG_3500.JPG",
      "/images/places/heritance-kandalama/IMG_3542.JPG",
      "/images/places/heritance-kandalama/IMG_3538.JPG",
      "/images/places/heritance-kandalama/IMG_3539.JPG"
    ],
    bestTimeToVisit: "All year round (Striking views during both green monsoons and dry sunny months)",
    weather: "26°C - 31°C (Jungle lake breeze with refreshing evenings)",
    idealStay: "2 Days",
    attractions: [
      {
        title: "Bawa Architectural Guided Tour",
        description: "Explore natural rock outcrops projecting through corridors, cave-like lobbies, and minimalist suites framing Sigiriya in the distance."
      },
      {
        title: "Kachchan Infinity Swimming Pool",
        description: "An iconic swimming pool engineered to visually merge its waterline seamlessly with the vast Kandalama lake below."
      },
      {
        title: "Kandalama Reservoir Kayaking & Birding",
        description: "Glide over peaceful waters to spot painted storks, white-bellied sea eagles, and bathing wild elephants along the shore."
      },
      {
        title: "Cave Dining Experience",
        description: "A private candlelit five-course culinary journey set inside a natural boulder cave overlooking the floodlit jungle."
      }
    ],
    insiderTips: [
      "Keep balcony doors latched; inquisitive toque macaque monkeys are known to inspect fruit baskets.",
      "Request a Dambulla wing room for the most dramatic panoramic views overlooking the lake and distant Sigiriya rock.",
      "Take an afternoon high tea on the open-air terrace as twilight descends over the water."
    ],
    relatedPackageSlugs: [
      "grand-ceylon-heritage-wildlife-luxury"
    ]
  },
  {
    id: "dest-13",
    slug: "vil-uyana",
    name: "Vil Uyana (Sigiriya)",
    province: "Central Province / Sigiriya",
    tagline: "Overwater Chalets & Reclaimed Wetland Luxury Sanctuary",
    description: "Jetwing Vil Uyana represents the pinnacle of eco-luxury hospitality in Sri Lanka. Inspired by the ancient royal water gardens of Sigiriya, the retreat was created by re-flooding agricultural lands to create an expansive, thriving wetland reserve. Guests reside in thatched luxury chalets set on stilts over water, within paddy fields, or inside forest groves, where wild otters, peacocks, and nocturnal slender lorises thrive.",
    image: "/images/destinations/main/vil-uyana.jpg",
    gallery: [
      "/images/places/vil-uyana/IMG_3527.JPG",
      "/images/places/vil-uyana/IMG_3531.JPG",
      "/images/places/vil-uyana/IMG_3529.JPG",
      "/images/places/vil-uyana/IMG_3528.JPG"
    ],
    bestTimeToVisit: "November to May (Lush green rice paddies and optimal bird-watching seasons)",
    weather: "26°C - 32°C (Tranquil wetland microclimate)",
    idealStay: "2 Days",
    attractions: [
      {
        title: "Nocturnal Slender Loris Trail",
        description: "Accompany resident wildlife naturalists with red-light torches to spot the shy, big-eyed grey slender loris in the reserve canopy."
      },
      {
        title: "Paddy & Water Dwelling Living",
        description: "Private wooden villas with plunge pools, sunken bathtubs, and expansive decks hovering directly over lotus-covered waters."
      },
      {
        title: "Wetland Biodiversity Walks",
        description: "Over 120 species of birds, marsh crocodiles, freshwater otters, and butterflies living harmoniously across the property."
      },
      {
        title: "Holistic Ayurvedic Wellness",
        description: "Rejuvenating therapies, herbal steam baths, and authentic oil massages administered in open-air overwater pavilions."
      }
    ],
    insiderTips: [
      "Book the Slender Loris nocturnal trail upon arrival as guest group sizes are strictly limited to minimize disturbance.",
      "Enjoy breakfast served on your private timber deck overlooking wild peacocks and morning lotus blooms.",
      "Vil Uyana is only 10 minutes from Sigiriya rock fortress, making early-morning climbing effortless."
    ],
    relatedPackageSlugs: [
      "sri-lanka-honeymoon-luxury-beach-escape",
      "grand-ceylon-heritage-wildlife-luxury"
    ]
  },
  {
    id: "dest-14",
    slug: "hikkaduwa",
    name: "Hikkaduwa & Hikka Tranz",
    province: "Southern Province",
    tagline: "Coral Sanctuaries, Giant Wild Sea Turtles & Coastal Vibe",
    description: "Hikkaduwa is the legendary birthplace of Sri Lanka's coastal surf and beach culture. Famous for its National Coral Reef Marine Park, gentle green sea turtles that swim right up to the shoreline to be fed seaweed, and vibrant coastal dining, Hikkaduwa combines beachfront luxury at resorts like Hikka Tranz with laid-back beach cafes, live acoustic music, and world-class scuba diving over historic shipwrecks.",
    image: "/images/destinations/main/hikkaduwa.jpg",
    gallery: [
      "/images/places/hikka-tranz/IMG_3547.JPG",
      "/images/places/hikka-tranz/IMG_3546.JPG",
      "/images/places/hikka-tranz/IMG_3543.JPG",
      "/images/places/hikka-tranz/IMG_3544.JPG",
      "/images/places/hikka-tranz/IMG_3545.JPG"
    ],
    bestTimeToVisit: "November to April (Calm glass-clear waters and optimal diving visibility)",
    weather: "27°C - 31°C (Warm tropical beach sun)",
    idealStay: "2 Days",
    attractions: [
      {
        title: "Wild Giant Sea Turtle Feeding",
        description: "Stand in knee-deep clear water as massive wild green turtles swim up peacefully to feed on natural sea grass."
      },
      {
        title: "Hikkaduwa National Coral Marine Park",
        description: "Board glass-bottom boats or snorkel over shallow coral gardens filled with angelfish, moray eels, and sea anemones."
      },
      {
        title: "Shipwreck Scuba Diving",
        description: "Explore fascinating 19th-century steamship wrecks like the Conch and Earl of Shaftesbury lying in crystal offshore waters."
      },
      {
        title: "Benny's & Main Reef Surfing",
        description: "Consistent fast A-frame reef waves popular among seasoned surfers, paired with beach breaks for novices."
      }
    ],
    insiderTips: [
      "Visit the turtle point in front of Hikka Tranz hotel early in the morning for peaceful encounters without crowds.",
      "Never touch the shells or ride on sea turtles; observe them with respect from a gentle distance.",
      "Sample fresh grilled lobster and jumbo crab at beachfront seafood grills right on the sand."
    ],
    relatedPackageSlugs: [
      "sri-lanka-honeymoon-luxury-beach-escape"
    ]
  },
  {
    id: "dest-15",
    slug: "rekawa",
    name: "Rekawa Turtle Sanctuary",
    province: "Southern Province",
    tagline: "Pristine Moonlit Beaches & Endangered Sea Turtle Nesting",
    description: "Situated along a secluded, windswept stretch of southern coastline near Tangalle, Rekawa is internationally recognized as Sri Lanka's most important natural sea turtle nesting beach. Five of the world's seven species of marine turtles — including the giant Leatherback, Green, Loggerhead, Hawksbill, and Olive Ridley — crawl ashore under the cover of night to dig nests and lay eggs in the untouched warm sand.",
    image: "/images/destinations/main/rekawa.jpg",
    gallery: [
      "/images/places/rekawa/IMG_3521.JPG",
      "/images/places/rekawa/IMG_3517.JPG",
      "/images/places/rekawa/IMG_3519.JPG",
      "/images/places/rekawa/IMG_3520.JPG",
      "/images/places/rekawa/IMG_3518.JPG"
    ],
    bestTimeToVisit: "April to July (Peak nesting season, though turtles nest all year round)",
    weather: "26°C - 30°C (Breezy southern coastal climate)",
    idealStay: "1 to 2 Days",
    attractions: [
      {
        title: "Guided Night Turtle Watch Expeditions",
        description: "Led by Nature Conservation Project volunteers using red-light torches to observe giant sea turtles nesting naturally in the wild."
      },
      {
        title: "Rekawa Lagoon Kayaking & Mangrove Safaris",
        description: "Glide silently through rich mangrove channels home to kingfishers, purple herons, and water monitor lizards."
      },
      {
        title: "Untouched Wind-Swept Coastline",
        description: "Miles of golden, empty dunes perfect for restorative meditation walks away from mainstream commercial resorts."
      },
      {
        title: "Turtle Conservation Education Center",
        description: "Learn about community-based conservation initiatives that transformed former egg poachers into proud beach guardians."
      }
    ],
    insiderTips: [
      "Flash photography and white torches are strictly prohibited on the nesting beach to avoid disorienting mother turtles.",
      "Wear dark clothing and comfortable walking sandals for navigating sandy dunes under moonlight.",
      "Nesting happens between 20:30 and midnight — combine with a tranquil luxury boutique stay in nearby Tangalle."
    ],
    relatedPackageSlugs: [
      "wild-sri-lanka-safari-big-four-expedition"
    ]
  },

  // ── NEW DESTINATIONS ADDED FROM CLIENT DIRECTORY ──
  {
  "id": "dest-16",
  "slug": "anawilundawa",
  "name": "Anawilundawa Wetland Sanctuary",
  "province": "North Western Province / Puttalam",
  "tagline": "Ramsar Ancient Wetland Cascade & Migratory Bird Haven",
  "description": "Spanning over 1,397 hectares between the coast and the Chilaw-Puttalam lagoon corridor, Anawilundawa is one of Sri Lanka's six designated Ramsar Wetlands of International Importance. Centered around a remarkable ancient cascade system of seven interconnected freshwater reservoirs dating back to the 12th century, this ecological paradise hosts over 168 resident and migratory bird species, fishing cats, rusty-spotted cats, and Indian otters.",
  "image": "/images/destinations/main/anawilundawa.jpg",
  "gallery": [
    "/images/places/anawilundawa/anawilundawa-1.jpg",
    "/images/places/anawilundawa/anawilundawa-2.jpg",
    "/images/places/anawilundawa/anawilundawa-3.jpg",
    "/images/places/anawilundawa/anawilundawa-4.jpg",
    "/images/places/anawilundawa/anawilundawa-5.jpg",
    "/images/places/anawilundawa/anawilundawa-6.jpg",
    "/images/places/anawilundawa/anawilundawa-7.jpg",
    "/images/places/anawilundawa/anawilundawa-8.jpg",
    "/images/places/anawilundawa/anawilundawa-9.jpg",
    "/images/places/anawilundawa/anawilundawa-10.jpg"
  ],
  "bestTimeToVisit": "October to April (Peak migratory waterbird season)",
  "weather": "28°C - 33°C (Tropical coastal climate)",
  "idealStay": "Half Day to 1 Day",
  "attractions": [
    {
      "title": "Ancient Seven-Tank Cascade System",
      "description": "Historic 12th-century interconnected irrigation tanks covered in water lilies, providing breeding grounds for countless waterfowl."
    },
    {
      "title": "Ramsar Bird Sanctuary",
      "description": "Spot Asian openbills, purple swamphens, cotton pygmy-geese, pheasant-tailed jacanas, and migratory waders along quiet bunds."
    },
    {
      "title": "Mangrove Waterways & Estuaries",
      "description": "Peaceful eco-walks winding through saltwater mangroves, coastal scrub, and lotus ponds."
    }
  ],
  "insiderTips": [
    "Early morning (6:30 AM to 8:30 AM) is the golden hour for bird photography and serene lake reflections.",
    "A convenient nature stop when traveling north from Bandaranaike Airport towards Wilpattu National Park."
  ],
  "relatedPackageSlugs": [
    "ceylon-northern-discovery-8-days",
    "ceylon-wild-escape-5-days"
  ]
},

  {
  "id": "dest-17",
  "slug": "bundala",
  "name": "Bundala National Park",
  "province": "Southern Province / Hambantota",
  "tagline": "UNESCO Biosphere Reserve & World-Class Waterbird Haven",
  "description": "Bundala National Park is a globally acclaimed coastal sanctuary and Sri Lanka's very first Ramsar wetland site, designated as a UNESCO Man and Biosphere Reserve. Featuring five shallow brackish lagoons, thorn scrublands, sand dunes, and saltpans, Bundala is the ultimate wintering ground for tens of thousands of migratory shorebirds, including flocks of Greater Flamingos, alongside wild elephants, marsh crocodiles, and marine turtles.",
  "image": "/images/destinations/main/bundala.jpg",
  "gallery": [
    "/images/places/bundala/bundala-1.jpg",
    "/images/places/bundala/bundala-2.jpg",
    "/images/places/bundala/bundala-3.jpg",
    "/images/places/bundala/bundala-4.jpg",
    "/images/places/bundala/bundala-5.jpg",
    "/images/places/bundala/bundala-6.jpg",
    "/images/places/bundala/bundala-7.jpg",
    "/images/places/bundala/bundala-8.jpg",
    "/images/places/bundala/bundala-9.jpg",
    "/images/places/bundala/bundala-10.jpg"
  ],
  "bestTimeToVisit": "September to March (Migratory shorebird peak)",
  "weather": "27°C - 32°C (Warm semi-arid coastal climate)",
  "idealStay": "Half Day to 1 Day",
  "attractions": [
    {
      "title": "Greater Flamingo Lagoons",
      "description": "Shallow coastal lagoons where elegant pink flamingo flocks and migratory waders congregate in season."
    },
    {
      "title": "Coastal 4x4 Jeep Safari",
      "description": "Intimate game drives through saltpans and sand dunes spotting wild elephants, spotted deer, and wild boars."
    },
    {
      "title": "Marine Turtle Nesting Coast",
      "description": "Pristine beaches where green, olive ridley, and leatherback turtles come ashore under the stars."
    }
  ],
  "insiderTips": [
    "Bundala offers tranquil, intimate game drives far away from the heavy jeep traffic of central Yala.",
    "Bring high-magnification binoculars or a telephoto lens for rewarding lagoon birding."
  ],
  "relatedPackageSlugs": [
    "ceylon-wild-escape-5-days",
    "sri-lanka-highlights-6-days",
    "ceylon-grand-discovery-8-days"
  ]
},

  {
  "id": "dest-18",
  "slug": "diyaluma",
  "name": "Diyaluma Falls",
  "province": "Uva Province / Koslanda",
  "tagline": "Sri Lanka's 2nd-Highest Cascading Wonder & River Gorge",
  "description": "Plunging 220 meters (720 feet) straight down a colossal vertical cliff face in Koslanda, Diyaluma Falls is the second-tallest waterfall in Sri Lanka. Fed by the Punagala Oya, a tributary of the Kirindi Oya, the roaring sheet of water crashes into a deep misty gorge below, creating magnificent rainbows in the morning sun and offering an awe-inspiring roadside vista along the Colombo-Batticaloa highway.",
  "image": "/images/destinations/main/diyaluma.jpg",
  "gallery": [
    "/images/places/diyaluma/diyaluma-1.jpg",
    "/images/places/diyaluma/diyaluma-2.jpg",
    "/images/places/diyaluma/diyaluma-3.jpg",
    "/images/places/diyaluma/diyaluma-4.jpg",
    "/images/places/diyaluma/diyaluma-5.jpg"
  ],
  "bestTimeToVisit": "Year-round; best volume from October to March after monsoon rains",
  "weather": "22°C - 28°C (Pleasant sub-montane valley climate)",
  "idealStay": "Half Day (Often combined with Upper Diyaluma)",
  "attractions": [
    {
      "title": "The 220m Lower Cascades Lookout",
      "description": "Iconic viewpoint directly from the bridge and river banks at Koslanda looking up at the sheer drop."
    },
    {
      "title": "Punagala Oya River Valley",
      "description": "Tropical riverbanks surrounded by bamboo groves and traditional rubber estates."
    },
    {
      "title": "Scenic Southern Mountain Pass",
      "description": "The picturesque highland drive connecting Ella and Wellawaya."
    }
  ],
  "insiderTips": [
    "Never attempt to swim in the turbulent lower plunge pool—enjoy the view from the safe viewing platform.",
    "Enjoy fresh king coconuts from local fruit stalls near the bridge while taking photographs."
  ],
  "relatedPackageSlugs": [
    "ceylon-wild-escape-5-days",
    "ceylon-east-to-south-adventure-15-days",
    "ceylon-complete-journey-15-days",
    "ceylon-hill-country-journey-8-days"
  ]
},

  {
  "id": "dest-19",
  "slug": "upper-diyaluma",
  "name": "Upper Diyaluma Natural Rock Pools",
  "province": "Uva Province / Koslanda",
  "tagline": "The World-Famous Mountain Infinity Pools on the Cliff Edge",
  "description": "Perched atop Sri Lanka's second-highest waterfall, Upper Diyaluma is one of the most exhilarating natural wonders in Asia. A guided hike through rural hillside villages leads to a series of tiered natural infinity pools, soothing rock slides, and freshwater jacuzzis sculpted out of smooth granite rock. Looking over the edge reveals a breathtaking 220-meter drop into the emerald valleys of Koslanda.",
  "image": "/images/destinations/main/upper-diyaluma.jpg",
  "gallery": [
    "/images/places/upper-diyaluma/upper-diyaluma-1.jpg",
    "/images/places/upper-diyaluma/upper-diyaluma-2.jpg",
    "/images/places/upper-diyaluma/upper-diyaluma-3.jpg",
    "/images/places/upper-diyaluma/upper-diyaluma-4.jpg",
    "/images/places/upper-diyaluma/upper-diyaluma-5.jpg"
  ],
  "bestTimeToVisit": "January to September (Calm waters and sunny conditions)",
  "weather": "20°C - 26°C (Breezy mountain climate)",
  "idealStay": "Half Day to 1 Day",
  "attractions": [
    {
      "title": "Cliff-Edge Natural Infinity Pool",
      "description": "World-famous natural freshwater pool right at the lip of the 220m drop with panoramic valley views."
    },
    {
      "title": "Upper Tier Cascades & Rock Slides",
      "description": "Multiple calm swimming basins higher up the river with smooth natural waterslides."
    },
    {
      "title": "Guided Village Highland Hike",
      "description": "Scenic trek starting from Makaldenya village through lemongrass fields and pine forests."
    }
  ],
  "insiderTips": [
    "Always hike with a reputable local guide and only swim in designated safe pools away from heavy currents.",
    "Wear secure water shoes or hiking sandals for grip on damp granite rocks."
  ],
  "relatedPackageSlugs": [
    "ceylon-wild-escape-5-days",
    "ceylon-east-to-south-adventure-15-days",
    "ceylon-hill-country-journey-8-days"
  ]
},

  {
  "id": "dest-20",
  "slug": "dunhinda",
  "name": "Dunhinda Falls",
  "province": "Uva Province / Badulla",
  "tagline": "The Legendary 'Smoky Falls' & Jungle Canyon",
  "description": "Revered as one of Sri Lanka's most romantic and visually stunning waterfalls, Dunhinda Falls plunges 64 meters (210 feet) into a dramatic rock-walled amphitheater near Badulla. Fed by the Badulu Oya, the torrential cascade atomizes into a thick, perpetual cloud of mist (giving it the name 'Dun' meaning smoke or mist). The scenic 1-kilometer jungle walking path passes wild monkey troops, native songbirds, and panoramic canyon vistas.",
  "image": "/images/destinations/main/dunhinda.jpg",
  "gallery": [
    "/images/places/dunhinda/dunhinda-1.png",
    "/images/places/dunhinda/dunhinda-2.jpg",
    "/images/places/dunhinda/dunhinda-3.jpg",
    "/images/places/dunhinda/dunhinda-4.jpg",
    "/images/places/dunhinda/dunhinda-5.jpg"
  ],
  "bestTimeToVisit": "June to September and December to February",
  "weather": "23°C - 28°C (Pleasant highland climate)",
  "idealStay": "Half Day",
  "attractions": [
    {
      "title": "Smoky Falls Main Amphitheater",
      "description": "The thunderous main drop enveloped in cool refreshing mist clouds and dramatic rock walls."
    },
    {
      "title": "Kuda Dunhinda (Little Dunhinda)",
      "description": "A charming smaller cascade encountered halfway along the jungle footpath."
    },
    {
      "title": "Badulu Oya Canyon Trail",
      "description": "Shaded forest trail flanked by endemic trees, hanging vines, and local herbal tea stalls."
    }
  ],
  "insiderTips": [
    "Stop for a cup of authentic herbal 'Belimal' or 'Ranawara' tea served with jaggery along the walking trail.",
    "Wear comfortable walking shoes with good tread as the jungle pathway can be damp and rocky."
  ],
  "relatedPackageSlugs": [
    "ceylon-hill-country-journey-8-days",
    "ceylon-complete-journey-15-days"
  ]
},

  {
  "id": "dest-21",
  "slug": "habarana-lake",
  "name": "Habarana Lake & Countryside",
  "province": "North Central Province / Cultural Triangle",
  "tagline": "Tranquil Lotus Waterways, Village Catamarans & Birdlife",
  "description": "Located at the central crossroads of Sri Lanka's Cultural Triangle, Habarana is a peaceful ecological haven centered around ancient royal irrigation lakes. Shaded by majestic Kumbuk trees and floating purple water lilies, Habarana Lake is famous for traditional catamaran boat safaris, serene sunrise kayaking, birdwatching, and authentic rural village tours where guests experience ox-cart rides, lakeside farming, and home-cooked culinary hospitality.",
  "image": "/images/destinations/main/habarana-lake.jpg",
  "gallery": [
    "/images/places/habarana-lake/habarana-lake-1.jpg",
    "/images/places/habarana-lake/habarana-lake-2.jpg",
    "/images/places/habarana-lake/habarana-lake-3.jpg",
    "/images/places/habarana-lake/habarana-lake-4.jpg",
    "/images/places/habarana-lake/habarana-lake-5.jpg",
    "/images/places/habarana-lake/habarana-lake-6.jpg"
  ],
  "bestTimeToVisit": "Year-round (Especially November to May)",
  "weather": "26°C - 32°C (Warm tropical dry-zone climate)",
  "idealStay": "1 to 2 Days",
  "attractions": [
    {
      "title": "Habarana Lake Catamaran Safari",
      "description": "Traditional twin-hulled wooden boat ride gliding past lotus flowers and cormorant perches."
    },
    {
      "title": "Authentic Bullock Cart & Village Life",
      "description": "Scenic cart ride through green paddy fields to a traditional mud-brick home."
    },
    {
      "title": "Wild Elephant Lakeside Sightings",
      "description": "Watching wild elephants wander down to the reservoir edges at twilight."
    }
  ],
  "insiderTips": [
    "An early morning boat ride offers mirror-smooth lake reflections and cooler temperatures for photography.",
    "Combine with an afternoon safari to nearby Minneriya or Kaudulla National Parks."
  ],
  "relatedPackageSlugs": [
    "sri-lanka-highlights-6-days",
    "ceylon-heritage-escape-3-days",
    "ceylon-grand-discovery-8-days",
    "ceylon-complete-journey-15-days"
  ]
},

  {
  "id": "dest-22",
  "slug": "kalametiya",
  "name": "Kalametiya Bird Sanctuary",
  "province": "Southern Province / Tangalle",
  "tagline": "Coastal Brackish Lagoons & Mangrove Birding Safari",
  "description": "Kalametiya is one of the oldest bird sanctuaries in Sri Lanka, established in 1938 along the tranquil southern coastline near Rekawa and Tangalle. Comprising a rich labyrinth of coastal salt marshes, tidal lagoons, and dense mangrove forests, Kalametiya is home to over 150 bird species including rare water birds, painted storks, reef herons, and winter migrants. Visitors explore the waterways aboard guided silent rowing boats.",
  "image": "/images/destinations/main/kalametiya.jpg",
  "gallery": [
    "/images/places/kalametiya/kalametiya-1.jpg",
    "/images/places/kalametiya/kalametiya-2.jpg",
    "/images/places/kalametiya/kalametiya-3.jpg",
    "/images/places/kalametiya/kalametiya-4.jpg",
    "/images/places/kalametiya/kalametiya-5.jpg",
    "/images/places/kalametiya/kalametiya-6.jpg",
    "/images/places/kalametiya/kalametiya-7.jpg",
    "/images/places/kalametiya/kalametiya-8.jpg",
    "/images/places/kalametiya/kalametiya-9.jpg",
    "/images/places/kalametiya/kalametiya-10.jpg"
  ],
  "bestTimeToVisit": "November to April (Peak migratory period)",
  "weather": "27°C - 31°C (Breezy tropical coast)",
  "idealStay": "Half Day to 1 Day",
  "attractions": [
    {
      "title": "Silent Wooden Boat Lagoon Safari",
      "description": "Gliding noiselessly through mangrove tunnels with an expert local boatman."
    },
    {
      "title": "Kalametiya Rock Viewpoint",
      "description": "A gentle hill climb offering panoramic vistas over the lagoons, ocean, and coconut estates."
    },
    {
      "title": "Secluded Southern Beaches",
      "description": "Nearby wild, pristine beaches untouched by commercial development."
    }
  ],
  "insiderTips": [
    "Silent manual rowing boats allow you to get within meters of resting herons and kingfishers without startling them.",
    "Combine with an evening visit to the nearby Rekawa marine turtle nesting beach."
  ],
  "relatedPackageSlugs": [
    "southern-soul-3-days",
    "ceylon-wild-escape-5-days",
    "ceylon-romantic-escape-9-days"
  ]
},

  {
  "id": "dest-23",
  "slug": "kanneliya",
  "name": "Kanneliya Rainforest Reserve",
  "province": "Southern Province / Galle District",
  "tagline": "The KDN Complex UNESCO Biosphere Reserve & Hidden Waterfalls",
  "description": "Recognized by UNESCO as a premier Biosphere Reserve, Kanneliya is the core of the KDN (Kanneliya-Dediyagala-Nakiyadeniya) forest complex, representing the most important tropical rainforest in Sri Lanka after Sinharaja. Located just 35 km northeast of Galle, it boasts exceptionally high endemism with rare bird species, green pit vipers, endemic freshwater fish, jungle streams, and scenic waterfalls such as Anagimale Falls and Narangas Falls.",
  "image": "/images/destinations/main/kanneliya.jpg",
  "gallery": [
    "/images/places/kanneliya/kanneliya-1.jpg",
    "/images/places/kanneliya/kanneliya-2.jpg",
    "/images/places/kanneliya/kanneliya-3.jpg",
    "/images/places/kanneliya/kanneliya-4.jpg",
    "/images/places/kanneliya/kanneliya-5.jpg",
    "/images/places/kanneliya/kanneliya-6.jpg",
    "/images/places/kanneliya/kanneliya-7.jpg",
    "/images/places/kanneliya/kanneliya-8.jpg",
    "/images/places/kanneliya/kanneliya-9.jpg",
    "/images/places/kanneliya/kanneliya-10.jpg"
  ],
  "bestTimeToVisit": "December to April and July to September (Drier forest conditions)",
  "weather": "24°C - 29°C (Humid tropical rainforest climate)",
  "idealStay": "1 Day",
  "attractions": [
    {
      "title": "Anagimale & Narangas Falls",
      "description": "Gorgeous forest cascades hidden deep within the verdant jungle canopy."
    },
    {
      "title": "Giant Nawada Tree Trek",
      "description": "An ancient forest giant tree with colossal buttress roots standing over 40 meters high."
    },
    {
      "title": "Kabbale Kanda Mountain Viewpoint",
      "description": "A challenging guided hike to the highest peak in the reserve with 360° forest views."
    }
  ],
  "insiderTips": [
    "Wear leech socks and light waterproof hiking gear; hire an official department naturalist guide at the entrance.",
    "Ideal day-trip excursion from Galle Fort, Mirissa, or Unawatuna."
  ],
  "relatedPackageSlugs": [
    "ceylon-romantic-escape-9-days",
    "ceylon-complete-journey-15-days",
    "southern-soul-3-days"
  ]
},

  {
  "id": "dest-24",
  "slug": "kumana",
  "name": "Kumana National Park",
  "province": "Eastern Province / Yala East",
  "tagline": "Sri Lanka's Ultimate Avian Eden & Wilderness Safari",
  "description": "Historically known as Yala East National Park, Kumana is Sri Lanka's undisputed birding paradise. Encompassing a massive 200-hectare natural mangrove swamp lake ('Kumana Villu') fed by the Kumbukkan Oya, the park serves as an essential breeding ground for thousands of water birds, black-necked storks, spoonbills, and pelicans. In addition to birdlife, Kumana's remote, uncrowded savanna and granite hills shelter thriving populations of leopards, elephants, and sloth bears.",
  "image": "/images/destinations/main/kumana.jpg",
  "gallery": [
    "/images/places/kumana/kumana-1.jpg",
    "/images/places/kumana/kumana-2.jpg",
    "/images/places/kumana/kumana-3.jpg",
    "/images/places/kumana/kumana-4.jpg",
    "/images/places/kumana/kumana-5.jpg",
    "/images/places/kumana/kumana-6.jpg",
    "/images/places/kumana/kumana-7.jpg",
    "/images/places/kumana/kumana-8.jpg",
    "/images/places/kumana/kumana-9.jpg",
    "/images/places/kumana/kumana-10.jpg"
  ],
  "bestTimeToVisit": "May to September (Breeding season & dry-zone game viewing)",
  "weather": "28°C - 34°C (Tropical dry-zone climate)",
  "idealStay": "1 to 2 Days",
  "attractions": [
    {
      "title": "Kumana Villu Mangrove Swamp",
      "description": "A sprawling natural wetland where thousands of birds build nests in mangrove branches."
    },
    {
      "title": "Bopaththalawa & Kudumbigala Hermitage",
      "description": "Nearby ancient Buddhist rock cave monasteries hidden deep in the jungle."
    },
    {
      "title": "Uncrowded Big Four Game Drives",
      "description": "Wild leopards, elephants, and sloth bears amidst stunning coastal dunes."
    }
  ],
  "insiderTips": [
    "Kumana is easily accessible from Arugam Bay and offers one of the most serene, non-touristy safari experiences on the island.",
    "Visit the historic Kudumbigala Monastery on the park boundary for unforgettable views."
  ],
  "relatedPackageSlugs": [
    "ceylon-east-to-south-adventure-15-days",
    "ceylon-wild-escape-5-days"
  ]
},

  {
  "id": "dest-25",
  "slug": "minneriya",
  "name": "Minneriya National Park",
  "province": "North Central Province / Cultural Triangle",
  "tagline": "Home of 'The Gathering' — Asia's Greatest Elephant Spectacle",
  "description": "Anchored around the monumental 3rd-century Minneriya Reservoir built by King Mahasen, Minneriya National Park is globally renowned for hosting 'The Gathering'—recognized by Lonely Planet and National Geographic as one of the world's greatest wildlife spectacles. During the dry season, up to 300 to 400 wild Asian elephants congregate on the lush receding lake bed to feed, socialize, bathe, and play.",
  "image": "/images/destinations/main/minneriya.jpg",
  "gallery": [
    "/images/places/minneriya/minneriya-1.jpg",
    "/images/places/minneriya/minneriya-2.jpg",
    "/images/places/minneriya/minneriya-3.jpg",
    "/images/places/minneriya/minneriya-4.jpg",
    "/images/places/minneriya/minneriya-5.jpg",
    "/images/places/minneriya/minneriya-6.jpg",
    "/images/places/minneriya/minneriya-7.webp",
    "/images/places/minneriya/minneriya-8.jpg",
    "/images/places/minneriya/minneriya-9.jpg",
    "/images/places/minneriya/minneriya-10.jpg"
  ],
  "bestTimeToVisit": "July to October (Peak Gathering season); year-round game drives",
  "weather": "28°C - 33°C (Warm dry-zone climate)",
  "idealStay": "Half Day (Afternoon Safari)",
  "attractions": [
    {
      "title": "The Great Elephant Gathering",
      "description": "Watching massive family herds of elephants gather on the open lake shores."
    },
    {
      "title": "Minneriya Ancient Reservoir",
      "description": "An ancient hydraulic marvel with panoramic views of distant Cultural Triangle hills."
    },
    {
      "title": "Rich Birdlife & Reptiles",
      "description": "Spotting painted storks, grey herons, sea eagles, mugger crocodiles, and sambar deer."
    }
  ],
  "insiderTips": [
    "Afternoon safaris (starting at 2:30 PM) are the best as elephants emerge from the shade of the forest towards the water.",
    "Our private chauffeur-guides coordinate with park rangers to select whether Minneriya or neighboring Kaudulla has the highest herd density that day."
  ],
  "relatedPackageSlugs": [
    "sri-lanka-highlights-6-days",
    "ceylon-heritage-escape-3-days",
    "ceylon-grand-discovery-8-days",
    "ceylon-family-adventure-11-days"
  ]
},

  {
  "id": "dest-26",
  "slug": "pidurangala",
  "name": "Pidurangala Rock",
  "province": "Central Province / Sigiriya",
  "tagline": "The Ancient Monastic Peak & Golden Sunset Over Lion Rock",
  "description": "Rising directly adjacent to the world-famous Sigiriya fortress, Pidurangala Rock is a colossal granite peak rich in spiritual history and legendary panoramic vistas. Originally developed as a Buddhist monastery by King Kasyapa in the 5th century AD, the rock features an ancient cave temple with a 12.5-meter reclining brick Buddha. The moderately adventurous climb culminates in a vast flat rocky summit with the ultimate 360-degree photographic view directly facing the sheer face of Sigiriya Lion Rock.",
  "image": "/images/destinations/main/pidurangala.jpg",
  "gallery": [
    "/images/places/pidurangala/pidurangala-1.jpg",
    "/images/places/pidurangala/pidurangala-2.jpg",
    "/images/places/pidurangala/pidurangala-3.jpg",
    "/images/places/pidurangala/pidurangala-4.jpg"
  ],
  "bestTimeToVisit": "Year-round (Early dawn for sunrise or late afternoon for sunset)",
  "weather": "26°C - 31°C (Warm tropical climate)",
  "idealStay": "Half Day (2-3 Hours)",
  "attractions": [
    {
      "title": "The Summit Panoramic Plateau",
      "description": "Wide open rock platform offering the single best photo angle of Sigiriya Lion Rock."
    },
    {
      "title": "Ancient Reclining Buddha Cave",
      "description": "Historic 5th-century brick and plaster Buddha image resting peacefully inside a natural cavern."
    },
    {
      "title": "Pidurangala Sigiri Raja Maha Viharaya",
      "description": "Sacred monastery at the base with ancient inscriptions and peaceful monks' quarters."
    }
  ],
  "insiderTips": [
    "Start the climb around 5:15 AM with a torch for sunrise, or around 4:30 PM for sunset.",
    "As you pass through an active Buddhist temple at the base, cover shoulders and knees until reaching the upper trail."
  ],
  "relatedPackageSlugs": [
    "sri-lanka-highlights-6-days",
    "ceylon-heritage-escape-3-days",
    "ceylon-explorer-4-days",
    "ceylon-grand-discovery-8-days"
  ]
},

  {
  "id": "dest-27",
  "slug": "ravana-falls",
  "name": "Ravana Falls & Caves",
  "province": "Uva Province / Ella",
  "tagline": "Legendary Ramayana Waterfall & Misty Mountain Ravines",
  "description": "Dropping 25 meters (82 feet) over three tiers of concave rock formations, Ravana Falls is one of the most famous and photographed waterfalls in Sri Lanka, situated right along the main mountain pass south of Ella. According to the ancient Hindu epic Ramayana, King Ravana hid Princess Sita in the subterranean caves behind this waterfall. The rushing waters create a spectacular roar, framed by lush tropical jungle and sheer mountain cliffs.",
  "image": "/images/destinations/main/ravana-falls.jpg",
  "gallery": [
    "/images/places/ravana-falls/ravana-falls-1.jpg",
    "/images/places/ravana-falls/ravana-falls-2.jpg",
    "/images/places/ravana-falls/ravana-falls-3.jpg",
    "/images/places/ravana-falls/ravana-falls-4.jpg"
  ],
  "bestTimeToVisit": "Year-round; most thunderous during and after monsoon seasons",
  "weather": "20°C - 26°C (Pleasant mountain climate)",
  "idealStay": "Half Day",
  "attractions": [
    {
      "title": "Ravana Falls Viewing Bridge",
      "description": "Prime roadside viewing point with mist spraying into the air and dramatic photo backdrops."
    },
    {
      "title": "Ravana Cave (Ravana Ella Guhawa)",
      "description": "Ancient cave 1,370m above sea level with tunnels connected to the Ramayana legend."
    },
    {
      "title": "Ella Gap Scenery",
      "description": "Breathtaking vistas down the southern mountain escarpment to the distant coastal plains."
    }
  ],
  "insiderTips": [
    "Visit in the morning when the light illuminates the cascades and traffic along the pass is light.",
    "Do not climb or swim on slippery rocks above the main viewing area; observe safety barriers."
  ],
  "relatedPackageSlugs": [
    "sri-lanka-highlights-6-days",
    "ceylon-grand-discovery-8-days",
    "ceylon-wild-escape-5-days",
    "ceylon-hill-country-journey-8-days",
    "ceylon-romantic-escape-9-days"
  ]
},

  {
  "id": "dest-28",
  "slug": "sinharaja",
  "name": "Sinharaja Rainforest Reserve",
  "province": "Sabaragamuwa & Southern Provinces",
  "tagline": "UNESCO World Heritage Tropical Lowland Virgin Rainforest",
  "description": "Sinharaja is Sri Lanka's last viable area of primary tropical rainforest and a UNESCO World Heritage Site and Biosphere Reserve. Spanning over 11,000 hectares of rugged virgin jungle, over 60% of the trees are endemic to the island, with many considered rare. Sinharaja is globally celebrated for its mixed-species bird feeding flocks (the largest bird waves on Earth), harboring 28 endemic bird species including the Sri Lanka Blue Magpie, purple-faced langurs, and vibrant tree frogs.",
  "image": "/images/destinations/main/sinharaja.jpg",
  "gallery": [
    "/images/places/sinharaja/sinharaja-1.jpg",
    "/images/places/sinharaja/sinharaja-2.jpg",
    "/images/places/sinharaja/sinharaja-3.webp",
    "/images/places/sinharaja/sinharaja-4.jpg",
    "/images/places/sinharaja/sinharaja-5.jpg",
    "/images/places/sinharaja/sinharaja-6.jpg",
    "/images/places/sinharaja/sinharaja-7.jpg",
    "/images/places/sinharaja/sinharaja-8.jpg",
    "/images/places/sinharaja/sinharaja-9.jpg",
    "/images/places/sinharaja/sinharaja-10.jpg"
  ],
  "bestTimeToVisit": "December to April and August to September (Driest months)",
  "weather": "23°C - 28°C (Humid tropical rainforest climate)",
  "idealStay": "1 to 2 Days",
  "attractions": [
    {
      "title": "Moulawella & Sinhagala Peaks",
      "description": "Elevated vantage points with sweeping views across the endless emerald forest canopy."
    },
    {
      "title": "Endemic Bird Feeding Waves",
      "description": "Fascinating phenomenon where dozens of different bird species forage together in harmony."
    },
    {
      "title": "Jungle Waterfalls & Crystal Streams",
      "description": "Pristine cascades including Kekuna Falls and hidden swimming pools."
    }
  ],
  "insiderTips": [
    "Enter through either Kudawa (northern gate) or Pitadeniya (southern gate) with a government-licensed forest naturalist.",
    "Bring leech socks, rain protection, and binoculars for canopy wildlife."
  ],
  "relatedPackageSlugs": [
    "ceylon-gem-and-green-heritage-7-days",
    "ceylon-complete-journey-15-days",
    "ceylon-romantic-escape-9-days"
  ]
},

  {
  "id": "dest-29",
  "slug": "wilpattu",
  "name": "Wilpattu National Park",
  "province": "North Western & North Central Provinces",
  "tagline": "The Land of Natural Sand-Rimmed Lakes & Elusive Leopards",
  "description": "Covering an expansive 131,693 hectares, Wilpattu is Sri Lanka's largest and one of its oldest national parks. What sets Wilpattu apart globally is its unique topography featuring nearly sixty natural sand-rimmed water basins called 'Willus' (freshwater rain-fed lakes). This pristine dry-zone wilderness of dense forest, copper-red sand tracks, and open grasslands offers an unhurried, private safari experience famous for tracking the majestic Sri Lankan leopard, sloth bears, barking deer, and crocodiles.",
  "image": "/images/destinations/main/wilpattu.jpg",
  "gallery": [
    "/images/places/wilpattu/wilpattu-1.jpg",
    "/images/places/wilpattu/wilpattu-2.webp",
    "/images/places/wilpattu/wilpattu-3.jpg",
    "/images/places/wilpattu/wilpattu-4.jpg",
    "/images/places/wilpattu/wilpattu-5.jpg",
    "/images/places/wilpattu/wilpattu-6.jpg",
    "/images/places/wilpattu/wilpattu-7.avif",
    "/images/places/wilpattu/wilpattu-8.jpg",
    "/images/places/wilpattu/wilpattu-9.jpg",
    "/images/places/wilpattu/wilpattu-10.jpg"
  ],
  "bestTimeToVisit": "February to October (Dry season draws animals to the willus)",
  "weather": "27°C - 33°C (Tropical dry-zone climate)",
  "idealStay": "1 to 2 Days",
  "attractions": [
    {
      "title": "Natural Sand-Rimmed Willus",
      "description": "Spotting wildlife drinking beside picturesque natural lakes like Maradanmaduwa and Kumbuk Wila."
    },
    {
      "title": "Sri Lankan Leopard & Sloth Bear Tracking",
      "description": "Renowned for high leopard and sloth bear sightings along secluded red-dirt tracks."
    },
    {
      "title": "Kudrimalai Point (Horse Mountain)",
      "description": "Historic red-cliff coastal headland where Prince Vijaya landed in 543 BC."
    }
  ],
  "insiderTips": [
    "Opt for a full-day safari with a packed picnic breakfast and lunch to explore the deeper, pristine northern willus.",
    "Far less crowded than Yala, offering photographers quiet, uninterrupted wildlife encounters."
  ],
  "relatedPackageSlugs": [
    "ceylon-northern-discovery-8-days",
    "ceylon-wild-escape-5-days",
    "ceylon-complete-journey-15-days"
  ]
}
];
