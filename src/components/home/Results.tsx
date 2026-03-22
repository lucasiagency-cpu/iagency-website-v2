"use client";

import { useTranslations } from "next-intl";
import SectionTitle from "@/components/shared/SectionTitle";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

export default function Results() {
  const t = useTranslations("results");

  const items = [
    { value: 40, suffix: "%", label: t("items.0.label") },
    { value: 3, suffix: "x", label: t("items.1.label") },
    { value: 200, suffix: "+", label: t("items.2.label") },
  ];

  return (
    <section className="py-section px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionTitle title={t("title")} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {items.map((item, i) => (
          <AnimatedCounter
            key={i}
            value={item.value}
            suffix={item.suffix}
            label={item.label}
          />
        ))}
      </div>
    </section>
  );
}
