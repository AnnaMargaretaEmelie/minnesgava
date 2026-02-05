//input + dropdown
import type { RecipientSearchProps } from "./RecipientSearch.types";
import styles from "./RecipientSearch.module.scss";

export default function RecipientSearch({
  searchTerm,
  onSearchChange,
  results,
  register,
}: RecipientSearchProps) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="recipient-search" className="u-visuallyHidden">
        Sök mottagare
      </label>
      <input
        className={styles.input}
        name="recipient-search"
        id="recipient-search"
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Sök efter namn"
      />

      {searchTerm.trim() !== "" && results.length > 0 && (
        <div className={styles.list}>
          {results.map((recipient) => {
            const radio = register("memorialPage.recipientId");
            return (
              <div key={recipient.id} className={styles.listItem}>
                <input
                  type="radio"
                  value={recipient.id}
                  id={recipient.id}
                  {...radio}
                  onChange={(event) => {
                    radio.onChange(event);
                    // onSearchChange("");
                  }}
                />
                <label htmlFor={recipient.id}>
                  {recipient.firstName} {recipient.lastName} - {recipient.city}
                </label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
