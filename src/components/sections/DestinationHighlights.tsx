
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight, Train, Droplet, Trees } from 'lucide-react';
import { getImage } from '@/lib/placeholder-images';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

interface Destination {
  name: string;
  description: string;
  imageId: string;
  shortDesc: string;
}

interface DestinationHighlightsProps {
  destinations: Destination[];
}

const iconMap: { [key: string]: React.ElementType } = {
  'Ancient Rock Fortress': MapPin,
  'Scenic Train Ride': Train,
  'South Coast Beaches': Droplet,
  'Safari Adventure': Trees,
};


export function DestinationHighlights({ destinations }: DestinationHighlightsProps) {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-[#0c1a0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                    <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Destinations</span>
                    <h2 className="text-3xl md:text-4xl font-black text-ocean-blue dark:text-white tracking-tight">Popular Getaways</h2>
                </div>
                <Link href="/tours" className="inline-flex items-center gap-2 font-bold text-ocean-blue dark:text-primary hover:underline">
                    View all places <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {destinations.map((dest, index) => {
                    const image = getImage(dest.imageId);
                    const Icon = iconMap[dest.shortDesc] || MapPin;
                    return (
                      <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card className="rounded-2xl overflow-hidden group border-0 shadow-none">
                            <CardContent className="relative flex aspect-[4/5] items-center justify-center p-0">
                              <Image
                                src={image.imageUrl}
                                alt={dest.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                data-ai-hint={image.imageHint}
                                data-ai-placeholder="true"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transition-all duration-300 transform-gpu translate-y-4 group-hover:translate-y-0">
                                <div className="flex items-center gap-2">
                                  <div className="bg-primary/20 backdrop-blur-sm p-2 rounded-full border border-white/20">
                                    <Icon className="w-5 h-5 text-primary" />
                                  </div>
                                  <div>
                                    <h3 className="text-xl font-bold">{dest.name}</h3>
                                    <p className="text-sm text-white/90">{dest.shortDesc}</p>
                                  </div>
                                </div>
                                <p className="mt-4 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-w-xs">
                                  {dest.description.split('. ')[0]}.
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    )
                })}
              </CarouselContent>
              <div className='hidden md:block'>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 " />
                <CarouselNext className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2" />
              </div>
            </Carousel>
        </div>
    </section>
  );
}
