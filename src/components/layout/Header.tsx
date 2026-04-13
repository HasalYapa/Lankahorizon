'use client';

import Link from 'next/link';
import { Menu, Compass, MessageSquare } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { COMPANY_NAME, NAV_ITEMS } from '@/lib/constants';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center cursor-pointer gap-2">
              <Image 
                src="/logo.png" 
                alt={COMPANY_NAME} 
                width={200} 
                height={60} 
                className="h-14 w-auto object-contain"
                priority
              />
              <Image 
                src="/logo2.png" 
                alt="Secondary Logo" 
                width={150} 
                height={60} 
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-semibold text-slate-600 hover:text-ocean-blue dark:text-slate-300 dark:hover:text-primary transition-colors',
                    pathname === item.href && 'text-primary dark:text-primary'
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex">
                <Button asChild className="group flex items-center justify-center h-12 px-6 bg-primary hover:bg-green-400 text-ocean-blue text-sm font-bold rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgba(19,236,37,0.39)] hover:shadow-[0_6px_20px_rgba(19,236,37,0.23)] hover:-translate-y-0.5">
                    <Link href="/destinations">
                        <span className="mr-2">Plan Trip</span>
                        <MessageSquare className="w-5 h-5" />
                    </Link>
                </Button>
            </div>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden -mr-2">
                    <Button variant="ghost" size="icon" className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="flex flex-col gap-6 pt-6">
                        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                            <Image 
                                src="/logo.png" 
                                alt={COMPANY_NAME} 
                                width={150} 
                                height={45} 
                                className="h-10 w-auto object-contain"
                            />
                            <Image 
                                src="/logo2.png" 
                                alt="Secondary Logo" 
                                width={100} 
                                height={45} 
                                className="h-8 w-auto object-contain"
                            />
                        </Link>
                        <nav className="flex flex-col gap-4">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    'text-lg font-medium transition-colors hover:text-primary',
                                    pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                                )}
                            >
                            {item.title}
                            </Link>
                        ))}
                        </nav>
                        <Button asChild>
                            <Link href="/destinations" onClick={() => setIsOpen(false)}>Plan Your Trip</Link>
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
