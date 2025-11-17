"use client";

//logik och state
import { MOCK_RECIPIENTS, Recipient } from "@/data/recipients.mock";
import { useState } from "react";
import RecipientSearch from "./Step1RecipientSearch";

export default function Step1Content() {
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <RecipientSearch
      searchTerm={searchTerm}
      onSearchChange={handleSearchChange}
      results={filteredRecipients}
    />
  );
}
