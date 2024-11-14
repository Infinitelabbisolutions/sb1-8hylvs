import React from 'react';
import { Newspaper } from 'lucide-react';

export default function Press() {
  const news = [
    {
      date: "15/03/2024",
      title: "LCO Invest expande operações para o Nordeste",
      description: "Nova sede em Recife marca expansão estratégica da empresa."
    },
    {
      date: "28/02/2024",
      title: "Prêmio de Melhor Gestora de Investimentos",
      description: "LCO Invest é reconhecida como líder no setor financeiro."
    },
    {
      date: "10/02/2024",
      title: "Novo fundo de investimentos sustentáveis",
      description: "Empresa lança produto focado em ESG e sustentabilidade."
    }
  ];

  return (
    <div id="imprensa" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Área de Imprensa</h2>
          <p className="text-xl text-gray-600">Últimas notícias e comunicados</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-2 text-[#642434] mb-4">
                <Newspaper size={20} />
                <span className="font-semibold">{item.date}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <button className="mt-4 text-[#642434] font-semibold hover:text-[#4e1c28] transition-colors">
                Ler mais →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}