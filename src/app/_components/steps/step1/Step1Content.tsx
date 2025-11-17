"use client";

//logik och state
import { MOCK_RECIPIENTS, Recipient } from "@/data/recipients.mock";
import { useState } from "react";
import RecipientSearch from "./Step1RecipientSearch";
import Step1RecipientInfo from "./Step1RecipientInfo";

export default function Step1Content() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState<Recipient | null>(
    null
  );

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

  return (
    <>
      <RecipientSearch
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        results={filteredRecipients}
        onSelectRecipient={handleSelectRecipient}
      />
      {selectedRecipient && (
        <Step1RecipientInfo recipient={selectedRecipient} />
      )}
    </>
  );
}
