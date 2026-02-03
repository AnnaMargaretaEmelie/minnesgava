import { Recipient } from "@/data/recipients.mock";

export type RecipientSectionProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filteredRecipients: Recipient[];
  selectedRecipient: Recipient | null;
  selectedRecipientId: string | null;
  onSelectRecipientId: (id: string) => void;
  hasError?: boolean;
  errorMessage?: string;
};