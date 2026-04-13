
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqs } from '@/lib/data';
import { ChevronDown } from 'lucide-react';

export function FaqSection() {
  const faqData = [
    {
      question: 'What is the best time to visit Sri Lanka?',
      answer: 'The best time to visit Sri Lanka depends on where you want to go. For the west and south coasts (Colombo, Galle), December to March is ideal. For the east coast (Trincomalee, Arugam Bay), May to September offers the best weather. Sri Lanka is truly a year-round destination!',
    },
    {
      question: 'Do I need a visa to enter Sri Lanka?',
      answer: "Yes, most visitors need a visa. You can easily apply for an Electronic Travel Authorization (ETA) online before your arrival. It's a quick process that typically gets approved within 24-48 hours.",
    },
    {
      question: 'Is it safe to travel in Sri Lanka?',
      answer: 'Absolutely. Sri Lanka is known for its incredible hospitality and friendly locals. Like any travel destination, standard precautions are advised, but it is generally considered very safe for solo travelers, families, and groups alike.',
    },
    {
      question: 'How do I book a tour?',
      answer: 'You can book directly through our website by selecting a package, or chat with us on WhatsApp for a custom itinerary. We require a small deposit to secure your booking, with the balance payable upon arrival.',
    },
  ]
  return (
    <section className="relative py-16 sm:py-24" id="faq">
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute top-40 -right-10 w-72 h-72 bg-accent/10 dark:bg-accent/20 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <span className="text-accent dark:text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Help Center</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Have questions? We have answers. If you can't find what you're looking for, feel free to contact us anytime.
            </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                value={`item-${index}`} 
                key={index}
                className="group bg-card dark:bg-card-dark rounded-xl shadow-sm hover:shadow-md transition-all border border-border/50 overflow-hidden"
              >
                <AccordionTrigger className="w-full px-6 py-5 text-left flex justify-between items-center group-hover:text-accent dark:group-hover:text-primary transition-colors font-semibold text-base sm:text-lg no-underline">
                  {faq.question}
                  <ChevronDown className="h-6 w-6 shrink-0 transition-transform duration-300 ease-in-out text-muted-foreground group-hover:text-accent dark:group-hover:text-primary" />
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed pt-4 text-sm sm:text-base">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
