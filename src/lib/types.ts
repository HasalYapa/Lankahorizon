
export interface NavItem {
  title: string;
  href: string;
}

export interface TourPackage {
  id: string;
  name: string;
  duration: string;
  durationInDays: number;
  destinations: string[];
  description: string;
  image: string;
  price: number;
  type: 'Best Seller' | 'Luxury' | 'Adventure' | 'Family';
}

export interface Testimonial {
  name: string;
  location: string;
  avatar: string;
  message: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
