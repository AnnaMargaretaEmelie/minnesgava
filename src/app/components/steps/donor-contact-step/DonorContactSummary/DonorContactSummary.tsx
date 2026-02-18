import { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types";
import { useWatch, useFormContext } from "react-hook-form";

export function DonorContactSummary() {
  const { control } = useFormContext<DonationFormValuesType>();
  const donor = useWatch({ control, name: "donor" });

  const nameText =
    `${String(donor?.firstName ?? "").trim()} ${String(donor?.lastName ?? "").trim()}`.trim() ||
    "-";
  const adressText = String(donor?.adress ?? "").trim() || "-";
  const postalText =
    `${String(donor?.postalCode ?? "").trim()} ${String(donor?.postalArea ?? "").trim()}`.trim() ||
    "-";
  const emailText = String(donor?.email ?? "").trim() || "-";
  const phoneText = String(donor?.phone ?? "").trim() || "-";

  return (
    <div>
      <p>Namn: {nameText}</p>
      <p> Adress: {adressText}</p>
      <p> Postadress: {postalText}</p>
      <p>Mejladress: {emailText} </p>
      <p>Telefon: {phoneText} </p>
    </div>
  );
}
