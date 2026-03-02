import type { MemorialPreviewContentProps } from "./MemorialPreviewContent.types";
import styles from "./MemorialPreviewContent.module.scss";
import Image from "next/image";
export function MemorialPreviewContent({
  imageSrc,
  imageAlt,
  fullName,
  greeting,
}: MemorialPreviewContentProps) {
  return (
    <div className={styles.root}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={300}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className={styles.text}>
        <div>Till minne av</div>
        <div className={styles.fullName}>{fullName}</div>
        <p>
          har Hjärnfonden tacksamt mottagit en gåva till forskning om hjärnan.
        </p>
        <p className={styles.greeting}>{greeting || "-"}</p>
      </div>
      <div className={styles.logoRow}>
        <Image
          src="/images/logo.png"
          alt="Hjärnfonden"
          width={170}
          height={85}
        />
      </div>
    </div>
  );
}
