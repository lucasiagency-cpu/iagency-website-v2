"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import GradientButton from "@/components/shared/GradientButton";
import { whatsappLink } from "@/lib/whatsapp";

interface ServicePageTemplateProps {
  serviceKey: "ai" | "web" | "automation";
  icon: LucideIcon;
  items: string[];
  whatsappKey: "serviceAI" | "serviceWeb" | "serviceAutomation";
}

export default function ServicePageTemplate({
  serviceKey,
  icon: Icon,
  items,
  whatsappKey,
}: ServicePageTemplateProps) {
  const t = useTranslations("services");
  const tw = useTranslations("whatsapp");
  const locale = useLocale();

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-20 h-20 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-8"
        >
          <Icon size={40} className="text-accent-primary" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary"
        >
          {t(`${serviceKey}.tagline`)}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-text-secondary text-lg md:text-xl max-w-3xl mx-auto"
        >
          {t(`${serviceKey}.heroSub`)}
        </motion.p>
      </section>

      {/* Sub-services */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-hover rounded-xl p-8 transition-all duration-300"
            >
              <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                {t(`${serviceKey}.items.${item}.title`)}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {t(`${serviceKey}.items.${item}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-12 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-8">
              {t(`${serviceKey}.cta`)}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <GradientButton
                href={whatsappLink(tw(whatsappKey))}
                external
                size="lg"
              >
                {t(`${serviceKey}.cta`)}
              </GradientButton>
              <GradientButton
                href={`/${locale}/orcamento`}
                variant="secondary"
                size="lg"
              >
                {t("learnMore")}
              </GradientButton>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
