"use client";

//logik och state
import { MOCK_RECIPIENTS, Recipient } from "@/data/recipients.mock";
import { useState } from "react";
import RecipientSearch from "./Step1RecipientSearch";
import Step1RecipientInfo from "./Step1RecipientInfo";
import Step1ImagePicker from "./Step1ImagePicker";

type Step1Image = {
  id: string;
  src: string;
  alt: string;
};

const STEP1_IMAGES: Step1Image[] = [
  {
    id: "red-rose",
    src: "/images/red_rose.png",
    alt: "Röd ros",
  },
  {
    id: "white-lilly",
    src: "/images/white_lilly.png",
    alt: "Vit lilja",
  },
  { id: "magnolia", src: "/images/magnolia.png", alt: "Magnolia" },
  { id: "dove", src: "/images/dove.png", alt: "Duva" },
];

export default function Step1Content() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState<Recipient | null>(
    null
  );
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

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

  function handleSearchChange(value: string) {
    setSearchTerm(value);
  }

  function handleSelectRecipient(recipient: Recipient) {
    setSelectedRecipient(recipient);
  }

  function handleSelectImage(imageId: string) {
    setSelectedImageId(imageId);
  }

  return (
    <>
      <RecipientSearch
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        results={filteredRecipients}
        onSelectRecipient={handleSelectRecipient}
      />
      {selectedRecipient && (
        <>
          <Step1RecipientInfo recipient={selectedRecipient} />
          <Step1ImagePicker
            images={STEP1_IMAGES}
            selectedImageId={selectedImageId}
            onSelectImage={handleSelectImage}
          />{" "}
        </>
      )}
    </>
  );
}
