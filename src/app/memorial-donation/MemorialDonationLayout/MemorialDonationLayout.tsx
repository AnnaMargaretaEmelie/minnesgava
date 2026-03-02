"use client";

import type { MemorialDonationLayoutProps } from "./MemorialDonationLayout.types";
import { MemorialPageSection } from "../sections/MemorialPageSection/MemorialPageSection";
import styles from "./MemorialDonationLayout.module.scss";
import { AccordionItem } from "@/app/components/accordion/AccordionItem/AccordionItem";
import { AccordionRoot } from "@/app/components/accordion/Accordion/Accordion";
import { HeroSection } from "../sections/HeroSection/HeroSection";
import { AmountSection } from "../sections/AmountSection/AmountSection";
import { DonorContactSection } from "../sections/DonorContactSection/DonorContactSection";
import { PaymentSection } from "../sections/PaymentSection/PaymentSection";
import { FormProvider, useForm } from "react-hook-form";
import { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types";
import { DEFAULT_PURPOSE } from "../../components/steps/amount-step/PurposeSection/amountPurpose.options";
import { MEMORIAL_PAGE_IMAGES } from "@/data/memorialPageImages";
import { MemorialPageSummary } from "@/app/components/steps/memorial-page-step/MemorialPageSummary/MemorialPageSummary";
import { AmountSummary } from "@/app/components/steps/amount-step/AmountSummary/AmountSummary";
import { DonorContactSummary } from "@/app/components/steps/donor-contact-step/DonorContactSummary/DonorContactSummary";
import { LivePreviewPanel } from "@/app/components/steps/memorial-page-step/LivePreviewPanel/LivePreviewPanel";

const DEFAULT_DONATION_AMOUNT = { preset: "1000", value: 1000 } as const;

export function MemorialDonationLayout({
  memorialPageCopy,
  amountCopy,
  donorCopy,
  heroCopy,
}: MemorialDonationLayoutProps) {
  const methods = useForm<DonationFormValuesType>({
    mode: "onTouched",
    defaultValues: {
      memorialPage: {
        recipientId: null,
        imageId: MEMORIAL_PAGE_IMAGES[0].id,
        greeting: "",
      },
      amount: {
        ...DEFAULT_DONATION_AMOUNT,
        hasSelectedPreset: false,
        purpose: DEFAULT_PURPOSE,
      },
      payment: {
        method: null,
      },
    },
  });
  return (
    <div className={styles.layout}>
      <section className={styles.hero}>
        {heroCopy ? <HeroSection copy={heroCopy} /> : null}
      </section>
      <div className={styles.contentGrid}>
        <section>
          <FormProvider {...methods}>
            <AccordionRoot>
              <AccordionItem
                value="memorial-card-step"
                title="1. Minnesblad"
                titleText="Minnesblad"
                summary={<MemorialPageSummary />}
              >
                <MemorialPageSection copy={memorialPageCopy} />
              </AccordionItem>
              <AccordionItem
                value="amount-step"
                title="2. Gåvobelopp"
                titleText="Gåvobelopp"
                summary={<AmountSummary />}
              >
                <AmountSection copy={amountCopy} />
              </AccordionItem>
              <AccordionItem
                value="donor-contact-step"
                title="3. Kontaktuppgifter"
                titleText="Kontaktuppgifter"
                summary={<DonorContactSummary />}
              >
                <DonorContactSection copy={donorCopy} />
              </AccordionItem>

              <AccordionItem
                value="payment-step"
                title="4. Betalsätt"
                titleText="Betalsätt"
                className={styles.step}
              >
                <PaymentSection />
              </AccordionItem>
            </AccordionRoot>
          </FormProvider>
        </section>
        <LivePreviewPanel />
      </div>
    </div>
  );
}
