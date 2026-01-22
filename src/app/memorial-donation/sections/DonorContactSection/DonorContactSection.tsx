import { DonorContactSectionProps } from "./DonorContactSection.types";
import { PortableText } from "next-sanity";
import styles from "./DonorContactSection.module.scss";
import { StepPrimaryButton } from "@/app/components/StepPrimaryButton/StepPrimaryButton";
import { useAccordion } from "@/app/components/accordion/Accordion/Accordion";
import { useFormContext } from "react-hook-form";

export function DonorContactSection({ copy }: DonorContactSectionProps) {
  const accordion = useAccordion();
  const { register } = useFormContext();
  return (
    <section className={styles.section}>
      {copy.introSection?.title && <h3>{copy.introSection.title}</h3>}

      <div className={styles.intro}>
        {copy.introSection?.text && (
          <PortableText value={copy.introSection.text} />
        )}
      </div>

      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="firstName">Förnamn</label>
          <input
            type="text"
            id="firstName"
            placeholder="T ex Anna"
            {...register("donor.firstName")}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName">Efternamn</label>
          <input
            type="text"
            id="lastName"
            placeholder="T ex Larsson"
            {...register("donor.lastName")}
          />
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
          <label htmlFor="email">Mejladress</label>
          <input
            type="email"
            id="email"
            placeholder="T ex namn@domännamn.se"
            {...register("donor.email")}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Mobiltelefon</label>
          <input
            type="tel"
            id="phone"
            placeholder="T ex 0710203040"
            {...register("donor.phone")}
          />
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
      <StepPrimaryButton
        label="Välj betalmetod"
        onClick={() => accordion?.goNext("donor-contact-step")}
      />
    </section>
  );
}
