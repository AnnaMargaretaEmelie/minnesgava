import styles from "./AmountSection.module.scss";

export function AmountSection() {
  return (
    <section className={styles.section}>
      <div className={styles.amountBoxes}>
        <p>Valbara belopp</p>
      </div>
      <div className={styles.information}>
        <p>Informationsruta</p>
      </div>
    </section>
  );
}
