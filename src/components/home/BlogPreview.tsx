"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import SectionTitle from "@/components/shared/SectionTitle";
import GradientButton from "@/components/shared/GradientButton";

export default function BlogPreview() {
  const t = useTranslations("blogPreview");
  const locale = useLocale() as "pt" | "es" | "en";
  const posts = getBlogPosts().slice(0, 3);

  return (
    <section className="py-section px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionTitle title={t("title")} subtitle={t("sub")} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              href={`/${locale}/blog/${post.slug}`}
              className="group block glass glass-hover rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-video bg-gradient-to-br from-accent-primary/20 to-accent-secondary/10" />

              <div className="p-6">
                <span className="text-xs px-2.5 py-1 rounded-full bg-accent-primary/20 text-accent-primary font-medium">
                  {post.tag}
                </span>

                <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary group-hover:text-accent-secondary transition-colors line-clamp-2">
                  {post.title[locale]}
                </h3>

                <p className="mt-2 text-text-secondary text-sm line-clamp-3">
                  {post.excerpt[locale]}
                </p>

                <div className="mt-4 flex items-center justify-between text-text-muted text-xs">
                  <span>
                    {new Date(post.date).toLocaleDateString(
                      locale === "pt" ? "pt-BR" : locale === "es" ? "es" : "en",
                      { month: "short", day: "numeric", year: "numeric" }
                    )}
                  </span>
                  <span>
                    {post.readTime} {t("minRead")}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <GradientButton href={`/${locale}/blog`} variant="secondary">
          {t("cta")}
        </GradientButton>
      </div>
    </section>
  );
}
