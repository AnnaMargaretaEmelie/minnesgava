"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type { MemorialPreviewDialogProps } from "./MemorialPreviewDialog.types";
import { StepPrimaryButton } from "@/app/components/StepPrimaryButton/StepPrimaryButton";
import styles from "./MemorialPreviewDialog.module.scss";
import Image from "next/image";

export function MemorialPreviewDialog({
  imageSrc,
  imageAlt,
  fullName,
  greeting,
  open,
  onOpenChange,
  onConfirm,
}: MemorialPreviewDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Close asChild>
            <button aria-label="Stäng" className={styles.closeX} type="button">
              x
            </button>
          </Dialog.Close>
          <div className={styles.contentInner}>
            <Dialog.Title className="u-visuallyHidden">
              Förhandsvisning minnesblad
            </Dialog.Title>
            <Dialog.Description asChild>
              <div className={styles.dialog}>
                <div className={styles.preview}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={300}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div className={styles.text}>
                    <div>Till minne av</div>
                    <div className={styles.fullName}>{fullName}</div>
                    <p>
                      har Hjärnfonden tacksamt mottagit en gåva till forskning
                      om hjärnan.
                    </p>
                    <p className={styles.greeting}>{greeting || "-"}</p>
                  </div>
                  <div className={styles.logoRow}>
                    <Image
                      src="/images/logo.png"
                      alt="Hjärnfonden"
                      width={170}
                      height={85}
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
              <button type="button" className={styles.closeButton}>
                Ändra minnesbladet
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
