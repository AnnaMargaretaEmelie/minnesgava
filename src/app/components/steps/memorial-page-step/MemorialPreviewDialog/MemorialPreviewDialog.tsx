"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type { MemorialPreviewDialogProps } from "./MemorialPreviewDialog.types";
import { StepPrimaryButton } from "@/app/components/StepPrimaryButton/StepPrimaryButton";
import styles from "./MemorialPreviewDialog.module.scss";

export function MemorialPreviewDialog({
  open,
  onOpenChange,
}: MemorialPreviewDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title>Förhandsvisning</Dialog.Title>
          <Dialog.Description asChild>
            <div>Här kommer innehållet visas. </div>
          </Dialog.Description>
          <Dialog.Close asChild>
            <StepPrimaryButton label="Godkänn minnesblad" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
