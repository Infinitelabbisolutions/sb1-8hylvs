import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const executives = [
    {
      name: "Lukas Rique",
      role: "CEO & Fundador",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHeLU3nohGP1g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1693583164008?e=1736985600&v=beta&t=xRmvFPhj742A4laxKGejNvRqUuusnFvg-Mshee4lU_8",
      description: "25 anos de experiência no mercado financeiro, especialista em gestão de patrimônio.",
      linkedin: "#",
      email: "carlos.silva@lcoinvest.com.br"
    },
    {
      name: "Ana Santos",
      role: "Diretora de Investimentos",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      description: "Especialista em análise de mercado com mais de 15 anos de experiência.",
      linkedin: "https://www.linkedin.com/in/lukas-rique-cga-3a9b9ba4/",
      email: "ana.santos@lcoinvest.com.br"
    },
    {
      name: "Roberto Costa",
      role: "Gestor de Patrimônio",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      description: "15 anos em gestão de fortunas e planejamento financeiro.",
      linkedin: "#",
      email: "roberto.costa@lcoinvest.com.br"
    }
  ];

  const specialists = [
    {
      name: "Marina Lima",
      role: "Analista de Investimentos",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
    },
    {
      name: "Pedro Alves",
      role: "Especialista em Renda Fixa",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
    },
    {
      name: "Julia Santos",
      role: "Consultora Financeira",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
    },
    {
      name: "Ricardo Oliveira",
      role: "Analista de Mercado",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
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
            <h1 className="text-4xl font-bold mb-6">Nossa Equipe</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Conheça os profissionais dedicados ao seu sucesso financeiro
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Diretoria Executiva</h2>
            <p className="text-xl text-gray-600">Liderança experiente e comprometida</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {executives.map((executive, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={executive.image}
                  alt={executive.name}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{executive.name}</h3>
                  <p className="text-[#642434] font-semibold mb-4">{executive.role}</p>
                  <p className="text-gray-600 mb-6">{executive.description}</p>
                  <div className="flex gap-4">
                    <a
                      href={executive.linkedin}
                      className="text-gray-600 hover:text-[#642434] transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={`mailto:${executive.email}`}
                      className="text-gray-600 hover:text-[#642434] transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Especialistas</h2>
            <p className="text-xl text-gray-600">Nossa equipe de profissionais qualificados</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {specialists.map((specialist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{specialist.name}</h3>
                  <p className="text-[#642434]">{specialist.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}