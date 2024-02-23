import { imageBuilder, sanityClient } from '@/lib/sanity';
import { IProject } from '@/types';
import { getLocale } from '@/utils';

export async function fetchProjects() {
	const projectQuery = `
		*[_type == "project"] {
			title,
			"description": description[_key == $locale][0].value,
			image,
			repoLink,
			liveLink,
			"techs": techs[]-> { name, "color": color.hex }
		}
	`;

	const locale = getLocale();

	const projects = await sanityClient.fetch<IProject[]>(projectQuery, {
		locale,
	});

	const result = projects.map(project => ({
		...project,
		image: imageBuilder.image(project.image).url(),
	}));

	return result;
}
