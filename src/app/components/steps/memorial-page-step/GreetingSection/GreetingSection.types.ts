import { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types"
import { Control, UseFormRegister } from "react-hook-form"


export type GreetingSectionProps = {
    register: UseFormRegister<DonationFormValuesType>;
    control: Control<DonationFormValuesType>;
    hasError?: boolean;
    errorMessage?: string;
}