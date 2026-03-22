# 02 — Arquitetura & Wireframes

## Mapa do Site

```
iagency-digital.com/
├── / (Home — landing page imersiva)
├── /servicos (ou /services, /servicios)
│   ├── /inteligencia-artificial
│   ├── /sistemas-web
│   └── /automacoes
├── /cases (Portfólio)
│   └── /cases/[slug] (Detalhe do case)
├── /orcamento (Wizard interativo)
├── /blog
│   └── /blog/[slug] (Post individual)
├── /sobre (Sobre a IAgency)
└── /contato (Redirect → WhatsApp)
```

---

## Wireframe: HOME

```
┌─────────────────────────────────────────────┐
│ HEADER (fixo, transparente → solid on scroll)│
│ Logo          Serviços Cases Blog Orçamento  │
│                              [PT|ES|EN] [☰]  │
├─────────────────────────────────────────────┤
│                                             │
│          ░░ PARTÍCULAS ANIMADAS ░░          │
│                                             │
│    Traduzimos complexidade                  │
│    em resultado.                            │
│                                             │
│    Tecnologia que faz sentido               │
│    pro seu negócio.                         │
│                                             │
│    [ Fale com a gente → ]                   │
│                                             │
│    ↓ scroll indicator                       │
├─────────────────────────────────────────────┤
│                                             │
│    O QUE FAZEMOS                            │
│                                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│  │ 🧠       │ │ 🌐       │ │ ⚡       │   │
│  │ Inteli-  │ │ Sistemas │ │ Auto-    │   │
│  │ gência   │ │ Web      │ │ mações   │   │
│  │ Artifi-  │ │          │ │          │   │
│  │ cial     │ │ Platafor-│ │ Elimine  │   │
│  │          │ │ mas que  │ │ trabalho │   │
│  │ Decisões │ │ conectam │ │ repeti-  │   │
│  │ automá-  │ │ tudo     │ │ tivo     │   │
│  │ ticas    │ │          │ │          │   │
│  │ [Saiba+] │ │ [Saiba+] │ │ [Saiba+] │   │
│  └──────────┘ └──────────┘ └──────────┘   │
├─────────────────────────────────────────────┤
│                                             │
│    RESULTADOS QUE FALAM                     │
│                                             │
│    ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│    │ 40%     │  │ 3x      │  │ 200+    │  │
│    │ menos   │  │ mais     │  │ projetos│  │
│    │ custo   │  │ rápido   │  │ entre-  │  │
│    │ opera-  │  │ que o    │  │ gues    │  │
│    │ cional  │  │ mercado  │  │         │  │
│    └─────────┘  └─────────┘  └─────────┘  │
│    (números animam ao entrar na viewport)   │
├─────────────────────────────────────────────┤
│                                             │
│    CASES                                    │
│                                             │
│    ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐    │
│    │ Case │ │ Case │ │ Case │ │ Case │    │
│    │  1   │ │  2   │ │  3   │ │  4   │    │
│    │      │ │      │ │      │ │      │    │
│    │hover:│ │      │ │      │ │      │    │
│    │reveal│ │      │ │      │ │      │    │
│    └──────┘ └──────┘ └──────┘ └──────┘    │
│                                             │
│    [ Ver todos os projetos → ]              │
├─────────────────────────────────────────────┤
│                                             │
│    COMO FUNCIONA                            │
│                                             │
│    ①──────②──────③──────④                   │
│    Conta   Desenhamos  Construímos  Entrega │
│    o pro-  a solução   e testamos   funcio- │
│    blema              juntos       nando    │
│                                             │
│    (timeline horizontal com animação)       │
├─────────────────────────────────────────────┤
│                                             │
│    MONTE SEU ORÇAMENTO                      │
│                                             │
│    "Descubra quanto custa transformar       │
│     seu negócio."                           │
│                                             │
│    [ Começar orçamento → ]                  │
│                                             │
│    ou                                       │
│                                             │
│    [ Falar direto no WhatsApp → ]           │
├─────────────────────────────────────────────┤
│                                             │
│    DO BLOG                                  │
│                                             │
│    ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│    │ Post 1   │ │ Post 2   │ │ Post 3   │ │
│    │ thumb    │ │ thumb    │ │ thumb    │ │
│    │ título   │ │ título   │ │ título   │ │
│    │ resumo   │ │ resumo   │ │ resumo   │ │
│    └──────────┘ └──────────┘ └──────────┘ │
│                                             │
│    [ Ver todos → ]                          │
├─────────────────────────────────────────────┤
│                                             │
│    CTA FINAL                                │
│                                             │
│    "Pronto pra transformar seu negócio?"    │
│                                             │
│    [ Fale com a gente → ]                   │
│                                             │
├─────────────────────────────────────────────┤
│ FOOTER                                      │
│ Logo  │ Serviços │ Cases │ Blog │ Orçamento │
│ © 2026 IAgency Digital                      │
│ WhatsApp │ Instagram │ LinkedIn             │
└─────────────────────────────────────────────┘
```

---

## Wireframe: SERVIÇOS (Individual)

```
┌─────────────────────────────────────────────┐
│ HEADER                                      │
├─────────────────────────────────────────────┤
│                                             │
│    [ícone animado do serviço]               │
│                                             │
│    Inteligência Artificial                  │
│    "Máquinas que pensam.                    │
│     Decisões que escalam."                  │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│    O QUE ENTREGAMOS                         │
│                                             │
│    ┌─────────────────────────────────┐      │
│    │ Chatbots Inteligentes           │      │
│    │ Atendimento 24/7 que resolve    │      │
│    │ problemas de verdade.           │      │
│    └─────────────────────────────────┘      │
│    ┌─────────────────────────────────┐      │
│    │ Análise de Dados                │      │
│    │ Transforme números em decisões. │      │
│    └─────────────────────────────────┘      │
│    ┌─────────────────────────────────┐      │
│    │ Agentes Autônomos               │      │
│    │ Processos que rodam sozinhos.   │      │
│    └─────────────────────────────────┘      │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│    CASES RELACIONADOS                       │
│    (filtrado por categoria)                 │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│    "Quer IA no seu negócio?"                │
│    [ Falar no WhatsApp → ]                  │
│                                             │
├─────────────────────────────────────────────┤
│ FOOTER                                      │
└─────────────────────────────────────────────┘
```

---

## Navegação

### Header (Desktop)
```
[Logo]  Serviços ▾  Cases  Blog  Orçamento  [PT|ES|EN]  [Fale conosco]
```

### Header (Mobile)
```
[Logo]                    [☰ Hamburger]
```
Menu abre fullscreen com animação slide-in.

### Scroll Behavior
- Header transparente no topo → background sólido ao scrollar
- Scroll suave entre seções
- Scroll indicator animado no hero (seta pulsante)
- Lazy load de imagens e animações

### Floating WhatsApp Button (Mobile)
```
Canto inferior direito
Ícone WhatsApp verde
Pulse animation sutil
Sempre visível
```
