import type { MemorialDonationLayoutProps } from "./MemorialDonationLayout.types";
import { MemorialPageSection } from "../sections/MemorialPageSection/MemorialPageSection";
import styles from "./MemorialDonationLayout.module.scss";
import { AccordionItem } from "@/app/components/accordion/accordionItem";
import { AccordionRoot } from "@/app/components/accordion/accordion";

export function MemorialDonationLayout({ copy }: MemorialDonationLayoutProps) {
  return (
    <div className={styles.layout}>
      <section className={styles.hero}>HeroSection</section>
      <section className={styles.steps}>
        <AccordionRoot>
          <AccordionItem
            value="memorial-card-step"
            title="1. Minnesblad"
            className={styles.step}
          >
            <MemorialPageSection copy={copy} />
          </AccordionItem>
          <AccordionItem
            value="amount-step"
            title="2. Gåvobelopp"
            className={styles.step}
          >
            <p>Kommande innehåll</p>
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
