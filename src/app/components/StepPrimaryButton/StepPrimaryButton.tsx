"use client";

import { PrimaryButtonProps } from "./StepPrimaryButton.types";
import { Button } from "../shared/Button/Button";
import styles from "./StepPrimaryButton.module.scss";
import { StepPrimaryButtonArrow } from "./StepPrimaryButtonArrow";

export function StepPrimaryButton({
  label,
  onClick,
  disabled,
}: PrimaryButtonProps) {
  return (
    <div className={styles.stepPrimaryButton}>
      <Button
        onClick={onClick}
        disabled={disabled}
        icon={<StepPrimaryButtonArrow className={styles.arrow} />}
      >
        {label}
      </Button>
    </div>
  );
}
