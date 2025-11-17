//input + dropdown
import type { Recipient } from "@/data/recipients.mock";

type RecipientSearchProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  results: Recipient[];
};

export default function RecipientSearch({
  searchTerm,
  onSearchChange,
  results,
}: RecipientSearchProps) {
  return (
    <div>
      {/*input*/}
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Sök efter namn"
      />

      {/* Dropdown / resultatlista */}
      {results.length > 0 && (
        <ul>
          {results.map((recipient) => (
            <li key={recipient.id}>
              {recipient.firstName} {recipient.lastName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
