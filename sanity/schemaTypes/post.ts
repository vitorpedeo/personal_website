import { defineField, defineType } from "sanity"

export const post = defineType({
	name: 'post',
	type: 'document',
	title: 'Post',
	fields: [
		defineField({
			name: 'language',
			type: 'string',
			readOnly: true,
			hidden: true,
		}),
		defineField({
			name: 'title',
			type: 'string',
			title: 'Title',
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			options: {
				source: 'title',
				maxLength: 200,
			},
		}),
		defineField({
			name: 'image',
			type: 'image',
			title: 'Image'
		}),
		defineField({
			name: 'excerpt',
			type: 'text',
			title: 'Excerpt',
		}),
		defineField({
			name: 'content',
			type: 'array',
			title: 'Content',
			of: [ { type: 'block' } ]
		}),
		defineField({
			name: 'tags',
			type: 'array',
			title: 'Tags',
			of: [ { type: 'string' } ]
		}),
		defineField({
			name: 'publishDate',
			type: 'datetime',
			title: 'Publish Date',
			initialValue: () => new Date().toISOString(),
			readOnly: true,
		}),
	],
});
