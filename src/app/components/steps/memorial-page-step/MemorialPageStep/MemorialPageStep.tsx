"use client";

//logik och state
import { MOCK_RECIPIENTS, Recipient } from "@/data/recipients.mock";
import { useState, useEffect, useRef } from "react";
import { MEMORIAL_PAGE_IMAGES } from "@/data/memorialPageImages";
import { RecipientSection } from "../RecipientSection/RecipientSection";
import { GreetingSection } from "../GreetingSection/GreetingSection";
import { ImageSection } from "../ImageSection/ImageSection";
import { StepPrimaryButton } from "../../../StepPrimaryButton/StepPrimaryButton";
import { MemorialPageStepProps } from "./MemorialPageStep.types";
import { useFormContext, useWatch, useFormState } from "react-hook-form";
import type { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types";
import styles from "./MemorialPageStep.module.scss";
import { MemorialPreviewDialog } from "../MemorialPreviewDialog/MemorialPreviewDialog";

export default function MemorialPageStep({
  onComplete,
}: MemorialPageStepProps) {
  const { control, trigger, register } =
    useFormContext<DonationFormValuesType>();

  const { errors } = useFormState({ control });

  const recipientId = useWatch({ control, name: "memorialPage.recipientId" });
  const imageId = useWatch({ control, name: "memorialPage.imageId" });
  const greeting = useWatch({ control, name: "memorialPage.greeting" });

  const selectedRecipient = recipientId
    ? (MOCK_RECIPIENTS.find((r) => r.id === recipientId) ?? null)
    : null;

  const selectedImage =
    MEMORIAL_PAGE_IMAGES.find((i) => i.id === imageId) ??
    MEMORIAL_PAGE_IMAGES[0];

  const fullName = selectedRecipient
    ? `${selectedRecipient.firstName} ${selectedRecipient.lastName}`
    : "Ingen mottagare vald";

  const [searchTerm, setSearchTerm] = useState("");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const focusRecipientSearchRef = useRef<(() => void) | null>(null);
  const returnToEditRef = useRef(false);
  const openPreviewRef = useRef<HTMLButtonElement | null>(null);

  const handlePreviewOpenChange = (nextOpen: boolean) => {
    setIsPreviewOpen(nextOpen);
    if (nextOpen) return;

    window.setTimeout(() => {
      if (returnToEditRef.current) {
        returnToEditRef.current = false;
        focusRecipientSearchRef.current?.();
        return;
      }
      openPreviewRef.current?.focus();
    }, 50);
  };

  const filteredRecipients: Recipient[] =
    searchTerm.trim().length === 0
      ? []
      : MOCK_RECIPIENTS.filter((recipient) => {
          const query = searchTerm.toLowerCase();

          return (
            recipient.firstName.toLowerCase().includes(query) ||
            recipient.lastName.toLowerCase().includes(query)
          );
        });

  useEffect(() => {
    register("memorialPage.recipientId", { required: "Välj en mottagare" });
  }, [register]);

  async function handleNext() {
    const isValid = await trigger(
      ["memorialPage.recipientId", "memorialPage.greeting"],
      {
        shouldFocus: true,
      },
    );

    if (!isValid) return;

    if (!selectedRecipient || !imageId) return;

    setIsPreviewOpen(true);
  }

  function handleConfirm() {
    if (!selectedRecipient || !imageId) return;

    setIsPreviewOpen(false);
    onComplete({
      recipientId: selectedRecipient.id,
      imageId,
    });
  }

  return (
    <>
      <div className={styles.stepWrapper}>
        <RecipientSection
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filteredRecipients={filteredRecipients}
          selectedRecipient={selectedRecipient}
          register={register}
          control={control}
          hasError={Boolean(errors.memorialPage?.recipientId)}
          errorMessage={errors.memorialPage?.recipientId?.message}
          onFocusReady={(focus) => {
            focusRecipientSearchRef.current = focus;
          }}
        />
        <GreetingSection
          register={register}
          control={control}
          hasError={Boolean(errors.memorialPage?.greeting)}
          errorMessage={errors.memorialPage?.greeting?.message}
        />

        <ImageSection images={MEMORIAL_PAGE_IMAGES} register={register} />
        <StepPrimaryButton
          ref={openPreviewRef}
          type="button"
          label="Välj belopp"
          onClick={handleNext}
        />
      </div>
      <MemorialPreviewDialog
        imageSrc={selectedImage.src}
        imageAlt={selectedImage.alt}
        fullName={fullName}
        greeting={greeting}
        open={isPreviewOpen}
        onOpenChange={handlePreviewOpenChange}
        onConfirm={handleConfirm}
        onEdit={() => {
          returnToEditRef.current = true;
        }}
      />
    </>
  );
}
