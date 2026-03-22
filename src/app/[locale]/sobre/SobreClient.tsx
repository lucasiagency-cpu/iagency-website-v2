"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import GradientButton from "@/components/shared/GradientButton";
import { whatsappLink } from "@/lib/whatsapp";

export default function SobreClient() {
  const t = useTranslations("about");
  const tw = useTranslations("whatsapp");

  const paragraphs: string[] = [];
  for (let i = 0; i < 4; i++) {
    try {
      paragraphs.push(t(`content.${i}`));
    } catch {
      break;
    }
  }

  return (
    <div className="pt-24 pb-20">
      <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-10"
        >
          {t("title")}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className={`text-lg leading-relaxed ${
                p.length < 20
                  ? "text-text-primary font-semibold text-2xl"
                  : "text-text-secondary"
              }`}
            >
              {p}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <GradientButton
            href={whatsappLink(tw("general"))}
            external
            size="lg"
          >
            {t("cta")}
          </GradientButton>
        </motion.div>
      </section>
    </div>
  );
}
