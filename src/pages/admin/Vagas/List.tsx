import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchVagas, deleteVaga } from '../../api/Admin/list.vagas'; // Ajuste o caminho conforme a estrutura do seu projeto

const List: React.FC = () => {
  const [vagas, setVagas] = useState<any[]>([]); // O tipo pode ser ajustado conforme a estrutura real de 'vaga'

  useEffect(() => {
    const loadVagas = async () => {
      try {
        const vagasData = await fetchVagas();
        setVagas(vagasData); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error('Erro ao carregar vagas:', error);
      }
    };

    loadVagas();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteVaga(id); // Chama a função de deletar
      setVagas(vagas.filter(vaga => vaga.id !== id)); // Atualiza a lista localmente após a exclusão
    } catch (error) {
      console.error('Erro ao apagar vaga:', error);
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Vagas Publicadas</h1>
      <Link to="/vagas/create" className="bg-blue-500 text-white p-2 rounded">Criar Nova Vaga</Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {vagas.map((vaga) => (
          <div key={vaga.id} className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-medium text-gray-800">{vaga.departamento}</h3>
            <p className="text-gray-600">{vaga.descricao}</p>
            <p className="text-gray-800 font-bold mt-2">{vaga.area_atuacao}</p>
            <p className="text-gray-600 mt-2">Prazo: {new Date(vaga.prazo).toLocaleDateString()}</p>
            <div className="flex justify-between mt-4">
            <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
  <Link to={`/vagas/edit/${vaga.id}`} className="text-white">
    Editar
  </Link>
</button>
<button 
  onClick={() => handleDelete(vaga.id)} 
  className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
>
  Apagar
</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
