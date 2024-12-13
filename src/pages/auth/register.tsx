import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  tipoUsuario: string;
  nomeAdmin?: string;
  especializacao?: string;
  certificacao?: string;
  isVerified?: boolean;
}

const Cadastro: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // Vetor para armazenar os usuários
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('paciente');
  const [nomeAdmin, setNomeAdmin] = useState('');
  const [especializacao, setEspecializacao] = useState('');
  const [certificacao, setCertificacao] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validações
    if (!isAnonymous && (!nome || !email || !telefone || !senha)) {
      setMessage('Todos os campos são obrigatórios!');
      return;
    }

    if (tipoUsuario === 'profissional' && (!nomeAdmin || !especializacao || !certificacao)) {
      setMessage('Todos os campos adicionais para o profissional de saúde são obrigatórios!');
      return;
    }

    if (tipoUsuario === 'profissional' && !isVerified) {
      setMessage('O profissional de saúde não foi verificado!');
      return;
    }

    // Criação de um novo usuário
    const newUser: User = {
      nome,
      email,
      telefone,
      senha,
      tipoUsuario,
      nomeAdmin: tipoUsuario === 'profissional' ? nomeAdmin : undefined,
      especializacao: tipoUsuario === 'profissional' ? especializacao : undefined,
      certificacao: tipoUsuario === 'profissional' ? certificacao : undefined,
      isVerified: tipoUsuario === 'profissional' ? isVerified : undefined,
    };

    // Armazena o novo usuário no vetor
    setUsers([...users, newUser]);

    setMessage('Cadastro realizado com sucesso!');
    setTimeout(() => {
      navigate('/auth/login', { state: { users } }); // Redireciona para login
    }, 2000);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center mb-4">Cadastro</h2>

        {message && (
          <div className={`alert ${message.includes('sucesso') ? 'alert-success' : 'alert-danger'} mb-3`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {!isAnonymous && (
            <>
              <div className="mb-3">
                <label className="form-label">Nome</label>
                <input type="text" className="form-control" value={nome} onChange={(e) => setNome(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Telefone</label>
                <input type="text" className="form-control" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Senha</label>
                <input type="password" className="form-control" value={senha} onChange={(e) => setSenha(e.target.value)} />
              </div>
            </>
          )}
          <div className="mb-3">
            <label className="form-label">Tipo de Usuário</label>
            <select
              className="form-select"
              value={tipoUsuario}
              onChange={(e) => setTipoUsuario(e.target.value)}
              disabled={isAnonymous}
            >
              <option value="paciente">Paciente</option>
              <option value="profissional">Profissional de Saúde</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {tipoUsuario === 'profissional' && !isAnonymous && (
            <>
              <div className="mb-3">
                <label className="form-label">Nome do Admin</label>
                <input type="text" className="form-control" value={nomeAdmin} onChange={(e) => setNomeAdmin(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Especialização</label>
                <input type="text" className="form-control" value={especializacao} onChange={(e) => setEspecializacao(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Código de Certificação</label>
                <input type="text" className="form-control" value={certificacao} onChange={(e) => setCertificacao(e.target.value)} />
              </div>
              <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" checked={isVerified} onChange={() => setIsVerified(!isVerified)} />
                <label className="form-check-label">Profissional verificado?</label>
              </div>
            </>
          )}
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" checked={isAnonymous} onChange={() => setIsAnonymous(!isAnonymous)} />
            <label className="form-check-label">Entrar como anônimo</label>
          </div>
          <button type="submit" className="btn btn-danger w-100">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
