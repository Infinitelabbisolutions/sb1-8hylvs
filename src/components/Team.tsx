import React from 'react';

export default function Team() {
  const team = [
    {
      name: "Carlos Silva",
      role: "CEO & Fundador",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      description: "25 anos de experiência no mercado financeiro"
    },
    {
      name: "Ana Santos",
      role: "Diretora de Investimentos",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      description: "Especialista em análise de mercado"
    },
    {
      name: "Roberto Costa",
      role: "Gestor de Patrimônio",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      description: "15 anos em gestão de fortunas"
    }
  ];

  return (
    <div id="equipe" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
          <p className="text-xl text-gray-600">Profissionais experientes e dedicados ao seu sucesso financeiro</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#642434] font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}