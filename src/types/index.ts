export interface Job {
    id: number;
    title: string;
    description: string;
    location: string;
    type: 'full-time' | 'part-time' | 'contract';
    level: 'junior' | 'pleno' | 'senior';
    salary?: string;
    requirements: string[];
    postedAt: string;
}

export interface Job {
    id: number;
    title: string;
    description: string;
    location: string;
    type: 'full-time' | 'part-time' | 'contract';
    level: 'junior' | 'pleno' | 'senior';
    salary?: string;
    requirements: string[];
    responsibilities: string[];
    benefits: string[];
    postedAt: string;
    team: string;
    department: string;
}