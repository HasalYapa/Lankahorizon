
import { Map, Users, Heart, Sprout, Handshake, Gem } from 'lucide-react';

const features = [
    {
        icon: Map,
        title: "Customized Tours",
        description: "Tailor-made itineraries that fit your style, schedule, and budget perfectly. Your dream trip, your way.",
    },
    {
        icon: Users,
        title: "Trusted Local Guides",
        description: "Explore with friendly locals who know the hidden gems and stories of the land. Authentic connections guaranteed.",
    },
    {
        icon: Gem,
        title: "Best Prices",
        description: "Experience luxury and adventure at unbeatable rates with no hidden costs. Value for every cent you spend.",
    }
]

export function Features() {
  return (
    <section className="py-16 sm:py-24 bg-background dark:bg-background-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ocean-blue dark:text-white mb-4 sm:mb-6 tracking-tight">Why Choose LankaHorizon?</h2>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">We don't just plan tours; we craft unforgettable experiences tailored just for you.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="group bg-white dark:bg-[#1a2c1d] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:shadow-primary/20 transition-all duration-300 border border-transparent hover:border-primary/40 relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-ocean-light dark:bg-white/5 rounded-full blur-3xl translate-x-10 -translate-y-10 group-hover:bg-primary/20 transition-colors duration-500"></div>
                       <div className="relative z-10">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-ocean-light dark:bg-white/5 rounded-2xl flex items-center justify-center text-ocean-blue dark:text-primary mb-6 group-hover:bg-primary group-hover:text-ocean-blue transition-colors duration-300 shadow-sm">
                                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
