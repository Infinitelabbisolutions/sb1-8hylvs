import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Shield,
  TrendingUp,
  Users,
  Building,
  Briefcase,
  PiggyBank,
  LineChart
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <BarChart3 className="w-12 h-12 text-[#642434]" />,
      title: "Gestão de Carteira",
      description: "Administração profissional do seu portfólio de investimentos com foco em resultados consistentes.",
      features: [
        "Análise de mercado diária",
        "Rebalanceamento periódico",
        "Relatórios detalhados",
        "Consultoria personalizada"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-[#642434]" />,
      title: "Proteção Patrimonial",
      description: "Estratégias para proteger e preservar seu patrimônio ao longo das gerações.",
      features: [
        "Planejamento sucessório",
        "Estruturação de holding",
        "Gestão de riscos",
        "Diversificação internacional"
      ]
    },
    {
      icon: <Building className="w-12 h-12 text-[#642434]" />,
      title: "Investimentos Imobiliários",
      description: "Oportunidades selecionadas no mercado imobiliário nacional e internacional.",
      features: [
        "Fundos imobiliários",
        "Desenvolvimento de projetos",
        "Sale & leaseback",
        "Análise de oportunidades"
      ]
    },
    {
      icon: <Briefcase className="w-12 h-12 text-[#642434]" />,
      title: "Consultoria Empresarial",
      description: "Soluções financeiras completas para empresas de todos os portes.",
      features: [
        "Fusões e aquisições",
        "Reestruturação financeira",
        "Captação de recursos",
        "Planejamento tributário"
      ]
    }
  ];

  const specializedServices = [
    {
      icon: <PiggyBank className="w-8 h-8 text-[#642434]" />,
      title: "Planejamento Financeiro",
      description: "Desenvolvimento de estratégias personalizadas para alcançar seus objetivos financeiros."
    },
    {
      icon: <LineChart className="w-8 h-8 text-[#642434]" />,
      title: "Análise de Investimentos",
      description: "Avaliação detalhada de oportunidades de investimento com foco em retorno e risco."
    },
    {
      icon: <Users className="w-8 h-8 text-[#642434]" />,
      title: "Gestão de Fortunas",
      description: "Serviços exclusivos para clientes com patrimônio elevado e necessidades complexas."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#642434]" />,
      title: "Assessoria Contínua",
      description: "Acompanhamento próximo e constante da sua carteira de investimentos."
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
            <h1 className="text-4xl font-bold mb-6">Nossos Serviços</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Soluções financeiras completas e personalizadas para você e sua empresa
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  {service.icon}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, featIndex) => (
                    <li key={featIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#642434]" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-[#642434] text-white px-6 py-3 rounded-md hover:bg-[#4e1c28] transition-colors">
                  Saiba Mais
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Serviços Especializados
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {specializedServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-lg"
                >
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}