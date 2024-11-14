import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Fale Conosco</h2>
          <p className="text-xl text-gray-600">Entre em contato com nossos especialistas</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicite uma Proposta</h3>
            <form>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#642434]"
                  placeholder="Seu nome"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">E-mail</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#642434]"
                  placeholder="Seu e-mail"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Telefone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#642434]"
                  placeholder="Seu telefone"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Mensagem</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#642434]"
                  rows={4}
                  placeholder="Sua mensagem"
                ></textarea>
              </div>
              <button className="w-full bg-[#642434] text-white px-6 py-3 rounded-md hover:bg-[#4e1c28] transition-colors">
                Enviar Mensagem
              </button>
            </form>
          </div>
          
          <div>
            <div className="space-y-8 mb-8">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#642434]" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Telefone</h3>
                  <p className="text-gray-600">(11) 5555-1234</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#642434]" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">E-mail</h3>
                  <p className="text-gray-600">contato@lcoinvest.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#642434]" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Endereço</h3>
                  <p className="text-gray-600">Av. Paulista, 1000<br />São Paulo, SP</p>
                </div>
              </div>
            </div>
            
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
        </div>
      </div>
    </div>
  );
}