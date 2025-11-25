import Image from "next/image";
import type { ImagePickerProps } from "./ImagePicker.types";
import styles from "./ImagePicker.module.scss";

export default function ImagePicker({
  images,
  selectedImageId,
  onSelectImage,
}: ImagePickerProps) {
  return (
    <div>
      <p>Välj motiv</p>
      <div className={styles.pickerWrapper}>
        {images.map((image) => {
          const isSelected = image.id === selectedImageId;

          return (
            <button
              key={image.id}
              type="button"
              onClick={() => onSelectImage(image.id)}
              className={
                isSelected ? styles.imageButtonSelected : styles.imageButton
              }
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={100}
                height={100}
                className={styles.thumbnail}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
