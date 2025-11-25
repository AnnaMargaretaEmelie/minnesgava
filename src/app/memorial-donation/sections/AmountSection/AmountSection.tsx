import styles from "./AmountSection.module.scss";
import type { AmountSectionProps } from "./AmountSection.types";
import { PortableText } from "next-sanity";

export function AmountSection({ copy }: AmountSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.amountBoxes}>
        <p>Valbara belopp</p>
      </div>
      <div className={styles.information}>
        {copy.infoText && <PortableText value={copy.infoText} />}
      </div>
    </section>
  );
}
