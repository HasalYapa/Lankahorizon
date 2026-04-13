
'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { WHATSAPP_LINK } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    country: z.string().min(2, { message: 'Please enter your country.' }),
    whatsapp: z.string().min(10, { message: 'Please enter a valid WhatsApp number.' }),
    arrivalDate: z.string().min(1, { message: 'Please select an arrival date.' }),
    departureDate: z.string().min(1, { message: 'Please select a departure date.' }),
    travelers: z.object({
        adults: z.number().min(1),
        kids: z.number().min(0),
    }),
    destinations: z.array(z.string()).min(1, { message: 'Please select at least one destination.' }),
    requests: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface CustomItineraryFormProps {
    destinations: string[];
}

export function CustomItineraryForm({ destinations }: CustomItineraryFormProps) {
    const { toast } = useToast();
    const [travelers, setTravelers] = useState({ adults: 2, kids: 0 });

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            country: '',
            whatsapp: '',
            arrivalDate: '',
            departureDate: '',
            travelers: { adults: 2, kids: 0 },
            destinations: [],
            requests: '',
        },
    });

    const handleTravelerChange = (type: 'adults' | 'kids', operation: 'increment' | 'decrement') => {
        setTravelers(prev => {
            const newValue = { ...prev };
            if (operation === 'increment') {
                newValue[type]++;
            } else {
                if (newValue[type] > (type === 'adults' ? 1 : 0)) {
                    newValue[type]--;
                }
            }
            form.setValue('travelers', newValue);
            return newValue;
        });
    };

    function onSubmit(values: FormValues) {
        const message = `
Hello LankaHorizon, I'd like to request a custom itinerary.

*Details:*
- *Name:* ${values.name}
- *Country:* ${values.country}
- *WhatsApp:* ${values.whatsapp}
- *Travel Dates:* ${values.arrivalDate} to ${values.departureDate}
- *Number of Travelers:* ${values.travelers.adults} Adults, ${values.travelers.kids} Kids
- *Preferred Destinations:* ${values.destinations.join(', ')}
- *Special Requests:* ${values.requests || 'None'}

Looking forward to hearing from you!
    `.trim();

        const whatsappUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        toast({
            title: 'Redirecting to WhatsApp!',
            description: 'Your custom trip details are ready to be sent.',
        });

        form.reset();
        setTravelers({ adults: 2, kids: 0 });
    }

    return (
        <form className="flex flex-col gap-8" onSubmit={form.handleSubmit(onSubmit)}>
            {/* Section: Personal Details */}
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2 pb-2 border-b border-input-border-light dark:border-input-border-dark">
                    <span className="material-symbols-outlined text-dest-primary">person</span>
                    <h3 className="font-bold text-lg">Personal Details</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="flex flex-col flex-1 gap-2">
                        <span className="text-sm font-medium text-text-light dark:text-gray-300">Full Name</span>
                        <Input {...form.register('name')} placeholder="John Doe" />
                        {form.formState.errors.name && <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>}
                    </label>
                    <label className="flex flex-col flex-1 gap-2">
                        <span className="text-sm font-medium text-text-light dark:text-gray-300">Home Country</span>
                        <Input {...form.register('country')} placeholder="United Kingdom" />
                        {form.formState.errors.country && <p className="text-red-500 text-xs mt-1">{form.formState.errors.country.message}</p>}
                    </label>
                </div>
                <label className="flex flex-col flex-1 gap-2">
                    <span className="text-sm font-medium text-text-light dark:text-gray-300">WhatsApp Number</span>
                    <div className="relative">
                        <Input {...form.register('whatsapp')} placeholder="e.g., +94 77 123 4567" type="tel" />
                    </div>
                     {form.formState.errors.whatsapp && <p className="text-red-500 text-xs mt-1">{form.formState.errors.whatsapp.message}</p>}
                </label>
            </div>

            {/* Section: Trip Details */}
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2 pb-2 border-b border-input-border-light dark:border-input-border-dark">
                    <span className="material-symbols-outlined text-dest-primary">flight_takeoff</span>
                    <h3 className="font-bold text-lg">Trip Details</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="flex flex-col flex-1 gap-2">
                        <span className="text-sm font-medium text-text-light dark:text-gray-300">Arrival Date</span>
                        <Input {...form.register('arrivalDate')} type="date" />
                         {form.formState.errors.arrivalDate && <p className="text-red-500 text-xs mt-1">{form.formState.errors.arrivalDate.message}</p>}
                    </label>
                    <label className="flex flex-col flex-1 gap-2">
                        <span className="text-sm font-medium text-text-light dark:text-gray-300">Departure Date</span>
                        <Input {...form.register('departureDate')} type="date" />
                        {form.formState.errors.departureDate && <p className="text-red-500 text-xs mt-1">{form.formState.errors.departureDate.message}</p>}
                    </label>
                </div>
                <label className="flex flex-col flex-1 gap-2">
                    <span className="text-sm font-medium text-text-light dark:text-gray-300">Number of Travelers</span>
                    <div className="flex items-center gap-4 bg-white dark:bg-input-bg-dark border border-input-border-light dark:border-input-border-dark rounded-xl p-2 h-14">
                        <button onClick={() => handleTravelerChange('adults', 'decrement')} className="size-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-300 transition-colors" type="button">
                            <span className="material-symbols-outlined">remove</span>
                        </button>
                        <span className="flex-1 text-center bg-transparent border-none focus:ring-0 text-text-light dark:text-white font-medium p-0">
                            {travelers.adults} Adults, {travelers.kids} Kids
                        </span>
                        <button onClick={() => handleTravelerChange('adults', 'increment')} className="size-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-300 transition-colors" type="button">
                            <span className="material-symbols-outlined">add</span>
                        </button>
                    </div>
                </label>
            </div>

            {/* Section: Destinations */}
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2 pb-2 border-b border-input-border-light dark:border-input-border-dark">
                    <span className="material-symbols-outlined text-dest-primary">map</span>
                    <h3 className="font-bold text-lg">Preferred Destinations</h3>
                </div>
                <Controller
                    control={form.control}
                    name="destinations"
                    render={({ field }) => (
                        <div className="flex flex-wrap gap-3">
                            {destinations.map(dest => {
                                const isSelected = field.value.includes(dest);
                                return (
                                    <button
                                        key={dest}
                                        type="button"
                                        onClick={() => {
                                            const newValue = isSelected
                                                ? field.value.filter(d => d !== dest)
                                                : [...field.value, dest];
                                            field.onChange(newValue);
                                        }}
                                        className={`group flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                                            isSelected
                                                ? 'border-dest-primary bg-primary/10 dark:bg-primary/20 text-text-light dark:text-white'
                                                : 'border-input-border-light dark:border-input-border-dark bg-white dark:bg-input-bg-dark hover:border-primary/50 text-text-light dark:text-gray-300'
                                        }`}
                                    >
                                        <span className={`text-sm ${isSelected ? 'font-bold' : 'font-medium'}`}>{dest}</span>
                                        {isSelected && <span className="material-symbols-outlined text-[16px] text-dest-primary">check</span>}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                />
                 {form.formState.errors.destinations && <p className="text-red-500 text-xs mt-1">{form.formState.errors.destinations.message}</p>}
            </div>
            
            {/* Section: Special Requests */}
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2 pb-2 border-b border-input-border-light dark:border-input-border-dark">
                    <span className="material-symbols-outlined text-dest-primary">edit_note</span>
                    <h3 className="font-bold text-lg">Special Requests</h3>
                </div>
                <label className="flex flex-col flex-1 gap-2">
                    <Textarea {...form.register('requests')} placeholder="E.g., We are vegetarians, interested in hiking, need a luxury van..." />
                </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex flex-col gap-4">
                <button
                    className="w-full h-14 rounded-full bg-dest-primary hover:bg-[#0fd620] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20 group"
                    type="submit"
                >
                    <svg className="w-6 h-6 fill-[#111812]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
                    <span className="text-[#111812] text-lg font-bold">Start Chat on WhatsApp</span>
                </button>
                <div className="flex justify-center gap-6 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-dest-primary">verified_user</span>
                        <span>24/7 Support</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-dest-primary">local_police</span>
                        <span>Local Experts</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-dest-primary">thumb_up</span>
                        <span>No Hidden Fees</span>
                    </div>
                </div>
            </div>
        </form>
    );
}

    