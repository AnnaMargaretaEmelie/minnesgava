import { DonorContactSectionProps } from "./DonorContactSection.types";
import { PortableText } from "next-sanity";
import styles from "./DonorContactSection.module.scss";
import { StepPrimaryButton } from "@/app/components/StepPrimaryButton/StepPrimaryButton";

export function DonorContactSection({ copy }: DonorContactSectionProps) {
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
            name="firstName"
            placeholder="T ex Anna"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName">Efternamn</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="T ex Larsson"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="adress">Gatuadress</label>
          <input
            type="text"
            id="adress"
            name="adress"
            placeholder="T ex Stora Nygatan 26"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="postalCode">Postnummer</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            placeholder="T ex 11127"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="postalArea">Postort</label>
          <input
            type="text"
            id="postalArea"
            name="postalArea"
            placeholder="T ex Stockholm"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Mejladress</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="T ex namn@domännamn.se"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Mobiltelefon</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="T ex 0710203040"
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
        onClick={() => {
          //TODO:Wire up goNext in a separate branch
          console.log("Next from donor contact step (not wired yet)");
        }}
        disabled
      />
    </section>
  );
}
