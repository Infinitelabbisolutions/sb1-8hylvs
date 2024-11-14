import React from 'react';
import { BarChart3, Shield, TrendingUp, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <BarChart3 className="w-12 h-12 text-[#642434]" />,
      title: "Portfolio Management",
      description: "Expert management of your investment portfolio tailored to your risk tolerance and goals."
    },
    {
      icon: <Shield className="w-12 h-12 text-[#642434]" />,
      title: "Wealth Protection",
      description: "Strategies to protect and preserve your wealth for generations to come."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-[#642434]" />,
      title: "Investment Strategy",
      description: "Customized investment strategies based on market analysis and your objectives."
    },
    {
      icon: <Users className="w-12 h-12 text-[#642434]" />,
      title: "Financial Planning",
      description: "Comprehensive financial planning for individuals and businesses."
    }
  ];

  return (
    <div id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive investment solutions for your financial success</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}