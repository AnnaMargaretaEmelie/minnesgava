import type { ImageItem } from "../ImagePicker/ImagePicker.types";

export type ImageSectionProps = {
  images: ImageItem[];
  selectedImageId: string | null;
  onSelectImage: (id: string) => void;
  canGoNext?: boolean;
  onNext?: () => void;
};