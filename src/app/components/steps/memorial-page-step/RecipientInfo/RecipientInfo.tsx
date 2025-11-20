//info-ruta med vald mottagare
import { RecipientInfoProps } from "./RecipientInfo.types";
import styles from "./RecipientInfo.module.scss";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("sv-SE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function RecipientInfo({ recipient }: RecipientInfoProps) {
  const fullName = `${recipient.firstName} ${recipient.lastName}`;
  const birth = formatDate(recipient.birthDate);
  const death = formatDate(recipient.deathDate);

  return (
    <div className={styles.wrapper}>
      <p className={styles.name}>{fullName}</p>
      <p>
        {birth} - {death}
      </p>
      <p>{recipient.city}</p>
      <p>{recipient.funeralHome}</p>
    </div>
  );
}
