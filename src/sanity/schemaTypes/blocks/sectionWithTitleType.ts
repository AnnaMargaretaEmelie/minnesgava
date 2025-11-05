import { defineType, defineField } from "sanity";

export const sectionWithTitleType = defineType({
    name: 'sectionWithTitle',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Rubrik',
            type: 'string',

        }),
        defineField({
            name: 'text',
            title: 'Text',
            type: 'array', 
            of: [{type: 'block'}],
        })
    ]
})