"use client";

import { Zap } from "lucide-react";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export default function AutomacoesClient() {
  return (
    <ServicePageTemplate
      serviceKey="automation"
      icon={Zap}
      items={["flows", "toolIntegration", "reports", "noSpreadsheets"]}
      whatsappKey="serviceAutomation"
    />
  );
}
