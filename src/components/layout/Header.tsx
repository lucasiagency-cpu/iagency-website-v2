"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { whatsappLink } from "@/lib/whatsapp";

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const tw = useTranslations("whatsapp");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("services"), href: `/${locale}/servicos` },
    { label: t("cases"), href: `/${locale}/cases` },
    { label: t("blog"), href: `/${locale}/blog` },
    { label: t("quote"), href: `/${locale}/orcamento` },
    { label: t("about"), href: `/${locale}/sobre` },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-primary/90 backdrop-blur-lg border-b border-white/5 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className="font-heading font-bold text-xl md:text-2xl gradient-text"
            >
              IAgency
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher locale={locale} />
              <a
                href={whatsappLink(tw("hero"))}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-accent text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:scale-105 transition-transform"
              >
                {t("contact")}
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-text-primary p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-primary/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-2xl font-heading font-semibold text-text-primary hover:text-accent-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <LanguageSwitcher locale={locale} />
            </motion.div>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              href={whatsappLink(tw("hero"))}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-accent text-white px-8 py-3 rounded-md text-lg font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              {t("contact")}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
