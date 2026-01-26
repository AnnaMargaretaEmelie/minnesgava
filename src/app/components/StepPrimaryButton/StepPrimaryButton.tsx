"use client";

import { PrimaryButtonProps } from "./StepPrimaryButton.types";
import { Button } from "../shared/Button/Button";
import styles from "./StepPrimaryButton.module.scss";
import { StepPrimaryButtonArrow } from "../shared/icons/StepPrimaryButtonArrow";

export function StepPrimaryButton({
  label,
  onClick,
  disabled,
  type = "button",
}: PrimaryButtonProps) {
  return (
    <div className={styles.stepPrimaryButton}>
      <Button
        type={type}
        onClick={onClick}
        disabled={disabled}
        icon={<StepPrimaryButtonArrow className={styles.arrow} />}
      >
        {label}
      </Button>
    </div>
  );
}
