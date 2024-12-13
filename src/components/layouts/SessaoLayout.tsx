import React, { useState } from 'react';
import '../../assets/home.css';

interface PacienteLayoutProps {
  children: React.ReactNode;
}

const SessaoLayout: React.FC<PacienteLayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <>
    

      {/* Conteúdo Principal */}
      <main className="pt-16">{children}</main>

    </>
  );
};

export default SessaoLayout;
