"use client";

import ImagePicker from "../ImagePicker/ImagePicker";
import type { ImageSectionProps } from "./ImageSection.types";
import styles from "./ImageSection.module.scss";

export function ImageSection({ images, register }: ImageSectionProps) {
  return (
    <section className={styles.ImageSection}>
      <ImagePicker images={images} register={register} />
    </section>
  );
}
