import type { MemorialPageLayoutProps } from "./MemorialPageLayout.types";
import { MemorialPageSection } from "../sections/MemorialPageSection/MemorialPageSection";
import styles from "./MemorialPageLayout.module.scss";

export function MemorialPageLayout({ copy }: MemorialPageLayoutProps) {
  return (
    <div className={styles.layout}>
      <section className={styles.hero}>HeroSection</section>
      <section className={styles.steps}>
        <section className={styles.step}>
          <MemorialPageSection copy={copy} />
        </section>
        <section className={styles.step}>
          <h2>Gåvobelopp</h2>
        </section>
        <section className={styles.step}>
          <h2>Kontaktuppgifter</h2>
        </section>
        <section className={styles.step}>
          <h2>Betalsätt</h2>
        </section>
      </section>
    </div>
  );
}
