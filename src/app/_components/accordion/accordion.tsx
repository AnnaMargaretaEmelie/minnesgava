//Wrapper m context och Accordion.Root

"use client";

import React from "react";
import {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
} from "react";
import * as Accordion from "@radix-ui/react-accordion";

type StepStatus = "current" | "complete" | "locked";
type StepStatuses = Record<string, StepStatus>;

type AccordionContextType = {
  openId: string | null;
  toggle: (id: string) => void;
  isOpen: (id: string) => boolean;
  statuses: Record<string, StepStatus>;
  getStatus: (id: string) => StepStatus | undefined;
  canTriggerClick: (id: string) => boolean;
  goNext: (id: string, s: StepStatus) => void;
};

const AccordionCtx = createContext<AccordionContextType | undefined>(undefined);

export const useAccordion = () => {
  const ctx = useContext(AccordionCtx);
  if (!ctx) throw new Error("useAccordion must be used within <Accordion>");
  return ctx;
};

type AccordionProps = {
  defaultOpenId?: string | null;
  order: string[];
  children: React.ReactNode;
};

export function AccordionRoot({
  defaultOpenId = null,
  order,
  children,
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(
    defaultOpenId ?? order[0]
  );
  const [statuses, setStatuses] = useState<Record<string, StepStatus>>(() => {
    const initial: Record<string, StepStatus> = {};
    order.forEach((id, i) => {
      initial[id] = i === 0 ? "current" : "locked";
    });
    return initial;
  });

  const setStatus = useCallback((id: string, s: StepStatus) => {
    setStatuses((prev) => ({ ...prev, [id]: s }));
  }, []);

  const getStatus = useCallback((id: string) => statuses[id], [statuses]);

  const canTriggerClick = useCallback(
    (id: string) => getStatus(id) === "complete",
    [getStatus]
  );

  const toggle = useCallback(
    (id: string) => {
      if (!canTriggerClick(id)) return;
      setOpenId(id);
    },
    [canTriggerClick]
  );

  const isOpen = useCallback((id: string) => openId === id, [openId]);

  const goNext = useCallback(
    (currentId: string) => {
      const idx = order.indexOf(currentId);
      if (idx === -1) return;

      const nextId = order[idx + 1];
      setStatuses((prev) => {
        const next = { ...prev };
        next[currentId] = "complete";
        if (nextId) {
          next[nextId] = "current";
        }
        return next;
      });
      if (nextId) {
        setOpenId(nextId);
      } else {
        // om det inte finns någon nästa - bestäm vad som händer
        setOpenId(currentId); //eller null
      }
    },
    [order]
  );

  const value = useMemo(
    () => ({
      openId,
      toggle,
      isOpen,
      statuses,
      getStatus,
      canTriggerClick,
      goNext,
      setStatus,
    }),
    [
      openId,
      toggle,
      isOpen,
      statuses,
      getStatus,
      canTriggerClick,
      goNext,
      setStatus,
    ]
  );

  return (
    <AccordionCtx.Provider value={value}>
      <Accordion.Root
        type="single"
        collapsible
        value={openId ?? undefined}
        onValueChange={(val) => {
          if (val && !canTriggerClick(val)) return;
          setOpenId(val ?? null);
        }}
      >
        {children}
      </Accordion.Root>
    </AccordionCtx.Provider>
  );
}
