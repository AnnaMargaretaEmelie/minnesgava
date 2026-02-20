import { useState, useRef } from "react";
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
  focusOnOpen,
}: AccordionDropdownProps) {
  const innerContentRef = useRef<HTMLDivElement | null>(null);

  const [accordionValue, setAccordionValue] = useState<string>(
    defaultOpen ? ITEM_VALUE : "",
  );

  const open = accordionValue === ITEM_VALUE;
  const handleValueChange = (nextValue: string) => {
    const isOpening = nextValue === ITEM_VALUE && !open;
    setAccordionValue(nextValue);

    if (!focusOnOpen || !isOpening) return;

    requestAnimationFrame(() => {
      const root = innerContentRef.current;
      if (!root) return;

      const first = root.querySelector<HTMLElement>(
        'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])',
      );
      first?.focus();
    });
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
          <div ref={innerContentRef} className={styles.contentInner}>
            {children}
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
