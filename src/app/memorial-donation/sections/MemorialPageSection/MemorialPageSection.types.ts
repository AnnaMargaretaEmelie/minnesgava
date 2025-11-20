import type { COPY_QUERYResult } from "../../../../../sanity/types";

export type MemorialPageCopy = NonNullable<
NonNullable<
NonNullable<COPY_QUERYResult>["memorialCard"]
>["introSection"]>;

export type MemorialPageSectionProps = {
  copy: MemorialPageCopy;
};
