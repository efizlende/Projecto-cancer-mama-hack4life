import React, { useState} from 'react';
import { FaArrowLeft, FaPaperclip, FaSmile, FaMicrophone } from 'react-icons/fa';
import '../../assets/sessao.css';
const ChatSessionPage: React.FC = () => {
  const [messages, setMessages] = useState([
    { sender: 'user', text: 'Olá, Dr. Clara! Como estou indo no tratamento?', timestamp: '10:15 AM' },
    { sender: 'doctor', text: 'Olá! Está indo muito bem. Lembre-se de manter a dieta e as consultas.', timestamp: '10:16 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false); // Controle para o efeito de "digitando"

  // Função para enviar uma nova mensagem
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        sender: 'user',
        text: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      
      setMessages([...messages, userMessage]);
      setNewMessage('');
      
      simulateDoctorReply(); // Simula a resposta do Dr.
    }
  };

  // Função para simular o Dr. respondendo
  const simulateDoctorReply = () => {
    setIsTyping(true); // Inicia o efeito de "digitando"
    setTimeout(() => {
      const doctorReply = {
        sender: 'doctor',
        text: 'Continue assim! Vou marcar sua próxima consulta.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      
      setMessages(prevMessages => [...prevMessages, doctorReply]);
      setIsTyping(false); // Para o efeito de "digitando" depois de responder
    }, 3000); // Tempo de "digitação", 3 segundos
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-pink-100 to-pink-50">
      {/* Cabeçalho da Sessão */}
      <div className="bg-pink-600 p-4 flex items-center space-x-3 text-white">
        <FaArrowLeft className="text-xl cursor-pointer" />
        <img
          src="../../../public/depoimentos/d1.webp"
          alt="Profissional"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">Dra. Clara Mendes</h3>
          <p className="text-sm">Psicóloga</p>
        </div>
      </div>

      {/* Histórico de Mensagens */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
          >
            <div
              className={`max-w-[75%] p-3 rounded-lg ${message.sender === 'user' ? 'bg-pink-600 text-white' : 'bg-white text-gray-800'}`}
            >
              <p>{message.text}</p>
              <p className="text-xs text-gray-400 mt-1">{message.timestamp}</p>
            </div>
          </div>
        ))}
        
        {/* Efeito de "digitando" */}
        {isTyping && (
          <div className="flex justify-start animate-fadeIn">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-pulse"></div>
              <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-pulse"></div>
              <div className="w-2.5 h-2.5 bg-gray-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-sm text-gray-500 ml-2">Dr. Clara está digitando...</span>
          </div>
        )}
      </div>

      {/* Caixa de Entrada de Mensagem */}
      <div className="flex items-center p-4 bg-white border-t border-gray-200">
        <div className="flex items-center space-x-3 w-full">
          <FaPaperclip className="text-gray-600 text-2xl cursor-pointer" />
          <FaSmile className="text-gray-600 text-2xl cursor-pointer" />
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Escreva uma mensagem..."
            className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <FaMicrophone className="text-gray-600 text-2xl cursor-pointer" />
        </div>
        <button
          onClick={handleSendMessage}
          className="ml-4 text-white bg-pink-600 px-4 py-2 rounded-full hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ChatSessionPage;
