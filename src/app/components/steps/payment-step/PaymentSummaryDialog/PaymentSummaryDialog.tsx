import { StepPrimaryButton } from "@/app/components/StepPrimaryButton/StepPrimaryButton";
import type { PaymentSummaryProps } from "./PaymentSummaryDialog.types";
import type { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types";
import { useFormContext } from "react-hook-form";
import * as Dialog from "@radix-ui/react-dialog";
import styles from "./PaymentSummaryDialog.module.scss";

const PAYMENT_METHOD_LABELS: Record<
  NonNullable<DonationFormValuesType["payment"]["method"]>,
  string
> = {
  swish: "Swish",
  googlePay: "Google Pay",
  card: "Kort",
  invoice: "Inbetalningskort",
};

export function PaymentSummaryDialog({
  open,
  onOpenChange,
}: PaymentSummaryProps) {
  const { watch } = useFormContext<DonationFormValuesType>();
  const amount = watch("amount.value");
  const displayAmount = amount ? `${amount} kr` : "-";
  const method = watch("payment.method");
  const methodLabel = method ? PAYMENT_METHOD_LABELS[method] : "Ej valt";
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title>Sammanfattning</Dialog.Title>
          <Dialog.Description asChild>
            <div>
              <i>Låtsasbetalsteg</i>
              <dl className={styles.summary}>
                <dt>Belopp:</dt> <dd>{displayAmount}</dd>
                <dt>Valt betalsätt: </dt>
                <dd>{methodLabel}</dd>
              </dl>
            </div>
          </Dialog.Description>
          <Dialog.Close asChild>
            <StepPrimaryButton label="Stäng" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
