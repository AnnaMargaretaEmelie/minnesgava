import { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types";
import { Recipient } from "@/data/recipients.mock";
import { UseFormRegister, Control } from "react-hook-form";

export type RecipientSectionProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filteredRecipients: Recipient[];
  selectedRecipient: Recipient | null;
  register: UseFormRegister<DonationFormValuesType>;
  control: Control<DonationFormValuesType>;
  hasError?: boolean;
  errorMessage?: string;
  onFocusReady?: (focus: () => void) => void;

};