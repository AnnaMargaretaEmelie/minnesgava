import { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types";
import type { Recipient } from "@/data/recipients.mock";
import type { UseFormRegister } from "react-hook-form";

export type RecipientSearchProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  results: Recipient[];
  register: UseFormRegister<DonationFormValuesType>;
};