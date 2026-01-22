import { ChevronIcon } from "@/app/components/shared/icons/ChevronIcon";
import styles from "./PaymentSection.module.scss";
import { AccordionDropdown } from "@/app/components/shared/AccordionDropdown/AccordionDropdown";

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

      <AccordionDropdown
        label="Visa fler betalsätt"
        triggerClassName={styles.dropdownTriggerRight}
      >
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
      </AccordionDropdown>
    </section>
  );
}
