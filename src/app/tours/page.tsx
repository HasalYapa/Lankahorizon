
'use client';
import { useState } from 'react';
import type { Metadata } from 'next';
import { tourPackages } from '@/lib/data';
import { TourCard } from '@/components/TourCard';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuCheckboxItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Clock, Map, CreditCard, Users, Route, MessageSquare, Calendar, ShieldCheck, User, ThumbsUp, Tag, ChevronDown } from 'lucide-react';
import { getImage } from '@/lib/placeholder-images';
import { WHATSAPP_LINK } from '@/lib/constants';
import type { TourPackage } from '@/lib/types';


export default function ToursPage() {
  const heroImage = getImage('tours-hero-bg');
  const [filteredTours, setFilteredTours] = useState<TourPackage[]>(tourPackages);
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});
  
  const handleSort = (sortOption: string) => {
    let sortedTours = [...filteredTours];
    switch (sortOption) {
      case 'price-low-high':
        sortedTours.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        sortedTours.sort((a, b) => b.price - a.price);
        break;
      case 'duration-shortest':
        sortedTours.sort((a, b) => a.durationInDays - b.durationInDays);
        break;
      default:
        sortedTours = tourPackages; // Reset to default order
    }
    setFilteredTours(sortedTours);
  };
  
  const allDestinations = [...new Set(tourPackages.flatMap(tour => tour.destinations))];
  const allTypes = [...new Set(tourPackages.map(tour => tour.type))];

  const handleFilterChange = (filterType: string, value: any) => {
    const updatedFilters = { ...activeFilters };
    if (filterType === 'duration' || filterType === 'budget') {
      updatedFilters[filterType] = value;
    } else {
      if (updatedFilters[filterType]) {
        if (updatedFilters[filterType].includes(value)) {
          updatedFilters[filterType] = updatedFilters[filterType].filter((v: any) => v !== value);
        } else {
          updatedFilters[filterType].push(value);
        }
      } else {
        updatedFilters[filterType] = [value];
      }
    }
    
    if (updatedFilters[filterType]?.length === 0) {
      delete updatedFilters[filterType];
    }
    
    setActiveFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  const applyFilters = (filters: Record<string, any>) => {
    let tours = [...tourPackages];

    if (filters.duration) {
      tours = tours.filter(tour => {
        if(filters.duration === 'short') return tour.durationInDays <= 5;
        if(filters.duration === 'medium') return tour.durationInDays > 5 && tour.durationInDays <= 10;
        if(filters.duration === 'long') return tour.durationInDays > 10;
        return true;
      });
    }

    if (filters.destinations && filters.destinations.length > 0) {
      tours = tours.filter(tour => tour.destinations.some(dest => filters.destinations.includes(dest)));
    }

    if (filters.budget) {
      tours = tours.filter(tour => {
        if (filters.budget === 'low') return tour.price < 500;
        if (filters.budget === 'medium') return tour.price >= 500 && tour.price < 1000;
        if (filters.budget === 'high') return tour.price >= 1000;
        return true;
      });
    }

    if (filters.type && filters.type.length > 0) {
      tours = tours.filter(tour => filters.type.includes(tour.type));
    }

    setFilteredTours(tours);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-20 sm:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900/90 z-10"></div>
          <Image
            alt={heroImage.description}
            src={heroImage.imageUrl}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        </div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-primary font-medium text-xs uppercase tracking-wider mb-4 mt-8 sm:mt-0">
            Best Travel Agency 2024
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Discover the Pearl of <br className="hidden sm:block" />the Indian Ocean
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Curated tours tailored for your perfect Sri Lankan getaway. From misty mountains to golden beaches, experience it all with our premium packages.
          </p>
          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white text-slate-800 hover:bg-primary hover:text-primary-foreground transition-all shadow-lg font-medium text-sm">
                  <Clock className="text-[20px] text-slate-400 group-hover:text-primary-foreground" />
                  Duration
                  <ChevronDown className="text-[18px]" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Filter by Duration</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked={activeFilters.duration === 'short'} onCheckedChange={() => handleFilterChange('duration', 'short')}>Short (1-5 days)</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={activeFilters.duration === 'medium'} onCheckedChange={() => handleFilterChange('duration', 'medium')}>Medium (6-10 days)</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={activeFilters.duration === 'long'} onCheckedChange={() => handleFilterChange('duration', 'long')}>Long (10+ days)</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all font-medium text-sm">
                  <Map className="text-[20px]" />
                  Destinations
                  <ChevronDown className="text-[18px]" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Filter by Destinations</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {allDestinations.map(dest => (
                  <DropdownMenuCheckboxItem key={dest} checked={activeFilters.destinations?.includes(dest)} onCheckedChange={() => handleFilterChange('destinations', dest)}>{dest}</DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all font-medium text-sm">
                  <CreditCard className="text-[20px]" />
                  Budget
                  <ChevronDown className="text-[18px]" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Filter by Budget</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked={activeFilters.budget === 'low'} onCheckedChange={() => handleFilterChange('budget', 'low')}>Under $500</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={activeFilters.budget === 'medium'} onCheckedChange={() => handleFilterChange('budget', 'medium')}>$500 - $1000</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={activeFilters.budget === 'high'} onCheckedChange={() => handleFilterChange('budget', 'high')}>Over $1000</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all font-medium text-sm">
                  <Users className="text-[20px]" />
                  Type
                  <ChevronDown className="text-[18px]" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Filter by Type</DropdownMenuLabel>
                <DropdownMenuSeparator />
                 {allTypes.map(type => (
                  <DropdownMenuCheckboxItem key={type} checked={activeFilters.type?.includes(type)} onCheckedChange={() => handleFilterChange('type', type)}>{type}</DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </section>
      
      {/* Stats / Trust Signals */}
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-slate-100">
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="text-green-600 text-3xl" />
              <p className="text-sm font-semibold text-slate-800">Safe &amp; Secure</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <User className="text-green-600 text-3xl" />
              <p className="text-sm font-semibold text-slate-800">24/7 Support</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ThumbsUp className="text-green-600 text-3xl" />
              <p className="text-sm font-semibold text-slate-800">Top Rated</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Tag className="text-green-600 text-3xl" />
              <p className="text-sm font-semibold text-slate-800">Best Price Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Tour Grid */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Popular Packages</h2>
              <p className="text-slate-500">Explore handpicked adventures tailored for every traveler.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-600">Sort by:</span>
              <Select onValueChange={handleSort}>
                <SelectTrigger className="bg-white border-none text-sm font-semibold text-slate-900 rounded-lg focus:ring-2 focus:ring-primary/50 cursor-pointer shadow-sm py-2 px-3 w-auto">
                  <SelectValue placeholder="Recommended" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                  <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                  <SelectItem value="duration-shortest">Duration: Shortest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.length > 0 ? (
                filteredTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))
            ) : (
              <div className="col-span-full text-center py-16">
                <h3 className="text-2xl font-bold text-slate-700">No Tours Found</h3>
                <p className="text-slate-500 mt-2">Try adjusting your filters or check back later.</p>
                <Button onClick={() => { setActiveFilters({}); setFilteredTours(tourPackages); }} className="mt-6">Clear Filters</Button>
              </div>
            )}
          </div>
          {/* Load More */}
          <div className="mt-16 flex justify-center">
            <Button variant="outline" className="flex items-center gap-2 px-8 py-3 rounded-full border border-slate-200 text-slate-600 font-semibold hover:border-green-400 hover:text-green-600 transition-all bg-white hover:shadow-lg">
              Load More Packages
              <ChevronDown />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-900/20 to-transparent pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-primary/10 border border-primary/20 rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Can't decide where to go?</h2>
              <p className="text-slate-300 text-lg">Our travel experts are ready to craft a custom itinerary just for you. Get a free consultation today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Button asChild>
                    <Link href="/destinations" className="bg-primary text-primary-foreground hover:bg-green-400 px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg shadow-green-900/20 flex items-center justify-center gap-2">
                        <Calendar />
                        Customize My Trip
                    </Link>
                </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
