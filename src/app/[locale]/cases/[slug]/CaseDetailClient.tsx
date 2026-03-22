"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getCaseBySlug } from "@/lib/cases";
import GradientButton from "@/components/shared/GradientButton";
import { whatsappLink } from "@/lib/whatsapp";

type Locale = "pt" | "es" | "en";

export default function CaseDetailClient() {
  const params = useParams();
  const slug = params.slug as string;
  const locale = useLocale() as Locale;
  const caseStudy = getCaseBySlug(slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#94A3B8]">Case not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          href={`/${locale}/cases`}
          className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          <span>{locale === "pt" ? "Voltar aos cases" : locale === "es" ? "Volver a los casos" : "Back to cases"}</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-[#7C3AED]/20 text-[#7C3AED] border border-[#7C3AED]/30"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F8FAFC] mb-4">
            {caseStudy.title[locale]}
          </h1>

          <p className="text-lg text-[#94A3B8] mb-12">
            {caseStudy.description[locale]}
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-[#F8FAFC] mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#7C3AED]/20 flex items-center justify-center text-sm">🎯</span>
                {locale === "pt" ? "Desafio" : locale === "es" ? "Desafío" : "Challenge"}
              </h2>
              <p className="text-[#94A3B8] leading-relaxed pl-10">
                {caseStudy.challenge[locale]}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F8FAFC] mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#06B6D4]/20 flex items-center justify-center text-sm">💡</span>
                {locale === "pt" ? "Solução" : locale === "es" ? "Solución" : "Solution"}
              </h2>
              <p className="text-[#94A3B8] leading-relaxed pl-10">
                {caseStudy.solution[locale]}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#F8FAFC] mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#10B981]/20 flex items-center justify-center text-sm">📊</span>
                {locale === "pt" ? "Resultados" : locale === "es" ? "Resultados" : "Results"}
              </h2>
              <p className="text-[#94A3B8] leading-relaxed pl-10">
                {caseStudy.results[locale]}
              </p>
            </section>
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-[#0F0F1A] border border-[#1A1A2E] text-center">
            <h3 className="text-2xl font-bold text-[#F8FAFC] mb-3 font-[family-name:var(--font-space-grotesk)]">
              {locale === "pt"
                ? "Quer algo assim?"
                : locale === "es"
                ? "¿Quieres algo así?"
                : "Want something like this?"}
            </h3>
            <p className="text-[#94A3B8] mb-6">
              {locale === "pt"
                ? "Uma conversa de 15 minutos pode ser o começo."
                : locale === "es"
                ? "Una conversación de 15 minutos puede ser el comienzo."
                : "A 15-minute conversation could be the start."}
            </p>
            <a href={whatsappLink(
              locale === "pt"
                ? `Olá! Vi o case "${caseStudy.title.pt}" e quero algo parecido.`
                : locale === "es"
                ? `¡Hola! Vi el caso "${caseStudy.title.es}" y quiero algo similar.`
                : `Hi! I saw the "${caseStudy.title.en}" case and want something similar.`
            )}>
              <GradientButton>
                {locale === "pt" ? "Fale com a gente →" : locale === "es" ? "Hablemos →" : "Let's talk →"}
              </GradientButton>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
