import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Globe } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-[#642434]" />,
      title: "Excelência",
      description: "Buscamos a excelência em cada aspecto de nossos serviços"
    },
    {
      icon: <Users className="w-8 h-8 text-[#642434]" />,
      title: "Cliente em Primeiro Lugar",
      description: "Seu sucesso é nossa prioridade número um"
    },
    {
      icon: <Globe className="w-8 h-8 text-[#642434]" />,
      title: "Inovação",
      description: "Constantemente evoluindo e adaptando nossas soluções"
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
            <h1 className="text-4xl font-bold mb-6">Sobre a LCO Invest</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Uma história de sucesso construída com confiança e excelência
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <p className="text-gray-600 mb-4">
                Fundada em 2008, a LCO Invest nasceu com uma visão clara: democratizar o acesso a investimentos de qualidade, oferecendo soluções personalizadas para cada perfil de investidor.
              </p>
              <p className="text-gray-600 mb-4">
                Ao longo dos anos, construímos uma reputação sólida baseada em resultados consistentes e relacionamentos duradouros com nossos clientes.
              </p>
              <p className="text-gray-600">
                Hoje, somos reconhecidos como uma das principais instituições financeiras do país, com uma equipe de especialistas dedicados e um histórico comprovado de sucesso.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                alt="História LCO Invest"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
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
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Valores Fundamentais</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Os princípios que guiam nossas ações e decisões todos os dias
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="bg-white p-4 rounded-full shadow-lg mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}