"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type { MemorialPreviewDialogProps } from "./MemorialPreviewDialog.types";
import { StepPrimaryButton } from "@/app/components/StepPrimaryButton/StepPrimaryButton";
import styles from "./MemorialPreviewDialog.module.scss";
import { CloseIcon } from "@/app/components/shared/icons/CloseIcon";
import { MemorialPreviewContent } from "../MemorialPreviewContent/MemorialPreviewContent";

export function MemorialPreviewDialog({
  imageSrc,
  imageAlt,
  fullName,
  greeting,
  open,
  onOpenChange,
  onConfirm,
  onEdit,
}: MemorialPreviewDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Close asChild>
            <button
              autoFocus
              aria-label="Stäng"
              className={styles.dialogClose}
              type="button"
            >
              <CloseIcon />
            </button>
          </Dialog.Close>
          <div className={styles.contentInner}>
            <Dialog.Title className="u-visuallyHidden">
              Förhandsvisning minnesblad
            </Dialog.Title>
            <Dialog.Description asChild>
              <div className={styles.dialog}>
                <div className={styles.previewFrame}>
                  <div className={styles.previewPaper}>
                    <MemorialPreviewContent
                      imageSrc={imageSrc}
                      imageAlt={imageAlt}
                      fullName={fullName}
                      greeting={greeting}
                    />
                  </div>
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
            <Dialog.Close asChild>
              <button
                type="button"
                className={styles.closeButton}
                onClick={onEdit}
              >
                Ändra minnesbladet
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
