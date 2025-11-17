"use client";

//logik och state
import { MOCK_RECIPIENTS, Recipient } from "@/data/recipients.mock";
import { useState } from "react";
import Step1ImagePicker from "./Step1ImagePicker";
import { STEP1_IMAGES } from "@/data/step1Images";
import { Step1RecipientSection } from "./Step1RecipientSection";

type Step1Contentprops = {
  onComplete?: (data: { recipientId: string; imageId: string }) => void;
};

export default function Step1Content({ onComplete }: Step1Contentprops) {
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

  function handleSearchChange(value: string) {
    setSearchTerm(value);
  }

  function handleSelectRecipient(recipient: Recipient) {
    setSelectedRecipient(recipient);
  }

  function handleSelectImage(imageId: string) {
    setSelectedImageId(imageId);
  }

  function handleNext() {
    if (!canGoNext || !selectedRecipient || !selectedImageId) return;

    const step1Data = {
      recipientId: selectedRecipient.id,
      imageId: selectedImageId,
    };
    onComplete?.(step1Data);
    console.log("Step 1 complete", step1Data);
  }

  return (
    <>
      <Step1RecipientSection
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filteredRecipients={filteredRecipients}
        selectedRecipient={selectedRecipient}
        onSelectRecipient={handleSelectRecipient}
      />
      <Step1ImagePicker
        images={STEP1_IMAGES}
        selectedImageId={selectedImageId}
        onSelectImage={handleSelectImage}
      />
      <button type="button" onClick={handleNext} disabled={!canGoNext}>
        Välj belopp
      </button>
    </>
  );
}
