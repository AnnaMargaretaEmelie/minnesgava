export type DonationFormValuesType = {
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
        purpose?: string;
    }
}