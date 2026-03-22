"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export default function BlogClient() {
  const t = useTranslations("blog");
  const locale = useLocale() as "pt" | "es" | "en";
  const posts = getBlogPosts();

  return (
    <div className="pt-24 pb-20">
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-16">
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
          className="mt-4 text-text-secondary text-lg"
        >
          {t("sub")}
        </motion.p>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
                className="group block glass glass-hover rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="aspect-video bg-gradient-to-br from-accent-primary/20 to-accent-secondary/10" />
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-accent-primary/20 text-accent-primary font-medium">
                      {post.tag}
                    </span>
                    <span className="text-text-muted text-xs">
                      {new Date(post.date).toLocaleDateString(
                        locale === "pt" ? "pt-BR" : locale === "es" ? "es" : "en",
                        { month: "long", day: "numeric", year: "numeric" }
                      )}
                    </span>
                    <span className="text-text-muted text-xs">
                      {post.readTime} {t("minRead")}
                    </span>
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl font-semibold text-text-primary group-hover:text-accent-secondary transition-colors mb-3">
                    {post.title[locale]}
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                    {post.excerpt[locale]}
                  </p>
                  <span className="inline-block mt-4 text-accent-secondary text-sm font-medium group-hover:underline">
                    {t("readMore")} →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
