import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-12">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Bem-vindo ao Programa de estágio da cornelder Mocambique
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Veja nossas oportunidades de carreira e faça parte do nosso time inovador
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/jobs">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Ver Vagas
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Sobre Nós
                </Button>
              </Link>
            </div>
          </section>

          {/* Features Section */}
          <section className="grid md:grid-cols-3 gap-6 pt-12">
            <Card>
              <CardHeader>
                <CardTitle>Cultura Inovadora</CardTitle>
                <CardDescription>
                  Ambiente que valoriza criatividade e inovação
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Trabalhamos com as mais recentes tecnologias e metodologias ágeis
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Crescimento Profissional</CardTitle>
                <CardDescription>
                  Oportunidades de desenvolvimento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Investimos no crescimento contínuo de nossa equipe
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Benefícios Exclusivos</CardTitle>
                <CardDescription>
                  Pacote completo de benefícios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Oferecemos benefícios competitivos e flexibilidade
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;