
import React from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const paymentLink = "https://pay.cakto.com.br/druauvj_707992";

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
            <Sparkles className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-extrabold tracking-tighter">Pixel<span className="gradient-text">Mind</span></span>
        </div>

        {/* Desktop Nav - Only CTA */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href={paymentLink}
            className="px-6 py-2.5 rounded-full gradient-bg text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-purple-500/20 active:scale-95 text-white"
          >
            QUERO TESTAR AGORA
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-black/95 backdrop-blur-xl z-50 flex flex-col p-8 gap-6">
          <a 
            href={paymentLink}
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center py-4 rounded-xl gradient-bg font-bold mt-4 text-white"
          >
            QUERO TESTAR AGORA
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
