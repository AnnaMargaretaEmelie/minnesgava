import { useState } from "react";
import styles from "./AccordionDropdown.module.scss";
import type { AccordionDropdownProps } from "./AccordionDropdown.types";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronIcon } from "../icons/ChevronIcon";

const ITEM_VALUE = "dropdown";

export function AccordionDropdown({
  defaultOpen,
  labelOpen,
  label,
  children,
  className,
  contentClassName,
  triggerClassName,
}: AccordionDropdownProps) {
  const [accordionValue, setAccordionValue] = useState<string>(
    defaultOpen ? ITEM_VALUE : "",
  );

  const open = accordionValue === ITEM_VALUE;
  const handleValueChange = (nextValue: string) => {
    setAccordionValue(nextValue);
  };
  const triggerLabel = open && labelOpen ? labelOpen : label;
  return (
    <Accordion.Root
      className={`${styles.root} ${className ?? ""}`}
      type="single"
      value={accordionValue}
      onValueChange={handleValueChange}
      collapsible
    >
      <Accordion.Item value={ITEM_VALUE}>
        <Accordion.Trigger
          className={`${styles.trigger} ${triggerClassName ?? ""}`}
        >
          <span>
            <strong>{triggerLabel}</strong>
          </span>
          <ChevronIcon className={styles.chevron}></ChevronIcon>
        </Accordion.Trigger>
        <Accordion.Content
          className={`${styles.content} ${contentClassName ?? ""}`}
        >
          <div className={styles.contentInner}>{children}</div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
