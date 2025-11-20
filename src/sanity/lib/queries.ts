
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
    memorialCard {
        introSection {
            title,
            text
        }
    },
    donationAmount {
        introSection{
            title, 
            text
        },
        infoText
    },
    donorDetails {
        introSection{
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