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
  onFocusReady,
}: RecipientSectionProps) {
  return (
    <>
      <RecipientSearch
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        results={filteredRecipients}
        register={register}
        control={control}
        onFocusReady={onFocusReady}
        hasError={hasError}
      />
      {hasError && (
        <p id="recipient-error" role="alert" className="u-errorText">
          {errorMessage ?? "Välj en mottagare"}
        </p>
      )}

      {selectedRecipient && <RecipientInfo recipient={selectedRecipient} />}
    </>
  );
}
