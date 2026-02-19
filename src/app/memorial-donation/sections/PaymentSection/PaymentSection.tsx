import { ChevronIcon } from "@/app/components/shared/icons/ChevronIcon";
import { useFormContext, useFormState } from "react-hook-form";
import styles from "./PaymentSection.module.scss";
import { AccordionDropdown } from "@/app/components/shared/AccordionDropdown/AccordionDropdown";
import type { DonationFormValuesType } from "../../types/memorialDonationForm.types";
import { StepPrimaryButton } from "@/app/components/StepPrimaryButton/StepPrimaryButton";
import { useState } from "react";
import { PaymentSummaryDialog } from "@/app/components/steps/payment-step/PaymentSummaryDialog/PaymentSummaryDialog";

export function PaymentSection() {
  const { register, control, trigger } =
    useFormContext<DonationFormValuesType>();
  const { errors } = useFormState({ control });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const paymentMethodRegister = register("payment.method", {
    required: "Välj ett betalsätt",
  });
  const hasPaymentError = Boolean(errors.payment?.method);

  const handleContinue = async () => {
    const ok = await trigger("payment.method");
    if (ok) {
      setIsDialogOpen(true);
    }
  };
  return (
    <section className={styles.section}>
      <div
        role="radiogroup"
        aria-labelledby="payment-method-legend"
        aria-describedby={
          hasPaymentError ? "payment-method-error" : "undefined"
        }
      >
        <p id="payment-method-legend" className="u-visuallyHidden">
          Välj betalsätt
        </p>
        <div className={styles.container}>
          <label>
            <input
              type="radio"
              value="swish"
              {...paymentMethodRegister}
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
          <label>
            <input
              type="radio"
              value="googlePay"
              {...paymentMethodRegister}
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
          <label>
            <input
              type="radio"
              value="card"
              {...paymentMethodRegister}
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
            <label>
              <input
                type="radio"
                value="invoice"
                {...paymentMethodRegister}
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
      </div>
      {errors.payment?.method && (
        <p id="payment-method-error" role="alert" className="u-errorText">
          {errors.payment?.method?.message}
        </p>
      )}
      <StepPrimaryButton
        label="Fortsätt till betalning"
        type="button"
        onClick={handleContinue}
      />
      <PaymentSummaryDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </section>
  );
}
