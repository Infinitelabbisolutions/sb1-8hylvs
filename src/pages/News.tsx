import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

export default function News() {
  const news = [
    {
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80",
      category: "Expansão",
      date: "15/03/2024",
      title: "LCO Invest expande operações para o Nordeste",
      description: "Nova sede em Recife marca expansão estratégica da empresa com foco no crescimento regional."
    },
    {
      image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80",
      category: "Premiação",
      date: "28/02/2024",
      title: "Prêmio de Melhor Gestora de Investimentos",
      description: "LCO Invest é reconhecida como líder no setor financeiro por excelência em gestão."
    },
    {
      image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80",
      category: "Produtos",
      date: "10/02/2024",
      title: "Novo fundo de investimentos sustentáveis",
      description: "Empresa lança produto focado em ESG e sustentabilidade para investidores conscientes."
    }
  ];

  const pressReleases = [
    {
      date: "12/03/2024",
      title: "LCO Invest anuncia parceria estratégica",
      link: "#"
    },
    {
      date: "05/03/2024",
      title: "Resultados do 4º trimestre de 2023",
      link: "#"
    },
    {
      date: "20/02/2024",
      title: "Nova diretoria executiva é anunciada",
      link: "#"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-[#642434] to-[#8B3346] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6">Notícias e Comunicados</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Fique por dentro das últimas novidades da LCO Invest
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-semibold text-[#642434] bg-[#642434]/10 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="text-[#642434] font-semibold hover:text-[#4e1c28] transition-colors flex items-center gap-1">
                    Ler mais <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Comunicados à Imprensa</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between py-4 border-b border-gray-200 last:border-0"
                >
                  <div className="flex items-center gap-4">
                    <Calendar size={20} className="text-[#642434]" />
                    <div>
                      <p className="text-sm text-gray-500">{release.date}</p>
                      <h3 className="font-semibold text-gray-900">{release.title}</h3>
                    </div>
                  </div>
                  <a
                    href={release.link}
                    className="text-[#642434] hover:text-[#4e1c28] transition-colors"
                  >
                    Download PDF
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}