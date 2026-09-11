'use client';

import { useState, useEffect, useCallback } from 'react';
import { Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';

const screenshots = [
  { id: 1, src: '/images/foto_1.png', caption: 'Corridor B North — 00:14 AM' },
  { id: 2, src: '/images/foto_2.png', caption: 'Main Lecture Hall 2.01 Terminal' },
  { id: 3, src: '/images/foto_3.png', caption: 'Faculty Archive & Emergency Fuse Box' },
  { id: 4, src: '/images/video_1.png', caption: 'Underground Maintenance Hatch Access' },
];

export default function ScreenshotGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox, goToNext, goToPrev]);

  return (
    <section id="screenshots" className="py-20 bg-midnight-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
          <div>
            <div className="h-1 w-16 bg-blue-500 mb-2"></div>
            <h2 className="text-3xl font-bold tracking-wider text-white">GAME SCREENSHOTS</h2>
          </div>
          <p className="text-sm font-mono text-slate-400">Click to inspect frame details</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {screenshots.map((screenshot, idx) => (
            <button
              key={screenshot.id}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-video overflow-hidden rounded-md border border-white/10 hover:border-blue-400/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {/* Image */}
              <img
                src={screenshot.src}
                alt={screenshot.caption}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-midnight-950/40 group-hover:bg-transparent transition-colors duration-300"></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-transparent to-transparent opacity-90"></div>
              
              {/* Caption & Icon */}
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between translate-y-2 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs text-left font-medium text-white/90 drop-shadow-md truncate pr-2">
                  {screenshot.caption}
                </p>
                <Maximize2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-midnight-950/95 backdrop-blur-sm">
          
          <div 
            className="absolute inset-0 z-0" 
            onClick={closeLightbox}
          ></div>
          
          <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
            
            <button 
              onClick={closeLightbox}
              className="absolute -top-12 right-0 p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 sm:-ml-12 p-3 text-slate-500 hover:text-white transition-colors"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <div className="relative w-full aspect-video bg-black shadow-2xl shadow-blue-900/20 border border-white/5 rounded-lg overflow-hidden">
              <img
                src={screenshots[currentIndex].src}
                alt={screenshots[currentIndex].caption}
                className="w-full h-full object-contain"
              />
            </div>

            <button 
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 sm:-mr-12 p-3 text-slate-500 hover:text-white transition-colors"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div className="w-full mt-4 flex items-center justify-between px-2">
              <div className="flex flex-col">
                <span className="text-xs font-mono text-blue-400/80 mb-1">RAW SCREENSHOT</span>
                <p className="text-white text-sm sm:text-base font-medium">{screenshots[currentIndex].caption}</p>
              </div>
              <div className="text-xs font-mono text-slate-500">
                {currentIndex + 1} / {screenshots.length}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
