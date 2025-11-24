"use client";

import { PrimaryButtonProps } from "./StepPrimaryButton.types";
import { Button } from "../shared/Button/Button";
import styles from "./StepPrimaryButton.module.scss";

export function StepPrimaryButton({
  label,
  onClick,
  disabled,
}: PrimaryButtonProps) {
  return (
    <div className={styles.stepPrimaryButton}>
      <Button onClick={onClick} disabled={disabled}>
        {label}
      </Button>
    </div>
  );
}
