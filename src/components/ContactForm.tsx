
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { WHATSAPP_LINK } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  country: z.string().min(2, { message: 'Please enter your country.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      country: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: FormValues) {
    const whatsappMessage = `
Hello LankaHorizon, I have a message from your website.

*From:* ${values.name} (${values.email})
*Country:* ${values.country}
*Subject:* ${values.subject}

*Message:*
${values.message}
    `.trim();

    const whatsappUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: 'Redirecting to WhatsApp!',
      description: 'Your message is ready to be sent.',
    });

    form.reset();
  }

  return (
    <>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black tracking-tight mb-3">Send a Message</h2>
        <p className="text-muted-foreground max-w-md mx-auto">Prefer email? Fill out the form below and our travel agents will get back to you within 24 hours.</p>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold ml-2 text-muted-foreground" htmlFor="name">Your Name</label>
          <Input id="name" placeholder="John Doe" {...form.register('name')} className="h-12 px-6 rounded-full" />
           {form.formState.errors.name && <p className="text-red-500 text-xs mt-1 ml-2">{form.formState.errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold ml-2 text-muted-foreground" htmlFor="email">Email Address</label>
          <Input id="email" placeholder="john@example.com" type="email" {...form.register('email')} className="h-12 px-6 rounded-full" />
           {form.formState.errors.email && <p className="text-red-500 text-xs mt-1 ml-2">{form.formState.errors.email.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold ml-2 text-muted-foreground" htmlFor="country">Country</label>
          <Input id="country" placeholder="e.g. Australia" {...form.register('country')} className="h-12 px-6 rounded-full" />
           {form.formState.errors.country && <p className="text-red-500 text-xs mt-1 ml-2">{form.formState.errors.country.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold ml-2 text-muted-foreground" htmlFor="subject">Subject</label>
          <Input id="subject" placeholder="Inquiry about..." {...form.register('subject')} className="h-12 px-6 rounded-full" />
           {form.formState.errors.subject && <p className="text-red-500 text-xs mt-1 ml-2">{form.formState.errors.subject.message}</p>}
        </div>
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-sm font-bold ml-2 text-muted-foreground" htmlFor="message">Message</label>
          <Textarea id="message" placeholder="Tell us about your travel plans..." rows={4} {...form.register('message')} className="p-6 rounded-3xl" />
           {form.formState.errors.message && <p className="text-red-500 text-xs mt-1 ml-2">{form.formState.errors.message.message}</p>}
        </div>
        <div className="md:col-span-2 flex justify-center mt-4">
          <Button type="submit" size="lg" className="px-8 h-12 rounded-full font-bold text-base transition-all transform hover:scale-105 shadow-lg">
            <span>Send Message</span>
            <Send className="text-lg" />
          </Button>
        </div>
      </form>
    </>
  );
}
