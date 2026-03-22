"use client";

import { motion } from "framer-motion";
import { Brain, Globe, Zap } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";

const icons = [Brain, Globe, Zap];
const keys = ["ai", "web", "automation"] as const;
const slugs = [
  "inteligencia-artificial",
  "sistemas-web",
  "automacoes",
];

export default function Services() {
  const t = useTranslations("services");
  const locale = useLocale();

  return (
    <section className="py-section px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionTitle title={t("title")} subtitle={t("sub")} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {keys.map((key, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link
                href={`/${locale}/servicos/${slugs[i]}`}
                className="group block h-full glass glass-hover rounded-lg p-8 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-12 h-12 rounded-md bg-accent-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent-primary/20 transition-colors">
                  <Icon
                    size={24}
                    className="text-accent-primary"
                  />
                </div>

                <h3 className="font-heading text-xl md:text-2xl font-semibold text-text-primary mb-3">
                  {t(`${key}.title`)}
                </h3>

                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
                  {t(`${key}.description`)}
                </p>

                <span className="text-accent-secondary text-sm font-medium group-hover:underline">
                  {t("learnMore")} →
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
