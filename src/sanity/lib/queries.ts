
import { defineQuery } from "next-sanity"

export const SETTINGS_QUERY =
defineQuery(`*[_type == 'donationSettings'][0]{
    currency,
    presetAmounts,
    minAmount
}`)

export const MESSAGE_QUERY =
defineQuery(`*[_type == 'presetMessage'] | order(label asc) [0...20]{
    label,
    text
}`)

export const COPY_QUERY = defineQuery(`*[_type == 'donationCopy'][0] {

    heroIntro {
        introSection {
            title,
            text
        }
    },
    step1Recipient {
        step1Section {
            title,
            text
        }
    },
    step2Amount {
        step2Section{
            title, 
            text
        },
        text
    },
    step3Donor {
        step3Section{
            title,
            text
        },
        integrity {
            text
        }
    },
    thankYouText {
        title,
        text
    }
}`)