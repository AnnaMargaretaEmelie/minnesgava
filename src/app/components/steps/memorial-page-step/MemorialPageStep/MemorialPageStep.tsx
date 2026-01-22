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
import styles from "./MemorialPageStep.module.scss";

export default function MemorialPageStep({
  onComplete,
}: MemorialPageStepProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState<Recipient | null>(
    null,
  );
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  const accordion = useAccordion();

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
    const fullName = `${selectedRecipient.firstName} ${selectedRecipient.lastName}`;
    const summary = `${fullName}, ${selectedRecipient.city}`;

    const memorialPageStepData = {
      recipientId: selectedRecipient.id,
      imageId: selectedImageId,
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
    </div>
  );
}
