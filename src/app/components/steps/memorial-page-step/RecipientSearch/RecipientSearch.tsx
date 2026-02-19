import { useCallback, useEffect, useRef } from "react";
import { useWatch } from "react-hook-form";
import type { RecipientSearchProps } from "./RecipientSearch.types";
import styles from "./RecipientSearch.module.scss";

export default function RecipientSearch({
  searchTerm,
  onSearchChange,
  results,
  register,
  control,
  onFocusReady,
}: RecipientSearchProps) {
  const selectedRecipientId = useWatch({
    control,
    name: "memorialPage.recipientId",
  });
  const isOpen = searchTerm.trim() !== "" && results.length > 0;
  const inputRef = useRef<HTMLInputElement>(null);
  const focusInput = useCallback(() => inputRef.current?.focus(), []);
  useEffect(() => {
    onFocusReady?.(focusInput);
  }, [onFocusReady, focusInput]);

  const listId = "recipient-results";
  const closeAndFocus = () => {
    onSearchChange("");
    requestAnimationFrame(() => inputRef.current?.focus());
  };
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
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={isOpen}
        aria-controls={isOpen ? listId : undefined}
        aria-haspopup="listbox"
        aria-describedby="recipient-search-hint"
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
      <p id="recipient-search-hint" className="u-visuallyHidden">
        Skriv för att söka. Använd nedåtpil för att gå till resultaten. Använd
        piltangenter för att navigera och mellanslag eller enter för att välja.
        Escape stänger listan.
      </p>

      {isOpen && (
        <div
          className={styles.list}
          role="listbox"
          id={listId}
          aria-label="Sökresultat mottagare"
        >
          {results.map((recipient) => {
            const radio = register("memorialPage.recipientId");
            return (
              <div
                key={recipient.id}
                className={styles.listItem}
                role="option"
                aria-selected={selectedRecipientId === recipient.id}
              >
                <input
                  type="radio"
                  value={recipient.id}
                  id={recipient.id}
                  {...radio}
                  onChange={(event) => {
                    radio.onChange(event);
                    closeAndFocus();
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      event.preventDefault();
                      closeAndFocus();
                      return;
                    }

                    if (event.key === "Enter") {
                      event.preventDefault();
                      event.currentTarget.click();
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
