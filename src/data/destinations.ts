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
    image: "/images/places/dambulla-sigiriya/IMG_3583.JPG",
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
    image: "/images/places/kandy/IMG_3645.JPG",
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
    image: "/images/places/ella/IMG_3589.JPG",
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
    image: "/images/places/nuwara-eliya/IMG_3612.JPG",
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
    image: "/images/places/galle/IMG_3596.JPG",
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
    image: "/images/places/yala/IMG_3569.JPG",
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
    image: "/images/places/mirissa/IMG_3554.PNG",
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
    image: "/images/places/anuradhapura/IMG_3663.PNG",
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
    image: "/images/places/jaffna-mannar/IMG_3622.JPG",
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
    image: "/images/places/blue-beach/IMG_3535.JPG",
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
    image: "/images/places/hirikatiya/IMG_3524.WEBP",
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
    image: "/images/places/heritance-kandalama/IMG_3540.JPG",
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
    image: "/images/places/vil-uyana/IMG_3527.JPG",
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
    image: "/images/places/hikka-tranz/IMG_3547.JPG",
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
    image: "/images/places/rekawa/IMG_3521.JPG",
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
  }
];
