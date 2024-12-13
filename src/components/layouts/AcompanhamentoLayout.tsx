import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInfoCircle, FaHandshake } from 'react-icons/fa';
import Logo from '../../../public/logo.png';
import '../../assets/home.css';
import Footer from '../Footer';

interface PacienteLayoutProps {
  children: React.ReactNode;
}

const AcompanhamentoLayout: React.FC<PacienteLayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Navbar */}
      <nav
        className="fixed top-0 w-full p-1 flex justify-between items-center"
        style={{ backgroundColor: '#DCDCDC', zIndex: 2000 }}
      >
        {/* Logo e Título */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8 w-8 mr-2" />
          <Link to="/" className="font-bold text-xl text-gray-800">
            VivaMãe
          </Link>
        </div>

        {/* Botão de menu para dispositivos móveis */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 text-2xl focus:outline-none"
          >
            {isOpen ? '✖️' : '☰'}
          </button>
        </div>

        {/* Links da barra de navegação */}
        <div
          className={`lg:flex lg:items-center ${
            isOpen ? 'block' : 'hidden'
          } w-full lg:w-auto`}
        >
          <div className="flex-grow"></div>

          {/* Abas com ícones */}
          <Link
            to="/paciente/inicio-triagem"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-pink-500 flex items-center mx-4 text-lg transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            <FaInfoCircle className="mr-2 text-2xl" />
            Vamos examinar
          </Link>

          <Link
            to="/paciente/acompanhamento"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-pink-500 flex items-center mx-4 text-lg transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            <FaHandshake className="mr-2 text-2xl" />
            Acompanhamento
          </Link>

         
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AcompanhamentoLayout;
