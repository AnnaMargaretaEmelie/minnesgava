"use client";

import { forwardRef } from "react";
import { PrimaryButtonProps } from "./StepPrimaryButton.types";
import { Button } from "../shared/Button/Button";
import styles from "./StepPrimaryButton.module.scss";
import { StepPrimaryButtonArrow } from "../shared/icons/StepPrimaryButtonArrow";

export const StepPrimaryButton = forwardRef<
  HTMLButtonElement,
  PrimaryButtonProps
>(function StepPrimaryButton(
  { label, onClick, disabled, type = "button" },
  ref,
) {
  return (
    <div className={styles.stepPrimaryButton}>
      <Button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        icon={<StepPrimaryButtonArrow className={styles.arrow} />}
      >
        {label}
      </Button>
    </div>
  );
});
