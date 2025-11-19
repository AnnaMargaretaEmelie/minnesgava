"use client";

import ImagePicker from "../ImagePicker/ImagePicker";
import type { ImageSectionProps } from "./ImageSection.types";
import styles from "./ImageSection.module.scss";

export function ImageSection({
  images,
  selectedImageId,
  onSelectImage,
}: ImageSectionProps) {
  return (
    <>
      <section className={styles.ImageSection}>
        <h2 className={styles.heading}></h2>
        <ImagePicker
          images={images}
          selectedImageId={selectedImageId}
          onSelectImage={onSelectImage}
        />
      </section>
    </>
  );
}
