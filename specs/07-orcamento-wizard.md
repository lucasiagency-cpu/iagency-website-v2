# 07 — Orçamento Interativo (Wizard)

## Conceito

Experiência tipo "configurador de carro" — o cliente seleciona opções visuais, sem precisar digitar quase nada. No final, tudo vira uma mensagem formatada pro WhatsApp.

**Design:** Dark, cards selecionáveis com ícones, progress bar no topo, transições suaves entre passos.

---

## Fluxo

```
[Progress: ●○○○○] Passo 1 → [●●○○○] Passo 2 → ... → [●●●●●] Enviar
```

---

## Passo 1: "O que você precisa?"
**Instrução:** Selecione um ou mais serviços.

| Opção | Ícone | Descrição curta |
|-------|-------|-----------------|
| Site / Plataforma Web | 🌐 | "Sistema, portal, e-commerce" |
| Inteligência Artificial | 🧠 | "Chatbots, análise, automação inteligente" |
| Automação de Processos | ⚡ | "Eliminar trabalho repetitivo" |
| App Mobile | 📱 | "Aplicativo iOS/Android" |
| Consultoria | 💡 | "Preciso de orientação técnica" |
| Não sei ainda | 🤔 | "Quero entender minhas opções" |

**UI:** Grid de cards 2x3. Seleção múltipla (toggle). Card selecionado = gradient border + glow.

---

## Passo 2: "Qual a urgência?"
**Instrução:** Quando você precisa disso funcionando?

| Opção | Ícone | Detalhe |
|-------|-------|---------|
| Tranquilo | 🟢 | "2-3 meses está ótimo" |
| Moderado | 🟡 | "1 mês seria ideal" |
| Urgente | 🟠 | "2 semanas" |
| Ontem | 🔴 | "Já deveria estar pronto" |

**UI:** 4 cards horizontais. Seleção única. Cor do ícone muda conforme urgência.

---

## Passo 3: "Qual seu budget?"
**Instrução:** Isso nos ajuda a sugerir a melhor abordagem.

| Opção | Range |
|-------|-------|
| 💰 | Até R$5.000 |
| 💰💰 | R$5.000 - R$15.000 |
| 💰💰💰 | R$15.000 - R$50.000 |
| 💰💰💰💰 | Acima de R$50.000 |
| 🤷 | Preciso de uma estimativa |

**UI:** 5 opções em lista vertical ou slider visual. Seleção única.

**Nota i18n:** Valores em R$ pra PT-BR, USD pra EN, USD pra ES.
- EN: Up to $1,000 | $1K-$3K | $3K-$10K | $10K+ | Need an estimate
- ES: Hasta $1,000 | $1K-$3K | $3K-$10K | $10K+ | Necesito una estimación

---

## Passo 4: "Conte mais" (opcional)
**Instrução:** Qualquer detalhe ajuda. Pode ser curto.

**UI:** 
- Textarea (max 500 chars)
- Placeholder: "Ex: Preciso de um sistema para gerenciar pedidos dos meus clientes..."
- Contador de caracteres
- Botão "Pular" pra quem não quer digitar

---

## Passo 5: "Quase lá!"
**Instrução:** Pra gente saber quem você é.

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| Seu nome | text | Sim |
| Email | email | Sim |
| Empresa | text | Não |
| WhatsApp | tel | Não (já vai abrir o WhatsApp) |

**UI:** Formulário clean, 1 campo por linha. Auto-focus no primeiro.

---

## Tela Final: Resumo + Envio

```
┌─────────────────────────────────────────┐
│                                         │
│  ✅ Seu orçamento está pronto!          │
│                                         │
│  Serviços: IA, Automação               │
│  Urgência: Moderado (1 mês)            │
│  Budget: R$15.000 - R$50.000           │
│  Detalhes: "Preciso de um sistema..."  │
│  Nome: João Silva                       │
│  Empresa: ABC Ltda                      │
│                                         │
│  [ Enviar pelo WhatsApp →  ]            │
│                                         │
│  Ou, se preferir:                       │
│  [ Enviar por email ]                   │
│                                         │
└─────────────────────────────────────────┘
```

---

## Mensagem WhatsApp Gerada

```
Olá! 👋 Vim pelo site da IAgency Digital.

📋 *Meu orçamento:*

*Serviços:* IA, Automação de Processos
*Urgência:* Moderado (1 mês)
*Budget:* R$15.000 - R$50.000
*Detalhes:* Preciso de um sistema para gerenciar pedidos dos meus clientes com IA pra priorizar os mais urgentes.

*Nome:* João Silva
*Email:* joao@abc.com
*Empresa:* ABC Ltda
```

**URL WhatsApp:**
```
https://wa.me/5511914771967?text={mensagem_encodada}
```

---

## Versões i18n

### ES — Passo 1
"¿Qué necesitas?" → Sitio Web | Inteligencia Artificial | Automatización | App Móvil | Consultoría | No sé aún

### ES — Passo 2
"¿Cuál es la urgencia?" → Tranquilo (2-3 meses) | Moderado (1 mes) | Urgente (2 semanas) | Ayer

### EN — Passo 1
"What do you need?" → Website/Platform | Artificial Intelligence | Process Automation | Mobile App | Consulting | Not sure yet

### EN — Passo 2
"How urgent is it?" → No rush (2-3 months) | Moderate (1 month) | Urgent (2 weeks) | Yesterday

---

## Comportamento

- **Progress bar** no topo mostra progresso
- **Botão voltar** em cada passo
- **Transição** entre passos: slide horizontal suave
- **Validação** leve (nome e email obrigatórios)
- **Mobile:** Passos ocupam tela inteira, scroll vertical se necessário
- **Acessibilidade:** Navegável por teclado, labels em todos os inputs
