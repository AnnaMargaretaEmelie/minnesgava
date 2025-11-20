"use client";

import { PrimaryButtonProps } from "./StepPrimaryButton.types";
import styles from "./StepPrimaryButton.module.scss";

export function StepPrimaryButton({
  label,
  onClick,
  disabled,
}: PrimaryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={styles.button}
    >
      {label}{" "}
    </button>
  );
}
