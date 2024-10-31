import React, { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';
import { Job } from '../types';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search } from 'lucide-react';

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Dados estáticos simulando uma chamada à API
    const staticJobs: Job[] = [
      {
        id: 1,
        title: 'Desenvolvedor Frontend',
        description: 'Desenvolvimento de interfaces modernas e responsivas com React e Tailwind CSS.',
        location: 'São Paulo, SP',
        type: 'full-time',
        level: 'pleno',
        salary: 'R$ 8.000 - R$ 12.000',
        requirements: [
          'Experiência com React e TypeScript',
          'Conhecimento em Tailwind CSS',
          'Experiência com Git',
          'Bom trabalho em equipe'
        ],
        postedAt: '2024-03-15'
      },
      {
        id: 2,
        title: 'Desenvolvedor Backend',
        description: 'Desenvolvimento de APIs RESTful e microsserviços usando Node.js e MongoDB.',
        location: 'Remoto',
        type: 'full-time',
        level: 'senior',
        salary: 'R$ 12.000 - R$ 16.000',
        requirements: [
          'Experiência com Node.js e TypeScript',
          'Conhecimento em MongoDB e PostgreSQL',
          'Experiência com Docker',
          'Conhecimento em AWS'
        ],
        postedAt: '2024-03-14'
      }
    ];
    setJobs(staticJobs);
  }, []);

  const handleApply = (jobId: number) => {
    console.log(`Aplicou para a vaga ${jobId}`);
    
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Vagas Disponíveis
          </h1>
          <p className="text-gray-600 mb-6">
            Encontre a oportunidade perfeita para sua carreira
          </p>
          
          <div className="flex gap-2 max-w-md mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Buscar vagas..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" onClick={() => setSearchTerm('')}>
              Limpar
            </Button>
          </div>
        </div>

        {filteredJobs.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">
              Nenhuma vaga encontrada. Tente ajustar seus critérios de busca.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <JobCard 
                key={job.id} 
                job={job} 
                onApply={handleApply}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;