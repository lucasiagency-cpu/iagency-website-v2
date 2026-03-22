"use client";

import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Results from "@/components/home/Results";
import CasesPreview from "@/components/home/Cases";
import HowItWorks from "@/components/home/HowItWorks";
import QuoteCTA from "@/components/home/QuoteCTA";
import BlogPreview from "@/components/home/BlogPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Results />
      <CasesPreview />
      <HowItWorks />
      <QuoteCTA />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}
