import styles from "./AmountSection.module.scss";
import type { AmountSectionProps } from "./AmountSection.types";
import { PortableText } from "next-sanity";
import { StepPrimaryButton } from "@/app/components/StepPrimaryButton/StepPrimaryButton";
import { AccordionDropdown } from "@/app/components/shared/AccordionDropdown/AccordionDropdown";
import { useAccordion } from "@/app/components/accordion/Accordion/Accordion";
import { useFormContext, useFormState, useWatch } from "react-hook-form";
import { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types";
import { PURPOSE_OPTIONS, DEFAULT_PURPOSE } from "./amountPurpose.options";

export function AmountSection({ copy }: AmountSectionProps) {
  const accordion = useAccordion();
  const { setValue, register, control, trigger } =
    useFormContext<DonationFormValuesType>();
  const preset = useWatch({ control, name: "amount.preset" });
  const hasSelectedPreset =
    useWatch({ control, name: "amount.hasSelectedPreset" }) ?? false;
  const { errors } = useFormState({ control });

  function selectPreset(
    amountNumber: number,
    presetString: "1000" | "500" | "100",
  ) {
    setValue("amount.preset", presetString, { shouldDirty: true });
    setValue("amount.value", amountNumber, {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue("amount.hasSelectedPreset", true, {
      shouldDirty: true,
      shouldValidate: true,
    });
  }

  function selectCustom() {
    setValue("amount.preset", "custom", { shouldDirty: true });
    if (hasSelectedPreset === false) {
      setValue("amount.value", null, {
        shouldDirty: true,
        shouldValidate: true,
      });
    }
  }
  async function handleNext() {
    if (preset !== "custom") {
      accordion.goNext("amount-step");
      return;
    }
    const isValid = await trigger("amount.value", { shouldFocus: true });
    if (!isValid) return;

    accordion.goNext("amount-step");
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
        {preset === "custom" && (
          <div className={styles.customAmount}>
            <label htmlFor="customAmount" className={styles.customLabel}>
              Eget belopp i kronor
            </label>
            <div className={styles.customInputRow}>
              <input
                id="customAmount"
                inputMode="numeric"
                min={100}
                step={1}
                type="number"
                className={styles.customInput}
                placeholder="T ex 150"
                {...register("amount.value", {
                  valueAsNumber: true,
                  validate: (value) => {
                    if (preset !== "custom") return true;
                    const msg = "Endast siffror och minsta belopp 100 kr";
                    if (value == null) return msg;
                    if (!Number.isFinite(value)) return msg;
                    if (value < 100) return msg;
                    return true;
                  },
                })}
              />
            </div>
            {errors.amount?.value && (
              <p className={styles.error}>
                {errors.amount.value.message as string}
              </p>
            )}
          </div>
        )}
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
            <fieldset className={styles.purposeContent}>
              <legend className={styles.srOnly}>Välj diagnos</legend>

              {PURPOSE_OPTIONS.map((option) => (
                <label
                  key={option.value}
                  className={`${styles.purposeOption} ${
                    option.value === DEFAULT_PURPOSE
                      ? styles.purposeOptionDefault
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    value={option.value}
                    {...register("amount.purpose")}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </fieldset>
          </AccordionDropdown>
        </div>
        <StepPrimaryButton label="Till kontaktuppgifter" onClick={handleNext} />
      </div>
    </section>
  );
}
