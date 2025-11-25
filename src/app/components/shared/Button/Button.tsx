import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

export function Button({ children, className, icon, ...rest }: ButtonProps) {
  return (
    <button className={`${styles.button} ${className ?? ""}`} {...rest}>
      <span className={styles.label}>{children}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}
