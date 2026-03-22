"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { cases } from "@/lib/cases";
import { whatsappLink } from "@/lib/whatsapp";

const FILTERS = ["all", "ai", "web", "automation"] as const;

export default function CasesClient() {
  const t = useTranslations("cases");
  const tw = useTranslations("whatsapp");
  const locale = useLocale() as "pt" | "es" | "en";
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? cases : cases.filter((c) => c.category === filter);

  const filterLabels: Record<string, string> = {
    all: t("filterAll"),
    ai: t("filterAI"),
    web: t("filterWeb"),
    automation: t("filterAutomation"),
  };

  return (
    <div className="pt-24 pb-20">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary"
        >
          {t("title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-text-secondary text-lg"
        >
          {t("sub")}
        </motion.p>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === f
                  ? "bg-accent-primary text-white shadow-lg shadow-accent-primary/20"
                  : "bg-bg-secondary/50 text-text-muted hover:text-text-secondary border border-white/5"
              }`}
            >
              {filterLabels[f]}
            </button>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((c) => (
              <motion.div
                key={c.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-bg-secondary">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 group-hover:from-accent-primary/30 group-hover:to-accent-secondary/30 transition-all duration-500" />
                  <div className="absolute inset-0 bg-bg-primary/60 group-hover:bg-bg-primary/40 transition-colors duration-300" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {c.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-accent-primary/20 text-accent-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-heading text-xl font-semibold text-text-primary mb-2">
                        {c.title[locale]}
                      </h3>
                      <p className="text-text-secondary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                        {c.description[locale]}
                      </p>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2 text-xs">
                        <p className="text-text-muted">
                          <span className="text-accent-secondary font-semibold">→</span> {c.results[locale]}
                        </p>
                      </div>
                      <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={whatsappLink(tw("caseRef", { name: c.title[locale] }))}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-3 py-1.5 rounded-md bg-whatsapp/20 text-whatsapp hover:bg-whatsapp/30 transition-colors"
                        >
                          {t("wantSomething")}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
