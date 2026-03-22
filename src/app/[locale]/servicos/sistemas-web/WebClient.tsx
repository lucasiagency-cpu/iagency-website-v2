"use client";

import { Globe } from "lucide-react";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export default function WebClient() {
  return (
    <ServicePageTemplate
      serviceKey="web"
      icon={Globe}
      items={["custom", "dashboards", "ecommerce", "apis"]}
      whatsappKey="serviceWeb"
    />
  );
}
