import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getImage } from '@/lib/placeholder-images';
import { WHATSAPP_LINK } from '@/lib/constants';
import { Trees } from 'lucide-react';

export function Cta() {
  const ctaImage = getImage('cta-background');
  const message = encodeURIComponent("Hello LankaHorizon, I'm ready for my Sri Lankan Adventure!");

  return (
    <section className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl my-16 sm:my-24 container mx-auto">
        <div className="absolute inset-0 z-0">
            <Image
                alt="A lush, green tropical forest in Sri Lanka with a river flowing through it."
                src="https://images.unsplash.com/photo-1584603327369-d41a627d5fcf?q=80&w=2670&auto=format&fit=crop"
                fill
                className="object-cover object-center transform hover:scale-105 transition-transform duration-[20s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 dark:from-black/90 dark:via-black/70 dark:to-black/50"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 sm:py-24 md:py-32 text-center">
            <div className="mb-6 inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
                <Trees className="text-primary h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6 drop-shadow-lg tracking-tight">
                Ready for your <br className="hidden sm:block" />
                <span className="text-primary italic">Sri Lankan</span> Adventure?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mb-10 leading-relaxed drop-shadow-md">
                Contact us today to plan your perfect trip. We are available 24/7 on WhatsApp to assist you with personalized itineraries and instant bookings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button size="lg" asChild className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-primary text-white font-bold text-base sm:text-lg rounded-full overflow-hidden shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all transform hover:-translate-y-1 h-auto">
                    <Link href={`${WHATSAPP_LINK}?text=${message}`} target="_blank" rel="noopener noreferrer">
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
                        <svg className="w-6 h-6 mr-3 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
                        Start Chat on WhatsApp
                    </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-medium text-base sm:text-lg rounded-full backdrop-blur-sm transition-all hover:bg-white/10 h-auto">
                    <Link href="/tours">View Packages</Link>
                </Button>
            </div>
             <p className="mt-6 text-sm text-gray-400 font-light">
                Typically replies within 5 minutes
            </p>
        </div>
    </section>
  );
}
