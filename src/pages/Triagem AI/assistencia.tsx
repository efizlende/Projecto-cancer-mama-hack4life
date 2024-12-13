import React, { useState, useEffect } from 'react';

const AssistenciaPage: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; from: string }[]>([
    { text: 'Olá, seja bem-vinda à nossa auto triagem para o câncer de mama. Vamos começar?', from: 'assistant' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isWaiting, setIsWaiting] = useState(false);

  const questions = [
    'Você já fez algum autoexame da mama antes?',
    'Você já percebeu algum nódulo ou alteração na sua mama?',
    'Você já teve histórico de câncer de mama na sua família?',
    'Você está sentindo dor ou desconforto na região da mama?',
    'Há algum tipo de secreção saindo do seu mamilo?',
  ];

  let questionIndex = 0;

  // Função para simular o assistente respondendo
  const askQuestion = () => {
    if (questionIndex < questions.length) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: questions[questionIndex], from: 'assistant' }
      ]);
      questionIndex++;
      setIsWaiting(true);
    } else {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Agradecemos suas respostas! Agora vamos analisar suas respostas e recomendar um próximo passo.', from: 'assistant' }
      ]);
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Recomendamos que você procure a unidade de saúde mais próxima ou entre em contato com um profissional de confiança para um acompanhamento adequado.', from: 'assistant' }
        ]);
      }, 2000);
    }
  };

  // Função para enviar a resposta do usuário
  const handleSendMessage = () => {
    if (userInput.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userInput, from: 'user' }
      ]);
      setUserInput('');
      setIsWaiting(false);
      askQuestion();
    }
  };

  useEffect(() => {
    if (questionIndex === 0) {
      askQuestion();
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-100 to-blue-50 p-4">
      {/* Container do chat */}
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg flex flex-col space-y-4 overflow-auto h-4/5">
        <div className="space-y-4 flex-grow overflow-auto">
          {/* Exibindo as mensagens do chat */}
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message.from === 'assistant' ? 'text-left' : 'text-right'
              }`}
            >
              <div
                className={`inline-block p-3 rounded-lg ${
                  message.from === 'assistant'
                    ? 'bg-blue-200 text-gray-800'
                    : 'bg-blue-500 text-white'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        {/* Campo de entrada e botão de envio */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Digite sua resposta..."
            className="flex-grow p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSendMessage}
            disabled={isWaiting}
            className={`p-3 rounded-lg ${
              isWaiting
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            Enviar
          </button>
        </div>
      </div>

      {/* Ícone piscando para suporte */}
      <div className="absolute bottom-4 right-4">
        <div className="relative">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white text-sm font-bold">Ajuda?</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistenciaPage;
