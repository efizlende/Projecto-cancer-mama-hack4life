import React, { useState, ChangeEvent, FormEvent } from 'react';

interface ConteudoEducacional {
  titulo: string;
  descricao: string;
  tipoConteudo: string;
  imagem?: string;
  video?: string;
  documento?: string;
}

const CreateConteudo: React.FC = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tipoConteudo, setTipoConteudo] = useState('');
  const [imagem, setImagem] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [documento, setDocumento] = useState<File | null>(null);
  const [conteudos, setConteudos] = useState<ConteudoEducacional[]>([]);

  const handleFileChange = (setter: React.Dispatch<React.SetStateAction<File | null>>) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setter(e.target.files[0]);
    }
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setter(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Adiciona o novo conteúdo ao JSON simulado
    const novoConteudo: ConteudoEducacional = {
      titulo,
      descricao,
      tipoConteudo,
      imagem: imagem?.name || undefined,
      video: video?.name || undefined,
      documento: documento?.name || undefined,
    };

    setConteudos([...conteudos, novoConteudo]);
    setTitulo('');
    setDescricao('');
    setTipoConteudo('');
    setImagem(null);
    setVideo(null);
    setDocumento(null);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Publicar Conteúdo Educacional</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Título</label>
          <input
            type="text"
            value={titulo}
            onChange={handleInputChange(setTitulo)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Descrição</label>
          <textarea
            value={descricao}
            onChange={handleInputChange(setDescricao)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Tipo de Conteúdo</label>
          <input
            type="text"
            value={tipoConteudo}
            onChange={handleInputChange(setTipoConteudo)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload de Imagem</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange(setImagem)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload de Vídeo</label>
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange(setVideo)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload de Documento</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange(setDocumento)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Publicar</button>
      </form>

      {/* Simulação de Exibição de Conteúdos */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Conteúdos Publicados</h2>
        {conteudos.map((conteudo, index) => (
          <div key={index} className="mb-4 p-4 bg-white rounded shadow">
            <h3 className="text-xl font-bold">{conteudo.titulo}</h3>
            <p>{conteudo.descricao}</p>
            <p className="text-sm text-gray-600">Tipo: {conteudo.tipoConteudo}</p>
            {conteudo.imagem && <p>Imagem: {conteudo.imagem}</p>}
            {conteudo.video && <p>Vídeo: {conteudo.video}</p>}
            {conteudo.documento && <p>Documento: {conteudo.documento}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateConteudo;
