import type { DonorContactSectionCopy } from "@/app/memorial-donation/sections/DonorContactSection/DonorContactSection.types"
import type { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types"
import type { UseFormRegister, UseFormHandleSubmit } from "react-hook-form"

export type DonorContactFormProps = {
    register: UseFormRegister<DonationFormValuesType>;
    handleSubmit: UseFormHandleSubmit<DonationFormValuesType>;
    onSubmit: ()=> void;
    hasFirstNameError: boolean;
    firstNameErrorMessage?: string;
    hasLastNameError: boolean;
    lastNameErrorMessage?: string;
    hasEmailError: boolean;
    emailErrorMessage?: string;
    hasPhoneError: boolean;
    phoneErrorMessage?: string;
    integrity: DonorContactSectionCopy["integrity"];

}