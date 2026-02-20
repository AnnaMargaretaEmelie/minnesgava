"use client";

import { useAccordion } from "../Accordion/Accordion";
import styles from "./AccordionItem.module.scss";
import * as Accordion from "@radix-ui/react-accordion";
import { CheckCircleIcon } from "../../shared/icons/CheckCircleIcon";
import { useRef, useEffect } from "react";

type AccordionItemProps = {
  value: string;
  title: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
  summary?: React.ReactNode;
};

export function AccordionItem({
  value,
  title,
  children,
  className,
  triggerClassName,
  contentClassName,
  summary,
}: AccordionItemProps) {
  const ctx = useAccordion();
  const open = ctx.isOpen(value);
  const status = ctx.getStatus(value) ?? "locked";
  const triggerIsDisabled = status === "locked";
  const headerRef = useRef<HTMLDivElement | null>(null);
  const contentInnerRef = useRef<HTMLDivElement | null>(null);
  const shouldFocusContentRef = useRef(false);
  const { focusOnOpenId, clearFocusOnOpen } = ctx;

  useEffect(() => {
    if (!open) return;
    const shouldFocus =
      shouldFocusContentRef.current || focusOnOpenId === value;
    if (!shouldFocus) return;
    shouldFocusContentRef.current = false;

    const id = window.setTimeout(() => {
      const root = contentInnerRef.current;
      if (!root) return;

      const first = root.querySelector<HTMLElement>(
        'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])',
      );
      first?.focus();
      if (focusOnOpenId === value) {
        clearFocusOnOpen();
      }
    }, 0);
    return () => window.clearTimeout(id);
  }, [open, value, focusOnOpenId, clearFocusOnOpen]);

  return (
    <Accordion.Item
      value={value}
      className={`${styles.item} ${className ?? ""}`}
      data-open={open}
      data-step-status={status}
      data-state={open ? "open" : "closed"}
    >
      <div ref={headerRef} className={styles.headerRow}>
        <Accordion.Trigger
          className={`${styles.trigger} ${triggerClassName ?? ""}`}
          disabled={triggerIsDisabled}
          onClick={(e) => {
            if (triggerIsDisabled) {
              e.preventDefault();
              e.stopPropagation();
              return;
            }
            shouldFocusContentRef.current = true;
            ctx?.toggle(value);
            requestAnimationFrame(() =>
              headerRef.current?.scrollIntoView({ block: "nearest" }),
            );
          }}
        >
          {" "}
          <div className={styles.triggerLeft}>
            <h2>{title}</h2>
            {status === "complete" && (
              <CheckCircleIcon className={styles.checkIcon} />
            )}
          </div>
        </Accordion.Trigger>
        {status === "complete" && !open && (
          <button
            type="button"
            className={styles.editLink}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              shouldFocusContentRef.current = true;
              ctx.toggle(value);
            }}
          >
            Ändra
          </button>
        )}
      </div>

      <Accordion.Content
        className={`${styles.content} ${contentClassName ?? ""}`}
      >
        <div ref={contentInnerRef} className={styles.contentInner}>
          {children}
        </div>
      </Accordion.Content>
      {summary ? <div className={styles.summary}>{summary}</div> : null}
    </Accordion.Item>
  );
}
