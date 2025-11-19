//info-ruta med vald mottagare
import type { Recipient } from "@/data/recipients.mock";

type Step1RecipientInfoProps = {
  recipient: Recipient;
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("sv-SE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function Step1RecipientInfo({
  recipient,
}: Step1RecipientInfoProps) {
  const fullName = `${recipient.firstName} ${recipient.lastName}`;
  const birth = formatDate(recipient.birthDate);
  const death = formatDate(recipient.deathDate);

  return (
    <div>
      <p>{fullName}</p>
      <p>
        {birth} - {death}
      </p>
      <p>{recipient.city}</p>
      <p>{recipient.funeralHome}</p>
    </div>
  );
}
