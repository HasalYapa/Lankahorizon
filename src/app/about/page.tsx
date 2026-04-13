
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getImage } from '@/lib/placeholder-images';
import { Star, Map, Edit, Leaf, Shield, ArrowRight, CheckCircle, History, Trees, Mountain, Drama, Sailboat, Sprout, Users, Handshake, Info, Mail, Phone, Twitter, Facebook, Instagram, Quote, Briefcase, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About Us - LankaHorizon Travel Company',
  description: 'Learn about LankaHorizon Travel Company, our passion for Sri Lanka, and our commitment to creating authentic, customer-focused travel experiences.',
};

export default function AboutPage() {
    const heroImage = getImage('about-hero-bg-new');
    const stiltFishermenImage = getImage('about-stilt-fishermen');
    const sigiriyaImage = getImage('about-sigiriya-rock');
    const kumaraImage = getImage('kumara-perera-portrait');
    const dilaniImage = getImage('dilani-silva-portrait');
    const nuwanImage = getImage('nuwan-fernando-portrait');
    const anjaliImage = getImage('anjali-de-silva-portrait');
    const nineArchCtaImage = getImage('about-cta-bg-train');
    const testimonialAvatar = getImage('testimonial-avatar-sarah-jenkins');

    return (
        <main className="w-full overflow-x-hidden">
            <header className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover object-center"
                    priority
                    data-ai-hint={heroImage.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col gap-6 items-center animate-fade-in-up">
                    <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                        Discover the Real Sri Lanka with <span className="text-primary">LankaHorizon</span>
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
                        We are more than just a travel agency; we are your local friends in paradise, ready to show you the hidden wonders of our island home.
                    </p>
                    <Button size="lg" className="mt-4 text-base font-bold transition transform hover:scale-105">
                        Explore Our Impact
                    </Button>
                </div>
            </header>

            <section className="relative -mt-16 z-20 px-4 mb-20">
                <div className="max-w-6xl mx-auto bg-card dark:bg-[#1a2e1d] rounded-xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 border border-border">
                    <div className="flex flex-col items-center text-center p-4">
                        <p className="text-primary tracking-tight text-5xl font-black leading-tight">5000+</p>
                        <p className="text-foreground text-sm font-medium uppercase tracking-wide mt-2">Happy Travelers</p>
                        <p className="text-muted-foreground text-xs mt-1">Confirmed satisfaction rate</p>
                    </div>
                    <div className="relative flex flex-col items-center text-center p-4 md:border-x md:border-border">
                        <p className="text-primary tracking-tight text-5xl font-black leading-tight">10</p>
                        <p className="text-foreground text-sm font-medium uppercase tracking-wide mt-2">Years Experience</p>
                        <p className="text-muted-foreground text-xs mt-1">Proven expertise in Sri Lanka tourism</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4">
                        <p className="text-primary tracking-tight text-5xl font-black leading-tight">150+</p>
                        <p className="text-foreground text-sm font-medium uppercase tracking-wide mt-2">Destinations Covered</p>
                        <p className="text-muted-foreground text-xs mt-1">Diverse locations across the island</p>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-1 bg-primary rounded-full"></span>
                            <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Story & Mission</span>
                        </div>
                        <h2 className="text-foreground text-3xl md:text-5xl font-black leading-tight tracking-tight">
                            Authentic Journeys, <br/>Rooted in Culture & Values
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Born and raised amidst the misty hills and golden shores of Sri Lanka, we know the hidden gems that guidebooks often miss. LankaHorizon was founded with a simple mission: to share the authentic beauty of our island with the world, while upholding our core values of sustainability and community empowerment.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            We believe in travel that respects nature and uplifts local communities. Whether you're seeking the thrill of a leopard safari or the serenity of a hilltop temple, we craft experiences that leave footprints in your heart, not on the environment. Our transparent practices ensure you understand the impact of your journey.
                        </p>
                        <Link href="#" className="mt-4 flex items-center gap-2 text-foreground font-bold text-lg hover:text-primary transition-colors group">
                            <span>Explore Our Values & Ethics</span>
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-4 w-full h-full relative">
                        <div className="col-span-2 md:col-span-1 md:translate-y-12">
                            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg transform hover:rotate-1 transition duration-500">
                                <Image src={stiltFishermenImage.imageUrl} alt={stiltFishermenImage.description} fill className="object-cover" data-ai-hint={stiltFishermenImage.imageHint} />
                            </div>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                             <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg transform hover:-rotate-1 transition duration-500">
                                <Image src={sigiriyaImage.imageUrl} alt={sigiriyaImage.description} fill className="object-cover" data-ai-hint={sigiriyaImage.imageHint} />
                            </div>
                        </div>
                        <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-card dark:bg-[#162918] transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 md:px-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-foreground text-3xl md:text-4xl font-black leading-tight">Why Choose LankaHorizon: A Clear Advantage</h2>
                        <p className="text-muted-foreground text-lg">Compare our key benefits to make your decision with confidence.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-background dark:bg-[#1e3a21] rounded-xl p-8 shadow-md">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <Map className="text-primary text-3xl" />
                                </div>
                                <div>
                                    <h3 className="text-foreground text-xl font-bold mb-1">Expert Local Knowledge</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Our guides are locals who know every twist in the road and every story behind the ruins, ensuring authentic experiences.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm text-foreground">
                                <div className="flex items-center gap-2"><CheckCircle className="text-primary text-base" /> Local Insights</div>
                                <div className="flex items-center gap-2"><CheckCircle className="text-primary text-base" /> Hidden Gems Access</div>
                                <div className="flex items-center gap-2"><CheckCircle className="text-primary text-base" /> Cultural Immersion</div>
                                <div className="flex items-center gap-2"><CheckCircle className="text-primary text-base" /> Language Fluency</div>
                            </div>
                        </div>
                        <div className="bg-background dark:bg-[#1e3a21] rounded-xl p-8 shadow-md">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <Edit className="text-primary text-3xl" />
                                </div>
                                <div>
                                    <h3 className="text-foreground text-xl font-bold mb-1">Tailor-Made Itineraries</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Your holiday, your way. We customize every detail to suit your pace, budget, and interests with clear options.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm text-foreground">
                                <div className="flex items-center gap-2"><CheckCircle className="text-primary text-base" /> Flexible Scheduling</div>
                                <div className="flex items-center gap-2"><CheckCircle className="text-primary text-base" /> Budget Optimization</div>
                                <div className="flex items-center gap-2"><CheckCircle className="text-primary text-base" /> Interest-Based Tours</div>
                                <div className="flex items-center gap-2"><CheckCircle className="text-primary text-base" /> Transparent Pricing</div>
                            </div>
                        </div>
                        <div className="bg-background dark:bg-[#1e3a21] rounded-xl p-8 shadow-md">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <Leaf className="text-primary text-3xl" />
                                </div>
                                <div>
                                    <h3 className="text-foreground text-xl font-bold mb-1">Sustainable & Ethical Travel</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        We prioritize eco-friendly accommodations and practices to protect our beautiful island and empower local communities.
                                    </p>
                                </div>
                            </div>
                             <div className="grid grid-cols-2 gap-4 text-sm text-foreground">
                                <div className="flex items-center gap-2"><CheckCircle className="text-primary text-base" /> Eco-friendly Partners</div>
                                <div className="flex items-center gap-2"><CheckCircle className="text-primary text-base" /> Community Support</div>
                                <div className="flex items-center gap-2"><CheckCircle className="text-primary text-base" /> Responsible Tourism</div>
                                <div className="flex items-center gap-2"><CheckCircle className="text-primary text-base" /> Carbon Offset Options</div>
                            </div>
                        </div>
                        <div className="bg-background dark:bg-[#1e3a21] rounded-xl p-8 shadow-md">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <Shield className="text-primary text-3xl" />
                                </div>
                                <div>
                                    <h3 className="text-foreground text-xl font-bold mb-1">24/7 Dedicated Support</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        From arrival to departure, our dedicated team is just a phone call away, ensuring peace of mind throughout your trip.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm text-foreground">
                                <div className="flex items-center gap-2"><CheckCircle className="text-primary text-base" /> Emergency Hotline</div>
                                <div className="flex items-center gap-2"><CheckCircle className="text-primary text-base" /> Personalized Assistance</div>
                                <div className="flex items-center gap-2"><CheckCircle className="text-primary text-base" /> Multilingual Staff</div>
                                <div className="flex items-center gap-2"><CheckCircle className="text-primary text-base" /> Real-time Updates</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-foreground text-3xl md:text-4xl font-black mb-4">Meet Our Expert Local Guides</h2>
                        <p className="text-muted-foreground">Detailed profiles of our passionate guides, highlighting their expertise to help you choose.</p>
                    </div>
                    <Link href="#" className="text-primary font-bold hover:underline flex items-center gap-1">
                        View All Guides & Their Specializations <ArrowRight className="text-sm" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Guide 1 */}
                    <div className="bg-card dark:bg-[#1a2e1d] rounded-xl shadow-md p-6 flex flex-col items-center text-center group transition-transform hover:-translate-y-2">
                        <div className="relative mb-4">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors duration-300">
                                <Image alt={kumaraImage.description} className="w-full h-full object-cover" src={kumaraImage.imageUrl} width={128} height={128} />
                            </div>
                            <div className="absolute bottom-0 right-0 bg-primary text-card p-2 rounded-full shadow-lg">
                                <Star className="text-sm font-bold" />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-foreground">Kumara Perera</h3>
                        <p className="text-sm text-muted-foreground">Senior Cultural & History Guide</p>
                        <div className="mt-4 w-full text-left">
                            <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">Specializations:</h4>
                            <ul className="text-sm text-foreground space-y-1">
                                <li className="flex items-center gap-2"><History className="text-primary text-base" /> Ancient Cities & Heritage</li>
                                <li className="flex items-center gap-2"><Drama className="text-primary text-base" /> Local Traditions & Cuisine</li>
                                <li className="flex items-center gap-2"><Mountain className="text-primary text-base" /> Nature Treks & Scenic Routes</li>
                            </ul>
                        </div>
                        <Button variant="link" className="mt-4 text-primary text-sm font-medium">
                            <Info className="mr-1 text-base" /> Full Profile
                        </Button>
                    </div>
                    {/* Guide 2 */}
                    <div className="bg-card dark:bg-[#1a2e1d] rounded-xl shadow-md p-6 flex flex-col items-center text-center group transition-transform hover:-translate-y-2">
                        <div className="relative mb-4">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors duration-300">
                                <Image alt={dilaniImage.description} className="w-full h-full object-cover" src={dilaniImage.imageUrl} width={128} height={128} />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-foreground">Dilani Silva</h3>
                        <p className="text-sm text-muted-foreground">Family & Wellness Travel Expert</p>
                        <div className="mt-4 w-full text-left">
                            <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">Specializations:</h4>
                            <ul className="text-sm text-foreground space-y-1">
                                <li className="flex items-center gap-2"><Users className="text-primary text-base" /> Family-Friendly Itineraries</li>
                                <li className="flex items-center gap-2"><Sprout className="text-primary text-base" /> Yoga & Ayurvedic Retreats</li>
                                <li className="flex items-center gap-2"><Sailboat className="text-primary text-base" /> Coastal & Beach Experiences</li>
                            </ul>
                        </div>
                        <Button variant="link" className="mt-4 text-primary text-sm font-medium">
                            <Info className="mr-1 text-base" /> Full Profile
                        </Button>
                    </div>
                    {/* Guide 3 */}
                    <div className="bg-card dark:bg-[#1a2e1d] rounded-xl shadow-md p-6 flex flex-col items-center text-center group transition-transform hover:-translate-y-2">
                        <div className="relative mb-4">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors duration-300">
                                <Image alt={nuwanImage.description} className="w-full h-full object-cover" src={nuwanImage.imageUrl} width={128} height={128} />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-foreground">Nuwan Fernando</h3>
                        <p className="text-sm text-muted-foreground">Wildlife & Adventure Specialist</p>
                        <div className="mt-4 w-full text-left">
                            <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">Specializations:</h4>
                            <ul className="text-sm text-foreground space-y-1">
                                <li className="flex items-center gap-2"><Award className="text-primary text-base" /> Safari & Wildlife Photography</li>
                                <li className="flex items-center gap-2"><Handshake className="text-primary text-base" /> Off-the-Beaten-Path Expeditions</li>
                                <li className="flex items-center gap-2"><Briefcase className="text-primary text-base" /> Watersports & Diving</li>
                            </ul>
                        </div>
                         <Button variant="link" className="mt-4 text-primary text-sm font-medium">
                            <Info className="mr-1 text-base" /> Full Profile
                        </Button>
                    </div>
                    {/* Guide 4 */}
                    <div className="bg-card dark:bg-[#1a2e1d] rounded-xl shadow-md p-6 flex flex-col items-center text-center group transition-transform hover:-translate-y-2">
                        <div className="relative mb-4">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-transparent group-hover:border-primary transition-colors duration-300">
                                <Image alt={anjaliImage.description} className="w-full h-full object-cover" src={anjaliImage.imageUrl} width={128} height={128} />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-foreground">Anjali De Silva</h3>
                        <p className="text-sm text-muted-foreground">Logistics & Customer Relations</p>
                        <div className="mt-4 w-full text-left">
                            <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">Specializations:</h4>
                             <ul className="text-sm text-foreground space-y-1">
                                <li className="flex items-center gap-2"><Mail className="text-primary text-base" /> Transport & Accommodation</li>
                                <li className="flex items-center gap-2"><Phone className="text-primary text-base" /> 24/7 Traveler Support</li>
                                <li className="flex items-center gap-2"><Twitter className="text-primary text-base" /> Multilingual Communication</li>
                            </ul>
                        </div>
                         <Button variant="link" className="mt-4 text-primary text-sm font-medium">
                            <Info className="mr-1 text-base" /> Full Profile
                        </Button>
                    </div>
                </div>
            </section>
            
            <section className="py-16 bg-primary/5 dark:bg-[#142616] mt-10">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <Quote className="text-primary text-6xl mb-6 mx-auto" />
                    <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-foreground mb-8">
                        "We had the most amazing honeymoon thanks to LankaHorizon. The itinerary was perfect, balancing adventure with relaxation. Our driver, Kumara, felt like family by the end of the trip! The transparent planning process made everything so easy."
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <Image alt={testimonialAvatar.description} className="w-12 h-12 rounded-full object-cover border-2 border-primary" src={testimonialAvatar.imageUrl} width={48} height={48} data-ai-hint={testimonialAvatar.imageHint}/>
                        <div className="text-left">
                            <p className="font-bold text-foreground">Sarah Jenkins</p>
                            <p className="text-sm text-muted-foreground">United Kingdom | Decisive Planner</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4">
                <div className="relative max-w-5xl mx-auto rounded-xl overflow-hidden">
                     <Image
                        src={nineArchCtaImage.imageUrl}
                        alt={nineArchCtaImage.description}
                        fill
                        className="object-cover object-center"
                        data-ai-hint={nineArchCtaImage.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center text-center p-12 md:p-20 space-y-8">
                        <h2 className="text-white text-3xl md:text-5xl font-black leading-tight max-w-3xl">
                           Ready for your tropical escape?<br/> Let's plan your trip today.
                        </h2>
                        <p className="text-gray-300 text-lg max-w-xl">
                           Whether you want a relaxing beach holiday or an adventurous mountain trek, we are here to make it happen.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                             <Link href="/tours" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-primary text-primary-foreground text-base font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                                View Packages & Pricing
                            </Link>
                            <Link href="/contact" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-transparent border-2 border-white text-white text-base font-bold hover:bg-white hover:text-foreground transition-colors">
                                Consult an Expert
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
