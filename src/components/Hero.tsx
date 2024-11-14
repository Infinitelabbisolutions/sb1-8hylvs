import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="pt-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Invista no Seu Futuro com
              <span className="text-[#642434]"> Confiança</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Orientação financeira especializada e soluções de investimento personalizadas para seus objetivos.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#642434] text-white px-6 py-3 rounded-md hover:bg-[#4e1c28] transition-colors flex items-center gap-2">
                Comece a Investir <ArrowRight size={20} />
              </button>
              <button className="border-2 border-[#642434] text-[#642434] px-6 py-3 rounded-md hover:bg-[#642434] hover:text-white transition-colors">
                Saiba Mais
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80"
              alt="Análise de Investimentos"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}