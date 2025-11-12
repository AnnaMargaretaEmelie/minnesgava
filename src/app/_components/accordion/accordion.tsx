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
  statuses: StepStatuses;
  getStatus: (id: string) => StepStatus | undefined;
  canTriggerClick: (id: string) => boolean;
  goNext: (currentId: string) => void;
  setStatus: (id: string, s: StepStatus) => void;
};

const AccordionCtx = createContext<AccordionContextType | undefined>(undefined);

export const useAccordion = () => {
  const ctx = useContext(AccordionCtx);
  if (!ctx) throw new Error("useAccordion must be used within <Accordion>");
  return ctx;
};

type AccordionProps = {
  defaultOpenId?: string | null;
  order?: string[];
  children: React.ReactNode;
};

type AccordionChildProps = {
  value: string;
};

function isAccordionChild(
  node: React.ReactNode
): node is React.ReactElement<AccordionChildProps> {
  return (
    React.isValidElement(node) &&
    typeof (node.props as { value?: unknown }).value == "string"
  );
}

export function AccordionRoot({
  defaultOpenId = null,
  order,
  children,
}: AccordionProps) {
  const stepIds = React.useMemo(() => {
    if (order && order.length) return order;
    return React.Children.toArray(children)
      .filter(isAccordionChild)
      .map((el) => el.props.value);
  }, [order, children]);

  if (process.env.NODE_ENV !== "production" && stepIds.length === 0) {
    console.error(
      "[AccordionRoot] Hittade inga steg. Skicka order eller ge varje child en value-prop"
    );
  }
  const [openId, setOpenId] = useState<string | null>(
    defaultOpenId ?? stepIds[0] ?? null
  );
  const [statuses, setStatuses] = useState<StepStatuses>(() => {
    const initial: StepStatuses = Object.create(null);
    stepIds.forEach((id, i) => {
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
      const idx = stepIds.indexOf(currentId);
      if (idx === -1) return;

      const nextId = stepIds[idx + 1];
      setStatuses((prev) => {
        const next = { ...prev };
        next[currentId] = "complete";
        if (nextId) {
          next[nextId] = "current";
        }
        return next;
      });
      setOpenId(nextId ?? currentId);
    },
    [stepIds]
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
