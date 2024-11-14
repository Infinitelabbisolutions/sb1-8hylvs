import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

export default function Mission() {
  const items = [
    {
      icon: <Target className="w-12 h-12 text-[#642434]" />,
      title: "Missão",
      description: "Proporcionar as melhores soluções financeiras, contribuindo para o crescimento sustentável do patrimônio de nossos clientes."
    },
    {
      icon: <Eye className="w-12 h-12 text-[#642434]" />,
      title: "Visão",
      description: "Ser reconhecida como a instituição financeira mais confiável e inovadora do mercado, referência em excelência e atendimento personalizado."
    },
    {
      icon: <Heart className="w-12 h-12 text-[#642434]" />,
      title: "Valores",
      description: "Ética, transparência, inovação, excelência e compromisso com o sucesso dos nossos clientes."
    }
  ];

  return (
    <div id="missao" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Missão, Visão e Valores</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}