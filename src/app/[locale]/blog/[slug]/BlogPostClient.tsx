"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog";
import { whatsappLink } from "@/lib/whatsapp";
import GradientButton from "@/components/shared/GradientButton";

function renderInlineMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-text-primary font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: JSX.Element[] = [];
  let idx = 0;

  for (const line of lines) {
    idx++;
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={idx} className="font-heading text-xl font-semibold text-text-primary mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2 key={idx} className="font-heading text-2xl font-bold text-text-primary mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={idx} className="text-text-secondary ml-4 mb-1">
          {renderInlineMarkdown(line.slice(2))}
        </li>
      );
    } else if (line.trim() === "") {
      // skip
    } else {
      elements.push(
        <p key={idx} className="text-text-secondary leading-relaxed mb-4">
          {renderInlineMarkdown(line)}
        </p>
      );
    }
  }
  return elements;
}

export default function BlogPostClient() {
  const t = useTranslations("blog");
  const tw = useTranslations("whatsapp");
  const locale = useLocale() as "pt" | "es" | "en";
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="pt-24 pb-20 text-center">
        <h1 className="font-heading text-3xl font-bold text-text-primary">Post not found</h1>
        <Link href={`/${locale}/blog`} className="mt-4 inline-flex items-center gap-2 text-accent-secondary">
          <ArrowLeft size={18} /> {t("backToBlog")}
        </Link>
      </div>
    );
  }

  const relatedPosts = getBlogPosts().filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="pt-24 pb-20">
      <article className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
          <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-text-muted hover:text-text-secondary transition-colors text-sm">
            <ArrowLeft size={16} /> {t("backToBlog")}
          </Link>
        </motion.div>

        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-2.5 py-1 rounded-full bg-accent-primary/20 text-accent-primary font-medium">{post.tag}</span>
            <span className="text-text-muted text-xs">
              {new Date(post.date).toLocaleDateString(locale === "pt" ? "pt-BR" : locale === "es" ? "es" : "en", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="text-text-muted text-xs">{post.readTime} {t("minRead")}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">{post.title[locale]}</h1>
          <p className="mt-4 text-text-secondary text-lg">{post.excerpt[locale]}</p>
        </motion.header>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="aspect-video bg-gradient-to-br from-accent-primary/20 to-accent-secondary/10 rounded-xl mb-10" />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="prose max-w-none">
          {renderContent(post.content[locale])}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 glass rounded-xl p-8 text-center">
          <h3 className="font-heading text-xl font-bold text-text-primary mb-4">{t("needHelp")}</h3>
          <GradientButton href={whatsappLink(tw("blog", { topic: post.title[locale] }))} external variant="whatsapp">
            WhatsApp
          </GradientButton>
        </motion.div>

        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="font-heading text-xl font-bold text-text-primary mb-6">{t("relatedPosts")}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/${locale}/blog/${rp.slug}`} className="group glass glass-hover rounded-lg p-5 transition-all duration-300">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent-primary/20 text-accent-primary">{rp.tag}</span>
                  <h4 className="mt-3 font-heading text-sm font-semibold text-text-primary group-hover:text-accent-secondary transition-colors line-clamp-2">{rp.title[locale]}</h4>
                  <p className="mt-1 text-text-muted text-xs line-clamp-2">{rp.excerpt[locale]}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
