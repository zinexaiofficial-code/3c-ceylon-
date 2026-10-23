export interface TravelExperience {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  iconName: string;
  bestSeason: string;
  topHighlights: string[];
  recommendedDuration: string;
  featuredPackageSlug: string;
}

export const EXPERIENCES: TravelExperience[] = [
  {
    id: "exp-yoga",
    slug: "yoga-and-meditation",
    title: "Yoga and Meditation",
    tagline: "Spiritual Rejuvenation, Vedic Mindfulness & Oceanfront Zen",
    shortDesc: "Sri Lanka is all about the best things in life in one tiny place. Yoga, just like Ayurveda, has a special place here, its authenticity and Vedic roots helping you reconnect with body and mind amidst tranquil tropical gardens and ocean breezes.",
    fullDesc: "Sri Lanka is all about the best things in life in one tiny place. Yoga, just like Ayurveda, has a special place here, its authenticity and Vedic roots providing an unmatched sanctuary for inner peace. Practice sunrise vinyasa on tranquil golden beaches, restorative meditation in misty mountain pavilions, and sound healing rituals led by certified wellness masters.",
    image: "/images/experiences/Yoga-Tour-in-Sri-Lanka.jpg",
    iconName: "Heart",
    bestSeason: "Year-Round (Best Nov - Apr in South; May - Oct in East)",
    topHighlights: [
      "Sunrise oceanfront yoga on secluded private beaches",
      "Vipassana and guided Buddhist meditation with monk blessings",
      "Holistic sound bath sessions and chakra healing",
      "Organic vegetarian farm-to-table culinary retreats"
    ],
    recommendedDuration: "3 to 7 Days",
    featuredPackageSlug: "sri-lanka-honeymoon-luxury-beach-escape"
  },
  {
    id: "exp-weddings",
    slug: "weddings-in-the-sun",
    title: "Weddings in the Sun",
    tagline: "Exotic Celebrations, Colonial Fortresses & Golden Shore Vows",
    shortDesc: "As far as exotic wedding destinations go, Sri Lanka trumps all other. You can get married on its golden beaches, jungle settings, colonial fortresses, or misty tea plantations with traditional Kandyan drummers and romantic island luxury.",
    fullDesc: "As far as exotic wedding destinations go, Sri Lanka trumps all other. You can get married on its golden beaches, jungle settings, colonial ramparts, or amidst rolling emerald tea hills. Complete with rhythmic Kandyan drummers, traditional oil lamp ceremonies (Polkatu Pahana), elephant blessings, and Michelin-standard beachfront banquets.",
    image: "/images/experiences/Wedding.jpg",
    iconName: "Heart",
    bestSeason: "December to April & July to September",
    topHighlights: [
      "Barefoot beachfront vows on secluded private bays",
      "Traditional Poruwa wedding ceremonies and Kandyan dancers",
      "Colonial grandeur celebrations in 17th-century Galle Fort",
      "Exclusive private villa and tea plantation buyouts"
    ],
    recommendedDuration: "5 to 10 Days",
    featuredPackageSlug: "sri-lanka-honeymoon-luxury-beach-escape"
  },
  {
    id: "exp-ayurveda",
    slug: "ayurveda-spa-therapy",
    title: "Ayurveda & Spa Therapy",
    tagline: "Ancient Royal Healing, Herbal Elixirs & Shirodhara Rejuvenation",
    shortDesc: "Ayurveda Sri Lanka credentials go back thousands of years. The direct influence of Indian Ayurveda and indigenous royal herbal knowledge shaped holistic healing rituals, herbal oil massages, and natural wellness sanctuaries.",
    fullDesc: "Ayurveda Sri Lanka credentials go back thousands of years. The direct influence of ancient Indian Ayurveda and indigenous royal herbal wisdom shaped holistic healing rituals. Experience bespoke treatments diagnosed by resident Ayurvedic doctors (Vaidyas), including warm Shirodhara herbal oil pours, floral steam baths, and revitalizing panchakarma therapies.",
    image: "/images/experiences/Ayurveda-Spa.jpg",
    iconName: "Sparkles",
    bestSeason: "Year-Round (Monsoon periods are traditionally ideal for detox)",
    topHighlights: [
      "Personalized pulse diagnosis with qualified Ayurvedic physicians",
      "Traditional Shirodhara warm herbal oil forehead therapy",
      "Herbal steam baths infused with native medicinal flora",
      "Customized dosha-balancing organic herbal diets"
    ],
    recommendedDuration: "3 to 14 Days",
    featuredPackageSlug: "sri-lanka-honeymoon-luxury-beach-escape"
  },
  {
    id: "exp-shopping",
    slug: "shopping-sprees",
    title: "Shopping Sprees",
    tagline: "Ceylon Sapphires, Handloom Batiks, Spices & World-Renowned Tea",
    shortDesc: "Whether it is precious Ceylon sapphires and gemstones, vibrant handmade Batiks, silk saris, intricate wood carvings, Buddha statues, organic spice collections, or world-famous Ceylon single-estate tea, Sri Lanka never disappoints.",
    fullDesc: "Whether it is certified royal blue sapphires in Ratnapura, vibrant hand-dyed batik silks in Galle, fragrant cinnamon and cardamom in colonial spice gardens, or single-origin highland tea from Nuwara Eliya estates, Sri Lanka offers an extraordinary shopping treasure trove with bespoke tailor assistance.",
    image: "/images/experiences/colombo-Shopping.jpg",
    iconName: "Compass",
    bestSeason: "Year-Round",
    topHighlights: [
      "Certified Ceylon sapphire and precious gemstone shopping",
      "Exclusive high-fashion Colombo boutiques and barefoot handicrafts",
      "Fresh cinnamon and spice warehouse tours in Pettah & Matale",
      "Single-estate vintage tea tasting and estate gift packaging"
    ],
    recommendedDuration: "1 to 3 Days",
    featuredPackageSlug: "grand-ceylon-heritage-wildlife-luxury"
  },
  {
    id: "exp-culinary",
    slug: "delish-culinary",
    title: "Delish Culinary",
    tagline: "Exotic Coconut Curries, Fiery Sambols & Fresh Coastal Seafood Feasts",
    shortDesc: "The exotic aromas of Sri Lankan cuisine are distinctively delectable. Fragrant rice and curries, fiery pol sambol, hoppers, fresh coastal seafood, coconut milk infusions, and colonial influences create a feast for food lovers.",
    fullDesc: "The exotic aromas of Sri Lankan cuisine are distinctively delectable. From crispy bowl-shaped egg hoppers (appa) and coconut roti to fiery pol sambol, Jaffna crab curry, and fresh lagoon prawns grilled right on the beach, every meal is an unforgettable voyage into centuries-old spice alchemy.",
    image: "/images/experiences/Sri-Lankan-Food.jpg",
    iconName: "Utensils",
    bestSeason: "Year-Round",
    topHighlights: [
      "Chef-led morning spice market tours and hands-on village cooking classes",
      "Fresh jumbo lagoon crab feasts in Colombo and Galle Fort",
      "Authentic street food safaris in Colombo's Galle Face Green",
      "Fine-dining contemporary Sri Lankan fusion and Ceylon tea pairings"
    ],
    recommendedDuration: "2 to 5 Days",
    featuredPackageSlug: "grand-ceylon-heritage-wildlife-luxury"
  },
  {
    id: "exp-crafts",
    slug: "traditional-arts-and-crafts",
    title: "Traditional Arts and Crafts",
    tagline: "Centuries of Heritage, Mask Carving, Lacquer & Handloom Weaving",
    shortDesc: "The story of Sri Lanka’s arts and crafts comes from within one of the oldest civilizations in the world. Discover intricate devil mask carving in Ambalangoda, traditional handloom weaving, lacquer work, and brass metal casting.",
    fullDesc: "The story of Sri Lanka’s arts and crafts stems from one of the oldest living civilizations on Earth. Journey into master artisan studios in Ambalangoda to witness hand-carved balsa demon masks, watch generational handloom weavers spin vibrant patterns, and explore exquisite brasswork and pottery villages.",
    image: "/images/experiences/Sri-Lankan-Craft.jpg",
    iconName: "Palette",
    bestSeason: "Year-Round",
    topHighlights: [
      "Live traditional Raksha mask carving workshops in Ambalangoda",
      "Generational brass and lacquer craft demonstrations in Kandy",
      "Heritage handloom textile spinning in Dumbara valley",
      "Intricate wood carving galleries in Embekke and Pilimathalawa"
    ],
    recommendedDuration: "2 to 4 Days",
    featuredPackageSlug: "grand-ceylon-heritage-wildlife-luxury"
  },
  {
    id: "exp-sports",
    slug: "sporting-breaks",
    title: "Sporting Breaks",
    tagline: "World-Class Surfing, Kitesurfing, Championship Golf & Scuba Diving",
    shortDesc: "Sri Lanka’s varied landscape offering sun, sea, mountains, rivers, waterfalls, jungles, and rough terrains set the scene for sporting activities: world-class surfing at Arugam Bay, kitesurfing in Kalpitiya, golfing, and scuba diving.",
    fullDesc: "Sri Lanka’s varied topography provides a dream playground for athletic enthusiasts. Catch legendary point breaks at Arugam Bay and Weligama, harness the consistent gale winds for kitesurfing in Kalpitiya lagoon, tee off on historic 18-hole colonial championship golf courses in Nuwara Eliya, or dive into vibrant coral shipwrecks.",
    image: "/images/experiences/Water-Sports-Adventure-Tour-in-Sri-Lanka.jpg",
    iconName: "Waves",
    bestSeason: "South/West Coast: Nov - Apr | East Coast (Arugam Bay): May - Sep",
    topHighlights: [
      "Surfing premier world-class point breaks in Arugam Bay & Weligama",
      "Kitesurfing in shallow trade-wind lagoons of Kalpitiya",
      "18-hole mountain championship golf at Nuwara Eliya Golf Club",
      "Scuba diving ancient coral reefs and historic naval shipwrecks"
    ],
    recommendedDuration: "4 to 7 Days",
    featuredPackageSlug: "wild-sri-lanka-safari-big-four-expedition"
  },
  {
    id: "exp-culture",
    slug: "colourful-culture",
    title: "Colourful Culture",
    tagline: "2,500-Year Sacred Roots, UNESCO World Heritage & Dazzling Peraheras",
    shortDesc: "Sri Lankan culture steeped in Buddhism has its religious roots go back to the 3rd Century BC. From the ancient UNESCO sacred kingdom of Anuradhapura to Kandy's Temple of the Tooth and dazzling Esala Perahera festivals.",
    fullDesc: "Immerse yourself in a civilization where spirituality infuses daily life. Witness the reverence around the 2,300-year-old sacred Jaya Sri Maha Bodhi tree in Anuradhapura, join white-clad pilgrims carrying lotus blossoms to Kandy’s Temple of the Tooth, and marvel at the spectacle of the annual Esala Perahera with flame dancers and caparisoned elephants.",
    image: "/images/experiences/Anuradhapura_main_banner.jpg",
    iconName: "Landmark",
    bestSeason: "November to August (Esala Perahera in July/August)",
    topHighlights: [
      "Pilgrimage walks among ancient colossal stupas in Anuradhapura",
      "Evening drum puja blessing at Kandy's Temple of the Tooth",
      "Intricate 2,000-year-old painted ceiling murals at Dambulla Cave Temple",
      "Vibrant street pageants and fire-dancing at the annual Esala Perahera"
    ],
    recommendedDuration: "3 to 6 Days",
    featuredPackageSlug: "grand-ceylon-heritage-wildlife-luxury"
  },
  {
    id: "exp-adventures",
    slug: "exhilarating-adventures",
    title: "Exhilarating Adventures",
    tagline: "White-Water Rapids, Mist-Veiled Summits & Untamed Wilderness",
    shortDesc: "Sri Lanka’s landscape enriched with jungles, mountains, giant monolith rocks, balmy ocean waters, rainforests, and misty hills is a paradise for white water rafting in Kitulgala, rock climbing, wildlife safaris, and rainforest treks.",
    fullDesc: "For thrill-seekers, the island is packed with adrenaline. Plunge through roaring Grade 3 and 4 rapids on the Kelani River in Kitulgala, scale the sheer granite walls of Pidurangala and Knuckles Mountain Range, zip across lush jungle canopies in Ella, and embark on raw 4x4 off-road safaris tracking leopards in wild Yala.",
    image: "/images/experiences/Adventure-Tours-in-Sri-Lanka.jpg",
    iconName: "Compass",
    bestSeason: "Year-Round",
    topHighlights: [
      "White-water rafting through the roaring rapids of Kitulgala",
      "Summit hikes in the UNESCO Knuckles Mountain Range & Horton Plains",
      "Flying Ravana mega zip-lining over green mountain canyons in Ella",
      "Private off-road 4x4 leopard tracking safaris across Yala and Wilpattu"
    ],
    recommendedDuration: "4 to 8 Days",
    featuredPackageSlug: "wild-sri-lanka-safari-big-four-expedition"
  }
];
