"use client";

import { motion } from "framer-motion";
import { Brain, Globe, Zap, ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import GradientButton from "@/components/shared/GradientButton";
import { whatsappLink } from "@/lib/whatsapp";

const services = [
  {
    key: "ai" as const,
    icon: Brain,
    slug: "inteligencia-artificial",
  },
  {
    key: "web" as const,
    icon: Globe,
    slug: "sistemas-web",
  },
  {
    key: "automation" as const,
    icon: Zap,
    slug: "automacoes",
  },
];

export default function ServicosClient() {
  const t = useTranslations("services");
  const tw = useTranslations("whatsapp");
  const locale = useLocale();

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-20">
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
          className="mt-4 text-text-secondary text-lg md:text-xl max-w-2xl mx-auto"
        >
          {t("sub")}
        </motion.p>
      </section>

      {/* Service Cards */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            const itemKeys =
              service.key === "ai"
                ? ["chatbots", "dataAnalysis", "agents", "integration"]
                : service.key === "web"
                ? ["custom", "dashboards", "ecommerce", "apis"]
                : ["flows", "toolIntegration", "reports", "noSpreadsheets"];

            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass rounded-xl p-8 md:p-12"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-md bg-accent-primary/10 flex items-center justify-center">
                    <Icon size={24} className="text-accent-primary" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary">
                    {t(`${service.key}.title`)}
                  </h2>
                </div>

                <p className="text-text-secondary text-lg mb-2">
                  {t(`${service.key}.tagline`)}
                </p>
                <p className="text-text-muted mb-8">
                  {t(`${service.key}.heroSub`)}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {itemKeys.map((item) => (
                    <div
                      key={item}
                      className="bg-bg-secondary/50 rounded-lg p-4 border border-white/5"
                    >
                      <h4 className="font-heading text-sm font-semibold text-text-primary mb-1">
                        {t(`${service.key}.items.${item}.title`)}
                      </h4>
                      <p className="text-text-muted text-xs leading-relaxed">
                        {t(`${service.key}.items.${item}.description`)}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/${locale}/servicos/${service.slug}`}
                  className="inline-flex items-center gap-2 text-accent-secondary hover:text-accent-primary transition-colors font-medium text-sm"
                >
                  {t("learnMore")} <ArrowRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mt-20">
        <GradientButton
          href={whatsappLink(tw("general"))}
          external
          size="lg"
        >
          {t("ai.cta")}
        </GradientButton>
      </section>
    </div>
  );
}
