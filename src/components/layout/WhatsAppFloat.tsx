"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { whatsappLink } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  const t = useTranslations("whatsapp");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          href={whatsappLink(t("general"))}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg shadow-whatsapp/30 hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <MessageCircle size={28} className="text-white" fill="white" />
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-whatsapp/30 animate-ping" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
