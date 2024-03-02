import { defineField, defineType } from "sanity"

export const education = defineType({
	name: 'education',
	type: 'document',
	title: 'Education',
	preview: {
		select: {
      title: 'institution',
    },
		prepare(selection, viewOptions) {
			const title = (selection.title as { _key: string; value: string }[]).find(t => t._key === 'pt')?.value ?? '';

			return {
				title,
			};
		},
	},
	fields: [
		defineField({
			name: 'institution',
			type: 'internationalizedArrayString',
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
