'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { 
  Play, Pause, Volume2, VolumeX, Maximize, Settings, 
  ChevronLeft, ChevronRight, Bookmark, Download, RectangleHorizontal
} from 'lucide-react';

const showcaseMedia = [
  { id: 'hero-1', type: 'video' as const, title: 'Teaser Trailer', tag: 'TRAILER', poster: '/images/foto_4.png', caption: 'Official Announcement Teaser — 00:00 Corridor Alarm' },
  { id: 'hero-3', type: 'image' as const, title: 'Log Entry 1', tag: 'SCREENSHOT', poster: '/images/log_entry_01_rku.png', caption: 'Location: RKU 2.01' },
  { id: 'hero-4', type: 'image' as const, title: 'Log Entry 2', tag: 'SCREENSHOT', poster: '/images/log_entry_02_corridors.png', caption: 'Location: Corridor' },
  { id: 'hero-5', type: 'image' as const, title: 'Log Entry 3', tag: 'SCREENSHOT', poster: '/images/log_entry_03_labkom.png', caption: 'Location: Computer Lab' },
];

export default function HeroShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTimeStr, setCurrentTimeStr] = useState('0:00');
  const [durationStr, setDurationStr] = useState('0:00');
  const videoRef = useRef<HTMLVideoElement>(null);
  const activeMedia = showcaseMedia[activeIndex];

  useEffect(() => {
    if (activeMedia.type === 'video' && activeIndex === 0 && videoRef.current) {
      videoRef.current.play().catch(e => console.log('Autoplay prevented:', e));
      setIsPlaying(true);
    }
  }, [activeIndex, activeMedia]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(e => console.log(e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return '0:00';
    const m = Math.floor(timeInSeconds / 60);
    const s = Math.floor(timeInSeconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((current / duration) * 100 || 0);
      setCurrentTimeStr(formatTime(current));
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDurationStr(formatTime(videoRef.current.duration));
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newTime = (Number(e.target.value) / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(Number(e.target.value));
    }
  };

  const handlePrev = () => setActiveIndex((prev) => (prev > 0 ? prev - 1 : showcaseMedia.length - 1));
  const handleNext = () => setActiveIndex((prev) => (prev < showcaseMedia.length - 1 ? prev + 1 : 0));

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          
          {/* Main Display */}
          <div className="relative aspect-video bg-[#07090e] border border-white/10 rounded-sm overflow-hidden group">
            {activeIndex === 0 ? (
              <video 
                ref={videoRef}
                src="/videos/video_demo.mp4" 
                poster="/images/foto_4.png" 
                autoPlay 
                muted={isMuted} 
                loop 
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                className="w-full h-full object-cover"
              />
            ) : (
              <Image 
                src={activeMedia.poster} 
                alt={activeMedia.title} 
                fill 
                className="object-cover" 
                unoptimized 
              />
            )}

            {/* Overlays */}
            {activeMedia.type === 'video' && (
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 px-3 py-1 rounded text-xs font-mono text-white/90 z-10">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                REC
              </div>
            )}

            {activeMedia.type === 'image' && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-12 z-10">
                <p className="text-[#8fa0ba] font-mono text-sm">{activeMedia.caption}</p>
              </div>
            )}

            {/* Video Controls / Centered Play */}
            {activeMedia.type === 'video' && (
              <>
                <div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer bg-black/20 z-20"
                  onClick={togglePlay}
                >
                  <div className="w-16 h-16 rounded-full bg-black/60 border border-white/20 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform">
                    {isPlaying ? <Pause className="w-8 h-8 text-white fill-current" /> : <Play className="w-8 h-8 text-white fill-current ml-1" />}
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end px-4 pb-3 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <div className="w-full h-3 relative mb-2 flex items-center group/progress">
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={progress}
                      onChange={handleSeek}
                      className="absolute inset-0 w-full opacity-0 cursor-pointer z-20"
                    />
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden absolute z-10 pointer-events-none">
                      <div className="h-full bg-[#66c0f4] transition-all duration-100" style={{ width: `${progress}%` }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-4">
                      <button onClick={togglePlay} className="hover:text-[#66c0f4] transition-colors">
                        {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                      </button>
                      <button onClick={toggleMute} className="hover:text-[#66c0f4] transition-colors">
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>
                      <span className="text-xs font-mono opacity-80">{currentTimeStr} / {durationStr}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] uppercase font-bold bg-white/10 px-1.5 py-0.5 rounded">1080p 60fps</span>
                      <Settings className="w-5 h-5 opacity-70 hover:opacity-100 cursor-pointer" />
                      <RectangleHorizontal className="w-5 h-5 opacity-70 hover:opacity-100 cursor-pointer" />
                      <Maximize className="w-5 h-5 opacity-70 hover:opacity-100 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Sub-bar */}
          <div className="flex items-center justify-between bg-[#101622] px-4 py-2 rounded-sm border border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm font-medium text-white">{activeMedia.title}</span>
            </div>
            <span className="text-sm text-[#8fa0ba]">{activeIndex + 1} / {showcaseMedia.length}</span>
          </div>

          {/* Thumbnail Carousel */}
          <div className="relative group/slider mt-2">
            <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-16 bg-black/60 hover:bg-[#3b82f6] text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all rounded-r-md backdrop-blur-sm">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2 overflow-x-auto scrollbar-hide py-1 px-1">
              {showcaseMedia.map((media, idx) => (
                <div 
                  key={media.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`
                    relative shrink-0 w-32 aspect-video cursor-pointer transition-all rounded-sm overflow-hidden
                    ${activeIndex === idx ? 'ring-2 ring-[#66c0f4] shadow-[0_0_10px_rgba(102,192,244,0.4)] opacity-100' : 'opacity-60 hover:opacity-100'}
                  `}
                >
                  <Image src={media.poster} alt={media.title} fill className="object-cover" unoptimized />
                  {media.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
                      <Play className="w-6 h-6 text-white/80 fill-white/80" />
                    </div>
                  )}
                  <div className="absolute bottom-0 inset-x-0 bg-black/80 px-1 py-0.5 text-[8px] font-bold text-white text-center tracking-widest z-10">
                    {media.tag}
                  </div>
                </div>
              ))}
            </div>

            <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-16 bg-black/60 hover:bg-[#3b82f6] text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all rounded-l-md backdrop-blur-sm">
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Progress bar */}
            <div className="w-full h-0.5 bg-white/10 mt-3 rounded-full overflow-hidden">
               <div 
                 className="h-full bg-[#3b82f6] transition-all duration-300" 
                 style={{ width: `${((activeIndex + 1) / showcaseMedia.length) * 100}%` }}
               />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="relative h-44 rounded-sm overflow-hidden group border border-white/10">
            <Image src="/images/foto_4.png" alt="RKU 2.01 Banner" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/60 to-transparent z-10" />
            <div className="absolute bottom-0 inset-x-0 p-4 z-20">
              <h2 className="text-xl font-bold text-white tracking-wider mb-1">RKU 2.01: MIDNIGHT</h2>
              <p className="text-xs text-[#66c0f4] uppercase tracking-widest font-semibold">Survival Horror</p>
            </div>
          </div>

          <p className="text-sm text-[#8fa0ba] italic border-l-2 border-[#3b82f6] pl-3 py-1">
            "At 2:01 AM inside room RKU 2.01, no one survives... no one is safe inside Room 2.01..."
          </p>

          <p className="text-sm text-white/80 leading-relaxed">
            A psychological top-down horror game set in RKU 2.01, IPB University. Explore the building after midnight, uncover its hidden secrets, and survive the darkness within.
          </p>

          {/* Reviews Simulated */}
          <div className="flex flex-col gap-1 text-xs bg-[#101622] p-3 rounded-sm border border-white/5">
            <div className="flex justify-between items-center">
              <span className="text-[#8fa0ba]">Recent Reviews:</span>
              <span className="text-[#66c0f4] font-semibold">Very Positive</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#8fa0ba]">All Reviews:</span>
              <span className="text-[#66c0f4] font-semibold">Mostly Positive</span>
            </div>
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-3 gap-2 text-xs bg-[#101622] p-3 rounded-sm border border-white/5">
            <div className="text-[#8fa0ba]">Release Date:</div>
            <div className="col-span-2 text-white">Q2 2026</div>
            
            <div className="text-[#8fa0ba]">Developer:</div>
            <div className="col-span-2 text-[#3b82f6] hover:text-white cursor-pointer transition-colors">Ter Serah Studio</div>
            
            <div className="text-[#8fa0ba]">Publisher:</div>
            <div className="col-span-2 text-[#3b82f6] hover:text-white cursor-pointer transition-colors">-</div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-1">
            {['Horror', 'Psychological Horror', 'Exploration', 'Atmospheric', 'Survival', 'Indie', 'Top-down'].map(tag => (
              <span key={tag} className="px-2 py-1 bg-[#1c283c] hover:bg-[#273852] text-[#8fa0ba] hover:text-white text-xs rounded-sm cursor-pointer transition-colors border border-white/5">
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2 mt-2">
            <a 
              href="https://github.com/adillahrn/rku2.01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] hover:from-[#2563eb] hover:to-[#3b82f6] text-white py-3 rounded-sm font-semibold transition-all shadow-md group"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              Download Playable Demo
            </a>
            
            <button className="flex items-center justify-center gap-2 bg-[#141d2d] hover:bg-[#1c283c] text-white py-3 rounded-sm font-medium transition-colors border border-white/10">
              <Bookmark className="w-4 h-4 text-[#66c0f4]" />
              Add to Wishlist
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
