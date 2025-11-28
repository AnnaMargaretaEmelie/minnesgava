import { DonorContactSectionProps } from "./DonorContactSection.types";
import { PortableText } from "next-sanity";
import styles from "./DonorContactSection.module.scss";

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
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName">Efternamn</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div className={styles.field}>
          <label htmlFor="adress">Gatuadress</label>
          <input type="text" id="adress" name="adress" />
        </div>
        <div className={styles.field}>
          <label htmlFor="postalCode">Postnummer</label>
          <input type="text" id="postalCode" name="postalCode" />
        </div>
        <div className={styles.field}>
          <label htmlFor="postalArea">Postort</label>
          <input type="text" id="postalArea" name="postalArea" />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Mejladress</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Mobiltelefon</label>
          <input type="tel" id="phone" name="phone" />
        </div>
      </form>

      {/* Lägg in intergritytext */}
    </section>
  );
}
