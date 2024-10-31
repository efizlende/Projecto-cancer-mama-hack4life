import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Calendar, MapPin, BriefcaseIcon } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
  onApply: (jobId: number) => void;
}



const JobCard: React.FC<JobCardProps> = ({ job, onApply }) => {
  return (
    <Card className="mb-4 hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold text-gray-900">
              {job.title}
            </CardTitle>
            <div className="flex gap-2 mt-2">
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
          </div>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onApply(job.id)}
          >
            Candidatar-se
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <BriefcaseIcon size={16} />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{job.postedAt}</span>
          </div>
        </div>
        
        <CardDescription className="text-gray-600 mb-4">
          {job.description}
        </CardDescription>
        
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Requisitos:</h4>
          <ul className="list-disc list-inside space-y-1">
            {job.requirements.map((req, index) => (
              <li key={index} className="text-gray-600">{req}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;