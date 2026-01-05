
import React from 'react';
import { Check, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  const paymentLink = "https://pay.cakto.com.br/druauvj_707992";

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Investimento que se <span className="gradient-text">paga sozinho.</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mais rápido que qualquer agência. Comece hoje e transforme seu workflow.
          </p>
        </div>

        <div className="flex justify-center max-w-6xl mx-auto">
          {/* Plan - Pro Mind Only */}
          <div className="glass p-10 md:p-14 rounded-[40px] border-2 border-purple-500/50 flex flex-col relative shadow-[0_0_80px_rgba(168,85,247,0.25)] bg-gradient-to-b from-purple-500/10 to-transparent max-w-xl w-full">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-bg px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-white">
              OFERTA EXCLUSIVA
            </div>
            <h3 className="text-3xl font-black mb-2 text-center">Pro Mind</h3>
            <div className="flex items-baseline justify-center gap-1 mb-10">
              <span className="text-6xl font-black">R$ 47,00</span>
              <span className="text-gray-500 text-xl">/mês</span>
            </div>
            <ul className="space-y-5 mb-12 flex-1">
              {[
                "Gerações Ilimitadas de Imagens", 
                "Acesso Completo ao PixelMind Animate", 
                "Resolução Ultra HD (4K)", 
                "Todos os Formatos de Exportação (9:16, 1:1, etc)",
                "Melhoria de Imagem com IA",
                "Suporte Prioritário VIP",
                "Perfil e Histórico Privado"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-200 text-lg font-medium">
                  <Check className="w-6 h-6 text-purple-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a 
              href={paymentLink}
              className="w-full py-6 rounded-2xl gradient-bg font-black text-xl hover:scale-[1.02] shadow-xl shadow-purple-500/30 transition-all active:scale-95 flex items-center justify-center gap-2 text-white"
            >
              <Zap className="w-6 h-6 fill-white" />
              QUERO O PLANO PRO MIND AGORA
            </a>
            <p className="text-center text-sm text-gray-500 mt-6">Cancele a qualquer momento sem taxas ocultas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
