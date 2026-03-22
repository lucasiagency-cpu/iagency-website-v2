export interface BlogPost {
  slug: string;
  title: { pt: string; es: string; en: string };
  excerpt: { pt: string; es: string; en: string };
  content: { pt: string; es: string; en: string };
  tag: string;
  date: string;
  readTime: number;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "como-ia-pode-reduzir-custos",
    tag: "IA",
    date: "2026-03-15",
    readTime: 5,
    image: "/images/blog-ia-custos.jpg",
    title: {
      pt: "Como IA pode reduzir custos na sua empresa (sem demitir ninguém)",
      es: "Cómo la IA puede reducir costos en tu empresa (sin despedir a nadie)",
      en: "How AI can reduce costs in your company (without firing anyone)",
    },
    excerpt: {
      pt: "A inteligência artificial não substitui pessoas — ela elimina trabalho repetitivo. Descubra 5 formas práticas de aplicar IA e economizar até 40% em custos operacionais.",
      es: "La inteligencia artificial no reemplaza personas — elimina trabajo repetitivo. Descubre 5 formas prácticas de aplicar IA y ahorrar hasta un 40% en costos operativos.",
      en: "AI doesn't replace people — it eliminates repetitive work. Discover 5 practical ways to apply AI and save up to 40% on operational costs.",
    },
    content: {
      pt: `## O mito da substituição

Quando empresários ouvem "inteligência artificial", muitos pensam em robôs substituindo funcionários. A realidade é diferente: IA é uma ferramenta que elimina o trabalho que **ninguém deveria estar fazendo**.

## 5 formas práticas de aplicar IA

### 1. Atendimento ao cliente automatizado
Chatbots inteligentes resolvem 60-80% das dúvidas sem intervenção humana. Sua equipe foca nos casos complexos que realmente precisam de atenção.

### 2. Processamento de documentos
Notas fiscais, contratos, relatórios — IA lê, classifica e extrai dados automaticamente. O que levava horas, leva segundos.

### 3. Análise preditiva
Prever demanda, identificar padrões de cancelamento, otimizar estoque. Decisões baseadas em dados, não em intuição.

### 4. Automação de relatórios
Relatórios que se geram sozinhos, com os dados certos, na hora certa. Sem ninguém abrir planilha.

### 5. Triagem e priorização
Emails, tickets, pedidos — IA classifica por urgência e tipo. O mais importante chega primeiro.

## O resultado

Empresas que implementam IA em processos operacionais reportam **redução média de 40% em custos**. Não porque demitiram pessoas, mas porque essas pessoas agora fazem trabalho que importa.

## Próximo passo

Quer saber como IA pode funcionar no seu negócio? Uma conversa de 15 minutos é o suficiente pra identificar as oportunidades.`,
      es: `## El mito de la sustitución

Cuando los empresarios escuchan "inteligencia artificial", muchos piensan en robots reemplazando empleados. La realidad es diferente: la IA es una herramienta que elimina el trabajo que **nadie debería estar haciendo**.

## 5 formas prácticas de aplicar IA

### 1. Atención al cliente automatizada
Chatbots inteligentes resuelven el 60-80% de las consultas sin intervención humana.

### 2. Procesamiento de documentos
Facturas, contratos, reportes — la IA lee, clasifica y extrae datos automáticamente.

### 3. Análisis predictivo
Predecir demanda, identificar patrones de cancelación, optimizar inventario.

### 4. Automatización de reportes
Reportes que se generan solos, con los datos correctos, a la hora correcta.

### 5. Clasificación y priorización
Emails, tickets, pedidos — la IA clasifica por urgencia y tipo.

## El resultado

Empresas que implementan IA reportan una **reducción promedio del 40% en costos operativos**.`,
      en: `## The replacement myth

When business owners hear "artificial intelligence," many think of robots replacing employees. Reality is different: AI is a tool that eliminates work **nobody should be doing**.

## 5 practical ways to apply AI

### 1. Automated customer service
Smart chatbots resolve 60-80% of queries without human intervention.

### 2. Document processing
Invoices, contracts, reports — AI reads, classifies, and extracts data automatically.

### 3. Predictive analytics
Forecast demand, identify churn patterns, optimize inventory.

### 4. Report automation
Reports that generate themselves, with the right data, at the right time.

### 5. Triage and prioritization
Emails, tickets, orders — AI classifies by urgency and type.

## The result

Companies implementing AI report an **average 40% reduction in operational costs**.`,
    },
  },
  {
    slug: "fullstack-explicado",
    tag: "Web",
    date: "2026-03-10",
    readTime: 4,
    image: "/images/blog-fullstack.jpg",
    title: {
      pt: "Fullstack explicado: o que é e por que sua empresa precisa",
      es: "Fullstack explicado: qué es y por qué tu empresa lo necesita",
      en: "Fullstack explained: what it is and why your business needs it",
    },
    excerpt: {
      pt: "Você não precisa saber o que é fullstack. Precisa saber que é isso que faz um sistema funcionar de ponta a ponta. Explicamos sem jargão.",
      es: "No necesitas saber qué es fullstack. Necesitas saber que es lo que hace que un sistema funcione de punta a punta.",
      en: "You don't need to know what fullstack is. You need to know it's what makes a system work end to end.",
    },
    content: {
      pt: `## O que é fullstack (sem complicar)

Imagine uma loja. Fullstack é tudo: a vitrine bonita que o cliente vê (frontend), o estoque organizado nos fundos (backend), e o sistema que conecta tudo (banco de dados, APIs).

## Por que importa pro seu negócio

### Consistência
Um sistema fullstack é uma peça só. Não são 5 ferramentas coladas com fita. Tudo funciona junto porque foi feito pra funcionar junto.

### Velocidade
Mudanças são mais rápidas porque tudo está no mesmo lugar. Precisa de uma funcionalidade nova? Semanas, não meses.

### Escalabilidade
Cresce com você. 100 usuários ou 100.000 — a arquitetura aguenta.

## Quando você precisa

- Seu negócio usa mais de 3 ferramentas que não se integram
- Sua equipe gasta tempo copiando dados entre sistemas
- Você precisa de algo que não existe pronto no mercado
- Seu sistema atual trava, é lento, ou não atende mais

## Investimento vs. Custo

Um sistema sob medida parece caro no início. Mas compare com o custo de ineficiência: horas perdidas, dados errados, oportunidades que escapam. O ROI geralmente vem em 3-6 meses.`,
      es: `## Qué es fullstack (sin complicar)

Imagina una tienda. Fullstack es todo: la vitrina bonita que el cliente ve (frontend), el inventario organizado atrás (backend), y el sistema que conecta todo.

## Por qué importa para tu negocio

Un sistema fullstack es una pieza sola. No son 5 herramientas pegadas con cinta. Todo funciona junto porque fue hecho para funcionar junto.`,
      en: `## What is fullstack (without the jargon)

Imagine a store. Fullstack is everything: the nice storefront the customer sees (frontend), the organized stock in the back (backend), and the system connecting it all.

## Why it matters for your business

A fullstack system is one piece. Not 5 tools duct-taped together. Everything works together because it was built to work together.`,
    },
  },
  {
    slug: "5-processos-automatizar",
    tag: "Automação",
    date: "2026-03-05",
    readTime: 6,
    image: "/images/blog-automacao.jpg",
    title: {
      pt: "5 processos que toda empresa deveria automatizar ontem",
      es: "5 procesos que toda empresa debería automatizar ayer",
      en: "5 processes every company should have automated yesterday",
    },
    excerpt: {
      pt: "Se sua equipe ainda faz relatórios manuais, dispara emails um por um ou copia dados entre planilhas — este artigo é pra você.",
      es: "Si tu equipo todavía hace reportes manuales, envía emails uno por uno o copia datos entre planillas — este artículo es para ti.",
      en: "If your team still makes manual reports, sends emails one by one, or copies data between spreadsheets — this article is for you.",
    },
    content: {
      pt: `## O custo do "sempre fizemos assim"

Cada processo manual é dinheiro jogado fora. Literalmente. Se um funcionário gasta 2 horas por dia em tarefas repetitivas, são **520 horas por ano**. Multiplique pelo custo/hora.

## Os 5 processos

### 1. Relatórios periódicos
Relatório semanal de vendas. Relatório mensal financeiro. Se tem periodicidade e usa dados que já existem no sistema, deveria ser automático.

### 2. Onboarding de clientes
Formulário → sistema → email de boas-vindas → acesso → tutorial. Tudo automático. Time de vendas passa o bastão e o sistema cuida do resto.

### 3. Faturamento e cobranças
Serviço prestado → nota fiscal → cobrança → lembrete → baixa. Sem ninguém abrir planilha.

### 4. Notificações internas
Estoque baixo? Time avisado. Prazo chegando? Alerta no Slack. Meta batida? Celebração automática (sim, isso existe).

### 5. Backup e sincronização de dados
Se alguém na sua empresa copia dados de um sistema pra outro manualmente, pare agora. APIs existem pra isso.

## Por onde começar

Comece pelo processo que mais consome tempo. Automatize. Meça o resultado. Repita.`,
      es: `## El costo del "siempre lo hicimos así"

Cada proceso manual es dinero tirado. Si un empleado gasta 2 horas por día en tareas repetitivas, son **520 horas por año**.

## Los 5 procesos

1. Reportes periódicos
2. Onboarding de clientes
3. Facturación y cobranzas
4. Notificaciones internas
5. Backup y sincronización de datos`,
      en: `## The cost of "we've always done it this way"

Every manual process is money thrown away. If an employee spends 2 hours per day on repetitive tasks, that's **520 hours per year**.

## The 5 processes

1. Periodic reports
2. Client onboarding
3. Billing and collections
4. Internal notifications
5. Data backup and sync`,
    },
  },
  {
    slug: "quanto-custa-sistema-web-2026",
    tag: "Web",
    date: "2026-02-28",
    readTime: 7,
    image: "/images/blog-custo-web.jpg",
    title: {
      pt: "Quanto custa um sistema web sob medida em 2026?",
      es: "¿Cuánto cuesta un sistema web a medida en 2026?",
      en: "How much does a custom web system cost in 2026?",
    },
    excerpt: {
      pt: "Depende. Mas a gente te ajuda a entender os fatores que influenciam o preço e como não desperdiçar dinheiro com a escolha errada.",
      es: "Depende. Pero te ayudamos a entender los factores que influyen en el precio y cómo no desperdiciar dinero.",
      en: "It depends. But we'll help you understand the factors that influence the price and how not to waste money.",
    },
    content: {
      pt: `## A resposta honesta: depende

Todo mundo quer um número. Mas um "sistema web" pode ser desde uma landing page de R$3.000 até uma plataforma de R$500.000. O que muda?

## Fatores que influenciam o preço

### Complexidade
- **Simples** (landing page, site institucional): R$3.000 - R$10.000
- **Médio** (dashboard, portal com login): R$10.000 - R$50.000
- **Complexo** (plataforma, e-commerce customizado): R$50.000 - R$200.000
- **Enterprise** (sistema crítico, alta escalabilidade): R$200.000+

### Integrações
Cada API, cada sistema externo, cada banco de dados adicional aumenta o escopo.

### Design
Template adaptado vs. design do zero. UI/UX research vs. "faz bonito".

### Prazo
Urgência custa mais. Sempre. Se pode planejar com antecedência, economiza.

## Como não desperdiçar dinheiro

1. **Defina o MVP.** O que é essencial pra lançar? O resto vem depois.
2. **Não compare com template.** Template é genérico. Sob medida resolve SEU problema.
3. **Invista em arquitetura.** Código barato agora = reescrita cara depois.
4. **Exija entregas incrementais.** Não pague tudo adiantado por algo que demora meses.

## Próximo passo

Monte seu orçamento no nosso wizard interativo. Em 2 minutos você tem uma estimativa personalizada.`,
      es: `## La respuesta honesta: depende

Un "sistema web" puede ser desde una landing page de $500 hasta una plataforma de $100,000. ¿Qué cambia?

## Factores que influyen en el precio

- **Simple** (landing page): $500 - $2,000
- **Medio** (dashboard, portal): $2,000 - $10,000
- **Complejo** (plataforma, e-commerce): $10,000 - $50,000
- **Enterprise** (sistema crítico): $50,000+`,
      en: `## The honest answer: it depends

A "web system" can range from a $500 landing page to a $100,000 platform. What changes?

## Factors that influence the price

- **Simple** (landing page): $500 - $2,000
- **Medium** (dashboard, portal): $2,000 - $10,000
- **Complex** (platform, custom e-commerce): $10,000 - $50,000
- **Enterprise** (critical system): $50,000+`,
    },
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
