import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { motion } from 'framer-motion'; // Importando o motion para animações

const Home: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'img3.jpg',
    'img2.jpg',
    'img1.jpg',
    'img1.jpg',
    'img2.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Troca a imagem a cada 5 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente for desmontado
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      {/* Slideshow de imagens */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10 flex-grow">
        <div className="space-y-12">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-blue-300 from-gray-600 to-indigo-600">
              Bem-vinda à sua plataforma de apoio
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Aqui, você encontra tudo o que precisa para o cuidado da sua saúde, apoio psicológico e a conscientização sobre o câncer de mama.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/paciente/conscientizacao">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-700 transition-colors duration-300">
                  Comece sua jornada
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="hover:bg-gray-200 transition-colors duration-300">
                  Saiba mais sobre a plataforma
                </Button>
              </Link>
            </div>
          </section>

          {/* Informações sobre a plataforma */}
          <section className="bg-blue-300 text-white py-16">
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold">O que você encontra aqui:</h2>
              <p className="text-lg max-w-2xl mx-auto">
                Em nossa plataforma, você terá acesso a informações vitais sobre o câncer de mama, poderás também efetuar um diagnóstico precoce na sua casa com um assistente virtual, e acompanhamento com profissionais de saúde e psicólogos. Estamos aqui para oferecer apoio significativo, proporcionando um espaço seguro e acolhedor para mulheres em todas as fases de sua jornada.
              </p>
              <div className="flex justify-center gap-8 mt-6">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }} // Animação de scale no hover
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold">Conscientização</h3>
                  <p>Artigos, livros e recursos para entender melhor a doença.</p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }} // Animação de scale no hover
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold">Acompanhamento</h3>
                  <p>Consultas e sessões com especialistas da área de saúde e psicólogos.</p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }} // Animação de scale no hover
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold">Diagnóstico Precoce</h3>
                  <p>Informações sobre como realizar o autoexame e detectar sinais precoces.</p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="grid md:grid-cols-3 gap-6 pt-12">
            <motion.div 
              className="hover:bg-blue-200 transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }} // Inicializa invisível e abaixo
              animate={{ opacity: 1, y: 0 }} // Anima para visível e na posição normal
              transition={{ duration: 0.6 }} // Duração da animação
            >
              <Card>
                <CardHeader>
                  <CardTitle>Pre diagnóstico da doença através de um assistente virtual</CardTitle>
                 {/*} <CardDescription>Acompanhamento contínuo com especialistas.</CardDescription>*/}
                </CardHeader>
                <CardContent>
                  <p>Oferecemos suporte psicológico e médico para todas as mulheres.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              className="hover:bg-blue-200 transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }} // Inicializa invisível e abaixo
              animate={{ opacity: 1, y: 0 }} // Anima para visível e na posição normal
              transition={{ duration: 0.6, delay: 0.2 }} // Duração e atraso da animação
            >
              <Card>
                <CardHeader>
                  <CardTitle>Conscientização</CardTitle>
                  <CardDescription>Artigos e conteúdos exclusivos sobre prevenção e cuidados.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Conheça os últimos avanços sobre o câncer de mama e dicas para o diagnóstico precoce.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              className="hover:bg-blue-200 transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }} // Inicializa invisível e abaixo
              animate={{ opacity: 1, y: 0 }} // Anima para visível e na posição normal
              transition={{ duration: 0.6, delay: 0.4 }} // Duração e atraso da animação
            >
              <Card>
                <CardHeader>
                  <CardTitle>Espaço Seguro</CardTitle>
                  <CardDescription>Encontre uma comunidade de apoio.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Conecte-se com outras mulheres e compartilhe experiências em um ambiente acolhedor.</p>
                </CardContent>
              </Card>
            </motion.div>
          </section>

          {/* Sensibilização adicional */}
          <section className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-800">Por que continuar conosco?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              O apoio não termina aqui. A plataforma está em constante evolução, sempre trazendo novos recursos e informações atualizadas para garantir o melhor acompanhamento possível. Ao continuar conosco, você terá acesso a materiais educativos, grupos de apoio, consultorias especializadas, e ainda mais terá a possibilidade de fazer um autoexame onde você estiver com um assistente virtual.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Link to="/auth/login">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-700 transition-colors duration-300">
                  Comece sua jornada
                </Button>
              </Link>
            </div>
          </section>

          <section className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-800">Apoio psicológico contínuo</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Sabemos que a jornada pode ser difícil. Por isso, oferecemos acompanhamento psicológico e terapias em grupo para ajudar a fortalecer sua saúde mental.
            </p>
          </section>

          <section className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-800">Junte-se à nossa comunidade</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Estamos formando uma rede de mulheres empoderadas que se ajudam mutuamente. Ao se juntar à nossa plataforma, você se torna parte de algo maior: uma comunidade de força, cuidado e apoio.
            </p>
          </section>


           {/* Seção de Nossos Parceiros */}
           <section className="bg-blue-100 py-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Nossos Parceiros</h2>
            <motion.div
              className="flex overflow-hidden justify-start gap-8 items-center" 
              animate={{ x: ['0%', '-100%'] }} 
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <div className="flex-shrink-0">
                <img src="../../public/enfermeiros-ordem.png" alt="Parceiro 1" className="h-16" />
              </div>
              <div className="flex-shrink-0">
                <img src="../../public/medicos-ordem.jpg" alt="Parceiro 2" className="h-16" />
              </div>
              <div className="flex-shrink-0">
                <img src="../../public/enfermeiros-ordem.png" alt="Parceiro 2" className="h-16" />
              </div>
              <div className="flex-shrink-0">
                <img src="../../public/medicos-ordem.jpg" alt="Parceiro 2" className="h-16" />
              </div>
              <div className="flex-shrink-0">
                <img src="../../public/enfermeiros-ordem.png" alt="Parceiro 2" className="h-16" />
              </div>
              <div className="flex-shrink-0">
                <img src="../../public/medicos-ordem.jpg" alt="Parceiro 2" className="h-16" />
              </div>
              <div className="flex-shrink-0">
                <img src="../../public/enfermeiros-ordem.png" alt="Parceiro 2" className="h-16" />
              </div>
              <div className="flex-shrink-0">
                <img src="../../public/medicos-ordem.jpg" alt="Parceiro 2" className="h-16" />
              </div>
              <div className="flex-shrink-0">
                <img src="../../public/enfermeiros-ordem.png" alt="Parceiro 2" className="h-16" />
              </div>
              <div className="flex-shrink-0">
                <img src="../../public/medicos-ordem.jpg" alt="Parceiro 2" className="h-16" />
              </div>
              <div className="flex-shrink-0">
                <img src="../../public/enfermeiros-ordem.png" alt="Parceiro 2" className="h-16" />
              </div>
              <div className="flex-shrink-0">
                <img src="../../public/medicos-ordem.jpg" alt="Parceiro 2" className="h-16" />
              </div>
              
              {/* Adicione mais logotipos conforme necessário */}
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
