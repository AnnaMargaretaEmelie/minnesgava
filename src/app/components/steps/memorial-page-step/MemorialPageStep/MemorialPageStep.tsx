"use client";

//logik och state
import { MOCK_RECIPIENTS, Recipient } from "@/data/recipients.mock";
import { useState } from "react";
import { MEMORIAL_PAGE_IMAGES } from "@/data/memorialPageImages";
import { RecipientSection } from "../RecipientSection/RecipientSection";
import { ImageSection } from "../ImageSection/ImageSection";
import { StepPrimaryButton } from "../../../StepPrimaryButton/StepPrimaryButton";
import { MemorialPageStepProps } from "./MemorialPageStep.types";
import { useAccordion } from "@/app/components/accordion/Accordion/Accordion";
import { useFormContext, useWatch } from "react-hook-form";
import type { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types";
import styles from "./MemorialPageStep.module.scss";

export default function MemorialPageStep({
  onComplete,
}: MemorialPageStepProps) {
  const { setValue, control } = useFormContext<DonationFormValuesType>();
  const recipientId = useWatch({ control, name: "memorialPage.recipientId" });
  const imageId = useWatch({ control, name: "memorialPage.imageId" });
  const selectedRecipient = recipientId
    ? (MOCK_RECIPIENTS.find((r) => r.id === recipientId) ?? null)
    : null;

  const [searchTerm, setSearchTerm] = useState("");

  const accordion = useAccordion();

  const canGoNext = selectedRecipient !== null && Boolean(imageId);

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

  function handleSelectRecipient(recipient: Recipient) {
    setValue("memorialPage.recipientId", recipient.id, {
      shouldDirty: true,
      shouldValidate: true,
    });
  }

  function handleSelectImage(imageId: string) {
    setValue("memorialPage.imageId", imageId, {
      shouldDirty: true,
      shouldValidate: true,
    });
  }

  function handleNext() {
    if (!selectedRecipient || !imageId) {
      console.warn("Steg 1 är inte komplett");
      return;
    }

    const fullName = `${selectedRecipient.firstName} ${selectedRecipient.lastName}`;
    const summary = `${fullName}, ${selectedRecipient.city}`;

    const memorialPageStepData = {
      recipientId: selectedRecipient.id,
      imageId,
      summary,
    };

    onComplete(memorialPageStepData);
    accordion?.goNext("memorial-card-step");
    console.log("Memorial Page Step complete", memorialPageStepData);
  }

  return (
    <div className={styles.stepWrapper}>
      <RecipientSection
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filteredRecipients={filteredRecipients}
        selectedRecipient={selectedRecipient}
        onSelectRecipient={handleSelectRecipient}
      />

      <ImageSection
        images={MEMORIAL_PAGE_IMAGES}
        selectedImageId={imageId ?? null}
        onSelectImage={handleSelectImage}
        canGoNext={canGoNext}
        onNext={handleNext}
      />
      <StepPrimaryButton
        label="Välj belopp"
        onClick={handleNext}
        disabled={!canGoNext}
      ></StepPrimaryButton>
    </div>
  );
}
