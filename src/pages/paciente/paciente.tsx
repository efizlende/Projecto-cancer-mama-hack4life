import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const PacientePage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/conscientizacao/s1.jpeg',
    '/conscientizacao/s2.jpg',
    '/conscientizacao/s4.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const educationalVideos = [
    {
      title: 'O que é câncer de mama?',
      videoUrl: 'https://www.youtube.com/watch?v=Id8K--02kbY',
    },
    {
      title: 'Quais sao os sintomas do cancer da mama?',
      videoUrl: 'quais os sintomas do cancro da mama',
    },
    {
      title: 'Como prevenir o cancro da mama',
      videoUrl: 'https://www.youtube.com/watch?v=lTRevKrtB7o',
    },
  ];

  const articlesAndBooks = [
    {
      title: 'Guia para Prevenção do Câncer de Mama',
      imageUrl: 'livros/l1.webp',
      link: 'https://extranet.who.int/ncdccs/Data/MOZ_D1_Normas%20Cancro%20da%20Mama%20web.pdf',
    },
    {
      title: 'Vencendo o Estigma do Câncer de Mama',
      imageUrl: 'l2.jpeg',
      link: 'https://bvsms.saude.gov.br/bvs/periodicos/ccs_artigos/impactos_psicologicos_tratamento_cancer.pdf',
    },
    {
      title: 'Como apoiar mulheres diagnosticadas',
      imageUrl: 'l3.jpg',
      link: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://dialnet.unirioja.es/descarga/articulo/8587194.pdf&ved=2ahUKEwjr8pruwo-KAxUtQEEAHeWBIoYQFnoECBcQAQ&usg=AOvVaw105865hqx-SAH1fUuIkNal',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-100 to-pink-50 relative">
      {/* Slideshow */}
      <div className="relative">
        <div
          className="h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Estamos contigo, vamos juntos quebrar tabus e o estigma social
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Introdução */}
        <section className="text-center space-y-4">
          <p className="text-lg text-gray-700">
            O câncer de mama é um dos mais comuns entre mulheres, mas pode ser tratado com sucesso
            quando diagnosticado precocemente. Nossa missão é educar, apoiar e inspirar.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/paciente/inicio-triagem">
              <button className="px-6 py-3 bg-pink-500 text-white font-bold rounded hover:bg-pink-700 transition">
                Realizar Autoexame
              </button>
            </Link>
            <Link to="/paciente/acompanhamento">
              <button className="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300 transition">
                Receber Acompanhamento
              </button>
            </Link>
          </div>
        </section>

        {/* Sintomas, prevenção e diagnóstico */}
        <section className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'O que é câncer de mama?',
              description:
                'O câncer de mama é uma doença causada pela multiplicação desordenada de células na mama. Conheça os fatores de risco e como identificá-los.',
            },
            {
              title: 'Sintomas',
              description:
                'Nódulo palpável, alterações no formato ou tamanho da mama, e secreções incomuns são sinais de alerta.',
            },
            {
              title: 'Prevenção',
              description:
                'Realize o autoexame regularmente, consulte um médico e adote hábitos saudáveis para reduzir os riscos.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow rounded-lg hover:bg-pink-800 transition-colors duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-pink-600">{item.title}</h3>
              <p className="text-gray-700 mt-2">{item.description}</p>
            </div>
          ))}
        </section>

        {/* Vídeos Educativos */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-center text-pink-600">Vídeos Educativos</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {educationalVideos.map((video, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow rounded-lg hover:bg-pink-100 transition-colors duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold text-gray-800">{video.title}</h3>
                <iframe
                  className="w-full mt-2"
                  height="200"
                  src={video.videoUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </section>

        {/* Artigos e Livros */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-center text-pink-600">Artigos e Livros</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {articlesAndBooks.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow rounded-lg hover:bg-pink-100 transition-colors duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-lg font-bold text-gray-800 mt-2">{item.title}</h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline mt-2 block"
                >
                  Visualizar
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Ícone do WhatsApp */}
      <div className="fixed bottom-4 right-4 flex items-center space-x-3 bg-pink-500 text-white p-3 rounded-full shadow-lg animate-bounce cursor-pointer">
        <FaWhatsapp className="text-3xl" />
        <span className="hidden sm:block font-bold">Tens duvida? Contacte!</span>
      </div>
    </div>
  );
};

export default PacientePage;
