"use client";

import MemorialPageStep from "@/app/components/steps/memorial-page-step/MemorialPageStep/MemorialPageStep";
import type { MemorialPageSectionProps } from "./MemorialPageSection.types";
import styles from "./MemorialPageSection.module.scss";
import { PortableText } from "next-sanity";

export function MemorialPageSection({ copy }: MemorialPageSectionProps) {
  function handleMemorialPageComplete(memorialPageStepData: {
    recipientId: string;
    imageId: string;
  }) {
    console.log("Memorial page data: ", memorialPageStepData);
    //gå till nästa steg i Accordion när den är kopplad
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
