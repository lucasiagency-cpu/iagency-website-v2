# IAgency Digital — Website v2 Spec

**Data:** 2026-03-22
**Status:** Em aprovação

---

## Conceito

**"Traduzimos complexidade em resultado."**

Site imersivo, dark theme, cinematográfico. O visitante não precisa entender fullstack, banco de dados ou IA — ele precisa sentir que a IAgency resolve problemas que parecem impossíveis. Cada seção revela uma camada nova, como uma jornada.

Inspiração: Ignara (Behance) — navegação como experiência, não como catálogo.

---

## Arquitetura de Páginas

### 1. HOME (Landing Page imersiva)
```
[Hero Full-Screen]
Animação sutil de fundo (partículas/gradientes em movimento)
Headline: "Sua empresa precisa de tecnologia. Nós traduzimos isso pra você."
Sub: "IA, automações e sistemas sob medida para empresas que querem escalar."
CTA: "Fale com a gente" → WhatsApp

[Seção: O que fazemos — 3 pilares visuais]
Cards animados com ícones:
• Inteligência Artificial — "Automatize decisões e processos"
• Sistemas Web — "Plataformas conectadas que funcionam"  
• Automações — "Elimine trabalho repetitivo"
Cada card expande com mais detalhes ao clicar

[Seção: Cases — Portfólio visual]
Grid de projetos com thumbnails hover-reveal
Cada case abre em página própria com detalhes

[Seção: Como funciona — 4 passos]
Timeline horizontal animada:
1. Você conta o problema
2. A gente desenha a solução
3. Construímos e testamos juntos
4. Entregamos funcionando

[Seção: Orçamento Interativo]
Widget incorporado — tipo configurador de carro
Seleciona: tipo de serviço → urgência → budget
Resultado gera mensagem formatada pro WhatsApp

[Seção: Blog — últimos 3 posts]
Cards com thumbnail, título, data
Link "Ver todos"

[Footer]
Logo, redes sociais, WhatsApp, email
Links rápidos
"© 2026 IAgency Digital"
```

### 2. SERVIÇOS (página dedicada)
```
[Hero menor]
"Soluções que fazem sentido pro seu negócio"

[Serviço 1: Inteligência Artificial]
- Chatbots inteligentes
- Análise de dados automatizada
- Integração de IA em processos existentes
- Agentes autônomos
Visual: ícone/animação + descrição simples + CTA

[Serviço 2: Sistemas Web & Apps]
- Plataformas web completas (fullstack)
- Dashboards e painéis de controle
- E-commerce customizado
- Integrações com APIs e bancos de dados
Visual: ícone/animação + descrição simples + CTA

[Serviço 3: Automações]
- Fluxos de trabalho automáticos
- Integração entre ferramentas
- Relatórios e notificações inteligentes
- Redução de trabalho manual
Visual: ícone/animação + descrição simples + CTA

Cada serviço com CTA → WhatsApp com mensagem pré-formatada
```

### 3. CASES / PORTFÓLIO
```
Grid visual de projetos
Filtro por categoria (IA, Web, Automação)
Cada case:
- Thumbnail impactante
- Nome do projeto
- Tags (IA, Web, etc)
- Ao clicar: página com detalhes, screenshots, resultado

(Cases a definir quando Lucas enviar material)
```

### 4. ORÇAMENTO (página dedicada)
```
[Formulário interativo — estilo wizard]

Passo 1: "O que você precisa?"
□ Site / Plataforma Web
□ Inteligência Artificial
□ Automação de Processos
□ App Mobile
□ Consultoria
□ Não sei — preciso de orientação

Passo 2: "Qual a urgência?"
○ Tranquilo (2-3 meses)
○ Moderado (1 mês)
○ Urgente (2 semanas)
○ Ontem

Passo 3: "Qual seu budget estimado?"
○ Até R$5.000
○ R$5.000 - R$15.000
○ R$15.000 - R$50.000
○ Acima de R$50.000
○ Preciso de uma estimativa

Passo 4: "Conte mais sobre o projeto" (textarea)

Passo 5: Nome + Email + Empresa

[Botão: Enviar pelo WhatsApp]
→ Abre WhatsApp com mensagem formatada:
"Olá! Vim pelo site da IAgency.
Preciso de: [seleções]
Urgência: [seleção]
Budget: [seleção]
Detalhes: [texto]
Empresa: [nome]"
```

### 5. BLOG
```
Lista de posts com:
- Thumbnail
- Título
- Resumo (2 linhas)
- Data
- Tags

Cada post abre em página própria com:
- Conteúdo completo
- CTA no final → WhatsApp
- Posts relacionados

Temas iniciais sugeridos:
- "Como IA pode reduzir custos na sua empresa"
- "Fullstack explicado: o que é e por que importa"
- "5 processos que toda empresa deveria automatizar"
- "Quanto custa um sistema web sob medida?"
```

### 6. SOBRE (página simples)
```
Quem é a IAgency Digital
Missão: traduzir tecnologia complexa em soluções simples
A equipe (Lucas como fundador)
CTA → WhatsApp
```

---

## Design Direction

### Paleta de Cores
```
Background:    #0A0A0F (preto profundo)
Surface:       #12121A (cards, seções alternadas)
Accent 1:      #6C5CE7 (roxo — IA, tecnologia)
Accent 2:      #00D2FF (cyan — energia, inovação)
Text Primary:  #FFFFFF
Text Secondary: #8B8BA3
Gradients:     roxo → cyan (CTAs, destaques)
Success:       #00E676
```

### Tipografia
```
Headings:  Inter ou Space Grotesk (bold, moderno)
Body:      Inter (clean, legível)
Accent:    Monospace para termos técnicos (JetBrains Mono)
```

### Estilo Visual
- **Dark theme** dominante — premium, tech
- **Glassmorphism** sutil nos cards (vidro fosco)
- **Gradientes** roxo→cyan nos CTAs e destaques
- **Animações** suaves ao scroll (fade-in, parallax leve)
- **Partículas/linhas** animadas no hero (estilo neural network)
- **Hover effects** sofisticados nos cards de serviço e cases
- **Sem excesso** — clean, espaço negativo, respira

### Responsivo
- Mobile-first
- Hamburger menu com animação
- Touch-friendly no orçamento interativo
- WhatsApp CTA fixo no mobile (floating button)

---

## Stack Técnico

```
Framework:    Next.js 14 (App Router)
Linguagem:    TypeScript
Styling:      Tailwind CSS + Framer Motion (animações)
UI:           Shadcn/ui (base) + componentes custom
i18n:         next-intl (PT-BR, ES, EN — detecção automática)
Blog:         MDX (posts em markdown, renderiza no Next.js)
Analytics:    Google Analytics 4 + Meta Pixel (tráfego pago)
Deploy:       Vercel
Domínio:      iagency-digital.com (a confirmar)
WhatsApp:     API link direto (wa.me/5511914771967)
SEO:          next-seo + sitemap automático + Open Graph
```

### Por que essa stack:
- **Next.js + Vercel:** Deploy instantâneo, SSR pro SEO, edge functions
- **Framer Motion:** Animações cinematográficas performáticas
- **MDX Blog:** Posts em markdown, fácil de manter, renderiza React
- **next-intl:** i18n robusto com detecção automática de idioma
- **Tailwind:** Estilo consistente, dark theme nativo

---

## i18n — Idiomas

```
Detecção automática:
1. Header Accept-Language do browser
2. Geolocalização (IP)
3. Fallback: PT-BR

URLs:
- iagency-digital.com/pt (português)
- iagency-digital.com/es (español)
- iagency-digital.com/en (english)

Switcher no header pra trocar manual
```

---

## Fluxo de Conversão

```
Tráfego Pago (Google/Meta) → Landing Page
                               ↓
                    Scroll imersivo (serviços, cases)
                               ↓
                    Orçamento Interativo ou CTA direto
                               ↓
                    WhatsApp (+55 11 91477-1967)
                               ↓
                    Lucas atende e fecha
```

---

## Fases de Desenvolvimento

### Fase 1 — Fundação (1-2 dias)
- Setup Next.js + Tailwind + Framer Motion
- Layout base (header, footer, routing)
- i18n configurado (PT/ES/EN)
- Dark theme implementado
- Deploy Vercel (staging)

### Fase 2 — Home Page (2-3 dias)
- Hero com animação de partículas
- Seção de serviços (3 pilares)
- Seção "como funciona"
- CTAs → WhatsApp

### Fase 3 — Orçamento + Cases (1-2 dias)
- Wizard de orçamento interativo
- Integração WhatsApp com mensagem formatada
- Página de cases (grid + detalhe)
- Placeholder cases até Lucas enviar material

### Fase 4 — Blog + SEO (1 dia)
- Setup MDX
- 3-4 posts iniciais
- SEO completo (sitemap, robots, OG)
- Google Analytics + Meta Pixel

### Fase 5 — Polish + Launch (1 dia)
- Animações finais
- Testes responsivo (mobile, tablet, desktop)
- Performance (Lighthouse 90+)
- Domínio + DNS
- Go live

**Total estimado: 6-9 dias**
