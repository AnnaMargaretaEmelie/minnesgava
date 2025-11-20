"use client";

//logik och state
import { MOCK_RECIPIENTS, Recipient } from "@/data/recipients.mock";
import { useState } from "react";
import { MEMORIAL_PAGE_IMAGES } from "@/data/memorialPageImages";
import { RecipientSection } from "../RecipientSection/RecipientSection";
import { ImageSection } from "../ImageSection/ImageSection";
import { StepPrimaryButton } from "../../StepPrimaryButton/StepPrimaryButton";
import { MemorialPageStepProps } from "./MemorialPageStep.types";

export default function MemorialPageStep({
  onComplete,
}: MemorialPageStepProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState<Recipient | null>(
    null
  );
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  const canGoNext = selectedRecipient !== null && selectedImageId !== null;

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
    setSelectedRecipient(recipient);
  }

  function handleSelectImage(imageId: string) {
    setSelectedImageId(imageId);
  }

  function handleNext() {
    const isComplete = selectedRecipient && selectedImageId;
    if (!isComplete) {
      console.warn("Steg 1 är inte komplett");
      return;
    }

    const memorialPageStepData = {
      recipientId: selectedRecipient.id,
      imageId: selectedImageId,
    };

    onComplete(memorialPageStepData);
    console.log("Memorial Page Step complete", memorialPageStepData);
  }

  return (
    <>
      <RecipientSection
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filteredRecipients={filteredRecipients}
        selectedRecipient={selectedRecipient}
        onSelectRecipient={handleSelectRecipient}
      />

      <ImageSection
        images={MEMORIAL_PAGE_IMAGES}
        selectedImageId={selectedImageId}
        onSelectImage={handleSelectImage}
        canGoNext={canGoNext}
        onNext={handleNext}
      />
      <StepPrimaryButton
        label="Välj belopp"
        onClick={handleNext}
        disabled={!canGoNext}
      ></StepPrimaryButton>
    </>
  );
}
