import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { to: "/", label: "Início" },
    { to: "/sobre", label: "Sobre" },
    { to: "/servicos", label: "Serviços" },
    { to: "/investimentos", label: "Investimentos" },
    { to: "/equipe", label: "Equipe" },
    { to: "/noticias", label: "Notícias" },
    { to: "/faq", label: "FAQ" },
    { to: "/contato", label: "Contato" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-[#642434] text-2xl font-bold">LCO Invest</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={
                  isActive(item.to)
                    ? 'text-[#642434] font-semibold'
                    : 'text-gray-700 hover:text-[#642434]'
                }
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contato"
              className="bg-[#642434] text-white px-4 py-2 rounded-md hover:bg-[#4e1c28] transition-colors"
            >
              Solicitar Proposta
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={
                  isActive(item.to)
                    ? 'block px-3 py-2 text-[#642434] font-semibold'
                    : 'block px-3 py-2 text-gray-700 hover:text-[#642434]'
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}