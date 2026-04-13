
import type { NavItem } from "./types";

export const COMPANY_NAME = "LankaHorizon";
export const WHATSAPP_NUMBER = "94771234567"; // Use without +
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const COMPANY_EMAIL = "hello@lankahorizon.com";
export const COMPANY_LOCATION = "No. 45, Beach Road, Colombo 03, Sri Lanka";

export const NAV_ITEMS: NavItem[] = [
    { title: 'Home', href: '/' },
    { title: 'Tours', href: '/tours' },
    { title: 'Destinations', href: '/destinations' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
];
