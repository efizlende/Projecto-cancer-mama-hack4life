import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Home, Mail, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Alert, AlertDescription } from '../components/ui/alert';

const ApplicationSuccess = () => {
  const nextSteps = [
    {
      icon: Mail,
      title: 'Confirmação por Email',
      description: 'Você receberá um email de confirmação com os detalhes da sua candidatura.'
    },
    {
      icon: Clock,
      title: 'Análise do Perfil',
      description: 'Nossa equipe de RH analisará seu perfil dentro de 5 dias úteis.'
    },
    {
      icon: ArrowRight,
      title: 'Próximas Etapas',
      description: 'Se seu perfil for compatível, entraremos em contato para as próximas etapas.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle2 className="h-12 w-12 text-green-600 animate-bounce" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-3">
            Candidatura Enviada com Sucesso!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Obrigado por se candidatar. Estamos ansiosos para conhecer mais sobre você!
          </p>

          <Alert className="mb-8 mx-auto max-w-2xl">
            <AlertDescription>
              Você receberá um email de confirmação em breve com o número de protocolo da sua candidatura.
            </AlertDescription>
          </Alert>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Próximos Passos
              </h2>
              
              <div className="grid gap-6 md:grid-cols-3">
                {nextSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={index}
                      className="relative group"
                    >
                      <div className="flex flex-col items-center p-4 rounded-lg bg-white border border-gray-200 transition-all duration-200 hover:shadow-md">
                        <Icon className="h-6 w-6 text-blue-600 mb-3" />
                        <h3 className="font-medium text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 text-center">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
            >
              <Home className="w-4 h-4 mr-2" />
              Voltar à Página Inicial
            </Link>
            
            <Link
              to="/minhas-candidaturas"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
            >
              Ver Minhas Candidaturas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSuccess;

// Add these styles to your global CSS or create a new animation
const styles = `
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}
`;