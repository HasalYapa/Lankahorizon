
import Link from 'next/link';
import { tourPackages } from '@/lib/data';
import { TourCard } from '@/components/TourCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function FeaturedTours() {
  const featured = tourPackages.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Popular Tours</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Embark on a curated journey with one of our best-selling packages.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/tours">
              View All Tours <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
