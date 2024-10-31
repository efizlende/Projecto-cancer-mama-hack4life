import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Job } from '../types/index';
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  MapPin,
  Calendar,
  BriefcaseIcon,
  DollarSign,
  ArrowLeft,
  Clock,
  Users,
  GraduationCap,
  CheckCircle,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando chamada à API
    const fetchJob = async () => {
      setLoading(true);
      try {
        // Aqui você substituiria por uma chamada real à API
        const staticJob: Job = {
          id: parseInt(id || ''),
          title: 'Desenvolvedor Frontend Senior',
          description: 'Procuramos um desenvolvedor Frontend Senior para liderar o desenvolvimento de interfaces modernas e responsivas em nossa plataforma principal.',
          location: 'São Paulo, SP (Híbrido)',
          type: 'full-time',
          level: 'senior',
          salary: 'R$ 15.000 - R$ 18.000',
          requirements: [
            'Mínimo de 5 anos de experiência com desenvolvimento Frontend',
            'Proficiência em React, TypeScript e arquitetura de aplicações',
            'Experiência com Tailwind CSS e design systems',
            'Conhecimento em testes automatizados (Jest, Testing Library)',
            'Experiência com CI/CD e Git',
          ],
          benefits: [
            'Plano de saúde e dental',
            'Vale refeição/alimentação',
            'Gympass',
            'Auxílio home office',
            'Participação nos lucros',
            'Horário flexível',
          ],
          responsibilities: [
            'Liderar o desenvolvimento de novas features',
            'Mentoriar desenvolvedores juniores',
            'Participar de decisões arquiteturais',
            'Realizar code reviews',
            'Colaborar com o time de design',
          ],
          postedAt: '2024-03-15',
          team: 'Produto',
          department: 'Tecnologia',
        };
        
        setJob(staticJob);
      } catch (error) {
        console.error('Erro ao carregar vaga:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-lg text-gray-600">Carregando...</div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Vaga não encontrada</h2>
        <p className="text-gray-600 mb-6">A vaga que você está procurando não existe ou foi removida.</p>
        <Button onClick={() => navigate('/jobs')}>
          Voltar para lista de vagas
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate('/jobs')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para vagas
        </Button>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {job.title}
                </CardTitle>
                <CardDescription className="mt-2">
                  {job.department} · {job.team}
                </CardDescription>
              </div>
              <Button size="lg">
                Candidatar-se
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary" className="text-sm">
                {job.type}
              </Badge>
              <Badge variant="outline" className="text-sm">
                {job.level}
              </Badge>
              {job.salary && (
                <Badge variant="secondary" className="text-sm">
                  {job.salary}
                </Badge>
              )}
            </div>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <BriefcaseIcon className="h-4 w-4" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>Publicado em: {new Date(job.postedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="h-4 w-4" />
                <span>{job.team}</span>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description">
                <AccordionTrigger>Descrição da vaga</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 whitespace-pre-line">
                    {job.description}
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="requirements">
                <AccordionTrigger>Requisitos</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="responsibilities">
                <AccordionTrigger>Responsabilidades</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-600">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="benefits">
                <AccordionTrigger>Benefícios</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>

          <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              ID da vaga: {job.id}
            </div>
            <Link></Link>
            <Button size="lg">
            Visualizar vaga
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
export default JobDetails;