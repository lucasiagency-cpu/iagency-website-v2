# 09 — Stack Técnico

## Stack Principal

| Camada | Tecnologia | Justificativa |
|--------|-----------|---------------|
| Framework | Next.js 14 (App Router) | SSR pro SEO, edge functions, deploy Vercel nativo |
| Linguagem | TypeScript | Type safety, DX superior |
| Styling | Tailwind CSS 4 | Dark theme nativo, purge automático, utility-first |
| Animações | Framer Motion | Cinematográfico, performático, declarativo |
| UI Base | Shadcn/ui | Componentes acessíveis, customizáveis, não é lib pesada |
| i18n | next-intl | Detecção automática idioma, routing por locale |
| Blog | MDX + contentlayer | Posts em markdown, renderiza React, SEO friendly |
| Icons | Lucide React | Consistente, leve, tree-shakeable |
| Forms | React Hook Form + Zod | Validação type-safe, leve |
| Analytics | @vercel/analytics + GA4 + Meta Pixel | Performance + conversão |
| SEO | next-sitemap + next-seo | Sitemap, robots, meta tags automáticos |
| Deploy | Vercel | Zero-config, edge network, preview deploys |
| Domínio | iagency-digital.com (a confirmar) | Profissional, internacional |

---

## Estrutura do Projeto

```
iagency-website-v2/
├── public/
│   ├── images/          # Imagens estáticas (cases, logos)
│   ├── fonts/           # Space Grotesk, Inter (self-hosted)
│   └── og-image.jpg     # Open Graph default
├── src/
│   ├── app/
│   │   ├── [locale]/           # Routing por idioma
│   │   │   ├── page.tsx        # Home
│   │   │   ├── layout.tsx      # Layout com header/footer
│   │   │   ├── servicos/
│   │   │   │   ├── page.tsx                    # Lista serviços
│   │   │   │   ├── inteligencia-artificial/    # IA
│   │   │   │   ├── sistemas-web/               # Web
│   │   │   │   └── automacoes/                 # Automações
│   │   │   ├── cases/
│   │   │   │   ├── page.tsx          # Grid de cases
│   │   │   │   └── [slug]/page.tsx   # Case individual
│   │   │   ├── orcamento/
│   │   │   │   └── page.tsx          # Wizard interativo
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx          # Lista posts
│   │   │   │   └── [slug]/page.tsx   # Post individual
│   │   │   └── sobre/
│   │   │       └── page.tsx          # Sobre
│   │   └── api/
│   │       └── contact/route.ts      # Fallback email se WhatsApp falhar
│   ├── components/
│   │   ├── ui/              # Shadcn components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── LanguageSwitcher.tsx
│   │   │   └── WhatsAppFloat.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Results.tsx
│   │   │   ├── Cases.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── QuoteCTA.tsx
│   │   │   ├── BlogPreview.tsx
│   │   │   └── FinalCTA.tsx
│   │   ├── services/
│   │   │   ├── ServiceCard.tsx
│   │   │   └── ServiceDetail.tsx
│   │   ├── cases/
│   │   │   ├── CaseCard.tsx
│   │   │   └── CaseGrid.tsx
│   │   ├── quote/
│   │   │   ├── QuoteWizard.tsx
│   │   │   ├── StepService.tsx
│   │   │   ├── StepUrgency.tsx
│   │   │   ├── StepBudget.tsx
│   │   │   ├── StepDetails.tsx
│   │   │   ├── StepContact.tsx
│   │   │   └── StepSummary.tsx
│   │   ├── blog/
│   │   │   ├── BlogCard.tsx
│   │   │   └── BlogPost.tsx
│   │   └── shared/
│   │       ├── AnimatedCounter.tsx
│   │       ├── ParticleBackground.tsx
│   │       ├── GradientButton.tsx
│   │       ├── SectionTitle.tsx
│   │       └── WhatsAppLink.tsx
│   ├── lib/
│   │   ├── whatsapp.ts       # Gerar links WhatsApp formatados
│   │   ├── analytics.ts      # Tracking events
│   │   └── utils.ts          # Helpers
│   ├── content/
│   │   ├── blog/             # MDX posts
│   │   │   ├── ia-reduzir-custos.mdx
│   │   │   ├── fullstack-explicado.mdx
│   │   │   ├── processos-automatizar.mdx
│   │   │   └── custo-sistema-web.mdx
│   │   └── cases/            # Case studies data
│   │       └── cases.json
│   ├── messages/
│   │   ├── pt.json           # Traduções PT-BR
│   │   ├── es.json           # Traduções ES
│   │   └── en.json           # Traduções EN
│   └── styles/
│       └── globals.css        # Tailwind base + custom vars
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── vercel.json
```

---

## Configurações Chave

### next-intl (i18n)
```ts
// Detecção automática de idioma
export default getRequestConfig(async ({ requestLocale }) => {
  // 1. URL locale (/pt, /es, /en)
  // 2. Accept-Language header
  // 3. Fallback: pt
  const locale = await requestLocale ?? 'pt';
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
```

### WhatsApp Link Generator
```ts
const WHATSAPP_NUMBER = '5511914771967';

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function quoteWhatsappMessage(data: QuoteData): string {
  return `Olá! 👋 Vim pelo site da IAgency Digital.

📋 *Meu orçamento:*

*Serviços:* ${data.services.join(', ')}
*Urgência:* ${data.urgency}
*Budget:* ${data.budget}
${data.details ? `*Detalhes:* ${data.details}` : ''}

*Nome:* ${data.name}
*Email:* ${data.email}
${data.company ? `*Empresa:* ${data.company}` : ''}`;
}
```

---

## Performance Budget

| Asset | Max Size |
|-------|----------|
| JavaScript (total) | < 200KB gzipped |
| CSS (total) | < 30KB gzipped |
| Imagens (hero) | < 300KB (WebP) |
| Imagens (cases) | < 150KB cada |
| Fontes | < 100KB (2 fontes, pesos selecionados) |
| LCP | < 2.5s |
| TTI | < 3.5s |
