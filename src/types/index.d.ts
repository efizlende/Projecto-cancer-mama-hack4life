export interface Job {
    id: string;
    title: string;
    description: string;
}

export interface Candidate {
    name: string;
    email: string;
    cv: File | null;
}
