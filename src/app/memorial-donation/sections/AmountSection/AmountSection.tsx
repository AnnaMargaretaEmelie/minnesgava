import styles from "./AmountSection.module.scss";
import type { AmountSectionProps } from "./AmountSection.types";
import { PortableText } from "next-sanity";
import { StepPrimaryButton } from "@/app/components/StepPrimaryButton/StepPrimaryButton";
import { AccordionDropdown } from "@/app/components/shared/AccordionDropdown/AccordionDropdown";
import { useAccordion } from "@/app/components/accordion/Accordion/Accordion";
import { useFormContext, useFormState } from "react-hook-form";
import { DonationFormValuesType } from "@/app/components/shared/types/memorialDonationForm.types";

export function AmountSection({ copy }: AmountSectionProps) {
  const accordion = useAccordion();
  const { setValue, watch, trigger, control } =
    useFormContext<DonationFormValuesType>();
  const { errors } = useFormState({ control });
  const preset = watch("amount.preset");

  function selectPreset(
    amountNumber: number,
    presetString: "1000" | "500" | "100",
  ) {
    setValue("amount.preset", presetString, { shouldDirty: true });
    setValue("amount.value", amountNumber, {
      shouldDirty: true,
      shouldValidate: true,
    });
  }

  function selectCustom() {
    setValue("amount.preset", "custom", { shouldDirty: true });
    setValue("amount.value", null, { shouldDirty: true, shouldValidate: true });
  }

  return (
    <section className={styles.section}>
      <div className={styles.amount}>
        <p className={styles.legend}>Välj belopp</p>
        <div className={styles.options}>
          <button
            type="button"
            onClick={() => selectPreset(1000, "1000")}
            className={styles.option}
          >
            1000 kr
          </button>
          <button
            type="button"
            onClick={() => selectPreset(500, "500")}
            className={styles.option}
          >
            500 kr
          </button>
          <button
            type="button"
            onClick={() => selectPreset(100, "100")}
            className={styles.option}
          >
            100 kr
          </button>
          <button
            type="button"
            onClick={selectCustom}
            className={styles.option}
          >
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
          <AccordionDropdown
            label="Välj diagnos"
            className={styles.dropdownRight}
          >
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
          onClick={() => accordion?.goNext("amount-step")}
        />
      </div>
    </section>
  );
}
