
export type ImageItem = {
  id: string;
  src: string;
  alt: string;
};

export type ImagePickerProps = {
  images: ImageItem[];
  selectedImageId: string | null;
  onSelectImage: (id: string) => void;
};