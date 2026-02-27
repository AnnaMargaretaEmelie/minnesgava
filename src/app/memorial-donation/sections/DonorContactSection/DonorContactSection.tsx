import { DonorContactSectionProps } from "./DonorContactSection.types";
import { PortableText } from "next-sanity";
import styles from "./DonorContactSection.module.scss";
import { StepPrimaryButton } from "@/app/components/StepPrimaryButton/StepPrimaryButton";
import { useAccordion } from "@/app/components/accordion/Accordion/Accordion";
import { useFormContext, useFormState } from "react-hook-form";
import { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types";

export function DonorContactSection({ copy }: DonorContactSectionProps) {
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

  return (
    <section className="u-stepStack">
      <div className={styles.introBlock}>
        {copy.introSection?.title && (
          <h3 className={styles.title}>{copy.introSection.title}</h3>
        )}

        <div className={styles.intro}>
          {copy.introSection?.text && (
            <PortableText value={copy.introSection.text} />
          )}
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label htmlFor="firstName">Förnamn*</label>
          <input
            type="text"
            id="firstName"
            placeholder="T ex Anna"
            autoComplete="given-name"
            aria-invalid={Boolean(firstNameError)}
            aria-describedby={firstNameError ? "firstName-error" : undefined}
            {...register("donor.firstName", { required: "Obligatoriskt fält" })}
            className={firstNameError ? styles.inputError : undefined}
          />
          {firstNameError && (
            <p id="firstName-error" className={styles.error} role="alert">
              {firstNameError.message}
            </p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName">Efternamn*</label>
          <input
            type="text"
            id="lastName"
            placeholder="T ex Larsson"
            autoComplete="family-name"
            aria-invalid={Boolean(lastNameError)}
            aria-describedby={lastNameError ? "lastName-error" : undefined}
            {...register("donor.lastName", { required: "Obligatoriskt fält" })}
            className={lastNameError ? styles.inputError : undefined}
          />
          {lastNameError && (
            <p id="lastName-error" className={styles.error} role="alert">
              {lastNameError.message}
            </p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="adress">Gatuadress</label>
          <input
            type="text"
            id="adress"
            placeholder="T ex Stora Nygatan 26"
            autoComplete="street-address"
            {...register("donor.adress")}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="postalCode">Postnummer</label>
          <input
            type="text"
            id="postalCode"
            placeholder="T ex 11127"
            autoComplete="postal-code"
            {...register("donor.postalCode")}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="postalArea">Postort</label>
          <input
            type="text"
            id="postalArea"
            placeholder="T ex Stockholm"
            autoComplete="address-level2"
            {...register("donor.postalArea")}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Mejladress*</label>
          <input
            type="email"
            id="email"
            placeholder="T ex namn@domännamn.se"
            autoComplete="email"
            aria-invalid={Boolean(emailError)}
            aria-describedby={emailError ? "email-error" : undefined}
            {...register("donor.email", {
              required: "Obligatoriskt fält",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Ange en giltig mejladress",
              },
            })}
            className={emailError ? styles.inputError : undefined}
          />
          {emailError && (
            <p id="email-error" className={styles.error} role="alert">
              {emailError.message}
            </p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Mobiltelefon*</label>
          <input
            type="tel"
            id="phone"
            placeholder="T ex 0710203040"
            autoComplete="tel"
            aria-invalid={Boolean(phoneError)}
            aria-describedby={phoneError ? "phone-error" : undefined}
            {...register("donor.phone", {
              required: "Obligatoriskt fält",
              pattern: {
                value: /^(\+46|0)\d([\d\s-]{6,}\d)$/,
                message: "Ange ett giltigt mobilnummer",
              },
            })}
            className={phoneError ? styles.inputError : undefined}
          />
          {phoneError && (
            <p id="phone-error" className={styles.error} role="alert">
              {phoneError.message}
            </p>
          )}
        </div>
        <StepPrimaryButton label="Välj betalmetod" type="submit" />
      </form>
      {copy.integrity && (
        <div className={styles.integrity}>
          {copy.integrity.text && (
            <div className={styles.integrityText}>
              <PortableText value={copy.integrity.text} />
            </div>
          )}
        </div>
      )}
    </section>
  );
}
