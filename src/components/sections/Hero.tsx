
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getImage } from '@/lib/placeholder-images';
import { WHATSAPP_LINK } from '@/lib/constants';
import { MessageSquare, Star } from 'lucide-react';

export function Hero() {
  const heroImage = getImage('hero-background');
  const nineArchImage = getImage('nine-arch-bridge-card');
  const avatar1 = getImage('testimonial-avatar-1');
  const avatar2 = getImage('testimonial-avatar-2');
  const avatar3 = getImage('testimonial-avatar-3');
  const message = encodeURIComponent("Hello LankaHorizon, I'm interested in planning a trip to Sri Lanka. Can you help me?");

  return (
    <section className="relative pt-20 min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-background dark:to-background-dark z-10"></div>
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
                data-ai-placeholder="true"
            />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 flex flex-col items-start text-left gap-6 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        #1 Travel Agency in Sri Lanka
                    </div>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.1] tracking-tight drop-shadow-lg">
                        Explore <span className="text-primary">Sri Lanka</span> with Locals
                    </h1>
                    <p className="text-lg sm:text-xl text-white/90 font-medium max-w-lg leading-relaxed drop-shadow-md">
                        Experience the pearl of the Indian Ocean. Customized tours, trusted local guides, and the best prices guaranteed.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
                        <Button size="lg" asChild className="h-14 px-8 text-base font-bold rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgba(19,236,37,0.39)] hover:shadow-[0_6px_20px_rgba(19,236,37,0.23)] hover:-translate-y-1 w-full sm:w-auto text-ocean-blue">
                            <Link href={`${WHATSAPP_LINK}?text=${message}`} target="_blank" rel="noopener noreferrer">
                                <MessageSquare className="mr-3" />
                                Plan on WhatsApp
                            </Link>
                        </Button>
                        <Button size="lg" asChild variant="outline" className="h-14 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border-white/30 text-white text-base font-bold rounded-full transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
                            <Link href="/tours">
                                View Packages
                            </Link>
                        </Button>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6 mt-8 pt-8 border-t border-white/20 w-full">
                        <div className="flex -space-x-3">
                            <Image alt="Happy traveler face" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white object-cover" src={avatar1.imageUrl} data-ai-hint={avatar1.imageHint} data-ai-placeholder="true"/>
                            <Image alt="Happy traveler face" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white object-cover" src={avatar2.imageUrl} data-ai-hint={avatar2.imageHint} data-ai-placeholder="true"/>
                            <Image alt="Happy traveler face" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white object-cover" src={avatar3.imageUrl} data-ai-hint={avatar3.imageHint} data-ai-placeholder="true"/>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1 text-primary">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                            <span className="text-white text-sm font-medium">1,000+ Happy Travelers</span>
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex w-1/2 justify-center relative">
                    <div className="relative w-80 h-96 rounded-[2.5rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white/20">
                        <Image 
                            className="w-full h-full object-cover" 
                            alt={nineArchImage.description}
                            src={nineArchImage.imageUrl}
                            fill
                            data-ai-hint={nineArchImage.imageHint}
                            data-ai-placeholder="true"
                        />
                        <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-bold text-ocean-blue uppercase tracking-wider">Must Visit</span>
                                <span className="text-xs font-bold text-primary flex items-center gap-1">
                                    4.9 <Star className="w-3 h-3 fill-current" />
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 leading-tight">Ella, Nine Arch Bridge</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
