export default {
	name: 'experience',
	type: 'document',
	title: 'Experience',
	fields: [
		{
			name: 'company',
			type: 'string',
			title: 'Company'
		},
		{
			name: 'localization',
			type: 'string',
			title: 'Localization'
		},
		{
			name: 'isCurrent',
			type: 'boolean',
			title: 'Current'
		},
		{
			name: 'startDate',
			type: 'date',
			title: 'Start Date'
		},
		{
			name: 'endDate',
			type: 'date',
			title: 'End Date',
			hidden: ({document}: { document: { isCurrent: boolean } }) => document.isCurrent
		},
		{
			name: 'role',
			type: 'text',
			title: 'Role'
		},
		{
			name: 'responsibilities',
			type: 'array',
			title: 'Responsibilities',
			of: [ { type: 'text' } ]
		},
		{
			name: 'techs',
			type: 'array',
			title: 'Techs',
			of: [ { type: 'reference', to: { type: 'tech' } } ]
		},
	]
}
