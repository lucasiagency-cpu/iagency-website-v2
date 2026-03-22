# 08 — SEO & Analytics

## SEO On-Page

### Estrutura de URLs
```
PT: iagency-digital.com/pt/servicos/inteligencia-artificial
ES: iagency-digital.com/es/servicios/inteligencia-artificial
EN: iagency-digital.com/en/services/artificial-intelligence
```

### Meta Tags por Página

| Página | Title | Description |
|--------|-------|-------------|
| Home PT | IAgency Digital — IA, Automações e Sistemas Web | Traduzimos complexidade em resultado. Soluções de IA, automações e sistemas web sob medida. |
| Home ES | IAgency Digital — IA, Automatizaciones y Sistemas Web | Traducimos complejidad en resultado. Soluciones de IA y sistemas web a medida. |
| Home EN | IAgency Digital — AI, Automation & Custom Web Systems | We turn complexity into results. AI, automation, and custom web systems. |
| Serviços | Serviços — IAgency Digital | IA, sistemas web e automações sob medida para empresas. |
| IA | Inteligência Artificial — IAgency Digital | Chatbots, análise de dados e agentes autônomos para sua empresa. |
| Web | Sistemas Web — IAgency Digital | Plataformas, dashboards e e-commerce sob medida. |
| Automação | Automações — IAgency Digital | Elimine trabalho repetitivo. Fluxos automáticos e integrações. |
| Cases | Portfólio — IAgency Digital | Projetos de IA, automação e sistemas web entregues. |
| Blog | Blog — IAgency Digital | Tecnologia explicada pra quem toma decisão. |
| Orçamento | Orçamento — IAgency Digital | Monte seu orçamento em 2 minutos. Sem compromisso. |
| Sobre | Sobre — IAgency Digital | Traduzimos problemas de negócio em soluções tecnológicas. |

### Open Graph / Social
```html
<meta property="og:type" content="website" />
<meta property="og:image" content="/og-image.jpg" /> <!-- 1200x630 -->
<meta property="og:site_name" content="IAgency Digital" />
<meta name="twitter:card" content="summary_large_image" />
```

### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "IAgency Digital",
  "description": "IA, automações e sistemas web sob medida",
  "url": "https://iagency-digital.com",
  "telephone": "+5511914771967",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "BR"
  },
  "serviceType": ["Artificial Intelligence", "Web Development", "Process Automation"]
}
```

### Sitemap
- Gerado automaticamente pelo Next.js (`next-sitemap`)
- Inclui todas as páginas em todos os idiomas
- Atualiza no build

### Robots.txt
```
User-agent: *
Allow: /
Sitemap: https://iagency-digital.com/sitemap.xml
```

### Hreflang
```html
<link rel="alternate" hreflang="pt-BR" href="https://iagency-digital.com/pt/" />
<link rel="alternate" hreflang="es" href="https://iagency-digital.com/es/" />
<link rel="alternate" hreflang="en" href="https://iagency-digital.com/en/" />
<link rel="alternate" hreflang="x-default" href="https://iagency-digital.com/" />
```

---

## Performance

### Targets (Lighthouse)
| Métrica | Target |
|---------|--------|
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 100 |
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |

### Otimizações
- **Imagens:** Next/Image com lazy load + WebP/AVIF
- **Fontes:** `next/font` com preload (só pesos usados)
- **JS:** Code splitting automático do Next.js
- **CSS:** Tailwind purge (só classes usadas)
- **Animações:** Framer Motion com `lazy` loading
- **Hero canvas:** Lazy init, reduce motion pra mobile lento

---

## Analytics

### Google Analytics 4
- **Eventos customizados:**
  - `cta_click` — qual CTA, qual página
  - `whatsapp_open` — qual mensagem, qual contexto
  - `orcamento_start` — wizard iniciado
  - `orcamento_step` — cada passo completado
  - `orcamento_complete` — wizard finalizado
  - `blog_read` — post lido (scroll > 75%)
  - `service_view` — serviço específico visitado
  - `language_switch` — idioma trocado

### Meta Pixel
- **PageView** em todas as páginas
- **Lead** no orcamento_complete
- **Contact** no whatsapp_open
- **ViewContent** nos serviços e cases

### UTM Strategy (Tráfego Pago)
```
Google Ads:  ?utm_source=google&utm_medium=cpc&utm_campaign={campaign}
Meta Ads:    ?utm_source=meta&utm_medium=cpc&utm_campaign={campaign}
Instagram:   ?utm_source=instagram&utm_medium=social&utm_campaign=organic
LinkedIn:    ?utm_source=linkedin&utm_medium=social&utm_campaign=organic
```
