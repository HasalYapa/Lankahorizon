
import Image from 'next/image';
import { testimonials } from '@/lib/data';
import { getImage } from '@/lib/placeholder-images';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-background dark:bg-background-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-ocean-blue/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                <span className="text-primary font-bold uppercase tracking-wider text-sm mb-3 block">Testimonials</span>
                <h2 className="text-3xl md:text-4xl font-black text-ocean-blue dark:text-white mb-4 sm:mb-6 tracking-tight">What Our Travelers Say</h2>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">Don't just take our word for it. Read what real travelers have to say about their journey with LankaHorizon.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => {
                     const avatarImage = getImage(testimonial.avatar);
                     return (
                        <div key={index} className="bg-white dark:bg-[#1a2c1d] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md relative hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-gray-800">
                            <div className={`absolute -top-5 right-8 w-12 h-12 rounded-full flex items-center justify-center text-ocean-blue shadow-lg ${index === 0 ? 'bg-primary' : 'bg-ocean-light dark:bg-white/10'}`}>
                                <Quote className="w-8 h-8" />
                            </div>
                            <div className="flex items-center gap-1 text-yellow-400 mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic mb-8 flex-grow">"{testimonial.message}"</p>
                            <div className="flex items-center gap-4 mt-auto">
                                <Image 
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30"
                                    src={avatarImage.imageUrl}
                                    width={48}
                                    height={48}
                                    data-ai-hint={avatarImage.imageHint}
                                    data-ai-placeholder="true"
                                    />
                                <div>
                                    <h4 className="font-bold text-ocean-blue dark:text-white">{testimonial.name}</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
  );
}
