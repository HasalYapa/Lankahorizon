
import type { TourPackage, Testimonial, FaqItem } from './types';

export const tourPackages: TourPackage[] = [
  {
    id: 'sri-lanka-essentials',
    name: 'Sri Lanka Essentials',
    duration: '7 Days / 6 Nights',
    durationInDays: 7,
    destinations: ['Sigiriya', 'Kandy', 'Nuwara Eliya', 'Ella'],
    description: 'Discover the heart of Sri Lanka, from ancient rock fortresses to misty tea plantations and scenic train rides.',
    image: 'sri-lanka-essentials-tour',
    price: 450,
    type: 'Best Seller',
  },
  {
    id: 'southern-coast-adventure',
    name: 'Southern Coast Adventure',
    duration: '5 Days / 4 Nights',
    durationInDays: 5,
    destinations: ['Galle', 'Mirissa', 'Yala National Park'],
    description: 'Experience the best of the south: historic forts, whale watching, and thrilling wildlife safaris.',
    image: 'southern-coast-adventure-tour',
    price: 350,
    type: 'Best Seller',
  },
  {
    id: 'cultural-triangle-explorer',
    name: 'Cultural Triangle Explorer',
    duration: '6 Days / 5 Nights',
    durationInDays: 6,
    destinations: ['Anuradhapura', 'Polonnaruwa', 'Sigiriya', 'Dambulla'],
    description: 'Step back in time as you explore the ancient capitals and sacred sites of Sri Lanka\'s glorious past.',
    image: 'cultural-triangle-explorer-tour',
    price: 400,
    type: 'Best Seller',
  },
  {
    id: 'highlands-and-wildlife',
    name: 'Highlands & Wildlife',
    duration: '10 Days / 9 Nights',
    durationInDays: 10,
    destinations: ['Kandy', 'Nuwara Eliya', 'Horton Plains', 'Yala'],
    description: 'A journey through lush hill country, tea estates, and one of Sri Lanka\'s most famous national parks.',
    image: 'highlands-and-wildlife-tour',
    price: 700,
    type: 'Best Seller',
  },
  {
    id: 'southern-luxury-escape',
    name: 'Southern Luxury Escape',
    duration: '7 Days',
    durationInDays: 7,
    destinations: ['Galle', 'Unawatuna', 'Bentota'],
    description: 'Indulge in 5-star villas, private beach dinners, and spa treatments. The ultimate romantic getaway.',
    image: 'southern-coast-adventure-tour',
    price: 1200,
    type: 'Luxury',
  },
  {
    id: 'backpackers-dream',
    name: 'Backpacker\'s Dream',
    duration: '6 Days',
    durationInDays: 6,
    destinations: ['Ella', 'Haputale', 'Nuwara Eliya'],
    description: 'A budget-friendly tour for those who love hiking, waterfalls, and local street food culture.',
    image: 'sri-lanka-essentials-tour',
    price: 290,
    type: 'Adventure',
  },
  {
    id: 'family-fun-sun',
    name: 'Family Fun & Sun',
    duration: '8 Days',
    durationInDays: 8,
    destinations: ['Bentota', 'Hikkaduwa'],
    description: 'Kid-friendly resorts with pools, turtle hatcheries, and gentle boat rides. Perfect for making memories.',
    image: 'family-fun-sun-tour',
    price: 850,
    type: 'Family',
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    location: 'United Kingdom',
    avatar: 'testimonial-avatar-2',
    message: 'Our 10-day tour with LankaHorizon was absolutely magical! The guide was incredibly knowledgeable and friendly. Every detail was taken care of perfectly.',
  },
  {
    name: 'Michael Chen',
    location: 'Singapore',
    avatar: 'testimonial-avatar-1',
    message: 'Best travel agency in Sri Lanka hands down. We saw leopards in Yala and the train ride to Ella was breathtaking. Highly recommend their customized packages.',
  },
  {
    name: 'Emma & Tom',
    location: 'Australia',
    avatar: 'testimonial-avatar-3',
    message: 'From the airport pickup to the drop-off, everything was seamless. The hotels were fantastic and within our budget. Thank you for an amazing honeymoon!',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'What is the best time to visit Sri Lanka?',
    answer: 'Sri Lanka is a year-round destination. The best time to visit the west and south coasts and hill country is from December to March, while the east coast is best from April/May to September.',
  },
  {
    question: 'Do I need a visa to enter Sri Lanka?',
    answer: 'Most nationalities require an Electronic Travel Authorization (ETA) to visit Sri Lanka. You can apply for it online before your trip. Please check the official government website for the latest requirements.',
  },
  {
    question: 'Is it safe to travel in Sri Lanka?',
    answer: 'Yes, Sri Lanka is generally a very safe country for tourists. LankaHorizon provides experienced local guides and drivers to ensure your safety and comfort throughout your journey.',
  },
  {
    question: 'How do I book a tour?',
    answer: 'You can book a tour package directly from our Tours page or request a custom itinerary. All bookings and inquiries are handled conveniently through WhatsApp for a personal touch.',
  },
];
