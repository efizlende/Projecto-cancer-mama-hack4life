import React from 'react';
import { useNavigate } from 'react-router-dom';

const PreTriagemPage: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    const confirmed = window.confirm('Você está pronta para começar?');
    if (confirmed) {
      navigate('/paciente/assistencia'); // Substitua '/assistencia' pela rota correta
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink-100 to-pink-50 text-center p-4">
      {/* Cabeçalho de Boas-Vindas */}
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg text-pink-800">
        <h1 className="text-3xl font-semibold mb-4">Bem-vinda à Auto Triagem</h1>
        <p className="text-lg mb-6">
          Fique calma, este processo de autoexame é simples e você estará em boas mãos. Vamos guiá-la passo a passo durante o exame.
        </p>

        <div className="space-y-4 text-left">
          <h2 className="text-xl font-medium text-pink-600">Como Funciona a Triagem?</h2>
          <ul className="list-decimal pl-6 text-gray-700">
            <li>Primeiro, faremos uma pergunta de cada vez para garantir que todas as informações sejam coletadas.</li>
            <li>Você pode ser instruída a realizar um exame físico, como apalpar a mama. Não se preocupe, estaremos aqui para guiá-la.</li>
            <li>Após coletarmos as informações, a IA fará uma pré-análise e fornecerá recomendações de acordo com os dados recebidos.</li>
          </ul>
          
          <div className="mt-6">
            <p className="text-lg text-pink-700 font-semibold">
              Não tenha pressa, a sua saúde é nossa prioridade.
            </p>
            <p className="mt-2 text-md text-gray-600">
              Se em algum momento precisar de ajuda, um assistente virtual estará disponível para orientá-la durante todo o processo.
            </p>
          </div>
        </div>

        {/* Instruções tranquilizadoras */}
        <div className="mt-8 bg-pink-600 text-white p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Dicas Importantes:</h2>
          <ul className="list-inside list-disc text-white text-lg">
            <li>Respire profundamente e se concentre. O processo é fácil e rápido.</li>
            <li>Realize o autoexame com calma, tocando cuidadosamente as áreas indicadas.</li>
            <li>Se sentir desconforto, avise para que possamos orientá-la.</li>
          </ul>
        </div>

        {/* Botão para iniciar */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleStart}
            className="bg-pink-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            Iniciar Autoexame
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreTriagemPage;
