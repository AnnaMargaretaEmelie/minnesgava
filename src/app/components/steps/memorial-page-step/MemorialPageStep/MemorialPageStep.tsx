"use client";

//logik och state
import { MOCK_RECIPIENTS, Recipient } from "@/data/recipients.mock";
import { useState, useEffect } from "react";
import { MEMORIAL_PAGE_IMAGES } from "@/data/memorialPageImages";
import { RecipientSection } from "../RecipientSection/RecipientSection";
import { GreetingSection } from "../GreetingSection/GreetingSection";
import { ImageSection } from "../ImageSection/ImageSection";
import { StepPrimaryButton } from "../../../StepPrimaryButton/StepPrimaryButton";
import { MemorialPageStepProps } from "./MemorialPageStep.types";
import { useFormContext, useWatch, useFormState } from "react-hook-form";
import type { DonationFormValuesType } from "@/app/memorial-donation/types/memorialDonationForm.types";
import styles from "./MemorialPageStep.module.scss";

export default function MemorialPageStep({
  onComplete,
}: MemorialPageStepProps) {
  const { control, trigger, register } =
    useFormContext<DonationFormValuesType>();

  const { errors } = useFormState({ control });

  const recipientId = useWatch({ control, name: "memorialPage.recipientId" });
  const imageId = useWatch({ control, name: "memorialPage.imageId" });

  const selectedRecipient = recipientId
    ? (MOCK_RECIPIENTS.find((r) => r.id === recipientId) ?? null)
    : null;

  const [searchTerm, setSearchTerm] = useState("");

  const canGoNext = selectedRecipient !== null;

  const filteredRecipients: Recipient[] =
    searchTerm.trim().length === 0
      ? []
      : MOCK_RECIPIENTS.filter((recipient) => {
          const query = searchTerm.toLocaleLowerCase();

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

    const fullName = `${selectedRecipient.firstName} ${selectedRecipient.lastName}`;
    const summary = `${fullName}, ${selectedRecipient.city}`;

    onComplete({
      recipientId: selectedRecipient.id,
      imageId,
      summary,
    });
  }

  return (
    <div className={styles.stepWrapper}>
      <RecipientSection
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filteredRecipients={filteredRecipients}
        selectedRecipient={selectedRecipient}
        register={register}
        hasError={Boolean(errors.memorialPage?.recipientId)}
        errorMessage={errors.memorialPage?.recipientId?.message}
      />
      <GreetingSection
        register={register}
        control={control}
        hasError={Boolean(errors.memorialPage?.greeting)}
        errorMessage={errors.memorialPage?.greeting?.message}
      />

      <ImageSection
        images={MEMORIAL_PAGE_IMAGES}
        register={register}
        canGoNext={canGoNext}
        onNext={handleNext}
      />
      <StepPrimaryButton
        type="button"
        label="Välj belopp"
        onClick={handleNext}
      ></StepPrimaryButton>
    </div>
  );
}
