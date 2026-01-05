
import React from 'react';
import { Smartphone, Monitor, Layout, Maximize } from 'lucide-react';

const Formats: React.FC = () => {
  const formats = [
    { icon: <Layout className="w-6 h-6" />, name: "Feed Instagram", ratio: "1:1" },
    { icon: <Smartphone className="w-6 h-6" />, name: "Reels / TikTok", ratio: "9:16" },
    { icon: <Monitor className="w-6 h-6" />, name: "YouTube / Desktop", ratio: "16:9" },
    { icon: <Maximize className="w-6 h-6" />, name: "Feed Otimizado", ratio: "4:5" },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Pronto para <span className="gradient-text">postar.</span></h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl">
              Esqueça editores externos. O PixelMind exporta seu conteúdo nas dimensões exatas de cada rede social, garantindo a melhor performance orgânica.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {formats.map((f, i) => (
                <div key={i} className="flex items-center gap-4 glass p-4 rounded-2xl border border-white/5">
                  <div className="p-3 rounded-xl gradient-bg shadow-lg shadow-purple-500/10">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{f.name}</p>
                    <p className="text-xs text-gray-500 font-mono">{f.ratio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
               <div className="aspect-[9/16] bg-zinc-800 rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-[-5deg]">
                 <img src="https://picsum.photos/seed/format-916/300/533" alt="Vertical" className="w-full h-full object-cover" />
               </div>
               <div className="aspect-square bg-zinc-800 rounded-2xl overflow-hidden border border-white/10 shadow-2xl mt-12 rotate-[3deg]">
                 <img src="https://picsum.photos/seed/format-11/300/300" alt="Square" className="w-full h-full object-cover" />
               </div>
            </div>
            {/* Background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-purple-600/20 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formats;
