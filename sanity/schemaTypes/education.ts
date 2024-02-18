import { defineField, defineType } from "sanity"

export const education = defineType({
	name: 'education',
	type: 'document',
	title: 'Education',
	fields: [
		defineField({
			name: 'institution',
			type: 'string',
			title: 'Institution',
		}),
		defineField({
			name: 'degree',
			type: 'internationalizedArrayString',
			title: 'Degree',
		}),
		defineField({
			name: 'isCurrent',
			type: 'boolean',
			title: 'Current',
		}),
		defineField({
			name: 'startDate',
			type: 'date',
			title: 'Start Date',
		}),
		defineField({
			name: 'endDate',
			type: 'date',
			title: 'End Date',
			hidden: ({ parent }) => parent.isCurrent,
		}),
		defineField({
			name: 'summary',
			type: 'internationalizedArrayText',
			title: 'Summary',
		}),
	],
});
