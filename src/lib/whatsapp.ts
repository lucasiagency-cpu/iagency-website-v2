const WHATSAPP_NUMBER = "5511914771967";

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface QuoteData {
  services: string[];
  urgency: string;
  budget: string;
  details?: string;
  name: string;
  email: string;
  company?: string;
}

export function quoteWhatsappMessage(data: QuoteData): string {
  let msg = `Olá! 👋 Vim pelo site da IAgency Digital.\n\n📋 *Meu orçamento:*\n\n`;
  msg += `*Serviços:* ${data.services.join(", ")}\n`;
  msg += `*Urgência:* ${data.urgency}\n`;
  msg += `*Budget:* ${data.budget}\n`;
  if (data.details) {
    msg += `*Detalhes:* ${data.details}\n`;
  }
  msg += `\n*Nome:* ${data.name}\n`;
  msg += `*Email:* ${data.email}\n`;
  if (data.company) {
    msg += `*Empresa:* ${data.company}\n`;
  }
  return msg;
}

export const WHATSAPP_MESSAGES = {
  hero: "Olá! Vi o site da IAgency e quero saber mais sobre os serviços.",
  serviceAI:
    "Olá! Tenho interesse em soluções de Inteligência Artificial para minha empresa.",
  serviceWeb:
    "Olá! Preciso de um sistema web/plataforma para minha empresa.",
  serviceAutomation:
    "Olá! Quero automatizar processos na minha empresa.",
  general: "Olá! Vi o site da IAgency e quero saber mais.",
} as const;
