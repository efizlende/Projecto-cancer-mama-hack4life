import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import Logo from '../../public/logo.png'; // Ajuste o caminho conforme necessário

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#A9A9A9] text-white py-8 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">

        {/* Logo e Descrição */}
        <div className="mb-4 md:mb-0 flex items-center w-full md:w-auto">
          <img src={Logo} alt="Cornelder Logo" className="h-8 w-8 mr-2" /> {/* Logotipo ao lado */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold mb-1">VivaMae</h2>
            <p className="text-gray-800">Para cada passo, estamos com você.</p>
          </div>
        </div>

        {/* Links de Navegação */}
        <div className="w-full md:w-auto md:flex md:justify-between mt-4 md:mt-0 space-x-8"> {/* Espaçamento entre as colunas */}
          
          {/* Links Rápidos */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Links Rápidos</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/paciente/inicio-triagem" className="text-gray-800 hover:text-black">Quero testar agora</Link>
              <Link to="" className="text-gray-800 hover:text-black">Contato</Link>
              <Link to="" className="text-gray-800 hover:text-black">Privacidade</Link>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com" className="text-gray-800 hover:text-black">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.linkedin.com" className="text-gray-800 hover:text-black">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contatos */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contatos</h3>
            <div className="flex flex-col space-y-2">
              <p className="text-gray-800">Telefone: (+258) 846366613</p>
              <p className="text-gray-800">Email: estamoscomvoce@vivamae.co.mz</p>
              <p className="text-gray-800">Endereço: FCS, Beira, Moçambique</p>
            </div>
          </div>
        </div>
      </div>

      {/* Linha de Copyright */}
      <div className="bg-[#A9A9A9] py-4 mt-6">
        <div className="text-center text-gray-800 text-sm">
          &copy; {new Date().getFullYear()} VivaMae. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
