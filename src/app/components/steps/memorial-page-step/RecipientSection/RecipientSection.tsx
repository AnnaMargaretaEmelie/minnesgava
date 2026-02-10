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
  control,
  errorMessage,
}: RecipientSectionProps) {
  return (
    <>
      <RecipientSearch
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        results={filteredRecipients}
        register={register}
        control={control}
      />
      {hasError && (
        <p className="u-errorText">{errorMessage ?? "Välj en mottagare"}</p>
      )}

      {selectedRecipient && <RecipientInfo recipient={selectedRecipient} />}
    </>
  );
}
