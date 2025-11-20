import type { COPY_QUERYResult } from "../../../../../sanity/types";

type Step1Section = NonNullable<
  NonNullable<
    NonNullable<COPY_QUERYResult>["step1Recipient"]
  >["step1Section"]
>;

export type MemorialPageCopy = Step1Section;

export type MemorialPageSectionProps = {
  copy: MemorialPageCopy;
};
