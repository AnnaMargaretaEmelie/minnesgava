"use client";

import MemorialPageStep from "@/app/components/steps/memorial-page-step/MemorialPageStep/MemorialPageStep";
import type { MemorialPageSectionProps } from "./MemorialPageSection.types";
import styles from "./MemorialPageSection.module.scss";
import { PortableText } from "next-sanity";
import { useAccordion } from "@/app/components/accordion/accordion";

export function MemorialPageSection({ copy }: MemorialPageSectionProps) {
  const ctx = useAccordion();

  function handleMemorialPageComplete(memorialPageStepData: {
    recipientId: string;
    imageId: string;
  }) {
    console.log("Memorial page data: ", memorialPageStepData);
    ctx.goNext("memorial-card-step");
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{copy.title ?? "Titel saknas"}</h2>
      {copy.text && (
        <div className={styles.copy}>
          <PortableText value={copy.text} />
        </div>
      )}
      <MemorialPageStep onComplete={handleMemorialPageComplete} />
    </section>
  );
}
