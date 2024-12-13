// src/components/Edit.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchVagaById, updateVagaById, deleteVagaById } from '../../api/Admin/edit.delete.vaga';

const Edit = () => {
  const { id } = useParams<{ id: string }>();
  const [departamento, setDepartamento] = useState('');
  const [areaAtuacao, setAreaAtuacao] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prazo, setPrazo] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar o carregamento
  const navigate = useNavigate();

  useEffect(() => {
    const getVaga = async () => {
      try {
        const vaga = await fetchVagaById(id!);
        if (vaga) {
          setDepartamento(vaga.departamento || ''); // Deixa o campo vazio se não houver valor
          setAreaAtuacao(vaga.area_atuacao || '');
          setDescricao(vaga.descricao || '');
          setPrazo(vaga.prazo || '');
        }
      } catch (error) {
        console.error('Erro ao buscar dados da vaga:', error);
      } finally {
        setIsLoading(false); // Finaliza o carregamento
      }
    };

    getVaga();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedVaga = { departamento, area_atuacao: areaAtuacao, descricao, prazo: prazo ? new Date(prazo) : null };
    await updateVagaById(id!, updatedVaga);
    navigate('/vagas');
  };

  const handleDelete = async () => {
    await deleteVagaById(id!);
    navigate('/vagas');
  };

  if (isLoading) {
    return <p>Carregando dados da vaga...</p>;
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Editar Vaga</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Departamento</label>
          <input
            type="text"
            value={departamento}
            onChange={(e) => setDepartamento(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Área de Atuação</label>
          <input
            type="text"
            value={areaAtuacao}
            onChange={(e) => setAreaAtuacao(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Descrição</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Prazo</label>
          <input
            type="date"
            value={prazo}
            onChange={(e) => setPrazo(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="flex justify-between">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Atualizar</button>
          <button type="button" onClick={handleDelete} className="bg-red-500 text-white p-2 rounded">Apagar</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
