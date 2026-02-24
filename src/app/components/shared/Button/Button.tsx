import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";
import { forwardRef } from "react";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ children, className, icon, ...rest }, ref) {
    return (
      <button
        ref={ref}
        className={`${styles.button} ${className ?? ""}`}
        {...rest}
      >
        <span className={styles.label}>{children}</span>
        {icon && <span className={styles.icon}>{icon}</span>}
      </button>
    );
  },
);
