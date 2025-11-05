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
            name: 'step1Recipient', 
            title: 'Steg 1 - Minnesblad',
            options: {collapsible: true},
            type: 'object', 
            fields: [
                { 
                    name: 'step1Section', 
                    title: 'Underrubrik och ingress',
                    type: 'sectionWithTitle',
                }, 
                ],
        }),

        defineField({ 
            name: 'step2Amount', 
            title: 'Steg 2 - Gåvobelopp',
            options: {collapsible: true},
            type: 'object', 
            fields: [
                { 
                    name: 'step2Section', 
                    title: 'Underrubrik och ingress',
                    type: 'sectionWithTitle', 
                }, 
                {
                    name: 'text', 
                    title: 'Information',
                    description: 'Informationsruta om skatteavdrag',
                    type: 'array', 
                    of: [{type: 'block'}],
                },
                    ],
                }),

        defineField({
            name: 'step3Donor', 
            title: 'Steg 3 - Kontaktuppgifter',
            description: 'Rubrik och ingress till steg 3',
            options: {collapsible: true},
            type: 'object', 
            fields: [
                { 
                    name:'step3Section', 
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