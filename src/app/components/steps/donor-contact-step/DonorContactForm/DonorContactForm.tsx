import type { DonorContactFormProps } from "./DonorContactForm.types";
import styles from "./DonorContactForm.module.scss";
import { StepPrimaryButton } from "@/app/components/StepPrimaryButton/StepPrimaryButton";
import { DonorContactIntegrity } from "../DonorContactIntegrity/DonorContactIntegrity";
import clsx from "clsx";

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
        <label htmlFor="firstName" className={styles.topLabel}>
          Förnamn*
        </label>
        <div className={styles.inputWrap}>
          <input
            type="text"
            id="firstName"
            placeholder=" "
            autoComplete="given-name"
            aria-invalid={Boolean(hasFirstNameError)}
            aria-describedby={hasFirstNameError ? "firstName-error" : undefined}
            {...register("donor.firstName", { required: "Obligatoriskt fält" })}
            className={clsx(styles.input, {
              [styles.inputError]: hasFirstNameError,
            })}
          />
          <span className={styles.floatingHint} aria-hidden="true">
            T ex Anna
          </span>
        </div>

        {hasFirstNameError && (
          <p id="firstName-error" className={styles.error} role="alert">
            {firstNameErrorMessage}
          </p>
        )}
      </div>
      <div className={styles.field}>
        <label htmlFor="lastName" className={styles.topLabel}>
          Efternamn*
        </label>
        <div className={styles.inputWrap}>
          <input
            type="text"
            id="lastName"
            placeholder=" "
            autoComplete="family-name"
            aria-invalid={Boolean(hasLastNameError)}
            aria-describedby={hasLastNameError ? "lastName-error" : undefined}
            {...register("donor.lastName", { required: "Obligatoriskt fält" })}
            className={clsx(styles.input, {
              [styles.inputError]: hasLastNameError,
            })}
          />
          <span className={styles.floatingHint} aria-hidden="true">
            T ex Larsson
          </span>
        </div>
        {hasLastNameError && (
          <p id="lastName-error" className={styles.error} role="alert">
            {lastNameErrorMessage}
          </p>
        )}
      </div>
      <div className={styles.field}>
        <label htmlFor="adress" className={styles.topLabel}>
          Gatuadress
        </label>
        <div className={styles.inputWrap}>
          <input
            type="text"
            id="adress"
            placeholder=" "
            autoComplete="street-address"
            {...register("donor.adress")}
            className={styles.input}
          />
          <span className={styles.floatingHint} aria-hidden="true">
            T ex Stora Nygatan 26
          </span>
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="postalCode" className={styles.topLabel}>
          Postnummer
        </label>
        <div className={styles.inputWrap}>
          <input
            type="text"
            id="postalCode"
            placeholder=" "
            autoComplete="postal-code"
            {...register("donor.postalCode")}
            className={styles.input}
          />
          <span className={styles.floatingHint} aria-hidden="true">
            T ex 11127
          </span>
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="postalArea" className={styles.topLabel}>
          Postort
        </label>
        <div className={styles.inputWrap}>
          <input
            type="text"
            id="postalArea"
            placeholder=" "
            autoComplete="address-level2"
            {...register("donor.postalArea")}
            className={styles.input}
          />
          <span className={styles.floatingHint} aria-hidden="true">
            T ex Stockholm
          </span>
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="email" className={styles.topLabel}>
          Mejladress*
        </label>
        <div className={styles.inputWrap}>
          <input
            type="email"
            id="email"
            placeholder=" "
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
            className={clsx(styles.input, {
              [styles.inputError]: hasEmailError,
            })}
          />
          <span className={styles.floatingHint} aria-hidden="true">
            T ex namn@domännamn.se
          </span>
        </div>
        {hasEmailError && (
          <p id="email-error" className={styles.error} role="alert">
            {emailErrorMessage}
          </p>
        )}
      </div>
      <div className={styles.field}>
        <label htmlFor="phone" className={styles.topLabel}>
          Mobiltelefon*
        </label>
        <div className={styles.inputWrap}>
          <input
            type="tel"
            id="phone"
            placeholder=" "
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
            className={clsx(styles.input, {
              [styles.inputError]: hasPhoneError,
            })}
          />
          <span className={styles.floatingHint} aria-hidden="true">
            T ex 0710203040
          </span>
        </div>
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
