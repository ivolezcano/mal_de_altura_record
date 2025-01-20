'use client';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href=''>
            <Image
              src="/Logo.png" 
              alt="Logo de la empresa" 
              width={80}
              height={80}
            />
          </a>
        </div>

        {/* Menú Hamburguesa */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menú de navegación en desktop */}
        <div className="hidden md:flex space-x-6 text-gray-800 text-white">
          <a href="#nosotros" className="hover:text-blue-500 estilo">NOSOTROS</a>
          <a href="#servicios" className="hover:text-blue-500 estilo">SERVICIOS</a>
          <a href="#trabajos" className="hover:text-blue-500 estilo">TRABAJOS</a>
          <a href="#contacto" className="hover:text-blue-500 estilo">CONTACTO</a>
        </div>
      </div>

      {/* Menú desplegable en móvil */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-white shadow-md mt-4 space-y-4 px-6 py-4 text-gray-800`}
      >
        <a href="#nosotros" className="block hover:text-blue-500 estilo">NOSOTROS</a>
        <a href="#servicios" className="block hover:text-blue-500 estilo">SERVICIOS</a>
        <a href="#trabajos" className="block hover:text-blue-500 estilo">TRABAJOS</a>
        <a href="#contacto" className="block hover:text-blue-500 estilo">CONTACTO</a>
      </div>
    </nav>
  );
};

export default Navbar;