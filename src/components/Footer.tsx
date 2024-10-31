import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-gray-300 py-6 px-4 mt-auto w-full">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <div className="text-center md:text-left">
        <p className="text-sm">&copy; {new Date().getFullYear()} CodeLabs_grupo5. Todos os direitos reservados.</p>
      </div>
      <div className="flex justify-center space-x-4">
        <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition">
          <FaFacebookF />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition">
          <FaTwitter />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-blue-600 transition">
          <FaLinkedinIn />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition">
          <FaInstagram />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;