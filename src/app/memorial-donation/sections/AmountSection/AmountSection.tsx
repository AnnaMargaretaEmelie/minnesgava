import type { AmountSectionProps } from "./AmountSection.types";
import { AmountStep } from "@/app/components/steps/amount-step/AmountStep/AmountStep";

export function AmountSection({ copy }: AmountSectionProps) {
  return <AmountStep copy={copy} />;
}
