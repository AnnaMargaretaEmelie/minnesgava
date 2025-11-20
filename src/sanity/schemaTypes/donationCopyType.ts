import { defineField, defineType } from "sanity"

export const donationCopyType = defineType ({
    name: 'donationCopy',
    title: 'Minnesgåva - Copy',
    type: 'document',

    fields: [
        defineField({
            name: 'heroIntro', 
            title: 'Rubrik och intro',
            options: {collapsible: true},
            type: 'object', 
            fields: [
                { 
                name: 'introSection',
                title: 'Huvudrubrik och ingress',
                type: 'sectionWithTitle',
            },
            ],
        }),

        defineField({
            name: 'memorialCard', 
            title: 'Minnesblad',
            options: {collapsible: true},
            type: 'object', 
            fields: [
                { 
                    name: 'introSection', 
                    title: 'Underrubrik och ingress',
                    type: 'sectionWithTitle',
                }, 
                ],
        }),

        defineField({ 
            name: 'donationAmount', 
            title: 'Gåvobelopp',
            options: {collapsible: true},
            type: 'object', 
            fields: [
                { 
                    name: 'introSection', 
                    title: 'Underrubrik och ingress',
                    type: 'sectionWithTitle', 
                }, 
                {
                    name: 'infoText', 
                    title: 'Information',
                    description: 'Informationsruta om skatteavdrag',
                    type: 'array', 
                    of: [{type: 'block'}],
                },
                    ],
                }),

        defineField({
            name: 'donorDetails', 
            title: 'Kontaktuppgifter',
            description: 'Rubrik och ingress',
            options: {collapsible: true},
            type: 'object', 
            fields: [
                { 
                    name:'introSection', 
                    title: 'Underrubrik och ingress',
                    type:'sectionWithTitle', 
                },
                {
                    name: 'integrity',
                    title: 'Integritetspolicy',
                    type: 'integrityText',
                }
            ],
        }),

        defineField({
            name: 'thankYouText', 
            title: 'Tacktext',
            description: 'En tacktext med bekräftelse',
            options: {collapsible: true},
            type: 'object', 
            fields: [
                { 
                    name: 'title', 
                    title: 'Rubrik',
                    type: 'string'
                }, 
                {
                    name: 'text', 
                    type: 'array', 
                    of: [{type: 'block'}],
                },
            ],
        }),
        
    ]

})