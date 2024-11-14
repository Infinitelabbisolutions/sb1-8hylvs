import React from 'react';

export default function About() {
  return (
    <div id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre a LCO Invest</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Há mais de 15 anos no mercado financeiro, a LCO Invest é referência em gestão de investimentos e planejamento financeiro personalizado.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80"
              alt="Nossa História"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa História</h3>
            <p className="text-gray-600 mb-6">
              Fundada em 2008, a LCO Invest nasceu com o propósito de democratizar o acesso a investimentos de qualidade, oferecendo soluções personalizadas para cada perfil de investidor.
            </p>
            <p className="text-gray-600">
              Nossa equipe de especialistas trabalha incansavelmente para garantir os melhores resultados, sempre priorizando a segurança e a transparência em todas as operações.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}