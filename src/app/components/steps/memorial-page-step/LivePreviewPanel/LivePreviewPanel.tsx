import { MemorialPreviewContent } from "../MemorialPreviewContent/MemorialPreviewContent";
import { useSelectedRecipient } from "../hooks/useSelectedRecipient";
import { MEMORIAL_PAGE_IMAGES } from "@/data/memorialPageImages";
import styles from "./LivePreviewPanel.module.scss";
import { useFormContext, useWatch } from "react-hook-form";
import { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types";

export function LivePreviewPanel() {
  const { fullName } = useSelectedRecipient();
  const { control } = useFormContext<DonationFormValuesType>();
  const imageId = useWatch({ control, name: "memorialPage.imageId" });
  const greeting = useWatch({ control, name: "memorialPage.greeting" });

  const selectedImage =
    MEMORIAL_PAGE_IMAGES.find((i) => i.id === imageId) ??
    MEMORIAL_PAGE_IMAGES[0];

  if (!selectedImage) return null;

  return (
    <div className={styles.panel}>
      <h2>Din minneshälsning</h2>
      <div className={styles.frame}>
        <div className={styles.scaled}>
          <MemorialPreviewContent
            imageSrc={selectedImage.src}
            imageAlt={selectedImage.alt}
            fullName={fullName}
            greeting={greeting}
          />
        </div>
      </div>
    </div>
  );
}
