import React from 'react';
import { Users, Book, MessageCircle, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Exemplo de dados para o gráfico
const data = [
  { department: 'Triagem de Sintomas', count: 12 },
  { department: 'Grupos de Suporte', count: 15 },
  { department: 'Consultas Online', count: 8 },
  { department: 'Conteúdos Educativos', count: 5 },
  { department: 'Centros de Saúde', count: 10 },
];

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Dashboard - Administrador</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4.2 gap-6">
        <Link to="/profissionais" className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <Users className="text-2xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Profissionais Cadastrados</h3>
              <p className="text-3xl font-bold mt-2 text-gray-800">25</p>
            </div>
          </div>
        </Link>
        <Link to="/conteudos" className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <Book className="text-2xl text-green-500 mr-4" />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Conteúdos Educativos</h3>
              <p className="text-3xl font-bold mt-2 text-gray-800">35</p>
            </div>
          </div>
        </Link>
        <Link to="/campanhas" className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <MessageCircle className="text-2xl text-purple-500 mr-4" />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Campanhas SMS</h3>
              <p className="text-3xl font-bold mt-2 text-gray-800">Ativas</p>
            </div>
          </div>
        </Link>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center">
            <Shield className="text-2xl text-red-500 mr-4" />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Interações Monitoradas</h3>
              <p className="text-3xl font-bold mt-2 text-gray-800">120</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gráfico de atividades monitoradas */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Atividades Monitoradas</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="department" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#1E90FF" /> {/* Cor alterada para bg-blue-700 */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
