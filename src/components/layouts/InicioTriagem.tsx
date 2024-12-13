import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInfoCircle, FaHandshake } from 'react-icons/fa';
import Logo from '../../../public/logo.png';
import '../../assets/home.css';
import Footer from '../Footer';

interface PacienteLayoutProps {
  children: React.ReactNode;
}

const InicioTriagemLayout: React.FC<PacienteLayoutProps> = ({ children }) => {
  
  return (
    <>
     

      {/* Conteúdo Principal */}
      <main className="pt-16">{children}</main>

    
    </>
  );
};

export default InicioTriagemLayout;
