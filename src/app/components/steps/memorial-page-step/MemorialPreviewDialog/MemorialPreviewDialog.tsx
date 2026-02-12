"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type { MemorialPreviewDialogProps } from "./MemorialPreviewDialog.types";
import { StepPrimaryButton } from "@/app/components/StepPrimaryButton/StepPrimaryButton";
import styles from "./MemorialPreviewDialog.module.scss";
import { useFormContext } from "react-hook-form";
import { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types";
import { MEMORIAL_PAGE_IMAGES } from "@/data/memorialPageImages";
import { MOCK_RECIPIENTS } from "@/data/recipients.mock";

export function MemorialPreviewDialog({
  open,
  onOpenChange,
  onConfirm,
}: MemorialPreviewDialogProps) {
  const { watch } = useFormContext<DonationFormValuesType>();
  const imageId = watch("memorialPage.imageId");
  const greeting = watch("memorialPage.greeting");
  const recipientId = watch("memorialPage.recipientId");
  const selectedImage =
    MEMORIAL_PAGE_IMAGES.find((i) => i.id === imageId) ??
    MEMORIAL_PAGE_IMAGES[0];
  const selectedRecipient =
    MOCK_RECIPIENTS.find((r) => r.id === recipientId) ?? null;
  const fullName = selectedRecipient
    ? `${selectedRecipient.firstName} ${selectedRecipient.lastName}`
    : "Ingen mottagare vald";

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title>Förhandsvisning</Dialog.Title>
          <Dialog.Description asChild>
            <div className={styles.dialog}>
              <div className={styles.preview}>
                <div className={styles.imageWrapper}>
                  <img src={selectedImage.src} alt={selectedImage.alt} />
                </div>
                <div className={styles.text}>
                  <p>Till minne av</p>
                  <div className={styles.name}>{fullName}</div>
                  <p>
                    har Hjärnfonden tacksamt mottagit en gåva till forskning om
                    hjärnan
                  </p>
                  <p className={styles.greeting}>{greeting || "-"}</p>
                </div>
                <div className={styles.logoRow}>Här ska logotyp ligga</div>
              </div>
              <div className={styles.buttonRow}>
                <StepPrimaryButton
                  onClick={onConfirm}
                  label="Godkänn minnesblad"
                  type="button"
                />
              </div>
            </div>
          </Dialog.Description>
          <Dialog.Close className={styles.closeButton}>
            Ändra minnesbladet
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
