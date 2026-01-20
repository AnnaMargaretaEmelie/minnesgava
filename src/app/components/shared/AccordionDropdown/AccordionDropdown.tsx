import { useState } from "react";
import styles from "./AccordionDropdown.module.scss";
import type { AccordionDropdownType } from "./AccordionDropdown.types";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronIcon } from "../icons/ChevronIcon";

export function AccordionDropdown({
  defaultOpen,
  labelOpen,
  label,
  children,
  className,
  contentClassName,
}: AccordionDropdownType) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  const ITEM_VALUE = "dropdown";
  const value = open ? ITEM_VALUE : undefined;
  const handleValueChange = (nextValue: string) => {
    setOpen(nextValue === ITEM_VALUE);
  };
  const triggerLabel = open && labelOpen ? labelOpen : label;
  return (
    <Accordion.Root
      className={className}
      type="single"
      value={value}
      onValueChange={handleValueChange}
      collapsible
    >
      <Accordion.Item value={ITEM_VALUE}>
        <Accordion.Trigger className={styles.trigger}>
          <span>{triggerLabel}</span>
          <ChevronIcon className={styles.chevron}></ChevronIcon>
        </Accordion.Trigger>
        <Accordion.Content
          className={`${styles.content}${contentClassName ?? ""}`}
        >
          <div className={styles.contentInner}>{children}</div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
