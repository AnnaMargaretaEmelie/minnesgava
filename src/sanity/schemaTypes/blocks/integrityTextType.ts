import { defineField, defineType } from "sanity";

export const integrityTextType = defineType({
    name: 'integrityText', 
    type: 'object',
    fields: [
        defineField({
            name: 'text', 
            type: 'array',
            of: [{type: 'block'}],
        })
    ]
})