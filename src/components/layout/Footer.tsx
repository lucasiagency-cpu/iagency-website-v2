"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { whatsappLink } from "@/lib/whatsapp";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const tw = useTranslations("whatsapp");
  const locale = useLocale();

  const links = [
    { label: nav("services"), href: `/${locale}/servicos` },
    { label: nav("cases"), href: `/${locale}/cases` },
    { label: nav("blog"), href: `/${locale}/blog` },
    { label: nav("quote"), href: `/${locale}/orcamento` },
    { label: nav("about"), href: `/${locale}/sobre` },
  ];

  return (
    <footer className="border-t border-white/5 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href={`/${locale}`}
              className="font-heading font-bold text-2xl gradient-text"
            >
              IAgency
            </Link>
            <p className="mt-4 text-text-secondary max-w-md">
              {t("tagline")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-text-primary mb-4 uppercase tracking-wider">
              {t("links")}
            </h4>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-secondary hover:text-text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-text-primary mb-4 uppercase tracking-wider">
              {t("social")}
            </h4>
            <nav className="flex flex-col gap-3">
              <a
                href={whatsappLink(tw("general"))}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-whatsapp transition-colors text-sm"
              >
                WhatsApp
              </a>
              <a
                href="https://instagram.com/iagencydigital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/company/iagencydigital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors text-sm"
              >
                LinkedIn
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-text-muted text-sm">
          © {new Date().getFullYear()} IAgency Digital. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
