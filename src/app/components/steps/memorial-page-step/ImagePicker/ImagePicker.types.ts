import type { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types";
import type { UseFormRegister } from "react-hook-form";

export type ImageItem = {
  id: string;
  src: string;
  alt: string;
};

export type ImagePickerProps = {
  images: ImageItem[];
  register: UseFormRegister<DonationFormValuesType>
};