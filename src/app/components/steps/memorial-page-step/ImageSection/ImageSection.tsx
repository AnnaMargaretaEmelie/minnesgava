"use client";

import ImagePicker from "../ImagePicker/ImagePicker";
import type { ImageSectionProps } from "./ImageSection.types";
import styles from "./ImageSection.module.scss";

export function ImageSection({ images, register }: ImageSectionProps) {
  return (
    <section className={styles.ImageSection}>
      <h4 className={styles.heading}>Välj motiv</h4>
      <ImagePicker images={images} register={register} />
    </section>
  );
}
