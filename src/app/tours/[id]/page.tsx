import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { tourPackages } from '@/lib/data';
import { getImage } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, MessageSquare, CheckCircle2, XCircle, ChevronLeft, Map, Calendar, Sun, Moon, Coffee } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';

interface TourPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TourPage(props: TourPageProps) {
  const params = await props.params;
  const tour = tourPackages.find((t) => t.id === params.id);

  if (!tour) {
    notFound();
  }

  const tourImage = getImage(tour.image);
  const message = encodeURIComponent(`Hello LankaHorizon, I want to book the "${tour.name}" package.`);

  // Dummy included/excluded for demo purposes
  const included = [
    "Accommodation in selected hotels",
    "Daily breakfast and dinner",
    "Private air-conditioned vehicle",
    "English speaking chauffeur guide",
    "All government taxes and service charges"
  ];

  const excluded = [
    "International flights and visa fees",
    "Entrance fees to attractions",
    "Lunch and extra beverages",
    "Personal expenses and tips"
  ];

  // Dummy itinerary generator
  const itinerary = Array.from({ length: tour.durationInDays }).map((_, i) => {
    const destIndex = Math.min(Math.floor((i / tour.durationInDays) * tour.destinations.length), tour.destinations.length - 1);
    const destination = tour.destinations[destIndex];
    
    let title = `Explore ${destination}`;
    let icon = <Sun className="w-5 h-5 text-yellow-500" />;
    
    if (i === 0) {
      title = `Arrival & Transfer to ${destination}`;
      icon = <MapPin className="w-5 h-5 text-blue-500" />;
    } else if (i === tour.durationInDays - 1) {
      title = `Departure from ${destination}`;
      icon = <Moon className="w-5 h-5 text-indigo-500" />;
    }

    return {
      day: i + 1,
      title,
      destination,
      description: `Embark on an exciting day in ${destination}. Experience the local culture, visit iconic landmarks, and enjoy the breathtaking landscapes that make this location unique. Wrap up the day relaxing at your premium accommodation.`,
      icon
    };
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full mt-20">
        <Image
          src={tourImage.imageUrl}
          alt={tour.name}
          fill
          className="object-cover"
          priority
          data-ai-hint={tourImage.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        
        <div className="absolute top-6 left-6 z-20">
            <Button asChild variant="outline" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-slate-900 rounded-full pl-3 shadow-lg">
                <Link href="/tours">
                    <ChevronLeft className="mr-2 h-4 w-4" /> Back to Tours
                </Link>
            </Button>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <Badge className="bg-primary/90 text-white hover:bg-primary mb-4 text-sm px-3 py-1 border-none shadow-lg backdrop-blur-md">
                {tour.type}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight drop-shadow-xl">
                {tour.name}
              </h1>
              <p className="text-lg md:text-xl text-slate-200 font-light drop-shadow-md">
                {tour.description}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl flex flex-col items-center min-w-[250px]">
              <span className="text-slate-300 text-sm font-medium uppercase tracking-wider mb-1">Starting from</span>
              <div className="text-4xl font-black text-white mb-4">
                ${tour.price} <span className="text-lg font-normal text-slate-300">/pp</span>
              </div>
              <Button asChild className="w-full bg-primary hover:bg-green-500 text-slate-900 text-base font-bold shadow-lg shadow-primary/30 rounded-full h-12 transition-all">
                <Link href={`${WHATSAPP_LINK}?text=${message}`} target="_blank">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Quick Facts */}
            <section>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col items-center text-center justify-center gap-2">
                  <Clock className="w-8 h-8 text-primary" />
                  <div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Duration</div>
                    <div className="font-bold text-slate-800">{tour.duration}</div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col items-center text-center justify-center gap-2">
                  <Map className="w-8 h-8 text-primary" />
                  <div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Destinations</div>
                    <div className="font-bold text-slate-800">{tour.destinations.length} Stops</div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col items-center text-center justify-center gap-2">
                  <MapPin className="w-8 h-8 text-primary" />
                  <div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Start/End</div>
                    <div className="font-bold text-slate-800">Colombo</div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col items-center text-center justify-center gap-2">
                  <Calendar className="w-8 h-8 text-primary" />
                  <div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Availability</div>
                    <div className="font-bold text-slate-800">Daily</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Travel Route */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <Map className="w-8 h-8 text-primary" />
                    <h2 className="text-3xl font-bold text-slate-900">Tour Route</h2>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                    <div className="flex flex-wrap items-center gap-2 text-lg font-medium text-slate-700">
                        <span className="text-primary font-bold">Colombo</span>
                        {tour.destinations.map((dest, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <span className="text-slate-300">→</span>
                                <span>{dest}</span>
                            </div>
                        ))}
                        <span className="text-slate-300">→</span>
                        <span className="text-primary font-bold">Colombo</span>
                    </div>
                </div>
            </section>

            {/* Itinerary */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                  <Calendar className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold text-slate-900">Your Daily Itinerary</h2>
              </div>
              
              <div className="space-y-6">
                {itinerary.map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-0">
                    {/* Timeline Line (Mobile) */}
                    <div className="md:hidden absolute left-[15px] top-10 bottom-0 w-0.5 bg-slate-200"></div>
                    
                    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6">
                      
                      {/* Day Badge */}
                      <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
                        <div className="bg-primary/10 text-primary font-black text-xl w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner relative z-10">
                          D{item.day}
                        </div>
                        <div className="md:hidden font-bold text-slate-900 text-lg">Day {item.day}</div>
                      </div>

                      {/* Timeline Line (Desktop Connectors) - Optional enhancement, skip for simplicity */}

                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                        </div>
                        <p className="text-slate-500 leading-relaxed mb-4">
                          {item.description}
                        </p>
                        
                        <div className="inline-flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 border border-slate-100">
                           <MapPin className="w-4 h-4 text-primary" />
                           Overnight at {item.destination}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Inclusions / Exclusions */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 sticky top-28">
              <h3 className="text-xl font-bold text-slate-900 mb-6">What's Included</h3>
              <ul className="space-y-4 mb-8">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mb-6">What's NOT Included</h3>
              <ul className="space-y-4">
                {excluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <hr className="my-8 border-slate-100" />

              <div className="bg-slate-50 rounded-2xl p-6 text-center">
                 <h4 className="font-bold text-slate-900 mb-2">Need a custom plan?</h4>
                 <p className="text-sm text-slate-500 mb-4">We can tailor this itinerary perfectly to your needs.</p>
                 <Button asChild variant="outline" className="w-full bg-white rounded-full font-bold border-slate-200">
                    <Link href="/contact">Contact an Expert</Link>
                 </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
