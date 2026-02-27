import type { AmountOptionsProps } from "./AmountOptions.types";
import styles from "./AmountOptions.module.scss";
import clsx from "clsx";

export function AmountOptions({
  preset,
  selectPreset,
  selectCustom,
  register,
  customAmountHasError,
  customAmountErrorMessage,
}: AmountOptionsProps) {
  console.log("preset", preset);
  return (
    <div className={styles.amount}>
      <p id="amount-legend" className="u-visuallyHidden">
        Välj belopp
      </p>
      <div
        role="radiogroup"
        aria-labelledby="amount-legend"
        className={styles.options}
      >
        <button
          role="radio"
          aria-checked={preset === "1000"}
          type="button"
          onClick={() => selectPreset(1000, "1000")}
          className={clsx(
            styles.option,
            preset === "1000" && styles.optionSelected,
          )}
        >
          1000 kr
        </button>
        <button
          role="radio"
          aria-checked={preset === "500"}
          type="button"
          onClick={() => selectPreset(500, "500")}
          className={clsx(
            styles.option,
            preset === "500" && styles.optionSelected,
          )}
        >
          500 kr
        </button>
        <button
          role="radio"
          aria-checked={preset === "100"}
          type="button"
          onClick={() => selectPreset(100, "100")}
          className={clsx(
            styles.option,
            preset === "100" && styles.optionSelected,
          )}
        >
          100 kr
        </button>
        <button
          role="radio"
          aria-checked={preset === "custom"}
          type="button"
          onClick={selectCustom}
          className={clsx(
            styles.option,
            preset === "custom" && styles.optionSelected,
          )}
        >
          Eget belopp
        </button>
      </div>

      <div className={styles.customAmount} hidden={preset !== "custom"}>
        <label htmlFor="customAmount" className={styles.customLabel}>
          Eget belopp i kronor
        </label>
        <div className={styles.customInputRow}>
          <input
            id="customAmount"
            inputMode="numeric"
            min={100}
            step={1}
            type="number"
            aria-invalid={customAmountHasError}
            aria-describedby={
              customAmountHasError
                ? "custom-amount-hint custom-amount-error"
                : "custom-amount-hint"
            }
            className={clsx(
              styles.customInput,
              customAmountHasError && styles.inputError,
            )}
            placeholder="T ex 150"
            {...register("amount.value", {
              valueAsNumber: true,
              validate: (value) => {
                if (preset !== "custom") return true;
                const msg = "Endast siffror och minsta belopp 100 kr";
                if (!Number.isFinite(value)) return msg;
                if (value == null) return msg;
                if (value < 100) return msg;
                return true;
              },
            })}
          />
          <p id="custom-amount-hint" className="u-visuallyHidden">
            Ange belopp i kronor. Minsta belopp är 100 kr. Endast siffror.
          </p>
        </div>
        {customAmountHasError && (
          <p id="custom-amount-error" role="alert" className={styles.error}>
            {customAmountErrorMessage}
          </p>
        )}
      </div>
    </div>
  );
}
