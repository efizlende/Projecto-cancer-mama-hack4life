import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center flex-wrap">
      <Link to="/" className="font-bold text-xl">cornelder Mocambique</Link>
      <div className="block lg:hidden">
        <button 
          onClick={toggleMenu} 
          className="text-white focus:outline-none"
        >
          {isOpen ? '✖️' : '☰'}
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <div className="text-sm lg:flex-grow">
          <Link 
            to="/jobs" 
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 ml-4"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            Vagas
          </Link>
          {/* Adicione mais links aqui, se necessário */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;