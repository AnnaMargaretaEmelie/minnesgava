"use client";

import Step1Content from "@/app/_components/steps/memorial-page-step/Step1Content";

type Step1Copy = {
  title?: string | null;
  text?: any;
};

type Step1RecipientProps = {
  copy: Step1Copy;
};

export function Step1Recipient({ copy }: Step1RecipientProps) {
  function handleStep1Complete(step1Data: {
    recipientId: string;
    imageId: string;
  }) {
    console.log("Step 1 data: ", step1Data);
    //gå till nästa steg i Accordion när den är kopplad
  }
  const firstBlock = Array.isArray(copy.text) ? copy.text[0] : null;
  const FirstBlockText =
    firstBlock && Array.isArray(firstBlock.children)
      ? firstBlock.children.map((child: any) => child.text).join(" ")
      : null;
  return (
    <section>
      <h2>{copy.title ?? "Titel saknas"}</h2>
      {FirstBlockText && <p>{FirstBlockText}</p>}
      <Step1Content onComplete={handleStep1Complete} />
    </section>
  );
}
