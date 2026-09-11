'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function GameHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#07090e]/80 backdrop-blur-md border-b border-white/10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-20 py-4 sm:py-0 gap-4 sm:gap-0">
          <div className="flex flex-col gap-1">
            <div className="flex items-center text-xs text-[#8fa0ba] font-medium tracking-wide">
              <span className="hover:text-white cursor-pointer transition-colors">Home</span>
              <ChevronRight className="w-3 h-3 mx-1" />
              <span className="hover:text-white cursor-pointer transition-colors">Games</span>
              <ChevronRight className="w-3 h-3 mx-1" />
              <span className="text-[#3b82f6]">RKU 2.01: Midnight</span>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">RKU 2.01: Midnight</h1>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-950/80 border border-blue-500/50 text-blue-300 uppercase tracking-widest hidden sm:inline-block">
                Indie Horror
              </span>
            </div>
          </div>


        </div>
      </div>
    </header>
  );
}
