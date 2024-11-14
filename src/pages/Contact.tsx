import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-[#642434]" />,
      title: "Telefone",
      details: [
        "(11) 5555-1234",
        "(11) 98765-4321"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-[#642434]" />,
      title: "E-mail",
      details: [
        "contato@lcoinvest.com.br",
        "atendimento@lcoinvest.com.br"
      ]
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#642434]" />,
      title: "Endereço",
      details: [
        "Av. Paulista, 1000",
        "São Paulo, SP - CEP 01310-100"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-[#642434]" />,
      title: "Horário de Atendimento",
      details: [
        "Segunda a Sexta: 9h às 18h",
        "Sábado: 9h às 13h"
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
            <h1 className="text-4xl font-bold mb-6">Fale Conosco</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Estamos aqui para ajudar. Entre em contato conosco.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Envie sua Mensagem</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#642434]"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">Campo obrigatório</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#642434]"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">E-mail inválido</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    {...register("phone", { required: true })}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#642434]"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm">Campo obrigatório</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <select
                    {...register("subject", { required: true })}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#642434]"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="investimentos">Investimentos</option>
                    <option value="consultoria">Consultoria Financeira</option>
                    <option value="outros">Outros Assuntos</option>
                  </select>
                  {errors.subject && (
                    <span className="text-red-500 text-sm">Campo obrigatório</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    {...register("message", { required: true })}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#642434]"
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-500 text-sm">Campo obrigatório</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#642434] text-white px-6 py-3 rounded-md hover:bg-[#4e1c28] transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Informações de Contato</h2>
              <div className="grid gap-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-gray-50 p-3 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098371735976!2d-46.65390668502168!3d-23.564611384683526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1647887829824!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}