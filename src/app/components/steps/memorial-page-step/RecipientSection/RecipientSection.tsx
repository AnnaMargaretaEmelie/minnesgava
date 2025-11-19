"use client";

import type { RecipientSectionProps } from "./RecipientSection.types";
import RecipientSearch from "../Step1RecipientSearch";
import Step1RecipientInfo from "../Step1RecipientInfo";
export function RecipientSection({
  searchTerm,
  onSearchChange,
  filteredRecipients,
  selectedRecipient,
  onSelectRecipient,
}: RecipientSectionProps) {
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
