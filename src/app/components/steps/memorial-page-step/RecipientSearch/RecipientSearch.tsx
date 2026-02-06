import { useRef } from "react";
import type { RecipientSearchProps } from "./RecipientSearch.types";
import styles from "./RecipientSearch.module.scss";

export default function RecipientSearch({
  searchTerm,
  onSearchChange,
  results,
  register,
}: RecipientSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = "recipient-results";
  return (
    <div className={styles.wrapper}>
      <label htmlFor="recipient-search" className="u-visuallyHidden">
        Sök mottagare
      </label>
      <input
        ref={inputRef}
        className={styles.input}
        name="recipient-search"
        id="recipient-search"
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Sök efter namn"
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") {
            const firstRadio = document.querySelector<HTMLInputElement>(
              `#${listId} input[type="radio"]`,
            );
            if (firstRadio) {
              event.preventDefault();
              firstRadio.focus();
            }
            return;
          }
          if (event.key === "Escape") {
            event.preventDefault();
            onSearchChange("");
          }
        }}
      />

      {searchTerm.trim() !== "" && results.length > 0 && (
        <div className={styles.list} id={listId}>
          {results.map((recipient) => {
            const radio = register("memorialPage.recipientId");
            return (
              <div key={recipient.id} className={styles.listItem}>
                <input
                  type="radio"
                  value={recipient.id}
                  id={recipient.id}
                  {...radio}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      event.preventDefault();
                      onSearchChange("");
                      requestAnimationFrame(() => {
                        inputRef.current?.focus();
                      });
                      return;
                    }
                    if (event.key !== "ArrowDown" && event.key !== "ArrowUp")
                      return;
                    event.preventDefault();
                    const radios = Array.from(
                      document.querySelectorAll<HTMLInputElement>(
                        `#${listId} input[type="radio"]`,
                      ),
                    );
                    const currentIndex = radios.findIndex(
                      (r) => r.id === recipient.id,
                    );
                    if (currentIndex === -1) return;

                    const nextIndex =
                      event.key === "ArrowDown"
                        ? currentIndex + 1
                        : currentIndex - 1;

                    const next = radios[nextIndex];
                    if (next) next.focus();
                  }}
                  onChange={(event) => {
                    radio.onChange(event);
                    onSearchChange("");

                    requestAnimationFrame(() => {
                      inputRef.current?.focus();
                    });
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
