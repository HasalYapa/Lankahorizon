
import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin, Send, Route, MessageSquare } from 'lucide-react';
import type { TourPackage } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getImage } from '@/lib/placeholder-images';
import { WHATSAPP_LINK } from '@/lib/constants';

interface TourCardProps {
  tour: TourPackage;
}

export function TourCard({ tour }: TourCardProps) {
  const tourImage = getImage(tour.image);
  const message = encodeURIComponent(`Hello LankaHorizon, I want to book the "${tour.name}" package.`);
  
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'Luxury':
        return 'default';
      case 'Adventure':
        return 'secondary';
      case 'Family':
        return 'destructive';
      case 'Best Seller':
      default:
        return 'default';
    }
  };


  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-green-100 transition-all duration-300 border border-slate-100 flex flex-col h-full">
        <div className="relative h-60 overflow-hidden">
            <div className="absolute top-4 left-4 z-10 flex gap-2">
                <Badge variant={getBadgeVariant(tour.type)} className="text-xs font-bold px-3 py-1 rounded-full shadow-sm">{tour.type}</Badge>
            </div>
            <Image 
                src={tourImage.imageUrl} 
                alt={tour.name} 
                layout='fill'
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                data-ai-hint={tourImage.imageHint}
            />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 right-4 text-white font-bold text-xl drop-shadow-md">
                ${tour.price} <span className="text-sm font-normal opacity-90">/ person</span>
            </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">{tour.name}</h3>
            <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <div className="flex items-center gap-1">
                    <Clock className="text-green-600 text-lg" />
                    <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                    <MapPin className="text-green-600 text-lg" />
                    <span>{tour.destinations.length} Locations</span>
                </div>
            </div>
            <div className="mb-4">
                <div className="flex items-start gap-2 mb-2">
                    <Route className="text-slate-400 text-lg mt-0.5" />
                    <p className="text-sm font-medium text-slate-700">{tour.destinations.join(' → ')}</p>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                    {tour.description}
                </p>
            </div>
            <div className="mt-auto pt-4 border-t border-slate-100">
                <Button asChild className="flex w-full items-center justify-center gap-2 rounded-full h-12 bg-slate-900 text-white text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-colors group/btn">
                    <Link href={`/tours/${tour.id}`}>
                        <MessageSquare className="text-lg" />
                        Full Itinerary
                    </Link>
                </Button>
            </div>
        </div>
    </div>
  );
}
