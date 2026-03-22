"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import GradientButton from "@/components/shared/GradientButton";
import { whatsappLink } from "@/lib/whatsapp";

export default function FinalCTA() {
  const t = useTranslations("finalCta");
  const tw = useTranslations("whatsapp");

  return (
    <section className="py-section px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
          {t("headline")}
        </h2>
        <p className="mt-6 text-text-secondary text-lg md:text-xl">
          {t("sub")}
        </p>
        <div className="mt-10">
          <GradientButton
            href={whatsappLink(tw("hero"))}
            external
            size="lg"
          >
            {t("cta")}
          </GradientButton>
        </div>
      </motion.div>
    </section>
  );
}
