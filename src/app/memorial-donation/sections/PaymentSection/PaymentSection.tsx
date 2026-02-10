import { ChevronIcon } from "@/app/components/shared/icons/ChevronIcon";
import { useFormContext } from "react-hook-form";
import styles from "./PaymentSection.module.scss";
import { AccordionDropdown } from "@/app/components/shared/AccordionDropdown/AccordionDropdown";
import type { DonationFormValuesType } from "../../types/memorialDonationForm.types";

export function PaymentSection() {
  const { register } = useFormContext<DonationFormValuesType>();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <label className={styles.box}>
          <input
            type="radio"
            value="swish"
            {...register("payment.method")}
            className="u-visuallyHidden"
          />
          <div className={styles.boxContent}>
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
        </label>
        <label className={styles.box}>
          <input
            type="radio"
            value="googlePay"
            {...register("payment.method")}
            className="u-visuallyHidden"
          />
          <div className={styles.boxContent}>
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
        </label>
        <label className={styles.box}>
          <input
            type="radio"
            value="card"
            {...register("payment.method")}
            className="u-visuallyHidden"
          />
          <div className={styles.boxContent}>
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
        </label>
      </div>

      <AccordionDropdown
        label="Visa fler betalsätt"
        triggerClassName={styles.dropdownTriggerRight}
      >
        <div className={styles.dropdownContent}>
          <label className={styles.box}>
            <input
              type="radio"
              value="invoice"
              {...register("payment.method")}
              className="u-visuallyHidden"
            />
            <div className={styles.boxContent}>
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
          </label>
        </div>
      </AccordionDropdown>
    </section>
  );
}
