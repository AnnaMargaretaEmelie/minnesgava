import {
  DonorContactSectionProps,
  DonorFormValuesType,
} from "./DonorContactSection.types";
import { PortableText } from "next-sanity";
import styles from "./DonorContactSection.module.scss";
import { StepPrimaryButton } from "@/app/components/StepPrimaryButton/StepPrimaryButton";
import { useAccordion } from "@/app/components/accordion/Accordion/Accordion";
import { useFormContext, useFormState } from "react-hook-form";

export function DonorContactSection({ copy }: DonorContactSectionProps) {
  const accordion = useAccordion();
  const { register, trigger, control } = useFormContext<DonorFormValuesType>();
  const { errors } = useFormState({ control });

  async function handleNext() {
    const isValid = await trigger([
      "donor.firstName",
      "donor.lastName",
      "donor.email",
      "donor.phone",
    ]);

    console.log("trigger result: ", isValid);
    console.log("errors after trigger: ", errors);
    if (!isValid) {
      return;
    }
    accordion.goNext("donor-contact-step");
  }

  return (
    <section className={styles.section}>
      {copy.introSection?.title && <h3>{copy.introSection.title}</h3>}

      <div className={styles.intro}>
        {copy.introSection?.text && (
          <PortableText value={copy.introSection.text} />
        )}
      </div>

      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          void handleNext();
        }}
      >
        <div className={styles.field}>
          <label htmlFor="firstName">Förnamn*</label>
          <input
            type="text"
            id="firstName"
            placeholder="T ex Anna"
            {...register("donor.firstName", { required: "Obligatoriskt fält" })}
            className={errors.donor?.firstName ? styles.inputError : undefined}
          />
          {errors.donor?.firstName && (
            <p className={styles.error}>{errors.donor?.firstName?.message}</p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName">Efternamn*</label>
          <input
            type="text"
            id="lastName"
            placeholder="T ex Larsson"
            {...register("donor.lastName", { required: "Obligatoriskt fält" })}
            className={errors.donor?.lastName ? styles.inputError : undefined}
          />
          {errors.donor?.lastName && (
            <p className={styles.error}>
              {errors.donor?.lastName?.message as string}
            </p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="adress">Gatuadress</label>
          <input
            type="text"
            id="adress"
            placeholder="T ex Stora Nygatan 26"
            {...register("donor.adress")}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="postalCode">Postnummer</label>
          <input
            type="text"
            id="postalCode"
            placeholder="T ex 11127"
            {...register("donor.postalCode")}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="postalArea">Postort</label>
          <input
            type="text"
            id="postalArea"
            placeholder="T ex Stockholm"
            {...register("donor.postalArea")}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Mejladress*</label>
          <input
            type="email"
            id="email"
            placeholder="T ex namn@domännamn.se"
            {...register("donor.email", {
              required: "Obligatoriskt fält",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Ange en giltig mejladress",
              },
            })}
            className={errors.donor?.email ? styles.inputError : undefined}
          />
          {errors.donor?.email && (
            <p className={styles.error}>{errors.donor?.email?.message}</p>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Mobiltelefon*</label>
          <input
            type="tel"
            id="phone"
            placeholder="T ex 0710203040"
            {...register("donor.phone", {
              required: "Obligatoriskt fält",
              pattern: {
                value: /^(\+46|0)\d([\d\s-]{6,}\d)$/,
                message: "Ange ett giltigt mobilnummer",
              },
            })}
            className={errors.donor?.phone ? styles.inputError : undefined}
          />
          {errors.donor?.phone && (
            <p className={styles.error}>{errors.donor?.phone?.message}</p>
          )}
        </div>
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
      <StepPrimaryButton label="Välj betalmetod" onClick={handleNext} />
    </section>
  );
}
