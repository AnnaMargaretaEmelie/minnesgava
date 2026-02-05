"use client";

import type { RecipientSectionProps } from "./RecipientSection.types";
import RecipientSearch from "../RecipientSearch/RecipientSearch";
import RecipientInfo from "../RecipientInfo/RecipientInfo";

export function RecipientSection({
  searchTerm,
  onSearchChange,
  filteredRecipients,
  selectedRecipient,
  hasError,
  register,
  errorMessage,
}: RecipientSectionProps) {
  return (
    <>
      <RecipientSearch
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        results={filteredRecipients}
        register={register}
      />
      {hasError && (
        <p className="u-errorText">{errorMessage ?? "Välj en mottagare"}</p>
      )}

      {selectedRecipient && <RecipientInfo recipient={selectedRecipient} />}
    </>
  );
}
