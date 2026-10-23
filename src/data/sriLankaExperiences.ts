export interface DestinationPin {
  id: string;
  name: string;
  top: number;   // percentage from top (0-100) exactly matching Sri-Lanka-location-map-680x1100-1.jpg
  left: number;  // percentage from left (0-100) exactly matching Sri-Lanka-location-map-680x1100-1.jpg
  labelSide: "left" | "right";
  description: string;
  link: string;
  highlightText?: string;
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
        top: 41.5,
        left: 26,
        labelSide: "left",
        description: "Premier South Asian kitesurfing lagoon with wild spinner dolphin pods and pristine sand dunes.",
        link: "/experiences",
        highlightText: "Kitesurfing & Wild Dolphins"
      },
      {
        id: "bentota",
        name: "Bentota",
        top: 75.5,
        left: 26,
        labelSide: "left",
        description: "The gold standard of luxury beach resorts, river boat safaris, and adrenaline water sports.",
        link: "/destinations/bentota",
        highlightText: "Luxury Watersports Haven"
      },
      {
        id: "unawatuna",
        name: "Unawatuna",
        top: 84.0,
        left: 34,
        labelSide: "left",
        description: "Protected turquoise crescent bay famous for calm swimming, snorkeling & Japanese Peace Pagoda.",
        link: "/destinations/galle",
        highlightText: "Crescent Turquoise Bay"
      },
      {
        id: "weligama",
        name: "Weligama",
        top: 86.8,
        left: 38,
        labelSide: "left",
        description: "Legendary beginner-friendly surf beach, Taprobane Island & traditional stilt fishermen.",
        link: "/destinations/mirissa",
        highlightText: "Surf Capital & Stilt Fishers"
      },
      {
        id: "mirissa",
        name: "Mirissa",
        top: 85.0,
        left: 51,
        labelSide: "right",
        description: "World-famous blue whale watching haven, Coconut Tree Hill & vibrant sunset beach bars.",
        link: "/destinations/mirissa",
        highlightText: "Whales & Sunset Bays"
      },
      {
        id: "arugam-bay",
        name: "Arugam Bay",
        top: 70.5,
        left: 84.5,
        labelSide: "left",
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
        top: 37.5,
        left: 39,
        labelSide: "right",
        description: "Sri Lanka's largest national park adorned with natural rainwater sand-rimmed lakes (villus).",
        link: "/packages/wild-sri-lanka-safari-big-four-expedition",
        highlightText: "Ancient Wilderness of Villus"
      },
      {
        id: "minneriya",
        name: "Minneriya",
        top: 44.5,
        left: 52,
        labelSide: "right",
        description: "Site of 'The Gathering' — up to 300 Asian elephants congregating across ancient reservoir shores.",
        link: "/experiences",
        highlightText: "The Great Elephant Gathering"
      },
      {
        id: "gal-oya",
        name: "Gal Oya",
        top: 72.2,
        left: 57,
        labelSide: "left",
        description: "Unique boat safaris to spot swimming wild elephants crossing scenic inland lake islands.",
        link: "/experiences",
        highlightText: "Swimming Wild Elephants Safari"
      },
      {
        id: "horton-plains",
        name: "Horton Plains",
        top: 67.0,
        left: 49,
        labelSide: "right",
        description: "Highland cloud forest plateau ending abruptly at World's End sheer 1,000m precipice.",
        link: "/destinations/nuwara-eliya",
        highlightText: "World's End Sheer Precipice"
      },
      {
        id: "sinharaja",
        name: "Sinharaja",
        top: 79.5,
        left: 38,
        labelSide: "left",
        description: "UNESCO World Heritage primary tropical rainforest teeming with endemic birds, reptiles & canopy flora.",
        link: "/packages/wild-sri-lanka-safari-big-four-expedition",
        highlightText: "UNESCO Primary Rainforest"
      },
      {
        id: "yala",
        name: "Yala",
        top: 77.7,
        left: 68,
        labelSide: "right",
        description: "Home to the world's densest wild leopard population, sloth bears & majestic Asian elephants.",
        link: "/destinations/yala",
        highlightText: "Realm of the Sri Lankan Leopard"
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
        top: 15.0,
        left: 38,
        labelSide: "right",
        description: "Historic northern expeditions, Palk Strait cycling, and coral island voyages.",
        link: "/contact?destination=jaffna",
        highlightText: "Northern Frontier Expeditions"
      },
      {
        id: "pekoe-trail",
        name: "Pekoe Trail",
        top: 63.0,
        left: 51,
        labelSide: "right",
        description: "World-class 300km hiking trail through historic Ceylon tea valleys and cloud forests.",
        link: "/experiences",
        highlightText: "Legendary Tea Trail"
      },
      {
        id: "mahiyanganaya",
        name: "Mahiyanganaya",
        top: 62.0,
        left: 42,
        labelSide: "left",
        description: "Indigenous Vedda homeland walks, ancient canal kayaking, and river valley treks.",
        link: "/experiences",
        highlightText: "Indigenous Heritage Treks"
      },
      {
        id: "negombo-adv",
        name: "Negombo",
        top: 60.5,
        left: 23,
        labelSide: "right",
        description: "Catamaran sailing, Dutch canal kayaking, and coastal cycling adventures.",
        link: "/experiences",
        highlightText: "Coastal Lagoon Expeditions"
      },
      {
        id: "colombo-adv",
        name: "Colombo",
        top: 66.8,
        left: 23.5,
        labelSide: "left",
        description: "Urban cycling tours, sunset coastal sailing, and heritage walks.",
        link: "/contact?destination=colombo",
        highlightText: "Urban Coastal Journeys"
      },
      {
        id: "galle-adv",
        name: "Galle",
        top: 82.7,
        left: 30.5,
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
        top: 39.5,
        left: 42,
        labelSide: "right",
        description: "Sri Lanka's 2,500-year-old sacred capital, home to soaring white stupas & the sacred Jaya Sri Maha Bodhi tree.",
        link: "/destinations/anuradhapura",
        highlightText: "2,500-Year Sacred Ancient Capital"
      },
      {
        id: "sigiriya",
        name: "Sigiriya",
        top: 47.3,
        left: 47,
        labelSide: "left",
        description: "5th-century UNESCO palace fortress atop a 200m volcanic rock with ancient frescoes & water gardens.",
        link: "/destinations/sigiriya",
        highlightText: "5th Century Palace in the Sky"
      },
      {
        id: "polonnaruwa",
        name: "Polonnaruwa",
        top: 47.0,
        left: 58,
        labelSide: "right",
        description: "Medieval royal city featuring monumental stone palaces, lotus baths, and colossal Gal Vihara rock statues.",
        link: "/destinations/polonnaruwa",
        highlightText: "Medieval Citadel & Stone Sculptures"
      },
      {
        id: "kandy",
        name: "Kandy",
        top: 59.5,
        left: 48.5,
        labelSide: "left",
        description: "Last royal stronghold sheltering the sacred Temple of the Tooth Relic amidst misty hills and serene lake.",
        link: "/destinations/kandy",
        highlightText: "Temple of the Sacred Tooth Relic"
      },
      {
        id: "colombo-culture",
        name: "Colombo",
        top: 66.8,
        left: 23.5,
        labelSide: "left",
        description: "Dynamic capital blending British colonial architecture, Gangaramaya temple & modern coastal skyline.",
        link: "/contact?destination=colombo",
        highlightText: "Colonial Grandeur & Urban Spirit"
      },
      {
        id: "galle",
        name: "Galle",
        top: 82.7,
        left: 30.5,
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
        top: 15.0,
        left: 38,
        labelSide: "right",
        description: "Vibrant northern peninsula with historic Nallur Kandaswamy Kovil, Dutch Fort & distinct northern culture.",
        link: "/contact?destination=jaffna",
        highlightText: "Northern Cultural Frontier"
      },
      {
        id: "mannar",
        name: "Mannar",
        top: 33.0,
        left: 34,
        labelSide: "right",
        description: "Historic island bridged to mainland, ancient baobab trees, flamingo sanctuaries & Adam's Bridge dunes.",
        link: "/experiences",
        highlightText: "Baobabs & Adam's Bridge"
      },
      {
        id: "riverston",
        name: "Riverston",
        top: 53.0,
        left: 51,
        labelSide: "right",
        description: "The 'Little World's End' offering windswept mountain passes, serene villages & untouched waterfalls.",
        link: "/experiences",
        highlightText: "Misty Cloud Mountain Pass"
      },
      {
        id: "maduru-oya",
        name: "Maduru Oya",
        top: 50.0,
        left: 64,
        labelSide: "right",
        description: "Remote sanctuary surrounding ancient reservoirs, home to indigenous Vedda heritage and untamed wildlife.",
        link: "/packages/wild-sri-lanka-safari-big-four-expedition",
        highlightText: "Ancient Reservoirs & Vedda Lands"
      },
      {
        id: "polhena",
        name: "Polhena",
        top: 86.8,
        left: 42,
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
        top: 15.0,
        left: 38,
        labelSide: "right",
        description: "Famous roasted curry powder, fiery Jaffna crab curry, fresh palmyra delicacies & odiyal kool broth.",
        link: "/contact?destination=jaffna-food",
        highlightText: "Fiery Northern Crab Feast"
      },
      {
        id: "negombo-gastro",
        name: "Negombo",
        top: 60.5,
        left: 23,
        labelSide: "right",
        description: "Vibrant dawn 'Lellama' seafood auction, giant lagoon prawns, and coconut-infused coastal curries.",
        link: "/contact?destination=negombo-food",
        highlightText: "Dawn Fish Auction & Lagoon Prawns"
      },
      {
        id: "colombo-gastro",
        name: "Colombo",
        top: 66.8,
        left: 23.5,
        labelSide: "left",
        description: "Legendary Ministry of Crab feasts, vibrant street food at Galle Face Green, and artisan hoppers.",
        link: "/contact?destination=colombo-food",
        highlightText: "Street Bites & Ministry of Crab"
      },
      {
        id: "kandy-gastro",
        name: "Kandy",
        top: 59.5,
        left: 48.5,
        labelSide: "left",
        description: "Matale organic spice garden tours, authentic Ceylon cinnamon tastings & traditional clay pot banquets.",
        link: "/destinations/kandy",
        highlightText: "Aromatic Spice Garden Banquets"
      },
      {
        id: "galle-gastro",
        name: "Galle",
        top: 82.7,
        left: 30.5,
        labelSide: "left",
        description: "Fresh Indian Ocean tuna steaks, artisan gelato on cobblestone streets & colonial culinary fusion.",
        link: "/destinations/galle",
        highlightText: "Fresh Ocean Catch & Fort Bistros"
      }
    ]
  }
];
