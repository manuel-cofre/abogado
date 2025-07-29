import React, { useState } from 'react';
import { Menu, X, Scale } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-slate-900 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-amber-500" />
            <div>
              <h1 className="text-xl font-bold">Diego Cofré</h1>
              <p className="text-xs text-gray-300">Abogados Especialistas</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="hover:text-amber-500 transition-colors duration-200">Inicio</a>
            <a href="#sobre-mi" className="hover:text-amber-500 transition-colors duration-200">Sobre mi</a>
            <a href="#servicios" className="hover:text-amber-500 transition-colors duration-200">Servicios</a>
            <a href="#contacto" className="hover:text-amber-500 transition-colors duration-200">Contacto</a>
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <a href="#inicio" className="hover:text-amber-500 transition-colors duration-200 py-2">Inicio</a>
              <a href="#sobre-mi" className="hover:text-amber-500 transition-colors duration-200 py-2">Sobre mi</a>
              <a href="#servicios" className="hover:text-amber-500 transition-colors duration-200 py-2">Servicios</a>
              <a href="#contacto" className="hover:text-amber-500 transition-colors duration-200 py-2">Contacto</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;