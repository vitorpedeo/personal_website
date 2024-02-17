import { defineField, defineType } from "sanity"

export const tech = defineType({
	name: 'tech',
	type: 'document',
	title: 'Tech',
	fields: [
		defineField({
			name: 'name',
			type: 'string',
			title: 'Name'
		}),
		defineField({
			name: 'color',
			type: 'color',
			title: 'Color'
		}),
		defineField({
			name: 'logo',
			type: 'image',
			title: 'Logo'
		}),
	],
});
