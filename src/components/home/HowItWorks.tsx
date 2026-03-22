"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/shared/SectionTitle";

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  const steps = [0, 1, 2, 3].map((i) => ({
    number: t(`steps.${i}.number`),
    title: t(`steps.${i}.title`),
    description: t(`steps.${i}.description`),
  }));

  return (
    <section className="py-section px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionTitle title={t("title")} />

      <div className="relative">
        {/* Connection line (desktop) */}
        <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-20" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="text-center relative"
            >
              {/* Number circle */}
              <div className="mx-auto w-24 h-24 rounded-full glass flex items-center justify-center mb-6 relative z-10">
                <span className="font-heading text-2xl font-bold gradient-text">
                  {step.number}
                </span>
              </div>

              <h3 className="font-heading text-lg md:text-xl font-semibold text-text-primary mb-3">
                {step.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
