
import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Zap, 
  Video, 
  Layers, 
  CheckCircle, 
  ArrowRight, 
  Menu, 
  X, 
  Clock, 
  Palette, 
  UserCircle, 
  ShieldCheck,
  Smartphone,
  Maximize,
  Monitor,
  Layout
} from 'lucide-react';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Features from './components/Features';
import Formats from './components/Formats';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import TryItOut from './components/TryItOut';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main>
        <Hero />
        
        <div id="problem" className="relative z-10">
          <PainPoints />
        </div>

        <div id="features" className="relative z-10">
          <Features />
        </div>

        <TryItOut />

        <div id="formats" className="relative z-10">
          <Formats />
        </div>

        <div id="pricing" className="relative z-10">
          <Pricing />
        </div>

        <SocialProof />
      </main>

      <Footer />

      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
}

export default App;
