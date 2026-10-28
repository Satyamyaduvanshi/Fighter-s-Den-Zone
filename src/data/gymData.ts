// src/data/gymData.ts

export const GYM_INFO = {
  name: "FIGHTER'S DEN ZONE",
  tagline: "Skill | Confidence | Power",
  instagram: "fighters_den_zone",
  instagramUrl: "https://instagram.com/fighters_den_zone",
  linktrUrl: "https://linktr.ee/fightersdenzone",
  phone: "+91 83689 94366",
  whatsappNumber: "918368994366",
  address: "Sector 15, Rohini, Manav Chowk, Delhi - 110085",
  promoOffer: "50% OFF FOR FIRST 50 MEMBERS",
  socialProof: "Followed by Seedhe Maut (@theycallmecalm & @encoreabj) • 4,915+ Followers",
};

export interface ProgramItem {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  image: string;
  offsetClass?: string;
}

export const PROGRAMS: ProgramItem[] = [
  {
    id: "kids",
    title: "Kids Martial Arts",
    badge: "Ages 5–13",
    subtitle: "Anti-bullying, discipline & agility",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80",
    offsetClass: "md:mt-0",
  },
  {
    id: "mma",
    title: "Mixed Martial Arts",
    badge: "Pro & Amateur",
    subtitle: "Striking, cage wrestling & submissions",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80",
    offsetClass: "md:-mt-8",
  },
  {
    id: "boxing",
    title: "Boxing & Kickboxing",
    badge: "All Levels",
    subtitle: "Dutch drills, pad work & HIIT conditioning",
    image: "https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=800&q=80",
    offsetClass: "md:mt-4",
  },
  {
    id: "bjj",
    title: "BJJ & Self-Defence",
    badge: "Adults 16+",
    subtitle: "No-Gi grappling & real-world street reflex",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
    offsetClass: "md:-mt-4",
  },
];

export const SCHEDULE_DATA = [
  { time: "06:30 AM - 07:30 AM", mon: "Boxing & Conditioning", tue: "Kickboxing Drills", wed: "Boxing & Conditioning", thu: "Kickboxing Drills", fri: "HIIT & Bag Work", sat: "Open Mat / Run", category: "striking" },
  { time: "08:00 AM - 09:30 AM", mon: "MMA Pro/Amateur", tue: "No-Gi Jiu-Jitsu", wed: "MMA Pro/Amateur", thu: "No-Gi Jiu-Jitsu", fri: "MMA Sparring", sat: "Strength & Mobility", category: "mma" },
  { time: "04:30 PM - 05:30 PM", mon: "Kids Class (Ages 5-13)", tue: "Kids Gymnastics/MA", wed: "Kids Class (Ages 5-13)", thu: "Kids Self-Defence", fri: "Kids Sparring Games", sat: "Kids Belt Drills", category: "kids" },
  { time: "06:00 PM - 07:00 PM", mon: "Boxing Fundamentals", tue: "Muay Thai / Kickboxing", wed: "Boxing Fundamentals", thu: "Muay Thai / Kickboxing", fri: "Pad Work & Reflex", sat: "Street Self-Defence", category: "striking" },
  { time: "07:30 PM - 09:00 PM", mon: "Mixed Martial Arts", tue: "BJJ & Wrestling", wed: "Mixed Martial Arts", thu: "BJJ & Wrestling", fri: "Friday Night Cage Spar", sat: "Coach Assessment", category: "mma" },
];

export const FAQS = [
  {
    q: "How Do I Claim The 50% OFF Pre-Registration Offer?",
    a: "Since we opened our facility at Manav Chowk, Sector 15 Rohini, we're offering flat 50% OFF to our first 50 members across MMA, Boxing, Kickboxing, and BJJ. Submit the Free Trial Pass form above or click the WhatsApp button to lock your slot before all 50 spots fill up!",
  },
  {
    q: "I'm A Complete Beginner With Zero Fighting Experience. Can I Join?",
    a: "100%! Over 75% of our members start with zero martial arts background. You won't be thrown into hard sparring—our foundational batches focus on stance, footwork, pad work, fitness conditioning, and confidence building at your own pace.",
  },
  {
    q: "Will My Child Become Aggressive Or A Bully?",
    a: "The exact opposite. Our Kids Martial Arts program teaches discipline, respect, and emotional control. Kids learn how to defuse conflicts, stand up against bullies with confidence, and channel their energy away from screens.",
  },
  {
    q: "What Should I Bring To My First Free Trial Class In Rohini?",
    a: "Just comfortable athletic wear (t-shirt and shorts/track pants), a water bottle, and a small towel. We train barefoot on sanitized pro-grade mats, and we provide sanitized loaner boxing gloves for your trial session.",
  },
];