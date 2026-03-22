"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Send,
  Mail,
  CheckCircle,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { whatsappLink, quoteWhatsappMessage } from "@/lib/whatsapp";

const SERVICE_OPTIONS = [
  { key: "website", emoji: "🌐" },
  { key: "ai", emoji: "🧠" },
  { key: "automation", emoji: "⚡" },
  { key: "mobile", emoji: "📱" },
  { key: "consulting", emoji: "💡" },
  { key: "unsure", emoji: "🤔" },
] as const;

const URGENCY_OPTIONS = [
  { key: "relaxed", emoji: "🟢" },
  { key: "moderate", emoji: "🟡" },
  { key: "urgent", emoji: "🟠" },
  { key: "yesterday", emoji: "🔴" },
] as const;

const BUDGET_OPTIONS = ["low", "medium", "high", "premium", "unsure"] as const;
const BUDGET_EMOJIS = ["💰", "💰💰", "💰💰💰", "💰💰💰💰", "🤷"];

const TOTAL_STEPS = 6;

export default function OrcamentoClient() {
  const t = useTranslations("quote");

  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [urgency, setUrgency] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");

  const toggleService = (key: string) => {
    setSelectedServices((prev) =>
      prev.includes(key) ? prev.filter((s) => s !== key) : [...prev, key]
    );
  };

  const canNext = () => {
    switch (step) {
      case 1: return selectedServices.length > 0;
      case 2: return urgency !== "";
      case 3: return budget !== "";
      case 4: return true;
      case 5: return name.trim() !== "" && email.trim() !== "";
      default: return true;
    }
  };

  const getServiceLabels = () =>
    selectedServices.map((key) => t(`step1.options.${key}.label`));

  const getUrgencyLabel = () =>
    urgency ? `${t(`step2.options.${urgency}.label`)} (${t(`step2.options.${urgency}.desc`)})` : "";

  const getBudgetLabel = () => (budget ? t(`step3.options.${budget}`) : "");

  const buildWhatsAppUrl = () => {
    const data = {
      services: getServiceLabels(),
      urgency: getUrgencyLabel(),
      budget: getBudgetLabel(),
      details: details || undefined,
      name,
      email,
      company: company || undefined,
    };
    return whatsappLink(quoteWhatsappMessage(data));
  };

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  const goNext = () => {
    if (canNext() && step < TOTAL_STEPS) {
      setDirection(1);
      setStep((s) => s + 1);
    }
  };

  const goBack = () => {
    if (step > 1) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-primary">
            {t("title")}
          </h1>
          <p className="mt-2 text-text-secondary">{t("sub")}</p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-2">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  i + 1 <= step
                    ? "bg-accent-primary text-white"
                    : "bg-bg-secondary text-text-muted"
                }`}
              >
                {i + 1 < step ? <CheckCircle size={16} /> : i + 1}
              </div>
            ))}
          </div>
          <div className="h-1 bg-bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-accent"
              animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Steps */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait" custom={direction}>
            {step === 1 && (
              <motion.div key="step1" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="font-heading text-2xl font-bold text-text-primary mb-2">{t("step1.title")}</h2>
                <p className="text-text-secondary mb-6">{t("step1.instruction")}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {SERVICE_OPTIONS.map(({ key, emoji }) => {
                    const selected = selectedServices.includes(key);
                    return (
                      <button
                        key={key}
                        onClick={() => toggleService(key)}
                        className={`relative p-6 rounded-xl text-left transition-all duration-300 border ${
                          selected
                            ? "border-accent-primary bg-accent-primary/10 shadow-lg shadow-accent-primary/10"
                            : "border-white/5 bg-bg-secondary/50 hover:border-white/10"
                        }`}
                      >
                        {selected && <div className="absolute top-2 right-2"><CheckCircle size={18} className="text-accent-primary" /></div>}
                        <span className="text-2xl mb-2 block">{emoji}</span>
                        <h3 className="font-heading text-sm font-semibold text-text-primary">{t(`step1.options.${key}.label`)}</h3>
                        <p className="text-text-muted text-xs mt-1">{t(`step1.options.${key}.desc`)}</p>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="font-heading text-2xl font-bold text-text-primary mb-2">{t("step2.title")}</h2>
                <p className="text-text-secondary mb-6">{t("step2.instruction")}</p>
                <div className="grid grid-cols-2 gap-4">
                  {URGENCY_OPTIONS.map(({ key, emoji }) => {
                    const selected = urgency === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setUrgency(key)}
                        className={`p-6 rounded-xl text-left transition-all duration-300 border ${
                          selected
                            ? "border-accent-primary bg-accent-primary/10 shadow-lg shadow-accent-primary/10"
                            : "border-white/5 bg-bg-secondary/50 hover:border-white/10"
                        }`}
                      >
                        <span className="text-2xl mb-2 block">{emoji}</span>
                        <h3 className="font-heading text-sm font-semibold text-text-primary">{t(`step2.options.${key}.label`)}</h3>
                        <p className="text-text-muted text-xs mt-1">{t(`step2.options.${key}.desc`)}</p>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="font-heading text-2xl font-bold text-text-primary mb-2">{t("step3.title")}</h2>
                <p className="text-text-secondary mb-6">{t("step3.instruction")}</p>
                <div className="flex flex-col gap-3">
                  {BUDGET_OPTIONS.map((key, i) => {
                    const selected = budget === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setBudget(key)}
                        className={`p-5 rounded-xl text-left transition-all duration-300 border flex items-center gap-4 ${
                          selected
                            ? "border-accent-primary bg-accent-primary/10 shadow-lg shadow-accent-primary/10"
                            : "border-white/5 bg-bg-secondary/50 hover:border-white/10"
                        }`}
                      >
                        <span className="text-xl">{BUDGET_EMOJIS[i]}</span>
                        <span className="font-heading text-sm font-semibold text-text-primary">{t(`step3.options.${key}`)}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="font-heading text-2xl font-bold text-text-primary mb-2">{t("step4.title")}</h2>
                <p className="text-text-secondary mb-6">{t("step4.instruction")}</p>
                <div className="relative">
                  <textarea
                    value={details}
                    onChange={(e) => setDetails(e.target.value.slice(0, 500))}
                    placeholder={t("step4.placeholder")}
                    rows={6}
                    className="w-full bg-bg-secondary/50 border border-white/10 rounded-xl p-4 text-text-primary placeholder-text-muted focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary/50 transition-all resize-none"
                  />
                  <span className="absolute bottom-3 right-3 text-text-muted text-xs">{details.length}/500</span>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div key="step5" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h2 className="font-heading text-2xl font-bold text-text-primary mb-2">{t("step5.title")}</h2>
                <p className="text-text-secondary mb-6">{t("step5.instruction")}</p>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-text-secondary text-sm mb-1">{t("step5.name")} *</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-bg-secondary/50 border border-white/10 rounded-xl p-4 text-text-primary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary/50 transition-all" autoFocus />
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-1">{t("step5.email")} *</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-bg-secondary/50 border border-white/10 rounded-xl p-4 text-text-primary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-1">{t("step5.company")}</label>
                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full bg-bg-secondary/50 border border-white/10 rounded-xl p-4 text-text-primary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-1">{t("step5.phone")}</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-bg-secondary/50 border border-white/10 rounded-xl p-4 text-text-primary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary/50 transition-all" />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 6 && (
              <motion.div key="step6" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <div className="text-center mb-8">
                  <CheckCircle size={48} className="text-success mx-auto mb-4" />
                  <h2 className="font-heading text-2xl font-bold text-text-primary">{t("step6.title")}</h2>
                </div>

                <div className="glass rounded-xl p-6 mb-8 space-y-3">
                  <SummaryRow label={t("step6.servicesLabel")} value={getServiceLabels().join(", ")} />
                  <div className="border-t border-white/5" />
                  <SummaryRow label={t("step6.urgencyLabel")} value={getUrgencyLabel()} />
                  <div className="border-t border-white/5" />
                  <SummaryRow label={t("step6.budgetLabel")} value={getBudgetLabel()} />
                  {details && (
                    <>
                      <div className="border-t border-white/5" />
                      <SummaryRow label={t("step6.detailsLabel")} value={details} />
                    </>
                  )}
                  <div className="border-t border-white/5" />
                  <SummaryRow label={t("step6.nameLabel")} value={name} />
                  {company && (
                    <>
                      <div className="border-t border-white/5" />
                      <SummaryRow label={t("step6.companyLabel")} value={company} />
                    </>
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-whatsapp text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-whatsapp/20"
                  >
                    <Send size={20} />
                    {t("send")}
                  </a>
                  <button className="inline-flex items-center justify-center gap-2 border border-white/10 text-text-secondary px-8 py-4 rounded-xl font-medium hover:bg-white/5 transition-colors">
                    <Mail size={20} />
                    {t("sendEmail")}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        {step < 6 && (
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={goBack}
              disabled={step === 1}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                step === 1 ? "text-text-muted cursor-not-allowed" : "text-text-secondary hover:text-text-primary hover:bg-white/5"
              }`}
            >
              <ArrowLeft size={18} />
              {t("back")}
            </button>
            <div className="flex gap-3">
              {step === 4 && (
                <button onClick={goNext} className="px-6 py-3 rounded-xl font-medium text-text-muted hover:text-text-secondary transition-colors">
                  {t("skip")}
                </button>
              )}
              <button
                onClick={goNext}
                disabled={!canNext()}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  canNext()
                    ? "bg-gradient-accent text-white hover:scale-105 shadow-lg shadow-accent-primary/20"
                    : "bg-bg-secondary text-text-muted cursor-not-allowed"
                }`}
              >
                {t("next")}
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={goBack}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all"
            >
              <ArrowLeft size={18} />
              {t("back")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-text-muted text-sm">{label}</span>
      <span className="text-text-primary text-sm font-medium text-right max-w-[60%]">{value}</span>
    </div>
  );
}
