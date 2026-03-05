import { useSelectedRecipient } from "../hooks/useSelectedRecipient";
import { useWatch, useFormContext } from "react-hook-form";
import { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types";

export function MemorialPageSummary() {
  const { fullName } = useSelectedRecipient();

  const { control } = useFormContext<DonationFormValuesType>();
  const greeting = useWatch({ control, name: "memorialPage.greeting" });
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
