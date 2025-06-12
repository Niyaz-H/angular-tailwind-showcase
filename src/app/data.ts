export interface Customer {
  id: number;
  name: string;
  company: string;
}

export interface Project {
  id: string;
  name: string;
  customer: Customer;
  status: 'Active' | 'Completed' | 'On Hold';
  deadline: string;
  budget: number;
}

export const mockProjects: Project[] = [
  {
    id: 'PROJ-001',
    name: 'ERP System Implementation',
    customer: { id: 1, name: 'John Doe', company: 'Innovate Inc.' },
    status: 'Active',
    deadline: '2024-12-31',
    budget: 150000,
  },
  {
    id: 'PROJ-002',
    name: 'Mobile App Development',
    customer: { id: 2, name: 'Jane Smith', company: 'Tech Solutions' },
    status: 'Completed',
    deadline: '2024-08-15',
    budget: 75000,
  },
  {
    id: 'PROJ-003',
    name: 'Website Redesign',
    customer: { id: 3, name: 'Peter Jones', company: 'Creative Minds' },
    status: 'Active',
    deadline: '2024-10-01',
    budget: 50000,
  },
  {
    id: 'PROJ-004',
    name: 'Cloud Migration',
    customer: { id: 1, name: 'John Doe', company: 'Innovate Inc.' },
    status: 'On Hold',
    deadline: '2025-02-28',
    budget: 200000,
  },
];