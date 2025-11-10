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
  disabled,
  children,
  className,
  triggerClassName,
  contentClassName,
}: AccordionItemProps) {
  const ctx = useAccordion?.();
  const open = ctx ? ctx.isOpen(value) : undefined;

  return (
    <Accordion.Item
      value={value}
      disabled={disabled}
      className={className}
      data-open={open}
    >
      <Accordion.Trigger className={triggerClassName}>
        <h2>{title}</h2>
      </Accordion.Trigger>

      <Accordion.Content className={contentClassName}>
        {children}
      </Accordion.Content>
    </Accordion.Item>
  );
}
