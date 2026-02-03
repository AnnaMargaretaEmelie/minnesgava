import type { Recipient } from "@/data/recipients.mock";

export type RecipientSearchProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  results: Recipient[];
  selectedRecipientId: string | null;
  onSelectRecipientId: (id: string) => void;
};