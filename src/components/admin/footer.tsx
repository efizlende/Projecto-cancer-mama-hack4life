

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 py-4 w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} VivaMae. Todos os direitos reservados.</p>
        <div className="mt-2">
          <a href="/" className="text-gray-600 hover:bg-blue-700 mx-2">Sobre Nós</a>
          <a href="/" className="text-gray-600 hover:bg-blue-700 mx-2">Parceiros</a>
          <a href="/" className="text-gray-600 hover:bg-blue-700 mx-2">Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
