
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const paymentLink = "https://pay.cakto.com.br/druauvj_707992";

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="container mx-auto text-center max-w-5xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-purple-400 text-sm font-semibold mb-8 animate-bounce">
          <Sparkles className="w-4 h-4" />
          <span>Inteligência Artificial de Nova Geração</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight tracking-tight">
          Crie. Melhore. <br className="hidden md:block" />
          <span className="gradient-text">Anime.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
          Transforme ideias em imagens vivas com Inteligência Artificial. 
          A plataforma definitiva para criar conteúdos profissionais que param o scroll.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
          <a 
            href={paymentLink}
            className="w-full md:w-auto px-10 py-5 rounded-2xl gradient-bg text-lg font-extrabold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-2xl shadow-purple-500/30 group text-white"
          >
            QUERO TESTAR O PIXELMIND AGORA
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Visual Showcase */}
        <div className="relative mx-auto max-w-6xl mt-12 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(168,85,247,0.15)] animate-float">
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" 
            alt="PixelMind Dashboard Preview" 
            className="w-full h-auto object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent"></div>
          
          {/* Floating UI elements for sexiness */}
          <div className="absolute top-10 left-10 glass p-4 rounded-2xl hidden md:flex flex-col gap-2 items-start animate-pulse">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-white/50">Gerando...</span>
            <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-2/3 gradient-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
