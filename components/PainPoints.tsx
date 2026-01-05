
import React from 'react';
import { XCircle, Clock, Palette, DollarSign, TrendingDown } from 'lucide-react';

const PainPoints: React.FC = () => {
  const pains = [
    {
      icon: <Clock className="w-6 h-6 text-red-400" />,
      title: "Falta de Tempo",
      desc: "Você passa horas tentando criar um post que não fica como imaginou."
    },
    {
      icon: <Palette className="w-6 h-6 text-red-400" />,
      title: "Zero Habilidade",
      desc: "Ferramentas complexas de edição só te fazem perder a paciência."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-red-400" />,
      title: "Designers Caros",
      desc: "Depender de terceiros é lento e custa uma fortuna mensalmente."
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-red-400" />,
      title: "Posts Invisíveis",
      desc: "Seu conteúdo é 'mais do mesmo' e ninguém para pra olhar."
    }
  ];

  return (
    <section className="py-24 bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Cansado de lutar com <span className="text-red-400 underline decoration-red-400/30 underline-offset-8 italic">ferramentas difíceis?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Enquanto você perde tempo, outros criadores estão dominando o algoritmo usando o poder da IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pains.map((pain, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-black/40 border border-white/5 hover:border-red-400/30 transition-all group">
              <div className="mb-6 p-4 rounded-2xl bg-red-400/5 inline-block group-hover:scale-110 transition-transform">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{pain.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{pain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
