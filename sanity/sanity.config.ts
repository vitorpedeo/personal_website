import {defineConfig, defineField} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {documentInternationalization} from '@sanity/document-internationalization'
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
				})
			],
    }),
		documentInternationalization({
			supportedLanguages: [
				{ id: 'en', title: 'English'},
				{ id: 'pt', title: 'Portuguese'},
			],
			schemaTypes: ['post'],
		})
	],

  schema: {
    types: schemaTypes,
  },
})
