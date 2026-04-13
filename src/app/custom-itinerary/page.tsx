import type { Metadata } from 'next';
import { CustomItineraryForm } from '@/components/CustomItineraryForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { tourPackages } from '@/lib/data';


export const metadata: Metadata = {
  title: 'Create Your Custom Itinerary',
  description: 'Design your perfect Sri Lankan holiday. Fill out our form with your travel preferences, and our experts will craft a personalized itinerary just for you.',
};

const allDestinations = [...new Set(tourPackages.flatMap(tour => tour.destinations))];

export default function CustomItineraryPage() {
  return (
    <div className="bg-secondary/50">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Build Your Dream Trip</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Tell us what you're looking for, and we'll create a personalized tour itinerary that matches your dreams.
                </p>
            </div>
            <Card className="shadow-xl">
                <CardHeader>
                    <CardTitle className="text-2xl">Your Travel Preferences</CardTitle>
                    <CardDescription>Fill in the details below to get started.</CardDescription>
                </CardHeader>
                <CardContent>
                    <CustomItineraryForm destinations={allDestinations} />
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
