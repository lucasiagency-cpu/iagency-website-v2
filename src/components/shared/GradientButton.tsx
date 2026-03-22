"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface GradientButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "whatsapp";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  icon?: boolean;
  className?: string;
}

export default function GradientButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  external = false,
  icon = true,
  className = "",
}: GradientButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary: "bg-gradient-accent text-white shadow-lg shadow-accent-primary/20",
    secondary:
      "bg-transparent border border-accent-primary/20 text-text-primary hover:bg-accent-primary/10",
    whatsapp: "bg-whatsapp text-white shadow-lg shadow-whatsapp/20",
  };

  const baseClasses = `inline-flex items-center gap-2 rounded-md font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight size={size === "sm" ? 16 : 18} />}
    </>
  );

  if (href && external) {
    return (
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {content}
      </motion.a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={baseClasses}
    >
      {content}
    </motion.button>
  );
}
