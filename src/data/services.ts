export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  techStack: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'ai-automation',
    number: '01',
    title: 'AI AUTOMATION',
    category: 'Intelligent Systems',
    description: 'Autonomous multi-step automation engines that eliminate manual administrative workflows and accelerate execution.',
    features: ['Custom Trigger Networks', 'Event-Driven Pipelines', 'Self-Healing Workflows', 'Audit Logging'],
    techStack: ['Python', 'LangChain', 'FastAPI', 'Redis']
  },
  {
    id: 'ai-agents',
    number: '02',
    title: 'AI AGENTS',
    category: 'Autonomous Agents',
    description: 'Specialized domain AI agents capable of contextual reasoning, decision-making, and executing complex tasks.',
    features: ['Multi-Agent Coordination', 'Tool-Use Reasoning', 'Context Memory', 'Human-in-the-Loop Safeguards'],
    techStack: ['OpenAI API', 'Claude 3.5', 'Vector DBs', 'Node.js']
  },
  {
    id: 'workflow-automation',
    number: '03',
    title: 'WORKFLOW AUTOMATION',
    category: 'Process Engineering',
    description: 'End-to-end operational pipelines linking disparate software tools into seamless, automated business conduits.',
    features: ['Speed-to-Lead Triage', 'Instant Record Sync', 'Notification Dispatch', 'Error Monitoring'],
    techStack: ['Make.com', 'Zapier Enterprise', 'Webhooks', 'REST APIs']
  },
  {
    id: 'crm-lead-systems',
    number: '04',
    title: 'CRM & LEAD SYSTEMS',
    category: 'Revenue Operations',
    description: 'Living CRM architectures that automatically enrich, qualify, route, and schedule inbound sales inquiries.',
    features: ['Lead Scoring', 'Auto Calendar Booking', 'CRM Hygiene', 'Pipeline Telemetry'],
    techStack: ['HubSpot API', 'Salesforce API', 'Cal.com', 'PostgreSQL']
  },
  {
    id: 'business-process-automation',
    number: '05',
    title: 'BUSINESS PROCESS AUTOMATION',
    category: 'Enterprise Operations',
    description: 'Systematic automation of internal operations, approvals, document generation, and reporting.',
    features: ['Doc Extraction & OCR', 'Automated Invoicing', 'Approval Workflows', 'Compliance Checks'],
    techStack: ['Tesseract', 'Docker', 'AWS Lambda', 'GraphQL']
  },
  {
    id: 'ai-customer-support',
    number: '06',
    title: 'AI CUSTOMER SUPPORT',
    category: 'Client Experience',
    description: '24/7 intelligent support concierges trained on proprietary knowledge bases to resolve inquiries instantly.',
    features: ['Knowledge Base RAG', 'Multi-Channel Support', 'Sentiment Analysis', 'Escalation Triage'],
    techStack: ['Pinecone', 'LlamaIndex', 'React', 'WebSockets']
  },
  {
    id: 'api-saas-integrations',
    number: '07',
    title: 'API & SAAS INTEGRATIONS',
    category: 'System Integration',
    description: 'Custom API middleware connecting legacy databases and modern cloud SaaS applications securely.',
    features: ['Custom API Gateways', 'Real-Time Sync', 'Data Transformation', 'OAuth Security'],
    techStack: ['TypeScript', 'Express', 'Prisma', 'OAuth 2.0']
  },
  {
    id: 'custom-web-applications',
    number: '08',
    title: 'CUSTOM WEB APPLICATIONS',
    category: 'Digital Products',
    description: 'Bespoke web applications built for speed, security, and intuitive internal/external operations.',
    features: ['Scalable Architecture', 'Role-Based Access', 'Real-Time Dashboards', 'Tailored UI'],
    techStack: ['Next.js 15', 'React 18', 'Tailwind CSS', 'TypeScript']
  },
  {
    id: 'high-performance-websites',
    number: '09',
    title: 'HIGH-PERFORMANCE WEBSITES',
    category: 'Digital Studio',
    description: 'Cinematic, WebGL-enhanced web experiences designed to establish market authority and drive conversion.',
    features: ['3D WebGL Canvas', 'Smooth Motion Physics', 'Editorial Typography', 'SEO Optimization'],
    techStack: ['Three.js', 'React Three Fiber', 'GSAP', 'Lenis']
  },
  {
    id: 'internal-business-systems',
    number: '10',
    title: 'INTERNAL BUSINESS SYSTEMS',
    category: 'Internal Tooling',
    description: 'Custom internal dashboards and operational control panels giving executive visibility into all automated systems.',
    features: ['Operational Dashboards', 'Latency Tracking', 'System Health Monitors', 'Role Permissioning'],
    techStack: ['Next.js', 'Recharts', 'Tailwind', 'PostgreSQL']
  }
];
