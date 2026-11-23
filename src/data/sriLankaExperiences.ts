export type LabelPosition = "left" | "right" | "top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right";

export interface DestinationPin {
  id: string;
  name: string;
  lat: number;        // Verified latitude (WGS84)
  lng: number;        // Verified longitude (WGS84)
  province: string;   // Sri Lankan Administrative Province
  district: string;   // Sri Lankan Administrative District
  top: number;        // Calibrated percentage from top (0-100) on Sri-Lanka-location-map-680x1100-1.jpg
  left: number;       // Calibrated percentage from left (0-100) on Sri-Lanka-location-map-680x1100-1.jpg
  labelPosition: LabelPosition; // Dynamic orientation for collision avoidance
  labelSide?: "left" | "right"; // Backward compatibility fallback
  description: string;
  link: string;
  highlightText?: string;
  representativePointNote?: string;
}

export interface ExperienceCategory {
  id: string;
  title: string;
  tagline: string;
  image: string;
  alt: string;
  side: "left" | "right";
  destinations: DestinationPin[];
}

/**
 * Verified Geographic Coordinates Registry (OpenStreetMap / GeoNames datum)
 * Used as GIS reference ground truth for calibration and map audit.
 */
export const VERIFIED_GEOGRAPHIC_REGISTRY = {
  jaffna: { name: "Jaffna", lat: 9.6685, lng: 80.0074, province: "Northern", district: "Jaffna" },
  mannar: { name: "Mannar", lat: 8.9810, lng: 79.9044, province: "Northern", district: "Mannar" },
  anuradhapura: { name: "Anuradhapura", lat: 8.3114, lng: 80.4037, province: "North Central", district: "Anuradhapura" },
  wilpattu: { name: "Wilpattu", lat: 8.4500, lng: 80.0000, province: "North Western / North Central", district: "Puttalam/Anuradhapura" },
  kalpitiya: { name: "Kalpitiya", lat: 8.2275, lng: 79.7610, province: "North Western", district: "Puttalam" },
  sigiriya: { name: "Sigiriya", lat: 7.9570, lng: 80.7603, province: "Central", district: "Matale" },
  minneriya: { name: "Minneriya", lat: 8.0333, lng: 80.9000, province: "North Central", district: "Polonnaruwa" },
  polonnaruwa: { name: "Polonnaruwa", lat: 7.9403, lng: 81.0188, province: "North Central", district: "Polonnaruwa" },
  riverston: { name: "Riverston", lat: 7.5250, lng: 80.7333, province: "Central", district: "Matale" },
  maduruOya: { name: "Maduru Oya", lat: 7.6500, lng: 81.2000, province: "Eastern / Uva", district: "Polonnaruwa/Ampara" },
  mahiyanganaya: { name: "Mahiyanganaya", lat: 7.3167, lng: 80.9828, province: "Uva", district: "Badulla" },
  kandy: { name: "Kandy", lat: 7.2906, lng: 80.6337, province: "Central", district: "Kandy" },
  negombo: { name: "Negombo", lat: 7.2083, lng: 79.8358, province: "Western", district: "Gampaha" },
  colombo: { name: "Colombo", lat: 6.9355, lng: 79.8487, province: "Western", district: "Colombo" },
  pekoeTrail: { name: "Pekoe Trail", lat: 6.9497, lng: 80.7891, province: "Central", district: "Nuwara Eliya" },
  hortonPlains: { name: "Horton Plains", lat: 6.8028, lng: 80.8044, province: "Central", district: "Nuwara Eliya" },
  galOya: { name: "Gal Oya", lat: 7.2100, lng: 81.5000, province: "Eastern / Uva", district: "Ampara" },
  arugamBay: { name: "Arugam Bay", lat: 6.8425, lng: 81.8315, province: "Eastern", district: "Ampara" },
  bentota: { name: "Bentota", lat: 6.4260, lng: 79.9958, province: "Southern", district: "Galle" },
  sinharaja: { name: "Sinharaja", lat: 6.4167, lng: 80.4167, province: "Sabaragamuwa / Southern", district: "Ratnapura/Galle" },
  yala: { name: "Yala", lat: 6.3700, lng: 81.5200, province: "Southern / Uva", district: "Hambantota" },
  galle: { name: "Galle", lat: 6.0461, lng: 80.2103, province: "Southern", district: "Galle" },
  unawatuna: { name: "Unawatuna", lat: 6.0100, lng: 80.2500, province: "Southern", district: "Galle" },
  weligama: { name: "Weligama", lat: 5.9750, lng: 80.4297, province: "Southern", district: "Matara" },
  mirissa: { name: "Mirissa", lat: 5.9466, lng: 80.4583, province: "Southern", district: "Matara" },
  polhena: { name: "Polhena", lat: 5.9380, lng: 80.5280, province: "Southern", district: "Matara" }
} as const;

/**
 * Calibrated map bounding box for Sri-Lanka-location-map-680x1100-1.jpg
 * - Image dimensions: 680 x 1100 px (Aspect ratio: 0.61818)
 * - Landmass X bounds: 106px (15.6%) to 604px (88.8%)
 * - Landmass Y bounds: 76px (6.9%) to 979px (89.0%)
 */
export const MAP_CALIBRATION_BOUNDS = {
  imageWidth: 680,
  imageHeight: 1100,
  landMinXPercent: 15.6,
  landMaxXPercent: 88.8,
  landMinYPercent: 6.9,
  landMaxYPercent: 89.0,
  geoNorthLat: 9.835,  // Point Pedro
  geoSouthLat: 5.924,  // Dondra Head
  geoWestLng: 79.69,   // Western coastal tip
  geoEastLng: 81.88    // Sangamankanda Point
};

export const SRI_LANKA_EXPERIENCE_CATEGORIES: ExperienceCategory[] = [
  // LEFT SIDE CATEGORIES
  {
    id: "popular-beaches",
    title: "Popular Beaches",
    tagline: "Golden Sands & Surf Havens",
    image: "/images/discover-srilanka/beaches.jpg",
    alt: "Pristine golden beach and turquoise ocean waves in Sri Lanka",
    side: "left",
    destinations: [
      {
        id: "kalpitiya",
        name: "Kalpitiya",
        lat: 8.2275,
        lng: 79.7610,
        province: "North Western",
        district: "Puttalam",
        top: 41.5,
        left: 23.5,
        labelPosition: "left",
        labelSide: "left",
        description: "Premier South Asian kitesurfing lagoon with wild spinner dolphin pods and pristine sand dunes.",
        link: "/experiences",
        highlightText: "Kitesurfing & Wild Dolphins"
      },
      {
        id: "bentota",
        name: "Bentota",
        lat: 6.4260,
        lng: 79.9958,
        province: "Southern",
        district: "Galle",
        top: 75.5,
        left: 26.5,
        labelPosition: "left",
        labelSide: "left",
        description: "The gold standard of luxury beach resorts, river boat safaris, and adrenaline water sports.",
        link: "/destinations/bentota",
        highlightText: "Luxury Watersports Haven"
      },
      {
        id: "unawatuna",
        name: "Unawatuna",
        lat: 6.0100,
        lng: 80.2500,
        province: "Southern",
        district: "Galle",
        top: 84.5,
        left: 33.0,
        labelPosition: "left",
        labelSide: "left",
        description: "Protected turquoise crescent bay famous for calm swimming, snorkeling & Japanese Peace Pagoda.",
        link: "/destinations/galle",
        highlightText: "Crescent Turquoise Bay"
      },
      {
        id: "weligama",
        name: "Weligama",
        lat: 5.9750,
        lng: 80.4297,
        province: "Southern",
        district: "Matara",
        top: 86.8,
        left: 39.5,
        labelPosition: "bottom", // Positioned below with leader stem to avoid collision with Unawatuna and Mirissa
        labelSide: "left",
        description: "Legendary beginner-friendly surf beach, Taprobane Island & traditional stilt fishermen.",
        link: "/destinations/mirissa",
        highlightText: "Surf Capital & Stilt Fishers"
      },
      {
        id: "mirissa",
        name: "Mirissa",
        lat: 5.9466,
        lng: 80.4583,
        province: "Southern",
        district: "Matara",
        top: 87.2,
        left: 45.0,
        labelPosition: "right",
        labelSide: "right",
        description: "World-famous blue whale watching haven, Coconut Tree Hill & vibrant sunset beach bars.",
        link: "/destinations/mirissa",
        highlightText: "Whales & Sunset Bays"
      },
      {
        id: "arugam-bay",
        name: "Arugam Bay",
        lat: 6.8425,
        lng: 81.8315,
        province: "Eastern",
        district: "Ampara",
        top: 70.5,
        left: 84.5,
        labelPosition: "right",
        labelSide: "right",
        description: "Internationally renowned right-hand surf point, bohemian cafes & nearby Kumana wildlife safaris.",
        link: "/experiences",
        highlightText: "World-Class Ocean Breaks"
      }
    ]
  },
  {
    id: "wildlife-nature",
    title: "Wildlife & Nature",
    tagline: "Leopards, Elephants & Rainforests",
    image: "/images/discover-srilanka/wildlife.jpg",
    alt: "Wild Asian Elephant roaming Sri Lankan nature sanctuary",
    side: "left",
    destinations: [
      {
        id: "wilpattu",
        name: "Wilpattu",
        lat: 8.4500,
        lng: 80.0000,
        province: "North Western / North Central",
        district: "Puttalam/Anuradhapura",
        top: 38.0,
        left: 32.0,
        labelPosition: "left",
        labelSide: "left",
        description: "Sri Lanka's largest national park adorned with natural rainwater sand-rimmed lakes (villus).",
        link: "/packages/wild-sri-lanka-safari-big-four-expedition",
        highlightText: "Ancient Wilderness of Villus",
        representativePointNote: "Central Villu basin coordinates"
      },
      {
        id: "minneriya",
        name: "Minneriya",
        lat: 8.0333,
        lng: 80.9000,
        province: "North Central",
        district: "Polonnaruwa",
        top: 45.0,
        left: 54.0,
        labelPosition: "right",
        labelSide: "right",
        description: "Site of 'The Gathering' — up to 300 Asian elephants congregating across ancient reservoir shores.",
        link: "/experiences",
        highlightText: "The Great Elephant Gathering"
      },
      {
        id: "gal-oya",
        name: "Gal Oya",
        lat: 7.2100,
        lng: 81.5000,
        province: "Eastern / Uva",
        district: "Ampara",
        top: 62.5,
        left: 71.0,
        labelPosition: "right",
        labelSide: "right",
        description: "Unique boat safaris to spot swimming wild elephants crossing scenic inland lake islands.",
        link: "/experiences",
        highlightText: "Swimming Wild Elephants Safari",
        representativePointNote: "Senanayake Samudraya reservoir safari base"
      },
      {
        id: "horton-plains",
        name: "Horton Plains",
        lat: 6.8028,
        lng: 80.8044,
        province: "Central",
        district: "Nuwara Eliya",
        top: 67.5,
        left: 53.0,
        labelPosition: "right",
        labelSide: "right",
        description: "Highland cloud forest plateau ending abruptly at World's End sheer 1,000m precipice.",
        link: "/destinations/nuwara-eliya",
        highlightText: "World's End Sheer Precipice"
      },
      {
        id: "sinharaja",
        name: "Sinharaja",
        lat: 6.4167,
        lng: 80.4167,
        province: "Sabaragamuwa / Southern",
        district: "Ratnapura/Galle",
        top: 77.0,
        left: 39.0,
        labelPosition: "left",
        labelSide: "left",
        description: "UNESCO World Heritage primary tropical rainforest teeming with endemic birds, reptiles & canopy flora.",
        link: "/packages/wild-sri-lanka-safari-big-four-expedition",
        highlightText: "UNESCO Primary Rainforest",
        representativePointNote: "Kudawa research and trekking center"
      },
      {
        id: "yala",
        name: "Yala",
        lat: 6.3700,
        lng: 81.5200,
        province: "Southern / Uva",
        district: "Hambantota",
        top: 77.7,
        left: 70.0,
        labelPosition: "right",
        labelSide: "right",
        description: "Home to the world's densest wild leopard population, sloth bears & majestic Asian elephants.",
        link: "/destinations/yala",
        highlightText: "Realm of the Sri Lankan Leopard",
        representativePointNote: "Palatupana Block 1 main entrance"
      }
    ]
  },
  {
    id: "adventure",
    title: "Adventure",
    tagline: "Highland Treks & Wild Waters",
    image: "/images/discover-srilanka/adv.jpg",
    alt: "Mountain biker adventuring through scenic Sri Lankan terrain",
    side: "left",
    destinations: [
      {
        id: "jaffna-adv",
        name: "Jaffna",
        lat: 9.6685,
        lng: 80.0074,
        province: "Northern",
        district: "Jaffna",
        top: 14.5,
        left: 41.0,
        labelPosition: "right",
        labelSide: "right",
        description: "Historic northern expeditions, Palk Strait cycling, and coral island voyages.",
        link: "/contact?destination=jaffna",
        highlightText: "Northern Frontier Expeditions"
      },
      {
        id: "negombo-adv",
        name: "Negombo",
        lat: 7.2083,
        lng: 79.8358,
        province: "Western",
        district: "Gampaha",
        top: 60.5,
        left: 23.5,
        labelPosition: "left",
        labelSide: "left",
        description: "Catamaran sailing, Dutch canal kayaking, and coastal cycling adventures.",
        link: "/experiences",
        highlightText: "Coastal Lagoon Expeditions"
      },
      {
        id: "mahiyanganaya",
        name: "Mahiyanganaya",
        lat: 7.3167,
        lng: 80.9828,
        province: "Uva",
        district: "Badulla",
        top: 59.0,
        left: 58.0,
        labelPosition: "right",
        labelSide: "right",
        description: "Indigenous Vedda homeland walks, ancient canal kayaking, and river valley treks.",
        link: "/experiences",
        highlightText: "Indigenous Heritage Treks",
        representativePointNote: "Mahaweli river valley & Dambana Vedda ancestral territory east of Kandy"
      },
      {
        id: "pekoe-trail",
        name: "Pekoe Trail",
        lat: 6.9497,
        lng: 80.7891,
        province: "Central",
        district: "Nuwara Eliya",
        top: 65.0,
        left: 50.0,
        labelPosition: "right",
        labelSide: "right",
        description: "World-class 300km hiking trail through historic Ceylon tea valleys and cloud forests.",
        link: "/experiences",
        highlightText: "Legendary Tea Trail",
        representativePointNote: "Central Highland tea estate ridge midpoint (Hatton / Nuwara Eliya)"
      },
      {
        id: "colombo-adv",
        name: "Colombo",
        lat: 6.9355,
        lng: 79.8487,
        province: "Western",
        district: "Colombo",
        top: 66.8,
        left: 24.0,
        labelPosition: "left",
        labelSide: "left",
        description: "Urban cycling tours, sunset coastal sailing, and heritage walks.",
        link: "/contact?destination=colombo",
        highlightText: "Urban Coastal Journeys"
      },
      {
        id: "galle-adv",
        name: "Galle",
        lat: 6.0461,
        lng: 80.2103,
        province: "Southern",
        district: "Galle",
        top: 83.5,
        left: 31.0,
        labelPosition: "left",
        labelSide: "left",
        description: "Surfing, ocean catamaran cruises, and cycling through southern paddy trails.",
        link: "/destinations/galle",
        highlightText: "Ocean & Fort Cycling"
      }
    ]
  },

  // RIGHT SIDE CATEGORIES
  {
    id: "history-culture",
    title: "History & Culture",
    tagline: "Ancient Citadels & Sacred Temples",
    image: "/images/discover-srilanka/culture.jpg",
    alt: "Ancient rock-carved Samadhi Buddha in historic Sri Lanka",
    side: "right",
    destinations: [
      {
        id: "anuradhapura",
        name: "Anuradhapura",
        lat: 8.3114,
        lng: 80.4037,
        province: "North Central",
        district: "Anuradhapura",
        top: 39.5,
        left: 43.0,
        labelPosition: "right",
        labelSide: "right",
        description: "Sri Lanka's 2,500-year-old sacred capital, home to soaring white stupas & the sacred Jaya Sri Maha Bodhi tree.",
        link: "/destinations/anuradhapura",
        highlightText: "2,500-Year Sacred Ancient Capital"
      },
      {
        id: "sigiriya",
        name: "Sigiriya",
        lat: 7.9570,
        lng: 80.7603,
        province: "Central",
        district: "Matale",
        top: 47.3,
        left: 48.0,
        labelPosition: "left",
        labelSide: "left",
        description: "5th-century UNESCO palace fortress atop a 200m volcanic rock with ancient frescoes & water gardens.",
        link: "/destinations/sigiriya",
        highlightText: "5th Century Palace in the Sky"
      },
      {
        id: "polonnaruwa",
        name: "Polonnaruwa",
        lat: 7.9403,
        lng: 81.0188,
        province: "North Central",
        district: "Polonnaruwa",
        top: 47.0,
        left: 58.0,
        labelPosition: "right",
        labelSide: "right",
        description: "Medieval royal city featuring monumental stone palaces, lotus baths, and colossal Gal Vihara rock statues.",
        link: "/destinations/polonnaruwa",
        highlightText: "Medieval Citadel & Stone Sculptures"
      },
      {
        id: "kandy",
        name: "Kandy",
        lat: 7.2906,
        lng: 80.6337,
        province: "Central",
        district: "Kandy",
        top: 59.5,
        left: 48.5,
        labelPosition: "left",
        labelSide: "left",
        description: "Last royal stronghold sheltering the sacred Temple of the Tooth Relic amidst misty hills and serene lake.",
        link: "/destinations/kandy",
        highlightText: "Temple of the Sacred Tooth Relic"
      },
      {
        id: "colombo-culture",
        name: "Colombo",
        lat: 6.9355,
        lng: 79.8487,
        province: "Western",
        district: "Colombo",
        top: 66.8,
        left: 24.0,
        labelPosition: "left",
        labelSide: "left",
        description: "Dynamic capital blending British colonial architecture, Gangaramaya temple & modern coastal skyline.",
        link: "/contact?destination=colombo",
        highlightText: "Colonial Grandeur & Urban Spirit"
      },
      {
        id: "galle",
        name: "Galle",
        lat: 6.0461,
        lng: 80.2103,
        province: "Southern",
        district: "Galle",
        top: 83.5,
        left: 31.0,
        labelPosition: "left",
        labelSide: "left",
        description: "Living 17th-century UNESCO Dutch colonial ocean fortress with cobblestone alleys & boutique heritage villas.",
        link: "/destinations/galle",
        highlightText: "Living Dutch Heritage Fortress"
      }
    ]
  },
  {
    id: "lesser-travelled",
    title: "Lesser Travelled",
    tagline: "Secret Peaks & Untouched Havens",
    image: "/images/discover-srilanka/lesser.jpg",
    alt: "Hiker taking in peaceful panoramic views over untouched Sri Lankan valleys",
    side: "right",
    destinations: [
      {
        id: "jaffna",
        name: "Jaffna",
        lat: 9.6685,
        lng: 80.0074,
        province: "Northern",
        district: "Jaffna",
        top: 14.5,
        left: 41.0,
        labelPosition: "right",
        labelSide: "right",
        description: "Vibrant northern peninsula with historic Nallur Kandaswamy Kovil, Dutch Fort & distinct northern culture.",
        link: "/contact?destination=jaffna",
        highlightText: "Northern Cultural Frontier"
      },
      {
        id: "mannar",
        name: "Mannar",
        lat: 8.9810,
        lng: 79.9044,
        province: "Northern",
        district: "Mannar",
        top: 30.5,
        left: 27.0,
        labelPosition: "left",
        labelSide: "left",
        description: "Historic island bridged to mainland, ancient baobab trees, flamingo sanctuaries & Adam's Bridge dunes.",
        link: "/experiences",
        highlightText: "Baobabs & Adam's Bridge"
      },
      {
        id: "riverston",
        name: "Riverston",
        lat: 7.5250,
        lng: 80.7333,
        province: "Central",
        district: "Matale",
        top: 53.5,
        left: 51.0,
        labelPosition: "left",
        labelSide: "left",
        description: "The 'Little World's End' offering windswept mountain passes, serene villages & untouched waterfalls.",
        link: "/experiences",
        highlightText: "Misty Cloud Mountain Pass",
        representativePointNote: "Knuckles Conservation Forest Riverston ridge pass"
      },
      {
        id: "maduru-oya",
        name: "Maduru Oya",
        lat: 7.6500,
        lng: 81.2000,
        province: "Eastern / Uva",
        district: "Polonnaruwa/Ampara",
        top: 51.5,
        left: 65.0,
        labelPosition: "right",
        labelSide: "right",
        description: "Remote sanctuary surrounding ancient reservoirs, home to indigenous Vedda heritage and untamed wildlife.",
        link: "/packages/wild-sri-lanka-safari-big-four-expedition",
        highlightText: "Ancient Reservoirs & Vedda Lands",
        representativePointNote: "Maduru Oya reservoir park headquarters"
      },
      {
        id: "polhena",
        name: "Polhena",
        lat: 5.9380,
        lng: 80.5280,
        province: "Southern",
        district: "Matara",
        top: 87.6,
        left: 48.0,
        labelPosition: "right",
        labelSide: "right",
        description: "Secluded southern reef cove where travelers can swim and snorkel calmly alongside wild green sea turtles.",
        link: "/destinations/mirissa",
        highlightText: "Secret Sea Turtle Sanctuary"
      }
    ]
  },
  {
    id: "gastronomy",
    title: "Gastronomy",
    tagline: "Spices, Street Food & Coastal Feasts",
    image: "/images/discover-srilanka/gastro.jpg",
    alt: "Traditional Sri Lankan culinary preparation with aromatic spices",
    side: "right",
    destinations: [
      {
        id: "jaffna-gastro",
        name: "Jaffna",
        lat: 9.6685,
        lng: 80.0074,
        province: "Northern",
        district: "Jaffna",
        top: 14.5,
        left: 41.0,
        labelPosition: "right",
        labelSide: "right",
        description: "Famous roasted curry powder, fiery Jaffna crab curry, fresh palmyra delicacies & odiyal kool broth.",
        link: "/contact?destination=jaffna-food",
        highlightText: "Fiery Northern Crab Feast"
      },
      {
        id: "negombo-gastro",
        name: "Negombo",
        lat: 7.2083,
        lng: 79.8358,
        province: "Western",
        district: "Gampaha",
        top: 60.5,
        left: 23.5,
        labelPosition: "left",
        labelSide: "left",
        description: "Vibrant dawn 'Lellama' seafood auction, giant lagoon prawns, and coconut-infused coastal curries.",
        link: "/contact?destination=negombo-food",
        highlightText: "Dawn Fish Auction & Lagoon Prawns"
      },
      {
        id: "colombo-gastro",
        name: "Colombo",
        lat: 6.9355,
        lng: 79.8487,
        province: "Western",
        district: "Colombo",
        top: 66.8,
        left: 24.0,
        labelPosition: "left",
        labelSide: "left",
        description: "Legendary Ministry of Crab feasts, vibrant street food at Galle Face Green, and artisan hoppers.",
        link: "/contact?destination=colombo-food",
        highlightText: "Street Bites & Ministry of Crab"
      },
      {
        id: "kandy-gastro",
        name: "Kandy",
        lat: 7.2906,
        lng: 80.6337,
        province: "Central",
        district: "Kandy",
        top: 59.5,
        left: 48.5,
        labelPosition: "right",
        labelSide: "right",
        description: "Matale organic spice garden tours, authentic Ceylon cinnamon tastings & traditional clay pot banquets.",
        link: "/destinations/kandy",
        highlightText: "Aromatic Spice Garden Banquets"
      },
      {
        id: "galle-gastro",
        name: "Galle",
        lat: 6.0461,
        lng: 80.2103,
        province: "Southern",
        district: "Galle",
        top: 83.5,
        left: 31.0,
        labelPosition: "left",
        labelSide: "left",
        description: "Fresh Indian Ocean tuna steaks, artisan gelato on cobblestone streets & colonial culinary fusion.",
        link: "/destinations/galle",
        highlightText: "Fresh Ocean Catch & Fort Bistros"
      }
    ]
  }
];
