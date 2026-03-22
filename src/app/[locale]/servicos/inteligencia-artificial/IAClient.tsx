"use client";

import { Brain } from "lucide-react";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export default function IAClient() {
  return (
    <ServicePageTemplate
      serviceKey="ai"
      icon={Brain}
      items={["chatbots", "dataAnalysis", "agents", "integration"]}
      whatsappKey="serviceAI"
    />
  );
}
