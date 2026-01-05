
import React from 'react';
import { Sparkles, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-bold tracking-tighter">Pixel<span className="gradient-text">Mind</span></span>
          </div>
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
            Transformando ideias em imagens vivas. A revolução visual alimentada por Inteligência Artificial de alta performance.
          </p>
          <div className="flex gap-6">
            <Instagram className="w-6 h-6 text-gray-500 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-6 h-6 text-gray-500 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="w-6 h-6 text-gray-500 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs text-center md:text-left">
          <p>© 2024 PixelMind AI Platform. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <span>Orgulhosamente feito para criadores de impacto.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
