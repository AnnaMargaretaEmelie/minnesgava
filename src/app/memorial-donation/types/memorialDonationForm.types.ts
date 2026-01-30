import { PurposeValueType } from "../sections/AmountSection/amountPurpose.options";

export type DonationFormValuesType = {
    memorialPage: {
        recipientId?: string | null;
        imageId?: string | null;
        greeting?: string | null;
    }

    donor: {
        firstName: string;
        lastName: string;
        adress?: string;
        postalCode?: string;
        postalArea?: string;
        email: string;
        phone: string;
    }

    amount: {
        value?: number | null;
        preset?: "1000" | "500" | "100" | "custom";
        purpose?: PurposeValueType;
        hasSelectedPreset?: boolean;
    }
}