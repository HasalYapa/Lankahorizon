'use client';
import './destination-styles.css';
import { CustomItineraryForm } from '@/components/CustomItineraryForm';
import { tourPackages } from '@/lib/data';
import { useEffect } from 'react';

const allDestinations = [...new Set(tourPackages.flatMap(tour => tour.destinations))];


export default function DestinationsPage() {
    useEffect(() => {
        // This is a workaround to apply dark mode based on system preference
        // since we are not using the full app layout with theme provider.
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (mediaQuery.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };
        handleChange();
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <div className="destinations-page-container">
            <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
                {/* Left Side: Visual (Sticky on Desktop) */}
                <div className="w-full lg:w-5/12 xl:w-1/2 lg:h-[calc(100vh-80px)] lg:sticky lg:top-[80px] relative bg-gray-200 overflow-hidden group">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 hero-bg-image"
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-black/20"></div>
                    <div className="absolute bottom-0 left-0 p-8 lg:p-12 text-white">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/30">
                                Trusted by 5000+ Travelers
                            </span>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-4">
                            Experience the <span className="text-dest-primary">Untouched</span> Beauty of Ceylon.
                        </h1>
                        <p className="text-lg text-gray-200 max-w-md hidden lg:block">
                            From the golden beaches of Mirissa to the misty hills of Ella, let us guide you through
                            paradise.
                        </p>
                    </div>
                </div>

                {/* Right Side: Form (Scrollable) */}
                <div className="w-full lg:w-7/12 xl:w-1/2 flex flex-col items-center p-4 py-12 sm:p-12 lg:p-16 xl:p-24 overflow-y-auto">
                    <div className="w-full max-w-[600px] flex flex-col gap-8">
                        {/* Header */}
                        <div className="flex flex-col gap-2 mt-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-text-light tracking-tight">
                                Design Your Itinerary
                            </h2>
                            <p className="text-gray-500 text-base sm:text-lg">
                                Tell us what you love, and our local experts will craft the perfect itinerary just for
                                you.
                            </p>
                        </div>
                        {/* Form */}
                        <CustomItineraryForm destinations={allDestinations} />
                    </div>
                </div>
            </div>
        </div>
    );
}
