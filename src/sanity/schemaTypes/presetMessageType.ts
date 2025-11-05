import { defineField, defineType } from "sanity";

export const presetMessageType = defineType({
    name: 'presetMessage', 
    type: 'document', 
    title: 'Förvalt meddelande', 
    fields: [
        defineField({
            name: 'label', type: 'string', title: 'Rubrik/etikett',
        }),

        defineField({
            name: 'text', type: 'text', title: 'Meddelande'
        }),
    ]
})