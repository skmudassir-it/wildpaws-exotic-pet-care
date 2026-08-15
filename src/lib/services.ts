export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string[];
  features: string[];
  icon: string;
  image: string;
  priceFrom: string;
};

export const services: Service[] = [
  {
    slug: "reptile-care-husbandry",
    name: "Reptile Care & Husbandry",
    tagline: "Veterinary-supervised care for every scale and shell.",
    description:
      "Species-accurate lighting, heating, humidity and diet programs for snakes, lizards, turtles and tortoises — with wellness checks and handling training.",
    longDescription: [
      "Reptiles hide illness until it is advanced, so our husbandry program starts with the fundamentals: correct UVB gradients, basking temperatures, humidity cycles and a species-specific feeding calendar. We audit your setup, correct what is off, and teach you what to watch for.",
      "Every care plan is reviewed alongside our exotic veterinarians. We also offer shed assistance, nail and beak trims, weight tracking, and gentle handling training so your reptile stays calm and confident.",
    ],
    features: [
      "Lighting, heating and humidity audits",
      "Species-accurate feeding calendars",
      "Wellness checks with exotic vets",
      "Shed assistance and nail trims",
      "Handling and taming programs",
      "Weight and growth tracking",
    ],
    icon: "Bug",
    image: "/images/service-reptile.jpg",
    priceFrom: "$75",
  },
  {
    slug: "bird-care-avian-health",
    name: "Bird Care & Avian Health",
    tagline: "Wing health, feather health and a whole lot of enrichment.",
    description:
      "Annual wellness exams, wing and nail care, diet overhauls and behavior consulting for parrots, finches, doves and everything in between.",
    longDescription: [
      "Birds are masters at hiding illness, which is why we pair every visit with a full wellness check: weight, feather condition, beak and foot health, and breathing assessment. We flag problems early, when they are still easy to treat.",
      "Beyond health, we work on the things that make birds thrive — foraging enrichment, training that reduces screaming and plucking, safe wing and nail trims, and cage setups that encourage natural behaviors.",
    ],
    features: [
      "Annual avian wellness exams",
      "Wing, beak and nail trims",
      "Diet and foraging enrichment plans",
      "Feather-plucking behavior consults",
      "Cage setup and safety reviews",
      "Training for stress-free vet visits",
    ],
    icon: "Bird",
    image: "/images/service-bird.jpg",
    priceFrom: "$65",
  },
  {
    slug: "small-mammal-boarding",
    name: "Small Mammal Boarding",
    tagline: "A cozy, calm home away from home.",
    description:
      "Species-appropriate boarding suites for rabbits, guinea pigs, chinchillas, ferrets, hedgehogs and rats — with daily handling, fresh greens and daily photo updates.",
    longDescription: [
      "Boarding should feel like a vacation, not a kennel stay. Our climate-controlled suites are built to species needs: deep digging bedding for chinchillas, hay racks and tunnels for rabbits, and quiet dark hideaways for hedgehogs.",
      "Every guest gets fresh water and species-correct meals daily, supervised playtime, gentle handling, and a photo update so you can watch from anywhere. We follow your care sheet to the letter — medications, supplements and all.",
    ],
    features: [
      "Climate-controlled species suites",
      "Daily fresh greens and species meals",
      "Supervised playtime and handling",
      "Daily photo and video updates",
      "Medication and supplement admin",
      "Same-suite bonding available",
    ],
    icon: "PawPrint",
    image: "/images/service-mammal.jpg",
    priceFrom: "$28/night",
  },
  {
    slug: "exotic-pet-grooming",
    name: "Exotic Pet Grooming",
    tagline: "Gentle grooming, zero drama.",
    description:
      "Low-stress nail trims, feather and coat care, ear cleaning, scent gland care and full spa sessions for rabbits, guinea pigs, birds and reptiles.",
    longDescription: [
      "Exotic pets need grooming too — just done their way. Our groomers are trained in low-stress handling: towel cradles for rabbits, calm lap sessions for guinea pigs, and short, positive sessions for birds so trims never become trauma.",
      "Services include nail trims, ear and eye cleaning, scent gland expression, feather tidy-ups, coat brushing and deshedding for long-haired small mammals, plus shell and scale care for reptiles.",
    ],
    features: [
      "Low-stress handling techniques",
      "Nail, beak and feather trims",
      "Ear, eye and scent gland care",
      "Coat brushing and deshedding",
      "Reptile scale and shell care",
      "Full spa packages available",
    ],
    icon: "Scissors",
    image: "/images/service-grooming.jpg",
    priceFrom: "$55",
  },
  {
    slug: "dietary-nutrition-planning",
    name: "Dietary & Nutrition Planning",
    tagline: "The right diet makes everything easier — health, mood, even feather color.",
    description:
      "Species-specific meal plans built around fresh foods, correct calcium-to-phosphorus ratios and portioning — for reptiles, birds and small mammals alike.",
    longDescription: [
      "Most exotic pet health problems trace back to diet. We build meal plans from the ground up: correct calcium-to-phosphorus ratios for reptiles, fresh chop recipes for parrots, and fiber-first hay-based menus for rabbits and guinea pigs.",
      "Each plan comes with a shopping list, prep guide and feeding calendar, plus monthly check-ins to adjust portions as your pet grows, gains or slows down. Picky eaters welcome — we have converted more than a few.",
    ],
    features: [
      "Species-specific meal plans",
      "Fresh chop and salad recipes",
      "Calcium and vitamin balancing",
      "Picky-eater conversion plans",
      "Weight management programs",
      "Monthly adjustment check-ins",
    ],
    icon: "Apple",
    image: "/images/service-nutrition.jpg",
    priceFrom: "$90",
  },
  {
    slug: "habitat-design-setup",
    name: "Habitat Design & Setup",
    tagline: "Enclosures your pet will actually use — and you will love looking at.",
    description:
      "Custom-designed terrariums, aviaries and small-mammal habitats with correct gradients, safe plants, natural substrate and enrichment built in.",
    longDescription: [
      "A great habitat is invisible engineering: the right temperature gradient, humidity zones, UVB placement, and enrichment that triggers natural behavior. We design and build enclosures that meet every species requirement while looking beautiful in your home.",
      "We handle the full build — cabinet selection or custom joinery, bioactive substrate and drainage layers, live plant scaping, lighting and thermostat install, and a full 30-day support period while your pet settles in.",
    ],
    features: [
      "Custom design consultation",
      "Bioactive substrate and planting",
      "Correct heating and UVB install",
      "Automated misting and lighting",
      "Enrichment and hide placement",
      "30-day settling-in support",
    ],
    icon: "Trees",
    image: "/images/service-habitat.jpg",
    priceFrom: "$450",
  },
  {
    slug: "in-home-exotic-pet-sitting",
    name: "In-Home Exotic Pet Sitting",
    tagline: "Your pet stays home. We come to them.",
    description:
      "Trusted in-home visits for exotic pets while you travel — feeding, medications, habitat spot-cleaning, enrichment and daily updates from your own living room.",
    longDescription: [
      "Many exotic pets find travel stressful, and some should never be moved at all. Our sitters come to you: we follow your care sheet exactly, handle feeding, medication, lighting timers, spot-cleaning and enrichment, and send a daily update with photos.",
      "Every sitter is trained in exotic handling and first aid, bonded and background-checked. We also offer twice-daily visits for high-need pets and holiday coverage when boarding books out.",
    ],
    features: [
      "Bonded, background-checked sitters",
      "Feeding, medication and supplements",
      "Lighting, heating and misting checks",
      "Habitat spot-cleaning and watering",
      "Daily photo and video updates",
      "Holiday and same-day availability",
    ],
    icon: "HeartHandshake",
    image: "/images/service-sitting.jpg",
    priceFrom: "$45/visit",
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  summary: string;
  details: string[];
  image: string;
  stats: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "sunrise-aviary",
    title: "Sunrise Aviary — Parrot Paradise Build",
    location: "Maplewood, OR",
    category: "Birds",
    summary:
      "A retired couple wanted a flight aviary for their two rehomed macaws. We designed and built a 10×6 ft climate-controlled flight with natural perches and foraging stations.",
    details: [
      "Designed a 10×6 ft flight with UV-transmitting skylight panels and safe non-toxic mesh.",
      "Installed natural branch perches at varied heights plus a misting system for bathing behavior.",
      "Behavior program reduced plucking in both macaws within eight weeks of move-in.",
    ],
    image: "/images/project-aviary.jpg",
    stats: [
      { label: "Flight size", value: "10×6 ft" },
      { label: "Residents", value: "2 macaws" },
      { label: "Plucking", value: "-80%" },
    ],
  },
  {
    slug: "reptile-room-clinic",
    title: "The Reptile Room — 12-Enclosure Clinic Build",
    location: "Portland, OR",
    category: "Reptiles",
    summary:
      "A small animal hospital needed a dedicated reptile ward with precise gradients for everything from leopard geckos to a 4 ft tegu.",
    details: [
      "Built 12 individually controlled enclosures with species-specific heat and UVB zones.",
      "Engineered a shared drainage system for bioactive substrate and daily misting cycles.",
      "Trained clinic staff on gradient monitoring and quarantine protocol for new rescues.",
    ],
    image: "/images/project-reptile-room.jpg",
    stats: [
      { label: "Enclosures", value: "12" },
      { label: "Species", value: "9" },
      { label: "Build time", value: "3 wks" },
    ],
  },
  {
    slug: "bunny-boutique",
    title: "Bunny Boutique — Small Mammal Boarding Suite",
    location: "Beaverton, OR",
    category: "Small Mammals",
    summary:
      "A rabbit rescue asked us to design boarding suites that keep bonded pairs together while meeting strict cleaning and enrichment standards.",
    details: [
      "Designed 24 suites with deep litter pans, hay racks, tunnels and bonded-pair layouts.",
      "Installed sound-dampened partitions to keep nervous rescues calm and quiet.",
      "Launched a daily photo-update routine that cut owner anxiety — and cancellations — to near zero.",
    ],
    image: "/images/project-bunny-hotel.jpg",
    stats: [
      { label: "Suites", value: "24" },
      { label: "Guests/night", value: "40+" },
      { label: "Rating", value: "4.9/5" },
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They rebuilt our iguana’s entire setup — lighting, humidity, the works — and he went from lethargic to climbing everything. The change in two weeks was unbelievable.",
    name: "Nadia K.",
    role: "Iguana guardian, Portland",
    rating: 5,
  },
  {
    quote:
      "Our cockatoo stayed for two weeks of boarding and came home calmer than she left. Daily videos, zero plucking, and she actually seemed disappointed to see us.",
    name: "Marcus & Dee J.",
    role: "Cockatoo parents, Beaverton",
    rating: 5,
  },
  {
    quote:
      "The nutrition plan turned our picky guinea pigs into veggie fiends. They eat more greens than we do now, and the monthly check-ins keep us honest.",
    name: "Priya S.",
    role: "Guinea pig guardian, Lake Oswego",
    rating: 5,
  },
  {
    quote:
      "I travel for work every month and the in-home sitting has been a lifesaver for our hedgehog. Same routine, same room, and a photo every single day.",
    name: "Tom W.",
    role: "Hedgehog dad, Tigard",
    rating: 5,
  },
  {
    quote:
      "Our rescue macaw came to WildPaws plucking and terrified. The behavior program was patient, gentle and effective — eight months later she is fully feathered.",
    name: "Elena R.",
    role: "Macaw rescuer, Vancouver WA",
    rating: 5,
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Which pets do you care for?",
    answer:
      "Reptiles (lizards, snakes, turtles, tortoises), birds (parrots, finches, doves, poultry-adjacent species), and small mammals (rabbits, guinea pigs, chinchillas, ferrets, hedgehogs, rats, hamsters). If you are unsure, just ask — we will tell you honestly whether we are the right fit.",
  },
  {
    question: "Do you work with a veterinarian?",
    answer:
      "Yes. Every care plan and wellness visit is reviewed with our partner exotic veterinarians, and we coordinate directly with your regular vet on medications and treatment plans. We never diagnose beyond our license — we flag and refer.",
  },
  {
    question: "How far in advance do I need to book boarding?",
    answer:
      "Weekends and school holidays book out two to three weeks ahead. Regular weekday boarding usually has same-week availability. In-home sitting can often be arranged with 48 hours notice, and we keep a small list for true same-day emergencies.",
  },
  {
    question: "Is my pet’s enclosure suitable before you start?",
    answer:
      "Our first visit includes a full habitat audit — lighting, heating, humidity, substrate, space and enrichment. If something is off, we give you a plain-language priority list: what is urgent, what can wait, and what it will cost.",
  },
  {
    question: "Do you take pets with medical needs?",
    answer:
      "Yes — we regularly care for seniors, disabled pets and animals on medication. Boarding guests with medical needs stay in our quieter suites, and in-home sitters follow your care sheet to the letter, including injections if your vet has trained us.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We are based in Portland and serve the wider metro area plus Beaverton, Tigard, Lake Oswego, Gresham and Vancouver WA for in-home sitting. Habitat builds and consultations travel a little further — call and ask.",
  },
];
