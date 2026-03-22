# 03 — Design System

## Paleta de Cores

### Core
| Token | Hex | Uso |
|-------|-----|-----|
| `--bg-primary` | `#07070D` | Background principal |
| `--bg-secondary` | `#0F0F1A` | Cards, seções alternadas |
| `--bg-tertiary` | `#16162A` | Hover states, inputs |
| `--surface` | `#1A1A2E` | Modais, dropdowns |

### Accent
| Token | Hex | Uso |
|-------|-----|-----|
| `--accent-primary` | `#7C3AED` | Roxo principal (botões, links) |
| `--accent-secondary` | `#06B6D4` | Cyan (destaques, ícones) |
| `--accent-gradient` | `#7C3AED → #06B6D4` | CTAs, badges, bordas hover |
| `--accent-glow` | `rgba(124,58,237,0.15)` | Glow effects |

### Text
| Token | Hex | Uso |
|-------|-----|-----|
| `--text-primary` | `#F8FAFC` | Headings, corpo principal |
| `--text-secondary` | `#94A3B8` | Subtítulos, descrições |
| `--text-muted` | `#64748B` | Metadados, labels |

### Semantic
| Token | Hex | Uso |
|-------|-----|-----|
| `--success` | `#10B981` | Confirmações |
| `--warning` | `#F59E0B` | Alertas |
| `--whatsapp` | `#25D366` | Botão WhatsApp |

---

## Tipografia

### Font Stack
```css
--font-heading: 'Space Grotesk', sans-serif;
--font-body: 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

### Scale
| Elemento | Size | Weight | Font |
|----------|------|--------|------|
| H1 (Hero) | 64px / 4rem | 700 | Space Grotesk |
| H2 (Seção) | 48px / 3rem | 700 | Space Grotesk |
| H3 (Card) | 28px / 1.75rem | 600 | Space Grotesk |
| H4 (Sub) | 22px / 1.375rem | 600 | Space Grotesk |
| Body | 18px / 1.125rem | 400 | Inter |
| Body Small | 16px / 1rem | 400 | Inter |
| Caption | 14px / 0.875rem | 400 | Inter |
| Code/Tech | 14px / 0.875rem | 400 | JetBrains Mono |

### Mobile Scale
| Elemento | Size |
|----------|------|
| H1 | 36px / 2.25rem |
| H2 | 32px / 2rem |
| H3 | 22px / 1.375rem |
| Body | 16px / 1rem |

---

## Componentes

### Card de Serviço
```
┌────────────────────────────┐
│ [ícone animado]            │ ← Lottie ou SVG animado
│                            │
│ Inteligência Artificial    │ ← H3, Space Grotesk
│                            │
│ Decisões automáticas       │ ← Body, Inter, text-secondary
│ que escalam seu negócio.   │
│                            │
│ Saiba mais →               │ ← Link com gradient underline
│                            │
│ ─── gradient border ───    │ ← Borda gradient no hover
└────────────────────────────┘

Background: glassmorphism (bg-secondary + backdrop-blur)
Hover: scale(1.02) + glow sutil + gradient border
Transição: 300ms ease
```

### Card de Case
```
┌────────────────────────────┐
│                            │
│    [thumbnail escurecida]  │ ← Imagem com overlay escuro
│                            │
│    ── hover revela ──      │
│                            │
│    Nome do Projeto         │ ← H4
│    IA • Automação          │ ← Tags com pills
│                            │
│    [ Ver case → ]          │ ← Aparece no hover
│                            │
└────────────────────────────┘

Hover: overlay clareia + texto sobe com slide-up
```

### Card de Blog
```
┌────────────────────────────┐
│ [thumbnail 16:9]           │
├────────────────────────────┤
│ Tag: IA                    │ ← Pill com accent-primary
│                            │
│ Como IA pode reduzir       │ ← H4
│ custos na sua empresa      │
│                            │
│ Descubra 5 formas de       │ ← Body small, text-secondary
│ aplicar IA sem...          │
│                            │
│ 22 mar 2026 · 5 min        │ ← Caption, text-muted
└────────────────────────────┘
```

### Botão Primário (CTA)
```
┌────────────────────────────┐
│  Fale com a gente  →       │
└────────────────────────────┘

Background: gradient (accent-primary → accent-secondary)
Text: white, 16px, 600 weight
Padding: 16px 32px
Border-radius: 12px
Hover: scale(1.05) + glow + shadow
Active: scale(0.98)
```

### Botão Secundário
```
┌────────────────────────────┐
│  Saiba mais  →             │
└────────────────────────────┘

Background: transparent
Border: 1px solid accent-primary (20% opacity)
Hover: background accent-primary (10% opacity)
```

### Botão WhatsApp Floating
```
  ┌──────┐
  │  📱  │  ← Ícone WhatsApp branco sobre fundo #25D366
  └──────┘
  
Posição: fixed, bottom-right (24px margin)
Size: 56px
Border-radius: 50%
Shadow: 0 4px 20px rgba(37,211,102,0.3)
Animação: pulse sutil a cada 5s
Só aparece no mobile (ou após scroll no desktop)
```

### Número Animado (Contador)
```
  40%
  menos custo
  operacional

Anima de 0 → 40 ao entrar na viewport
Duração: 2s, ease-out
Font: Space Grotesk, 64px, 700
Cor: gradient text (accent-primary → accent-secondary)
```

---

## Animações

### Scroll Animations (Framer Motion)
| Elemento | Animação | Trigger |
|----------|----------|---------|
| Seções | fade-in + slide-up (20px) | Viewport entry |
| Cards | stagger (0.1s delay entre cards) | Viewport entry |
| Números | count-up de 0 → valor | Viewport entry |
| Timeline passos | reveal sequencial | Viewport entry |
| Hero headline | typewriter ou fade-in word-by-word | Page load |

### Micro-interactions
| Elemento | Animação |
|----------|----------|
| Links | Gradient underline slide-in da esquerda |
| Cards hover | Scale(1.02) + glow shadow |
| Botões hover | Scale(1.05) + gradient shift |
| Menu hamburger | Morph X ↔ ☰ |
| Language switcher | Dropdown fade-in |
| Scroll indicator | Bounce sutil infinite |

### Hero Background
```
Opção A: Partículas conectadas (estilo neural network)
- Canvas ou Three.js
- Pontos brancos semi-transparentes
- Linhas conectam pontos próximos
- Movimento orgânico lento
- Reage ao mouse (parallax)

Opção B: Gradient mesh animado
- Blobs de cor (roxo, cyan) em movimento
- Blend mode suave
- Noise texture sutil
- Mais leve que partículas
```

---

## Spacing

```
--space-xs: 4px
--space-sm: 8px
--space-md: 16px
--space-lg: 24px
--space-xl: 32px
--space-2xl: 48px
--space-3xl: 64px
--space-4xl: 96px
--space-section: 120px (espaço entre seções)
```

## Border Radius
```
--radius-sm: 8px
--radius-md: 12px
--radius-lg: 16px
--radius-xl: 24px
--radius-full: 9999px (pills)
```

## Breakpoints
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```
