"use client";

import { useAccordion } from "./accordion";
import * as Accordion from "@radix-ui/react-accordion";

type AccordionItemProps = {
  value: string;
  title: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
};

export function AccordionItem({
  value,
  title,
  children,
  className,
  triggerClassName,
  contentClassName,
}: AccordionItemProps) {
  const ctx = useAccordion?.();
  const open = ctx ? ctx.isOpen(value) : undefined;

  const status = ctx?.getStatus(value) ?? "locked";
  const triggerIsDisabled = status !== "complete";

  return (
    <Accordion.Item
      value={value}
      className={`accordion__item ${className ?? ""}`}
      data-open={open}
      data-step-status={status}
      data-state={open ? "open" : "closed"}
    >
      <Accordion.Trigger
        className={`accordion__trigger ${triggerClassName ?? ""}`}
        disabled={triggerIsDisabled}
        onClick={(e) => {
          if (triggerIsDisabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          ctx?.toggle(value);
        }}
      >
        <h2>{title}</h2>
        <span className="accordion__icon" />
      </Accordion.Trigger>

      <Accordion.Content
        className={`accordion__content ${contentClassName ?? ""}`}
      >
        <div className="accordion__content-inner">{children}</div>
      </Accordion.Content>
      {/* Rendera sammanfattning här */}
      {<div className="accordion__summary"></div>}
    </Accordion.Item>
  );
}
