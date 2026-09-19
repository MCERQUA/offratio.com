import type { Metadata } from "next";
import LegalDoc from "@/components/LegalDoc";
import { termsOfService } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service — OffRatio",
  description: "The terms for using offratio.com — entertainment content, the decorative entrance gate, and Tip Line submissions.",
};

export default function TermsPage() {
  return (
    <LegalDoc
      kicker="LEGAL"
      title={termsOfService.title}
      effectiveDate={termsOfService.effectiveDate}
      sections={termsOfService.sections}
    />
  );
}
