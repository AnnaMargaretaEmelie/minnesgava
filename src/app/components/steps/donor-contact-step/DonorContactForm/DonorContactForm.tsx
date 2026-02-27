import type { DonorContactFormProps } from "./DonorContactForm.types";
import styles from "./DonorContactForm.module.scss";
import { StepPrimaryButton } from "@/app/components/StepPrimaryButton/StepPrimaryButton";
import { DonorContactIntegrity } from "../DonorContactIntegrity/DonorContactIntegrity";

export function DonorContactForm({
  register,
  handleSubmit,
  onSubmit,
  hasFirstNameError,
  firstNameErrorMessage,
  hasLastNameError,
  lastNameErrorMessage,
  hasEmailError,
  emailErrorMessage,
  hasPhoneError,
  phoneErrorMessage,
  integrity,
}: DonorContactFormProps) {
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <label htmlFor="firstName">Förnamn*</label>
        <input
          type="text"
          id="firstName"
          placeholder="T ex Anna"
          autoComplete="given-name"
          aria-invalid={Boolean(hasFirstNameError)}
          aria-describedby={hasFirstNameError ? "firstName-error" : undefined}
          {...register("donor.firstName", { required: "Obligatoriskt fält" })}
          className={hasFirstNameError ? styles.inputError : undefined}
        />
        {hasFirstNameError && (
          <p id="firstName-error" className={styles.error} role="alert">
            {firstNameErrorMessage}
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
          aria-invalid={Boolean(hasLastNameError)}
          aria-describedby={hasLastNameError ? "lastName-error" : undefined}
          {...register("donor.lastName", { required: "Obligatoriskt fält" })}
          className={hasLastNameError ? styles.inputError : undefined}
        />
        {hasLastNameError && (
          <p id="lastName-error" className={styles.error} role="alert">
            {lastNameErrorMessage}
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
          aria-invalid={Boolean(hasEmailError)}
          aria-describedby={hasEmailError ? "email-error" : undefined}
          {...register("donor.email", {
            required: "Obligatoriskt fält",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Ange en giltig mejladress",
            },
          })}
          className={hasEmailError ? styles.inputError : undefined}
        />
        {hasEmailError && (
          <p id="email-error" className={styles.error} role="alert">
            {emailErrorMessage}
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
          aria-invalid={Boolean(hasPhoneError)}
          aria-describedby={hasPhoneError ? "phone-error" : undefined}
          {...register("donor.phone", {
            required: "Obligatoriskt fält",
            pattern: {
              value: /^(\+46|0)\d([\d\s-]{6,}\d)$/,
              message: "Ange ett giltigt mobilnummer",
            },
          })}
          className={hasPhoneError ? styles.inputError : undefined}
        />
        {hasPhoneError && (
          <p id="phone-error" className={styles.error} role="alert">
            {phoneErrorMessage}
          </p>
        )}
      </div>
      <DonorContactIntegrity integrity={integrity} />
      <StepPrimaryButton label="Välj betalmetod" type="submit" />
    </form>
  );
}
