import React from 'react';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export default function FinancialTicker() {
  // Simulação de dados financeiros
  const financialData = [
    { symbol: 'PETR4', name: 'Petrobras', price: 'R$ 38,45', change: '+1.2%', up: true },
    { symbol: 'VALE3', name: 'Vale', price: 'R$ 72,30', change: '-0.5%', up: false },
    { symbol: 'ITUB4', name: 'Itaú', price: 'R$ 32,80', change: '+0.8%', up: true },
    { symbol: 'BBDC4', name: 'Bradesco', price: 'R$ 15,90', change: '+1.5%', up: true },
    { symbol: 'USD', name: 'Dólar', price: 'R$ 4,95', change: '-0.3%', up: false },
    { symbol: 'EUR', name: 'Euro', price: 'R$ 5,35', change: '+0.2%', up: true },
    { symbol: 'BTC', name: 'Bitcoin', price: 'R$ 255.430', change: '+2.1%', up: true },
    { symbol: 'IBOV', name: 'Ibovespa', price: '127.530', change: '+0.9%', up: true }
  ];

  return (
    <div className="bg-gray-900 text-white py-2 fixed w-full z-40 top-16">
      <div className="relative overflow-hidden">
        <div className="flex animate-ticker">
          {[...financialData, ...financialData].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 px-4 whitespace-nowrap"
            >
              <span className="font-semibold">{item.symbol}</span>
              <span className="text-gray-300">{item.price}</span>
              <span className={`flex items-center ${item.up ? 'text-green-400' : 'text-red-400'}`}>
                {item.up ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {item.change}
              </span>
              <span className="text-gray-400">|</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}