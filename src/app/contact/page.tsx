
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone, Send, MessageSquare } from 'lucide-react';
import { COMPANY_EMAIL, COMPANY_LOCATION, COMPANY_NAME, WHATSAPP_LINK, WHATSAPP_NUMBER } from '@/lib/constants';
import { getImage } from '@/lib/placeholder-images';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${COMPANY_NAME}. We're here to help you plan your perfect Sri Lankan getaway. Contact us via WhatsApp, email, or find our location.`,
};

export default function ContactPage() {
    const heroImage = getImage('contact-hero-bg');
    const mapImage = getImage('contact-map-bg');
    
    return (
        <main className="flex flex-col w-full items-center bg-background">
            <section className="w-full px-4 md:px-10 py-5 max-w-[1280px]">
                <div className="flex min-h-[400px] md:min-h-[480px] flex-col gap-6 rounded-2xl md:rounded-[3rem] items-center justify-center p-8 relative overflow-hidden group shadow-2xl shadow-black/20">
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="object-cover"
                        priority
                        data-ai-hint={heroImage.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />
                    <div className="flex flex-col gap-3 text-center z-10 max-w-2xl">
                        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-md">
                            Get in Touch
                        </h1>
                        <h2 className="text-white/90 text-base md:text-lg font-normal leading-relaxed drop-shadow-sm">
                            Plan your Sri Lankan adventure with us. Whether you have a question about a tour or want a custom itinerary, we are just a message away.
                        </h2>
                    </div>
                    <Button asChild size="lg" className="z-10 mt-4 rounded-full text-base font-bold transition-all transform hover:scale-105 shadow-xl">
                        <Link href="/destinations">
                            Start Planning
                        </Link>
                    </Button>
                </div>
            </section>

            <section className="w-full px-4 md:px-10 py-12 max-w-[1280px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Contact Details</h2>
                            <p className="text-muted-foreground">Reach out to us directly via phone, email, or visit our headquarters in the heart of Colombo.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Link href={WHATSAPP_LINK} target="_blank" className="flex items-center gap-4 rounded-2xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                                <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 group-hover:bg-primary/20 text-primary transition-colors">
                                    <MessageSquare className="text-2xl" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-base font-bold">WhatsApp Support</h3>
                                    <p className="text-primary font-medium">+{WHATSAPP_NUMBER}</p>
                                </div>
                            </Link>
                            <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center gap-4 rounded-2xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="flex items-center justify-center size-12 rounded-full bg-blue-50 dark:bg-blue-900/20 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 text-blue-500 dark:text-blue-400 transition-colors">
                                    <Mail className="text-2xl" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-base font-bold">Email Address</h3>
                                    <p className="text-muted-foreground">{COMPANY_EMAIL}</p>
                                </div>
                            </a>
                            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_LOCATION)}`} target="_blank" className="flex items-center gap-4 rounded-2xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="flex items-center justify-center size-12 rounded-full bg-orange-50 dark:bg-orange-900/20 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 text-orange-500 dark:text-orange-400 transition-colors">
                                    <MapPin className="text-2xl" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-base font-bold">Headquarters</h3>
                                    <p className="text-muted-foreground">{COMPANY_LOCATION}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-7 h-full min-h-[400px]">
                        <div className="w-full h-full rounded-2xl md:rounded-[2rem] shadow-lg border-4 border-white dark:border-card object-cover overflow-hidden relative">
                             <Image
                                src={mapImage.imageUrl}
                                alt={mapImage.description}
                                fill
                                className="object-cover"
                                data-ai-hint={mapImage.imageHint}
                            />
                            <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors pointer-events-none"></div>
                            <div className="absolute bottom-6 left-6 bg-card p-4 rounded-xl shadow-lg max-w-xs">
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">Our Location</p>
                                <p className="text-sm font-semibold">Colombo 03, Sri Lanka</p>
                                <a className="text-primary text-xs font-bold mt-2 inline-block hover:underline" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_LOCATION)}`} target="_blank">Get Directions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="w-full px-4 md:px-10 py-10 pb-20 max-w-[960px]">
                <div className="bg-card rounded-[2rem] p-8 md:p-12 shadow-xl border">
                   <ContactForm />
                </div>
            </section>
        </main>
    );
}
