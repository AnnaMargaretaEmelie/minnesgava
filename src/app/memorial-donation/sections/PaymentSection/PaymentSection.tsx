import styles from "./PaymentSection.module.scss";

export function PaymentSection() {
  return (
    <section className={styles.section}>
      <div>
        <h3>Swish</h3>
      </div>
      <div>
        <h3>Google Pay</h3>
      </div>
      <div>
        <h3>Kort</h3>
      </div>
    </section>
  );
}
