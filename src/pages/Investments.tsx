import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Shield, PieChart } from 'lucide-react';

export default function Investments() {
  const investmentTypes = [
    {
      title: "Renda Fixa",
      description: "Investimentos em títulos públicos, CDBs, LCIs e LCAs",
      icon: <DollarSign className="w-12 h-12 text-[#642434]" />,
      options: [
        "Tesouro Direto",
        "CDB",
        "LCI/LCA",
        "Debêntures"
      ]
    },
    {
      title: "Renda Variável",
      description: "Ações, ETFs e Fundos Imobiliários",
      icon: <TrendingUp className="w-12 h-12 text-[#642434]" />,
      options: [
        "Ações",
        "FIIs",
        "ETFs",
        "BDRs"
      ]
    },
    {
      title: "Fundos de Investimento",
      description: "Fundos multimercado, ações e renda fixa",
      icon: <PieChart className="w-12 h-12 text-[#642434]" />,
      options: [
        "Fundos Multimercado",
        "Fundos de Ações",
        "Fundos de Renda Fixa",
        "Fundos Cambiais"
      ]
    },
    {
      title: "Previdência Privada",
      description: "Planos PGBL e VGBL para aposentadoria",
      icon: <Shield className="w-12 h-12 text-[#642434]" />,
      options: [
        "PGBL",
        "VGBL",
        "Previdência Empresarial",
        "Planos Personalizados"
      ]
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
            <h1 className="text-4xl font-bold mb-6">Soluções de Investimento</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Diversifique seu portfólio com nossas soluções personalizadas de investimento
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {investmentTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  {type.icon}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {type.options.map((option, optIndex) => (
                    <li key={optIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#642434]" />
                      <span className="text-gray-700">{option}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-[#642434] text-white px-6 py-3 rounded-md hover:bg-[#4e1c28] transition-colors">
                  Saiba Mais
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Processo de Investimento
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Análise de Perfil",
                  description: "Avaliamos seu perfil de investidor e objetivos"
                },
                {
                  step: "2",
                  title: "Estratégia",
                  description: "Desenvolvemos uma estratégia personalizada"
                },
                {
                  step: "3",
                  title: "Implementação",
                  description: "Executamos as operações de investimento"
                },
                {
                  step: "4",
                  title: "Monitoramento",
                  description: "Acompanhamento contínuo do portfólio"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-[#642434] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}