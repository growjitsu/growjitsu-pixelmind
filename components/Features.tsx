
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Zap, Video, CheckCircle } from 'lucide-react';

const ImageComparison = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative aspect-video rounded-3xl overflow-hidden glass p-1 border border-white/10 select-none cursor-ew-resize group"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      {/* Imagem de "DEPOIS" (Base/Trás) - Alta Qualidade */}
      <img 
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" 
        alt="Depois" 
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
      />
      
      {/* Imagem de "ANTES" (Frente/Recortada) - Baixa Qualidade (simulada com blur/grayscale) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none rounded-2xl"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" 
          alt="Antes" 
          className="absolute inset-0 w-full h-full object-cover filter brightness-50 contrast-75 saturate-50 blur-[2px]"
          style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }}
        />
      </div>

      {/* Linha Divisória e Handle */}
      <div 
        className="absolute inset-y-0 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-[#0a0a0b]">
          <div className="flex gap-1">
             <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
             <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="absolute top-4 left-4 pointer-events-none">
        <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-black rounded-lg border border-white/10">ANTES</span>
      </div>
      <div className="absolute top-4 right-4 pointer-events-none">
        <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black rounded-lg shadow-lg">DEPOIS</span>
      </div>

      {/* Hint overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-bold text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
        Arraste para comparar
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <span className="text-purple-500 font-bold tracking-widest uppercase text-sm">Poder Ilimitado</span>
          <h2 className="text-4xl md:text-6xl font-black mt-4 mb-6">Tudo em um só lugar.</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Substitua ferramentas caras e complexas por uma única interface intuitiva que entrega resultados de nível Hollywood.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold mb-6">
                <Sparkles className="w-3 h-3" />
                <span>GERADOR DE IMAGENS</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold mb-6">Crie do absoluto zero.</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Descreva sua ideia e veja a mágica acontecer. De fotos ultra-realistas a artes conceituais, o PixelMind entende o que você quer e entrega em segundos.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {["Fotorrealismo", "Estilos Artísticos", "Cenários Épicos", "Retratos Perfeitos"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                    <CheckCircle className="w-4 h-4 text-purple-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="rounded-3xl overflow-hidden glass p-4 border border-white/10 group">
                <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop" alt="Paisagem Naturalista Gerada por IA" className="rounded-2xl w-full h-auto group-hover:scale-105 transition-transform duration-700 shadow-2xl" />
              </div>
            </div>
          </div>

          {/* Feature 2 - Interactive Before/After */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6">
                <Zap className="w-3 h-3" />
                <span>MELHORIA DE IMAGENS</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold mb-6">Upgrade imediato.</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Sua foto está borrada ou com baixa qualidade? Nossa IA reconstrói cada pixel, trazendo nitidez cristalina, cores vibrantes e texturas naturais.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {["Super Resolução", "Cores Vibrantes", "Limpeza de Ruído", "Rostos Definidos"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full">
              <ImageComparison />
            </div>
          </div>

          {/* Feature 3 - Cinematic AI Motion */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold mb-6">
                <Video className="w-3 h-3" />
                <span>PIXELMIND ANIMATE</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold mb-6">Dê vida às imagens.</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Transforme fotos estáticas em vídeos cinematográficos. Crie movimentos naturais de cabelo, roupas, expressões faciais e ambiente com um clique.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Movimento Natural", "Ideal para Reels/TikTok", "Cenas em Slow Motion", "Loop Infinito"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300 font-medium">
                    <CheckCircle className="w-4 h-4 text-pink-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full">
              <div className="relative aspect-video rounded-3xl overflow-hidden glass border border-white/10 flex items-center justify-center group bg-black">
                 <img 
                    src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1200&auto=format&fit=crop" 
                    alt="Animação de imagens" 
                    className="w-full h-full object-cover animate-ai-motion" 
                 />
                 <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full glass border border-white/20 flex items-center justify-center animate-pulse z-10">
                       <Video className="w-10 h-10 text-white" />
                    </div>
                 </div>
                 <div className="absolute bottom-4 right-4 z-20">
                    <span className="px-3 py-1 bg-pink-600/80 backdrop-blur-md text-white text-[10px] font-black rounded-lg shadow-lg uppercase tracking-widest">IA EM MOVIMENTO</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
