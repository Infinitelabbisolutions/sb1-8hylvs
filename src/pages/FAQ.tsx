import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      category: "Investimentos",
      questions: [
        {
          question: "Como começar a investir com a LCO Invest?",
          answer: "Para começar, agende uma consulta gratuita com nossos especialistas. Avaliaremos seu perfil e objetivos para criar uma estratégia personalizada que atenda às suas necessidades."
        },
        {
          question: "Qual o investimento mínimo necessário?",
          answer: "Trabalhamos com planos personalizados a partir de R$ 10.000, adequados a diferentes perfis de investidores e objetivos financeiros."
        },
        {
          question: "Quais tipos de investimentos vocês oferecem?",
          answer: "Oferecemos uma ampla gama de produtos, incluindo renda fixa, renda variável, fundos de investimento, previdência privada e investimentos internacionais."
        }
      ]
    },
    {
      category: "Gestão de Patrimônio",
      questions: [
        {
          question: "Como funciona o serviço de gestão de patrimônio?",
          answer: "Nossa gestão é baseada em análise criteriosa do mercado e diversificação de investimentos, sempre alinhada aos seus objetivos pessoais e tolerância a risco."
        },
        {
          question: "Com que frequência recebo relatórios sobre meus investimentos?",
          answer: "Enviamos relatórios mensais detalhados sobre o desempenho da sua carteira, além de análises trimestrais mais aprofundadas."
        }
      ]
    },
    {
      category: "Segurança e Regulamentação",
      questions: [
        {
          question: "A LCO Invest é regulamentada?",
          answer: "Sim, somos devidamente regulamentados pela CVM e seguimos todas as normas e diretrizes do mercado financeiro brasileiro."
        },
        {
          question: "Como é garantida a segurança dos meus investimentos?",
          answer: "Seus investimentos são custodiados por instituições financeiras de primeira linha e seguem rigorosos protocolos de segurança."
        }
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
            <h1 className="text-4xl font-bold mb-6">Perguntas Frequentes</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Encontre respostas para as principais dúvidas sobre nossos serviços
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const index = categoryIndex * 10 + questionIndex;
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={questionIndex}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-gray-900">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-[#642434]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#642434]" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}