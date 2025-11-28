import { DonorContactSectionProps } from "./DonorContactSection.types";
import { PortableText } from "next-sanity";

export function DonorContactSection({ copy }: DonorContactSectionProps) {
  return (
    <div>
      {copy.introSection?.title && <h2>{copy.introSection.title}</h2>}

      {copy.introSection?.text && (
        <PortableText value={copy.introSection.text} />
      )}
    </div>
  );
}
