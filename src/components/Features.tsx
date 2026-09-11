import React from 'react';
import { Compass, FileText, Search, EyeOff, Layers } from 'lucide-react';

const featuresList = [
  {
    icon: Compass,
    title: 'Explore RKU 2.01',
    description: 'Explore the building and discover hidden areas that shouldn\'t exist within the original architectural blueprints.'
  },
  {
    icon: FileText,
    title: 'Environmental Storytelling',
    description: 'Learn what happened through discarded notes, corrupted terminal logs, and the remains of previous occupants.'
  },
  {
    icon: Search,
    title: 'Mystery',
    description: 'Piece together the anomalous timeline and uncover the secret buried beneath the Faculty Archive.'
  },
  {
    icon: EyeOff,
    title: 'Atmospheric Horror',
    description: 'Experience suffocating tension through dynamic shadows, limited light sources, and reactive sound design.'
  },
  {
    icon: Layers,
    title: 'Top-down Exploration',
    description: 'Tactical top-down navigation with narrow cone-of-vision that conceals terrors lurking just outside your periphery.'
  }
];

export default function Features() {
  return (
    <section className="bg-[#0b0f17]/40 border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white tracking-widest uppercase mb-1">Gameplay Features</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#3b82f6] to-[#66c0f4]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx} 
                className="bg-[#0b0f17] border border-white/10 hover:border-[#3b82f6]/40 p-6 rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] group flex flex-col gap-4"
              >
                <div className="w-12 h-12 bg-[#141d2d] border border-white/5 rounded-sm flex items-center justify-center group-hover:bg-[#1c283c] transition-colors">
                  <Icon className="w-6 h-6 text-[#66c0f4]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#8fa0ba] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
