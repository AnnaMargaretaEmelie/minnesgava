import { PortableText } from "next-sanity";
import styles from "../AmountStep/AmountStep.module.scss";
import type { AmountInfoTextProps } from "./AmountInfoText.types";

export function AmountInfoText({ infoText }: AmountInfoTextProps) {
  return (
    <div className={styles.information}>
      {infoText && <PortableText value={infoText} />}
    </div>
  );
}
