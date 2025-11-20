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
      <div>
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
                width={80}
                height={80}
                className={styles.thumbnail}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
