import React from 'react';
import Image from 'next/image';
import { Terminal, ShieldAlert } from 'lucide-react';

export default function AboutGame() {
  return (
    <section className="bg-[#0b0f17] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-widest uppercase mb-1">About This Game</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#3b82f6] to-[#66c0f4]" />
            </div>

            <div className="flex flex-col gap-8 text-[#8fa0ba] font-light text-lg">
              
              <div className="border-l-2 border-[#3b82f6]/40 pl-6 py-2 bg-gradient-to-r from-[#3b82f6]/5 to-transparent">
                <p>
                  RKU 2.01: Midnight takes place inside a familiar building that becomes something completely different after midnight.
                </p>
              </div>

              <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                <Image src="/images/foto_1.png" alt="Faculty Archive" fill className="object-cover" unoptimized />
                <div className="absolute bottom-0 inset-x-0 bg-black/80 px-4 py-2 border-t border-white/10 z-10">
                  <p className="text-xs font-mono text-[#66c0f4]">LOG ENTRY 01: Flickering emergency fluorescent lights...</p>
                </div>
              </div>

              <div className="border-l-2 border-[#3b82f6]/40 pl-6 py-2">
                <p>
                  Explore the corridors and rooms of RKU 2.01. The deeper you go, the more you begin to realize that something is not right.
                </p>
              </div>

              <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                <Image src="/images/foto_2.png" alt="Underground Corridor" fill className="object-cover" unoptimized />
                <div className="absolute bottom-0 inset-x-0 bg-black/80 px-4 py-2 border-t border-white/10 z-10">
                  <p className="text-xs font-mono text-[#66c0f4]">LOG ENTRY 02: Sub-level access compromised.</p>
                </div>
              </div>

              <div className="border-l-2 border-[#3b82f6]/40 pl-6 py-2">
                <p>
                  Search for clues, interact with the environment, and piece together what happened inside the building.
                </p>
              </div>

              <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                <Image src="/images/foto_3.png" alt="Room 2.01 Doorway" fill className="object-cover" unoptimized />
                <div className="absolute bottom-0 inset-x-0 bg-black/80 px-4 py-2 border-t border-white/10 z-10">
                  <p className="text-xs font-mono text-[#66c0f4]">LOG ENTRY 03: The threshold holds memory.</p>
                </div>
              </div>

              <div className="border-l-2 border-[#3b82f6]/40 pl-6 py-2 bg-gradient-to-r from-red-500/5 to-transparent">
                <p className="text-white font-normal">
                  Stay alert. You are not alone.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-4 flex flex-col gap-6 pt-10 lg:pt-0">
            
            <div className="bg-[#101622] border border-white/10 p-5 rounded-sm shadow-lg">
              <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
                <div className="p-2 bg-[#1c283c] rounded text-[#66c0f4]">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Student Indie Project Notice</h3>
                  <p className="text-xs text-[#8fa0ba]">Developer Dispatch</p>
                </div>
              </div>
              <p className="text-sm text-[#8fa0ba] leading-relaxed">
                This project was built from the ground up using Godot 4. Expect raw atmosphere, experimental mechanics, and a deeply personal vision of academic dread. Support independent creators.
              </p>
            </div>

            <div className="bg-[#101622] border border-white/10 p-5 rounded-sm shadow-lg">
              <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
                <div className="p-2 bg-[#1c283c] rounded text-red-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Atmosphere & Tone</h3>
                  <p className="text-xs text-[#8fa0ba]">What to expect</p>
                </div>
              </div>
              <ul className="flex flex-col gap-3 text-sm text-[#8fa0ba]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-1.5 shrink-0" />
                  <span>Slow-burn psychological dread that builds over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-1.5 shrink-0" />
                  <span>Oppressive ambient soundtrack reacting to your proximity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-1.5 shrink-0" />
                  <span>Strict flashlight battery management and limited vision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] mt-1.5 shrink-0" />
                  <span>Focus on tension over cheap jumpscares</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
