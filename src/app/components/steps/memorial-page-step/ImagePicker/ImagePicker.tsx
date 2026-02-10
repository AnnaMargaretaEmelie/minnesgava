"use client";

import Image from "next/image";
import type { ImagePickerProps } from "./ImagePicker.types";
import styles from "./ImagePicker.module.scss";

export default function ImagePicker({ images, register }: ImagePickerProps) {
  return (
    <div>
      <div className={styles.pickerWrapper}>
        {images.map((image) => (
          <div key={image.id} className={styles.item}>
            <input
              type="radio"
              id={image.id}
              value={image.id}
              {...register("memorialPage.imageId")}
              className={styles.radio}
            />

            <label htmlFor={image.id} className={styles.label}>
              <Image
                src={image.src}
                alt={image.alt}
                width={100}
                height={100}
                className={styles.thumbnail}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
