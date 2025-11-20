import type { Recipient } from "@/data/recipients.mock";

export type RecipientSearchProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  results: Recipient[];
  onSelectRecipient: (recipient: Recipient) => void;
};