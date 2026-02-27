import { useWatch, useFormContext } from "react-hook-form";
import {
  PURPOSE_OPTIONS,
  DEFAULT_PURPOSE,
} from "@/app/components/steps/amount-step/PurposeSection/amountPurpose.options";

export function AmountSummary() {
  const { control } = useFormContext();
  const value = useWatch({ control, name: "amount.value" });
  const amountText =
    typeof value === "number" && value > 0 ? `${value} kr` : "-";
  const purpose = useWatch({ control, name: "amount.purpose" });
  const purposeLabel =
    PURPOSE_OPTIONS.find((option) => option.value === purpose)?.label ??
    PURPOSE_OPTIONS.find((option) => option.value === DEFAULT_PURPOSE)?.label ??
    "-";

  return (
    <div>
      <p>Belopp: {amountText}</p>
      <p> Ändamål: {purposeLabel}</p>
    </div>
  );
}
