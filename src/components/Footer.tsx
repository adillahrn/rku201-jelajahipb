import { ExternalLink, Heart, Code } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-8.3a5.4 5.4 0 0 0-1.5-3.9 5 5 0 0 0 .1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5 5 0 0 0 .1 3.8A5.4 5.4 0 0 0 3.5 9.6c0 6.8 3 8 6 8.3a4.8 4.8 0 0 0-1 3.2v4" />
    <path d="M5 20a5 5 0 0 1-3-2" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-midnight-950 border-t border-white/5 pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          
          {/* Column 1: Game Info */}
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-xl font-bold text-white tracking-widest uppercase">RKU 2.01: Midnight</h2>
              <p className="text-blue-400 font-mono text-xs mt-1">Student Indie Horror Project</p>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              A psychological horror experience built with Godot 4. 
              Explore the desolate halls of a midnight campus where reality distorts and the shadows observe.
            </p>
            <p className="text-slate-500 font-mono text-xs mt-auto pt-4">
              &copy; 2026 Midnight Studio
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-slate-500 tracking-widest uppercase mb-2">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a 
                  href="https://github.com/adillahrn/rku2.01" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-slate-300 hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                >
                  Download Demo
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </a>
              </li>
              <li>
                <a href="#screenshots" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Screenshots
                </a>
              </li>
              <li>
                <a href="#features" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#requirements" className="text-slate-300 hover:text-blue-400 transition-colors">
                  System Requirements
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-slate-500 tracking-widest uppercase mb-2">Connect</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a 
                  href="https://github.com/adillahrn/rku2.01" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub Repository
                </a>
              </li>
              <li className="text-slate-400 inline-flex items-center gap-2 mt-2">
                <Code className="w-4 h-4 text-slate-500" />
                Built with Godot Engine 4.x
              </li>
              <li className="text-slate-400 inline-flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-800" />
                Made in Indonesia 🇮🇩
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 max-w-2xl text-center md:text-left">
            This is a non-commercial student project. Any resemblance to real educational institutions, alive or dead entities, is purely coincidental.
          </p>
          <p className="text-xs font-mono text-slate-500 shrink-0">
            Powered by Next.js & Tailwind CSS v4
          </p>
        </div>

      </div>
    </footer>
  );
}
