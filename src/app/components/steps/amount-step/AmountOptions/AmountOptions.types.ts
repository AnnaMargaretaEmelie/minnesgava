import { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types"
import { UseFormRegister } from "react-hook-form"

export type AmountOptionsProps = {
    preset: DonationFormValuesType["amount"]["preset"];
    selectPreset: (amountNumber: number, presetString: "1000" | "500" | "100") => void;
    selectCustom: ()=> void;
    register: UseFormRegister<DonationFormValuesType>;
    customAmountErrorMessage?: string;
    customAmountHasError: boolean;
}