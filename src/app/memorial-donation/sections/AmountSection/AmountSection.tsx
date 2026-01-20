import styles from "./AmountSection.module.scss";
import type { AmountSectionProps } from "./AmountSection.types";
import { PortableText } from "next-sanity";
import { StepPrimaryButton } from "@/app/components/StepPrimaryButton/StepPrimaryButton";
import { AccordionDropdown } from "@/app/components/shared/AccordionDropdown/AccordionDropdown";

export function AmountSection({ copy }: AmountSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.amount}>
        <p className={styles.legend}>Välj belopp</p>
        <div className={styles.options}>
          <button type="button" className={styles.option}>
            1000 kr
          </button>
          <button type="button" className={styles.option}>
            500 kr
          </button>
          <button type="button" className={styles.option}>
            100 kr
          </button>
          <button type="button" className={styles.option}>
            Eget belopp
          </button>
        </div>
        {/* TODO: koppla visning till att "Eget belopp" är vald */}

        <div className={styles.customAmount}>
          <label htmlFor="customAmount" className={styles.customLabel}>
            Eget belopp i kronor
          </label>
          <div className={styles.customInputRow}>
            <input
              id="customAmount"
              type="number"
              className={styles.customInput}
              placeholder="T ex 150"
            />
          </div>
        </div>
      </div>

      <div className={styles.information}>
        {copy.infoText && <PortableText value={copy.infoText} />}
      </div>
      <div className={styles.purpose}>
        <h3 className={styles.purposeTitle}>Ändamål</h3>
        <p className={styles.purposeIntro}>
          Din gåva används till den bästa hjärnforskningen.
        </p>
        <div className={styles.purposeControl}>
          <AccordionDropdown label="Välj diagnos">
            <div className={styles.purposeContent}>
              <p>Den bästa hjärnforskningen med störst behov</p>
              <p>Alzheimers sjukdom</p>
              <p>Parkinsons sjukdom</p>
              <p>ADHD</p>
            </div>
          </AccordionDropdown>
        </div>
        <StepPrimaryButton
          label="Till kontaktuppgifter"
          onClick={() => {
            // TODO: Wire up goNext('donor-contact-step') in a separate branch
            console.log("Next from amount step (not wired yet)");
          }}
          disabled
        />
      </div>
    </section>
  );
}
