"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { cases } from "@/lib/cases";
import SectionTitle from "@/components/shared/SectionTitle";
import GradientButton from "@/components/shared/GradientButton";

export default function CasesPreview() {
  const t = useTranslations("cases");
  const locale = useLocale() as "pt" | "es" | "en";
  const featured = cases.slice(0, 4);

  return (
    <section className="py-section px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionTitle title={t("title")} subtitle={t("sub")} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              href={`/${locale}/cases/${c.slug}`}
              className="group block relative overflow-hidden rounded-lg aspect-[4/5] bg-bg-secondary"
            >
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-bg-primary/60 group-hover:bg-bg-primary/40 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex gap-2 mb-3">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-accent-primary/20 text-accent-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {c.title[locale]}
                </h3>
                <p className="mt-2 text-text-secondary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {c.description[locale]}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <GradientButton
          href={`/${locale}/cases`}
          variant="secondary"
        >
          {t("cta")}
        </GradientButton>
      </div>
    </section>
  );
}
