
'use client';

import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { FeaturedTours } from '@/components/sections/FeaturedTours';
import { DestinationHighlights } from '@/components/sections/DestinationHighlights';
import { Testimonials } from '@/components/sections/Testimonials';
import { FaqSection } from '@/components/sections/FaqSection';
import { Cta } from '@/components/sections/Cta';
import { tourPackages } from '@/lib/data';
import { ReactLenis } from 'lenis/react';

const destinations = [
  { name: 'Kandy to Ella', description: 'Experience one of the world\'s most scenic train journeys.', imageId: 'kandy-ella-train', shortDesc: 'Scenic Train Ride' },
  { name: 'Mirissa', description: 'Relax on golden sands and spot majestic blue whales.', imageId: 'mirissa-beach', shortDesc: 'South Coast Beaches' },
  { name: 'Yala', description: 'Embark on a thrilling safari to see leopards, elephants, and more.', imageId: 'yala-safari', shortDesc: 'Safari Adventure' },
];

export default function Home() {
  return (
    <ReactLenis root>
      <main>
        <article>
          <section className="sticky top-0">
            <Hero />
          </section>
          <section className="sticky top-0 bg-background">
             <Features />
          </section>
          <section className="sticky top-0 bg-background">
            <FeaturedTours />
          </section>
          <section className="sticky top-0 bg-background">
             <DestinationHighlights destinations={destinations} />
          </section>
          <section className="sticky top-0 bg-background">
            <Testimonials />
          </section>
          <section className="sticky top-0 bg-background">
             <FaqSection />
          </section>
          <section className="sticky top-0 bg-background">
              <Cta />
          </section>
        </article>
      </main>
    </ReactLenis>
  );
}
