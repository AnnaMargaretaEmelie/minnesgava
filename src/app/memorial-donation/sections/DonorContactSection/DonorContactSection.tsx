import { DonorContactSectionProps } from "./DonorContactSection.types";
import { DonorContactStep } from "@/app/components/steps/donor-contact-step/DonorContactStep/DonorContactStep";

export function DonorContactSection({ copy }: DonorContactSectionProps) {
  return (
    <section className="u-stepStack">
      <DonorContactStep copy={copy} />
    </section>
  );
}
