export interface GuideArticle {
  id: string;
  slug: string;
  title: string;
  category: "Travel Planning" | "Experiences" | "Destinations";
  excerpt: string;
  image: string;
  readTime: string;
}

export const GUIDE_ARTICLES: GuideArticle[] = [
  {
    id: "guide-wedding",
    slug: "destination-wedding-sri-lanka-guide",
    title: "Planning a Destination Wedding in Sri Lanka: A Guide for Couples",
    category: "Travel Planning",
    excerpt: "A ceremony beside the ocean, a gathering overlooking the tea hills, or an intimate celebration in a tropical garden: a destination wedding in Sri Lanka can become part of a journey you share with the people closest to you. Start with the celebration you want, your approximate guest numbers and the time you would like.",
    image: "/images/guide/wedding-couple-beach-sri-lanka-1.jpg",
    readTime: "6 min read"
  },
  {
    id: "guide-costs",
    slug: "how-much-is-a-holiday-to-sri-lanka",
    title: "How Much Is a Holiday to Sri Lanka? A Practical Cost Guide",
    category: "Travel Planning",
    excerpt: "Planning your Sri Lanka holiday? Explore indicative budgets for 7, 10 and 14 days, understand the main travel costs and discover how to shape a private journey around your priorities.",
    image: "/images/guide/sri-lanka-holiday-sigiriya-view-1024x576.webp",
    readTime: "7 min read"
  },
  {
    id: "guide-chauffeur",
    slug: "chauffeur-guide-or-self-drive-sri-lanka",
    title: "Chauffeur Guide or Self-Drive in Sri Lanka?",
    category: "Travel Planning",
    excerpt: "Chauffeur guide or self-drive in Sri Lanka? Compare the flexibility, costs and responsibilities of each option to choose a travel style that suits your route and preferred pace.",
    image: "/images/guide/chauffeur-welcoming-travellers-1024x576.jpg",
    readTime: "5 min read"
  },
  {
    id: "guide-honeymoon",
    slug: "sri-lanka-honeymoon-destinations",
    title: "Sri Lanka Honeymoon Destinations: Where to Go as a Couple",
    category: "Experiences",
    excerpt: "Explore Sri Lanka honeymoon destinations, from coastal stays to hill country escapes and cultural sights. Find inspiration for a private journey shaped around your travel dates, interests and pace.",
    image: "/images/guide/honeymoon-couple-sri-lanka-1024x576.jpg",
    readTime: "6 min read"
  },
  {
    id: "guide-coasts",
    slug: "south-or-east-coast-sri-lanka",
    title: "South or East Coast Sri Lanka: Which to Choose?",
    category: "Travel Planning",
    excerpt: "South coast or east coast? Compare Sri Lanka’s beach seasons, coastal destinations and route ideas to find the right setting for your travel dates, interests and pace.",
    image: "/images/guide/dondra-lighthouse-sri-lanka-1024x683.jpg",
    readTime: "5 min read"
  },
  {
    id: "guide-ayurveda",
    slug: "ayurveda-wellness-sri-lanka-guide",
    title: "Ayurveda & Wellness in Sri Lanka: A Guide to Planning Your Stay",
    category: "Experiences",
    excerpt: "Make time for a slower Sri Lanka journey with wellness stays, yoga and Ayurvedic experiences. Discover what to consider, what to ask and how to choose arrangements that suit you.",
    image: "/images/guide/ayurvedic-treatment-sri-lanka-1024x768.jpg",
    readTime: "6 min read"
  },
  {
    id: "guide-food",
    slug: "sri-lankan-food-local-life",
    title: "Sri Lankan Food & Local Life: Dishes, Markets and Cooking Experiences",
    category: "Experiences",
    excerpt: "Discover Sri Lankan food through rice and curry, hoppers, local markets and cooking experiences. Find practical ideas for adding flavour and personal encounters to your private journey.",
    image: "/images/guide/traditional-sri-lankan-dishes-1024x768.jpg",
    readTime: "5 min read"
  },
  {
    id: "guide-colombo",
    slug: "colombo-west-coast-guide",
    title: "Colombo & West Coast: A Guide to City Stays and Coastal Stopovers",
    category: "Destinations",
    excerpt: "Discover Colombo and Negombo, from city sightseeing and local food to coastal downtime. Find practical ideas for planning the first or final days of your Sri Lanka journey.",
    image: "/images/guide/colombo-lotus-tower-aerial-view-1024x768.jpg",
    readTime: "6 min read"
  },
  {
    id: "guide-south-coast",
    slug: "sri-lankas-southern-coast-galle-mirissa",
    title: "Sri Lanka’s Southern Coast: Galle, Bentota, Weligama and Mirissa",
    category: "Destinations",
    excerpt: "Explore Sri Lanka’s southern coastal route, from Bentota to Galle, Weligama and Mirissa. Discover historic streets, seaside stays and practical ideas for a relaxed private journey.",
    image: "/images/guide/galle-fort-southern-coast-1024x768.jpg",
    readTime: "7 min read"
  },
  {
    id: "guide-wild-south",
    slug: "sri-lankas-wild-south-yala-udawalawe-safaris",
    title: "Sri Lanka’s Wild South: A Guide to Yala and Udawalawe Safaris",
    category: "Destinations",
    excerpt: "Discover Yala and Udawalawe, two of Sri Lanka’s best-known safari destinations. Explore their differences, what to expect and how to include wildlife experiences in your private journey.",
    image: "/images/guide/leopard-wild-safari-yala-national-park-1024x768.jpg",
    readTime: "8 min read"
  },
  {
    id: "guide-hill-country",
    slug: "sri-lankas-hill-country-nuwara-eliya-ella",
    title: "Sri Lanka’s Hill Country: A Guide to Nuwara Eliya, Ella and Haputale",
    category: "Destinations",
    excerpt: "Explore Sri Lanka’s hill country through Nuwara Eliya, Ella and Haputale. Discover tea landscapes, scenic train journeys and walking experiences, with practical ideas for planning your private trip.",
    image: "/images/guide/nine-arch-bridge-train-journey-ella-1024x768.jpg",
    readTime: "7 min read"
  },
  {
    id: "guide-kandy",
    slug: "kandy-highlands-sacred-heritage-guide",
    title: "Kandy & Highlands: Sacred Heritage, Gardens and Scenic Surroundings",
    category: "Destinations",
    excerpt: "Discover Kandy’s sacred heritage, botanical gardens and scenic surroundings. Find ideas for your stay and practical tips for including Kandy in a private Sri Lanka journey.",
    image: "/images/guide/temple-of-the-tooth-kandy-1024x768.jpg",
    readTime: "6 min read"
  },
  {
    id: "guide-cultural-triangle",
    slug: "sri-lankas-cultural-triangle-guide",
    title: "Sri Lanka’s Cultural Triangle: A Guide to Ancient Cities and Sacred Sites",
    category: "Destinations",
    excerpt: "Explore Sri Lanka’s Cultural Triangle, from Sigiriya and Dambulla to the ancient cities of Anuradhapura and Polonnaruwa. Discover the highlights and practical tips for planning your private journey.",
    image: "/images/guide/sigiriya-rock-fortress-sri-lanka.jpg.jpg",
    readTime: "8 min read"
  },
  {
    id: "guide-essentials",
    slug: "sri-lanka-travel-essentials",
    title: "Sri Lanka Travel Essentials: What to Know Before You Go",
    category: "Travel Planning",
    excerpt: "Practical Sri Lanka travel tips covering what to pack, local customs, transport and planning your first journey.",
    image: "/images/guide/temple-of-the-tooth-kandy-1024x768 (1).jpg",
    readTime: "5 min read"
  },
  {
    id: "guide-duration",
    slug: "how-many-days-do-you-need-in-sri-lanka",
    title: "How Many Days Do You Need in Sri Lanka?",
    category: "Travel Planning",
    excerpt: "Compare 7, 10 and 14 days in Sri Lanka to choose a journey that suits your interests and pace.",
    image: "/images/guide/hill-country-escape.jpg",
    readTime: "6 min read"
  }
];
