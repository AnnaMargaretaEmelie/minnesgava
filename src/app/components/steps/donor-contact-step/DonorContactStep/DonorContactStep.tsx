import { DonorContactSectionProps } from "../../../../memorial-donation/sections/DonorContactSection/DonorContactSection.types";
import { useAccordion } from "@/app/components/accordion/Accordion/Accordion";
import { useFormContext, useFormState } from "react-hook-form";
import { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types";
import { DonorContactIntro } from "../DonorContactIntro/DonorContactIntro";
import { DonorContactForm } from "../DonorContactForm/DonorContactForm";

export function DonorContactStep({ copy }: DonorContactSectionProps) {
  const accordion = useAccordion();
  const { register, handleSubmit, control } =
    useFormContext<DonationFormValuesType>();
  const { errors } = useFormState({ control });

  function onSubmit() {
    accordion.goNext("donor-contact-step");
  }

  const donorErrors = errors.donor;
  const firstNameError = donorErrors?.firstName;
  const lastNameError = donorErrors?.lastName;
  const emailError = donorErrors?.email;
  const phoneError = donorErrors?.phone;

  const firstNameErrorMessage = firstNameError?.message;
  const lastNameErrorMessage = lastNameError?.message;
  const emailErrorMessage = emailError?.message;
  const phoneErrorMessage = phoneError?.message;

  const hasFirstNameError = Boolean(firstNameError);
  const hasLastNameError = Boolean(lastNameError);
  const hasEmailError = Boolean(emailError);
  const hasPhoneError = Boolean(phoneError);

  return (
    <section className="u-stepStack">
      <DonorContactIntro introSection={copy.introSection} />

      <DonorContactForm
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        hasFirstNameError={hasFirstNameError}
        firstNameErrorMessage={firstNameErrorMessage}
        hasLastNameError={hasLastNameError}
        lastNameErrorMessage={lastNameErrorMessage}
        hasEmailError={hasEmailError}
        emailErrorMessage={emailErrorMessage}
        hasPhoneError={hasPhoneError}
        phoneErrorMessage={phoneErrorMessage}
        integrity={copy.integrity}
      />
    </section>
  );
}
