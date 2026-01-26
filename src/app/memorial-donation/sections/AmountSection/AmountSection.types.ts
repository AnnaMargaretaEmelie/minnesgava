import type { COPY_QUERYResult } from "../../../../../sanity/types";

export type AmountSectionCopy = NonNullable<NonNullable<COPY_QUERYResult>['donationAmount']>

export type AmountSectionProps = {
    copy: AmountSectionCopy;
};

