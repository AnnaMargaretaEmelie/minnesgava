import { useWatch, useFormContext } from "react-hook-form";

export function DonorConactSummary() {
  const { control } = useFormContext();

  const firstName = useWatch({ control, name: "donor.firstName" });
  const lastName = useWatch({ control, name: "donor.lastName" });
  const adress = useWatch({ control, name: "donor.adress" });
  const postalCode = useWatch({ control, name: "donor.postalCode" });
  const postalArea = useWatch({ control, name: "donor.postalArea" });
  const email = useWatch({ control, name: "donor.email" });
  const phone = useWatch({ control, name: "donor.phone" });

  const nameText =
    `${String(firstName ?? "").trim()} ${String(lastName ?? "").trim()}`.trim() ||
    "-";
  const adressText = String(adress ?? "").trim() || "-";
  const postalText =
    `${String(postalCode ?? "").trim()} ${String(postalArea ?? "").trim()}`.trim() ||
    "-";
  const emailText = String(email ?? "").trim() || "-";
  const phoneText = String(phone ?? "").trim() || "-";

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
