import type { ImageItem } from "../ImagePicker/ImagePicker.types";
import type { UseFormRegister } from "react-hook-form";
import type { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types";

export type ImageSectionProps = {
  images: ImageItem[];
  register: UseFormRegister<DonationFormValuesType>;
  canGoNext?: boolean;
  onNext?: () => void;
};