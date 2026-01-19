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
            <svg
              className={styles.chevron}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <h3>Google Pay</h3>
            <p>Betala med din digitala plånbok</p>
          </div>
          <div>
            <svg
              className={styles.chevron}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <h3>Kort</h3>
            <p>Betala med ditt kort</p>
          </div>
          <div>
            <svg
              className={styles.chevron}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.dropdown}>
        <div className={styles.dropdownTrigger}>
          <button className={styles.triggerText}>
            <strong>Visa fler betalsätt</strong>
          </button>
          <svg
            className={styles.chevron}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </div>
        <div className={styles.dropdownContent}>
          <div className={styles.box}>
            <div>
              <h3>Inbetalningskort</h3>
              <p>Betala med ditt inbetalningskort</p>
            </div>
            <div>
              <svg
                className={styles.chevron}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
