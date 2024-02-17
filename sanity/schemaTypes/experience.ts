import { defineField, defineType } from "sanity"

export const experience = defineType({
	name: 'experience',
	type: 'document',
	title: 'Experience',
	fields: [
		defineField({
			name: 'company',
			type: 'string',
			title: 'Company',
		}),
		defineField({
			name: 'localization',
			type: 'internationalizedArrayString',
			title: 'Localization',
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
			name: 'role',
			type: 'internationalizedArrayText',
			title: 'Role',
		}),
		defineField({
			name: 'responsibilities',
			type: 'internationalizedArrayResponsibilities',
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
