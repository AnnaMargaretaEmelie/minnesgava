//input + dropdown
import type { RecipientSearchProps } from "./RecipientSearch.types";
import styles from "./RecipientSearch.module.scss";

export default function RecipientSearch({
  searchTerm,
  onSearchChange,
  results,
  onSelectRecipient,
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

      {results.length > 0 && (
        <ul className={styles.list}>
          {results.map((recipient) => (
            <li
              key={recipient.id}
              className={styles.listItem}
              onClick={() => onSelectRecipient(recipient)}
            >
              {recipient.firstName} {recipient.lastName} - {recipient.city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
