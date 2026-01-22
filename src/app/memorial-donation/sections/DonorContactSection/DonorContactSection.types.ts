import type { COPY_QUERYResult } from "../../../../../sanity/types";

export type DonorContactSectionCopy = NonNullable<NonNullable<COPY_QUERYResult>['donorDetails']>

export type DonorContactSectionProps = {
    copy: DonorContactSectionCopy;
};

export type DonorFormValuesType = {
    donor: {
        firstName: string;
        lastName: string;
        adress?: string;
        postalCode?: string; 
        postalArea?: string;
        email: string;
        phone: string; 
    }
}