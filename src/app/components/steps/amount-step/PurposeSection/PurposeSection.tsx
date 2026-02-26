import type { PurposeSectionProps } from "./PurposeSection.types";
import { AccordionDropdown } from "@/app/components/shared/AccordionDropdown/AccordionDropdown";
import styles from "../AmountStep/AmountStep.module.scss";
import clsx from "clsx";
import { PURPOSE_OPTIONS } from "@/app/memorial-donation/sections/AmountSection/amountPurpose.options";
import { DEFAULT_PURPOSE } from "@/app/memorial-donation/sections/AmountSection/amountPurpose.options";

export function PurposeSection({ register }: PurposeSectionProps) {
  return (
    <div>
      <h3 className={styles.purposeTitle}>Ändamål</h3>
      <p className={styles.purposeIntro}>
        Din gåva används till den bästa hjärnforskningen.
      </p>
      <div className={styles.purposeControl}>
        <AccordionDropdown label="Välj diagnos">
          <fieldset className={styles.purposeContent}>
            <legend className="u-visuallyHidden">Välj diagnos</legend>
            {PURPOSE_OPTIONS.map((option) => (
              <label
                key={option.value}
                className={clsx(
                  styles.purposeOption,
                  option.value === DEFAULT_PURPOSE &&
                    styles.purposeOptionDefault,
                )}
              >
                <input
                  type="radio"
                  value={option.value}
                  {...register("amount.purpose")}
                />{" "}
                <span>{option.label}</span>{" "}
              </label>
            ))}{" "}
          </fieldset>
        </AccordionDropdown>
      </div>
    </div>
  );
}
