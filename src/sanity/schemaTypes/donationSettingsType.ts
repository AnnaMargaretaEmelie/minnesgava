import { defineField, defineType } from "sanity"


export const donationSettingsType = defineType ({
    name: 'donationSettings',
    title: 'Inställningar',
    type: 'document',

    fields: [
        defineField({
            name: 'presetAmounts', type: 'array', of: [{type: 'number'}], title: 'Förslag på belopp'
        }),

        defineField({
            name: 'currency', type: 'string', initialValue: 'SEK'
        }),
        defineField({
            name: 'minAmount', type: 'number', initialValue: 50
        }),
    ]

})