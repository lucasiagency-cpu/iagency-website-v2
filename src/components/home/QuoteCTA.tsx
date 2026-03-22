"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import GradientButton from "@/components/shared/GradientButton";
import { whatsappLink } from "@/lib/whatsapp";

export default function QuoteCTA() {
  const t = useTranslations("quoteCta");
  const tw = useTranslations("whatsapp");
  const locale = useLocale();

  return (
    <section className="py-section px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center glass rounded-2xl p-12 md:p-16 relative overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary">
            {t("title")}
          </h2>
          <p className="mt-4 text-text-secondary text-lg">{t("sub")}</p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <GradientButton href={`/${locale}/orcamento`} size="lg">
              {t("ctaPrimary")}
            </GradientButton>
            <GradientButton
              href={whatsappLink(tw("general"))}
              external
              variant="secondary"
              size="lg"
            >
              {t("ctaSecondary")}
            </GradientButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
