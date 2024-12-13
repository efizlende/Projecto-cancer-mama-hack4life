import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInfoCircle, FaHandshake, FaSignInAlt } from 'react-icons/fa';
import Logo from '../../public/logo.png';
import '../../src/assets/home.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full p-2 text-white flex justify-between items-center" style={{ backgroundColor: '#DCDCDC', zIndex: 2000 }}>
      {/* Logo e Título */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-8 w-8 mr-2" />
        <Link to="/" className="font-bold text-xl">VivaMãe</Link>
      </div>

      {/* Botão de menu para dispositivos móveis */}
      <div className="block lg:hidden">
        <button 
          onClick={toggleMenu} 
          className="text-white focus:outline-none"
        >
          {isOpen ? '✖️' : '☰'}
        </button>
      </div>

      {/* Links da barra de navegação */}
      <div className={`flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex-grow"></div>

        {/* Abas com ícones */}
        <Link 
          to="/sobre-nos" 
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-300 flex items-center mx-4"
          onClick={() => setIsOpen(false)}
        >
          <FaInfoCircle className="mr-1" />
          Sobre Nós
        </Link>

        <Link 
          to="/parceiros" 
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-300 flex items-center mx-4"
          onClick={() => setIsOpen(false)}
        >
          <FaHandshake className="mr-1" />
          Parceiros
        </Link>

        {/* Botão de Login com animação de destaque */}
        <Link 
          to="/auth/login" 
          className="block mt-4 lg:inline-block lg:mt-0 text-pink hover:text-blue-300 flex items-center mx-4 animate-pulse"
          onClick={() => setIsOpen(false)}
        >
          <FaSignInAlt className="mr-1" />
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
