import { defineField, defineType } from "sanity"

export const project = defineType({
	name: 'project',
	type: 'document',
	title: 'Project',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			title: 'Title',
		}),
		defineField({
			name: 'description',
			type: 'internationalizedArrayText',
			title: 'description',
		}),
		defineField({
			name: 'image',
			type: 'image',
			title: 'Image'
		}),
		defineField({
			name: 'repoLink',
			type: 'url',
			title: 'Repo Link',
		}),
		defineField({
			name: 'liveLink',
			type: 'url',
			title: 'Live Link',
		}),
		defineField({
			name: 'techs',
			type: 'array',
			title: 'Techs',
			of: [ { type: 'reference', to: { type: 'tech' } } ],
			options: {
				disableNew: true,
			}
		}),
	],
});
