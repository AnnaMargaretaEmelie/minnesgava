"use client";

import { Recipient } from "@/data/recipients.mock";
import RecipientSearch from "./Step1RecipientSearch";
import Step1RecipientInfo from "./Step1RecipientInfo";

type Step1RecipientSectionProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filteredRecipients: Recipient[];
  selectedRecipient: Recipient | null;
  onSelectRecipient: (recipient: Recipient) => void;
};

export function Step1RecipientSection({
  searchTerm,
  onSearchChange,
  filteredRecipients,
  selectedRecipient,
  onSelectRecipient,
}: Step1RecipientSectionProps) {
  return (
    <>
      <RecipientSearch
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        results={filteredRecipients}
        onSelectRecipient={onSelectRecipient}
      />
      {selectedRecipient && (
        <Step1RecipientInfo recipient={selectedRecipient} />
      )}
    </>
  );
}
