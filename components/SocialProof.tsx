
import React from 'react';
import { ShieldCheck, UserCircle, Star } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />)}
          </div>
          <h2 className="text-3xl font-bold mb-12">"O PixelMind cortou meu custo de produção de conteúdo em 80%. O que eu levava uma manhã inteira para criar, agora faço em 10 minutos."</h2>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500">
              <img src="https://picsum.photos/seed/user-testim/100/100" alt="Avatar" />
            </div>
            <div>
              <p className="font-bold text-lg">Marcos Vinícius</p>
              <p className="text-gray-500 text-sm">Estrategista Digital e Content Creator</p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <ShieldCheck className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="font-bold text-xl mb-2">Dados Protegidos</h3>
            <p className="text-sm text-gray-500">Privacidade total para suas criações e dados de pagamento.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <UserCircle className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="font-bold text-xl mb-2">Perfil Personalizado</h3>
            <p className="text-sm text-gray-500">Mantenha seu histórico organizado e reutilize seus melhores estilos.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center font-bold mb-4">AI</div>
            <h3 className="font-bold text-xl mb-2">Uso Responsável</h3>
            <p className="text-sm text-gray-500">Inteligência Artificial de ponta usada de forma ética e profissional.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
