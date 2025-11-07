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

type AccordionContextType = {
  openId: string | null;
  toggle: (id: string) => void;
  isOpen: (id: string) => boolean;
};

const AccordionCtx = createContext<AccordionContextType | undefined>(undefined);

export const useAccordion = () => {
  const ctx = useContext(AccordionCtx);
  if (!ctx) throw new Error("useAccordion must be used within <Accordion>");
  return ctx;
};

type AccordionProps = {
  defaultOpenId?: string | null;
  children: React.ReactNode;
};

export function AccordionRoot({
  defaultOpenId = null,
  children,
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  const toggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  const isOpen = useCallback((id: string) => openId === id, [openId]);

  const value = useMemo(
    () => ({ openId, toggle, isOpen }),
    [openId, toggle, isOpen]
  );

  return (
    <AccordionCtx.Provider value={value}>
      <Accordion.Root
        type="single"
        collapsible
        value={openId ?? undefined}
        onValueChange={(val) => setOpenId(val ?? null)}
      >
        {children}
      </Accordion.Root>
    </AccordionCtx.Provider>
  );
}
