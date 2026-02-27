import type { UseFormRegister } from "react-hook-form";
import type { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types";

export type PurposeSectionProps = {
    register: UseFormRegister<DonationFormValuesType>;
}