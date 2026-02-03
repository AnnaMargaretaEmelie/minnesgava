"use client";

//logik och state
import { MOCK_RECIPIENTS, Recipient } from "@/data/recipients.mock";
import { useState, useEffect } from "react";
import { MEMORIAL_PAGE_IMAGES } from "@/data/memorialPageImages";
import { RecipientSection } from "../RecipientSection/RecipientSection";
import { ImageSection } from "../ImageSection/ImageSection";
import { StepPrimaryButton } from "../../../StepPrimaryButton/StepPrimaryButton";
import { MemorialPageStepProps } from "./MemorialPageStep.types";
import { useFormContext, useWatch, Controller } from "react-hook-form";
import type { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types";
import styles from "./MemorialPageStep.module.scss";

export default function MemorialPageStep({
  onComplete,
}: MemorialPageStepProps) {
  const { setValue, control, trigger } =
    useFormContext<DonationFormValuesType>();
  const recipientId = useWatch({ control, name: "memorialPage.recipientId" });
  const imageId = useWatch({ control, name: "memorialPage.imageId" });

  const selectedRecipient = recipientId
    ? (MOCK_RECIPIENTS.find((r) => r.id === recipientId) ?? null)
    : null;

  const [searchTerm, setSearchTerm] = useState("");

  const canGoNext = selectedRecipient !== null;

  const filteredRecipients: Recipient[] =
    searchTerm.trim().length === 0
      ? []
      : MOCK_RECIPIENTS.filter((recipient) => {
          const query = searchTerm.toLocaleLowerCase();

          return (
            recipient.firstName.toLowerCase().includes(query) ||
            recipient.lastName.toLowerCase().includes(query)
          );
        });
  useEffect(() => {
    if (!imageId && MEMORIAL_PAGE_IMAGES.length > 0) {
      setValue("memorialPage.imageId", MEMORIAL_PAGE_IMAGES[0].id, {
        shouldDirty: false,
        shouldValidate: false,
      });
    }
  }, [imageId, setValue]);

  function handleSelectImage(imageId: string) {
    setValue("memorialPage.imageId", imageId, {
      shouldDirty: true,
      shouldValidate: true,
    });
  }

  async function handleNext() {
    const isValid = await trigger("memorialPage.recipientId", {
      shouldFocus: true,
    });
    if (!isValid) return;

    if (!selectedRecipient || !imageId) return;

    const fullName = `${selectedRecipient.firstName} ${selectedRecipient.lastName}`;
    const summary = `${fullName}, ${selectedRecipient.city}`;

    onComplete({
      recipientId: selectedRecipient.id,
      imageId,
      summary,
    });
  }

  return (
    <div className={styles.stepWrapper}>
      <Controller
        name="memorialPage.recipientId"
        control={control}
        rules={{ required: "Välj en mottagare" }}
        render={({ field, fieldState }) => (
          <>
            <input
              type="hidden"
              name={field.name}
              value={(field.value ?? "") as string}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
            />

            <RecipientSection
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              filteredRecipients={filteredRecipients}
              selectedRecipient={selectedRecipient}
              onSelectRecipient={(recipient) => {
                field.onChange(recipient.id);
                field.onBlur();
              }}
              hasError={Boolean(fieldState.error)}
              errorMessage={fieldState.error?.message}
            />
          </>
        )}
      />

      <ImageSection
        images={MEMORIAL_PAGE_IMAGES}
        selectedImageId={imageId ?? null}
        onSelectImage={handleSelectImage}
        canGoNext={canGoNext}
        onNext={handleNext}
      />
      <StepPrimaryButton
        type="button"
        label="Välj belopp"
        onClick={handleNext}
      ></StepPrimaryButton>
    </div>
  );
}
