export default function SystemRequirements() {
  const specs = {
    minimum: [
      { label: 'OS', value: 'Windows 7/10 (64-bit)' },
      { label: 'Processor', value: 'Intel Core i3-2100 / AMD FX-6300' },
      { label: 'Memory', value: '4 GB RAM' },
      { label: 'Graphics', value: 'Intel HD 4000 / NVIDIA GT 730' },
      { label: 'Storage', value: '500 MB available space' },
    ],
    recommended: [
      { label: 'OS', value: 'Windows 10/11 (64-bit)' },
      { label: 'Processor', value: 'Intel Core i5-4460 / AMD Ryzen 3 1200' },
      { label: 'Memory', value: '8 GB RAM' },
      { label: 'Graphics', value: 'NVIDIA GTX 1050 / AMD RX 560' },
      { label: 'Storage', value: '1 GB available space' },
    ],
  };

  return (
    <section id="requirements" className="py-20 bg-midnight-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <div className="h-1 w-16 bg-blue-500 mb-2"></div>
          <h2 className="text-3xl font-bold tracking-wider text-white">SYSTEM REQUIREMENTS</h2>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Minimum */}
          <div className="bg-midnight-900 border border-white/5 rounded-lg overflow-hidden flex flex-col shadow-lg shadow-black/50">
            <div className="bg-midnight-850 px-6 py-3 border-b border-white/5">
              <h3 className="text-sm font-mono tracking-widest text-slate-300 uppercase">
                Minimum
              </h3>
            </div>
            <div className="p-6 flex-1">
              <ul className="space-y-4">
                {specs.minimum.map((spec, index) => (
                  <li key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                    <span className="text-xs font-mono text-slate-500 uppercase w-24 shrink-0">
                      {spec.label}
                    </span>
                    <span className="text-sm text-white/90">
                      {spec.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recommended */}
          <div className="bg-midnight-900 border border-blue-900/30 rounded-lg overflow-hidden flex flex-col shadow-lg shadow-blue-900/10">
            <div className="bg-midnight-800 px-6 py-3 border-b border-blue-900/30 flex items-center justify-between">
              <h3 className="text-sm font-mono tracking-widest text-blue-400 uppercase">
                Recommended
              </h3>
            </div>
            <div className="p-6 flex-1">
              <ul className="space-y-4">
                {specs.recommended.map((spec, index) => (
                  <li key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                    <span className="text-xs font-mono text-slate-500 uppercase w-24 shrink-0">
                      {spec.label}
                    </span>
                    <span className="text-sm text-white/90">
                      {spec.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Note */}
        <div className="mt-8 px-2">
          <p className="text-xs font-mono text-slate-500">
            * Godot 4.x optimized — runs smoothly on low-end hardware. 2GB VRAM recommended.
          </p>
        </div>

      </div>
    </section>
  );
}
