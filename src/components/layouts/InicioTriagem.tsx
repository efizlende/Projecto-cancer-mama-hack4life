

import '../../assets/home.css';


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
