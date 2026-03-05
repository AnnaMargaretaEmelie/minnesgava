import { MOCK_RECIPIENTS } from "@/data/recipients.mock";
import { useFormContext, useWatch } from "react-hook-form";
import { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types";

export function useSelectedRecipient(){
    const {control} = useFormContext<DonationFormValuesType>();
    const recipientId = useWatch({control, name: "memorialPage.recipientId"});
    const selectedRecipient = recipientId != null ?
    (MOCK_RECIPIENTS.find(r => r.id === recipientId) ?? null) : null;

    const fullName = selectedRecipient 
    ? `${selectedRecipient.firstName} ${selectedRecipient.lastName}`.trim() : recipientId ? 
    "Okänd mottagare" : "Ingen mottagare vald";

    return { recipientId, selectedRecipient, fullName }

}