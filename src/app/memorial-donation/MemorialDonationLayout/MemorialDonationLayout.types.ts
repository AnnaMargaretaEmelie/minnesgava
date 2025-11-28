import type { MemorialPageCopy } from "../sections/MemorialPageSection/MemorialPageSection.types";
import type { AmountSectionCopy } from "../sections/AmountSection/AmountSection.types";
import type { DonorContactSectionCopy } from "../sections/DonorContactSection/DonorContactSection.types";

export type MemorialDonationLayoutProps = {
    memorialPageCopy: MemorialPageCopy;
    amountCopy: AmountSectionCopy;
    donorCopy: DonorContactSectionCopy;
};