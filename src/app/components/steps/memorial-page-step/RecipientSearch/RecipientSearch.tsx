//input + dropdown
import type { RecipientSearchProps } from "./RecipientSearch.types";
import styles from "./RecipientSearch.module.scss";

export default function RecipientSearch({
  searchTerm,
  onSearchChange,
  results,
  selectedRecipientId,
  onSelectRecipientId,
}: RecipientSearchProps) {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Sök efter namn"
      />

      {searchTerm.trim() !== "" && results.length > 0 && (
        <div className={styles.list}>
          {results.map((recipient) => (
            <div key={recipient.id} className={styles.listItem}>
              <input
                type="radio"
                id={recipient.id}
                name="recipient"
                value={recipient.id}
                checked={selectedRecipientId === recipient.id}
                onChange={() => {
                  onSelectRecipientId(recipient.id);
                  onSearchChange("");
                }}
              />
              <label htmlFor={recipient.id}>
                {recipient.firstName} {recipient.lastName} - {recipient.city}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
