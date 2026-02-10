import { useWatch } from "react-hook-form";
import { GreetingSectionProps } from "./GreetingSection.types";
import clsx from "clsx";
import styles from "./GreetingSection.module.scss";

const MAX_LINES = 9;

export function GreetingSection({
  register,
  control,
  hasError,
  errorMessage,
}: GreetingSectionProps) {
  const greeting = useWatch({ control, name: "memorialPage.greeting" });
  const text = String(greeting ?? "").trim();
  const lineCount = text.length === 0 ? 0 : text.split("\n").length;
  return (
    <section className={styles.section}>
      <label htmlFor="greeting" className={styles.label}>
        Skriv en hälsning och ditt/era namn*
      </label>
      <div className={styles.textareaWrap}>
        <textarea
          id="greeting"
          rows={6}
          placeholder="T ex Vila i frid, hälsningar från Anna Larsson"
          className={clsx(styles.textarea, {
            [styles.textareaError]: hasError,
          })}
          {...register("memorialPage.greeting", {
            required: "Du måste skriva något här (ange mellan 1-9 rader)",
            validate: (value) => {
              const raw = String(value ?? "");
              const trimmed = raw.trim();
              if (trimmed.length === 0) {
                return "Du måste skriva något här (ange mellan 1-9 rader)";
              }
              const count = raw.trimEnd().split("\n").length;
              if (count > MAX_LINES) {
                return `Högst ${MAX_LINES} rader`;
              }
              return true;
            },
          })}
          onKeyDown={(event) => {
            if (event.key !== "Enter") return;

            if (lineCount >= MAX_LINES) {
              event.preventDefault();
            }
          }}
        />
        <div className={styles.meta}>
          <span className={styles.counter}>
            {lineCount}/{MAX_LINES}
          </span>
        </div>
      </div>
      {hasError && (
        <p className="u-errorText">{errorMessage ?? "Skriv ett meddelande"}</p>
      )}
    </section>
  );
}
