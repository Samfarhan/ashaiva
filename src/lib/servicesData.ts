export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: 'Frontline' | 'Operations' | 'Intelligence' | 'Engineering';
  shortDesc: string;
  fullDesc: string;
  metrics: { label: string; value: string };
  flowSteps: string[];
  techStack: string[];
  samplePayload: Record<string, any>;
}

export const ASHAIVA_SERVICES: ServiceItem[] = [
  {
    id: 'ai-lead-automation',
    number: '01',
    title: 'AI Lead Automation',
    category: 'Frontline',
    shortDesc: 'Instant capture, dynamic qualification, and zero-leak pipeline ingestion across omni-channels.',
    fullDesc: 'Transforms inbound leads from ads, social, landing pages, and webforms into structured, qualified prospects in under 3 seconds. Eliminates manual sorting and stale contact queues.',
    metrics: { label: 'Conversion Velocity', value: '+340%' },
    flowSteps: ['Inbound Webhook', 'Semantic Lead Scoring', 'CRM Enrichment', 'Routing Trigger'],
    techStack: ['Claude 3.5 / GPT-4o', 'HubSpot / Salesforce', 'Make / n8n', 'PostgreSQL'],
    samplePayload: {
      event: 'lead.captured',
      source: 'web.consultation_request',
      enrichment: { intent_score: 0.94, budget_band: '$50k-$100k', timing: 'Immediate' },
      status: 'dispatched_to_ae'
    }
  },
  {
    id: 'speed-to-lead',
    number: '02',
    title: 'Speed-to-Lead Systems',
    category: 'Frontline',
    shortDesc: 'Sub-60-second outreach with contextual personalization before competitor awareness.',
    fullDesc: 'Research demonstrates that responding within 5 minutes yields 21x higher qualification. Our systems trigger hyper-personalized WhatsApp, SMS, and email interactions in less than 30 seconds.',
    metrics: { label: 'Median Response Time', value: '18 sec' },
    flowSteps: ['Form Submit Trigger', 'Context Extraction', 'Dynamic Copy Generation', 'Omni-Channel Ping'],
    techStack: ['Twilio / WhatsApp Cloud API', 'Resend', 'Supabase', 'FastAPI'],
    samplePayload: {
      action: 'instant_dispatch',
      latency_ms: 1840,
      channel: 'whatsapp_business',
      recipient: '+1 (555) 019-2834',
      status: 'delivered_and_opened'
    }
  },
  {
    id: 'missed-call-recovery',
    number: '03',
    title: 'Missed-Call Recovery',
    category: 'Frontline',
    shortDesc: 'Autonomous conversational fallback that rescues lost phone inquiries in real-time.',
    fullDesc: 'Never lose high-value inbound calls after hours or during peak load. System instantly fires a personalized SMS/WhatsApp assistant that converses naturally, answers questions, and books appointments.',
    metrics: { label: 'Call Recovery Rate', value: '78.4%' },
    flowSteps: ['PBX Webhook Detect', 'Caller Profiling', 'Instant AI SMS Dispatch', 'Interactive Booking'],
    techStack: ['Twilio Voice', 'Retell / Bland AI', 'Calendar API', 'OpenAI'],
    samplePayload: {
      trigger: 'call.no_answer',
      caller: '+1 (415) 890-4412',
      ai_prompt: 'Emergency booking consultation recovery',
      outcome: 'appointment_confirmed_tuesday_1400'
    }
  },
  {
    id: 'ai-inbox-triage',
    number: '04',
    title: 'AI Inbox & Ticket Triage',
    category: 'Frontline',
    shortDesc: 'Zero-inbox neural categorizer that extracts intent, drafts replies, and routes urgency.',
    fullDesc: 'Analyzes incoming support and executive emails, detects urgency and sentiment, attaches CRM context, auto-drafts replies for one-click approval, and dispatches urgent escalations to Slack/Teams.',
    metrics: { label: 'Inbox Processing Time', value: '-85%' },
    flowSteps: ['Email Webhook', 'Sentiment & Intent Analysis', 'CRM Thread Matching', 'Draft & Route'],
    techStack: ['Gmail API', 'Outlook Graph API', 'Pinecone Vector DB', 'Claude 3.5 Sonnet'],
    samplePayload: {
      thread_id: 'th_88192a0',
      classification: 'HIGH_PRIORITY_INVOICE_QUERY',
      urgency_level: 'CRITICAL',
      auto_draft_ready: true
    }
  },
  {
    id: 'customer-support-automation',
    number: '05',
    title: 'Customer Support Automation',
    category: 'Frontline',
    shortDesc: 'Knowledge-grounded 24/7 resolution agents that solve complex user inquiries natively.',
    fullDesc: 'Trained on your private documentation, previous ticket resolutions, and product databases. Resolves 70%+ of tier-1 and tier-2 tickets autonomously with zero hallucination guarantee.',
    metrics: { label: 'First-Contact Resolution', value: '72%' },
    flowSteps: ['Customer Ticket Entry', 'Vector Knowledge Retrieval', 'Policy Guardrail Check', 'Resolution Dispatch'],
    techStack: ['Zendesk / Freshdesk', 'LangChain', 'Qdrant', 'Custom RAG Engine'],
    samplePayload: {
      ticket_id: 'tk_9410',
      intent: 'api_rate_limit_tier_upgrade',
      guardrail_passed: true,
      resolution_applied: 'limit_elevated_and_customer_notified'
    }
  },
  {
    id: 'whatsapp-email-automation',
    number: '06',
    title: 'WhatsApp & Email Automation',
    category: 'Frontline',
    shortDesc: 'Bespoke multi-step interactive sequences synchronized with user behavior.',
    fullDesc: 'Replaces static drip campaigns with adaptive, event-driven communication. If a user clicks an agreement link, the workflow branches differently than if they ask an objection question on WhatsApp.',
    metrics: { label: 'Engagement Multiplier', value: '3.8x' },
    flowSteps: ['User Event Sensor', 'Dynamic State Machine', 'Template Adaptation', 'Bi-Directional Reply Loop'],
    techStack: ['Meta WhatsApp Cloud API', 'Postmark', 'Redis', 'Temporal'],
    samplePayload: {
      conversation_id: 'wa_sess_742',
      user_sentiment: 'enthusiastic',
      next_branch: 'send_custom_proposal_pdf',
      active_node: 'node_generate_contract'
    }
  },
  {
    id: 'crm-automation',
    number: '07',
    title: 'CRM Automation & Hygiene',
    category: 'Operations',
    shortDesc: 'Self-healing, automated pipeline updates that eliminate manual rep data entry.',
    fullDesc: 'Automatically logs meeting transcripts, updates deal stages, populates deal sizes, alerts managers to pipeline rot, and enriches accounts with firmographic intelligence.',
    metrics: { label: 'Data Accuracy Index', value: '99.4%' },
    flowSteps: ['Call / Meeting Complete', 'Speech-to-Insights Extraction', 'Field Value Synthesizer', 'CRM Mutation'],
    techStack: ['Salesforce', 'HubSpot', 'Pipedrive', 'OpenAI Whisper'],
    samplePayload: {
      deal_id: 'deal_enterprise_04',
      stage_update: 'Contract Sent -> Negotiation',
      fields_updated: ['arr_amount', 'decision_makers', 'procurement_contact'],
      sales_rep_hours_saved_today: 1.8
    }
  },
  {
    id: 'document-extraction',
    number: '08',
    title: 'Document-to-System Data Extraction',
    category: 'Operations',
    shortDesc: 'High-fidelity PDF, invoice, contract, and receipt digitization straight into core ERPs.',
    fullDesc: 'Extracts tabular line items, signatures, clauses, and monetary totals from unstructured PDFs, scanned images, and multi-page legal agreements with 99.9% semantic precision.',
    metrics: { label: 'Document Processing Time', value: '2.4s / doc' },
    flowSteps: ['Document Ingest', 'Vision OCR + Layout Parser', 'Schema Validation', 'ERP / Ledger Insertion'],
    techStack: ['AWS Textract', 'GPT-4o Vision', 'Stripe', 'NetSuite / QuickBooks'],
    samplePayload: {
      document_type: 'commercial_lease_agreement',
      pages_parsed: 28,
      key_clauses_extracted: ['indemnity_terms', 'renewal_date', 'deposit_escrow'],
      validation_error_count: 0
    }
  },
  {
    id: 'ai-data-processing',
    number: '09',
    title: 'AI Data Processing & ETL',
    category: 'Operations',
    shortDesc: 'Continuous semantic cleansing, deduplication, and vectorization of business data.',
    fullDesc: 'Cleans, standardizes, and enriches massive tabular datasets, customer reviews, inventory feeds, and market signals into clean analytical schemas ready for operational use.',
    metrics: { label: 'Throughput Capacity', value: '500k rows/hr' },
    flowSteps: ['Stream Ingestion', 'Anomaly Detection', 'LLM Normalization', 'Data Lake Write'],
    techStack: ['Apache Kafka', 'DuckDB', 'ClickHouse', 'Python / Polars'],
    samplePayload: {
      batch_id: 'batch_sku_sync_9901',
      rows_processed: 48200,
      anomalies_quarantined: 3,
      latency_p99: '42ms'
    }
  },
  {
    id: 'appointment-followups',
    number: '10',
    title: 'Appointment & Follow-Up Automation',
    category: 'Operations',
    shortDesc: 'Frictionless calendar scheduling with intelligent reminder nudges and prep briefings.',
    fullDesc: 'Minimizes no-shows through adaptive multi-channel reminders, collects intake forms prior to the call, and generates automated executive briefing sheets 15 minutes before the meeting.',
    metrics: { label: 'No-Show Reduction', value: '-65%' },
    flowSteps: ['Booking Webhook', 'Intake Packet Generation', 'Smart Cadence Reminders', 'Post-Call Debrief'],
    techStack: ['Cal.com / Calendly', 'Google Workspace API', 'Resend', 'Telegram Bot'],
    samplePayload: {
      meeting_id: 'meet_exec_902',
      calendar_synced: true,
      briefing_dossier_status: 'delivered_to_host',
      show_probability_score: '96%'
    }
  },
  {
    id: 'sales-workflow-automation',
    number: '11',
    title: 'Sales Workflow Automation',
    category: 'Operations',
    shortDesc: 'Automated proposal creation, contract generation, and e-sign closing sequences.',
    fullDesc: 'When an opportunity reaches proposal stage, system dynamically generates a tailored slide deck or PDF contract with the exact client scope, pricing tiers, and sends via PandaDoc/DocuSign.',
    metrics: { label: 'Time to Proposal', value: '4 mins' },
    flowSteps: ['Deal Stage Trigger', 'Custom Scope Compiler', 'Contract Rendering', 'Signature Dispatch'],
    techStack: ['DocuSign API', 'Pandadoc', 'Puppeteer PDF', 'Zapier Central'],
    samplePayload: {
      proposal_code: 'PROP_ASHAIVA_892',
      custom_line_items: 4,
      total_deal_value: '$140,000',
      contract_status: 'awaiting_counterparty'
    }
  },
  {
    id: 'business-reporting',
    number: '12',
    title: 'Business Reporting Automation',
    category: 'Intelligence',
    shortDesc: 'Executive weekly syntheses, KPI anomaly detection, and automated slide decks.',
    fullDesc: 'Eliminates Friday afternoon reporting panic. Gathers data across Stripe, Google Analytics, Shopify, and ad platforms, writes a concise executive briefing, and posts straight to Slack or email.',
    metrics: { label: 'Analyst Hours Saved', value: '14 hrs/wk' },
    flowSteps: ['Multi-API Aggregation', 'Variance Analysis', 'Narrative Synthesis', 'Executive Delivery'],
    techStack: ['Metabase', 'Stripe API', 'Google Cloud Run', 'Slack API'],
    samplePayload: {
      report: 'monday_board_executive_digest',
      variance_highlight: 'CAC dropped 18%, ROAS expanded to 4.2x',
      chart_png_rendered: true,
      recipients: ['ceo@company.com', 'cfo@company.com']
    }
  },
  {
    id: 'internal-operations',
    number: '13',
    title: 'Internal Operations Automation',
    category: 'Intelligence',
    shortDesc: 'Employee onboarding, vendor procurement, and compliance check orchestrations.',
    fullDesc: 'Automates employee software provisioning, hardware requisition, NDA collection, invoice approval hierarchies, and company milestone tracking with zero administrative friction.',
    metrics: { label: 'Onboarding Velocity', value: '1-Day Ready' },
    flowSteps: ['HR Hire Trigger', 'Identity & Account Provisioning', 'Hardware Dispatch Ticket', 'Audit Logging'],
    techStack: ['Rippling API', 'Okta / Google Admin', 'Notion API', 'Linear'],
    samplePayload: {
      employee: 'Senior Machine Learning Architect',
      services_provisioned: ['GitHub Org', 'AWS IAM', 'Slack', 'Linear'],
      compliance_docs_signed: 4,
      status: 'ready_day_one'
    }
  },
  {
    id: 'custom-ai-agents',
    number: '14',
    title: 'Custom Autonomous AI Agents',
    category: 'Intelligence',
    shortDesc: 'Goal-directed autonomous agents that perform multi-step research and workflows.',
    fullDesc: 'Engineered specialized agent swarms with custom memory, tool execution capabilities, web-browsing capabilities, and human-in-the-loop checkpoints for enterprise security.',
    metrics: { label: 'Autonomous Task Completion', value: '94.2%' },
    flowSteps: ['Objective Assignment', 'Plan Decomposition', 'Tool Use & Web Scrape', 'Synthesis & Validation'],
    techStack: ['LangGraph', 'CrewAI', 'Anthropic Claude', 'Docker Sandboxes'],
    samplePayload: {
      agent_id: 'agent_market_intelligence_07',
      objective: 'Scrape competitor pricing updates and synthesize pricing matrix',
      tools_invoked: ['web_search', 'dom_scraper', 'spreadsheet_compiler'],
      execution_time_sec: 42
    }
  },
  {
    id: 'api-tool-integrations',
    number: '15',
    title: 'API & Tool Integrations',
    category: 'Engineering',
    shortDesc: 'Custom resilient middleware connecting legacy software with modern AI systems.',
    fullDesc: 'We bridge legacy ERPs, internal databases, third-party APIs, and modern serverless microservices with webhook error handling, automated retries, and rate-limit buffering.',
    metrics: { label: 'Integration Uptime', value: '99.99%' },
    flowSteps: ['Legacy Endpoint Hook', 'Payload Normalizer', 'Queue & Rate Limiter', 'Target API Sync'],
    techStack: ['Node.js / Express', 'Upstash Redis', 'AWS Lambda', 'Webhooks'],
    samplePayload: {
      source_system: 'AS400_Legacy_Inventory',
      destination_system: 'Shopify_Plus_Warehouse',
      records_synced: 14200,
      retry_attempts_needed: 0
    }
  },
  {
    id: 'workflow-engineering',
    number: '16',
    title: 'Workflow Engineering & Audit',
    category: 'Engineering',
    shortDesc: 'Deep operational bottleneck discovery, mapping, and technical refactoring.',
    fullDesc: 'We conduct full operational diagnostic sprints to trace how information travels inside your business, identify dropped balls, eliminate tool bloat, and design your bespoke automation roadmap.',
    metrics: { label: 'Operational Waste Cut', value: '45%' },
    flowSteps: ['Process Mining & Interview', 'Bottleneck Identification', 'Architecture Blueprint', 'Deployment & QA'],
    techStack: ['Miro Architecture', 'Make Enterprise', 'GitHub CI/CD', 'Datadog'],
    samplePayload: {
      audit_company: 'Series B FinTech (180 FTEs)',
      bottlenecks_discovered: 14,
      projected_annual_savings: '$320,000',
      implementation_phases: 3
    }
  }
];
