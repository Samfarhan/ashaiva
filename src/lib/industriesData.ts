export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  painPoint: string;
  solution: string;
  keyMetric: string;
  workflows: string[];
}

export const ASHAIVA_INDUSTRIES: IndustryItem[] = [
  {
    id: 'agencies',
    name: 'Agencies & Studios',
    tagline: 'Scale client capacity without ballooning payroll overhead',
    painPoint: 'Account managers spend 50% of work hours on onboarding emails, status reports, and asset chasing.',
    solution: 'Autonomous client intake portals, auto-generated project sprints in Linear/Asana, and self-compiling client reporting dashboards.',
    keyMetric: '+3.2x Client-to-Manager Ratio',
    workflows: ['Instant Client Onboarding', 'Automated Slack Client Sync', 'Monthly Reporting Engine']
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Brands',
    tagline: 'Turn abandoned carts and returns into profitable lifetime value',
    painPoint: 'Customer support overwhelmed by "Where is my order?" tickets while abandoned checkouts go unrecovered.',
    solution: 'Omni-channel WhatsApp/SMS cart recovery, instant AI order tracking resolution, and supplier inventory sync.',
    keyMetric: '+28% Cart Recovery Rate',
    workflows: ['Speed-to-Checkout Followups', 'Automated Returns Portal', 'Real-time Stock Alert Routing']
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Brokerages',
    tagline: 'Capture high-intent buyers the instant they view a listing',
    painPoint: 'Agents miss weekend calls and portal leads; leads cool off after 15 minutes of non-response.',
    solution: 'Sub-30-second AI SMS qualification, automated viewing calendar scheduling, and instant CRM enrichment.',
    keyMetric: '< 25s Median First-Touch',
    workflows: ['Listing Portal Lead Ingestion', 'Self-Serve Viewing Scheduler', 'Mortgage Document Extractor']
  },
  {
    id: 'clinics',
    name: 'Clinics & Healthcare',
    tagline: 'Eliminate patient phone queues and costly missed appointments',
    painPoint: 'Front desk inundated by repetitive booking calls; no-show rates drain practice profitability.',
    solution: 'HIPAA-compliant conversational booking bots, automated intake form SMS reminders, and EHR calendar sync.',
    keyMetric: '-68% No-Show Rate',
    workflows: ['24/7 Patient Self-Scheduling', 'Intake Form Pre-Fill', 'Cancellation Seat Fill Bot']
  },
  {
    id: 'saas',
    name: 'SaaS & Tech Startups',
    tagline: 'Turn trial signups into enterprise expansions automatically',
    painPoint: 'Product qualified leads (PQLs) slip away without proactive SDR intervention; support engineers bogged down in tier-1 tickets.',
    solution: 'Product telemetry sensors that trigger personalized executive outreach upon feature usage spikes.',
    keyMetric: '+42% PQL-to-Close Rate',
    workflows: ['In-App Triggered Outreach', 'Automated Slack Alert to Rep', 'Autonomous Doc Support Bot']
  },
  {
    id: 'professional-services',
    name: 'Professional & Legal Services',
    tagline: 'Bill more strategic advisory hours; eliminate administrative paper chases',
    painPoint: 'Partners drown in invoice drafting, intake disclosures, retainers, and manual timesheet logging.',
    solution: 'Document-to-database AI parsers, automated engagement letter generation, and payment gateway reminders.',
    keyMetric: '12 Hours Saved per Partner/Wk',
    workflows: ['Retainer Auto-Generation', 'Audit-Ready Document Parser', 'Automated Payment Escrow']
  },
  {
    id: 'operations-heavy',
    name: 'Logistics & Operations-Heavy',
    tagline: 'Synchronize field teams, warehouse manifests, and customer updates',
    painPoint: 'Disjointed communication between drivers, dispatchers, and end clients leads to costly misdeliveries.',
    solution: 'Real-time webhook routing, dispatch automation, and automated exception reporting.',
    keyMetric: '99.8% On-Time Telemetry',
    workflows: ['Exception Incident Escalation', 'Automated Proof-of-Delivery', 'Vendor SLA Monitoring']
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    tagline: 'Convert prospective students faster with personalized counseling pipelines',
    painPoint: 'Admissions teams take 3+ days to review inquiry forms and match prospective applicants.',
    solution: 'Instant AI admissions advisor, transcript OCR evaluation, and automated interview reservation.',
    keyMetric: '4.5x Faster Enrollment Velocity',
    workflows: ['Instant Inquiry Profiler', 'Course Match Recommendation', 'Automated Orientation Nudge']
  }
];
