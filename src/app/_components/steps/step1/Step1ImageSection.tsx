"use client";

import Step1ImagePicker from "./Step1ImagePicker";
import { Step1Image } from "@/data/step1Images";

type Step1ImageSectionProps = {
  images: Step1Image[];
  selectedImageId: string | null;
  onSelectImage: (id: string) => void;
  canGoNext: boolean;
  onNext: () => void;
};

export function Step1ImageSection({
  images,
  selectedImageId,
  onSelectImage,
}: Step1ImageSectionProps) {
  return (
    <>
      <Step1ImagePicker
        images={images}
        selectedImageId={selectedImageId}
        onSelectImage={onSelectImage}
      />
    </>
  );
}
