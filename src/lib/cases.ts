export interface CaseStudy {
  slug: string;
  category: "ai" | "web" | "automation";
  image: string;
  tags: string[];
  title: { pt: string; es: string; en: string };
  description: { pt: string; es: string; en: string };
  challenge: { pt: string; es: string; en: string };
  solution: { pt: string; es: string; en: string };
  results: { pt: string; es: string; en: string };
}

export const cases: CaseStudy[] = [
  {
    slug: "chatbot-atendimento-ecommerce",
    category: "ai",
    image: "/images/case-ai-chatbot.jpg",
    tags: ["IA", "Chatbot", "E-commerce"],
    title: {
      pt: "Chatbot Inteligente para E-commerce",
      es: "Chatbot Inteligente para E-commerce",
      en: "Smart Chatbot for E-commerce",
    },
    description: {
      pt: "Reduzimos 60% das chamadas de suporte com um chatbot que entende contexto e resolve problemas reais.",
      es: "Redujimos un 60% las llamadas de soporte con un chatbot que entiende contexto y resuelve problemas reales.",
      en: "We reduced support calls by 60% with a chatbot that understands context and solves real problems.",
    },
    challenge: {
      pt: "E-commerce com 50.000 pedidos/mês sobrecarregando equipe de suporte. Tempo médio de resposta de 4 horas.",
      es: "E-commerce con 50.000 pedidos/mes sobrecargando el equipo de soporte. Tiempo medio de respuesta de 4 horas.",
      en: "E-commerce with 50,000 orders/month overwhelming the support team. Average response time of 4 hours.",
    },
    solution: {
      pt: "Chatbot com IA generativa integrado ao sistema de pedidos. Entende contexto, rastreia entregas, processa trocas.",
      es: "Chatbot con IA generativa integrado al sistema de pedidos. Entiende contexto, rastrea entregas, procesa cambios.",
      en: "Chatbot with generative AI integrated with the order system. Understands context, tracks deliveries, processes exchanges.",
    },
    results: {
      pt: "60% menos chamadas de suporte. Tempo de resposta: 30 segundos. Satisfação: 4.7/5.",
      es: "60% menos llamadas de soporte. Tiempo de respuesta: 30 segundos. Satisfacción: 4.7/5.",
      en: "60% fewer support calls. Response time: 30 seconds. Satisfaction: 4.7/5.",
    },
  },
  {
    slug: "plataforma-gestao-logistica",
    category: "web",
    image: "/images/case-web-logistics.jpg",
    tags: ["Web", "Dashboard", "Logística"],
    title: {
      pt: "Plataforma de Gestão Logística",
      es: "Plataforma de Gestión Logística",
      en: "Logistics Management Platform",
    },
    description: {
      pt: "Dashboard em tempo real que conecta frota, estoque e clientes em uma tela.",
      es: "Dashboard en tiempo real que conecta flota, inventario y clientes en una pantalla.",
      en: "Real-time dashboard connecting fleet, inventory, and clients on one screen.",
    },
    challenge: {
      pt: "Empresa de logística usando 5 sistemas diferentes sem integração. Dados fragmentados, decisões lentas.",
      es: "Empresa de logística usando 5 sistemas diferentes sin integración. Datos fragmentados, decisiones lentas.",
      en: "Logistics company using 5 different systems without integration. Fragmented data, slow decisions.",
    },
    solution: {
      pt: "Plataforma unificada com APIs conectando todos os sistemas. Dashboard real-time com mapas e alertas.",
      es: "Plataforma unificada con APIs conectando todos los sistemas. Dashboard real-time con mapas y alertas.",
      en: "Unified platform with APIs connecting all systems. Real-time dashboard with maps and alerts.",
    },
    results: {
      pt: "40% mais eficiência operacional. Tempo de decisão: de 2 horas para 5 minutos.",
      es: "40% más eficiencia operativa. Tiempo de decisión: de 2 horas a 5 minutos.",
      en: "40% more operational efficiency. Decision time: from 2 hours to 5 minutes.",
    },
  },
  {
    slug: "automacao-financeira-erp",
    category: "automation",
    image: "/images/case-automation-finance.jpg",
    tags: ["Automação", "Financeiro", "ERP"],
    title: {
      pt: "Automação Financeira com ERP",
      es: "Automatización Financiera con ERP",
      en: "Financial Automation with ERP",
    },
    description: {
      pt: "Eliminamos 20 horas semanais de trabalho manual integrando sistemas financeiros.",
      es: "Eliminamos 20 horas semanales de trabajo manual integrando sistemas financieros.",
      en: "We eliminated 20 hours of weekly manual work by integrating financial systems.",
    },
    challenge: {
      pt: "Equipe financeira gastando 4h/dia copiando dados entre ERP, banco e planilhas. Erros frequentes.",
      es: "Equipo financiero gastando 4h/día copiando datos entre ERP, banco y planillas. Errores frecuentes.",
      en: "Finance team spending 4h/day copying data between ERP, bank, and spreadsheets. Frequent errors.",
    },
    solution: {
      pt: "Automação completa: ERP ↔ banco ↔ relatórios. Conciliação automática. Alertas de anomalias.",
      es: "Automatización completa: ERP ↔ banco ↔ reportes. Conciliación automática. Alertas de anomalías.",
      en: "Full automation: ERP ↔ bank ↔ reports. Automatic reconciliation. Anomaly alerts.",
    },
    results: {
      pt: "20h/semana recuperadas. Zero erros de conciliação. ROI em 2 meses.",
      es: "20h/semana recuperadas. Cero errores de conciliación. ROI en 2 meses.",
      en: "20h/week recovered. Zero reconciliation errors. ROI in 2 months.",
    },
  },
  {
    slug: "sistema-saude-agendamento",
    category: "web",
    image: "/images/case-web-health.jpg",
    tags: ["Web", "Saúde", "Agendamento"],
    title: {
      pt: "Sistema de Agendamento para Clínica",
      es: "Sistema de Agendamiento para Clínica",
      en: "Clinic Scheduling System",
    },
    description: {
      pt: "Plataforma completa de agendamento online com integração a prontuário eletrônico.",
      es: "Plataforma completa de agendamiento online con integración a historial electrónico.",
      en: "Complete online scheduling platform with electronic health record integration.",
    },
    challenge: {
      pt: "Clínica com 15 médicos usando agenda em papel. Faltas sem aviso, horários duplicados, pacientes frustrados.",
      es: "Clínica con 15 médicos usando agenda en papel. Faltas sin aviso, horarios duplicados, pacientes frustrados.",
      en: "Clinic with 15 doctors using paper schedules. No-show appointments, duplicate slots, frustrated patients.",
    },
    solution: {
      pt: "Sistema web + app com agendamento online, lembretes por WhatsApp, integração com prontuário.",
      es: "Sistema web + app con agendamiento online, recordatorios por WhatsApp, integración con historial.",
      en: "Web system + app with online scheduling, WhatsApp reminders, health record integration.",
    },
    results: {
      pt: "70% menos faltas. 3x mais agendamentos/dia. Pacientes avaliam 4.9/5.",
      es: "70% menos faltas. 3x más agendamientos/día. Pacientes evalúan 4.9/5.",
      en: "70% fewer no-shows. 3x more bookings/day. Patients rate 4.9/5.",
    },
  },
  {
    slug: "ia-analise-documentos",
    category: "ai",
    image: "/images/case-ai-documents.jpg",
    tags: ["IA", "Documentos", "OCR"],
    title: {
      pt: "IA para Análise de Documentos",
      es: "IA para Análisis de Documentos",
      en: "AI for Document Analysis",
    },
    description: {
      pt: "Agentes de IA que leem, classificam e extraem dados de milhares de documentos por dia.",
      es: "Agentes de IA que leen, clasifican y extraen datos de miles de documentos por día.",
      en: "AI agents that read, classify, and extract data from thousands of documents daily.",
    },
    challenge: {
      pt: "Escritório jurídico processando 500+ documentos/dia manualmente. Análise lenta e sujeita a erros.",
      es: "Oficina jurídica procesando 500+ documentos/día manualmente. Análisis lento y sujeto a errores.",
      en: "Law firm processing 500+ documents/day manually. Slow analysis prone to errors.",
    },
    solution: {
      pt: "Pipeline de IA: OCR → classificação → extração → validação. Revisão humana só em casos de dúvida.",
      es: "Pipeline de IA: OCR → clasificación → extracción → validación. Revisión humana solo en casos de duda.",
      en: "AI pipeline: OCR → classification → extraction → validation. Human review only for edge cases.",
    },
    results: {
      pt: "90% menos tempo de processamento. 99.2% de acurácia. Equipe focada em análise estratégica.",
      es: "90% menos tiempo de procesamiento. 99.2% de precisión. Equipo enfocado en análisis estratégico.",
      en: "90% less processing time. 99.2% accuracy. Team focused on strategic analysis.",
    },
  },
  {
    slug: "automacao-marketing-crm",
    category: "automation",
    image: "/images/case-automation-marketing.jpg",
    tags: ["Automação", "Marketing", "CRM"],
    title: {
      pt: "Automação de Marketing e CRM",
      es: "Automatización de Marketing y CRM",
      en: "Marketing & CRM Automation",
    },
    description: {
      pt: "Fluxos automáticos de nutrição, scoring e follow-up que triplicaram a conversão.",
      es: "Flujos automáticos de nutrición, scoring y follow-up que triplicaron la conversión.",
      en: "Automated nurture flows, scoring, and follow-up that tripled conversions.",
    },
    challenge: {
      pt: "Empresa SaaS com 10.000 leads/mês e 0% de automação. Time de vendas sobrecarregado.",
      es: "Empresa SaaS con 10.000 leads/mes y 0% de automatización. Equipo de ventas sobrecargado.",
      en: "SaaS company with 10,000 leads/month and 0% automation. Sales team overwhelmed.",
    },
    solution: {
      pt: "Integração CRM + email marketing + scoring automatizado. Leads qualificados chegam prontos para vendas.",
      es: "Integración CRM + email marketing + scoring automatizado. Leads calificados llegan listos para ventas.",
      en: "CRM + email marketing + automated scoring integration. Qualified leads arrive sales-ready.",
    },
    results: {
      pt: "3x mais conversão. 50% menos tempo em qualificação. Pipeline previsível.",
      es: "3x más conversión. 50% menos tiempo en calificación. Pipeline predecible.",
      en: "3x more conversions. 50% less time on qualification. Predictable pipeline.",
    },
  },
];

export function getCasesByCategory(category?: string): CaseStudy[] {
  if (!category || category === "all") return cases;
  return cases.filter((c) => c.category === category);
}

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
