import type { Metadata } from "next";
import LegalDoc from "@/components/LegalDoc";
import { privacyPolicy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy — OffRatio",
  description: "What OffRatio collects through the Tip Line and site hosting, and what we do with it.",
};

export default function PrivacyPage() {
  return (
    <LegalDoc
      kicker="LEGAL"
      title={privacyPolicy.title}
      effectiveDate={privacyPolicy.effectiveDate}
      sections={privacyPolicy.sections}
    />
  );
}
