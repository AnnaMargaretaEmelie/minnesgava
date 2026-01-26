"use client";

import type { MemorialDonationLayoutProps } from "./MemorialDonationLayout.types";
import { MemorialPageSection } from "../sections/MemorialPageSection/MemorialPageSection";
import styles from "./MemorialDonationLayout.module.scss";
import { AccordionItem } from "@/app/components/accordion/AccordionItem/AccordionItem";
import { AccordionRoot } from "@/app/components/accordion/Accordion/Accordion";
import { useState } from "react";
import { AmountSection } from "../sections/AmountSection/AmountSection";
import { DonorContactSection } from "../sections/DonorContactSection/DonorContactSection";
import { PaymentSection } from "../sections/PaymentSection/PaymentSection";
import { FormProvider, useForm } from "react-hook-form";
import { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types";

const DEFAULT_DONATION_AMOUNT = { preset: "1000", value: 1000 } as const;

export function MemorialDonationLayout({
  memorialPageCopy,
  amountCopy,
  donorCopy,
}: MemorialDonationLayoutProps) {
  const [memorialSummary, setMemorialSummary] = useState<string | null>(null);
  const methods = useForm<DonationFormValuesType>({
    mode: "onTouched",
    defaultValues: {
      amount: { ...DEFAULT_DONATION_AMOUNT, hasSelectedPreset: false },
    },
  });
  return (
    <div className={styles.layout}>
      <section className={styles.hero}>HeroSection</section>
      <section className={styles.steps}>
        <FormProvider {...methods}>
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
              <DonorContactSection copy={donorCopy} />
            </AccordionItem>

            <AccordionItem
              value="payment-step"
              title="4. Betalsätt"
              className={styles.step}
            >
              <PaymentSection />
            </AccordionItem>
          </AccordionRoot>
        </FormProvider>
      </section>
    </div>
  );
}
