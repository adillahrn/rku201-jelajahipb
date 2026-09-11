'use client';

import React from 'react';
import { Play, ChevronRight } from 'lucide-react';

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

          <div className="flex items-center w-full sm:w-auto">
            <a 
              href="https://github.com/adillahrn/rku2.01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#3b82f6] hover:bg-blue-500 text-white px-8 py-3 rounded-sm font-semibold transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            >
              <Play className="w-5 h-5 fill-current" />
              Play Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
