
'use client';
import { MacWindow } from '@/components/MacWindow';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Heart, Mail } from 'lucide-react';

export default function MacWindowPage() {
  return (
    <div className="w-full min-h-screen bg-[#f0f2f5] dark:bg-[#1A1B1E] flex items-center justify-center p-4 sm:p-8">
      <MacWindow>
        <div className="p-8 bg-[#1E1E1E] text-white w-full">
          <div className="flex flex-col gap-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight">Create Your Account</h1>
              <p className="text-gray-400 mt-2">Join our platform and unlock exclusive features.</p>
            </div>

            <div className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input type="email" id="email" placeholder="your@email.com" className="bg-[#2a2a2a] border-[#444] pl-10 text-white" />
                </div>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password"  className="text-gray-300">Password</Label>
                <Input type="password" id="password" placeholder="••••••••" className="bg-[#2a2a2a] border-[#444] text-white"/>
              </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Switch id="remember-me" className="data-[state=checked]:bg-green-500" />
                    <Label htmlFor="remember-me" className="text-gray-300">Remember me</Label>
                </div>
                <a href="#" className="text-sm text-green-400 hover:underline">Forgot Password?</a>
            </div>

            <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold text-lg py-6">
              Sign Up
            </Button>

            <div className="text-center text-gray-400 text-sm">
                Made with <Heart className="inline h-4 w-4 text-red-500 fill-current" /> in Next.js & Tailwind
            </div>
          </div>
        </div>
      </MacWindow>
    </div>
  );
}
