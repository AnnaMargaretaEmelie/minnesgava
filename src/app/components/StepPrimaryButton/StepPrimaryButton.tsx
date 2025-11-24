"use client";

import { PrimaryButtonProps } from "./StepPrimaryButton.types";
import styles from "./StepPrimaryButton.module.scss";

export function StepPrimaryButton({
  label,
  onClick,
  disabled,
}: PrimaryButtonProps) {
  return (
    <div className={styles.stepPrimaryButton}>
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className="button"
      >
        <span className="button__label">{label}</span>
        <span className="button__icon"></span>
      </button>
    </div>
  );
}
