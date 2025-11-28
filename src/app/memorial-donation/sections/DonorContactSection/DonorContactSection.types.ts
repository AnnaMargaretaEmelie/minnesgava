import type { COPY_QUERYResult } from "../../../../../sanity/types";

export type DonorContactSectionCopy = NonNullable<NonNullable<COPY_QUERYResult>['donorDetails']>

export type DonorContactSectionProps = {
    copy: DonorContactSectionCopy;
};