import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const AcompanhamentoPage: React.FC = () => {
//  const [currentImage, setCurrentImage] = useState(0);
  const [comments, setComments] = useState<string[]>([]);

  const testimonials = [
    {
      name: 'Maria Oliveira',
      imageUrl: '../../../public/depoimentos/d1.webp',
      testimonial: 'Superar o câncer de mama foi um desafio, mas com apoio e perseverança, eu consegui.',
      videoUrl: 'https://www.youtube.com/watch?v=RHad9Cvzx1k',
    },
    {
      name: 'Ana Silva',
      imageUrl: '../../../public/depoimentos/d2.jpg',
      testimonial: 'A luta contra o câncer é difícil, mas nunca se deve perder a esperança.',
      videoUrl: 'https://www.youtube.com/watch?v=9_cY9VKIl0I',
    },
    {
      name: 'Luísa Costa',
      imageUrl: '../../../public/depoimentos/d3.webp',
      testimonial: 'Tive o apoio de muitos profissionais e familiares. Hoje, sou uma guerreira vencedora.',
      videoUrl: 'https://www.youtube.com/watch?v=vfum4N9QwR8',
    },
  ];

  const professionals = [
    {
      name: 'Dr. João Alves',
      photoUrl: '../../../public/depoimentos/d1.webp',
      specialty: 'Nutricionista',
    },
    {
      name: 'Dra. Clara Mendes',
      photoUrl: '../../../public/depoimentos/d3.webp',
      specialty: 'Psicóloga',
    },
  ];

  const handleCommentSubmit = (comment: string) => {
    if (comment) {
      setComments([...comments, comment]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-100 to-pink-50 relative">
      {/* Slideshow */}
      <div className="relative">
        <div
          className="h-96 bg-cover bg-center"
          style={{ backgroundImage: `url('../../../public/img2.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Estamos juntos nessa jornada
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Introdução */}
        <section className="text-center space-y-4">
          <p className="text-lg text-gray-700">
            O acompanhamento durante o tratamento de câncer de mama é essencial. Estamos aqui para apoiar você.
          </p>
        </section>

        {/* Depoimentos de Pacientes */}
        <section className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow rounded-lg hover:bg-pink-100 transition-colors duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-pink-600">{testimonial.name}</h3>
                  <p className="text-gray-700">{testimonial.testimonial}</p>
                </div>
              </div>

              {/* Video do Depoimento */}
              <div className="mt-4">
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${testimonial.videoUrl.split('v=')[1]}`}
                  title={testimonial.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>

              {/* Comentários */}
              <div className="mt-4 border-t pt-2">
                <textarea
                  placeholder="Deixe seu comentário"
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                ></textarea>
                <button
                  onClick={() => handleCommentSubmit("Novo comentário")} // Exemplo de envio de comentário
                  className="mt-2 px-4 py-1 bg-pink-500 text-white rounded-md text-sm hover:bg-pink-700 transition"
                >
                  Enviar
                </button>
              </div>
              <div className="mt-2">
                {/* Exibindo os comentários */}
                <div className="space-y-2">
                  {comments.map((comment, idx) => (
                    <div key={idx} className="text-sm text-gray-700">
                      {comment}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Acompanhamento Profissional */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-center text-pink-600">Acompanhamento Profissional</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {professionals.map((professional, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow rounded-lg hover:bg-pink-100 transition-colors duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={professional.photoUrl}
                    alt={professional.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{professional.name}</h3>
                    <p className="text-gray-700">{professional.specialty}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link to="/paciente/sessao">
                    <button className="px-6 py-2 bg-pink-500 text-white font-bold rounded hover:bg-pink-700 transition">
                      Entrar em Sessão
                    </button>
                  </Link>
                </div>
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

export default AcompanhamentoPage;
