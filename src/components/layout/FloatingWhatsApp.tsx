import Link from 'next/link';
import { WHATSAPP_LINK } from '@/lib/constants';
import { MessageSquare } from 'lucide-react';

export function FloatingWhatsApp() {
  const message = encodeURIComponent("Hello LankaHorizon, I'd like to plan a trip to Sri Lanka!");

  return (
    <div className="fixed bottom-6 right-6 z-50">
        <Link
            href={`${WHATSAPP_LINK}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 h-14 pl-4 pr-6 bg-primary text-ocean-blue rounded-full shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
            <MessageSquare className="w-8 h-8" />
            <div className="flex flex-col items-start text-xs font-bold leading-tight">
                <span>Chat on</span>
                <span className="text-sm">WhatsApp</span>
            </div>
        </Link>
    </div>
  );
}
