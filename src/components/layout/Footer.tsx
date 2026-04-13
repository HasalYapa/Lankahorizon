import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin, Twitter, Compass } from 'lucide-react';
import { COMPANY_EMAIL, COMPANY_LOCATION, COMPANY_NAME, NAV_ITEMS, WHATSAPP_LINK, WHATSAPP_NUMBER } from '@/lib/constants';

const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Twitter, href: "#", name: "Twitter" },
];


export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0c1a0e] pt-16 pb-8 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-4 lg:col-span-1">
                    <Link href="/" className="flex items-center gap-2 mb-4">
                      <Compass className="h-8 w-8 text-primary" />
                      <h2 className="text-xl font-bold text-ocean-blue dark:text-white">{COMPANY_NAME}</h2>
                    </Link>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                        Your trusted partner for exploring the wonders of Sri Lanka. We create memories that last a lifetime.
                    </p>
                    <div className="flex gap-4">
                        {socialLinks.map(link => (
                            <a key={link.name} href={link.href} className="text-slate-400 hover:text-primary transition-colors">
                                <link.icon />
                                <span className="sr-only">{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-bold text-ocean-blue dark:text-white uppercase tracking-wider mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                        {NAV_ITEMS.map(item => (
                             <li key={item.href}><Link className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary text-sm" href={item.href}>{item.title}</Link></li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-sm font-bold text-ocean-blue dark:text-white uppercase tracking-wider mb-4">Top Tours</h3>
                    <ul className="space-y-3">
                        <li><Link className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary text-sm" href="/tours">Hill Country Explorer</Link></li>
                        <li><Link className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary text-sm" href="/tours">Coastal Paradise</Link></li>
                        <li><Link className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary text-sm" href="/tours">Cultural Triangle</Link></li>
                        <li><Link className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary text-sm" href="/tours">Wildlife Safari</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-bold text-ocean-blue dark:text-white uppercase tracking-wider mb-4">Contact</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-slate-500 dark:text-slate-400 text-sm">
                            <MapPin className="text-primary w-4 h-4 mt-0.5 shrink-0" />
                            <span>{COMPANY_LOCATION}</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                             <a href={WHATSAPP_LINK} className="flex items-center gap-3 hover:text-primary dark:hover:text-primary transition-colors">
                                <Phone className="text-primary w-4 h-4" />
                                <span>+{WHATSAPP_NUMBER}</span>
                            </a>
                        </li>
                        <li className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
                            <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center gap-3 hover:text-primary dark:hover:text-primary transition-colors">
                                <Mail className="text-primary w-4 h-4" />
                                <span>{COMPANY_EMAIL}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
                <div className="flex gap-6">
                    <a className="text-slate-400 hover:text-primary text-sm" href="#">Privacy Policy</a>
                    <a className="text-slate-400 hover:text-primary text-sm" href="#">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  );
}
