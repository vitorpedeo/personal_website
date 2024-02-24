import {defineConfig, defineField} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'

import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'vitorpedeo.dev',

  projectId: 'wfkb3nxs',
  dataset: 'production',

  plugins: [
		structureTool(),
		visionTool(),
		colorInput(),
		internationalizedArray({
      languages: [
        {id: 'en', title: 'English'},
        {id: 'pt', title: 'Portuguese'}
      ],
      defaultLanguages: ['pt'],
      fieldTypes: [
				'string',
				'text',
				defineField({
					name: 'responsibilities',
					type: 'array',
					title: 'Responsibilities',
					of: [ { type: 'text' } ]
				}),
				defineField({
					name: 'content',
					type: 'array',
					title: 'Content',
					of: [ { type: 'block' } ]
				})
			],
    }),
	],

  schema: {
    types: schemaTypes,
  },
})
