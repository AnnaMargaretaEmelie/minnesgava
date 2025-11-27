"use client";

import type { MemorialDonationLayoutProps } from "./MemorialDonationLayout.types";
import { MemorialPageSection } from "../sections/MemorialPageSection/MemorialPageSection";
import styles from "./MemorialDonationLayout.module.scss";
import { AccordionItem } from "@/app/components/accordion/AccordionItem/AccordionItem";
import { AccordionRoot } from "@/app/components/accordion/Accordion/Accordion";
import { useState } from "react";
import { AmountSection } from "../sections/AmountSection/AmountSection";

export function MemorialDonationLayout({
  memorialPageCopy,
  amountCopy,
}: MemorialDonationLayoutProps) {
  const [memorialSummary, setMemorialSummary] = useState<string | null>(null);
  return (
    <div className={styles.layout}>
      <section className={styles.hero}>HeroSection</section>
      <section className={styles.steps}>
        <AccordionRoot>
          <AccordionItem
            value="memorial-card-step"
            title="1. Minnesblad"
            summary={memorialSummary ?? undefined}
            className={styles.step}
          >
            <MemorialPageSection
              copy={memorialPageCopy}
              onSummaryChange={setMemorialSummary}
            />
          </AccordionItem>
          <AccordionItem
            value="amount-step"
            title="2. Gåvobelopp"
            className={styles.step}
          >
            <AmountSection copy={amountCopy} />
          </AccordionItem>
          <AccordionItem
            value="donor-contact-step"
            title="3. Kontaktuppgifter"
            className={styles.step}
          >
            <p>Kommande innehåll</p>
          </AccordionItem>

          <AccordionItem
            value="payment-step"
            title="4. Betalsätt"
            className={styles.step}
          >
            <p>Kommande innehåll</p>
          </AccordionItem>
        </AccordionRoot>
      </section>
    </div>
  );
}
