import { cookies } from 'next/headers';

import { imageBuilder, sanityClient } from '@/lib/sanity';
import { IEducation, IExperience } from '@/types';

export async function fetchAboutMe() {
	const experienceQuery = `
		*[_type == "experience"] {
			company,
			"localization": localization[_key == $locale][0].value,
			startDate,
			endDate,
			"role": role[_key == $locale][0].value,
			"responsibilities": responsibilities[_key == $locale][0].value,
			"techs": techs[]-> { name, logo }
		}
	`;
	const educationQuery = `
		*[_type == "education"] {
			institution,
			"degree": degree[_key == $locale][0].value,
			startDate,
			endDate,
			"summary": summary[_key == $locale][0].value,
		}
	`;

	const cookiesStore = cookies();
	const locale = cookiesStore.get('NEXT_LOCALE')?.value ?? 'pt';

	const experiences = await sanityClient.fetch<IExperience[]>(experienceQuery, {
		locale,
	});
	const educations = await sanityClient.fetch<IEducation[]>(educationQuery, {
		locale,
	});

	const result = {
		educations,
		experiences: experiences.map(exp => ({
			...exp,
			techs: exp.techs.map(tech => ({
				...tech,
				logo: imageBuilder.image(tech.logo).width(12).url(),
			})),
		})),
	};

	return result;
}
