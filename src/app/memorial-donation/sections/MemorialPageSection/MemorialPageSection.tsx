"use client";

import MemorialPageStep from "@/app/components/steps/memorial-page-step/MemorialPageStep/MemorialPageStep";
import type { MemorialPageSectionProps } from "./MemorialPageSection.types";
import styles from "./MemorialPageSection.module.scss";
import { PortableText } from "next-sanity";
import { useAccordion } from "@/app/components/accordion/Accordion/Accordion";

export function MemorialPageSection({
  copy,
  onSummaryChange,
}: MemorialPageSectionProps) {
  const ctx = useAccordion();

  function handleMemorialPageComplete(memorialPageStepData: {
    recipientId: string;
    imageId: string;
    summary: string;
  }) {
    onSummaryChange?.(memorialPageStepData.summary);
    ctx.goNext("memorial-card-step");
  }

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>{copy.title ?? "Titel saknas"}</h3>
      {copy.text && (
        <div className={styles.copy}>
          <PortableText value={copy.text} />
        </div>
      )}
      <MemorialPageStep onComplete={handleMemorialPageComplete} />
    </section>
  );
}
