import { DonorContactIntroProps } from "./DonorContactIntro.types";
import styles from "./DonorContactIntro.module.scss";
import { PortableText } from "next-sanity";

export function DonorContactIntro({ introSection }: DonorContactIntroProps) {
  return (
    <div className={styles.introBlock}>
      {introSection?.title && (
        <h3 className={styles.title}>{introSection.title}</h3>
      )}

      <div className={styles.intro}>
        {introSection?.text && <PortableText value={introSection.text} />}
      </div>
    </div>
  );
}
