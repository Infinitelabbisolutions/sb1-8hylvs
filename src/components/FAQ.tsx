import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: "Como começar a investir?",
      answer: "Para começar, agende uma consulta gratuita com nossos especialistas. Avaliaremos seu perfil e objetivos para criar uma estratégia personalizada."
    },
    {
      question: "Qual o investimento mínimo?",
      answer: "Trabalhamos com planos personalizados a partir de R$ 10.000, adequados a diferentes perfis de investidores."
    },
    {
      question: "Como funciona a gestão de patrimônio?",
      answer: "Nossa gestão é baseada em análise criteriosa do mercado e diversificação de investimentos, sempre alinhada aos seus objetivos."
    },
    {
      question: "Quais são os riscos envolvidos?",
      answer: "Todo investimento possui riscos. Trabalhamos com análise detalhada e gestão de riscos para proteger seu patrimônio."
    }
  ];

  return (
    <div id="faq" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
          <p className="text-xl text-gray-600">Tire suas dúvidas sobre nossos serviços</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}