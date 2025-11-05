import { defineField, defineType } from "sanity";

export const helpCalloutType = defineType({
    name: 'helpCallout', 
    type: 'object',
    fields: [
        defineField({
            name: 'helpText', 
            type: 'string',
        })
    ]
})