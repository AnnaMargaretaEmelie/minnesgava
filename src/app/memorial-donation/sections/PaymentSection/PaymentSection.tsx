import { ChevronIcon } from "@/app/components/shared/icons/ChevronIcon";
import styles from "./PaymentSection.module.scss";

export function PaymentSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div>
            <h3>Swish</h3>
            <p>Betala med din mobil</p>
          </div>
          <div>
            <ChevronIcon
              className={`${styles.chevron} ${styles.chevronRight}`}
            />
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <h3>Google Pay</h3>
            <p>Betala med din digitala plånbok</p>
          </div>
          <div>
            <ChevronIcon
              className={`${styles.chevron} ${styles.chevronRight}`}
            />
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <h3>Kort</h3>
            <p>Betala med ditt kort</p>
          </div>
          <div>
            <ChevronIcon
              className={`${styles.chevron} ${styles.chevronRight}`}
            />
          </div>
        </div>
      </div>
      <div className={styles.dropdown}>
        <div className={styles.dropdownTrigger}>
          <button className={styles.triggerText}>
            <strong>Visa fler betalsätt</strong>
          </button>
          <ChevronIcon className={styles.chevron} />
        </div>
        <div className={styles.dropdownContent}>
          <div className={styles.box}>
            <div>
              <h3>Inbetalningskort</h3>
              <p>Betala med ditt inbetalningskort</p>
            </div>
            <div>
              <ChevronIcon
                className={`${styles.chevron} ${styles.chevronRight}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
