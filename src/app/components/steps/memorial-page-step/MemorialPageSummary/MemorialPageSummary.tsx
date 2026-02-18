import { useWatch, useFormContext } from "react-hook-form";
import { MOCK_RECIPIENTS } from "@/data/recipients.mock";

export function MemorialPageSummary() {
  const { control } = useFormContext();

  const recipientId = useWatch({ control, name: "memorialPage.recipientId" });
  const greeting = useWatch({ control, name: "memorialPage.greeting" });

  const selectedRecipient =
    recipientId != null
      ? (MOCK_RECIPIENTS.find((r) => r.id === recipientId) ?? null)
      : null;

  const fullName = selectedRecipient
    ? `${selectedRecipient?.firstName} ${selectedRecipient?.lastName}`.trim()
    : recipientId
      ? "Okänd mottagare"
      : "Ingen mottagare vald";

  const greetingText = String(greeting ?? "").trim();

  return (
    <div>
      <p>Mottagare: {fullName}</p>
      <p>Hälsning: </p>
      <div style={{ whiteSpace: "pre-wrap" }}>
        {greetingText.length > 0 ? greetingText : "-"}
      </div>
    </div>
  );
}
