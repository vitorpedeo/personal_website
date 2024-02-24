import { defineField, defineType } from "sanity"

export const post = defineType({
	name: 'post',
	type: 'document',
	title: 'Post',
	preview: {
		select: {
      title: 'title',
      subtitle: 'excerpt',
			media: 'image'
    },
		prepare(selection, viewOptions) {
			const title = (selection.title as { _key: string; value: string }[]).find(t => t._key === 'en')?.value ?? 'Untitled';
			const subtitle = (selection.subtitle as { _key: string; value: string }[]).find(t => t._key === 'en')?.value ?? '';
			const media = selection.media;

			return {
				title,
				subtitle,
				media,
			};
		},
	},
	fields: [
		defineField({
			name: 'title',
			type: 'internationalizedArrayString',
			title: 'Title',
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			title: 'Slug',
			options: {
				source: (doc, options) => (doc.title as { _key: string; value: string }[]).find(t => t._key === 'en')?.value ?? 'slug',
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
			type: 'internationalizedArrayText',
			title: 'Excerpt',
		}),
		defineField({
			name: 'content',
			type: 'internationalizedArrayContent',
		}),
		defineField({
			name: 'tags',
			type: 'array',
			title: 'Tags',
			of: [ { type: 'string' } ]
		}),
	],
});
