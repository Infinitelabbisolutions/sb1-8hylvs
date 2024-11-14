import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">LCO Invest</h3>
            <p className="text-gray-400">Construindo riqueza através de investimentos inteligentes e orientação especializada.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gestão de Carteira</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Proteção Patrimonial</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Estratégia de Investimentos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Planejamento Financeiro</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LCO Invest. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}