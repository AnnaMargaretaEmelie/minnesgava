import styles from "./AmountStep.module.scss";
import type { AmountSectionProps } from "@/app/memorial-donation/sections/AmountSection/AmountSection.types";
import { PortableText } from "next-sanity";
import { StepPrimaryButton } from "@/app/components/StepPrimaryButton/StepPrimaryButton";
import { useAccordion } from "@/app/components/accordion/Accordion/Accordion";
import { useFormContext, useFormState, useWatch } from "react-hook-form";
import { AmountOptions } from "../AmountOptions/AmountOptions";
import { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types";
import { PurposeSection } from "../PurposeSection/PurposeSection";

export function AmountStep({ copy }: AmountSectionProps) {
  const accordion = useAccordion();
  const { setValue, register, control, trigger } =
    useFormContext<DonationFormValuesType>();
  const preset = useWatch({ control, name: "amount.preset" });
  const hasSelectedPreset =
    useWatch({ control, name: "amount.hasSelectedPreset" }) ?? false;
  const { errors } = useFormState({ control, name: ["amount.value"] });

  const customAmountHasError = Boolean(errors.amount?.value);
  const customAmountErrorMessage = errors.amount?.value?.message as
    | string
    | undefined;
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
    <section className="u-stepStack">
      <AmountOptions
        preset={preset}
        selectPreset={selectPreset}
        selectCustom={selectCustom}
        register={register}
        customAmountHasError={customAmountHasError}
        customAmountErrorMessage={customAmountErrorMessage}
      />

      <div className={styles.information}>
        {copy.infoText && <PortableText value={copy.infoText} />}
      </div>
      <PurposeSection register={register} />
      <div>
        <StepPrimaryButton
          type="button"
          label="Till kontaktuppgifter"
          onClick={handleNext}
        />
      </div>
    </section>
  );
}
