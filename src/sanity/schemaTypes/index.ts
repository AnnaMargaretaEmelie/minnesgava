import { type SchemaTypeDefinition } from 'sanity'
import { presetMessageType } from './presetMessageType'
import { donationSettingsType } from './donationSettingsType'
import { donationCopyType } from './donationCopyType'

import { sectionWithTitleType } from './blocks/sectionWithTitleType'
import { integrityTextType } from './blocks/integrityTextType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    donationSettingsType,
    presetMessageType,
    donationCopyType,
    //helpCalloutType,
    sectionWithTitleType,
    integrityTextType,
  ],
}
