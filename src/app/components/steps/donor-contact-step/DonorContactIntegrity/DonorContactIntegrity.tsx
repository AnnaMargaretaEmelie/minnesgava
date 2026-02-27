import { DonorContactIntegrityProps } from "./DonorContactIntegrity.types";
import { PortableText } from "next-sanity";
import styles from "./DonorContactIntegrity.module.scss";

export function DonorContactIntegrity({
  integrity,
}: DonorContactIntegrityProps) {
  if (!integrity?.text) return null;
  return (
    <div className={styles.integrity}>
      <div className={styles.integrityText}>
        <PortableText value={integrity.text} />
      </div>
    </div>
  );
}
