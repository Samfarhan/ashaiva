export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  clientType: string;
  problem: string;
  systemBuilt: string;
  solution: string;
  outcome: string;
  techStack: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: 'project-01',
    number: 'PROJECT / 01',
    title: 'Intelligent Lead & Qualification Conduit',
    category: 'AI Agents · CRM Automation',
    clientType: 'High-Growth Services & Advisory Firm',
    problem: 'Inbound sales leads waited hours for manual triage, resulting in missed deals and inconsistent CRM record enrichment.',
    systemBuilt: 'Autonomous AI Qualification Pipeline & Speed-to-Lead Dispatch',
    solution: 'Engineered an event-driven webhook gateway that ingests web inquiries, runs natural language AI qualification via custom agent prompts, enriches CRM records automatically, and dispatches instant calendar scheduling links.',
    outcome: 'Achieved sub-20 second response times, 100% qualified routing accuracy, and zero dropped inbound leads across peak traffic periods.',
    techStack: ['Python', 'OpenAI API', 'HubSpot API', 'Cal.com', 'FastAPI']
  },
  {
    id: 'project-02',
    number: 'PROJECT / 02',
    title: 'Multi-App Operations & Data Conduit',
    category: 'API Integration · Process Automation',
    clientType: 'Commercial Operations & Logistics Group',
    problem: 'Operational staff manually copied customer records, invoice details, and status updates across 4 disconnected SaaS tools every day.',
    systemBuilt: 'Event-Driven Multi-System REST API Middleware',
    solution: 'Designed and deployed a centralized API middleware pipeline with real-time webhooks, transaction logging, error-handling retry queues, and automated data transformation.',
    outcome: 'Eliminated manual copy-paste data entry entirely, synchronized customer state across all platforms in real-time, and eliminated data discrepancy errors.',
    techStack: ['TypeScript', 'Node.js', 'Express', 'Redis', 'PostgreSQL', 'Docker']
  },
  {
    id: 'project-03',
    number: 'PROJECT / 03',
    title: 'High-Performance Custom Web Product & Studio',
    category: 'Digital Studio · Custom Web Applications',
    clientType: 'Enterprise Technology & Advisory Studio',
    problem: 'Legacy corporate website failed to communicate advanced technical capabilities to high-value prospective enterprise clients.',
    systemBuilt: '3D WebGL Digital Experience & Interactive Project Planner',
    solution: 'Developed a bespoke Next.js 15 application featuring continuous camera choreography, procedural 3D infrastructure scenes, interactive design studio controls, and an instant brief generation engine.',
    outcome: 'Elevated market authority, established direct client engagement, and streamlined project intake with structured brief generation.',
    techStack: ['Next.js 15', 'Three.js', 'React Three Fiber', 'Tailwind CSS', 'TypeScript']
  }
];
