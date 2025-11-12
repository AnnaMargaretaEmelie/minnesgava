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
      className={className}
      data-open={open}
      data-step-status={status}
      data-state={open ? "open" : "closed"}
    >
      <Accordion.Trigger
        className={triggerClassName}
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
      </Accordion.Trigger>

      <Accordion.Content className={contentClassName}>
        {children}
      </Accordion.Content>
      {/* Rendera sammanfattning här */}
      {<div className="accordion__summary"></div>}
    </Accordion.Item>
  );
}
