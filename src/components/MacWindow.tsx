
'use client';
import { useRef } from 'react';
import { toPng } from 'html-to-image';
import { Camera, Download } from 'lucide-react';
import { Button } from './ui/button';

export function MacWindow({ children }: { children: React.ReactNode }) {
  const windowRef = useRef<HTMLDivElement>(null);

  const handleExport = () => {
    if (windowRef.current === null) {
      return;
    }

    toPng(windowRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'component-showcase.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="relative w-full max-w-3xl">
      <div ref={windowRef} className="w-full bg-[#2d2d2d] rounded-xl shadow-2xl overflow-hidden border border-white/10">
        {/* Title Bar */}
        <div className="h-10 bg-[#3c3c3c] flex items-center px-4 gap-2">
          <div className="group flex gap-2">
            <div className="w-3 h-3 bg-[#ff5f56] rounded-full group-hover:bg-[#e0443e] transition-colors"></div>
            <div className="w-3 h-3 bg-[#ffbd2e] rounded-full group-hover:bg-[#dea123] transition-colors"></div>
            <div className="w-3 h-3 bg-[#27c93f] rounded-full group-hover:bg-[#1da933] transition-colors"></div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full">
          {children}
        </div>
      </div>
       <Button
        onClick={handleExport}
        className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-800 text-white hover:bg-slate-700 rounded-full shadow-lg transition-all transform hover:scale-105"
        >
        <Download className="w-4 h-4" />
        Export as PNG
      </Button>
    </div>
  );
}
