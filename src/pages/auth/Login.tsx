import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Para manipulação de cookies

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();

  // Obtém o array de usuários do estado passado via navegação
  const users = location.state?.users || [];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    // Simula o login com base no array de usuários
    const user = users.find((u: any) => u.email === email && u.senha === password);

    if (!user) {
      setError('Email ou senha inválidos!');
      return;
    }

    // Simulação de geração e armazenamento de token
    const token = 'mockToken12345';
    Cookies.set('authToken', token, { expires: 7 }); // Expira em 7 dias

    // Redireciona com base no tipo de usuário
    if (user.tipoUsuario === 'admin') navigate('/admin');
    else if (user.tipoUsuario === 'profissional') navigate('/profissional');
    else if (user.tipoUsuario === 'paciente') navigate('/paciente/conscientizacao');
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/img1.jpg')", // Substitua pelo link ou caminho da imagem
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-96 transition-transform transform duration-500 ease-in-out scale-95 hover:scale-100">
        <h2 className="text-2xl font-bold mb-4 text-center text-pink-500">Login</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-pink-500">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-pink-500"
              placeholder="Digite seu email"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-pink-500">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-pink-500"
              placeholder="Digite sua senha"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-300 text-white rounded-lg py-2 hover:bg-pink-600 transition duration-200"
          >
            Entrar
          </button>
          <p className="mt-4 text-sm text-center">
            Não tem uma conta?{' '}
            <Link to="/auth/register" className="text-pink-500 hover:underline">
              Registre-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
