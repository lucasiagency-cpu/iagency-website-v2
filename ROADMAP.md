# 10 — Roadmap

## Visão Geral

| Fase | Duração | Entrega |
|------|---------|---------|
| 1. Fundação | 1 dia | Setup, layout base, i18n, dark theme, deploy staging |
| 2. Home Page | 2 dias | Hero, serviços, resultados, como funciona, CTAs |
| 3. Serviços | 1 dia | 3 páginas de serviço com copy completa |
| 4. Orçamento | 1 dia | Wizard interativo com envio WhatsApp |
| 5. Cases | 1 dia | Grid + página de detalhe (placeholders até material chegar) |
| 6. Blog | 1 dia | Setup MDX, 4 posts iniciais, listagem |
| 7. Sobre + SEO | 0.5 dia | Página sobre, meta tags, sitemap, analytics |
| 8. Polish | 1 dia | Animações finais, responsivo, performance, testes |
| **Total** | **~8 dias** | |

---

## Fase 1 — Fundação (Dia 1)

### Tarefas
- [ ] `npx create-next-app` com TypeScript + Tailwind + App Router
- [ ] Instalar dependências: framer-motion, next-intl, shadcn/ui, lucide-react
- [ ] Configurar Tailwind com design tokens (cores, fontes, spacing)
- [ ] Setup next-intl com PT/ES/EN + detecção automática
- [ ] Criar messages/pt.json, es.json, en.json (estrutura base)
- [ ] Layout base: Header (transparente→sólido), Footer
- [ ] LanguageSwitcher component
- [ ] WhatsAppFloat component (mobile)
- [ ] Dark theme global (globals.css)
- [ ] Self-host fontes (Space Grotesk + Inter)
- [ ] Deploy Vercel (staging URL)
- [ ] Criar repo GitHub (privado): lucasiagency-cpu/iagency-website-v2

### Validação
- [ ] Site abre em /pt, /es, /en
- [ ] Header e footer renderizam
- [ ] Fontes carregam
- [ ] Dark theme aplicado
- [ ] Deploy Vercel funciona

---

## Fase 2 — Home Page (Dias 2-3)

### Tarefas
- [ ] **Hero:** ParticleBackground + headline animada + CTA
- [ ] **Serviços:** 3 cards com glassmorphism + hover + links
- [ ] **Resultados:** AnimatedCounter (40%, 3x, 200+) + viewport trigger
- [ ] **Cases preview:** Grid 4 cards com hover reveal (placeholder)
- [ ] **Como Funciona:** Timeline horizontal 4 passos animada
- [ ] **Orçamento CTA:** Seção com 2 botões (wizard + WhatsApp direto)
- [ ] **Blog preview:** 3 cards de posts recentes
- [ ] **CTA Final:** Headline + botão WhatsApp
- [ ] **Scroll animations:** fade-in + stagger em todas as seções
- [ ] Copy PT/ES/EN em todas as seções

### Validação
- [ ] Home completa nos 3 idiomas
- [ ] Animações suaves, sem jank
- [ ] CTAs abrem WhatsApp com mensagem correta
- [ ] Responsivo: mobile, tablet, desktop
- [ ] Lighthouse Performance > 85

---

## Fase 3 — Serviços (Dia 4)

### Tarefas
- [ ] Página lista de serviços (/servicos)
- [ ] Página IA (/servicos/inteligencia-artificial)
- [ ] Página Web (/servicos/sistemas-web)
- [ ] Página Automações (/servicos/automacoes)
- [ ] Copy completa PT/ES/EN em cada página
- [ ] Links entre serviços e cases relacionados
- [ ] CTA específico por serviço → WhatsApp com mensagem contextual

### Validação
- [ ] 4 páginas renderizam nos 3 idiomas
- [ ] URLs localizadas funcionam
- [ ] CTAs enviam mensagem correta

---

## Fase 4 — Orçamento Wizard (Dia 5)

### Tarefas
- [ ] QuoteWizard component com state management
- [ ] Step 1: Seleção de serviços (multi-select cards)
- [ ] Step 2: Urgência (single-select cards)
- [ ] Step 3: Budget (single-select)
- [ ] Step 4: Detalhes (textarea opcional)
- [ ] Step 5: Contato (nome, email, empresa)
- [ ] Step 6: Resumo + botão WhatsApp
- [ ] Progress bar animada
- [ ] Transições slide entre steps
- [ ] Geração de mensagem WhatsApp formatada
- [ ] i18n completo (labels, opções, mensagem)
- [ ] Analytics: track cada step

### Validação
- [ ] Wizard funciona end-to-end nos 3 idiomas
- [ ] Mensagem WhatsApp abre formatada corretamente
- [ ] Valores de budget adaptados por idioma (R$/USD)
- [ ] Funciona no mobile (touch-friendly)
- [ ] Steps navegáveis (avançar/voltar)

---

## Fase 5 — Cases (Dia 6)

### Tarefas
- [ ] cases.json com dados dos projetos
- [ ] CaseGrid com filtro por categoria
- [ ] CaseCard com hover reveal
- [ ] Página de detalhe do case (/cases/[slug])
- [ ] Placeholder cases (usar screenshots genéricos até material real)
- [ ] CTA "Quero algo assim" → WhatsApp com referência ao case

### Validação
- [ ] Grid renderiza com filtros
- [ ] Página de detalhe funciona
- [ ] i18n nos títulos e descrições

---

## Fase 6 — Blog (Dia 7)

### Tarefas
- [ ] Setup MDX com contentlayer
- [ ] Escrever 4 posts iniciais em PT-BR:
  1. "Como IA pode reduzir custos na sua empresa"
  2. "Fullstack explicado: o que é e por que importa"
  3. "5 processos que toda empresa deveria automatizar"
  4. "Quanto custa um sistema web sob medida em 2026?"
- [ ] BlogCard component
- [ ] Página de listagem (/blog)
- [ ] Página individual (/blog/[slug])
- [ ] CTA no final de cada post → WhatsApp
- [ ] Tags e categorias
- [ ] Reading time estimado

### Validação
- [ ] 4 posts publicados e navegáveis
- [ ] SEO meta tags por post
- [ ] CTA funciona
- [ ] Layout clean e legível

---

## Fase 7 — Sobre + SEO (Dia 7.5)

### Tarefas
- [ ] Página /sobre com copy
- [ ] Meta tags em todas as páginas (next-seo)
- [ ] next-sitemap configurado
- [ ] robots.txt
- [ ] Structured data (JSON-LD)
- [ ] Hreflang tags
- [ ] Open Graph images
- [ ] Google Analytics 4 setup
- [ ] Meta Pixel setup
- [ ] Event tracking (cta_click, whatsapp_open, orcamento_*)

### Validação
- [ ] Lighthouse SEO = 100
- [ ] Sitemap gerado com todos os idiomas
- [ ] OG tags renderizam preview correto
- [ ] Analytics recebendo eventos

---

## Fase 8 — Polish & Launch (Dia 8)

### Tarefas
- [ ] Revisão completa de animações (timing, easing)
- [ ] Teste responsivo: iPhone, Android, iPad, Desktop
- [ ] Teste cross-browser: Chrome, Safari, Firefox
- [ ] Performance audit: Lighthouse 90+ em tudo
- [ ] Acessibilidade: navegação por teclado, screen reader
- [ ] Favicon + Apple touch icon
- [ ] 404 page customizada
- [ ] Loading states (skeleton screens)
- [ ] Compressão de imagens final
- [ ] DNS + domínio (quando Lucas confirmar)
- [ ] Redirect / → /pt (ou idioma detectado)
- [ ] Go live 🚀

### Validação Final
- [ ] Site funciona em todos os dispositivos
- [ ] Todos os CTAs levam ao WhatsApp correto
- [ ] Orçamento wizard funciona end-to-end
- [ ] Blog posts publicados
- [ ] Analytics funcionando
- [ ] SEO 100
- [ ] Performance 90+
- [ ] Lucas aprova ✅

---

## Dependências do Lucas

| Item | Quando precisa | Impacto se atrasar |
|------|---------------|-------------------|
| Material visual (cases) | Até Fase 5 | Usa placeholders |
| Logo IAgency | Até Fase 8 | Usa texto como logo |
| Domínio confirmado | Até Fase 8 | Deploy em staging URL |
| Números reais (resultados) | Até Fase 8 | Mantém estimativas |
| Revisão de copy | A qualquer momento | Ajusta conforme feedback |
