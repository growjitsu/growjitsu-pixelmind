
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Send, Loader2, Image as ImageIcon, Lock, ShoppingCart } from 'lucide-react';

const TryItOut: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [usageCount, setUsageCount] = useState(0);
  const [isLimitReached, setIsLimitReached] = useState(false);

  const paymentLink = "https://pay.cakto.com.br/druauvj_707992";
  const STORAGE_KEY = 'pixelmind_demo_usage';

  useEffect(() => {
    const checkUsage = () => {
      const storedData = localStorage.getItem(STORAGE_KEY);
      const today = new Date().toISOString().split('T')[0];

      if (storedData) {
        const { count, date } = JSON.parse(storedData);
        if (date === today) {
          setUsageCount(count);
          if (count >= 2) {
            setIsLimitReached(true);
          }
        } else {
          // Reset para um novo dia
          localStorage.setItem(STORAGE_KEY, JSON.stringify({ count: 0, date: today }));
          setUsageCount(0);
          setIsLimitReached(false);
        }
      } else {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ count: 0, date: today }));
      }
    };

    checkUsage();
  }, []);

  const handleTest = async () => {
    if (!prompt.trim() || isLimitReached || isLoading) return;
    
    setIsLoading(true);
    setImageUrl(null);
    setDescription(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      // Usando o modelo de imagem conforme as diretrizes
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: `Crie uma imagem profissional e artística baseada neste prompt: ${prompt}. Estilo épico, alta definição.` }]
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1"
          }
        }
      });

      let foundImage = false;
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64Data = part.inlineData.data;
          setImageUrl(`data:image/png;base64,${base64Data}`);
          foundImage = true;
        } else if (part.text) {
          setDescription(part.text);
        }
      }

      if (!foundImage) {
        setDescription("A IA processou seu pedido, mas a geração visual está disponível apenas na versão completa.");
      }

      // Atualiza contador
      const newCount = usageCount + 1;
      const today = new Date().toISOString().split('T')[0];
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ count: newCount, date: today }));
      setUsageCount(newCount);
      
      if (newCount >= 2) {
        setIsLimitReached(true);
      }

    } catch (error) {
      console.error(error);
      setDescription('Erro ao conectar com a rede neural. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-purple-900/10" id="try-it">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-10">Teste o cérebro do <span className="gradient-text">PixelMind</span></h2>
        
        <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          {isLimitReached && (
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md z-20 flex flex-col items-center justify-center p-8 animate-in fade-in duration-500">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                <Lock className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Limite de Teste Atingido</h3>
              <p className="text-gray-400 mb-8 max-w-md">
                Você já utilizou suas 2 gerações gratuitas de hoje. Para continuar criando imagens e vídeos ilimitados, assine o plano Pro Mind.
              </p>
              <a 
                href={paymentLink}
                className="px-10 py-5 rounded-2xl gradient-bg font-black text-xl flex items-center gap-3 hover:scale-105 transition-all shadow-2xl shadow-purple-500/40 text-white"
              >
                <ShoppingCart className="w-6 h-6" />
                LIBERAR ACESSO ILIMITADO AGORA
              </a>
            </div>
          )}

          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-400 font-medium">O que você gostaria de criar agora?</p>
            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-purple-400">
              {2 - usageCount} GERAÇÕES RESTANTES
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row gap-4">
            <input 
              type="text" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={isLimitReached || isLoading}
              placeholder="Ex: Um leão cibernético com juba de fogo azul..." 
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 transition-all disabled:opacity-50"
            />
            <button 
              onClick={handleTest}
              disabled={isLoading || !prompt.trim() || isLimitReached}
              className="px-8 py-4 rounded-2xl gradient-bg font-bold flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 transition-all text-white"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              GERAR IMAGEM
            </button>
          </div>

          {(imageUrl || description) && (
            <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-purple-500/20 text-left animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center gap-2 text-purple-400 font-bold mb-4 text-sm">
                <Sparkles className="w-4 h-4" />
                <span>RESULTADO PIXELMIND AI</span>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {imageUrl ? (
                  <div className="w-full md:w-64 aspect-square rounded-xl overflow-hidden border border-white/10 shadow-xl shrink-0">
                    <img src={imageUrl} alt="Resultado da IA" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-full md:w-64 aspect-square rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <ImageIcon className="w-12 h-12 text-white/10" />
                  </div>
                )}
                
                <div className="flex-1">
                  <p className="text-gray-200 leading-relaxed italic text-lg mb-4">
                    {description || "Sua imagem foi processada com sucesso pelos nossos servidores neurais de alta performance."}
                  </p>
                  <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <p className="text-xs text-purple-300 font-bold uppercase tracking-widest mb-1">Dica Pro</p>
                    <p className="text-sm text-gray-400">Assine o Pro Mind para baixar em 4K e remover marcas d'água.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <p className="mt-6 text-gray-500 text-sm italic">
          * A demonstração gratuita utiliza uma versão simplificada do nosso motor. O plano completo oferece resultados 10x superiores.
        </p>
      </div>
    </section>
  );
};

export default TryItOut;
